'use client'

import Link from 'next/link'
import { useCallback, useEffect, useRef, useState, type FormEvent } from 'react'
import { siteConfig } from '@/config/site'
import type { Dictionary } from '@/i18n'
import type { Locale } from '@/i18n/config'
import { format } from '@/i18n/format'
import { budgetLabel, timezoneLabel } from '@/lib/inquiry/labels'
import type { InquiryErrorCode, InquiryRequest, InquiryResponse } from '@/lib/inquiry/types'
import {
  budgetIds,
  earliestMeetingDate,
  emptyInquiry,
  featureIds,
  formSteps,
  limits,
  meetingFormats,
  timelines,
  validateInquiry,
  websiteTypes,
  type FieldError as FieldErrorType,
  type FieldErrors,
  type InquiryData,
  type InquiryField,
} from '@/lib/inquiry/validation'
import { Alert, ArrowLeft, ArrowRight, Calendar, Mail } from '../Icons'
import { ChoiceGroup, FieldError, TextField } from './fields'
import { SuccessScreen, type SuccessResult } from './SuccessScreen'
import { Turnstile } from './Turnstile'
import styles from './InquiryForm.module.css'

const DRAFT_KEY = 'inquiry:draft'
const RESULT_KEY = 'inquiry:result'

interface Props {
  lang: Locale
  dict: Pick<Dictionary, 'form'>
  schedulingUrl: string
  turnstileSiteKey: string
}

type SubmitError = InquiryErrorCode | 'network' | 'captcha'

function readSession<T>(key: string): T | null {
  try {
    const raw = sessionStorage.getItem(key)
    return raw ? (JSON.parse(raw) as T) : null
  } catch {
    return null
  }
}

function writeSession(key: string, value: unknown) {
  try {
    if (value === null) sessionStorage.removeItem(key)
    else sessionStorage.setItem(key, JSON.stringify(value))
  } catch {
    /* storage unavailable (private mode) — the form still works */
  }
}

