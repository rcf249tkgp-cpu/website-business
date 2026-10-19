import type { Dictionary } from '@/i18n'
import type { Locale } from '@/i18n/config'
import { SectionHeading } from './SectionHeading'
import { ServiceRows } from './ServiceRows'
import styles from './Services.module.css'

/** The four services beside the craftsmanship image (laptop and phone on a desk). */
export function Services({ lang, dict, standalone = false }: { lang: Locale; dict: Dictionary; standalone?: boolean }) {
  const { services } = dict
  return (
    <section id="services" className={`section${standalone ? ' section-page' : ''}`} aria-labelledby="services-title">
      <div className="container">
        <SectionHeading
          id="services-title"
          eyebrow={services.eyebrow}
          title={services.title}
          description={services.description}
          as={standalone ? 'h1' : 'h2'}
        />
        <div className={styles.layout}>
          <div className={`${styles.image} reveal`}>
            <img
              src="/img/craft-mockup.webp"
              srcSet="/img/craft-mockup-768.webp 768w, /img/craft-mockup-1152.webp 1152w, /img/craft-mockup.webp 1536w"
              sizes="(min-width: 1000px) 600px, 100vw"
              alt={services.imageAlt}
              width={1536}
              height={1024}
              loading="lazy"
              decoding="async"
            />
          </div>
          <ServiceRows
            items={services.items}
            includesLabel={services.includesLabel}
            heading={standalone ? 'h2' : 'h3'}
            detailed={standalone}
            readMore={standalone ? undefined : { href: `/${lang}/services`, label: services.readMore }}
          />
        </div>
        {standalone && (
          <p className={`${styles.addon} reveal`}>
            <span className={styles.addonLabel}>{services.addon.label}</span>
            <strong className={styles.addonTitle}>{services.addon.title}</strong>
            <span className={styles.addonText}>{services.addon.text}</span>
          </p>
        )}
      </div>
    </section>
  )
}
