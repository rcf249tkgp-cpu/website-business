import 'server-only'
import { siteConfig } from '@/config/site'
import { getDictionary } from '@/i18n'
import { localeNames, type Locale } from '@/i18n/config'
import { format } from '@/i18n/format'
import { budgetLabel, meetingDateLabel, timezoneLabel } from './labels'
import { normalizeWebsite, type InquiryData } from './validation'

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

type Row = [label: string, value: string]

/** Field labels + values for an inquiry, translated into `locale`. */
function summaryRows(data: InquiryData, locale: Locale): Row[] {
  const dict = getDictionary(locale)
  const { labels } = dict.form
  const featureNames = data.features.map((f) => dict.form.features[f as keyof typeof dict.form.features] ?? f)
  return [
    [labels.company, data.company],
    [labels.name, data.name],
    [labels.email, data.email],
    [labels.phone, data.phone],
    [labels.website, normalizeWebsite(data.website) ?? '—'],
    [
      labels.websiteType,
      dict.form.websiteTypes[data.websiteType as keyof typeof dict.form.websiteTypes] ?? data.websiteType,
    ],
    [labels.features, featureNames.length ? featureNames.join(', ') : '—'],
    [labels.budget, budgetLabel(data.budget, locale, dict.form)],
    [labels.timeline, dict.form.timelines[data.timeline as keyof typeof dict.form.timelines] ?? data.timeline],
    [
      labels.meetingDate,
      `${meetingDateLabel(data.meetingDate, locale)}, ${data.meetingTime} (${timezoneLabel(locale)})`,
    ],
    [
      labels.meetingFormat,
      dict.form.meetingFormats[data.meetingFormat as keyof typeof dict.form.meetingFormats] ?? data.meetingFormat,
    ],
    [labels.description, data.description],
  ]
}

function layout(title: string, inner: string): string {
  return `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>${escapeHtml(title)}</title></head>
<body style="margin:0;background:#f4f4f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#111827">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f7;padding:32px 12px"><tr><td align="center">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:16px;overflow:hidden">
<tr><td style="background:#05070d;padding:24px 32px;color:#ffffff;font-size:18px;font-weight:600;letter-spacing:-0.01em">${escapeHtml(siteConfig.name)}<span style="color:#4d8dff">.</span></td></tr>
<tr><td style="padding:32px">${inner}</td></tr>
</table></td></tr></table></body></html>`
}

function rowsHtml(rows: Row[]): string {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-size:14px">${rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:10px 12px 10px 0;border-bottom:1px solid #eceef3;color:#6b7280;vertical-align:top;width:38%">${escapeHtml(label)}</td><td style="padding:10px 0;border-bottom:1px solid #eceef3;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`,
    )
    .join('')}</table>`
}

function rowsText(rows: Row[]): string {
  return rows.map(([label, value]) => `${label}: ${value}`).join('\n')
}

/** Internal notification sent to the business. Always in English. */
export function businessEmail(data: InquiryData, locale: Locale, reference: string) {
  const rows = summaryRows(data, 'en')
  rows.push(['Language', localeNames[locale]], ['Reference', reference])
  const subject = `New project inquiry: ${data.company} (${getDictionary('en').form.websiteTypes[data.websiteType as 'business'] ?? data.websiteType})`
  const html = layout(
    subject,
    `<h1 style="margin:0 0 8px;font-size:22px">New project inquiry</h1>
<p style="margin:0 0 24px;color:#4b5563;font-size:14px">The meeting time below is the customer's <strong>preference only</strong> — please confirm or propose a new time by replying to this email.</p>
${rowsHtml(rows)}`,
  )
  const text = `New project inquiry (${reference})\n\nThe meeting time is the customer's preference only — confirm it by replying.\n\n${rowsText(rows)}`
  return { subject, html, text }
}

/** Acknowledgement sent to the customer, in the language they used. */
export function customerEmail(data: InquiryData, locale: Locale, reference: string) {
  const dict = getDictionary(locale)
  const e = dict.email
  const rows = summaryRows(data, locale)
  rows.push([dict.form.success.reference, reference])
  const vars = { company: siteConfig.name, name: data.name.split(' ')[0] || data.name }
  const meetingNote = format(e.meetingNote, {
    date: meetingDateLabel(data.meetingDate, locale),
    time: data.meetingTime,
    format: dict.form.meetingFormats[data.meetingFormat as keyof typeof dict.form.meetingFormats] ?? data.meetingFormat,
  })
  const subject = format(e.subject, vars)
  const paragraphs = [format(e.greeting, vars), format(e.intro, vars)]
  const html = layout(
    subject,
    `${paragraphs.map((p) => `<p style="margin:0 0 16px;font-size:15px;line-height:1.6">${escapeHtml(p)}</p>`).join('')}
<p style="margin:0 0 24px;padding:14px 16px;background:#eef4ff;border-left:3px solid #2f7bff;border-radius:8px;font-size:14px;line-height:1.5">${escapeHtml(meetingNote)}</p>
<h2 style="margin:0 0 8px;font-size:16px">${escapeHtml(e.summaryTitle)}</h2>
${rowsHtml(rows)}
<p style="margin:24px 0 0;font-size:14px;color:#4b5563">${escapeHtml(e.reply)}</p>
<p style="margin:16px 0 0;font-size:15px">${escapeHtml(e.signoff)}<br>${escapeHtml(format(e.team, vars))}<br>
${siteConfig.contact.people.map((p) => `<span style="color:#6b7280;font-size:13px">${escapeHtml(p.name)} · ${escapeHtml(p.email)} · ${escapeHtml(p.phone)}</span>`).join('<br>')}</p>`,
  )
  const text = `${paragraphs.join('\n\n')}\n\n${meetingNote}\n\n${e.summaryTitle}\n${rowsText(rows)}\n\n${e.reply}\n\n${e.signoff}\n${format(e.team, vars)}\n${siteConfig.contact.people.map((p) => `${p.name} · ${p.email} · ${p.phone}`).join('\n')}`
  return { subject, html, text }
}
