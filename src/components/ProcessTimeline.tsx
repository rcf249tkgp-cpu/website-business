import type { Dictionary } from '@/i18n'
import styles from './Process.module.css'

type Step = Dictionary['process']['steps'][number]

/** The five steps: number, timing, title, what happens and what you get. */
export function ProcessTimeline({
  steps,
  deliverablesLabel,
  heading: Heading = 'h3',
}: {
  steps: Step[]
  deliverablesLabel: string
  heading?: 'h2' | 'h3'
}) {
  return (
    <ol className={styles.timeline} data-stagger>
      {steps.map((step, i) => (
        <li key={step.id} className={styles.step}>
          <span className={styles.number} aria-hidden="true">
            {i + 1}
          </span>
          <div className={styles.stepBody}>
            <p className={styles.duration}>{step.duration}</p>
            <Heading className={styles.title}>{step.title}</Heading>
            <p className={styles.description}>{step.description}</p>
            <p className={styles.deliverables}>
              <span>{deliverablesLabel}</span> {step.deliverables.join(' · ')}
            </p>
          </div>
        </li>
      ))}
    </ol>
  )
}
