'use client'

import { useEffect, useRef, useState, type CSSProperties } from 'react'
import type { Dictionary } from '@/i18n'
import { Check, Monitor, Smartphone, Tablet } from './Icons'
import styles from './HeroVisual.module.css'

type Device = 'desktop' | 'tablet' | 'mobile'

const devices: { id: Device; size: string; icon: typeof Monitor }[] = [
  { id: 'desktop', size: '1440 × 900', icon: Monitor },
  { id: 'tablet', size: '834 × 1112', icon: Tablet },
  { id: 'mobile', size: '390 × 844', icon: Smartphone },
]

/** The container-query rule that is active for each preview size (shown in the code card). */
const rules: { device: Device; query: string; cols: number }[] = [
  { device: 'desktop', query: '(width > 720px)', cols: 3 },
  { device: 'tablet', query: '(width > 440px)', cols: 2 },
  { device: 'mobile', query: '(width <= 440px)', cols: 1 },
]

/**
 * Interactive hero illustration: a website preview that reflows between
 * desktop, tablet and mobile (real container queries), tilts with the pointer
 * and floats a few layered cards in 3D space.
 */
export function HeroVisual({ t }: { t: Dictionary['hero']['visual'] }) {
  const [device, setDevice] = useState<Device>('desktop')
  const stageRef = useRef<HTMLDivElement>(null)

  // Pointer-driven tilt. Writes CSS variables directly to avoid re-rendering.
  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || still) return
    let frame = 0
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const r = stage.getBoundingClientRect()
        const x = (e.clientX - r.left) / r.width - 0.5
        const y = (e.clientY - r.top) / r.height - 0.5
        stage.style.setProperty('--ry', `${(-12 + x * 14).toFixed(2)}deg`)
        stage.style.setProperty('--rx', `${(6 - y * 10).toFixed(2)}deg`)
      })
    }
    const onLeave = () => {
      cancelAnimationFrame(frame)
      stage.style.removeProperty('--ry')
      stage.style.removeProperty('--rx')
    }
    stage.addEventListener('pointermove', onMove)
    stage.addEventListener('pointerleave', onLeave)
    return () => {
      cancelAnimationFrame(frame)
      stage.removeEventListener('pointermove', onMove)
      stage.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  const active = devices.find((d) => d.id === device)!

  return (
    <div className={styles.wrap}>
      <div className={styles.controls} role="group" aria-label={t.label}>
        {devices.map((d) => (
          <button
            key={d.id}
            type="button"
            className={styles.control}
            aria-pressed={device === d.id}
            onClick={() => setDevice(d.id)}
          >
            <d.icon aria-hidden="true" />
            {t[d.id]}
          </button>
        ))}
        <span className={styles.hint}>{t.hint}</span>
      </div>

      <div className={styles.stage} ref={stageRef}>
        <div className={styles.glow} aria-hidden="true" />
        <div className={styles.scene} aria-hidden="true">
          <div className={styles.browser} data-device={device}>
            <div className={styles.chrome}>
              <span className={styles.dots}>
                <i />
                <i />
                <i />
              </span>
              <span className={styles.url}>
                <svg viewBox="0 0 16 16" width="10" height="10">
                  <path
                    d="M4.5 7V5a3.5 3.5 0 0 1 7 0v2M3.5 7h9v6.5h-9z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  />
                </svg>
                yourbusiness.com
              </span>
              <span className={styles.size} data-size-label>
                {active.size}
              </span>
            </div>

            <div className={styles.site}>
              <div className={styles.siteNav}>
                <span className={styles.siteLogo} />
                <span className={styles.siteLinks}>
                  <i />
                  <i />
                  <i />
                </span>
                <span className={styles.siteButton} />
                <span className={styles.siteBurger}>
                  <i />
                  <i />
                </span>
              </div>
              <div className={styles.siteHero}>
                <div className={styles.siteCopy}>
                  <span className={`${styles.bar} ${styles.barXl}`} />
                  <span className={`${styles.bar} ${styles.barLg}`} />
                  <span className={`${styles.bar} ${styles.barMd}`} />
                  <span className={`${styles.bar} ${styles.barSm}`} />
                  <span className={styles.siteCtas}>
                    <i />
                    <i />
                  </span>
                </div>
                <div className={styles.siteImage}>
                  <span className={styles.siteOrbit} />
                </div>
              </div>
              <div className={styles.siteCards}>
                {[0, 1, 2].map((i) => (
                  <span key={i} className={styles.siteCard}>
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
              <span>layout.css</span>
              <span className={styles.codeBadge}>CSS</span>
            </div>
            <pre>
              {rules.map((rule) => (
                <span key={rule.device} className={styles.rule} data-active={rule.device === device || undefined}>
                  <span className={styles.kw}>@container</span> <span className={styles.str}>{rule.query}</span> {'{\n'}
                  {'  '}
                  <span className={styles.prop}>--cols</span>: <span className={styles.num}>{rule.cols}</span>
                  {';\n}'}
                </span>
              ))}
            </pre>
          </div>

          <div className={`${styles.float} ${styles.checks}`}>
            <p className={styles.checksTitle}>{t.checksTitle}</p>
            <ul>
              {t.checks.map((check, i) => (
                <li key={check} style={{ '--i': i } as CSSProperties}>
                  <Check />
                  {check}
                </li>
              ))}
            </ul>
          </div>

          <div className={`${styles.float} ${styles.deploy}`}>
            <span className={styles.deployIcon}>
              <Check />
            </span>
            <span className={styles.deployText}>
              <strong>{t.deploy}</strong>
              <span data-deploy-label>preview · {active.size.split(' ')[0]}px</span>
            </span>
            <span className={styles.live}>
              <i />
              {t.live}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
