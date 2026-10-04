import type { Dictionary } from '@/i18n'
import type { Locale } from '@/i18n/config'
import { SectionHeading } from './SectionHeading'
import { ServiceRows } from './ServiceRows'

export function Services({ dict, standalone = false }: { lang: Locale; dict: Dictionary; standalone?: boolean }) {
  const { services } = dict
  return (
    <section id="services" className={`section${standalone ? ' section-page' : ''}`} aria-labelledby="services-title">
      <div className="container">
        <SectionHeading
          id="services-title"
          index="01"
          eyebrow={services.eyebrow}
          title={services.title}
          description={services.description}
          as={standalone ? 'h1' : 'h2'}
        />
        <ServiceRows items={services.items} includesLabel={services.includesLabel} heading={standalone ? 'h2' : 'h3'} />
      </div>
    </section>
  )
}
