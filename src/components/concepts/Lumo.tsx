import type { Dictionary } from '@/i18n'
import styles from './Lumo.module.css'

type T = Dictionary['work']['projects']['lumo']['site']

export function Lumo({ t }: { t: T }) {
  const days = Array.from({ length: 21 }, (_, i) => i + 6)
  return (
    <div className={styles.site}>
      <header className={styles.nav}>
        <span className={styles.logo}>
          <i />
          lumo
        </span>
        <span className={styles.links}>
          {t.nav.map((n) => (
            <span key={n}>{n}</span>
          ))}
        </span>
        <span className={styles.book}>{t.book}</span>
      </header>

      <section className={styles.hero}>
        <div className={styles.copy}>
          <span className={styles.kicker}>{t.kicker}</span>
          <strong className={styles.title}>{t.title}</strong>
          <span className={styles.text}>{t.text}</span>
          <span className={styles.cta}>{t.cta}</span>
        </div>
        <div className={styles.visual}>
          <span className={styles.window} />
          <div className={styles.widget}>
            <span className={styles.wHead}>
              <b>{t.month}</b>
              <span>‹ ›</span>
            </span>
            <span className={styles.days}>
              {days.map((d) => (
                <i key={d} data-on={d === 14 || undefined} data-off={d % 7 === 5 || d % 7 === 6 || undefined}>
                  {d}
                </i>
              ))}
            </span>
            <span className={styles.times}>
              {t.times.map((time, i) => (
                <i key={time} data-on={i === 1 || undefined}>
                  {time}
                </i>
              ))}
            </span>
            <span className={styles.confirm}>{t.cta} →</span>
          </div>
        </div>
      </section>

      <section className={styles.steps}>
        <strong>{t.stepsTitle}</strong>
        <ol>
          {t.steps.map((s, i) => (
            <li key={s}>
              <i>{i + 1}</i>
              {s}
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.services}>
        <div className={styles.list}>
          <strong>{t.servicesTitle}</strong>
          {t.services.map(([name, time]) => (
            <span key={name} className={styles.row}>
              <b>{name}</b>
              <em>{time}</em>
              <i>→</i>
            </span>
          ))}
        </div>
        <span className={styles.room} />
      </section>

      <footer className={styles.footer}>
        <span className={styles.logo}>
          <i />
          lumo
        </span>
        <span>Helsinki · {t.book}</span>
      </footer>
    </div>
  )
}
