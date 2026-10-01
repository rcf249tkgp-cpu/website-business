import Link from 'next/link'
import { siteConfig } from '@/config/site'
import type { Locale } from '@/i18n/config'
import { localeTags } from '@/i18n/config'
import { format } from '@/i18n/format'
import { ArrowLeft } from './Icons'
import styles from './LegalPage.module.css'

interface Props {
  lang: Locale
  back: string
  updatedLabel: string
  content: { title: string; intro: string; sections: { title: string; body: string }[] }
}

/** Last time the legal texts were reviewed — update when you change them. */
const LAST_UPDATED = '2026-10-01'

export function LegalPage({ lang, back, updatedLabel, content }: Props) {
  const { address } = siteConfig.contact
  const vars = {
    company: siteConfig.name,
    legalName: siteConfig.legalName,
    email: siteConfig.contact.email,
    address: `${address.street}, ${address.postalCode} ${address.city}, ${address.country[lang]}`,
  }
  const updated = new Intl.DateTimeFormat(localeTags[lang], { dateStyle: 'long', timeZone: 'UTC' }).format(
    new Date(`${LAST_UPDATED}T12:00:00Z`),
  )
  return (
    <article className={`container ${styles.page}`}>
      <Link href={`/${lang}`} className={styles.back}>
        <ArrowLeft />
        {back}
      </Link>
      <h1 className={styles.title}>{content.title}</h1>
      <p className={styles.updated}>
        {updatedLabel}: <time dateTime={LAST_UPDATED}>{updated}</time>
      </p>
      <p className={styles.intro}>{format(content.intro, vars)}</p>
      {content.sections.map((section) => (
        <section key={section.title} className={styles.section}>
          <h2>{section.title}</h2>
          <p>{format(section.body, vars)}</p>
        </section>
      ))}
    </article>
  )
}
