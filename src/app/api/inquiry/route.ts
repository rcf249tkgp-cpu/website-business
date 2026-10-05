import { randomBytes } from 'node:crypto'
import { NextResponse, type NextRequest } from 'next/server'
import { siteConfig } from '@/config/site'
import { defaultLocale, isLocale } from '@/i18n/config'
import { inquiryWebhookUrl, postWebhook, withRetry } from '@/lib/inquiry/delivery'
import { businessEmail, customerEmail } from '@/lib/inquiry/email-templates'
import { getMailer, inquiryRecipients } from '@/lib/inquiry/mailer'
import { rateLimited, verifyTurnstile } from '@/lib/inquiry/spam'
import { automatedReason, originAllowed, type SpamReason } from '@/lib/inquiry/spam-rules'
import type { InquiryResponse } from '@/lib/inquiry/types'
import { coerceInquiry, validateInquiry } from '@/lib/inquiry/validation'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const MAX_BODY_BYTES = 32 * 1024

function reply(body: InquiryResponse, status: number) {
  return NextResponse.json(body, { status, headers: { 'Cache-Control': 'no-store' } })
}

function clientIp(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
  return forwarded || request.headers.get('x-real-ip') || 'unknown'
}

function newReference(): string {
  const date = new Date().toISOString().slice(2, 10).replace(/-/g, '')
  const prefix =
    siteConfig.name
      .replace(/[^a-z]/gi, '')
      .slice(0, 2)
      .toUpperCase() || 'RQ'
  return `${prefix}-${date}-${randomBytes(3).toString('hex').toUpperCase()}`
}

/** Log why a submission was treated as spam, so it shows up in the hosting logs. */
function spam(reason: SpamReason | 'turnstile', status: number, detail = '') {
  console.warn(`[inquiry] spam: ${reason}${detail ? ` (${detail})` : ''}`)
  return reply({ ok: false, error: 'spam' }, status)
}

export async function POST(request: NextRequest) {
  if (!originAllowed(request.headers, process.env.NEXT_PUBLIC_SITE_URL)) {
    const host = request.headers.get('x-forwarded-host') ?? request.headers.get('host')
    return spam('origin', 403, `origin ${request.headers.get('origin')}, host ${host}`)
  }

  const length = Number(request.headers.get('content-length') || 0)
  if (length > MAX_BODY_BYTES) return reply({ ok: false, error: 'validation' }, 413)

  let body: Record<string, unknown>
  try {
    const raw = await request.text()
    if (raw.length > MAX_BODY_BYTES) return reply({ ok: false, error: 'validation' }, 413)
    body = JSON.parse(raw)
  } catch {
    return reply({ ok: false, error: 'validation' }, 400)
  }

  const ip = clientIp(request)
  if (rateLimited(ip)) return reply({ ok: false, error: 'rateLimited' }, 429)

  const reason = automatedReason({ honeypot: body.hp, elapsedMs: body.elapsedMs, startedAt: body.startedAt })
  if (reason) {
    const detail = reason === 'too fast' ? `elapsedMs ${String(body.elapsedMs ?? 'missing')}` : ''
    return spam(reason, 400, detail)
  }
  if (!(await verifyTurnstile(body.turnstileToken, ip === 'unknown' ? null : ip))) {
    return spam('turnstile', 400)
  }

  const locale = isLocale(body.locale) ? body.locale : defaultLocale
  const data = coerceInquiry(body.data)
  const fields = validateInquiry(data)
  if (Object.keys(fields).length > 0) return reply({ ok: false, error: 'validation', fields }, 422)

  const mailer = getMailer()
  const webhook = inquiryWebhookUrl()
  if (!mailer && !webhook) {
    console.error(
      '[inquiry] No delivery channel configured — set RESEND_API_KEY, SMTP_HOST or INQUIRY_WEBHOOK_URL (see README).',
    )
    return reply({ ok: false, error: 'notConfigured' }, 503)
  }

  const reference = newReference()
  const message = businessEmail(data, locale, reference)
  let delivered = false

  if (mailer) {
    try {
      await withRetry(() => mailer.send({ to: inquiryRecipients(), replyTo: data.email, ...message }))
      delivered = true
    } catch (error) {
      console.error(`[inquiry] Email delivery of ${reference} via ${mailer.name} failed:`, error)
    }
  }

  if (webhook) {
    try {
      await withRetry(() => postWebhook(webhook, { reference, locale, data, summary: message.text }))
      delivered = true
    } catch (error) {
      console.error(`[inquiry] Webhook delivery of ${reference} failed:`, error)
    }
  }

  if (!delivered) return reply({ ok: false, error: 'server' }, 502)

  // The inquiry itself is delivered at this point. The customer copy is a
  // courtesy: if it fails we still succeed, but tell the UI not to claim it was sent.
  let confirmationSent = false
  if (mailer && process.env.SEND_CUSTOMER_CONFIRMATION !== 'false') {
    try {
      const confirmation = customerEmail(data, locale, reference)
      await withRetry(() => mailer.send({ to: data.email, replyTo: inquiryRecipients(), ...confirmation }))
      confirmationSent = true
    } catch (error) {
      console.error(`[inquiry] Customer confirmation for ${reference} failed:`, error)
    }
  }

  return reply({ ok: true, reference, confirmationSent }, 200)
}
