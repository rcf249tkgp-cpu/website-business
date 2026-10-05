import type { FieldErrors } from './validation'

export type InquiryErrorCode = 'validation' | 'spam' | 'rateLimited' | 'notConfigured' | 'server'

export type InquiryResponse =
  | { ok: true; reference: string; confirmationSent: boolean }
  | { ok: false; error: InquiryErrorCode; fields?: FieldErrors }

export interface InquiryRequest {
  data: unknown
  locale: string
  /** Epoch ms when the form was first shown (client clock). */
  startedAt: number
  /** Time spent on the form, measured on the client's own clock — used to detect bots. */
  elapsedMs?: number
  /** Honeypot: must stay empty. */
  hp: string
  turnstileToken?: string
}
