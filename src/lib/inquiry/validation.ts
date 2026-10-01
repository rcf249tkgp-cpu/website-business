/**
 * Inquiry form model + validation, shared by the browser and the API route so
 * both enforce exactly the same rules. Errors are returned as codes; the UI
 * maps them to translated messages.
 *
 * Imports use explicit `.ts` extensions so this module also runs under
 * `node --test` without a bundler.
 */
import { siteConfig } from '../../config/site.ts'

export const websiteTypes = ['business', 'ecommerce', 'landing', 'redesign', 'webapp', 'unsure'] as const
export const featureIds = [
  'cms',
  'booking',
  'multilingual',
  'blog',
  'seo',
  'payments',
  'integrations',
  'analytics',
  'accessibility',
  'branding',
] as const
export const timelines = ['asap', '1-3', '3-6', 'flexible'] as const
export const meetingFormats = ['video', 'phone', 'inPerson'] as const
export const budgetIds = [...siteConfig.budgetRanges.map((b) => b.id), 'unsure'] as const

export type WebsiteType = (typeof websiteTypes)[number]
export type FeatureId = (typeof featureIds)[number]
export type Timeline = (typeof timelines)[number]
export type MeetingFormat = (typeof meetingFormats)[number]

export interface InquiryData {
  websiteType: string
  features: string[]
  description: string
  budget: string
  timeline: string
  company: string
  name: string
  email: string
  phone: string
  website: string
  meetingDate: string
  meetingTime: string
  meetingFormat: string
  consent: boolean
}

export type InquiryField = keyof InquiryData

export const emptyInquiry: InquiryData = {
  websiteType: '',
  features: [],
  description: '',
  budget: '',
  timeline: '',
  company: '',
  name: '',
  email: '',
  phone: '',
  website: '',
  meetingDate: '',
  meetingTime: '',
  meetingFormat: 'video',
  consent: false,
}

/** Which fields belong to which step of the multi-step form. */
export const formSteps = [
  { id: 'project', fields: ['websiteType', 'features', 'description'] },
  { id: 'budget', fields: ['budget', 'timeline'] },
  { id: 'details', fields: ['company', 'name', 'email', 'phone', 'website'] },
  { id: 'meeting', fields: ['meetingDate', 'meetingTime', 'meetingFormat', 'consent'] },
] as const satisfies readonly { id: string; fields: readonly InquiryField[] }[]

export type FormStepId = (typeof formSteps)[number]['id']

export type ErrorCode =
  | 'required'
  | 'email'
  | 'phone'
  | 'url'
  | 'tooShort'
  | 'tooLong'
  | 'selectOne'
  | 'dateInPast'
  | 'weekend'
  | 'consent'

export interface FieldError {
  code: ErrorCode
  params?: Record<string, number>
}

export type FieldErrors = Partial<Record<InquiryField, FieldError>>

export const limits = {
  descriptionMin: 20,
  descriptionMax: 4000,
  textMax: 120,
  emailMax: 254,
  websiteMax: 200,
} as const

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const PHONE_RE = /^\+?[\d\s().-]{6,24}$/
const HOSTNAME_RE = /^(?=.{1,253}$)([a-z0-9-]{1,63}\.)+[a-z]{2,63}$/i
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/

/** Today's date (YYYY-MM-DD) in the given IANA time zone. */
export function todayIn(timeZone: string, now: Date = new Date()): string {
  return new Intl.DateTimeFormat('en-CA', { timeZone, year: 'numeric', month: '2-digit', day: '2-digit' }).format(now)
}

/** Add days to a YYYY-MM-DD date string. */
export function addDays(date: string, days: number): string {
  const d = new Date(`${date}T12:00:00Z`)
  d.setUTCDate(d.getUTCDate() + days)
  return d.toISOString().slice(0, 10)
}

export function isWeekend(date: string): boolean {
  const day = new Date(`${date}T12:00:00Z`).getUTCDay()
  return day === 0 || day === 6
}

/** Earliest selectable meeting date: the next weekday after today (studio time). */
export function earliestMeetingDate(now: Date = new Date()): string {
  let date = addDays(todayIn(siteConfig.meetingTimezone, now), 1)
  while (isWeekend(date)) date = addDays(date, 1)
  return date
}

