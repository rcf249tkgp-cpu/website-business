'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import type { Dictionary } from '@/i18n'
import type { Locale } from '@/i18n/config'
import { ArrowRight, Close, Menu } from './Icons'
import { LanguageSwitcher } from './LanguageSwitcher'
import { Logo } from './Logo'
import styles from './Header.module.css'

interface Props {
  lang: Locale
  dict: Pick<Dictionary, 'nav' | 'a11y'>
}

export function Header({ lang, dict }: Props) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const links = [
    { href: `/${lang}#services`, label: dict.nav.services },
    { href: `/${lang}#work`, label: dict.nav.work },
    { href: `/${lang}#why`, label: dict.nav.why },
    { href: `/${lang}#process`, label: dict.nav.process },
    { href: `/${lang}#contact`, label: dict.nav.contact },
  ]
  const close = () => setMenuOpen(false)

  return (
    <header className={styles.header} data-scrolled={scrolled || menuOpen || undefined}>
      <div className={`container ${styles.inner}`}>
        <Link href={`/${lang}`} className={styles.logo} aria-label={dict.a11y.home} onClick={close}>
          <Logo />
        </Link>

        <nav aria-label={dict.a11y.mainNav} className={styles.nav}>
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={styles.navLink}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <LanguageSwitcher lang={lang} label={dict.a11y.language} />
          <Link href={`/${lang}/start`} className={`btn btn-primary btn-sm ${styles.cta}`}>
            {dict.nav.cta}
          </Link>
          <button
            type="button"
            className={styles.menuButton}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? dict.a11y.closeMenu : dict.a11y.openMenu}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <Close /> : <Menu />}
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={styles.mobile} data-open={menuOpen || undefined} inert={!menuOpen}>
        <nav aria-label={dict.a11y.mainNav}>
          <ul>
            {links.map((l, i) => (
              <li key={l.href} style={{ transitionDelay: menuOpen ? `${60 + i * 40}ms` : '0ms' }}>
                <Link href={l.href} onClick={close}>
                  {l.label}
                  <ArrowRight />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.mobileFooter}>
          <Link href={`/${lang}/start`} className="btn btn-primary" onClick={close}>
            {dict.nav.cta}
            <ArrowRight />
          </Link>
        </div>
      </div>
    </header>
  )
}
