import { Contact } from '@/components/Contact'
import { Faq } from '@/components/Faq'
import { Hero } from '@/components/Hero'
import { Process } from '@/components/Process'
import { Services } from '@/components/Services'
import { TechMarquee } from '@/components/TechMarquee'
import { WhyUs } from '@/components/WhyUs'
import { Work } from '@/components/Work'
import { siteConfig, siteUrl } from '@/config/site'
import { getDictionary } from '@/i18n'
import { isLocale, localeTags } from '@/i18n/config'
import { notFound } from 'next/navigation'

export default async function Home({ params }: PageProps<'/[lang]'>) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const dict = getDictionary(lang)

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    description: dict.meta.description,
    url: `${siteUrl}/${lang}`,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phoneHref,
    inLanguage: localeTags[lang],
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.contact.address.street,
      postalCode: siteConfig.contact.address.postalCode,
      addressLocality: siteConfig.contact.address.city,
      addressCountry: siteConfig.contact.address.countryCode,
    },
    sameAs: siteConfig.social.map((s) => s.href),
    makesOffer: dict.services.items.map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s.title, description: s.description },
    })),
  }

  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: localeTags[lang],
    mainEntity: dict.faq.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData).replace(/</g, '\\u003c') }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
      />
      <Hero lang={lang} dict={dict} />
      <TechMarquee label={dict.marquee.label} />
      <Services dict={dict} />
      <Work dict={dict} />
      <WhyUs dict={dict} />
      <Process dict={dict} />
      <Faq dict={dict} />
      <Contact lang={lang} dict={dict} variant="teaser" />
    </>
  )
}
