import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Contact } from '@/components/Contact'
import { getDictionary } from '@/i18n'
import { isLocale, localeTags, locales } from '@/i18n/config'

export async function generateMetadata({ params }: PageProps<'/[lang]/start'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const dict = getDictionary(lang)
  return {
    title: dict.nav.cta,
    description: dict.contact.description,
    alternates: {
      canonical: `/${lang}/start`,
      languages: Object.fromEntries(locales.map((l) => [localeTags[l], `/${l}/start`])),
    },
  }
}

/** Dedicated page for the project inquiry form. */
export default async function StartProject({ params }: PageProps<'/[lang]/start'>) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  return <Contact lang={lang} dict={getDictionary(lang)} variant="page" />
}
