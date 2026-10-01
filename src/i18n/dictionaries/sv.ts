import type { Dictionary } from './en'

const sv: Dictionary = {
  meta: {
    title: 'Novaform — Premiumwebbplatser som får ditt företag att växa',
    description:
      'Vi designar och bygger snabba, snygga och konverterande webbplatser, webbutiker och landningssidor för ambitiösa företag.',
  },
  a11y: {
    skipToContent: 'Hoppa till innehållet',
    openMenu: 'Öppna menyn',
    closeMenu: 'Stäng menyn',
    language: 'Språk',
    mainNav: 'Huvudnavigering',
    home: 'Startsida',
  },
  nav: {
    services: 'Tjänster',
    work: 'Projekt',
    why: 'Varför vi',
    process: 'Process',
    contact: 'Kontakt',
    cta: 'Starta ett projekt',
  },
  hero: {
    eyebrow: 'Studio för webbdesign och webbutveckling',
    titleLead: 'Webbplatser som gör ditt företag',
    titleHighlight: 'omöjligt att ignorera.',
    description:
      'Vi designar och utvecklar premiumwebbplatser, webbutiker och landningssidor — snabba, tillgängliga och byggda för att göra besökare till kunder.',
    primaryCta: 'Starta ett projekt',
    secondaryCta: 'Se våra projekt',
    trust: ['Svar inom en arbetsdag', 'Offerter till fast pris', 'Byggt i Finland'],
    panel: {
      performance: 'Prestanda',
      accessibility: 'Tillgänglighet',
      bestPractices: 'Bästa praxis',
      seo: 'SEO',
      lighthouse: 'Vårt kvalitetsmål vid varje lansering',
      deploy: 'Publicerad i produktion',
      live: 'Live',
    },
  },
  marquee: {
    label: 'Byggt med modern, beprövad teknik',
  },
  services: {
    eyebrow: 'Tjänster',
    title: 'Allt du behöver för att vinna online.',
    description:
      'Från en vass landningssida till en komplett webbutik — strategi, design och utveckling under ett och samma tak.',
    items: [
      {
        id: 'design',
        title: 'Webbdesign',
        description:
          'Unika gränssnitt i linje med ditt varumärke, designade kring dina kunder — inte en mall. Varje vy är utformad för tydlighet och konvertering.',
        points: ['UX och informationsarkitektur', 'Visuell identitet på webben', 'Interaktiva prototyper'],
      },
      {
        id: 'development',
        title: 'Webbutveckling',
        description:
          'Handbyggt med moderna ramverk för blixtsnabba laddningstider, stabil säkerhet och enkel innehållsredigering.',
        points: ['Next.js och headless CMS', 'Optimerat för Core Web Vitals', 'Integrationer och API:er'],
      },
      {
        id: 'ecommerce',
        title: 'E-handel',
        description:
          'Webbutiker som säljer — smidig kassa, smarta produktsidor och betallösningar som fungerar för nordiska kunder.',
        points: ['Shopify och headless commerce', 'Klarna, Stripe, Swish', 'Synk av produkter och lager'],
      },
      {
        id: 'landing',
        title: 'Landningssidor',
        description:
          'Kampanjsidor med hög konvertering, byggda för ett mål: fler leads, registreringar och köp från din marknadsföring.',
        points: ['Säljande copywriting', 'Redo för A/B-tester', 'Analys och spårning'],
      },
      {
        id: 'redesign',
        title: 'Omdesign',
        description:
          'Ge en föråldrad webbplats nytt liv. Vi behåller det som fungerar, förbättrar resten och migrerar allt säkert — inklusive SEO.',
        points: ['UX- och prestandagranskning', 'SEO-säker migrering', 'Omstrukturering av innehåll'],
      },
    ],
  },
  work: {
    eyebrow: 'Utvalda projekt',
    title: 'Koncept som visar vad vi kan.',
    description:
      'Ett urval konceptprojekt som vårt team har designat för att visa vår bredd — från e-handel till vård. Ditt projekt kan bli nästa.',
    conceptBadge: 'Konceptprojekt',
    projects: [
      {
        id: 'ember',
        name: 'Ember Roasters',
        category: 'E-handel',
        summary: 'En webbutik för specialkaffe med prenumerationer och en berättande produktupplevelse.',
        tags: ['Shopify', 'Prenumerationer', 'Varumärke'],
      },
      {
        id: 'lumo',
        name: 'Lumo Clinic',
        category: 'Vård',
        summary: 'En lugn och tillgänglig klinikwebbplats med onlinebokning och tjänstesidor på flera språk.',
        tags: ['Bokning', 'WCAG 2.2', 'Flerspråkig'],
      },
      {
        id: 'voltra',
        name: 'Voltra',
        category: 'Landningssida för SaaS',
        summary:
          'En kraftfull lanseringssida för en laddplattform för elbilar, byggd för att ge fler demoförfrågningar.',
        tags: ['Landningssida', 'Animation', 'A/B-test'],
      },
      {
        id: 'fjord',
        name: 'Form & Fjord',
        category: 'Arkitektportfolio',
        summary: 'En redaktionell portfolio för en arkitektbyrå — stora bilder, stillsam typografi.',
        tags: ['Portfolio', 'Headless CMS', 'Redaktionell'],
      },
    ],
    mock: {
      shop: 'Butik',
      subscribe: 'Prenumerera',
      addToCart: 'Lägg i varukorgen',
      bookVisit: 'Boka besök',
      ourServices: 'Våra tjänster',
      requestDemo: 'Boka en demo',
      chargingStations: 'laddstationer',
      uptime: 'drifttid',
      projects: 'Projekt',
      studio: 'Studio',
    },
  },
  why: {
    eyebrow: 'Varför välja oss',
    title: 'En webbplats är en investering. Vi ser till att den lönar sig.',
    description:
      'Vi kombinerar en designstudios hantverk med ett utvecklingsteams disciplin — så att din webbplats ser exceptionell ut och presterar där det räknas.',
    items: [
      {
        id: 'quality',
        title: 'Kompromisslös kvalitet',
        description: 'Pixelperfekt design, ren kod och noggranna tester på alla enheter innan något publiceras.',
      },
      {
        id: 'creativity',
        title: 'Genuin kreativitet',
        description:
          'Inga mallar. Varje webbplats designas från grunden för att uttrycka ditt varumärke och sticka ut på din marknad.',
      },
      {
        id: 'performance',
        title: 'Byggd för hastighet',
        description:
          'Laddtider under en sekund och toppresultat i Core Web Vitals — bättre ranking och färre tappade besökare.',
      },
      {
        id: 'value',
        title: 'Verkligt affärsvärde',
        description:
          'Vi designar utifrån dina mål: fler leads, mer försäljning, mindre administration. Varje beslut kopplas till resultat.',
      },
    ],
    stats: [
      { value: '<1 s', label: 'Mål för laddtid' },
      { value: '95+', label: 'Lighthouse-mål' },
      { value: '3', label: 'Språk som stöds' },
      { value: '24 h', label: 'Svarstid' },
    ],
  },
  process: {
    eyebrow: 'Vår process',
    title: 'Från första samtalet till lansering — utan överraskningar.',
    description: 'En tydlig och beprövad process med fasta milstolpar, så att du alltid vet vad som händer härnäst.',
    steps: [
      {
        id: 'discovery',
        title: 'Kartläggning',
        duration: 'Vecka 1',
        description:
          'Vi lär känna ditt företag, dina kunder och mål på ett kostnadsfritt startmöte och går igenom det du har i dag.',
      },
      {
        id: 'planning',
        title: 'Planering',
        duration: 'Vecka 1–2',
        description: 'Sajtkarta, innehållsplan, teknisk lösning och en offert till fast pris med en tydlig tidsplan.',
      },
      {
        id: 'development',
        title: 'Design och utveckling',
        duration: 'Vecka 2–6',
        description: 'Vi designar och bygger i korta iterationer och delar framstegen via en live-förhandsvisning.',
      },
      {
        id: 'review',
        title: 'Granskning',
        duration: 'Vecka 6–7',
        description:
          'Du testar allt. Vi finslipar, gör prestanda- och tillgänglighetsgranskningar och rättar varje detalj.',
      },
      {
        id: 'launch',
        title: 'Lansering',
        duration: 'Vecka 7–8',
        description:
          'Vi går live, sätter upp analys och lämnar över — med utbildning och support för det som kommer sedan.',
      },
    ],
  },
  contact: {
    eyebrow: 'Starta ett projekt',
    title: 'Låt oss bygga något enastående.',
    description:
      'Berätta om ditt projekt och välj en tid som passar dig. Vi återkommer inom en arbetsdag med nästa steg.',
    direct: 'Föredrar du e-post eller telefon?',
    hoursLabel: 'Öppettider',
    points: [
      'Kostnadsfritt och förutsättningslöst startmöte',
      'Offert till fast pris inom en vecka',
      'Dina uppgifter hanteras konfidentiellt',
    ],
  },
  form: {
    steps: {
      project: 'Projekt',
      budget: 'Budget och tidsplan',
      details: 'Dina uppgifter',
      meeting: 'Möte',
    },
    stepOf: 'Steg {current} av {total}',
    labels: {
      websiteType: 'Vad behöver du?',
      features: 'Önskade funktioner',
      featuresHint: 'Valfritt — välj alla som passar',
      description: 'Beskriv ditt projekt',
      descriptionPlaceholder:
        'Vad gör ditt företag, vad ska webbplatsen uppnå och finns det något du redan vet att du vill ha?',
      budget: 'Budget (exkl. moms)',
      timeline: 'När vill du lansera?',
      company: 'Företagsnamn',
      name: 'Ditt namn',
      email: 'E-post',
      phone: 'Telefon',
      website: 'Nuvarande webbplats',
      optional: 'valfritt',
      meetingDate: 'Önskat mötesdatum',
      meetingTime: 'Önskad tid',
      meetingFormat: 'Mötesform',
      timezoneNote: 'Tiderna anges i finsk tid ({tz}).',
      consent: 'Jag godkänner att {company} behandlar mina uppgifter för att besvara förfrågan, enligt',
      privacyLink: 'integritetspolicyn',
    },
    websiteTypes: {
      business: 'Företagswebbplats',
      ecommerce: 'Webbutik',
      landing: 'Landningssida',
      redesign: 'Omdesign',
      webapp: 'Webbapp / skräddarsytt',
      unsure: 'Vet inte än',
    },
    features: {
      cms: 'Enkel innehållsredigering',
      booking: 'Onlinebokning',
      multilingual: 'Flera språk',
      blog: 'Blogg / nyheter',
      seo: 'SEO',
      payments: 'Betalningar',
      integrations: 'Integrationer (CRM, affärssystem…)',
      analytics: 'Analys',
      accessibility: 'Tillgänglighet (WCAG)',
      branding: 'Logotyp och varumärke',
    },
    budgetUnsure: 'Vet inte än',
    budgetAbove: '{amount}+',
    timelines: {
      asap: 'Så snart som möjligt',
      '1-3': 'Inom 1–3 månader',
      '3-6': 'Inom 3–6 månader',
      flexible: 'Flexibelt',
    },
    meetingFormats: {
      video: 'Videosamtal',
      phone: 'Telefonsamtal',
      inPerson: 'På plats (Helsingfors)',
    },
    buttons: {
      next: 'Fortsätt',
      back: 'Tillbaka',
      submit: 'Skicka förfrågan',
      submitting: 'Skickar…',
      retry: 'Försök igen',
    },
    review: {
      title: 'Nästan klart',
      description: 'Mötestiden är en förfrågan — vi bekräftar den via e-post.',
    },
    validation: {
      required: 'Fältet är obligatoriskt.',
      email: 'Ange en giltig e-postadress.',
      phone: 'Ange ett giltigt telefonnummer.',
      url: 'Ange en giltig webbadress, t.ex. exempel.se.',
      tooShort: 'Skriv minst {min} tecken.',
      tooLong: 'Håll texten under {max} tecken.',
      selectOne: 'Välj ett alternativ.',
      dateInPast: 'Välj ett datum i framtiden.',
      weekend: 'Välj en vardag.',
      consent: 'Godkänn för att fortsätta.',
      captcha: 'Slutför verifieringen.',
      summary: 'Rätta de markerade fälten.',
    },
    errors: {
      network: 'Vi kunde inte nå servern. Kontrollera din anslutning och försök igen.',
      rateLimited: 'För många förfrågningar. Vänta några minuter och försök igen.',
      spam: 'Ditt meddelande flaggades som automatiskt. Försök igen eller mejla oss direkt.',
      notConfigured: 'Formuläret är tillfälligt otillgängligt. Mejla oss direkt — vi svarar inom en arbetsdag.',
      server: 'Något gick fel hos oss. Försök igen eller mejla oss direkt.',
      validation: 'Några fält behöver åtgärdas.',
      emailUs: 'Mejla oss på {email}',
    },
    success: {
      title: 'Tack — vi har tagit emot din förfrågan!',
      description: 'Vi har tagit emot uppgifterna om ditt projekt och återkommer inom en arbetsdag.',
      copySent: 'En bekräftelse har skickats till {email}.',
      notConfirmedTitle: 'Ditt möte är inte bokat än',
      notConfirmed:
        'Du önskade {date} kl. {time} ({format}). Vi bekräftar tiden — eller föreslår en annan — via e-post.',
      reference: 'Referens',
      bookNowTitle: 'Vill du boka en tid direkt?',
      bookNow: 'Välj en tid i vår kalender och få en bekräftelse direkt.',
      bookNowCta: 'Boka en tid nu',
      calendarTitle: 'Bokningskalender',
      newRequest: 'Skicka en ny förfrågan',
      nextTitle: 'Så går det till',
      next: [
        'Vi går igenom ditt projekt och förbereder frågor',
        'Vi bekräftar mötet via e-post',
        'Startmöte — kostnadsfritt och förutsättningslöst',
      ],
    },
    draftRestored: 'Vi återställde dina osparade svar.',
  },
  email: {
    subject: 'Vi har tagit emot din projektförfrågan — {company}',
    greeting: 'Hej {name},',
    intro:
      'Tack för att du kontaktade {company}! Vi har tagit emot din projektförfrågan och återkommer inom en arbetsdag.',
    meetingNote:
      'Din önskade mötestid — {date} kl. {time} ({format}) — är en förfrågan, inte en bekräftad bokning. Vi bekräftar den eller föreslår en annan tid via e-post.',
    summaryTitle: 'Sammanfattning av din förfrågan',
    reply: 'Vill du lägga till något? Svara bara på det här mejlet.',
    signoff: 'Vänliga hälsningar,',
    team: 'Teamet på {company}',
  },
  footer: {
    description:
      'En studio för webbdesign och webbutveckling som skapar premiumwebbplatser för ambitiösa nordiska företag.',
    navigation: 'Navigering',
    contact: 'Kontakt',
    legal: 'Juridiskt',
    privacy: 'Integritetspolicy',
    terms: 'Användarvillkor',
    cookies: 'Webbplatsen använder inga spårningscookies.',
    businessId: 'Organisationsnummer',
    rights: 'Alla rättigheter förbehållna.',
    backToTop: 'Till toppen',
  },
  legal: {
    back: 'Tillbaka till startsidan',
    updated: 'Senast uppdaterad',
    privacy: {
      title: 'Integritetspolicy',
      intro:
        '{company} värnar om din integritet. Den här policyn förklarar vilka personuppgifter vi samlar in via webbplatsen, varför, och vilka rättigheter du har enligt EU:s dataskyddsförordning (GDPR).',
      sections: [
        {
          title: 'Personuppgiftsansvarig',
          body: '{legalName}, {address}. Kontakt: {email}.',
        },
        {
          title: 'Vad vi samlar in',
          body: 'När du skickar projektformuläret samlar vi in ditt namn, företag, e-post, telefonnummer, webbplats, projektuppgifter, budget, tidsplan och önskad mötestid. Vi använder inga spårnings- eller reklamcookies.',
        },
        {
          title: 'Varför vi samlar in dem',
          body: 'Vi använder uppgifterna enbart för att besvara din förfrågan, boka ett möte och ta fram en offert. Den rättsliga grunden är ditt samtycke och vårt berättigade intresse av att besvara affärsförfrågningar.',
        },
        {
          title: 'Hur länge vi sparar dem',
          body: 'Förfrågningar som inte leder till ett projekt raderas inom 12 månader. Kunduppgifter sparas så länge bokföringslagen kräver.',
        },
        {
          title: 'Personuppgiftsbiträden',
          body: 'Vi anlitar noggrant utvalda leverantörer för e-postleverans och bokning. Uppgifterna lagras inom EU/EES när det är möjligt, och överföringar utanför EES sker med godkända skyddsåtgärder.',
        },
        {
          title: 'Dina rättigheter',
          body: 'Du kan när som helst begära tillgång till, rättelse eller radering av dina uppgifter, invända mot behandlingen eller återkalla ditt samtycke genom att mejla {email}. Du kan också lämna klagomål till din dataskyddsmyndighet.',
        },
      ],
    },
    terms: {
      title: 'Användarvillkor',
      intro: 'Dessa villkor gäller för användningen av webbplatsen som drivs av {legalName}.',
      sections: [
        {
          title: 'Användning av webbplatsen',
          body: 'Innehållet på webbplatsen är allmän information. Du får inte kopiera eller återanvända vår design, kod eller vårt innehåll utan skriftligt tillstånd.',
        },
        {
          title: 'Konceptprojekt',
          body: 'Projekt märkta ”Konceptprojekt” är designstudier som vårt team har skapat för att visa vår kompetens. De representerar inte verkliga kunduppdrag.',
        },
        {
          title: 'Förfrågningar och möten',
          body: 'Att skicka projektformuläret skapar inget avtal och ingen bekräftad bokning. Mötestider bekräftas separat via e-post. Projektarbete baseras alltid på ett separat skriftligt avtal.',
        },
        {
          title: 'Ansvar',
          body: 'Vi strävar efter att informationen på webbplatsen är korrekt men kan inte garantera att den alltid är fullständig eller aktuell.',
        },
        {
          title: 'Tillämplig lag',
          body: 'Dessa villkor regleras av finsk lag.',
        },
      ],
    },
  },
  notFound: {
    title: 'Sidan hittades inte',
    description: 'Sidan du letar efter finns inte eller har flyttats.',
    cta: 'Tillbaka till startsidan',
  },
}

export default sv