export function InquiryForm({ lang, dict, schedulingUrl, turnstileSiteKey }: Props) {
  const t = dict.form
  const [step, setStep] = useState(0)
  const [data, setData] = useState<InquiryData>(emptyInquiry)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [attempted, setAttempted] = useState<Set<number>>(new Set())
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<SubmitError | null>(null)
  const [result, setResult] = useState<SuccessResult | null>(null)
  const [restored, setRestored] = useState(false)
  const [hydrated, setHydrated] = useState(false)
  const [honeypot, setHoneypot] = useState('')
  const [captchaToken, setCaptchaToken] = useState('')
  const [minDate, setMinDate] = useState('')
  const startedAt = useRef(0)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const rootRef = useRef<HTMLDivElement>(null)
  const moved = useRef(false)

  // Restore an unsent draft (e.g. after switching language) or a finished request.
  useEffect(() => {
    /* eslint-disable react-hooks/set-state-in-effect -- one-time hydration from sessionStorage */
    startedAt.current = Date.now()
    setMinDate(earliestMeetingDate())
    const savedResult = readSession<SuccessResult>(RESULT_KEY)
    const draft = readSession<{ data: InquiryData; step: number; startedAt?: number }>(DRAFT_KEY)
    if (savedResult) {
      setResult(savedResult)
    } else if (draft?.data) {
      const merged = { ...emptyInquiry, ...draft.data }
      setData(merged)
      setStep(Math.min(Math.max(draft.step || 0, 0), formSteps.length - 1))
      if (draft.startedAt) startedAt.current = draft.startedAt
      if (JSON.stringify(merged) !== JSON.stringify(emptyInquiry)) setRestored(true)
    }
    setHydrated(true)
    /* eslint-enable react-hooks/set-state-in-effect */
  }, [])

  useEffect(() => {
    if (!hydrated || result) return
    writeSession(DRAFT_KEY, { data, step, startedAt: startedAt.current })
  }, [data, step, hydrated, result])

  // Move focus to the new step's heading so keyboard and screen-reader users follow along.
  useEffect(() => {
    if (moved.current) headingRef.current?.focus({ preventScroll: true })
  }, [step, result])

  const message = useCallback(
    (error?: FieldErrorType) => (error ? format(t.validation[error.code], error.params ?? {}) : undefined),
    [t.validation],
  )

  function update<K extends InquiryField>(field: K, value: InquiryData[K]) {
    const next = { ...data, [field]: value }
    setData(next)
    setSubmitError(null)
    // Once a step has been attempted, re-validate its fields live.
    if (attempted.has(step)) setErrors((prev) => ({ ...prev, [field]: validateInquiry(next, [field])[field] }))
  }

  function toggleFeature(value: string) {
    const features = data.features.includes(value)
      ? data.features.filter((f) => f !== value)
      : [...data.features, value]
    update('features', features)
  }

  function scrollToForm() {
    const top = (rootRef.current?.getBoundingClientRect().top ?? 0) + window.scrollY - 100
    if (window.scrollY > top) window.scrollTo({ top, behavior: 'smooth' })
  }

  function focusFirstError(stepErrors: FieldErrors) {
    const first = formSteps[step].fields.find((f) => stepErrors[f])
    if (first) document.getElementById(`f-${first}`)?.focus()
  }

  function validateStep(index: number): boolean {
    const stepErrors = validateInquiry(data, formSteps[index].fields)
    setAttempted((prev) => new Set(prev).add(index))
    setErrors((prev) => {
      const next = { ...prev }
      for (const f of formSteps[index].fields) delete next[f]
      return { ...next, ...stepErrors }
    })
    if (Object.keys(stepErrors).length) {
      focusFirstError(stepErrors)
      return false
    }
    return true
  }

  function goTo(index: number) {
    moved.current = true
    setSubmitError(null)
    setStep(index)
    setRestored(false)
    scrollToForm()
  }

  async function onSubmit(event: FormEvent) {
    event.preventDefault()
    if (submitting) return
    if (step < formSteps.length - 1) {
      if (validateStep(step)) goTo(step + 1)
      return
    }
    if (!validateStep(step)) return
    if (turnstileSiteKey && !captchaToken) {
      setSubmitError('captcha')
      return
    }

    setSubmitting(true)
    setSubmitError(null)
    const payload: InquiryRequest = {
      data,
      locale: lang,
      startedAt: startedAt.current,
      hp: honeypot,
      turnstileToken: captchaToken || undefined,
    }

    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const json = (await res.json().catch(() => null)) as InquiryResponse | null
      if (json?.ok) {
        const success: SuccessResult = {
          reference: json.reference,
          confirmationSent: json.confirmationSent,
          name: data.name,
          email: data.email,
          meetingDate: data.meetingDate,
          meetingTime: data.meetingTime,
          meetingFormat: data.meetingFormat,
        }
        moved.current = true
        writeSession(DRAFT_KEY, null)
        writeSession(RESULT_KEY, success)
        setResult(success)
        scrollToForm()
        return
      }
      if (json && !json.ok && json.error === 'validation' && json.fields && Object.keys(json.fields).length) {
        const fields = json.fields
        setErrors(fields)
        setAttempted(new Set(formSteps.map((_, i) => i)))
        const firstStep = formSteps.findIndex((s) => s.fields.some((f) => fields[f]))
        if (firstStep >= 0 && firstStep !== step) goTo(firstStep)
        setSubmitError('validation')
        return
      }
      setSubmitError(json && !json.ok ? json.error : 'server')
    } catch {
      setSubmitError('network')
    } finally {
      setSubmitting(false)
    }
  }

  function reset() {
    moved.current = true
    writeSession(RESULT_KEY, null)
    writeSession(DRAFT_KEY, null)
    startedAt.current = Date.now()
    setData(emptyInquiry)
    setErrors({})
    setAttempted(new Set())
    setStep(0)
    setResult(null)
    setCaptchaToken('')
  }

  if (result) {
    return (
      <div ref={rootRef} className={styles.panel}>
        <SuccessScreen
          lang={lang}
          dict={dict}
          result={result}
          schedulingUrl={schedulingUrl}
          headingRef={headingRef}
          onReset={reset}
        />
      </div>
    )
  }

  const current = formSteps[step]
  const total = formSteps.length
  const err = (field: InquiryField) => message(errors[field])
  const stepHasErrors = current.fields.some((f) => errors[f])
  const progress = ((step + 1) / total) * 100

  return (
    <div ref={rootRef} className={styles.panel}>
      <form onSubmit={onSubmit} noValidate aria-busy={submitting}>
        {/* Progress */}
        <div className={styles.progressHead}>
          <p className={styles.stepCount} aria-live="polite">
            {format(t.stepOf, { current: step + 1, total })}
          </p>
          <ol className={styles.stepList}>
            {formSteps.map((s, i) => (
              <li key={s.id} aria-current={i === step ? 'step' : undefined} data-done={i < step || undefined}>
                {t.steps[s.id]}
              </li>
            ))}
          </ol>
        </div>
        <div
          className={styles.progressBar}
          role="progressbar"
          aria-valuemin={1}
          aria-valuemax={total}
          aria-valuenow={step + 1}
          aria-label={format(t.stepOf, { current: step + 1, total })}
        >
          <span style={{ width: `${progress}%` }} />
        </div>

        <h3 ref={headingRef} tabIndex={-1} className={styles.stepTitle}>
          {t.steps[current.id]}
        </h3>

        {restored && <p className={styles.notice}>{t.draftRestored}</p>}

        {/* Honeypot — invisible to humans, tempting to bots. */}
        <div className={styles.honeypot} aria-hidden="true">
          <label htmlFor="f-company-fax">Fax</label>
          <input
            id="f-company-fax"
            name="company_fax"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </div>

        <div className={styles.stepBody} key={current.id}>
          {current.id === 'project' && (
            <>
              <ChoiceGroup
                name="websiteType"
                legend={t.labels.websiteType}
                variant="cards"
                options={websiteTypes.map((v) => ({ value: v, label: t.websiteTypes[v] }))}
                value={data.websiteType}
                onChange={(v) => update('websiteType', v)}
                error={err('websiteType')}
              />
              <ChoiceGroup
                name="features"
                legend={t.labels.features}
                hint={t.labels.featuresHint}
                multiple
                options={featureIds.map((v) => ({ value: v, label: t.features[v] }))}
                value={data.features}
                onChange={toggleFeature}
                error={err('features')}
              />
              <div className={styles.field} data-invalid={errors.description ? '' : undefined}>
                <label htmlFor="f-description" className={styles.label}>
                  {t.labels.description}
                </label>
                <textarea
                  id="f-description"
                  name="description"
                  rows={5}
                  className={styles.input}
                  placeholder={t.labels.descriptionPlaceholder}
                  value={data.description}
                  maxLength={limits.descriptionMax}
                  onChange={(e) => update('description', e.target.value)}
                  aria-required
                  aria-invalid={errors.description ? true : undefined}
                  aria-describedby={`f-description-count${errors.description ? ' f-description-error' : ''}`}
                />
                <div className={styles.fieldFoot}>
                  <FieldError id="f-description-error" message={err('description')} />
                  <span id="f-description-count" className={styles.counter}>
                    {data.description.trim().length}/{limits.descriptionMax}
                  </span>
                </div>
              </div>
            </>
          )}

          {current.id === 'budget' && (
            <>
              <ChoiceGroup
                name="budget"
                legend={t.labels.budget}
                variant="cards"
                options={budgetIds.map((v) => ({ value: v, label: budgetLabel(v, lang, t) }))}
                value={data.budget}
                onChange={(v) => update('budget', v)}
                error={err('budget')}
              />
              <ChoiceGroup
                name="timeline"
                legend={t.labels.timeline}
                variant="cards"
                options={timelines.map((v) => ({ value: v, label: t.timelines[v] }))}
                value={data.timeline}
                onChange={(v) => update('timeline', v)}
                error={err('timeline')}
              />
            </>
          )}

          {current.id === 'details' && (
            <div className={styles.grid2}>
              <TextField
                name="company"
                label={t.labels.company}
                value={data.company}
                onChange={(v) => update('company', v)}
                error={err('company')}
                autoComplete="organization"
                maxLength={limits.textMax}
              />
              <TextField
                name="name"
                label={t.labels.name}
                value={data.name}
                onChange={(v) => update('name', v)}
                error={err('name')}
                autoComplete="name"
                maxLength={limits.textMax}
              />
              <TextField
                name="email"
                type="email"
                label={t.labels.email}
                value={data.email}
                onChange={(v) => update('email', v)}
                error={err('email')}
                autoComplete="email"
                inputMode="email"
                maxLength={limits.emailMax}
              />
              <TextField
                name="phone"
                type="tel"
                label={t.labels.phone}
                value={data.phone}
                onChange={(v) => update('phone', v)}
                error={err('phone')}
                autoComplete="tel"
                inputMode="tel"
                placeholder="+358 40 123 4567"
                maxLength={24}
              />
              <div className={styles.span2}>
                <TextField
                  name="website"
                  label={t.labels.website}
                  optionalLabel={t.labels.optional}
                  value={data.website}
                  onChange={(v) => update('website', v)}
                  error={err('website')}
                  autoComplete="url"
                  inputMode="url"
                  placeholder="example.com"
                  maxLength={limits.websiteMax}
                />
              </div>
            </div>
          )}

          {current.id === 'meeting' && (
            <>
              <div className={styles.grid2}>
                <div className={styles.field} data-invalid={errors.meetingDate ? '' : undefined}>
                  <label htmlFor="f-meetingDate" className={styles.label}>
                    {t.labels.meetingDate}
                  </label>
                  <div className={styles.dateWrap}>
                    <Calendar aria-hidden="true" />
                    <input
                      id="f-meetingDate"
                      name="meetingDate"
                      type="date"
                      className={styles.input}
                      min={minDate || undefined}
                      value={data.meetingDate}
                      onChange={(e) => update('meetingDate', e.target.value)}
                      aria-required
                      aria-invalid={errors.meetingDate ? true : undefined}
                      aria-describedby={errors.meetingDate ? 'f-meetingDate-error' : undefined}
                    />
                  </div>
                  <FieldError id="f-meetingDate-error" message={err('meetingDate')} />
                </div>
                <ChoiceGroup
                  name="meetingFormat"
                  legend={t.labels.meetingFormat}
                  options={meetingFormats.map((v) => ({ value: v, label: t.meetingFormats[v] }))}
                  value={data.meetingFormat}
                  onChange={(v) => update('meetingFormat', v)}
                  error={err('meetingFormat')}
                />
              </div>
              <ChoiceGroup
                name="meetingTime"
                legend={t.labels.meetingTime}
                hint={format(t.labels.timezoneNote, { tz: timezoneLabel(lang) })}
                options={siteConfig.meetingSlots.map((v) => ({ value: v, label: v }))}
                value={data.meetingTime}
                onChange={(v) => update('meetingTime', v)}
                error={err('meetingTime')}
              />

              <p className={styles.review}>
                <strong>{t.review.title}.</strong> {t.review.description}
              </p>

              {turnstileSiteKey && (
                <div className={styles.captcha}>
                  <Turnstile siteKey={turnstileSiteKey} lang={lang} onToken={setCaptchaToken} />
                </div>
              )}

              <div className={styles.field} data-invalid={errors.consent ? '' : undefined}>
                <label className={styles.consent}>
                  <input
                    id="f-consent"
                    type="checkbox"
                    name="consent"
                    checked={data.consent}
                    onChange={(e) => update('consent', e.target.checked)}
                    aria-invalid={errors.consent ? true : undefined}
                    aria-describedby={errors.consent ? 'f-consent-error' : undefined}
                  />
                  <span>
                    {format(t.labels.consent, { company: siteConfig.name })}{' '}
                    <Link href={`/${lang}/privacy`} target="_blank" className={styles.link}>
                      {t.labels.privacyLink}
                    </Link>
                    .
                  </span>
                </label>
                <FieldError id="f-consent-error" message={err('consent')} />
              </div>
            </>
          )}
        </div>

        {(stepHasErrors || submitError) && (
          <div className={styles.alert} role="alert">
            <Alert />
            <div>
              <p>
                {submitError === 'captcha'
                  ? t.validation.captcha
                  : submitError && submitError !== 'validation'
                    ? t.errors[submitError]
                    : t.validation.summary}
              </p>
              {submitError && !['validation', 'captcha'].includes(submitError) && (
                <a href={`mailto:${siteConfig.contact.email}`} className={styles.link}>
                  <Mail />
                  {format(t.errors.emailUs, { email: siteConfig.contact.email })}
                </a>
              )}
            </div>
          </div>
        )}

        <div className={styles.actions}>
          {step > 0 ? (
            <button type="button" className="btn btn-ghost" onClick={() => goTo(step - 1)} disabled={submitting}>
              <ArrowLeft />
              {t.buttons.back}
            </button>
          ) : (
            <span />
          )}
          <button
            type="submit"
            className="btn btn-primary"
            disabled={submitting}
            data-loading={submitting || undefined}
          >
            {submitting ? (
              <>
                <span className={styles.spinner} aria-hidden="true" />
                {t.buttons.submitting}
              </>
            ) : step < total - 1 ? (
              <>
                {t.buttons.next}
                <ArrowRight />
              </>
            ) : submitError && submitError !== 'validation' && submitError !== 'captcha' ? (
              t.buttons.retry
            ) : (
              <>
                {t.buttons.submit}
                <ArrowRight />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  )
}
