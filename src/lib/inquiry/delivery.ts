import 'server-only'
import type { Locale } from '@/i18n/config'
import type { InquiryData } from './validation'

/** Run `task`, retrying once after a short pause. Covers brief network or provider hiccups. */
export async function withRetry<T>(task: () => Promise<T>, retries = 1, delayMs = 800): Promise<T> {
  try {
    return await task()
  } catch (error) {
    if (retries <= 0) throw error
    await new Promise((resolve) => setTimeout(resolve, delayMs))
    return withRetry(task, retries - 1, delayMs * 2)
  }
}

/** Optional second delivery channel: Slack/Teams incoming webhooks, Zapier, Make, n8n… */
export function inquiryWebhookUrl(): string | null {
  const url = process.env.INQUIRY_WEBHOOK_URL?.trim()
  // HTTPS only, except for a local endpoint during development and tests.
  return url && /^(https:\/\/|http:\/\/(localhost|127\.0\.0\.1)[:/])/.test(url) ? url : null
}

export async function postWebhook(
  url: string,
  payload: { reference: string; locale: Locale; data: InquiryData; summary: string },
) {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    // `text` makes the message readable in Slack/Teams; the rest is for automation tools.
    body: JSON.stringify({ text: payload.summary, ...payload }),
    signal: AbortSignal.timeout(8_000),
  })
  if (!res.ok) throw new Error(`Webhook responded ${res.status}`)
}
