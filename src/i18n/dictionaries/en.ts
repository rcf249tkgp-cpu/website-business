const en = {
  meta: {
    title: 'Fusion Sites — Websites for local businesses in Helsinki',
    description:
      'Fusion Sites builds modern websites, online stores and booking pages for local businesses. A fixed price up front, in Finnish, Swedish and English.',
  },
  a11y: {
    skipToContent: 'Skip to content',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    language: 'Language',
    mainNav: 'Main navigation',
    home: 'Home',
    progress: 'Page progress',
  },
  nav: {
    services: 'Services',
    work: 'Work',
    process: 'Process',
    pricing: 'Pricing',
    about: 'About',
    faq: 'FAQ',
    contact: 'Contact',
    cta: 'Start a project',
  },
  hero: {
    kicker: 'Web studio — Helsinki',
    titleLead: 'Websites that bring your business',
    titleHighlight: 'more customers.',
    description:
      'We design and build fast, good-looking websites, online stores and booking pages for local businesses. A fixed price up front and a first preview within days.',
    primaryCta: 'Start a project',
    secondaryCta: 'See our work',
    facts: [
      { label: 'Studio', value: 'Työpajankatu, Helsinki' },
      { label: 'Reply', value: 'Within one business day' },
      { label: 'Languages', value: 'Finnish · Swedish · English' },
    ],
    scroll: 'Scroll',
  },
  services: {
    eyebrow: 'Services',
    title: 'What we do.',
    description:
      'Four things we do well. The same small team takes your project from the first call to launch, and looks after it afterwards if you want.',
    includesLabel: 'Includes',
    addon: {
      label: 'Add-on',
      title: 'Shopify integration',
      text: 'Connect your site to Shopify for products, payments and orders. Available as an optional add-on for an additional fee.',
    },
    items: [
      {
        id: 'websites',
        title: 'Websites',
        description:
          'A clear, good-looking website built around your business, so customers find your services, prices and contact details on any device.',
        includes: ['Phone-first design', 'Your texts, photos and logo', 'Map, opening hours and contact form'],
      },
      {
        id: 'stores',
        title: 'Online stores',
        description:
          'A store your customers enjoy buying from, built on Shopify or with Stripe payments, with products, shipping and receipts set up for you.',
        includes: ['Shopify or Stripe', 'Card and mobile payments', 'Products, shipping and receipts'],
      },
      {
        id: 'booking',
        title: 'Booking & integrations',
        description:
          'Let customers book, order or get in touch straight from your site, using the tools you already have or new ones we set up.',
        includes: ['Timma, Fresha and similar', 'Forms that reach your inbox', 'Google Maps, reviews and social'],
      },
      {
        id: 'redesign',
        title: 'Redesigns',
        description:
          'Dated or hard to use on a phone? We rebuild your site, keep what works, move your content over and protect your Google visibility.',
        includes: ['A modern look', 'Content moved for you', 'Search visibility kept'],
      },
    ],
  },
  beforeAfter: {
    eyebrow: 'Before & after',
    title: 'Same business. A completely different first impression.',
    description:
      'Drag the handle to compare a typical dated website with what we would build instead. Pick an industry to see another example.',
    tabsLabel: 'Choose an example',
    hint: 'Drag',
    before: 'Before',
    after: 'After',
    compare: 'Compare the old and new design',
    disclaimer: 'Illustrative examples. The businesses are made up.',
    examples: {
      cafe: {
        label: 'Café',
        before: {
          nav: ['Home', 'Menu', 'Contact'],
          welcome: 'Welcome to Café Aamu',
          intro: 'Coffee · Pastries · Lunch',
          readMore: 'Read more',
          cookies: 'This website uses cookies to improve your experience.',
        },
        after: {
          nav: ['Menu', 'Visit', 'Order'],
          kicker: 'Kallio, Helsinki',
          title: 'Slow mornings, serious coffee.',
          text: 'Specialty coffee, cardamom buns baked every morning and soup lunch on weekdays.',
          cta: 'See the menu',
          secondary: 'Order ahead',
          open: 'Open today 7–18',
          menuTitle: 'This week',
          menu: [
            ['Oat flat white', '4.90'],
            ['Cardamom bun', '3.80'],
            ['Soup of the day', '12.50'],
          ],
        },
      },
      salon: {
        label: 'Hair salon',
        before: {
          welcome: 'Welcome to our homepage!',
          text: 'We offer haircuts, colouring and treatments for the whole family. Call us to book an appointment!',
          phone: 'Tel. 09 123 4567',
          prices: 'Price list (PDF)',
          news: 'News',
          newsText: 'We are closed on Midsummer Eve.',
        },
        after: {
          nav: ['Services', 'Team', 'Prices'],
          kicker: 'Hair studio in Punavuori',
          title: 'Hair that feels like you.',
          text: 'Cuts, colour and care in a calm studio. Book online in under a minute.',
          cta: 'Book online',
          services: [
            ['Cut & style', '45 min', '65 €'],
            ['Colour', '2 h', 'from 110 €'],
            ['Balayage', '3 h', 'from 160 €'],
          ],
          slotsTitle: 'Next free times',
          slots: ['Tue 10:00', 'Tue 14:30', 'Wed 09:15'],
        },
      },
      construction: {
        label: 'Construction',
        before: {
          tagline: 'Quality construction since 1998',
          menu: ['Front page', 'Services', 'References', 'Contact us'],
          servicesTitle: 'Our services:',
          services: ['Renovations', 'New buildings', 'Roofing', 'Facade work'],
          contact: 'Contact us for an offer!',
        },
        after: {
          nav: ['Services', 'Projects', 'Contact'],
          kicker: 'Renovations · New builds · Facades',
          title: 'Built right. Handed over on time.',
          text: 'One contractor from plan to handover, with a fixed schedule you can hold us to.',
          cta: 'Request a quote',
          secondary: 'See projects',
          services: ['Renovations', 'New builds', 'Facades'],
          area: 'Working across Uusimaa',
        },
      },
    },
  },
  work: {
    eyebrow: 'Work',
    title: 'Selected work.',
    description: 'A real launch first, followed by concept studies that show how we approach different industries.',
    caseLabel: 'Case study',
    caseLive: 'Live site',
    featured: {
      client: 'VYRO Athletics',
      category: 'Online store · Gym apparel',
      summary:
        'VYRO is a gym clothing brand launching its first collection, Drop 01. We designed and built their online store: a dark, bold shop where the product leads, with a drop launch page, colourway switching, filters, detailed product pages and reviews with fit notes, in English and Finnish.',
      built: [
        'Drop launch page with colourway switcher',
        'Shop with filters and product pages',
        'Reviews with fit notes, in English and Finnish',
        'Shopify integration for the online store',
      ],
      builtLabel: 'What we built',
      cta: 'Visit vyroathletics.com',
      pages: { drop: 'Drop launch', shop: 'Shop', product: 'Product page', reviews: 'Reviews' },
      galleryLabel: 'Pages from the live site',
    },
    devicesLabel: 'Preview size',
    desktop: 'Desktop',
    mobile: 'Mobile',
    scrollHint: 'Scroll inside the preview',
    conceptBadge: 'Concept',
    conceptsTitle: 'Concept studies',
    conceptsDescription:
      'Fictional brands we designed to explore how different businesses can look and work online. Pick one and scroll through it.',
    disclaimer: 'These brands are fictional and were created by our team. They are not client projects.',
    projectsLabel: 'Choose a concept',
    projects: {
      ember: {
        id: 'ember',
        name: 'Ember Roasters',
        category: 'Online store',
        summary: 'A small roastery selling coffee and subscriptions, with the warmth of a story-led brand.',
        site: {
          nav: ['Shop', 'Subscriptions', 'Journal'],
          cart: 'Cart',
          kicker: 'Small-batch roastery · Helsinki',
          title: 'Coffee worth waking up for.',
          text: 'Roasted every Tuesday and shipped the same week. Pick a bag, or let us choose for you.',
          cta: 'Shop coffee',
          secondary: 'Start a subscription',
          productsTitle: 'This week’s roasts',
          products: [
            ['Yirgacheffe', 'Ethiopia', 'Jasmine · Bergamot', '€18'],
            ['La Palma', 'Colombia', 'Cocoa · Red apple', '€16'],
            ['Kiambu', 'Kenya', 'Blackcurrant · Lime', '€19'],
          ],
          add: 'Add to cart',
          storyTitle: 'Roasted slowly, in small batches.',
          storyText:
            'We buy directly from farms we know, roast light to keep the fruit, and print the roast date on every bag.',
          subTitle: 'Never run out.',
          subText: 'Fresh coffee every two or four weeks. Pause or cancel any time.',
          subCta: 'Subscribe',
        },
      },
      lumo: {
        id: 'lumo',
        name: 'Lumo Clinic',
        category: 'Healthcare',
        summary: 'A calm, accessible clinic website where booking an appointment takes three steps.',
        site: {
          nav: ['Treatments', 'Specialists', 'Prices'],
          book: 'Book',
          kicker: 'Physiotherapy & sports medicine',
          title: 'Care that feels calm.',
          text: 'Book an appointment in three steps, in Finnish, Swedish or English.',
          cta: 'Book an appointment',
          month: 'October',
          times: ['09:00', '10:30', '13:15'],
          stepsTitle: 'How booking works',
          steps: ['Choose a treatment', 'Pick a time', 'Confirm'],
          servicesTitle: 'Treatments',
          services: [
            ['Physiotherapy', '45 min'],
            ['Sports massage', '60 min'],
            ['Running analysis', '75 min'],
          ],
        },
      },
      voltra: {
        id: 'voltra',
        name: 'Voltra',
        category: 'Product landing page',
        summary: 'A launch page for an EV-charging platform with one clear goal: booking a demo.',
        site: {
          nav: ['Product', 'Pricing', 'Company'],
          demo: 'Book a demo',
          kicker: 'EV charging for fleets',
          title: ['Charge', 'faster.'],
          text: 'One platform for every charger in your fleet: live availability, smart scheduling and simple billing.',
          cta: 'Book a demo',
          secondary: 'How it works',
          features: [
            ['Live availability', 'See every free charger in real time.'],
            ['Smart scheduling', 'Charge when electricity is cheapest.'],
            ['One invoice', 'Every location on one monthly bill.'],
          ],
          ctaTitle: 'Ready when you are.',
        },
      },
      fjord: {
        id: 'fjord',
        name: 'Form & Fjord',
        category: 'Architecture portfolio',
        summary: 'An editorial portfolio where large imagery and quiet typography do the work.',
        site: {
          nav: ['Projects', 'Studio', 'Contact'],
          title: ['Quiet', 'architecture.'],
          text: 'A small practice designing homes and public spaces around light and material.',
          projectsTitle: 'Selected projects',
          projects: [
            ['Saari House', '2024'],
            ['Harbour Library', '2023'],
            ['Pine Pavilion', '2022'],
          ],
          quote: 'We design for the hours of light we have.',
          contact: 'Start a conversation',
        },
      },
    },
  },
  process: {
    eyebrow: 'Process',
    title: 'Five steps from first call to launch.',
    description:
      'Most websites go live within two weeks. You see a live preview within the first few days, so you always know what happens next and what we need from you.',
    note: 'Timings are typical for a business website. Online stores and larger sites take longer, and we agree on the exact schedule in the proposal.',
    deliverablesLabel: 'You get',
    steps: [
      {
        id: 'discovery',
        title: 'Discovery',
        duration: 'Day 1',
        description:
          'A free intro meeting to understand your business, customers and goals, and a look at what you have today.',
        deliverables: ['Project brief', 'Agreed goals'],
      },
      {
        id: 'planning',
        title: 'Planning',
        duration: 'Days 1–2',
        description: 'We plan the pages and content, then send a fixed-price proposal and timeline.',
        deliverables: ['Page plan', 'Fixed-price proposal'],
      },
      {
        id: 'development',
        title: 'Design and development',
        duration: 'Days 3–9',
        description: 'We design and build in short rounds and share progress on a live preview link as we go.',
        deliverables: ['Designs for key pages', 'Live preview link'],
      },
      {
        id: 'review',
        title: 'Review',
        duration: 'Days 9–12',
        description: 'You try everything. We check speed, mobile use and the Google basics, and fix what we find.',
        deliverables: ['Final checks', 'Final adjustments'],
      },
      {
        id: 'launch',
        title: 'Launch',
        duration: 'Days 12–14',
        description: 'We connect your domain, go live and set up visitor statistics, then show you how updates work.',
        deliverables: ['Live website', 'Short guide'],
      },
    ],
  },
  pricing: {
    eyebrow: 'Pricing',
    title: 'Clear prices. No surprises.',
    description:
      'Typical starting points. After a free intro call you get a fixed quote, and the price is agreed before any work starts.',
    from: 'from',
    vat: 'excl. VAT',
    pending: 'Price on request',
    recommended: 'Recommended',
    tiers: [
      {
        id: 'basic',
        name: 'Basic',
        description: 'A sharp, compact website for a business that needs to look good and be easy to find.',
        features: ['Up to 3 pages', 'Phone-first design', 'Contact form and map', 'Google basics set up'],
        cta: 'Start with Basic',
      },
      {
        id: 'standard',
        name: 'Standard',
        description: 'A complete website with room for your services, booking and everything customers ask about.',
        features: ['Up to 8 pages', 'Booking or ordering built in', 'Two languages', 'Visitor statistics'],
        cta: 'Start with Standard',
      },
      {
        id: 'custom',
        name: 'Custom',
        description: 'Online stores, larger multilingual sites and anything that needs custom features.',
        features: ['Shopify or custom store', 'Integrations with your tools', 'Three languages', 'Custom features'],
        cta: 'Ask for a quote',
      },
    ],
    addon: {
      label: 'Add-on',
      title: 'Shopify integration',
      description:
        'We connect your website to Shopify: products, stock, payments and orders in one place. An optional add-on.',
      price: 'Additional fee',
    },
    maintenance: {
      title: 'Hosting & maintenance',
      description:
        'Hosting, security updates, backups and small content changes every month, so your site stays fast and you never have to think about it.',
      per: '/ month',
    },
  },
  about: {
    eyebrow: 'About',
    title: 'A small studio on Workshop Street.',
    statement: 'We build websites the way a good workshop builds anything: carefully, by hand and to last.',
    body: [
      'Fusion Sites is a young web studio at Työpajankatu in Helsinki, run by Martin Haukerud and Casper Gauffin-Kauste. The street name means Workshop Street, and that is how we like to work: a small team, close to the craft, with no layers between you and the people building your site.',
      'We design and build for local businesses: cafés, salons, clinics, shops and contractors. You get a site that looks like you, works on every phone and is easy for customers to act on.',
    ],
    valuesTitle: 'How we work',
    values: [
      {
        title: 'Direct',
        text: 'You talk to Martin and Casper, who design and build your site. No account managers in between.',
      },
      { title: 'Honest', text: 'A fixed price before we start, plain language throughout and no lock-in afterwards.' },
      { title: 'Careful', text: 'Before every launch we check speed, phones, accessibility and the Google basics.' },
    ],
    photo: 'Studio photo coming soon',
    findUs: 'Find us',
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Common questions.',
    items: [
      {
        q: 'How much does a website cost?',
        a: 'Our plans have starting prices, which you can see under Pricing. After a free intro call we send a fixed-price quote for your project. The price is agreed before any work starts, so there are no surprises.',
      },
      {
        q: 'How long does a project take?',
        a: 'A typical business website is live within one to two weeks from kickoff. Landing pages can be even quicker; online stores and larger sites take longer. We agree on the schedule in the proposal.',
      },
      {
        q: 'Can we update the content ourselves?',
        a: 'Yes, if you want to. Most clients simply send us their changes and we make them quickly, for example as part of a monthly maintenance plan. If you would rather edit texts yourself, we can add a simple editing tool.',
      },
      {
        q: 'Do you build multilingual websites?',
        a: 'Yes. We work in Finnish, Swedish and English, and build sites in the languages you need, with search engine settings for each one.',
      },
      {
        q: 'What happens after launch?',
        a: 'We follow up after launch and fix any issues. If you want, we take care of hosting, updates and small changes for a monthly fee.',
      },
      {
        q: 'Why should we trust a new studio?',
        a: 'We are a young studio, so we make the work visible: real projects you can visit, a fixed-price proposal, a live preview link throughout the project, and quality checks you can review before launch.',
      },
    ],
  },
  contact: {
    eyebrow: 'Start a project',
    title: 'Let’s build something remarkable.',
    description:
      'Tell us about your project and pick a time that suits you. We’ll get back to you within one business day with next steps.',
    direct: 'Prefer email or phone?',
    hoursLabel: 'Opening hours',
    nextLabel: 'What happens next',
    points: [
      'Free, no-obligation intro meeting',
      'Fixed-price proposal within two days',
      'Your data is handled confidentially',
    ],
    reply: 'Reply within one business day',
  },
  form: {
    steps: {
      project: 'Project',
      budget: 'Budget & timeline',
      details: 'Your details',
      meeting: 'Meeting',
    },
    stepOf: 'Step {current} of {total}',
    labels: {
      websiteType: 'What do you need?',
      features: 'Desired features',
      featuresHint: 'Optional — select all that apply',
      description: 'Describe your project',
      descriptionPlaceholder:
        'What does your business do, what should the website achieve, and is there anything you already know you want?',
      budget: 'Budget range (excl. VAT)',
      timeline: 'When do you want to launch?',
      company: 'Company name',
      name: 'Your name',
      email: 'Email',
      phone: 'Phone',
      website: 'Current website',
      optional: 'optional',
      meetingDate: 'Preferred meeting date',
      meetingTime: 'Preferred time',
      meetingFormat: 'Meeting format',
      timezoneNote: 'Times are in Finnish time ({tz}).',
      consent: 'I agree that {legalName} may process my details to respond to this inquiry, as described in the',
      privacyLink: 'privacy policy',
    },
    websiteTypes: {
      business: 'Business website',
      ecommerce: 'Online store',
      landing: 'Landing page',
      redesign: 'Redesign',
      webapp: 'Something else',
      unsure: 'Not sure yet',
    },
    features: {
      cms: 'Easy content editing',
      booking: 'Online booking',
      multilingual: 'Multiple languages',
      blog: 'Blog / news',
      seo: 'SEO',
      payments: 'Payments',
      integrations: 'Integrations (CRM, ERP…)',
      analytics: 'Analytics',
      accessibility: 'Accessibility',
      branding: 'Logo & branding',
    },
    budgetUnsure: 'Not sure yet',
    budgetAbove: '{amount}+',
    budgetUpTo: 'Up to {amount}',
    timelines: {
      asap: 'As soon as possible',
      '1-3': 'Within 1–3 months',
      '3-6': 'Within 3–6 months',
      flexible: 'Flexible',
    },
    meetingFormats: {
      video: 'Video call',
      phone: 'Phone call',
      inPerson: 'In person (Helsinki)',
    },
    buttons: {
      next: 'Continue',
      back: 'Back',
      submit: 'Send request',
      submitting: 'Sending…',
      retry: 'Try again',
    },
    review: {
      title: 'Almost done',
      description: 'Your meeting time is a request — we’ll confirm it by email.',
    },
    validation: {
      required: 'This field is required.',
      email: 'Please enter a valid email address.',
      phone: 'Please enter a valid phone number.',
      url: 'Please enter a valid web address, e.g. example.com.',
      tooShort: 'Please write at least {min} characters.',
      tooLong: 'Please keep this under {max} characters.',
      selectOne: 'Please choose an option.',
      dateInPast: 'Please choose a future date.',
      weekend: 'Please choose a weekday.',
      consent: 'Please accept to continue.',
      captcha: 'Please complete the verification.',
      summary: 'Please fix the highlighted fields.',
    },
    errors: {
      network: 'We couldn’t reach the server. Check your connection and try again.',
      rateLimited: 'Too many requests. Please wait a few minutes and try again.',
      spam: 'Your submission was flagged as automated. Please try again or email us directly.',
      notConfigured:
        'Our inquiry form is temporarily unavailable. Please email us directly — we’ll reply within one business day.',
      server: 'Something went wrong on our side. Please try again, or email us directly.',
      validation: 'Some fields need attention.',
      emailUs: 'Email us at {email}',
    },
    success: {
      title: 'Thank you — your request is in!',
      description: 'We’ve received your project details and will get back to you within one business day.',
      copySent: 'A confirmation has been sent to {email}.',
      notConfirmedTitle: 'Your meeting is not booked yet',
      notConfirmed:
        'You requested {date} at {time} ({format}). We’ll confirm this time — or suggest an alternative — by email.',
      reference: 'Reference',
      bookNowTitle: 'Want to lock in a time right away?',
      bookNow: 'Pick a slot in our calendar and receive an instant confirmation.',
      bookNowCta: 'Book a time now',
      calendarTitle: 'Booking calendar',
      newRequest: 'Send another request',
      nextTitle: 'What happens next',
      next: [
        'We review your project and prepare questions',
        'We confirm your meeting by email',
        'Kickoff call — free and no obligation',
      ],
    },
    draftRestored: 'We restored your unsent answers.',
  },
  email: {
    subject: 'We received your project request — {company}',
    greeting: 'Hi {name},',
    intro:
      'Thank you for contacting {company}! We’ve received your project request and will get back to you within one business day.',
    meetingNote:
      'Your preferred meeting time — {date} at {time} ({format}) — is a request, not a confirmed booking. We’ll confirm it or suggest an alternative by email.',
    summaryTitle: 'Summary of your request',
    reply: 'Want to add something? Just reply to this email.',
    signoff: 'Best regards,',
    team: 'The {company} team',
  },
  footer: {
    description: 'A web design and development studio crafting premium websites for ambitious Nordic businesses.',
    navigation: 'Navigation',
    contact: 'Contact',
    legal: 'Legal',
    privacy: 'Privacy policy',
    terms: 'Terms of service',
    cookies: 'This site uses no tracking cookies.',
    businessId: 'Business ID',
    brandNote: 'Fusion Sites is a brand of Fusion Hauk Oy.',
    rights: 'All rights reserved.',
    backToTop: 'Back to top',
  },
  legal: {
    back: 'Back to home',
    updated: 'Last updated',
    privacy: {
      title: 'Privacy policy',
      intro:
        '{legalName} respects your privacy. This policy explains what personal data we collect through this website, why, and what rights you have under the EU General Data Protection Regulation (GDPR).',
      sections: [
        {
          title: 'Data controller',
          body: '{legalName}, {address}. Contact: {email}.',
        },
        {
          title: 'What we collect',
          body: 'When you submit the project form we collect your name, company, email, phone number, website, project details, budget, timeline and preferred meeting time. We do not use tracking or advertising cookies.',
        },
        {
          title: 'Why we collect it',
          body: 'We use the information only to respond to your inquiry, schedule a meeting and prepare a proposal. The legal basis is your consent and our legitimate interest in answering business inquiries.',
        },
        {
          title: 'How long we keep it',
          body: 'Inquiries that do not lead to a project are deleted within 12 months. Customer data is kept as long as required by accounting law.',
        },
        {
          title: 'Processors',
          body: 'We use carefully selected service providers for email delivery and scheduling. Data is stored within the EU/EEA wherever possible, and transfers outside the EEA rely on approved safeguards.',
        },
        {
          title: 'Your rights',
          body: 'You may request access to, correction or deletion of your data, object to processing, or withdraw consent at any time by emailing {email}. You may also lodge a complaint with your local data protection authority.',
        },
      ],
    },
    terms: {
      title: 'Terms of service',
      intro: 'These terms apply to the use of this website operated by {legalName}.',
      sections: [
        {
          title: 'Use of the website',
          body: 'The content of this website is provided for general information. You may not copy or reuse our design, code or content without written permission.',
        },
        {
          title: 'Example sites',
          body: 'The example sites shown on this website were created by our team for fictional businesses, to show what we can do. They are not real client projects.',
        },
        {
          title: 'Inquiries and meetings',
          body: 'Submitting the project form does not create a contract or a confirmed booking. Meeting times are confirmed separately by email. Project work is always based on a separate written agreement.',
        },
        {
          title: 'Liability',
          body: 'We aim to keep the information on this site accurate but cannot guarantee it is always complete or up to date.',
        },
        {
          title: 'Governing law',
          body: 'These terms are governed by the laws of Finland.',
        },
      ],
    },
  },
  notFound: {
    title: 'Page not found',
    description: 'The page you’re looking for doesn’t exist or has moved.',
    cta: 'Back to home',
  },
}

/** Recursively widen string literals so other languages can use their own text. */
type Widen<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? Widen<U>[]
    : T extends object
      ? { [K in keyof T]: Widen<T[K]> }
      : T

export type Dictionary = Widen<typeof en>

export default en satisfies Dictionary
