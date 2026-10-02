import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Contact } from '@/components/Contact'
import { Faq } from '@/components/Faq'
import { Process } from '@/components/Process'
import { getDictionary } from '@/i18n'
import { isLocale } from '@/i18n/config'
import { pageMetadata } from '@/lib/page-metadata'

export async function generateMetadata({ params }: PageProps<'/[lang]/process'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const dict = getDictionary(lang)
  return pageMetadata(lang, 'process', dict.nav.process, dict.process.description)
}

export default async function Page({ params }: PageProps<'/[lang]/process'>) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const dict = getDictionary(lang)
  return (
    <>
      <Process dict={dict} standalone />
      <Faq dict={dict} />
      <Contact lang={lang} dict={dict} variant="teaser" />
    </>
  )
}
