import { siteConfig } from '@/config/site'
import type { Dictionary } from '@/i18n'
import type { Locale } from '@/i18n/config'
import { BrandMark } from './BrandMark'
import { SectionHeading, SplitWords } from './SectionHeading'
import styles from './About.module.css'

export function About({ lang, dict, standalone = false }: { lang: Locale; dict: Dictionary; standalone?: boolean }) {
  const { about } = dict
  const Sub = standalone ? 'h2' : 'h3'
  const SubSub = standalone ? 'h3' : 'h4'
  const { address } = siteConfig.contact
  return (
    <section
      id="about"
      className={`section ${styles.section}${standalone ? ' section-page' : ''}`}
      aria-labelledby="about-title"
    >
      <div className="container">
        <SectionHeading
          id="about-title"
          index="06"
          eyebrow={about.eyebrow}
          title={about.title}
          layout="stack"
          as={standalone ? 'h1' : 'h2'}
        />

        <p className={styles.statement} data-split>
          <SplitWords text={about.statement} />
        </p>

        <div className={styles.grid}>
          <figure className={`${styles.photo} reveal`}>
            <BrandMark size={56} />
            <figcaption>{about.photo}</figcaption>
          </figure>

          <div className={styles.body}>
            {about.body.map((p) => (
              <p key={p.slice(0, 24)} className="reveal">
                {p}
              </p>
            ))}

            <Sub className={styles.valuesTitle}>{about.valuesTitle}</Sub>
            <ol className={styles.values}>
              {about.values.map((v, i) => (
                <li key={v.title} className="reveal">
                  <span aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                  <SubSub>{v.title}</SubSub>
                  <p>{v.text}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className={`${styles.place} reveal`}>
            <svg className={styles.map} viewBox="0 0 320 200" aria-hidden="true">
              <path className={styles.water} d="M246 0c-14 30 6 52-16 84s-12 58-40 80c-14 12-18 24-20 36h150V0Z" />
              <g className={styles.streets}>
                <path d="M0 40l230 30M0 110l200 20M20 200l40-200M110 200l30-200M0 170l190 10" />
                <path className={styles.main} d="M60 0l60 200M0 80l220 40" />
              </g>
              <circle className={styles.pinRing} cx="128" cy="104" r="14" />
              <circle className={styles.pin} cx="128" cy="104" r="5" />
              <text x="142" y="96">
                {address.street}
              </text>
            </svg>
            <div className={styles.address}>
              <span>{about.findUs}</span>
              <address>
                {address.street}
                <br />
                {address.postalCode} {address.city}, {address.country[lang]}
              </address>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
