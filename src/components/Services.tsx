import type { Dictionary } from '@/i18n'
import { Check } from './Icons'
import { SectionHeading } from './SectionHeading'
import { ServiceVisual } from './ServiceVisuals'
import styles from './Services.module.css'

export function Services({ dict }: { dict: Dictionary }) {
  const { services } = dict
  const labels = { ...services.labels, addToCart: dict.work.mock.addToCart }
  return (
    <section id="services" className="section" aria-labelledby="services-title">
      <div className="container">
        <SectionHeading
          id="services-title"
          eyebrow={services.eyebrow}
          title={services.title}
          description={services.description}
        />
        <ul className={styles.grid}>
          {services.items.map((item) => (
            <li key={item.id} className={`card reveal ${styles.item}`} data-id={item.id}>
              <ServiceVisual id={item.id} labels={labels} />
              <div className={styles.body}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.description}>{item.description}</p>
                <ul className={styles.points}>
                  {item.points.map((point) => (
                    <li key={point}>
                      <Check />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>

        <Capabilities dict={dict} />
      </div>
    </section>
  )
}

function Capabilities({ dict }: { dict: Dictionary }) {
  const c = dict.services.capabilities
  return (
    <div className={`${styles.capabilities} reveal`}>
      <div className={styles.capIntro}>
        <p className={styles.capEyebrow}>{c.eyebrow}</p>
        <h3 id="capabilities-title" className={styles.capTitle}>
          {c.title}
        </h3>
        <p className={styles.capDescription}>{c.description}</p>
      </div>
      <div className={styles.capGroups}>
        {c.groups.map((group) => (
          <div key={group.title} className={styles.capGroup}>
            <h4>{group.title}</h4>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
