'use client'

import dynamic from 'next/dynamic'
import { useEffect, useRef, useState } from 'react'
import type { Dictionary } from '@/i18n'
import { Monitor, Smartphone } from './Icons'
import styles from './Work.module.css'

const ConceptSite = dynamic(() => import('./ConceptSite'))

type Projects = Dictionary['work']['projects']

export interface Concept {
  id: keyof Projects
  name: string
  category: string
  summary: string
  url: string
}

interface Labels {
  projectsLabel: string
  devicesLabel: string
  desktop: string
  mobile: string
  scrollHint: string
  conceptBadge: string
}

/**
 * Concept studies in a live device frame. Pick a concept, switch between a
 * desktop and a phone frame (the site reflows with container queries) and
 * scroll inside the preview.
 */
export function ConceptShowcase({ concepts, sites, t }: { concepts: Concept[]; sites: Projects; t: Labels }) {
  const [active, setActive] = useState(0)
  const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop')
  const [scrolled, setScrolled] = useState(false)
  const viewport = useRef<HTMLDivElement>(null)
  const concept = concepts[active]

  useEffect(() => {
    viewport.current?.scrollTo({ top: 0 })
  }, [active, device])

  return (
    <div className={styles.showcase}>
      <div className={styles.conceptList} role="group" aria-label={t.projectsLabel}>
        {concepts.map((c, i) => (
          <button
            key={c.id}
            type="button"
            className={styles.conceptItem}
            aria-pressed={i === active}
            onClick={() => setActive(i)}
          >
            <span className={styles.conceptIndex} aria-hidden="true">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className={styles.conceptName}>{c.name}</span>
            <span className={styles.conceptCategory}>{c.category}</span>
            <span className={styles.conceptSummary}>{c.summary}</span>
          </button>
        ))}
      </div>

      <div className={styles.stageCol}>
        <div className={styles.stageBar}>
          <span className={styles.badge}>{t.conceptBadge}</span>
          <div className={styles.devices} role="group" aria-label={t.devicesLabel}>
            <button type="button" aria-pressed={device === 'desktop'} onClick={() => setDevice('desktop')}>
              <Monitor />
              {t.desktop}
            </button>
            <button type="button" aria-pressed={device === 'mobile'} onClick={() => setDevice('mobile')}>
              <Smartphone />
              {t.mobile}
            </button>
          </div>
        </div>

        <div className={styles.frameWrap}>
          <div className={styles.frame} data-device={device}>
            <div className={styles.frameChrome} aria-hidden="true">
              <span>
                <i />
                <i />
                <i />
              </span>
              <span className={styles.frameUrl}>{concept.url}</span>
            </div>
            <div
              ref={viewport}
              className={styles.viewport}
              tabIndex={0}
              role="region"
              aria-label={`${concept.name} — ${t.scrollHint}`}
              onScroll={() => !scrolled && setScrolled(true)}
            >
              <div key={concept.id} className={styles.siteSwap} aria-hidden="true">
                <ConceptSite id={concept.id} t={sites} />
              </div>
            </div>
            <span className={styles.scrollHint} data-hidden={scrolled || undefined} aria-hidden="true">
              <i />
              {t.scrollHint}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
