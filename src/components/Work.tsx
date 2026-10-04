import { archivo, fraunces, instrumentSerif } from '@/fonts'
import type { Dictionary } from '@/i18n'
import type { Locale } from '@/i18n/config'
import { ConceptShowcase } from './ConceptShowcase'
import { FeaturedCase } from './FeaturedCase'
import { SectionHeading } from './SectionHeading'
import styles from './Work.module.css'

export function Work({ dict, standalone = false }: { lang: Locale; dict: Dictionary; standalone?: boolean }) {
  const { work } = dict
  const Sub = standalone ? 'h2' : 'h3'
  const { ember, lumo, voltra, fjord } = work.projects
  const concepts = (
    [
      [ember, 'emberroasters.example'],
      [lumo, 'lumoclinic.example'],
      [voltra, 'voltra.example'],
      [fjord, 'formfjord.example'],
    ] as const
  ).map(([{ id, name, category, summary }, url]) => ({
    id: id as keyof typeof work.projects,
    name,
    category,
    summary,
    url,
  }))

  return (
    <section
      id="work"
      className={`section ${styles.section}${standalone ? ' section-page' : ''} ${fraunces.variable} ${instrumentSerif.variable} ${archivo.variable}`}
      aria-labelledby="work-title"
    >
      <div className="container">
        <SectionHeading
          id="work-title"
          index="03"
          eyebrow={work.eyebrow}
          title={work.title}
          description={work.description}
          as={standalone ? 'h1' : 'h2'}
        />

        <FeaturedCase t={work} heading={Sub} />

        <div className={`${styles.conceptsHead} reveal`}>
          <Sub>{work.conceptsTitle}</Sub>
          <p>{work.conceptsDescription}</p>
        </div>
        <ConceptShowcase
          concepts={concepts}
          sites={work.projects}
          t={{
            projectsLabel: work.projectsLabel,
            devicesLabel: work.devicesLabel,
            desktop: work.desktop,
            mobile: work.mobile,
            scrollHint: work.scrollHint,
            conceptBadge: work.conceptBadge,
          }}
        />
        <p className={styles.disclaimer}>{work.disclaimer}</p>
      </div>
    </section>
  )
}
