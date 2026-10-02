import type { MetadataRoute } from 'next'
import { siteUrl } from '@/config/site'
import { localeTags, locales } from '@/i18n/config'

const paths = ['', '/services', '/work', '/approach', '/process', '/contact', '/start', '/privacy', '/terms']

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.flatMap((path) =>
    locales.map((lang) => ({
      url: `${siteUrl}/${lang}${path}`,
      changeFrequency: 'monthly' as const,
      priority: path === '' ? 1 : 0.3,
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [localeTags[l], `${siteUrl}/${l}${path}`])),
      },
    })),
  )
}
