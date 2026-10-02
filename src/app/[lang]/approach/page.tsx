import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Contact } from '@/components/Contact'
import { WhyUs } from '@/components/WhyUs'
import { getDictionary } from '@/i18n'
import { isLocale } from '@/i18n/config'
import { pageMetadata } from '@/lib/page-metadata'

export async function generateMetadata({ params }: PageProps<'/[lang]/approach'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const dict = getDictionary(lang)
  return pageMetadata(lang, 'approach', dict.nav.why, dict.why.description)
}

export default async function Page({ params }: PageProps<'/[lang]/approach'>) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const dict = getDictionary(lang)
  return (
    <>
      <WhyUs dict={dict} standalone />
      <Contact lang={lang} dict={dict} variant="teaser" />
    </>
  )
}
