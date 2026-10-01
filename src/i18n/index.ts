import en, { type Dictionary } from './dictionaries/en'
import fi from './dictionaries/fi'
import sv from './dictionaries/sv'
import type { Locale } from './config'

const dictionaries: Record<Locale, Dictionary> = { en, sv, fi }

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale]
}

export type { Dictionary }
