import type { Dictionary } from '@/i18n'
import { Check } from './Icons'
import styles from './HeroVisual.module.css'

const codeLines: { indent: number; parts: [string, string][] }[] = [
  {
    indent: 0,
    parts: [
      ['kw', 'export default'],
      ['fn', ' function'],
      ['id', ' Home'],
      ['pl', '() {'],
    ],
  },
  {
    indent: 1,
    parts: [
      ['kw', 'return'],
      ['pl', ' ('],
    ],
  },
  {
    indent: 2,
    parts: [
      ['tag', '<Hero'],
      ['attr', ' goal'],
      ['pl', '='],
      ['str', '"more customers"'],
      ['tag', ' />'],
    ],
  },
  {
    indent: 2,
    parts: [
      ['tag', '<Services'],
      ['attr', ' fast'],
      ['attr', ' accessible'],
      ['tag', ' />'],
    ],
  },
  {
    indent: 2,
    parts: [
      ['tag', '<Checkout'],
      ['attr', ' payments'],
      ['pl', '={'],
      ['str', "['klarna']"],
      ['pl', '}'],
      ['tag', ' />'],
    ],
  },
  { indent: 1, parts: [['pl', ')']] },
  { indent: 0, parts: [['pl', '}']] },
]

function Ring({ label, delay }: { label: string; delay: number }) {
  return (
    <div className={styles.ring}>
      <svg viewBox="0 0 44 44" aria-hidden="true">
        <circle cx="22" cy="22" r="19" className={styles.ringTrack} />
        <circle cx="22" cy="22" r="19" className={styles.ringValue} style={{ animationDelay: `${delay}s` }} />
      </svg>
      <span className={styles.ringNumber}>100</span>
      <span className={styles.ringLabel}>{label}</span>
    </div>
  )
}

/** Decorative hero composition: a site being built, with code and quality scores. */
export function HeroVisual({ dict }: { dict: Dictionary }) {
  const p = dict.hero.panel
  return (
    <div className={styles.stage} aria-hidden="true">
      <div className={styles.glow} />

      <div className={styles.browser}>
        <div className={styles.chrome}>
          <span className={styles.dots}>
            <i />
            <i />
            <i />
          </span>
          <span className={styles.url}>
            <svg viewBox="0 0 16 16" width="11" height="11">
              <path
                d="M4.5 7V5a3.5 3.5 0 0 1 7 0v2M3.5 7h9v6.5h-9z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
              />
            </svg>
            yourbusiness.com
          </span>
          <span className={styles.chromeSpacer} />
        </div>

        <div className={styles.site}>
          <div className={`${styles.siteNav} ${styles.build}`} style={{ animationDelay: '0.9s' }}>
            <span className={styles.siteLogo} />
            <span className={styles.siteLinks}>
              <i />
              <i />
              <i />
            </span>
            <span className={styles.siteButton} />
          </div>
          <div className={styles.siteHero}>
            <div className={styles.siteCopy}>
              <span className={`${styles.bar} ${styles.barXl} ${styles.build}`} style={{ animationDelay: '1.1s' }} />
              <span className={`${styles.bar} ${styles.barLg} ${styles.build}`} style={{ animationDelay: '1.2s' }} />
              <span className={`${styles.bar} ${styles.barMd} ${styles.build}`} style={{ animationDelay: '1.35s' }} />
              <span className={`${styles.bar} ${styles.barSm} ${styles.build}`} style={{ animationDelay: '1.45s' }} />
              <span className={`${styles.siteCtas} ${styles.build}`} style={{ animationDelay: '1.6s' }}>
                <i />
                <i />
              </span>
            </div>
            <div className={`${styles.siteImage} ${styles.build}`} style={{ animationDelay: '1.3s' }}>
              <span className={styles.siteImageShape} />
            </div>
          </div>
          <div className={styles.siteCards}>
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`${styles.siteCard} ${styles.build}`}
                style={{ animationDelay: `${1.8 + i * 0.12}s` }}
              >
                <i />
                <b />
                <b />
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className={`${styles.float} ${styles.code}`}>
        <div className={styles.codeHeader}>
          <span>page.tsx</span>
          <span className={styles.codeBadge}>TSX</span>
        </div>
        <pre>
          {codeLines.map((line, i) => (
            <span key={i} className={styles.codeLine} style={{ animationDelay: `${0.7 + i * 0.18}s` }}>
              <span className={styles.lineNo}>{i + 1}</span>
              {'  '.repeat(line.indent)}
              {line.parts.map(([kind, text], j) => (
                <span key={j} className={styles[kind]}>
                  {text}
                </span>
              ))}
            </span>
          ))}
        </pre>
      </div>

      <div className={`${styles.float} ${styles.scores}`}>
        <div className={styles.rings}>
          <Ring label={p.performance} delay={1.2} />
          <Ring label={p.accessibility} delay={1.35} />
          <Ring label={p.bestPractices} delay={1.5} />
          <Ring label={p.seo} delay={1.65} />
        </div>
        <p className={styles.scoresCaption}>{p.lighthouse}</p>
      </div>

      <div className={`${styles.float} ${styles.deploy}`}>
        <span className={styles.deployIcon}>
          <Check />
        </span>
        <span className={styles.deployText}>
          <strong>{p.deploy}</strong>
          <span>main · 0.8s</span>
        </span>
        <span className={styles.live}>
          <i />
          {p.live}
        </span>
      </div>
    </div>
  )
}
