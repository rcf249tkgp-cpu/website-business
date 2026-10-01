'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useId, useRef, useState, useTransition } from 'react'
import { localeCookie, localeNames, locales, switchLocalePath, type Locale } from '@/i18n/config'
import { Check, ChevronDown, Globe } from './Icons'
import styles from './LanguageSwitcher.module.css'

/** Persist the choice so visiting `/` later opens the same language. */
function rememberLocale(locale: Locale) {
  document.cookie = `${localeCookie}=${locale}; path=/; max-age=31536000; samesite=lax`
}

interface Props {
  lang: Locale
  label: string
  /** Render as a flat list (used in the mobile menu). */
  inline?: boolean
  onSwitch?: () => void
}

export function LanguageSwitcher({ lang, label, inline = false, onSwitch }: Props) {
  const router = useRouter()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [pending, startTransition] = useTransition()
  const rootRef = useRef<HTMLDivElement>(null)
  const listId = useId()

  useEffect(() => {
    if (pending) document.documentElement.dataset.switching = ''
    else delete document.documentElement.dataset.switching
  }, [pending])

  useEffect(() => {
    if (!open) return
    const onDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('pointerdown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  function choose(next: Locale) {
    setOpen(false)
    onSwitch?.()
    if (next === lang) return
    rememberLocale(next)
    const target = switchLocalePath(pathname, next) + window.location.hash
    startTransition(() => router.replace(target, { scroll: false }))
  }

  if (inline) {
    return (
      <div className={styles.inline} role="group" aria-label={label}>
        {locales.map((l) => (
          <button
            key={l}
            type="button"
            lang={l}
            className={styles.inlineItem}
            aria-pressed={l === lang}
            onClick={() => choose(l)}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>
    )
  }

  return (
    <div className={styles.root} ref={rootRef}>
      <button
        type="button"
        className={styles.trigger}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-label={`${label}: ${localeNames[lang]}`}
        onClick={() => setOpen((v) => !v)}
      >
        <Globe />
        <span>{lang.toUpperCase()}</span>
        <ChevronDown className={styles.chevron} data-open={open || undefined} />
      </button>
      <ul id={listId} role="listbox" aria-label={label} className={styles.menu} data-open={open || undefined}>
        {locales.map((l) => (
          <li key={l} role="option" aria-selected={l === lang}>
            <button type="button" lang={l} className={styles.item} tabIndex={open ? 0 : -1} onClick={() => choose(l)}>
              <span className={styles.code}>{l.toUpperCase()}</span>
              <span>{localeNames[l]}</span>
              {l === lang && <Check className={styles.check} />}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
