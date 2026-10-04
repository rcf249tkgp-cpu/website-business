import { archivo, fraunces, instrumentSerif } from '@/fonts'
import type { Dictionary } from '@/i18n'
import type { Locale } from '@/i18n/config'
import { CompareSlider } from './CompareSlider'
import { SectionHeading } from './SectionHeading'
import styles from './BeforeAfter.module.css'

export function BeforeAfter({ dict }: { lang: Locale; dict: Dictionary }) {
  const t = dict.beforeAfter
  const { cafe, salon, construction } = t.examples
  const examples = [
    { id: 'cafe', label: cafe.label, url: 'cafeaamu.fi' },
    { id: 'salon', label: salon.label, url: 'studiosavy.fi' },
    { id: 'construction', label: construction.label, url: 'vahvarakennus.fi' },
  ] as const

  return (
    <section
      id="before-after"
      className={`section ${styles.section} ${fraunces.variable} ${instrumentSerif.variable} ${archivo.variable}`}
      aria-labelledby="before-after-title"
    >
      <div className="container">
        <SectionHeading
          id="before-after-title"
          index="02"
          eyebrow={t.eyebrow}
          title={t.title}
          description={t.description}
        />
        <div className="reveal">
          <CompareSlider
            examples={[...examples]}
            sites={t.examples}
            t={{ tabsLabel: t.tabsLabel, hint: t.hint, before: t.before, after: t.after, compare: t.compare }}
          />
        </div>
        <p className={styles.disclaimer}>{t.disclaimer}</p>
      </div>
    </section>
  )
}
