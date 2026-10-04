'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState, type CSSProperties } from 'react'
import { siteConfig } from '@/config/site'
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
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock the page behind the open menu and close it with Escape.
  useEffect(() => {
    document.documentElement.toggleAttribute('data-menu-open', menuOpen)
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [menuOpen])

  // Each menu item opens its own page.
  const links = (
    [
      ['services', 'services'],
      ['work', 'work'],
      ['process', 'process'],
      ['pricing', 'pricing'],
      ['about', 'approach'],
      ['contact', 'contact'],
    ] as const
  ).map(([key, slug]) => ({ id: slug, href: `/${lang}/${slug}`, label: dict.nav[key] }))
  const close = () => setMenuOpen(false)

  return (
    <header className={styles.header} data-scrolled={scrolled || undefined} data-menu-open={menuOpen || undefined}>
      <span className={styles.progress} aria-hidden="true" />
      <div className={`container ${styles.inner}`}>
        <Link
          href={`/${lang}`}
          className={styles.logo}
          aria-label={`${siteConfig.name} — ${dict.a11y.home}`}
          onClick={close}
        >
          <Logo />
        </Link>

        <nav aria-label={dict.a11y.mainNav} className={styles.nav}>
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={styles.navLink} aria-current={pathname === l.href ? 'page' : undefined}>
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
        <nav aria-label={dict.a11y.mainNav} className={`container ${styles.mobileNav}`}>
          <ol>
            {links.map((l, i) => (
              <li key={l.href} style={{ '--i': i } as CSSProperties}>
                <Link href={l.href} onClick={close} aria-current={pathname === l.href ? 'page' : undefined}>
                  <span className={styles.index} aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {l.label}
                </Link>
              </li>
            ))}
          </ol>
        </nav>
        <div className={`container ${styles.mobileFooter}`}>
          <Link href={`/${lang}/start`} className="btn btn-primary" onClick={close}>
            {dict.nav.cta}
            <ArrowRight />
          </Link>
          <p className={styles.mobileContact}>
            <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
            <a href={`tel:${siteConfig.contact.phoneHref}`}>{siteConfig.contact.phone}</a>
          </p>
        </div>
      </div>
    </header>
  )
}
