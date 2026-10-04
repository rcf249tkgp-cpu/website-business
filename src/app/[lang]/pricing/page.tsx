import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Contact } from '@/components/Contact'
import { Faq } from '@/components/Faq'
import { Pricing } from '@/components/Pricing'
import { getDictionary } from '@/i18n'
import { isLocale } from '@/i18n/config'
import { pageMetadata } from '@/lib/page-metadata'

export async function generateMetadata({ params }: PageProps<'/[lang]/pricing'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const dict = getDictionary(lang)
  return pageMetadata(lang, 'pricing', dict.nav.pricing, dict.pricing.description)
}

export default async function Page({ params }: PageProps<'/[lang]/pricing'>) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const dict = getDictionary(lang)
  return (
    <>
      <Pricing lang={lang} dict={dict} standalone />
      <Faq dict={dict} />
      <Contact lang={lang} dict={dict} variant="teaser" />
    </>
  )
}
