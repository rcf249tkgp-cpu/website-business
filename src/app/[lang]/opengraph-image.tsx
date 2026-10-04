import { readFile } from 'node:fs/promises'
import path from 'node:path'
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
  const [michroma, icon] = await Promise.all([
    readFile(path.join(process.cwd(), 'src/fonts/michroma-latin.woff')),
    readFile(path.join(process.cwd(), 'src/app/icon.svg'), 'utf8'),
  ])
  const mark = `data:image/svg+xml;base64,${Buffer.from(icon).toString('base64')}`
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 72,
        background: 'radial-gradient(ellipse at 50% 0%, #0d2a66 0%, #05070d 65%)',
        color: '#e6e9ef',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={mark} width={64} height={64} alt="" />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: 'Michroma' }}>
          <div style={{ fontSize: 34, letterSpacing: 2, color: '#e2e8f0' }}>FUSION</div>
          <div style={{ fontSize: 16, letterSpacing: 11, paddingLeft: 11, color: '#4d8dff' }}>SITES</div>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ fontFamily: 'Michroma', fontSize: 56, lineHeight: 1.15, maxWidth: 1050 }}>
          {dict.hero.titleLead}
        </div>
        <div style={{ fontFamily: 'Michroma', fontSize: 56, lineHeight: 1.15, color: '#4d8dff' }}>
          {dict.hero.titleHighlight}
        </div>
      </div>
      <div style={{ fontSize: 26, color: '#a0a7b4' }}>{dict.hero.kicker}</div>
    </div>,
    { ...size, fonts: [{ name: 'Michroma', data: michroma, weight: 400, style: 'normal' }] },
  )
}
