import type { Dictionary } from './en'

const sv: Dictionary = {
  meta: {
    title: 'Novaform — Studio för webbdesign och webbutveckling i Helsingfors',
    description:
      'Novaform designar och bygger webbplatser, webbutiker och landningssidor. Genomtänkt design, ren kod och en tydlig process, på svenska, finska och engelska.',
  },
  a11y: {
    skipToContent: 'Hoppa till innehållet',
    openMenu: 'Öppna menyn',
    closeMenu: 'Stäng menyn',
    language: 'Språk',
    mainNav: 'Huvudnavigering',
    home: 'Startsida',
    progress: 'Hur långt du har läst',
  },
  nav: {
    services: 'Tjänster',
    work: 'Projekt',
    why: 'Arbetssätt',
    process: 'Process',
    faq: 'Frågor',
    contact: 'Kontakt',
    cta: 'Starta ett projekt',
  },
  hero: {
    eyebrow: 'Oberoende webbstudio i Helsingfors',
    titleLead: 'Webbplatser som gör ditt företag',
    titleHighlight: 'omöjligt att ignorera.',
    description:
      'Vi designar och bygger webbplatser, webbutiker och landningssidor för företag som bryr sig om hur de uppfattas. Genomtänkt design, ren kod och en process du kan följa i varje steg.',
    primaryCta: 'Starta ett projekt',
    secondaryCta: 'Så arbetar vi',
    trust: ['Svar inom en arbetsdag', 'Offerter till fast pris', 'Svenska, finska och engelska'],
    visual: {
      label: 'Förhandsvisningens storlek',
      desktop: 'Dator',
      tablet: 'Surfplatta',
      mobile: 'Mobil',
      hint: 'Byt storlek och se hur layouten anpassar sig',
      checksTitle: 'Kontrolleras före varje lansering',
      checks: ['Prestandabudget', 'Tillgänglighet (WCAG 2.2 AA)', 'SEO och metadata', 'Alla språk granskade'],
      deploy: 'Förhandsversion publicerad',
      live: 'Live',
    },
  },
  marquee: {
    label: 'Teknik vi arbetar med',
  },
  services: {
    eyebrow: 'Tjänster',
    title: 'Det här bygger vi.',
    description:
      'Fem sätt vi kan hjälpa till. Varje projekt designas och byggs av samma lilla team, från första skissen till lansering.',
    items: [
      {
        id: 'design',
        title: 'Webbdesign',
        description:
          'Gränssnitt som utgår från dina kunder och ditt varumärke, inte från en mall. Vi börjar med struktur och innehåll och finslipar sedan varje vy för tydlighet.',
        points: ['UX och webbplatsstruktur', 'Visuell design och designsystem', 'Klickbara prototyper före kod'],
      },
      {
        id: 'development',
        title: 'Webbutveckling',
        description:
          'Handbyggt med moderna ramverk, så att webbplatsen laddar snabbt, är säker och är enkel för ditt team att uppdatera.',
        points: [
          'Next.js och headless CMS',
          'Prestandabudget och kontroll av Core Web Vitals',
          'Integrationer med era verktyg',
        ],
      },
      {
        id: 'ecommerce',
        title: 'E-handel',
        description:
          'Webbutiker med tydliga produktsidor och en smidig kassa, med de betalsätt som nordiska kunder förväntar sig.',
        points: [
          'Shopify eller headless commerce',
          'Klarna, Stripe, MobilePay och Swish',
          'Synk av produkter och lager',
        ],
      },
      {
        id: 'landing',
        title: 'Landningssidor',
        description: 'Fokuserade kampanjsidor med ett mål och en tydlig uppmaning, redo att mätas från första dagen.',
        points: ['Budskap och sidstruktur', 'Analys och händelsespårning', 'Redo för A/B-tester'],
      },
      {
        id: 'redesign',
        title: 'Omdesign',
        description:
          'Vi går igenom det du har, behåller det som fungerar och bygger om resten, och flyttar innehåll och sökpositioner varsamt.',
        points: ['Genomgång av UX och prestanda', 'Omdirigeringsplan som skyddar SEO', 'Omstrukturering av innehåll'],
      },
    ],
    labels: {
      before: 'Före',
      after: 'Efter',
      compare: 'Jämför den gamla och nya designen',
      buildPassed: 'Bygget lyckades',
      checkout: 'Kassa',
      getStarted: 'Kom igång',
    },
    capabilities: {
      eyebrow: 'Kompetens',
      title: 'Design och utveckling under samma tak.',
      description:
        'Varje projekt bygger på samma uppsättning kompetenser, så att design och tekniska beslut fattas tillsammans i stället för att lämnas över.',
      groups: [
        {
          title: 'Design',
          items: [
            'UX-research och webbplatsstruktur',
            'UI och visuell design',
            'Designsystem',
            'Prototyper',
            'Innehållsstruktur',
          ],
        },
        {
          title: 'Utveckling',
          items: [
            'Next.js och React',
            'Headless CMS',
            'WordPress',
            'API:er och integrationer',
            'Drift och publicering',
          ],
        },
        {
          title: 'E-handel',
          items: ['Shopify', 'Stripe och Klarna', 'Prenumerationer', 'Produktdata och lager'],
        },
        {
          title: 'Kvalitet',
          items: [
            'Tillgänglighet (WCAG 2.2 AA)',
            'Teknisk SEO',
            'Prestandabudget',
            'Flerspråkiga webbplatser',
            'Integritetsvänlig analys',
          ],
        },
      ],
    },
  },
  work: {
    eyebrow: 'Designstudier',
    title: 'Hur vi tänker, visat i design.',
    description:
      'Novaform är en ny studio, så i stället för en kundlista visar vi egna designstudier. Varje studie utforskar en annan typ av företag och de problem dess webbplats behöver lösa.',
    conceptBadge: 'Designstudie',
    disclaimer: 'Varumärkena är påhittade och skapade av vårt team. De är inte kunduppdrag.',
    projects: [
      {
        id: 'ember',
        name: 'Ember Roasters',
        category: 'E-handel',
        summary:
          'Hur ett litet rosteri kan sälja kaffeprenumerationer och samtidigt behålla värmen i ett berättande varumärke.',
        tags: ['Shopify', 'Prenumerationer', 'Varumärke'],
      },
      {
        id: 'lumo',
        name: 'Lumo Clinic',
        category: 'Vård',
        summary: 'En lugn och tillgänglig klinikwebbplats där det tar tre steg att boka en tid.',
        tags: ['Bokning', 'WCAG 2.2', 'Flerspråkig'],
      },
      {
        id: 'voltra',
        name: 'Voltra',
        category: 'Landningssida för SaaS',
        summary: 'En lanseringssida för en laddplattform för elbilar med ett tydligt mål: att boka en demo.',
        tags: ['Landningssida', 'Animation', 'A/B-test'],
      },
      {
        id: 'fjord',
        name: 'Form & Fjord',
        category: 'Arkitektportfolio',
        summary: 'En redaktionell portfolio där stora bilder och stillsam typografi gör jobbet.',
        tags: ['Portfolio', 'Headless CMS', 'Redaktionell'],
      },
    ],
    mock: {
      shop: 'Butik',
      subscribe: 'Prenumerera',
      addToCart: 'Lägg i varukorgen',
      emberKicker: 'Ett ursprung · Etiopien',
      emberNotes: ['Jasmin', 'Bergamott', 'Persika'],
      bookVisit: 'Boka besök',
      ourServices: 'Våra tjänster',
      lumoTitle: ['Vård som', 'känns lugn.'],
      month: 'Oktober',
      requestDemo: 'Boka en demo',
      voltraTitle: ['LADDA', 'SNABBARE.'],
      voltraFeatures: ['Snabbladdning', 'Lediga platser i realtid'],
      projects: 'Projekt',
      studio: 'Studio',
      fjordTitle: ['Stillsam', 'arkitektur'],
    },
  },
  why: {
    eyebrow: 'Vårt arbetssätt',
    title: 'Färre mellanhänder, mer omsorg.',
    description:
      'Vi är en liten, ny studio. Du arbetar direkt med dem som designar och bygger din webbplats, och varje beslut förklaras på ett begripligt sätt.',
    items: [
      {
        id: 'clarity',
        title: 'Tydlighet först',
        description:
          'Vi planerar struktur och innehåll före det visuella, så att varje sida har ett syfte och besökarna hittar det de söker.',
      },
      {
        id: 'craft',
        title: 'Byggt för hand',
        description:
          'Inga mallar eller sidbyggare. Varje layout designas för ditt företag och kodas enligt en standard vi gärna visar för andra utvecklare.',
      },
      {
        id: 'performance',
        title: 'Snabbt och tillgängligt från början',
        description:
          'Vi sätter en prestandabudget i början och testar mot WCAG 2.2 AA genom hela projektet, inte bara före lansering.',
      },
      {
        id: 'communication',
        title: 'Öppen kommunikation',
        description:
          'Regelbundna uppdateringar, en live-förhandsvisning från första bygget och svar inom en arbetsdag.',
      },
    ],
    commitments: {
      title: 'Det här kan du förvänta dig av oss',
      items: [
        'En offert till fast pris innan något arbete börjar',
        'Direktkontakt med din designer och utvecklare',
        'En förhandsvisning du kan titta på när som helst',
        'Tillgänglighet och prestanda kontrolleras före lansering',
        'Utbildning så att ditt team kan uppdatera webbplatsen',
        'Tydliga svar på svenska, finska eller engelska',
      ],
    },
    newStudio: {
      title: 'Varför arbeta med en ny studio?',
      body: 'Ditt projekt får vår fulla uppmärksamhet i stället för att vara ett av många. Vi bygger vårt rykte en webbplats i taget, så vi har all anledning att göra din rätt.',
    },
  },
  process: {
    eyebrow: 'Vår process',
    title: 'Fem steg från första samtalet till lansering.',
    description:
      'De flesta webbplatser går live inom två veckor. Du ser en förhandsvisning redan under de första dagarna, så att du alltid vet vad som händer härnäst och vad vi behöver från dig.',
    note: 'Tiderna gäller en typisk företagswebbplats. Webbutiker och större webbplatser tar längre tid, och den exakta tidsplanen kommer vi överens om i offerten.',
    deliverablesLabel: 'Du får',
    steps: [
      {
        id: 'discovery',
        title: 'Kartläggning',
        duration: 'Dag 1',
        description:
          'Ett kostnadsfritt startmöte där vi lär känna ditt företag, dina kunder och mål, och går igenom det du har i dag.',
        deliverables: ['Projektbeskrivning', 'Överenskomna mål'],
      },
      {
        id: 'planning',
        title: 'Planering',
        duration: 'Dag 1–2',
        description:
          'Vi tar fram webbplatsens struktur, innehåll och tekniska lösning, och skickar en offert till fast pris med tidsplan.',
        deliverables: ['Sajtkarta', 'Offert till fast pris'],
      },
      {
        id: 'development',
        title: 'Design och utveckling',
        duration: 'Dag 3–9',
        description: 'Vi designar och bygger i korta omgångar och delar framstegen via en live-förhandsvisning.',
        deliverables: ['Design för viktiga sidor', 'Länk till förhandsvisning'],
      },
      {
        id: 'review',
        title: 'Granskning',
        duration: 'Dag 9–12',
        description: 'Du testar allt. Vi kontrollerar prestanda, tillgänglighet och SEO och åtgärdar det vi hittar.',
        deliverables: ['Kvalitetsrapport', 'Slutjusteringar'],
      },
      {
        id: 'launch',
        title: 'Lansering',
        duration: 'Dag 12–14',
        description: 'Vi går live, sätter upp analys och visar ditt team hur innehållet uppdateras.',
        deliverables: ['Lansering och omdirigeringar', 'Utbildningstillfälle'],
      },
    ],
  },
  faq: {
    eyebrow: 'Frågor',
    title: 'Vanliga frågor.',
    items: [
      {
        q: 'Vad kostar en webbplats?',
        a: 'Det beror på omfattningen. Efter ett kostnadsfritt startmöte skickar vi en offert till fast pris, så att du vet hela kostnaden innan något arbete börjar. Budgetintervallen i vårt projektformulär ger en ungefärlig bild.',
      },
      {
        q: 'Hur lång tid tar ett projekt?',
        a: 'En typisk företagswebbplats är live inom en till två veckor från start. Landningssidor kan gå ännu snabbare, medan webbutiker och större webbplatser tar längre tid. Tidsplanen kommer vi överens om i offerten.',
      },
      {
        q: 'Kan vi uppdatera innehållet själva?',
        a: 'Ja. Vi sätter upp ett publiceringssystem som passar ditt team och visar hur ni redigerar sidor, nyheter och produkter.',
      },
      {
        q: 'Bygger ni flerspråkiga webbplatser?',
        a: 'Ja. Vi arbetar på svenska, finska och engelska och bygger webbplatser med de språk du behöver, med rätt inställningar för sökmotorer på varje språk.',
      },
      {
        q: 'Vad händer efter lanseringen?',
        a: 'Vi följer upp lanseringen och åtgärdar eventuella problem. Om du vill kan vi fortsätta med uppdateringar, förbättringar och support.',
      },
      {
        q: 'Varför ska vi lita på en ny studio?',
        a: 'Vi har ingen lång kundlista än, så vi gör arbetet synligt i stället: en offert till fast pris, en förhandsvisning genom hela projektet och kvalitetskontroller som du kan granska före lansering.',
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
      'Offert till fast pris inom två dagar',
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
