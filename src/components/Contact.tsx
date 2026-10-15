import { schedulingUrl, siteConfig, turnstileSiteKey } from '@/config/site'
import type { Dictionary } from '@/i18n'
import type { Locale } from '@/i18n/config'
import Link from 'next/link'
import { ArrowRight, Check, MapPin } from './Icons'
import { InquiryForm } from './inquiry/InquiryForm'
import styles from './Contact.module.css'

interface Props {
  lang: Locale
  dict: Dictionary
  /**
   * `page`: the dedicated /start page with the inquiry form.
   * `teaser`: the closing section that links to it.
   */
  variant: 'page' | 'teaser'
  /** The teaser shown as the main content of its own page (/contact). */
  standalone?: boolean
}

export function Contact({ lang, dict, variant, standalone = false }: Props) {
  const { contact } = dict
  const { address } = siteConfig.contact
  const Heading = variant === 'page' || standalone ? 'h1' : 'h2'

  const next = (
    <div className={styles.next}>
      <p className={styles.label}>{contact.nextLabel}</p>
      <ol className="check-list">
        {contact.points.map((point) => (
          <li key={point}>
            <Check aria-hidden="true" />
            {point}
          </li>
        ))}
      </ol>
    </div>
  )

  const direct = (
    <div className={styles.direct}>
      <p className={styles.label}>{contact.direct}</p>
      <ul className={styles.people}>
        {siteConfig.contact.people.map((person) => (
          <li key={person.email}>
            <strong>{person.name}</strong>
            <a href={`mailto:${person.email}`}>{person.email}</a>
            <a href={`tel:${person.phoneHref}`}>{person.phone}</a>
          </li>
        ))}
      </ul>
      <ul>
        <li>
          <MapPin />
          <span>
            {address.street}, {address.postalCode} {address.city}
          </span>
        </li>
      </ul>
    </div>
  )

  if (variant === 'page') {
    return (
      <section
        id="contact"
        className={`section ${styles.section} ${styles.page}`}
        data-variant={variant}
        aria-labelledby="contact-title"
      >
        <div className={`container ${styles.pageLayout}`}>
          <div className={styles.intro}>
            <p className={`eyebrow ${styles.eyebrow}`}>{contact.eyebrow}</p>
            <Heading id="contact-title" className={styles.pageTitle}>
              {contact.title}
            </Heading>
            <p className={styles.description}>{contact.description}</p>
            {next}
            {direct}
          </div>
          <div className={styles.formWrap}>
            <InquiryForm
              lang={lang}
              dict={{ form: dict.form }}
              schedulingUrl={schedulingUrl}
              turnstileSiteKey={turnstileSiteKey}
            />
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      id="contact"
      className={`section ${styles.section} ${styles.teaser}${standalone ? ' section-page' : ''}`}
      data-variant={variant}
      aria-labelledby="contact-title"
    >
      <div className="container">
        {/* One clear call to action; the inquiry flow itself opens in its own dialog. */}
        <div className={`${styles.band} reveal`}>
          <div className={styles.bandText}>
            <Heading id="contact-title" className={styles.bigTitle}>
              <span>{contact.title.slice(0, contact.title.lastIndexOf(' '))}</span>{' '}
              <span className={styles.highlight}>{contact.title.slice(contact.title.lastIndexOf(' ') + 1)}</span>
            </Heading>
            <p className={styles.description}>{contact.description}</p>
          </div>
          <div className={styles.action}>
            <Link href={`/${lang}/start`} className={`btn btn-primary ${styles.cta}`}>
              {dict.nav.cta}
              <ArrowRight />
            </Link>
            <p className={styles.reply}>{contact.reply}</p>
          </div>
        </div>
        <div className={`${styles.directRow} reveal`}>{direct}</div>
      </div>
    </section>
  )
}
