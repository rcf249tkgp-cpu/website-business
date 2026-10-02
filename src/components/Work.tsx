import type { CSSProperties } from 'react'
import type { Dictionary } from '@/i18n'
import { ProjectMockup } from './ProjectMockups'
import { SectionHeading } from './SectionHeading'
import styles from './Work.module.css'

/** Address shown in each example's browser bar. The brands are fictional. */
const addresses: Record<string, string> = {
  ember: 'emberroasters.fi',
  lumo: 'lumoclinic.fi',
  voltra: 'voltra.fi',
  fjord: 'formfjord.fi',
}

/**
 * Example sites as a stack of full-width panels. On wide screens each panel
 * sticks below the header and the next one slides over it, so every example
 * gets the whole stage for a moment. Each panel takes its colours from the
 * brand it shows.
 */
export function Work({ dict, standalone = false }: { dict: Dictionary; standalone?: boolean }) {
  const { work } = dict
  return (
    <section id="work" className={`section${standalone ? ' section-page' : ''}`} aria-labelledby="work-title">
      <div className="container">
        <SectionHeading
          id="work-title"
          as={standalone ? 'h1' : 'h2'}
          eyebrow={work.eyebrow}
          title={work.title}
          description={work.description}
        />
        <ul className={styles.stack}>
          {work.projects.map((project, i) => (
            <li key={project.id} className={styles.panel} data-id={project.id} style={{ '--i': i } as CSSProperties}>
              <div className={styles.text}>
                <p className={styles.category}>{project.category}</p>
                <h3 className={styles.name}>{project.name}</h3>
                <p className={styles.summary}>{project.summary}</p>
                <ul className={styles.tags} aria-label={work.tagsLabel}>
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.visual} aria-hidden="true">
                <div className={styles.frame}>
                  <div className={styles.browserBar}>
                    <span className={styles.dots}>
                      <i />
                      <i />
                      <i />
                    </span>
                    <span className={styles.address}>{addresses[project.id] ?? ''}</span>
                  </div>
                  <ProjectMockup id={project.id} t={work.mock} />
                </div>
              </div>
            </li>
          ))}
        </ul>
        <p className={styles.disclaimer}>{work.disclaimer}</p>
      </div>
    </section>
  )
}
