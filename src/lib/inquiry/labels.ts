import { siteConfig } from '@/config/site'
import { format } from '@/i18n/format'
import { localeTags, type Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n'

function money(amount: number, locale: Locale): string {
  return new Intl.NumberFormat(localeTags[locale], {
    style: 'currency',
    currency: siteConfig.currency,
    maximumFractionDigits: 0,
  }).format(amount)
}

/** Human-readable budget label, e.g. "€5,000 – €10,000" (formatted per language). */
export function budgetLabel(id: string, locale: Locale, form: Dictionary['form']): string {
  if (id === 'unsure') return form.budgetUnsure
  const range = siteConfig.budgetRanges.find((b) => b.id === id)
  if (!range) return id
  if (range.max === null) return format(form.budgetAbove, { amount: money(range.min, locale) })
  return `${money(range.min, locale)} – ${money(range.max, locale)}`
}

/** Long, localized date, e.g. "Tuesday, 14 October 2026". */
export function meetingDateLabel(date: string, locale: Locale): string {
  const parsed = new Date(`${date}T12:00:00Z`)
  if (Number.isNaN(parsed.getTime())) return date
  return new Intl.DateTimeFormat(localeTags[locale], {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(parsed)
}

/** Short name of the studio's time zone, e.g. "EEST". */
export function timezoneLabel(locale: Locale, date = new Date()): string {
  const parts = new Intl.DateTimeFormat(localeTags[locale], {
    timeZone: siteConfig.meetingTimezone,
    timeZoneName: 'short',
  }).formatToParts(date)
  return parts.find((p) => p.type === 'timeZoneName')?.value ?? siteConfig.meetingTimezone
}
