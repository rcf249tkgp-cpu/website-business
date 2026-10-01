import type { Dictionary } from '@/i18n'
import { ProjectMockup } from './ProjectMockups'
import { SectionHeading } from './SectionHeading'
import styles from './Work.module.css'

export function Work({ dict }: { dict: Dictionary }) {
  const { work } = dict
  return (
    <section id="work" className="section" aria-labelledby="work-title">
      <div className="container">
        <SectionHeading id="work-title" eyebrow={work.eyebrow} title={work.title} description={work.description} />
        <ul className={styles.grid}>
          {work.projects.map((project) => (
            <li key={project.id} className={`card reveal ${styles.project}`}>
              <div className={styles.frame} aria-hidden="true">
                <div className={styles.browserBar}>
                  <i />
                  <i />
                  <i />
                </div>
                <div className={styles.screen}>
                  <ProjectMockup id={project.id} t={work.mock} />
                </div>
              </div>
              <div className={styles.info}>
                <div className={styles.meta}>
                  <span className={styles.category}>{project.category}</span>
                  <span className={styles.badge}>{work.conceptBadge}</span>
                </div>
                <h3 className={styles.name}>{project.name}</h3>
                <p className={styles.summary}>{project.summary}</p>
                <ul className={styles.tags}>
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
