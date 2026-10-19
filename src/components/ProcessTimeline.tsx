import type { Dictionary } from '@/i18n'
import styles from './Process.module.css'

type Step = Dictionary['process']['steps'][number]

/**
 * The five steps as a horizontal timeline (swipeable on phones): number, timing, title and
 * one sentence, plus what you get on the Process page.
 */
export function ProcessTimeline({
  steps,
  deliverablesLabel,
  heading: Heading = 'h3',
}: {
  steps: Step[]
  /** Shows each step's deliverables when set (Process page). */
  deliverablesLabel?: string
  heading?: 'h2' | 'h3'
}) {
  return (
    <ol className={styles.timeline} data-stagger>
      {steps.map((step, i) => (
        <li key={step.id} className={styles.step}>
          <span className={styles.number} aria-hidden="true">
            {i + 1}
          </span>
          <p className={styles.duration}>{step.duration}</p>
          <Heading className={styles.title}>{step.title}</Heading>
          <p className={styles.description}>{step.description}</p>
          {deliverablesLabel && (
            <p className={styles.deliverables}>
              <span>{deliverablesLabel}</span> {step.deliverables.join(' · ')}
            </p>
          )}
        </li>
      ))}
    </ol>
  )
}
