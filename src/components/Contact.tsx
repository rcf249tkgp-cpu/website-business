import { schedulingUrl, siteConfig, turnstileSiteKey } from '@/config/site'
import type { Dictionary } from '@/i18n'
import type { Locale } from '@/i18n/config'
import { Check, Clock, Mail, MapPin, Phone } from './Icons'
import { InquiryForm } from './inquiry/InquiryForm'
import styles from './Contact.module.css'

export function Contact({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const { contact } = dict
  const { address } = siteConfig.contact
  return (
    <section id="contact" className={`section ${styles.section}`} aria-labelledby="contact-title">
      <div className={styles.glow} aria-hidden="true" />
      <div className={`container ${styles.layout}`}>
        <div className={`${styles.intro} reveal`}>
          <p className={styles.eyebrow}>{contact.eyebrow}</p>
          <h2 id="contact-title" className={styles.title}>
            {contact.title}
          </h2>
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
