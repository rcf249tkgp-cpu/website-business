import type { Metadata, Viewport } from 'next'
import { notFound } from 'next/navigation'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Spotlight } from '@/components/Spotlight'
import { siteConfig, siteUrl } from '@/config/site'
import { getDictionary } from '@/i18n'
import { defaultLocale, isLocale, localeTags, locales } from '@/i18n/config'
import '../globals.css'

export const dynamicParams = false

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export const viewport: Viewport = {
  themeColor: '#06060b',
  colorScheme: 'dark',
}

export async function generateMetadata({ params }: LayoutProps<'/[lang]'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const dict = getDictionary(lang)
  return {
    metadataBase: new URL(siteUrl),
    title: { default: dict.meta.title, template: `%s — ${siteConfig.name}` },
    description: dict.meta.description,
    applicationName: siteConfig.name,
    alternates: {
      canonical: `/${lang}`,
      languages: { ...Object.fromEntries(locales.map((l) => [localeTags[l], `/${l}`])), 'x-default': `/${defaultLocale}` },
    },
    openGraph: {
      type: 'website',
      siteName: siteConfig.name,
      title: dict.meta.title,
      description: dict.meta.description,
      locale: localeTags[lang].replace('-', '_'),
      url: `/${lang}`,
    },
    twitter: { card: 'summary_large_image', title: dict.meta.title, description: dict.meta.description },
    robots: { index: true, follow: true },
  }
}

export default async function RootLayout({ children, params }: LayoutProps<'/[lang]'>) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const dict = getDictionary(lang)

  return (
    <html lang={localeTags[lang]} className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          {dict.a11y.skipToContent}
        </a>
        <Header lang={lang} dict={{ nav: dict.nav, a11y: dict.a11y }} />
        <main id="main">{children}</main>
        <Footer lang={lang} dict={dict} />
        <Spotlight />
      </body>
    </html>
  )
}
