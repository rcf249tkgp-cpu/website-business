'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useRef } from 'react'
import type { Dictionary } from '@/i18n'
import type { Locale } from '@/i18n/config'
import { Close } from '../Icons'
import { InquiryForm } from './InquiryForm'
import styles from './StartDialog.module.css'

interface Props {
  lang: Locale
  dict: { form: Dictionary['form']; contact: Dictionary['contact']; close: string }
  schedulingUrl: string
  turnstileSiteKey: string
}

/**
 * The project inquiry flow as its own experience: a full-screen sheet on phones and a
 * centred dialog on larger screens. It is a native modal <dialog> (focus stays inside,
 * Escape closes it); closing goes back in history, so the URL returns to the page below.
 */
export function StartDialog({ lang, dict, schedulingUrl, turnstileSiteKey }: Props) {
  const router = useRouter()
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (!dialog.open) dialog.showModal()
    const root = document.documentElement
    root.setAttribute('data-dialog-open', '')
    return () => root.removeAttribute('data-dialog-open')
  }, [])

  const close = () => router.back()

  return (
    <dialog
      ref={ref}
      className={styles.dialog}
      aria-labelledby="start-title"
      onCancel={(e) => {
        e.preventDefault()
        close()
      }}
      onClick={(e) => {
        // A click on the backdrop (outside the panel) closes the dialog.
        if (e.target === e.currentTarget) close()
      }}
    >
      <div className={styles.panel}>
        <header className={styles.head}>
          <div>
            <h2 id="start-title" className={styles.title}>
              {dict.contact.title}
            </h2>
            <p className={styles.description}>{dict.contact.description}</p>
          </div>
          <button type="button" className={styles.close} onClick={close} aria-label={dict.close}>
            <Close />
          </button>
        </header>
        <div className={styles.body}>
          <InquiryForm lang={lang} dict={{ form: dict.form }} schedulingUrl={schedulingUrl} turnstileSiteKey={turnstileSiteKey} />
        </div>
      </div>
    </dialog>
  )
}
