import 'server-only'
import nodemailer from 'nodemailer'
import { primaryContact, siteConfig } from '@/config/site'

export interface MailMessage {
  to: string | string[]
  subject: string
  html: string
  text: string
  replyTo?: string | string[]
}

export interface Mailer {
  name: 'resend' | 'smtp' | 'console'
  send(message: MailMessage): Promise<void>
}

/**
 * Where new inquiries are delivered: INQUIRY_TO_EMAIL, comma-separated for
 * several inboxes. Falls back to the main contact only, because Resend can
 * deliver only to the account owner until a domain is verified.
 */
export function inquiryRecipients(): string[] {
  const fromEnv = (process.env.INQUIRY_TO_EMAIL ?? '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
  return fromEnv.length ? fromEnv : [primaryContact.email]
}

function sender(): string {
  // Resend's shared test sender works before your own domain is verified.
  return process.env.MAIL_FROM?.trim() || `${siteConfig.name} <onboarding@resend.dev>`
}

function resendMailer(apiKey: string): Mailer {
  return {
    name: 'resend',
    async send(message) {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: sender(),
          to: Array.isArray(message.to) ? message.to : [message.to],
          subject: message.subject,
          html: message.html,
          text: message.text,
          reply_to: message.replyTo,
        }),
        signal: AbortSignal.timeout(10_000),
      })
      if (!res.ok) {
        const detail = await res.text().catch(() => '')
        throw new Error(`Resend responded ${res.status}: ${detail.slice(0, 300)}`)
      }
    },
  }
}

function smtpMailer(): Mailer {
  const port = Number(process.env.SMTP_PORT || 587)
  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === 'true' : port === 465,
    auth: process.env.SMTP_USER ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS } : undefined,
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
  })
  return {
    name: 'smtp',
    async send(message) {
      await transport.sendMail({ from: sender(), ...message })
    },
  }
}

/** Logs emails instead of sending them. Only available outside production. */
function consoleMailer(): Mailer {
  return {
    name: 'console',
    async send(message) {
      console.info(
        `\n[mail:console] To: ${[message.to].flat().join(', ')}\nSubject: ${message.subject}\n\n${message.text}\n`,
      )
    },
  }
}

/**
 * Pick the mail provider from the environment. Returns null when nothing is
 * configured — the API then reports the form as unavailable instead of
 * silently dropping inquiries.
 */
export function getMailer(): Mailer | null {
  const provider = process.env.MAIL_PROVIDER?.trim().toLowerCase()
  const resendKey = process.env.RESEND_API_KEY?.trim()

  if (provider === 'console') {
    return process.env.NODE_ENV === 'production' ? null : consoleMailer()
  }
  if ((provider === 'resend' || !provider) && resendKey) return resendMailer(resendKey)
  if ((provider === 'smtp' || !provider) && process.env.SMTP_HOST) return smtpMailer()
  return null
}
