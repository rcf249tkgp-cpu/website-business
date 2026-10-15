import type { Dictionary } from '@/i18n'
import { Plus } from './Icons'
import { SectionHeading } from './SectionHeading'
import styles from './Faq.module.css'

/** Native <details> accordion: works without JavaScript and is keyboard accessible. */
export function Faq({ dict }: { dict: Dictionary }) {
  const { faq } = dict
  return (
    <section id="faq" className={`section ${styles.section}`} aria-labelledby="faq-title">
      <div className={`container ${styles.layout}`}>
        <div className={styles.side}>
          <SectionHeading id="faq-title" eyebrow={faq.eyebrow} title={faq.title} layout="stack" />
        </div>
        <div className={styles.list} data-stagger>
          {faq.items.map((item, i) => (
            <details key={item.q} className={styles.item} open={i === 0}>
              <summary>
                <span className={styles.q}>{item.q}</span>
                <Plus className={styles.icon} />
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
