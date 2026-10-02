import type { ComponentType, SVGProps } from 'react'
import type { Dictionary } from '@/i18n'
import { Check, Gauge, Layout, Mail, Sparkle } from './Icons'
import { SectionHeading } from './SectionHeading'
import styles from './WhyUs.module.css'

const icons: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  clarity: Layout,
  craft: Sparkle,
  performance: Gauge,
  communication: Mail,
}

/** "Our approach": principles, concrete commitments and an honest note about being a new studio. */
export function WhyUs({ dict, standalone = false }: { dict: Dictionary; standalone?: boolean }) {
  const { why } = dict
  return (
    <section
      id="why"
      className={`section ${styles.section}${standalone ? ' section-page' : ''}`}
      aria-labelledby="why-title"
    >
      <div className={styles.bg} aria-hidden="true" />
      <div className="container">
        <SectionHeading
          id="why-title"
          as={standalone ? 'h1' : 'h2'}
          eyebrow={why.eyebrow}
          title={why.title}
          description={why.description}
        />

        <ul className={styles.principles}>
          {why.items.map((item) => {
            const Icon = icons[item.id] ?? Sparkle
            return (
              <li key={item.id} className={`reveal ${styles.principle}`}>
                <Icon className={styles.icon} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </li>
            )
          })}
        </ul>

        <div className={styles.lower}>
          <div className={`card reveal ${styles.commitments}`}>
            <h3>{why.commitments.title}</h3>
            <ul>
              {why.commitments.items.map((item) => (
                <li key={item}>
                  <Check />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className={`reveal ${styles.newStudio}`}>
            <h3>{why.newStudio.title}</h3>
            <p>{why.newStudio.body}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
