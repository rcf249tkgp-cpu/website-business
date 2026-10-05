import type { CSSProperties } from 'react'
import Link from 'next/link'
import { siteConfig } from '@/config/site'
import type { Dictionary } from '@/i18n'
import type { Locale } from '@/i18n/config'
import { ArrowUp } from './Icons'
import { LanguageSwitcher } from './LanguageSwitcher'
import { Logo } from './Logo'
import styles from './Footer.module.css'

export function Footer({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const { footer, nav } = dict
  const { contact } = siteConfig
  const year = new Date().getFullYear()
  const links = [
    { href: `/${lang}/services`, label: nav.services },
    { href: `/${lang}/work`, label: nav.work },
    { href: `/${lang}/process`, label: nav.process },
    { href: `/${lang}/pricing`, label: nav.pricing },
    { href: `/${lang}/approach`, label: nav.about },
    { href: `/${lang}/process#faq`, label: nav.faq },
    { href: `/${lang}/contact`, label: nav.contact },
  ]

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Link href={`/${lang}`} aria-label={`${siteConfig.name} — ${dict.a11y.home}`}>
              <Logo />
            </Link>
            <p>{footer.description}</p>
            <div className={styles.lang}>
              <LanguageSwitcher lang={lang} label={dict.a11y.language} expanded />
            </div>
            <ul className={styles.social}>
              {siteConfig.social.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-labelledby="footer-nav">
            <h2 id="footer-nav" className={styles.heading}>
              {footer.navigation}
            </h2>
            <ul className={styles.list}>
              {links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className={styles.heading}>{footer.contact}</h2>
            <address className={styles.list}>
              {contact.people.map((person) => (
                <span key={person.email} className={styles.person}>
                  <strong>{person.name}</strong>
                  <a href={`mailto:${person.email}`}>{person.email}</a>
                  <a href={`tel:${person.phoneHref}`}>{person.phone}</a>
                </span>
              ))}
              <span>
                {contact.address.street}
                <br />
                {contact.address.postalCode} {contact.address.city}, {contact.address.country[lang]}
              </span>
            </address>
          </div>

          <nav aria-labelledby="footer-legal">
            <h2 id="footer-legal" className={styles.heading}>
              {footer.legal}
            </h2>
            <ul className={styles.list}>
              <li>
                <Link href={`/${lang}/privacy`}>{footer.privacy}</Link>
              </li>
              <li>
                <Link href={`/${lang}/terms`}>{footer.terms}</Link>
              </li>
            </ul>
            <p className={styles.note}>{footer.cookies}</p>
          </nav>
        </div>

        <div className={styles.bottom}>
          <div>
            <p>
              © {year} {siteConfig.legalName}
              {siteConfig.businessId && (
                <>
                  {' '}
                  · {footer.businessId} {siteConfig.businessId}
                </>
              )}
            </p>
            <p>{footer.brandNote}</p>
          </div>
          <a href="#main" className={styles.top}>
            {footer.backToTop}
            <ArrowUp />
          </a>
        </div>
      </div>
      <div className={styles.wordmark} aria-hidden="true" data-split>
        {Array.from(siteConfig.name).map((letter, i) => (
          <span key={i} className="split-word">
            <span style={{ '--i': i } as CSSProperties}>{letter === ' ' ? '\u00a0' : letter}</span>
          </span>
        ))}
      </div>
    </footer>
  )
}
