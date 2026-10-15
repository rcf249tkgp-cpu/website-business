import { notFound } from 'next/navigation'
import { StartDialog } from '@/components/inquiry/StartDialog'
import { schedulingUrl, turnstileSiteKey } from '@/config/site'
import { getDictionary } from '@/i18n'
import { isLocale } from '@/i18n/config'

/**
 * "Start a project" opened from within the site: the inquiry flow as a dialog over
 * the current page, still at /[lang]/start (shareable; Back closes it). Opening the
 * URL directly renders the full /[lang]/start page instead.
 */
export default async function StartModal({ params }: PageProps<'/[lang]/start'>) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const dict = getDictionary(lang)
  return (
    <StartDialog
      lang={lang}
      dict={{ form: dict.form, contact: dict.contact, close: dict.a11y.close }}
      schedulingUrl={schedulingUrl}
      turnstileSiteKey={turnstileSiteKey}
    />
  )
}
