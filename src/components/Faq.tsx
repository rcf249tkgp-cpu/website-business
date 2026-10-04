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
          <SectionHeading id="faq-title" index="07" eyebrow={faq.eyebrow} title={faq.title} layout="stack" />
        </div>
        <div className={styles.list}>
          {faq.items.map((item, i) => (
            <details key={item.q} className={`${styles.item} reveal`} open={i === 0}>
              <summary>
                <span className={styles.num} aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
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
