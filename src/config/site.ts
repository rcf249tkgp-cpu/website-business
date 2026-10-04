/**
 * Company branding & contact details.
 *
 * Everything that identifies the business lives here so it can be changed in
 * one place. Values that differ per deployment (or are secret) are read from
 * environment variables instead — see `.env.example`.
 */
export const siteConfig = {
  /** Brand name shown in the header, footer, metadata and emails. */
  name: 'Fusion Sites',
  /** Short tagline used in metadata and the footer. */
  tagline: 'Digital studio',
  /** Legal entity shown in the footer and legal pages. */
  legalName: 'Fusion Sites Oy',
  /** Business ID / org. number (Y-tunnus / organisationsnummer). Leave empty to hide. */
  businessId: '1234567-8',

  /** Public contact details. */
  contact: {
    email: 'hello@fusionsites.fi',
    phone: '+358 40 123 4567',
    /** Phone in E.164 format for `tel:` links. */
    phoneHref: '+358401234567',
    address: {
      street: 'Työpajankatu 17',
      postalCode: '00580',
      city: 'Helsinki',
      /** ISO 3166 country code (structured data). */
      countryCode: 'FI',
      /** Per language: en / sv / fi. */
      country: { en: 'Finland', sv: 'Finland', fi: 'Suomi' },
    },
    /** Opening hours shown next to the contact details, per language. */
    hours: { en: 'Mon–Fri 9–17 (Finnish time)', sv: 'Mån–fre 9–17 (finsk tid)', fi: 'Ma–pe 9–17' },
  },

  /** Social profiles. Remove any you don't use. */
  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
    { label: 'Instagram', href: 'https://www.instagram.com/' },
    { label: 'GitHub', href: 'https://github.com/' },
  ],

  /** Currency used for budget ranges in the project form. */
  currency: 'EUR',

  /**
   * Budget ranges offered in the project form. `min: 0` means "up to", `max: null` means "and above".
   * Labels are formatted per language automatically.
   */
  budgetRanges: [
    { id: 'b1', min: 0, max: 2500 },
    { id: 'b2', min: 2500, max: 5000 },
    { id: 'b3', min: 5000, max: null },
  ],

  /**
   * Starting prices shown in the Pricing section, in euros excluding VAT.
   * `null` shows "Price on request" until you fill in a number, e.g. `basic: 1490`.
   */
  pricing: {
    basic: null as number | null,
    standard: null as number | null,
    custom: null as number | null,
    /** Monthly hosting & maintenance plan. */
    maintenance: null as number | null,
  },

  /** The real client project featured in the Work section. */
  featuredCase: {
    url: 'https://vyroathletics.com',
    /** Screenshots of the live site in /public/work/vyro/ (all 1564 × 1220). */
    screens: [
      { id: 'drop', src: '/work/vyro/drop.webp' },
      { id: 'shop', src: '/work/vyro/shop.webp' },
      { id: 'product', src: '/work/vyro/product.webp' },
      {
        id: 'reviews',
        src: '/work/vyro/reviews.webp',
        /** Placeholder review texts, blurred in the preview: [left, top, width, height] in % of the image. */
        blur: [
          [1.0, 70.0, 24.4, 21.0],
          [25.3, 76.0, 24.3, 21.0],
          [49.5, 70.0, 24.3, 21.0],
          [73.7, 76.0, 24.4, 21.0],
        ],
      },
    ] as const,
    screenSize: { width: 1564, height: 1220 },
    /** Phone screenshots in /public/work/vyro/mobile/ (640 wide; `page` names the matching label). */
    mobileScreens: [
      { id: 'drop', src: '/work/vyro/mobile/drop.webp', page: 'drop' },
      { id: 'products', src: '/work/vyro/mobile/products.webp', page: 'shop' },
      { id: 'product', src: '/work/vyro/mobile/product.webp', page: 'product' },
    ] as const,
    mobileSize: { width: 640, height: 1199 },
  },

  /** Meeting time slots offered in the project form (local time of the studio). */
  meetingSlots: ['09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00'],
  /** Timezone the meeting slots refer to. */
  meetingTimezone: 'Europe/Helsinki',
} as const

/**
 * Public site URL, used for canonical links, sitemap and Open Graph.
 * Set NEXT_PUBLIC_SITE_URL in production.
 */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/$/, '')

/** Optional Calendly (or compatible) scheduling link, e.g. https://calendly.com/your-team/intro-call */
export const schedulingUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || ''

/** Optional Cloudflare Turnstile site key for extra spam protection. */
export const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ''

export type BudgetRangeId = (typeof siteConfig.budgetRanges)[number]['id']
