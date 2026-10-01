'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useTransition } from 'react'
import { localeCookie, localeNames, locales, switchLocalePath, type Locale } from '@/i18n/config'
import { Globe } from './Icons'
import styles from './LanguageSwitcher.module.css'

/** Persist the choice so visiting `/` later opens the same language. */
function rememberLocale(locale: Locale) {
  document.cookie = `${localeCookie}=${locale}; path=/; max-age=31536000; samesite=lax`
}

interface Props {
  lang: Locale
  label: string
  /** Always show full language names (e.g. in the footer). */
  expanded?: boolean
  onSwitch?: () => void
}

/** Always-visible English / Svenska / Suomi toggle. Keeps the current page and section. */
export function LanguageSwitcher({ lang, label, expanded = false, onSwitch }: Props) {
  const router = useRouter()
  const pathname = usePathname()
  const [pending, startTransition] = useTransition()

  useEffect(() => {
    if (pending) document.documentElement.dataset.switching = ''
    else delete document.documentElement.dataset.switching
  }, [pending])

  function choose(next: Locale) {
    onSwitch?.()
    if (next === lang) return
    rememberLocale(next)
    const target = switchLocalePath(pathname, next) + window.location.hash
    startTransition(() => router.replace(target, { scroll: false }))
  }

  return (
    <div className={styles.root} role="group" aria-label={label} data-expanded={expanded || undefined}>
      <Globe className={styles.globe} />
      {locales.map((l) => (
        <button
          key={l}
          type="button"
          lang={l}
          className={styles.item}
          aria-pressed={l === lang}
          aria-label={localeNames[l]}
          title={localeNames[l]}
          onClick={() => choose(l)}
        >
          <span className={styles.code} aria-hidden="true">
            {l.toUpperCase()}
          </span>
          <span className={styles.name} aria-hidden="true">
            {localeNames[l]}
          </span>
        </button>
      ))}
    </div>
  )
}
