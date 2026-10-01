import { randomBytes } from 'node:crypto'
import { NextResponse, type NextRequest } from 'next/server'
import { siteConfig } from '@/config/site'
import { defaultLocale, isLocale } from '@/i18n/config'
import { businessEmail, customerEmail } from '@/lib/inquiry/email-templates'
import { getMailer, inquiryRecipient } from '@/lib/inquiry/mailer'
import { looksAutomated, rateLimited, verifyTurnstile } from '@/lib/inquiry/spam'
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

/** Reject cross-site form posts (only when the browser tells us the origin). */
function sameOrigin(request: NextRequest): boolean {
  const origin = request.headers.get('origin')
  if (!origin) return true
  const host = request.headers.get('x-forwarded-host') ?? request.headers.get('host')
  try {
    return new URL(origin).host === host
  } catch {
    return false
  }
}

export async function POST(request: NextRequest) {
  if (!sameOrigin(request)) return reply({ ok: false, error: 'spam' }, 403)

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

  if (looksAutomated({ honeypot: body.hp, startedAt: body.startedAt })) {
    return reply({ ok: false, error: 'spam' }, 400)
  }
  if (!(await verifyTurnstile(body.turnstileToken, ip === 'unknown' ? null : ip))) {
    return reply({ ok: false, error: 'spam' }, 400)
  }

  const locale = isLocale(body.locale) ? body.locale : defaultLocale
  const data = coerceInquiry(body.data)
  const fields = validateInquiry(data)
  if (Object.keys(fields).length > 0) return reply({ ok: false, error: 'validation', fields }, 422)

  const mailer = getMailer()
  if (!mailer) {
    console.error('[inquiry] No mail provider configured — set RESEND_API_KEY or SMTP_HOST (see README).')
    return reply({ ok: false, error: 'notConfigured' }, 503)
  }

  const reference = newReference()

  try {
    const message = businessEmail(data, locale, reference)
    await mailer.send({ to: inquiryRecipient(), replyTo: data.email, ...message })
  } catch (error) {
    console.error(`[inquiry] Failed to deliver inquiry ${reference} via ${mailer.name}:`, error)
    return reply({ ok: false, error: 'server' }, 502)
  }

  // The inquiry itself is delivered at this point. The customer copy is a
  // courtesy: if it fails we still succeed, but tell the UI not to claim it was sent.
  let confirmationSent = false
  if (process.env.SEND_CUSTOMER_CONFIRMATION !== 'false') {
    try {
      const message = customerEmail(data, locale, reference)
      await mailer.send({ to: data.email, replyTo: inquiryRecipient(), ...message })
      confirmationSent = true
    } catch (error) {
      console.error(`[inquiry] Customer confirmation for ${reference} failed:`, error)
    }
  }

  return reply({ ok: true, reference, confirmationSent }, 200)
}
