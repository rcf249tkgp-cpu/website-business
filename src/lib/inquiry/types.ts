import type { FieldErrors } from './validation'

export type InquiryErrorCode = 'validation' | 'spam' | 'rateLimited' | 'notConfigured' | 'server'

export type InquiryResponse =
  | { ok: true; reference: string; confirmationSent: boolean }
  | { ok: false; error: InquiryErrorCode; fields?: FieldErrors }

export interface InquiryRequest {
  data: unknown
  locale: string
  /** Epoch ms when the form was first shown — used to detect bots. */
  startedAt: number
  /** Honeypot: must stay empty. */
  hp: string
  turnstileToken?: string
}
