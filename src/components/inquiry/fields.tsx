'use client'

import type { ReactNode } from 'react'
import { Alert, Check } from '../Icons'
import styles from './InquiryForm.module.css'

export function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null
  return (
    <p id={id} className={styles.error}>
      <Alert />
      {message}
    </p>
  )
}

interface TextFieldProps {
  name: string
  label: string
  value: string
  onChange: (value: string) => void
  error?: string
  optionalLabel?: string
  type?: 'text' | 'email' | 'tel'
  autoComplete?: string
  inputMode?: 'text' | 'email' | 'tel' | 'url'
  placeholder?: string
  maxLength?: number
}

export function TextField({
  name,
  label,
  value,
  onChange,
  error,
  optionalLabel,
  type = 'text',
  ...rest
}: TextFieldProps) {
  const id = `f-${name}`
  return (
    <div className={styles.field} data-invalid={error ? '' : undefined}>
      <label htmlFor={id} className={styles.label}>
        {label}
        {optionalLabel && <span className={styles.optional}>({optionalLabel})</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        aria-required={optionalLabel ? undefined : true}
        className={styles.input}
        {...rest}
      />
      <FieldError id={`${id}-error`} message={error} />
    </div>
  )
}

interface ChoiceGroupProps {
  name: string
  legend: string
  hint?: string
  options: { value: string; label: string }[]
  value: string | string[]
  onChange: (value: string) => void
  multiple?: boolean
  error?: string
  variant?: 'cards' | 'chips'
  footer?: ReactNode
}

/** Accessible radio/checkbox group styled as selectable cards or chips. */
export function ChoiceGroup({
  name,
  legend,
  hint,
  options,
  value,
  onChange,
  multiple = false,
  error,
  variant = 'chips',
  footer,
}: ChoiceGroupProps) {
  const errorId = `f-${name}-error`
  const hintId = hint ? `f-${name}-hint` : undefined
  const describedBy = [hintId, error ? errorId : undefined].filter(Boolean).join(' ') || undefined
  return (
    <fieldset className={styles.fieldset} data-invalid={error ? '' : undefined} aria-describedby={describedBy}>
      <legend className={styles.label}>{legend}</legend>
      {hint && (
        <p id={hintId} className={styles.hint}>
          {hint}
        </p>
      )}
      <div className={variant === 'cards' ? styles.cards : styles.chips}>
        {options.map((option, i) => {
          const checked = multiple ? (value as string[]).includes(option.value) : value === option.value
          return (
            <label key={option.value} className={styles.choice} data-checked={checked || undefined}>
              <input
                type={multiple ? 'checkbox' : 'radio'}
                name={name}
                value={option.value}
                checked={checked}
                onChange={() => onChange(option.value)}
                className="sr-only"
                id={i === 0 ? `f-${name}` : undefined}
                aria-invalid={error ? true : undefined}
                required={!multiple}
              />
              <span className={styles.choiceBox} aria-hidden="true">
                <Check />
              </span>
              <span>{option.label}</span>
            </label>
          )
        })}
      </div>
      {footer}
      <FieldError id={errorId} message={error} />
    </fieldset>
  )
}
