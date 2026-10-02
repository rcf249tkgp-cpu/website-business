'use client'

import { useState, type RefObject } from 'react'
import type { Dictionary } from '@/i18n'
import type { Locale } from '@/i18n/config'
import { format } from '@/i18n/format'
import { meetingDateLabel } from '@/lib/inquiry/labels'
import { Alert, Calendar, Check } from '../Icons'
import styles from './InquiryForm.module.css'

export interface SuccessResult {
  reference: string
  confirmationSent: boolean
  name: string
  email: string
  meetingDate: string
  meetingTime: string
  meetingFormat: string
}

interface Props {
  lang: Locale
  dict: Pick<Dictionary, 'form'>
  result: SuccessResult
  schedulingUrl: string
  headingRef: RefObject<HTMLHeadingElement | null>
  onReset: () => void
}

/** Build the embeddable scheduling URL with the customer's details prefilled (Calendly-compatible). */
function embedUrl(base: string, result: SuccessResult): string | null {
  try {
    const url = new URL(base)
    url.searchParams.set('embed_type', 'Inline')
    url.searchParams.set('embed_domain', window.location.hostname)
    url.searchParams.set('hide_gdpr_banner', '1')
    url.searchParams.set('name', result.name)
    url.searchParams.set('email', result.email)
    url.searchParams.set('date', result.meetingDate.slice(0, 7))
    return url.toString()
  } catch {
    return null
  }
}

export function SuccessScreen({ lang, dict, result, schedulingUrl, headingRef, onReset }: Props) {
  const s = dict.form.success
  const [showCalendar, setShowCalendar] = useState(false)
  const calendarSrc = schedulingUrl && showCalendar ? embedUrl(schedulingUrl, result) : null
  const meetingFormat =
    dict.form.meetingFormats[result.meetingFormat as keyof Dictionary['form']['meetingFormats']] ?? result.meetingFormat

  return (
    <div className={styles.success}>
      <div className={styles.successIcon} aria-hidden="true">
        <Check />
      </div>
      <h2 ref={headingRef} tabIndex={-1} className={styles.successTitle}>
        {s.title}
      </h2>
      <p className={styles.successText} role="status">
        {s.description}
        {result.confirmationSent && <> {format(s.copySent, { email: result.email })}</>}
      </p>
      <p className={styles.reference}>
        {s.reference}: <code>{result.reference}</code>
      </p>

      <div className={styles.pending}>
        <Alert />
        <div>
          <p className={styles.pendingTitle}>{s.notConfirmedTitle}</p>
          <p>
            {format(s.notConfirmed, {
              date: meetingDateLabel(result.meetingDate, lang),
              time: result.meetingTime,
              format: meetingFormat,
            })}
          </p>
        </div>
      </div>

      <div className={styles.nextSteps}>
        <p className={styles.nextTitle}>{s.nextTitle}</p>
        <ol>
          {s.next.map((item, i) => (
            <li key={item}>
              <span>{i + 1}</span>
              {item}
            </li>
          ))}
        </ol>
      </div>

      {schedulingUrl && (
        <div className={styles.bookNow}>
          <div>
            <p className={styles.nextTitle}>{s.bookNowTitle}</p>
            <p className={styles.bookNowText}>{s.bookNow}</p>
          </div>
          {!showCalendar && (
            <button type="button" className="btn btn-secondary" onClick={() => setShowCalendar(true)}>
              <Calendar />
              {s.bookNowCta}
            </button>
          )}
          {calendarSrc && (
            <iframe src={calendarSrc} title={s.calendarTitle} className={styles.calendar} loading="lazy" />
          )}
        </div>
      )}

      <button type="button" className={`btn btn-ghost ${styles.again}`} onClick={onReset}>
        {s.newRequest}
      </button>
    </div>
  )
}
