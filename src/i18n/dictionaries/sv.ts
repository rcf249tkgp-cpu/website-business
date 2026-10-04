import type { Dictionary } from './en'

const sv: Dictionary = {
  meta: {
    title: 'Novaform — Webbplatser för lokala företag i Helsingfors',
    description:
      'Novaform bygger moderna webbplatser, webbutiker och bokningssidor för lokala företag. Fast pris i förväg, på finska, svenska och engelska.',
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
    eyebrow: 'Webbstudio i Helsingfors',
    titleLead: 'Webbplatser som ger ditt företag',
    titleHighlight: 'fler kunder.',
    description:
      'Vi bygger moderna webbplatser, webbutiker och bokningssidor för lokala företag. Ett tydligt pris i förväg, en första förhandsvisning inom några dagar och en webbplats som fungerar i alla mobiler.',
    primaryCta: 'Starta ett projekt',
    secondaryCta: 'Så arbetar vi',
    trust: ['Svar inom en arbetsdag', 'Fast pris i förväg', 'Finska, svenska och engelska'],
    visual: {
      label: 'Förhandsvisningens storlek',
      desktop: 'Dator',
      tablet: 'Surfplatta',
      mobile: 'Mobil',
      hint: 'Byt storlek och se hur layouten anpassar sig',
      checksTitle: 'Kontrolleras före varje lansering',
      checks: ['Fungerar i alla mobiler', 'Laddar snabbt', 'Redo för Google', 'Alla språk granskade'],
      deploy: 'Förhandsversion publicerad',
      live: 'Live',
    },
  },
  marquee: {
    label: 'Teknik vi arbetar med',
  },
  services: {
    eyebrow: 'Tjänster',
    title: 'Det här gör vi.',
    description:
      'Fem sätt vi hjälper lokala företag att komma ut på nätet och bli hittade. Samma lilla team tar hand om din webbplats från första samtalet till lansering.',
    items: [
      {
        id: 'design',
        title: 'Webbplatser',
        description:
          'En tydlig och snygg webbplats byggd kring ditt företag: tjänster, priser, bilder och kontaktuppgifter som är lätta att hitta på alla enheter.',
        points: [
          'Designad för mobilen först',
          'Dina texter, bilder och logotyp',
          'Kontaktuppgifter, karta och öppettider',
        ],
      },
      {
        id: 'development',
        title: 'Online och klar',
        description:
          'Vi publicerar din webbplats och sköter tekniken, så att den laddar snabbt, är säker och helt enkelt fungerar.',
        points: ['Drift hos Vercel', 'Din egen domän kopplad', 'Företagsmejl vid behov'],
      },
      {
        id: 'ecommerce',
        title: 'Webbutiker',
        description:
          'En enkel webbutik där kunderna kan bläddra bland dina produkter och betala tryggt, byggd med Shopify eller Stripe-betalningar.',
        points: ['Shopify-butik uppsatt åt dig', 'Kort- och onlinebetalningar', 'Produkter, frakt och kvitton'],
      },
      {
        id: 'landing',
        title: 'Bokning och integrationer',
        description:
          'Låt kunderna boka, beställa eller kontakta dig direkt från webbplatsen, med verktyg du redan har eller nya som vi sätter upp.',
        points: [
          'Onlinebokning (Timma, Fresha m.fl.)',
          'Kontaktformulär som når din inkorg',
          'Google Maps, sociala medier och recensioner',
        ],
      },
      {
        id: 'redesign',
        title: 'Omdesign',
        description:
          'Känns din nuvarande webbplats föråldrad eller är den svår att använda i mobilen? Vi bygger om den, behåller det som fungerar och flyttar över innehållet.',
        points: ['Fräsch, modern design', 'Innehållet flyttas åt dig', 'Din synlighet på Google behålls'],
      },
    ],
    labels: {
      before: 'Före',
      after: 'Efter',
      compare: 'Jämför den gamla och nya designen',
      demo: {
        home: 'Hem',
        menu: 'Meny',
        contact: 'Kontakt',
        welcome: 'Välkommen till Café Aamu',
        intro: 'Kaffe · Bakverk · Lunch',
        readMore: 'Läs mer',
        cookies: 'Den här webbplatsen använder cookies för att förbättra din upplevelse.',
        book: 'Boka bord',
        open: 'Öppet idag 7–18',
        headline: 'Lugna morgnar, gott kaffe.',
        cta: 'Se menyn',
      },
      buildPassed: 'Bygget lyckades',
      checkout: 'Kassa',
      getStarted: 'Boka tid',
    },
    capabilities: {
      eyebrow: 'Det här ingår',
      title: 'Allt en webbplats för småföretag behöver.',
      description:
        'Från design till lansering sköter ett och samma team allt, så du har en kontaktperson och inget faller mellan stolarna.',
      groups: [
        {
          title: 'Design',
          items: [
            'Mobilvänliga layouter',
            'Dina färger och logotyp',
            'Tydliga texter och struktur',
            'Bilder och gallerier',
          ],
        },
        {
          title: 'Bygge',
          items: ['Moderna, snabba webbplatser', 'Drift och publicering', 'Domän och e-post', 'Kontaktformulär'],
        },
        {
          title: 'Försäljning och bokning',
          items: ['Shopify', 'Stripe-betalningar', 'Bokningssystem', 'Länkar till sociala medier'],
        },
        {
          title: 'Synlighet',
          items: [
            'Grunderna i sökmotoroptimering',
            'Google-företagsprofil',
            'Besöksstatistik',
            'Webbplatser på finska, svenska och engelska',
          ],
        },
      ],
    },
  },
  work: {
    eyebrow: 'Exempel',
    title: 'Så här kan din webbplats se ut.',
    description:
      'Fyra exempelwebbplatser för påhittade företag, var och en med sitt eget syfte. Din webbplats får samma omsorg och designas kring just ditt företag.',
    tagsLabel: 'Funktioner',
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
        tags: ['Bokning', 'Tillgänglig', 'Flerspråkig'],
      },
      {
        id: 'voltra',
        name: 'Voltra',
        category: 'Landningssida för SaaS',
        summary: 'En lanseringssida för en laddplattform för elbilar med ett tydligt mål: att boka en demo.',
        tags: ['Landningssida', 'Animation', 'Kontaktformulär'],
      },
      {
        id: 'fjord',
        name: 'Form & Fjord',
        category: 'Arkitektportfolio',
        summary: 'En redaktionell portfolio där stora bilder och stillsam typografi gör jobbet.',
        tags: ['Portfolio', 'Bildgalleri', 'Redaktionell'],
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
    title: 'Enkelt från början till slut.',
    description:
      'Vi är en liten, ny studio. Du pratar direkt med dem som bygger din webbplats, och allt förklaras på ett begripligt sätt.',
    items: [
      {
        id: 'clarity',
        title: 'Tydlighet först',
        description:
          'Vi planerar vad webbplatsen ska säga innan vi designar den, så att besökarna snabbt hittar dina tjänster, priser och kontaktuppgifter.',
      },
      {
        id: 'craft',
        title: 'Moderna verktyg, äkta omsorg',
        description:
          'Vi bygger med moderna verktyg, AI inräknat. Det gör att vi kan arbeta snabbt och hålla rimliga priser, och tiden vi sparar lägger vi på detaljerna i din webbplats.',
      },
      {
        id: 'performance',
        title: 'Snabbt och lätt att använda',
        description:
          'Före lanseringen kontrollerar vi att webbplatsen laddar snabbt, fungerar bra i mobilen och har det grundläggande som Google behöver för att hitta den.',
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
        'Ett fast pris innan något arbete börjar',
        'Direktkontakt med dem som bygger din webbplats',
        'En förhandsvisning du kan titta på när som helst',
        'Hastighet och mobilanvändning kontrolleras före lansering',
        'En kort guide till hur uppdateringar fungerar',
        'Tydliga svar på finska, svenska eller engelska',
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
  faq: {
    eyebrow: 'Frågor',
    title: 'Vanliga frågor.',
    items: [
      {
        q: 'Vad kostar en webbplats?',
        a: 'Varje projekt prissätts individuellt. Berätta om din budget i projektformuläret, så skickar vi en offert till fast pris efter ett kostnadsfritt startsamtal. Priset kommer vi överens om innan något arbete börjar, så det blir inga överraskningar.',
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
