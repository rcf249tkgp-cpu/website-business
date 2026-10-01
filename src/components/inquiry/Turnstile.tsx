'use client'

import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, options: Record<string, unknown>) => string
      remove: (id: string) => void
    }
  }
}

const SCRIPT_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'

function loadScript(): Promise<void> {
  if (window.turnstile) return Promise.resolve()
  const existing = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT_SRC}"]`)
  return new Promise((resolve, reject) => {
    const script = existing ?? Object.assign(document.createElement('script'), { src: SCRIPT_SRC, async: true })
    script.addEventListener('load', () => resolve())
    script.addEventListener('error', () => reject(new Error('Turnstile failed to load')))
    if (!existing) document.head.appendChild(script)
  })
}

/** Cloudflare Turnstile widget. Only rendered when NEXT_PUBLIC_TURNSTILE_SITE_KEY is set. */
export function Turnstile({
  siteKey,
  lang,
  onToken,
}: {
  siteKey: string
  lang: string
  onToken: (token: string) => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const callback = useRef(onToken)

  useEffect(() => {
    callback.current = onToken
  }, [onToken])

  useEffect(() => {
    let widgetId: string | undefined
    let cancelled = false
    loadScript()
      .then(() => {
        if (cancelled || !ref.current || !window.turnstile) return
        widgetId = window.turnstile.render(ref.current, {
          sitekey: siteKey,
          theme: 'dark',
          language: lang,
          callback: (token: string) => callback.current(token),
          'expired-callback': () => callback.current(''),
          'error-callback': () => callback.current(''),
        })
      })
      .catch(() => callback.current(''))
    return () => {
      cancelled = true
      if (widgetId && window.turnstile) window.turnstile.remove(widgetId)
    }
  }, [siteKey, lang])

  return <div ref={ref} />
}
