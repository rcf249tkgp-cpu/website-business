import type { Dictionary } from '@/i18n'
import { ProcessTimeline } from './ProcessTimeline'
import { SectionHeading } from './SectionHeading'
import styles from './Process.module.css'

export function Process({ dict, standalone = false }: { dict: Dictionary; standalone?: boolean }) {
  const { process } = dict
  return (
    <section
      id="process"
      className={`section section-alt ${styles.section}${standalone ? ' section-page' : ''}`}
      aria-labelledby="process-title"
    >
      <div className={`container ${styles.layout}`}>
        <div className={styles.intro}>
          <SectionHeading
            id="process-title"
            as={standalone ? 'h1' : 'h2'}
            eyebrow={process.eyebrow}
            title={process.title}
            description={process.description}
            layout="stack"
          />
          <p className={styles.note}>{process.note}</p>
        </div>
        <ProcessTimeline
          steps={process.steps}
          deliverablesLabel={process.deliverablesLabel}
          heading={standalone ? 'h2' : 'h3'}
        />
      </div>
    </section>
  )
}
