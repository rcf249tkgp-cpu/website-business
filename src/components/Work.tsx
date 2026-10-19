import type { Dictionary } from '@/i18n'
import type { Locale } from '@/i18n/config'
import { ConceptCards } from './ConceptCards'
import { SectionHeading } from './SectionHeading'
import { WorkCards } from './WorkCards'
import styles from './Work.module.css'

/** Real client work. On the Work page the concept studies follow in the same section. */
export function Work({ lang, dict, standalone = false }: { lang: Locale; dict: Dictionary; standalone?: boolean }) {
  const { work } = dict
  const Sub = standalone ? 'h2' : 'h3'
  return (
    <section id="work" className={`section${standalone ? ' section-page' : ''}`} aria-labelledby="work-title">
      <div className="container">
        <SectionHeading
          id="work-title"
          eyebrow={work.eyebrow}
          title={work.title}
          description={work.description}
          as={standalone ? 'h1' : 'h2'}
        />
        <WorkCards lang={lang} t={work} heading={Sub} />

        {standalone && (
          <div className={styles.concepts}>
            <div className={`${styles.conceptsHead} reveal`}>
              <h2>{work.conceptsTitle}</h2>
              <p>{work.conceptsDescription}</p>
            </div>
            <ConceptCards t={work} heading="h3" />
          </div>
        )}
      </div>
    </section>
  )
}

/** Homepage: the concept studies as their own section. */
export function Concepts({ dict }: { dict: Dictionary }) {
  const { work } = dict
  return (
    <section id="concepts" className="section" aria-labelledby="concepts-title">
      <div className="container">
        <SectionHeading
          id="concepts-title"
          eyebrow={work.conceptBadge}
          title={work.conceptsTitle}
          description={work.conceptsDescription}
        />
        <ConceptCards t={work} />
      </div>
    </section>
  )
}
