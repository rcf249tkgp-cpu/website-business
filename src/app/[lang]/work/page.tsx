import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Contact } from '@/components/Contact'
import { Work } from '@/components/Work'
import { getDictionary } from '@/i18n'
import { isLocale } from '@/i18n/config'
import { pageMetadata } from '@/lib/page-metadata'

export async function generateMetadata({ params }: PageProps<'/[lang]/work'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const dict = getDictionary(lang)
  return pageMetadata(lang, 'work', dict.nav.work, dict.work.description)
}

export default async function Page({ params }: PageProps<'/[lang]/work'>) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const dict = getDictionary(lang)
  return (
    <>
      <Work lang={lang} dict={dict} standalone />
      <Contact lang={lang} dict={dict} variant="teaser" />
    </>
  )
}
