'use client'

import type { Dictionary } from '@/i18n'
import { Ember } from './concepts/Ember'
import { Fjord } from './concepts/Fjord'
import { Lumo } from './concepts/Lumo'
import { Voltra } from './concepts/Voltra'

type Projects = Dictionary['work']['projects']

/** The full page of one concept study. Loaded as its own chunk by ConceptShowcase. */
export default function ConceptSite({ id, t }: { id: keyof Projects; t: Projects }) {
  if (id === 'ember') return <Ember t={t.ember.site} />
  if (id === 'lumo') return <Lumo t={t.lumo.site} />
  if (id === 'voltra') return <Voltra t={t.voltra.site} />
  return <Fjord t={t.fjord.site} />
}
