import type { Metadata } from 'next'
import { localeTags, locales, type Locale } from '@/i18n/config'

/** Title, description and language alternates for a page at /[lang]/[slug]. */
export function pageMetadata(lang: Locale, slug: string, title: string, description: string): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: `/${lang}/${slug}`,
      languages: Object.fromEntries(locales.map((l) => [localeTags[l], `/${l}/${slug}`])),
    },
    openGraph: { title, description, url: `/${lang}/${slug}` },
  }
}
