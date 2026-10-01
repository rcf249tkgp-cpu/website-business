import { ImageResponse } from 'next/og'
import { siteConfig } from '@/config/site'
import { getDictionary } from '@/i18n'
import { isLocale, defaultLocale } from '@/i18n/config'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = siteConfig.name

export default async function OpengraphImage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const dict = getDictionary(isLocale(lang) ? lang : defaultLocale)
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 72,
        background: 'radial-gradient(ellipse at 50% 0%, #2a1f6b 0%, #06060b 65%)',
        color: '#f4f4f8',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 18, fontSize: 36, fontWeight: 600 }}>
        <div
          style={{
            width: 52,
            height: 52,
            borderRadius: 16,
            background: 'linear-gradient(135deg, #a594ff, #4f8cff)',
          }}
        />
        {siteConfig.name}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ fontSize: 68, fontWeight: 700, letterSpacing: -2, lineHeight: 1.05, maxWidth: 1000 }}>
          {dict.hero.titleLead}
        </div>
        <div style={{ fontSize: 68, fontWeight: 700, letterSpacing: -2, lineHeight: 1.05, color: '#a594ff' }}>
          {dict.hero.titleHighlight}
        </div>
      </div>
      <div style={{ fontSize: 26, color: '#a3a3b8' }}>{dict.hero.eyebrow}</div>
    </div>,
    size,
  )
}