/** Accepts `example.com`, `www.example.com/path` or full http(s) URLs. Returns a normalized URL or null. */
export function normalizeWebsite(value: string): string | null {
  const trimmed = value.trim()
  if (!trimmed) return null
  try {
    const url = new URL(/^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`)
    if (!['http:', 'https:'].includes(url.protocol) || !HOSTNAME_RE.test(url.hostname)) return null
    return url.toString()
  } catch {
    return null
  }
}

function text(value: unknown): string {
  return typeof value === 'string' ? value.trim() : ''
}

/** Like `text`, but collapses line breaks and control characters (safe for email headers). */
function line(value: unknown): string {
  return text(value).replace(/[\u0000-\u001f\u007f]+/g, ' ')
}

function validateField(field: InquiryField, data: InquiryData, now: Date): FieldError | undefined {
  switch (field) {
    case 'websiteType':
      return (websiteTypes as readonly string[]).includes(data.websiteType) ? undefined : { code: 'selectOne' }
    case 'features':
      return Array.isArray(data.features) && data.features.every((f) => (featureIds as readonly string[]).includes(f))
        ? undefined
        : { code: 'selectOne' }
    case 'description': {
      const v = text(data.description)
      if (!v) return { code: 'required' }
      if (v.length < limits.descriptionMin) return { code: 'tooShort', params: { min: limits.descriptionMin } }
      if (v.length > limits.descriptionMax) return { code: 'tooLong', params: { max: limits.descriptionMax } }
      return undefined
    }
    case 'budget':
      return (budgetIds as readonly string[]).includes(data.budget) ? undefined : { code: 'selectOne' }
    case 'timeline':
      return (timelines as readonly string[]).includes(data.timeline) ? undefined : { code: 'selectOne' }
    case 'company':
    case 'name': {
      const v = text(data[field])
      if (!v) return { code: 'required' }
      if (v.length > limits.textMax) return { code: 'tooLong', params: { max: limits.textMax } }
      return undefined
    }
    case 'email': {
      const v = text(data.email)
      if (!v) return { code: 'required' }
      if (v.length > limits.emailMax || !EMAIL_RE.test(v)) return { code: 'email' }
      return undefined
    }
    case 'phone': {
      const v = text(data.phone)
      if (!v) return { code: 'required' }
      const digits = v.replace(/\D/g, '')
      if (!PHONE_RE.test(v) || digits.length < 6 || digits.length > 15) return { code: 'phone' }
      return undefined
    }
    case 'website': {
      const v = text(data.website)
      if (!v) return undefined
      if (v.length > limits.websiteMax || !normalizeWebsite(v)) return { code: 'url' }
      return undefined
    }
    case 'meetingDate': {
      const v = text(data.meetingDate)
      if (!v) return { code: 'required' }
      if (!DATE_RE.test(v) || Number.isNaN(Date.parse(`${v}T12:00:00Z`))) return { code: 'required' }
      if (v <= todayIn(siteConfig.meetingTimezone, now)) return { code: 'dateInPast' }
      if (isWeekend(v)) return { code: 'weekend' }
      return undefined
    }
    case 'meetingTime':
      return (siteConfig.meetingSlots as readonly string[]).includes(data.meetingTime)
        ? undefined
        : { code: 'selectOne' }
    case 'meetingFormat':
      return (meetingFormats as readonly string[]).includes(data.meetingFormat) ? undefined : { code: 'selectOne' }
    case 'consent':
      return data.consent === true ? undefined : { code: 'consent' }
  }
}

/** Validate the given fields (default: all). Returns an empty object when valid. */
export function validateInquiry(
  data: InquiryData,
  fields: readonly InquiryField[] = formSteps.flatMap((s) => s.fields),
  now: Date = new Date(),
): FieldErrors {
  const errors: FieldErrors = {}
  for (const field of fields) {
    const error = validateField(field, data, now)
    if (error) errors[field] = error
  }
  return errors
}

/** Coerce untrusted JSON into an InquiryData shape (no validation). */
export function coerceInquiry(input: unknown): InquiryData {
  const src = (input && typeof input === 'object' ? input : {}) as Record<string, unknown>
  return {
    websiteType: line(src.websiteType),
    features: Array.isArray(src.features)
      ? src.features.filter((f): f is string => typeof f === 'string').slice(0, 20)
      : [],
    description: text(src.description),
    budget: line(src.budget),
    timeline: line(src.timeline),
    company: line(src.company),
    name: line(src.name),
    email: line(src.email),
    phone: line(src.phone),
    website: line(src.website),
    meetingDate: line(src.meetingDate),
    meetingTime: line(src.meetingTime),
    meetingFormat: line(src.meetingFormat),
    consent: src.consent === true,
  }
}
