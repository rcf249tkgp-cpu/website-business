'use client'

import type { Dictionary } from '@/i18n'
import { CafeAfter, CafeBefore } from './demos/Cafe'
import { ConstructionAfter, ConstructionBefore } from './demos/Construction'
import { SalonAfter, SalonBefore } from './demos/Salon'

type Examples = Dictionary['beforeAfter']['examples']

/** One side of a before/after example. Loaded as its own chunk by CompareSlider. */
export default function DemoSite({ id, side, t }: { id: keyof Examples; side: 'before' | 'after'; t: Examples }) {
  if (id === 'cafe') return side === 'before' ? <CafeBefore t={t.cafe.before} /> : <CafeAfter t={t.cafe.after} />
  if (id === 'salon')
    return side === 'before' ? (
      <SalonBefore t={t.salon.before} nav={t.salon.after.nav} />
    ) : (
      <SalonAfter t={t.salon.after} />
    )
  return side === 'before' ? (
    <ConstructionBefore t={t.construction.before} />
  ) : (
    <ConstructionAfter t={t.construction.after} />
  )
}
