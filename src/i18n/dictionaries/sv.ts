import type { Dictionary } from './en'

const sv: Dictionary = {
  meta: {
    title: 'Fusion Sites — Webbplatser för lokala företag i Helsingfors',
    description:
      'Fusion Sites bygger moderna webbplatser, webbutiker och bokningssidor för lokala företag. Fast pris i förväg, på finska, svenska och engelska.',
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
    process: 'Process',
    pricing: 'Priser',
    about: 'Om oss',
    faq: 'Frågor',
    contact: 'Kontakt',
    cta: 'Starta ett projekt',
  },
  hero: {
    kicker: 'Webbstudio — Helsingfors',
    titleLead: 'Webbplatser som ger ditt företag',
    titleHighlight: 'fler kunder.',
    description:
      'Vi designar och bygger snabba, snygga webbplatser, webbutiker och bokningssidor för lokala företag. Fast pris i förväg och en första förhandsvisning inom några dagar.',
    primaryCta: 'Starta ett projekt',
    secondaryCta: 'Se våra projekt',
    facts: [
      { label: 'Studio', value: 'Verkstadsgatan, Helsingfors' },
      { label: 'Svar', value: 'Inom en arbetsdag' },
      { label: 'Språk', value: 'Finska · Svenska · Engelska' },
    ],
    scroll: 'Skrolla',
  },
  services: {
    eyebrow: 'Tjänster',
    title: 'Det här gör vi.',
    description:
      'Fyra saker vi är bra på. Samma lilla team tar ditt projekt från första samtalet till lansering, och tar hand om det efteråt om du vill.',
    includesLabel: 'Innehåller',
    addon: {
      label: 'Tillägg',
      title: 'Shopify-integration',
      text: 'Vi kopplar din webbplats till Shopify: produkter, betalningar och beställningar. Finns som valfritt tillägg mot en extra avgift.',
    },
    items: [
      {
        id: 'websites',
        title: 'Webbplatser',
        description:
          'En tydlig och snygg webbplats byggd kring ditt företag, så att kunderna hittar dina tjänster, priser och kontaktuppgifter på alla enheter.',
        includes: [
          'Designad för mobilen först',
          'Dina texter, bilder och logotyp',
          'Karta, öppettider och kontaktformulär',
        ],
      },
      {
        id: 'stores',
        title: 'Webbutiker',
        description:
          'En butik som dina kunder gillar att handla i, byggd på Shopify eller med Stripe-betalningar, med produkter, frakt och kvitton färdigt uppsatta.',
        includes: ['Shopify eller Stripe', 'Kort- och mobilbetalningar', 'Produkter, frakt och kvitton'],
      },
      {
        id: 'booking',
        title: 'Bokning och integrationer',
        description:
          'Låt kunderna boka, beställa eller kontakta dig direkt från webbplatsen, med verktygen du redan har eller nya som vi sätter upp.',
        includes: [
          'Timma, Fresha och liknande',
          'Formulär direkt till din inkorg',
          'Google Maps, recensioner och sociala medier',
        ],
      },
      {
        id: 'redesign',
        title: 'Förnyelser',
        description:
          'Föråldrad eller svår att använda i mobilen? Vi bygger om webbplatsen, behåller det som fungerar, flyttar innehållet och skyddar din synlighet på Google.',
        includes: ['Ett modernt utseende', 'Innehållet flyttas åt dig', 'Synligheten i sök behålls'],
      },
    ],
  },
  beforeAfter: {
    eyebrow: 'Före och efter',
    title: 'Samma företag. Ett helt annat första intryck.',
    description:
      'Dra i handtaget och jämför en typisk föråldrad webbplats med det vi skulle bygga i stället. Välj en bransch för att se ett annat exempel.',
    tabsLabel: 'Välj ett exempel',
    hint: 'Dra',
    before: 'Före',
    after: 'Efter',
    compare: 'Jämför den gamla och nya designen',
    disclaimer: 'Illustrativa exempel. Företagen är påhittade.',
    examples: {
      cafe: {
        label: 'Kafé',
        before: {
          nav: ['Hem', 'Meny', 'Kontakt'],
          welcome: 'Välkommen till Café Aamu',
          intro: 'Kaffe · Bakverk · Lunch',
          readMore: 'Läs mer',
          cookies: 'Den här webbplatsen använder cookies för att förbättra din upplevelse.',
        },
        after: {
          nav: ['Meny', 'Hitta hit', 'Beställ'],
          kicker: 'Berghäll, Helsingfors',
          title: 'Lugna morgnar, seriöst kaffe.',
          text: 'Specialkaffe, kardemummabullar bakade varje morgon och soplunch på vardagar.',
          cta: 'Se menyn',
          secondary: 'Beställ i förväg',
          open: 'Öppet i dag 7–18',
          menuTitle: 'Den här veckan',
          menu: [
            ['Flat white med havre', '4,90'],
            ['Kardemummabulle', '3,80'],
            ['Dagens soppa', '12,50'],
          ],
        },
      },
      salon: {
        label: 'Frisörsalong',
        before: {
          welcome: 'Välkommen till vår hemsida!',
          text: 'Vi erbjuder klippning, färgning och behandlingar för hela familjen. Ring oss för att boka tid!',
          phone: 'Tfn 09 123 4567',
          prices: 'Prislista (PDF)',
          news: 'Nyheter',
          newsText: 'Vi har stängt på midsommarafton.',
        },
        after: {
          nav: ['Tjänster', 'Teamet', 'Priser'],
          kicker: 'Hårstudio i Rödbergen',
          title: 'Hår som känns som du.',
          text: 'Klippning, färg och vård i en lugn studio. Boka online på under en minut.',
          cta: 'Boka online',
          services: [
            ['Klippning och styling', '45 min', '65 €'],
            ['Färg', '2 h', 'från 110 €'],
            ['Balayage', '3 h', 'från 160 €'],
          ],
          slotsTitle: 'Nästa lediga tider',
          slots: ['Tis 10.00', 'Tis 14.30', 'Ons 9.15'],
        },
      },
      construction: {
        label: 'Bygg',
        before: {
          tagline: 'Kvalitetsbygge sedan 1998',
          menu: ['Startsida', 'Tjänster', 'Referenser', 'Kontakta oss'],
          servicesTitle: 'Våra tjänster:',
          services: ['Renoveringar', 'Nybyggnad', 'Takarbeten', 'Fasadarbeten'],
          contact: 'Kontakta oss för en offert!',
        },
        after: {
          nav: ['Tjänster', 'Projekt', 'Kontakt'],
          kicker: 'Renoveringar · Nybyggen · Fasader',
          title: 'Rätt byggt. Klart i tid.',
          text: 'En entreprenör från plan till överlämning, med en fast tidsplan som vi står för.',
          cta: 'Begär offert',
          secondary: 'Se projekt',
          services: ['Renoveringar', 'Nybyggen', 'Fasader'],
          area: 'Vi arbetar i hela Nyland',
        },
      },
    },
  },
  work: {
    eyebrow: 'Projekt',
    title: 'Utvalda projekt.',
    description: 'Först en riktig lansering, sedan konceptstudier som visar hur vi närmar oss olika branscher.',
    caseLabel: 'Kundprojekt',
    caseLive: 'Publicerad webbplats',
    featured: {
      client: 'VYRO Athletics',
      category: 'Webbutik · Träningskläder',
      summary:
        'VYRO är ett varumärke för träningskläder som lanserar sin första kollektion, Drop 01. Vi designade och byggde deras webbutik: en mörk och djärv butik där produkten står i centrum, med lanseringssida, färgväljare, filter, detaljerade produktsidor och recensioner med passformstips, på engelska och finska.',
      built: [
        'Lanseringssida med färgväljare',
        'Butik med filter och produktsidor',
        'Recensioner med passformstips, på engelska och finska',
        'Shopify-integration för webbutiken',
      ],
      builtLabel: 'Det här byggde vi',
      cta: 'Besök vyroathletics.com',
      pages: { drop: 'Lanseringssida', shop: 'Butik', product: 'Produktsida', reviews: 'Recensioner' },
      galleryLabel: 'Sidor från den publicerade webbplatsen',
    },
    devicesLabel: 'Förhandsvisningens storlek',
    desktop: 'Dator',
    mobile: 'Mobil',
    scrollHint: 'Skrolla i förhandsvisningen',
    conceptBadge: 'Koncept',
    conceptsTitle: 'Konceptstudier',
    conceptsDescription:
      'Påhittade varumärken som vi designat för att utforska hur olika företag kan se ut och fungera på nätet. Välj ett och skrolla igenom det.',
    disclaimer: 'Varumärkena är påhittade och skapade av vårt team. De är inte kunduppdrag.',
    projectsLabel: 'Välj ett koncept',
    projects: {
      ember: {
        id: 'ember',
        name: 'Ember Roasters',
        category: 'Webbutik',
        summary: 'Ett litet rosteri som säljer kaffe och prenumerationer med värmen från ett berättande varumärke.',
        site: {
          nav: ['Butik', 'Prenumeration', 'Journal'],
          cart: 'Varukorg',
          kicker: 'Småskaligt rosteri · Helsingfors',
          title: 'Kaffe värt att vakna för.',
          text: 'Rostat varje tisdag och skickat samma vecka. Välj en påse, eller låt oss välja åt dig.',
          cta: 'Köp kaffe',
          secondary: 'Starta en prenumeration',
          productsTitle: 'Veckans rostningar',
          products: [
            ['Yirgacheffe', 'Etiopien', 'Jasmin · Bergamott', '18 €'],
            ['La Palma', 'Colombia', 'Kakao · Rött äpple', '16 €'],
            ['Kiambu', 'Kenya', 'Svarta vinbär · Lime', '19 €'],
          ],
          add: 'Lägg i varukorgen',
          storyTitle: 'Långsamt rostat, i små satser.',
          storyText:
            'Vi köper direkt från gårdar vi känner, rostar ljust för att behålla fruktigheten och trycker rostdatumet på varje påse.',
          subTitle: 'Kaffet tar aldrig slut.',
          subText: 'Färskt kaffe varannan eller var fjärde vecka. Pausa eller avsluta när du vill.',
          subCta: 'Prenumerera',
        },
      },
      lumo: {
        id: 'lumo',
        name: 'Lumo Clinic',
        category: 'Hälsovård',
        summary: 'En lugn och tillgänglig klinikwebbplats där tidsbokningen tar tre steg.',
        site: {
          nav: ['Behandlingar', 'Specialister', 'Priser'],
          book: 'Boka',
          kicker: 'Fysioterapi och idrottsmedicin',
          title: 'Vård som känns lugn.',
          text: 'Boka en tid i tre steg, på finska, svenska eller engelska.',
          cta: 'Boka en tid',
          month: 'Oktober',
          times: ['9.00', '10.30', '13.15'],
          stepsTitle: 'Så bokar du',
          steps: ['Välj behandling', 'Välj tid', 'Bekräfta'],
          servicesTitle: 'Behandlingar',
          services: [
            ['Fysioterapi', '45 min'],
            ['Idrottsmassage', '60 min'],
            ['Löpanalys', '75 min'],
          ],
        },
      },
      voltra: {
        id: 'voltra',
        name: 'Voltra',
        category: 'Produktlandningssida',
        summary: 'En lanseringssida för en laddplattform för elbilar med ett tydligt mål: att boka en demo.',
        site: {
          nav: ['Produkt', 'Priser', 'Företaget'],
          demo: 'Boka en demo',
          kicker: 'Elbilsladdning för fordonsflottor',
          title: ['Ladda', 'snabbare.'],
          text: 'En plattform för alla laddare i din flotta: tillgänglighet i realtid, smart schemaläggning och enkel fakturering.',
          cta: 'Boka en demo',
          secondary: 'Så fungerar det',
          features: [
            ['Tillgänglighet i realtid', 'Se varje ledig laddare direkt.'],
            ['Smart schemaläggning', 'Ladda när elen är billigast.'],
            ['En faktura', 'Alla platser på en månadsfaktura.'],
          ],
          ctaTitle: 'Redo när du är det.',
        },
      },
      fjord: {
        id: 'fjord',
        name: 'Form & Fjord',
        category: 'Arkitektportfolio',
        summary: 'En redaktionell portfolio där stora bilder och stillsam typografi gör jobbet.',
        site: {
          nav: ['Projekt', 'Studio', 'Kontakt'],
          title: ['Stillsam', 'arkitektur.'],
          text: 'En liten byrå som ritar hem och offentliga rum kring ljus och material.',
          projectsTitle: 'Utvalda projekt',
          projects: [
            ['Ö-huset', '2024'],
            ['Hamnbiblioteket', '2023'],
            ['Tallpaviljongen', '2022'],
          ],
          quote: 'Vi ritar för de ljusa timmar vi har.',
          contact: 'Inled ett samtal',
        },
      },
    },
  },
  process: {
    eyebrow: 'Process',
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
        description: 'Vi planerar sidorna och innehållet och skickar en offert till fast pris med tidsplan.',
        deliverables: ['Sidplan', 'Offert till fast pris'],
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
        description:
          'Du testar allt. Vi kontrollerar hastighet, mobilanvändning och grunderna för Google och åtgärdar det vi hittar.',
        deliverables: ['Slutkontroll', 'Slutjusteringar'],
      },
      {
        id: 'launch',
        title: 'Lansering',
        duration: 'Dag 12–14',
        description:
          'Vi kopplar din domän, går live och sätter upp besöksstatistik, och visar sedan hur uppdateringar fungerar.',
        deliverables: ['Färdig webbplats', 'Kort guide'],
      },
    ],
  },
  pricing: {
    eyebrow: 'Priser',
    title: 'Tydliga priser. Inga överraskningar.',
    description:
      'Typiska startpriser. Efter ett kostnadsfritt startsamtal får du en offert till fast pris, och priset bestäms innan något arbete börjar.',
    from: 'från',
    vat: 'exkl. moms',
    pending: 'Pris på begäran',
    recommended: 'Vi rekommenderar',
    tiers: [
      {
        id: 'basic',
        name: 'Basic',
        description: 'En skarp och kompakt webbplats för ett företag som behöver se bra ut och vara lätt att hitta.',
        features: [
          'Upp till 3 sidor',
          'Designad för mobilen först',
          'Kontaktformulär och karta',
          'Grunderna för Google på plats',
        ],
        cta: 'Börja med Basic',
      },
      {
        id: 'standard',
        name: 'Standard',
        description: 'En komplett webbplats med plats för dina tjänster, bokning och allt som kunderna frågar om.',
        features: ['Upp till 8 sidor', 'Bokning eller beställning inbyggd', 'Två språk', 'Besöksstatistik'],
        cta: 'Börja med Standard',
      },
      {
        id: 'custom',
        name: 'Custom',
        description: 'Webbutiker, större flerspråkiga webbplatser och allt som kräver skräddarsydda funktioner.',
        features: [
          'Shopify eller skräddarsydd butik',
          'Integrationer med dina verktyg',
          'Tre språk',
          'Skräddarsydda funktioner',
        ],
        cta: 'Begär offert',
      },
    ],
    addon: {
      label: 'Tillägg',
      title: 'Shopify-integration',
      description:
        'Vi kopplar din webbplats till Shopify: produkter, lager, betalningar och beställningar på ett ställe. Ett valfritt tillägg.',
      price: 'Mot extra avgift',
    },
    maintenance: {
      title: 'Drift och underhåll',
      description:
        'Drift, säkerhetsuppdateringar, säkerhetskopior och små innehållsändringar varje månad, så att webbplatsen förblir snabb och du aldrig behöver tänka på den.',
      per: '/ mån',
    },
  },
  about: {
    eyebrow: 'Om oss',
    title: 'En liten studio på Verkstadsgatan.',
    statement:
      'Vi bygger webbplatser som en bra verkstad bygger vad som helst: omsorgsfullt, för hand och för att hålla.',
    body: [
      'Fusion Sites är en ung webbstudio på Verkstadsgatan (Työpajankatu) i Helsingfors, som drivs av Martin Haukerud och Casper Gauffin-Kauste. Gatunamnet säger hur vi vill arbeta: ett litet team nära hantverket, utan mellanhänder mellan dig och dem som bygger din webbplats.',
      'Vi designar och bygger för lokala företag: kaféer, salonger, kliniker, butiker och entreprenörer. Du får en webbplats som ser ut som du, fungerar i alla mobiler och gör det lätt för kunderna att ta nästa steg.',
    ],
    valuesTitle: 'Så arbetar vi',
    values: [
      {
        title: 'Direkt',
        text: 'Du pratar direkt med Martin och Casper, som designar och bygger din webbplats. Inga mellanhänder.',
      },
      { title: 'Ärligt', text: 'Fast pris innan vi börjar, klarspråk hela vägen och inga bindningar efteråt.' },
      {
        title: 'Omsorgsfullt',
        text: 'Före varje lansering kontrollerar vi hastighet, mobiler, tillgänglighet och grunderna för Google.',
      },
    ],
    photo: 'Studiobild kommer snart',
    findUs: 'Hitta hit',
  },
  faq: {
    eyebrow: 'Frågor',
    title: 'Vanliga frågor.',
    items: [
      {
        q: 'Vad kostar en webbplats?',
        a: 'Våra paket har startpriser som du hittar under Priser. Efter ett kostnadsfritt startsamtal skickar vi en offert till fast pris för ditt projekt. Priset kommer vi överens om innan något arbete börjar, så det blir inga överraskningar.',
      },
      {
        q: 'Hur lång tid tar ett projekt?',
        a: 'En typisk företagswebbplats är live inom en till två veckor från start. Landningssidor kan gå ännu snabbare, medan webbutiker och större webbplatser tar längre tid. Tidsplanen kommer vi överens om i offerten.',
      },
      {
        q: 'Kan vi uppdatera innehållet själva?',
        a: 'Ja, om du vill. De flesta kunder skickar sina ändringar till oss och vi gör dem snabbt, till exempel som en del av ett månatligt underhållsavtal. Om du hellre redigerar texterna själv kan vi lägga till ett enkelt redigeringsverktyg.',
      },
      {
        q: 'Bygger ni flerspråkiga webbplatser?',
        a: 'Ja. Vi arbetar på finska, svenska och engelska och bygger webbplatser med de språk du behöver, med rätt inställningar för sökmotorer på varje språk.',
      },
      {
        q: 'Vad händer efter lanseringen?',
        a: 'Vi följer upp lanseringen och åtgärdar eventuella problem. Om du vill sköter vi drift, uppdateringar och små ändringar mot en månadsavgift.',
      },
      {
        q: 'Varför ska vi lita på en ny studio?',
        a: 'Vi är en ung studio, så vi gör arbetet synligt: riktiga projekt som du kan besöka, en offert till fast pris, en förhandsvisning genom hela projektet och kvalitetskontroller som du kan granska före lansering.',
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
    nextLabel: 'Vad som händer sedan',
    points: [
      'Kostnadsfritt och förutsättningslöst startmöte',
      'Offert till fast pris inom två dagar',
      'Dina uppgifter hanteras konfidentiellt',
    ],
    reply: 'Svar inom en arbetsdag',
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
      consent: 'Jag godkänner att {legalName} behandlar mina uppgifter för att besvara förfrågan, enligt',
      privacyLink: 'integritetspolicyn',
    },
    websiteTypes: {
      business: 'Företagswebbplats',
      ecommerce: 'Webbutik',
      landing: 'Landningssida',
      redesign: 'Omdesign',
      webapp: 'Något annat',
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
      accessibility: 'Tillgänglighet',
      branding: 'Logotyp och varumärke',
    },
    budgetUnsure: 'Vet inte än',
    budgetAbove: '{amount}+',
    budgetUpTo: 'Upp till {amount}',
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
    businessId: 'FO-nummer',
    brandNote: 'Fusion Sites är ett varumärke som tillhör Fusion Hauk Oy.',
    rights: 'Alla rättigheter förbehållna.',
    backToTop: 'Till toppen',
  },
  legal: {
    back: 'Tillbaka till startsidan',
    updated: 'Senast uppdaterad',
    privacy: {
      title: 'Integritetspolicy',
      intro:
        '{legalName} värnar om din integritet. Den här policyn förklarar vilka personuppgifter vi samlar in via webbplatsen, varför, och vilka rättigheter du har enligt EU:s dataskyddsförordning (GDPR).',
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
          title: 'Exempelwebbplatser',
          body: 'Exempelwebbplatserna på den här webbplatsen har vårt team skapat för påhittade företag, för att visa vad vi kan. De är inte verkliga kunduppdrag.',
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
