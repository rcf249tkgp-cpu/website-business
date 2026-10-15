import type { Dictionary } from '@/i18n'
import type { Locale } from '@/i18n/config'
import { SectionHeading } from './SectionHeading'
import { ServiceRows } from './ServiceRows'
import styles from './Services.module.css'

export function Services({ lang, dict, standalone = false }: { lang: Locale; dict: Dictionary; standalone?: boolean }) {
  const { services } = dict
  return (
    <section id="services" className={`section${standalone ? ' section-page' : ''}`} aria-labelledby="services-title">
      <div className={`container ${styles.layout}`}>
        <div className={styles.intro}>
          <SectionHeading
            id="services-title"
            eyebrow={services.eyebrow}
            showEyebrow
            title={services.title}
            description={services.description}
            layout="stack"
            as={standalone ? 'h1' : 'h2'}
          />
        </div>
        <ServiceRows
          items={services.items}
          includesLabel={services.includesLabel}
          heading={standalone ? 'h2' : 'h3'}
          readMore={standalone ? undefined : { href: `/${lang}/services`, label: services.readMore }}
        />
        <p className={`${styles.addon} reveal`}>
          <span className={styles.addonLabel}>{services.addon.label}</span>
          <strong className={styles.addonTitle}>{services.addon.title}</strong>
          <span className={styles.addonText}>{services.addon.text}</span>
        </p>
      </div>
    </section>
  )
}
