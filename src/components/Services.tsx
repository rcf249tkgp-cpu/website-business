import type { ComponentType, SVGProps } from 'react'
import type { Dictionary } from '@/i18n'
import { Cart, Check, Code, Layout, Refresh, Target } from './Icons'
import { SectionHeading } from './SectionHeading'
import styles from './Services.module.css'

const icons: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  design: Layout,
  development: Code,
  ecommerce: Cart,
  landing: Target,
  redesign: Refresh,
}

export function Services({ dict }: { dict: Dictionary }) {
  const { services } = dict
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
          {services.items.map((item, i) => {
            const Icon = icons[item.id] ?? Layout
            return (
              <li key={item.id} className={`card reveal ${styles.item}`} data-feature={i < 2 || undefined}>
                <span className={styles.icon}>
                  <Icon />
                </span>
                <span className={styles.number}>0{i + 1}</span>
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
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
