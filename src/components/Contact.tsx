import { schedulingUrl, siteConfig, turnstileSiteKey } from '@/config/site'
import type { Dictionary } from '@/i18n'
import type { Locale } from '@/i18n/config'
import Link from 'next/link'
import { ArrowRight, Check, Clock, Mail, MapPin, Phone } from './Icons'
import { InquiryForm } from './inquiry/InquiryForm'
import styles from './Contact.module.css'

interface Props {
  lang: Locale
  dict: Dictionary
  /**
   * `page`: the dedicated /start page with the inquiry form.
   * `teaser`: the homepage section that links to it.
   */
  variant: 'page' | 'teaser'
  /** The teaser shown as the main content of its own page (/contact). */
  standalone?: boolean
}

export function Contact({ lang, dict, variant, standalone = false }: Props) {
  const { contact } = dict
  const { address } = siteConfig.contact
  const Heading = variant === 'page' || standalone ? 'h1' : 'h2'
  return (
    <section
      id="contact"
      className={`section ${styles.section}${standalone ? ' section-page' : ''}`}
      data-variant={variant}
      aria-labelledby="contact-title"
    >
      <div className={styles.glow} aria-hidden="true" />
      <div className={`container ${styles.layout}`}>
        <div className={`${styles.intro} reveal`}>
          <p className={styles.eyebrow}>{contact.eyebrow}</p>
          <Heading id="contact-title" className={styles.title}>
            {contact.title}
          </Heading>
          <p className={styles.description}>{contact.description}</p>

          <ul className={styles.points}>
            {contact.points.map((point) => (
              <li key={point}>
                <Check />
                {point}
              </li>
            ))}
          </ul>

          <div className={styles.direct}>
            <p className={styles.directTitle}>{contact.direct}</p>
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
        </div>

        {variant === 'page' ? (
          <div className={styles.formWrap}>
            <InquiryForm
              lang={lang}
              dict={{ form: dict.form }}
              schedulingUrl={schedulingUrl}
              turnstileSiteKey={turnstileSiteKey}
            />
          </div>
        ) : (
          <div className={`${styles.teaser} reveal`}>
            <ol className={styles.teaserSteps}>
              {Object.values(dict.form.steps).map((step, i) => (
                <li key={step}>
                  <span aria-hidden="true">{i + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
            <Link href={`/${lang}/start`} className={`btn btn-primary ${styles.teaserCta}`} data-magnetic>
              {dict.nav.cta}
              <ArrowRight />
            </Link>
            <p className={styles.teaserNote}>{dict.hero.trust[0]}</p>
          </div>
        )}
      </div>
    </section>
  )
}
