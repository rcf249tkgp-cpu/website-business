import type { Dictionary } from '@/i18n'
import { SectionHeading } from './SectionHeading'
import styles from './Process.module.css'

export function Process({ dict, standalone = false }: { dict: Dictionary; standalone?: boolean }) {
  const { process } = dict
  return (
    <section id="process" className={`section${standalone ? ' section-page' : ''}`} aria-labelledby="process-title">
      <div className="container">
        <SectionHeading
          id="process-title"
          as={standalone ? 'h1' : 'h2'}
          eyebrow={process.eyebrow}
          title={process.title}
          description={process.description}
        />
        <div className={styles.wrap}>
          <span className={styles.line} aria-hidden="true">
            <span className={styles.lineFill} />
          </span>
          <ol className={styles.timeline}>
            {process.steps.map((step, i) => (
              <li key={step.id} className={`${styles.step} reveal`}>
                <span className={styles.marker} aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className={styles.duration}>{step.duration}</span>
                <h3 className={styles.title}>{step.title}</h3>
                <p className={styles.description}>{step.description}</p>
                <div className={styles.deliverables}>
                  <span className={styles.deliverablesLabel}>{process.deliverablesLabel}</span>
                  <ul>
                    {step.deliverables.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <p className={styles.note}>{process.note}</p>
      </div>
    </section>
  )
}
