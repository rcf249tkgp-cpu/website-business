import type { ComponentType, SVGProps } from 'react'
import type { Dictionary } from '@/i18n'
import { Diamond, Gauge, Sparkle, TrendUp } from './Icons'
import { SectionHeading } from './SectionHeading'
import styles from './WhyUs.module.css'

const icons: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  quality: Diamond,
  creativity: Sparkle,
  performance: Gauge,
  value: TrendUp,
}

export function WhyUs({ dict }: { dict: Dictionary }) {
  const { why } = dict
  return (
    <section id="why" className={`section ${styles.section}`} aria-labelledby="why-title">
      <div className={styles.bg} aria-hidden="true" />
      <div className="container">
        <SectionHeading
          id="why-title"
          eyebrow={why.eyebrow}
          title={why.title}
          description={why.description}
          align="center"
        />

        <dl className={`${styles.stats} reveal`}>
          {why.stats.map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <dt>{stat.label}</dt>
              <dd className="gradient-text">{stat.value}</dd>
            </div>
          ))}
        </dl>

        <ul className={styles.grid}>
          {why.items.map((item) => {
            const Icon = icons[item.id] ?? Sparkle
            return (
              <li key={item.id} className={`card reveal ${styles.item}`}>
                <Icon className={styles.icon} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
