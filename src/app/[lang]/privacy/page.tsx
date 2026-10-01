import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { LegalPage } from '@/components/LegalPage'
import { getDictionary } from '@/i18n'
import { isLocale, localeTags, locales } from '@/i18n/config'

export async function generateMetadata({ params }: PageProps<'/[lang]/privacy'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  return {
    title: getDictionary(lang).legal.privacy.title,
    alternates: {
      canonical: `/${lang}/privacy`,
      languages: Object.fromEntries(locales.map((l) => [localeTags[l], `/${l}/privacy`])),
    },
  }
}

export default async function Page({ params }: PageProps<'/[lang]/privacy'>) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const dict = getDictionary(lang)
  return <LegalPage lang={lang} back={dict.legal.back} updatedLabel={dict.legal.updated} content={dict.legal.privacy} />
}
