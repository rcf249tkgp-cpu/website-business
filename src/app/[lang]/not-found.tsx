'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { getDictionary } from '@/i18n'
import { defaultLocale, isLocale } from '@/i18n/config'

export default function NotFound() {
  const params = useParams<{ lang?: string }>()
  const lang = isLocale(params?.lang) ? params.lang : defaultLocale
  const t = getDictionary(lang).notFound
  return (
    <section
      className="container"
      style={{
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        gap: 20,
        paddingTop: 'var(--header-h)',
      }}
    >
      <p
        className="gradient-text"
        style={{ fontSize: 'clamp(5rem, 16vw, 9rem)', fontWeight: 700, letterSpacing: '-0.06em', lineHeight: 1 }}
      >
        404
      </p>
      <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)' }}>{t.title}</h1>
      <p style={{ color: 'var(--text-muted)' }}>{t.description}</p>
      <Link href={`/${lang}`} className="btn btn-primary" style={{ marginTop: 12 }}>
        {t.cta}
      </Link>
    </section>
  )
}
