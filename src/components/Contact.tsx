import { schedulingUrl, siteConfig, turnstileSiteKey } from '@/config/site'
import type { Dictionary } from '@/i18n'
import type { Locale } from '@/i18n/config'
import Link from 'next/link'
import { ArrowRight, Clock, Mail, MapPin, Phone } from './Icons'
import { InquiryForm } from './inquiry/InquiryForm'
import { SplitWords } from './SectionHeading'
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
      <ol>
        {contact.points.map((point, i) => (
          <li key={point}>
            <span aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
            {point}
          </li>
        ))}
      </ol>
    </div>
  )

  const direct = (
    <div className={styles.direct}>
      <p className={styles.label}>{contact.direct}</p>
      <ul>
        <li>
          <Mail />
          <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
        </li>
        <li>
          <Phone />
          <a href={`tel:${siteConfig.contact.phoneHref}`}>{siteConfig.contact.phone}</a>
        </li>
        <li>
          <MapPin />
          <span>
            {address.street}, {address.postalCode} {address.city}
          </span>
        </li>
        <li>
          <Clock />
          <span>
            <span className="sr-only">{contact.hoursLabel}: </span>
            {siteConfig.contact.hours[lang]}
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
            <p className={styles.eyebrow}>{contact.eyebrow}</p>
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
        <p className={styles.eyebrow}>
          <span aria-hidden="true">08</span>
          {contact.eyebrow}
        </p>
        <Heading id="contact-title" className={styles.bigTitle} data-split>
          <SplitWords text={contact.title} />
        </Heading>

        <div className={styles.row}>
          <p className={`${styles.description} reveal`}>{contact.description}</p>

          <div className={`${styles.action} reveal`}>
            <ol className={styles.steps}>
              {Object.values(dict.form.steps).map((step, i) => (
                <li key={step}>
                  <span aria-hidden="true">{i + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
            <Link href={`/${lang}/start`} className={`btn btn-primary ${styles.cta}`} data-magnetic>
              {dict.nav.cta}
              <ArrowRight />
            </Link>
            <p className={styles.reply}>{contact.reply}</p>
          </div>

          <div className="reveal">{direct}</div>
        </div>
      </div>
    </section>
  )
}
