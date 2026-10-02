'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
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
  const [active, setActive] = useState('')
  const pathname = usePathname()
  const onHome = pathname === `/${lang}`

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

  const sections = ['services', 'work', 'why', 'process', 'contact'] as const

  // Highlight the nav item for the section currently in view (homepage only).
  useEffect(() => {
    if (!onHome) return
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    // FAQ has no nav item; observing it clears the highlight there.
    for (const id of [...sections, 'faq']) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => {
      observer.disconnect()
      setActive('')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onHome])

  const links = sections.map((id) => ({ id, href: `/${lang}#${id}`, label: dict.nav[id] }))
  const close = () => setMenuOpen(false)

  return (
    <header className={styles.header} data-scrolled={scrolled || menuOpen || undefined}>
      <span className={styles.progress} aria-hidden="true" />
      <div className={`container ${styles.inner}`}>
        <Link href={`/${lang}`} className={styles.logo} aria-label={dict.a11y.home} onClick={close}>
          <Logo />
        </Link>

        <nav aria-label={dict.a11y.mainNav} className={styles.nav}>
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={styles.navLink} data-active={(onHome && active === l.id) || undefined}>
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
