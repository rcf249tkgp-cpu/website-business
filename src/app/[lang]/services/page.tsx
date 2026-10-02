import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Contact } from '@/components/Contact'
import { Services } from '@/components/Services'
import { getDictionary } from '@/i18n'
import { isLocale } from '@/i18n/config'
import { pageMetadata } from '@/lib/page-metadata'

export async function generateMetadata({ params }: PageProps<'/[lang]/services'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const dict = getDictionary(lang)
  return pageMetadata(lang, 'services', dict.nav.services, dict.services.description)
}

export default async function Page({ params }: PageProps<'/[lang]/services'>) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const dict = getDictionary(lang)
  return (
    <>
      <Services dict={dict} standalone />
      <Contact lang={lang} dict={dict} variant="teaser" />
    </>
  )
}
