import type { Dictionary } from './en'

const fi: Dictionary = {
  meta: {
    title: 'Novaform — Verkkosuunnittelu- ja kehitysstudio Helsingissä',
    description:
      'Novaform suunnittelee ja toteuttaa verkkosivustoja, verkkokauppoja ja laskeutumissivuja. Harkittua suunnittelua, puhdasta koodia ja selkeä prosessi suomeksi, ruotsiksi ja englanniksi.',
  },
  a11y: {
    skipToContent: 'Siirry sisältöön',
    openMenu: 'Avaa valikko',
    closeMenu: 'Sulje valikko',
    language: 'Kieli',
    mainNav: 'Päänavigaatio',
    home: 'Etusivu',
    progress: 'Lukemisen edistyminen',
  },
  nav: {
    services: 'Palvelut',
    work: 'Työt',
    why: 'Toimintatapa',
    process: 'Prosessi',
    faq: 'Kysymykset',
    contact: 'Yhteystiedot',
    cta: 'Aloita projekti',
  },
  hero: {
    eyebrow: 'Itsenäinen verkkostudio Helsingissä',
    titleLead: 'Verkkosivut, joiden ansiosta yritystäsi',
    titleHighlight: 'on mahdoton ohittaa.',
    description:
      'Suunnittelemme ja rakennamme verkkosivustoja, verkkokauppoja ja laskeutumissivuja yrityksille, joille ei ole yhdentekevää, miltä ne näyttävät. Harkittua suunnittelua, puhdasta koodia ja prosessi, jota voit seurata joka vaiheessa.',
    primaryCta: 'Aloita projekti',
    secondaryCta: 'Näin työskentelemme',
    trust: ['Vastaus yhden arkipäivän sisällä', 'Kiinteähintaiset tarjoukset', 'Suomeksi, ruotsiksi ja englanniksi'],
    visual: {
      label: 'Esikatselun koko',
      desktop: 'Tietokone',
      tablet: 'Tabletti',
      mobile: 'Mobiili',
      hint: 'Vaihda kokoa ja katso, miten asettelu mukautuu',
      checksTitle: 'Tarkistetaan ennen jokaista julkaisua',
      checks: [
        'Suorituskykybudjetti',
        'Saavutettavuus (WCAG 2.2 AA)',
        'SEO ja metatiedot',
        'Kaikki kieliversiot tarkistettu',
      ],
      deploy: 'Esikatseluversio julkaistu',
      live: 'Live',
    },
  },
  marquee: {
    label: 'Teknologiat, joilla työskentelemme',
  },
  services: {
    eyebrow: 'Palvelut',
    title: 'Mitä rakennamme.',
    description:
      'Viisi tapaa, joilla voimme auttaa. Jokaisen projektin suunnittelee ja toteuttaa sama pieni tiimi ensimmäisestä luonnoksesta julkaisuun.',
    items: [
      {
        id: 'design',
        title: 'Verkkosivujen suunnittelu',
        description:
          'Käyttöliittymiä, jotka lähtevät asiakkaistasi ja brändistäsi, eivät valmispohjasta. Aloitamme rakenteesta ja sisällöstä ja hiomme sitten jokaisen näkymän selkeäksi.',
        points: [
          'UX ja sivuston rakenne',
          'Visuaalinen suunnittelu ja design-järjestelmät',
          'Klikattavat prototyypit ennen koodia',
        ],
      },
      {
        id: 'development',
        title: 'Verkkokehitys',
        description:
          'Käsityönä moderneilla teknologioilla, jotta sivusto latautuu nopeasti, pysyy turvallisena ja on tiimillesi helppo päivittää.',
        points: [
          'Next.js ja headless CMS',
          'Suorituskykybudjetti ja Core Web Vitals -tarkistukset',
          'Integraatiot käyttämiinne työkaluihin',
        ],
      },
      {
        id: 'ecommerce',
        title: 'Verkkokaupat',
        description:
          'Verkkokauppoja, joissa on selkeät tuotesivut ja sujuva kassa sekä maksutavat, joita pohjoismaiset asiakkaat odottavat.',
        points: ['Shopify tai headless-kauppa', 'Klarna, Stripe, MobilePay ja Swish', 'Tuote- ja varastosynkronointi'],
      },
      {
        id: 'landing',
        title: 'Laskeutumissivut',
        description:
          'Keskittyneitä kampanjasivuja, joilla on yksi tavoite ja selkeä toimintakehote ja joita voi mitata ensimmäisestä päivästä alkaen.',
        points: ['Viesti ja sivun rakenne', 'Analytiikka ja tapahtumaseuranta', 'Valmiina A/B-testaukseen'],
      },
      {
        id: 'redesign',
        title: 'Uudistukset',
        description:
          'Käymme läpi nykyisen sivustosi, säilytämme toimivan ja rakennamme loput uudelleen. Siirrämme sisällön ja hakusijoitukset huolella.',
        points: [
          'UX- ja suorituskykykatselmus',
          'Uudelleenohjaussuunnitelma hakunäkyvyyden suojaamiseksi',
          'Sisällön uudelleenjärjestely',
        ],
      },
    ],
    labels: {
      before: 'Ennen',
      after: 'Jälkeen',
      compare: 'Vertaa vanhaa ja uutta ulkoasua',
      buildPassed: 'Koostaminen onnistui',
      checkout: 'Kassa',
      getStarted: 'Aloita',
    },
    capabilities: {
      eyebrow: 'Osaaminen',
      title: 'Suunnittelu ja kehitys saman katon alla.',
      description:
        'Jokainen projekti hyödyntää samaa osaamista, joten suunnittelu- ja teknisistä ratkaisuista päätetään yhdessä eikä niitä siirretä tiimiltä toiselle.',
      groups: [
        {
          title: 'Suunnittelu',
          items: [
            'Käyttäjätutkimus ja sivuston rakenne',
            'Käyttöliittymä ja visuaalinen ilme',
            'Design-järjestelmät',
            'Prototyypit',
            'Sisällön rakenne',
          ],
        },
        {
          title: 'Kehitys',
          items: [
            'Next.js ja React',
            'Headless CMS',
            'WordPress',
            'Rajapinnat ja integraatiot',
            'Ylläpito ja julkaisu',
          ],
        },
        {
          title: 'Verkkokauppa',
          items: ['Shopify', 'Stripe ja Klarna', 'Tilausmallit', 'Tuotetiedot ja varasto'],
        },
        {
          title: 'Laatu',
          items: [
            'Saavutettavuus (WCAG 2.2 AA)',
            'Tekninen SEO',
            'Suorituskykybudjetti',
            'Monikieliset sivustot',
            'Yksityisyyttä kunnioittava analytiikka',
          ],
        },
      ],
    },
  },
  work: {
    eyebrow: 'Suunnittelututkielmat',
    title: 'Miten ajattelemme, suunnittelun kautta näytettynä.',
    description:
      'Novaform on uusi studio, joten asiakaslistan sijaan näytämme omia suunnittelututkielmiamme. Jokainen tarkastelee erilaista yritystä ja ongelmia, jotka sen verkkosivuston on ratkaistava.',
    conceptBadge: 'Suunnittelututkielma',
    disclaimer: 'Brändit ovat kuvitteellisia ja tiimimme luomia. Ne eivät ole asiakastöitä.',
    projects: [
      {
        id: 'ember',
        name: 'Ember Roasters',
        category: 'Verkkokauppa',
        summary: 'Miten pieni paahtimo voisi myydä kahvitilauksia ja säilyttää samalla tarinallisen brändinsä lämmön.',
        tags: ['Shopify', 'Tilaukset', 'Brändi'],
      },
      {
        id: 'lumo',
        name: 'Lumo Clinic',
        category: 'Terveydenhuolto',
        summary: 'Rauhallinen ja saavutettava klinikkasivusto, jossa ajan varaaminen vie kolme vaihetta.',
        tags: ['Ajanvaraus', 'WCAG 2.2', 'Monikielinen'],
      },
      {
        id: 'voltra',
        name: 'Voltra',
        category: 'SaaS-laskeutumissivu',
        summary: 'Julkaisusivu sähköautojen latausalustalle, jolla on yksi selkeä tavoite: demon varaaminen.',
        tags: ['Laskeutumissivu', 'Animaatio', 'A/B-testaus'],
      },
      {
        id: 'fjord',
        name: 'Form & Fjord',
        category: 'Arkkitehtiportfolio',
        summary: 'Journalistinen portfolio, jossa suuret kuvat ja hillitty typografia hoitavat työn.',
        tags: ['Portfolio', 'Headless CMS', 'Editoriaalinen'],
      },
    ],
    mock: {
      shop: 'Kauppa',
      subscribe: 'Tilaa',
      addToCart: 'Lisää ostoskoriin',
      emberKicker: 'Yksi alkuperä · Etiopia',
      emberNotes: ['Jasmiini', 'Bergamotti', 'Persikka'],
      bookVisit: 'Varaa aika',
      ourServices: 'Palvelumme',
      lumoTitle: ['Hoitoa, joka', 'tuntuu rauhalliselta.'],
      month: 'Lokakuu',
      requestDemo: 'Pyydä demo',
      voltraTitle: ['LATAA', 'NOPEAMMIN.'],
      voltraFeatures: ['Pikalataus', 'Vapaat paikat reaaliajassa'],
      projects: 'Projektit',
      studio: 'Studio',
      fjordTitle: ['Hiljaista', 'arkkitehtuuria'],
    },
  },
  why: {
    eyebrow: 'Toimintatapamme',
    title: 'Vähemmän välikäsiä, enemmän huolellisuutta.',
    description:
      'Olemme pieni, uusi studio. Työskentelet suoraan niiden kanssa, jotka suunnittelevat ja rakentavat sivustosi, ja jokainen ratkaisu perustellaan selkeällä kielellä.',
    items: [
      {
        id: 'clarity',
        title: 'Selkeys ensin',
        description:
          'Suunnittelemme rakenteen ja sisällön ennen visuaalista ilmettä, jotta jokaisella sivulla on tarkoitus ja kävijät löytävät etsimänsä.',
      },
      {
        id: 'craft',
        title: 'Käsin tehty',
        description:
          'Ei valmispohjia eikä sivunrakentajia. Jokainen asettelu suunnitellaan yrityksellesi ja koodataan tasolla, jonka näytämme mielellämme muillekin kehittäjille.',
      },
      {
        id: 'performance',
        title: 'Nopea ja saavutettava alusta asti',
        description:
          'Asetamme suorituskykybudjetin heti alussa ja testaamme WCAG 2.2 AA -vaatimuksia vasten koko projektin ajan, emme vasta ennen julkaisua.',
      },
      {
        id: 'communication',
        title: 'Avoin viestintä',
        description:
          'Säännölliset päivitykset, live-esikatselu ensimmäisestä versiosta alkaen ja vastaus yhden arkipäivän sisällä.',
      },
    ],
    commitments: {
      title: 'Mitä voit odottaa meiltä',
      items: [
        'Kiinteähintainen tarjous ennen kuin työ alkaa',
        'Suora yhteys suunnittelijaan ja kehittäjään',
        'Esikatselu, jota voit seurata milloin tahansa',
        'Saavutettavuus ja suorituskyky tarkistetaan ennen julkaisua',
        'Koulutus, jotta tiimisi voi päivittää sivustoa',
        'Selkeät vastaukset suomeksi, ruotsiksi tai englanniksi',
      ],
    },
    newStudio: {
      title: 'Miksi valita uusi studio?',
      body: 'Projektisi saa täyden huomiomme sen sijaan, että se olisi yksi monista. Rakennamme mainettamme sivusto kerrallaan, joten meillä on kaikki syyt onnistua juuri sinun sivustossasi.',
    },
  },
  process: {
    eyebrow: 'Prosessimme',
    title: 'Viisi vaihetta ensimmäisestä puhelusta julkaisuun.',
    description:
      'Useimmat sivustot julkaistaan kahdessa viikossa. Näet esikatselun jo ensimmäisinä päivinä, joten tiedät aina, mitä seuraavaksi tapahtuu ja mitä tarvitsemme sinulta.',
    note: 'Ajat ovat tyypillisiä yrityksen verkkosivustolle. Verkkokaupat ja laajemmat sivustot vievät enemmän aikaa, ja tarkasta aikataulusta sovitaan tarjouksessa.',
    deliverablesLabel: 'Saat',
    steps: [
      {
        id: 'discovery',
        title: 'Kartoitus',
        duration: 'Päivä 1',
        description:
          'Maksuton aloituspalaveri, jossa tutustumme yritykseesi, asiakkaisiisi ja tavoitteisiisi sekä nykyiseen sivustoosi.',
        deliverables: ['Projektikuvaus', 'Sovitut tavoitteet'],
      },
      {
        id: 'planning',
        title: 'Suunnittelu',
        duration: 'Päivät 1–2',
        description:
          'Suunnittelemme sivuston rakenteen, sisällön ja teknisen toteutuksen ja lähetämme kiinteähintaisen tarjouksen aikatauluineen.',
        deliverables: ['Sivukartta', 'Kiinteähintainen tarjous'],
      },
      {
        id: 'development',
        title: 'Design ja toteutus',
        duration: 'Päivät 3–9',
        description:
          'Suunnittelemme ja rakennamme lyhyissä jaksoissa ja jaamme edistymisen live-esikatselulinkin kautta.',
        deliverables: ['Tärkeimpien sivujen ulkoasu', 'Esikatselulinkki'],
      },
      {
        id: 'review',
        title: 'Tarkistus',
        duration: 'Päivät 9–12',
        description:
          'Testaat kaiken. Tarkistamme suorituskyvyn, saavutettavuuden ja hakukoneoptimoinnin ja korjaamme havainnot.',
        deliverables: ['Laaturaportti', 'Viimeistely'],
      },
      {
        id: 'launch',
        title: 'Julkaisu',
        duration: 'Päivät 12–14',
        description:
          'Julkaisemme sivuston, otamme analytiikan käyttöön ja näytämme tiimillesi, miten sisältöä päivitetään.',
        deliverables: ['Julkaisu ja uudelleenohjaukset', 'Koulutus'],
      },
    ],
  },
  faq: {
    eyebrow: 'Kysymykset',
    title: 'Usein kysyttyä.',
    items: [
      {
        q: 'Paljonko verkkosivusto maksaa?',
        a: 'Hinta riippuu laajuudesta. Maksuttoman aloituspalaverin jälkeen lähetämme kiinteähintaisen tarjouksen, joten tiedät kokonaiskustannuksen ennen kuin työ alkaa. Projektilomakkeen budjettihaarukat antavat suuntaa.',
      },
      {
        q: 'Kuinka kauan projekti kestää?',
        a: 'Tyypillinen yrityksen verkkosivusto on julkaistu yhdessä–kahdessa viikossa aloituksesta. Laskeutumissivut voivat valmistua vielä nopeammin, verkkokaupat ja laajemmat sivustot vievät enemmän aikaa. Aikataulusta sovitaan tarjouksessa.',
      },
      {
        q: 'Voimmeko päivittää sisältöä itse?',
        a: 'Kyllä. Otamme käyttöön tiimillesi sopivan sisällönhallintajärjestelmän ja näytämme, miten sivuja, uutisia ja tuotteita muokataan.',
      },
      {
        q: 'Teettekö monikielisiä sivustoja?',
        a: 'Kyllä. Työskentelemme suomeksi, ruotsiksi ja englanniksi ja rakennamme sivustoja tarvitsemillasi kielillä, hakukoneasetukset kunkin kielen mukaan.',
      },
      {
        q: 'Mitä julkaisun jälkeen tapahtuu?',
        a: 'Seuraamme julkaisua ja korjaamme mahdolliset ongelmat. Halutessasi jatkamme päivityksillä, parannuksilla ja tuella.',
      },
      {
        q: 'Miksi luottaa uuteen studioon?',
        a: 'Meillä ei vielä ole pitkää asiakaslistaa, joten teemme työn näkyväksi: kiinteähintainen tarjous, esikatselulinkki koko projektin ajan ja laaduntarkistukset, jotka voit käydä läpi ennen julkaisua.',
      },
    ],
  },
  contact: {
    eyebrow: 'Aloita projekti',
    title: 'Rakennetaan jotain merkittävää.',
    description:
      'Kerro projektistasi ja valitse sinulle sopiva aika. Palaamme asiaan yhden arkipäivän sisällä ja kerromme seuraavat askeleet.',
    direct: 'Haluatko mieluummin sähköpostin tai puhelun?',
    hoursLabel: 'Aukioloajat',
    points: [
      'Maksuton ja sitoumukseton aloituspalaveri',
      'Kiinteähintainen tarjous kahdessa päivässä',
      'Tietojasi käsitellään luottamuksellisesti',
    ],
  },
  form: {
    steps: {
      project: 'Projekti',
      budget: 'Budjetti ja aikataulu',
      details: 'Tietosi',
      meeting: 'Tapaaminen',
    },
    stepOf: 'Vaihe {current}/{total}',
    labels: {
      websiteType: 'Mitä tarvitset?',
      features: 'Toivotut ominaisuudet',
      featuresHint: 'Valinnainen — valitse kaikki sopivat',
      description: 'Kuvaile projektiasi',
      descriptionPlaceholder:
        'Mitä yrityksesi tekee, mitä sivuston pitäisi saavuttaa ja onko jotain, minkä tiedät jo haluavasi?',
      budget: 'Budjetti (alv 0 %)',
      timeline: 'Milloin haluat julkaista?',
      company: 'Yrityksen nimi',
      name: 'Nimesi',
      email: 'Sähköposti',
      phone: 'Puhelin',
      website: 'Nykyinen verkkosivusto',
      optional: 'valinnainen',
      meetingDate: 'Toivottu tapaamispäivä',
      meetingTime: 'Toivottu aika',
      meetingFormat: 'Tapaamismuoto',
      timezoneNote: 'Ajat ovat Suomen aikaa ({tz}).',
      consent: 'Hyväksyn, että {company} käsittelee tietojani yhteydenottooni vastaamiseksi, kuten kuvataan',
      privacyLink: 'tietosuojaselosteessa',
    },
    websiteTypes: {
      business: 'Yrityksen verkkosivut',
      ecommerce: 'Verkkokauppa',
      landing: 'Laskeutumissivu',
      redesign: 'Uudistus',
      webapp: 'Verkkosovellus / räätälöity',
      unsure: 'En ole vielä varma',
    },
    features: {
      cms: 'Helppo sisällönhallinta',
      booking: 'Ajanvaraus',
      multilingual: 'Monikielisyys',
      blog: 'Blogi / uutiset',
      seo: 'Hakukoneoptimointi',
      payments: 'Maksut',
      integrations: 'Integraatiot (CRM, ERP…)',
      analytics: 'Analytiikka',
      accessibility: 'Saavutettavuus (WCAG)',
      branding: 'Logo ja brändi',
    },
    budgetUnsure: 'En ole vielä varma',
    budgetAbove: '{amount}+',
    timelines: {
      asap: 'Mahdollisimman pian',
      '1-3': '1–3 kuukauden sisällä',
      '3-6': '3–6 kuukauden sisällä',
      flexible: 'Joustava',
    },
    meetingFormats: {
      video: 'Videopuhelu',
      phone: 'Puhelu',
      inPerson: 'Paikan päällä (Helsinki)',
    },
    buttons: {
      next: 'Jatka',
      back: 'Takaisin',
      submit: 'Lähetä pyyntö',
      submitting: 'Lähetetään…',
      retry: 'Yritä uudelleen',
    },
    review: {
      title: 'Melkein valmista',
      description: 'Tapaamisaika on toive — vahvistamme sen sähköpostitse.',
    },
    validation: {
      required: 'Tämä kenttä on pakollinen.',
      email: 'Anna kelvollinen sähköpostiosoite.',
      phone: 'Anna kelvollinen puhelinnumero.',
      url: 'Anna kelvollinen verkko-osoite, esim. esimerkki.fi.',
      tooShort: 'Kirjoita vähintään {min} merkkiä.',
      tooLong: 'Pidä teksti alle {max} merkissä.',
      selectOne: 'Valitse vaihtoehto.',
      dateInPast: 'Valitse tuleva päivämäärä.',
      weekend: 'Valitse arkipäivä.',
      consent: 'Hyväksy jatkaaksesi.',
      captcha: 'Suorita vahvistus.',
      summary: 'Korjaa merkityt kentät.',
    },
    errors: {
      network: 'Emme saaneet yhteyttä palvelimeen. Tarkista yhteytesi ja yritä uudelleen.',
      rateLimited: 'Liian monta pyyntöä. Odota hetki ja yritä uudelleen.',
      spam: 'Lähetyksesi tunnistettiin automaattiseksi. Yritä uudelleen tai lähetä meille sähköpostia.',
      notConfigured:
        'Lomake ei ole tilapäisesti käytettävissä. Lähetä meille sähköpostia — vastaamme yhden arkipäivän sisällä.',
      server: 'Jotain meni vikaan meidän päässämme. Yritä uudelleen tai lähetä meille sähköpostia.',
      validation: 'Jotkin kentät vaativat huomiota.',
      emailUs: 'Lähetä sähköpostia: {email}',
    },
    success: {
      title: 'Kiitos — pyyntösi on vastaanotettu!',
      description: 'Olemme vastaanottaneet projektisi tiedot ja palaamme asiaan yhden arkipäivän sisällä.',
      copySent: 'Vahvistus on lähetetty osoitteeseen {email}.',
      notConfirmedTitle: 'Tapaamistasi ei ole vielä varattu',
      notConfirmed:
        'Toivoit ajankohtaa {date} klo {time} ({format}). Vahvistamme ajan — tai ehdotamme toista — sähköpostitse.',
      reference: 'Viite',
      bookNowTitle: 'Haluatko varata ajan heti?',
      bookNow: 'Valitse aika kalenteristamme ja saat vahvistuksen välittömästi.',
      bookNowCta: 'Varaa aika nyt',
      calendarTitle: 'Ajanvarauskalenteri',
      newRequest: 'Lähetä uusi pyyntö',
      nextTitle: 'Mitä seuraavaksi tapahtuu',
      next: [
        'Käymme projektisi läpi ja valmistelemme kysymykset',
        'Vahvistamme tapaamisen sähköpostitse',
        'Aloituspalaveri — maksuton ja sitoumukseton',
      ],
    },
    draftRestored: 'Palautimme lähettämättömät vastauksesi.',
  },
  email: {
    subject: 'Olemme vastaanottaneet projektipyyntösi — {company}',
    greeting: 'Hei {name},',
    intro:
      'Kiitos yhteydenotostasi! Olemme vastaanottaneet projektipyyntösi ja palaamme asiaan yhden arkipäivän sisällä.',
    meetingNote:
      'Toivomasi tapaamisaika — {date} klo {time} ({format}) — on toive, ei vahvistettu varaus. Vahvistamme sen tai ehdotamme toista aikaa sähköpostitse.',
    summaryTitle: 'Yhteenveto pyynnöstäsi',
    reply: 'Haluatko lisätä jotain? Vastaa vain tähän viestiin.',
    signoff: 'Ystävällisin terveisin',
    team: '{company}-tiimi',
  },
  footer: {
    description:
      'Verkkosuunnittelu- ja kehitysstudio, joka luo premium-verkkosivuja kunnianhimoisille pohjoismaisille yrityksille.',
    navigation: 'Navigaatio',
    contact: 'Yhteystiedot',
    legal: 'Juridiset tiedot',
    privacy: 'Tietosuojaseloste',
    terms: 'Käyttöehdot',
    cookies: 'Sivusto ei käytä seurantaevästeitä.',
    businessId: 'Y-tunnus',
    rights: 'Kaikki oikeudet pidätetään.',
    backToTop: 'Takaisin ylös',
  },
  legal: {
    back: 'Takaisin etusivulle',
    updated: 'Päivitetty viimeksi',
    privacy: {
      title: 'Tietosuojaseloste',
      intro:
        '{company} kunnioittaa yksityisyyttäsi. Tämä seloste kertoo, mitä henkilötietoja keräämme tämän verkkosivuston kautta, miksi, ja mitä oikeuksia sinulla on EU:n yleisen tietosuoja-asetuksen (GDPR) mukaan.',
      sections: [
        {
          title: 'Rekisterinpitäjä',
          body: '{legalName}, {address}. Yhteystiedot: {email}.',
        },
        {
          title: 'Mitä tietoja keräämme',
          body: 'Kun lähetät projektilomakkeen, keräämme nimesi, yrityksesi, sähköpostiosoitteesi, puhelinnumerosi, verkkosivustosi, projektin tiedot, budjetin, aikataulun ja toivotun tapaamisajan. Emme käytä seuranta- tai mainosevästeitä.',
        },
        {
          title: 'Miksi keräämme niitä',
          body: 'Käytämme tietoja ainoastaan yhteydenottoosi vastaamiseen, tapaamisen sopimiseen ja tarjouksen laatimiseen. Käsittelyn oikeusperuste on suostumuksesi ja oikeutettu etumme vastata liiketoimintaa koskeviin yhteydenottoihin.',
        },
        {
          title: 'Kuinka kauan säilytämme tietoja',
          body: 'Yhteydenotot, jotka eivät johda projektiin, poistetaan 12 kuukauden kuluessa. Asiakastietoja säilytetään kirjanpitolain edellyttämän ajan.',
        },
        {
          title: 'Henkilötietojen käsittelijät',
          body: 'Käytämme huolellisesti valittuja palveluntarjoajia sähköpostien toimitukseen ja ajanvaraukseen. Tiedot säilytetään mahdollisuuksien mukaan EU:n/ETA:n alueella, ja siirrot ETA:n ulkopuolelle perustuvat hyväksyttyihin suojatoimiin.',
        },
        {
          title: 'Oikeutesi',
          body: 'Voit milloin tahansa pyytää pääsyä tietoihisi, niiden oikaisemista tai poistamista, vastustaa käsittelyä tai peruuttaa suostumuksesi lähettämällä sähköpostia osoitteeseen {email}. Voit myös tehdä valituksen tietosuojavaltuutetulle.',
        },
      ],
    },
    terms: {
      title: 'Käyttöehdot',
      intro: 'Nämä ehdot koskevat {legalName}:n ylläpitämän verkkosivuston käyttöä.',
      sections: [
        {
          title: 'Sivuston käyttö',
          body: 'Sivuston sisältö on yleistä tietoa. Suunnitteluamme, koodiamme tai sisältöämme ei saa kopioida tai käyttää uudelleen ilman kirjallista lupaa.',
        },
        {
          title: 'Konseptiprojektit',
          body: '”Konseptiprojekti”-merkinnällä varustetut työt ovat tiimimme laatimia suunnittelutöitä, joilla esittelemme osaamistamme. Ne eivät ole todellisia asiakastoimeksiantoja.',
        },
        {
          title: 'Yhteydenotot ja tapaamiset',
          body: 'Projektilomakkeen lähettäminen ei synnytä sopimusta eikä vahvistettua varausta. Tapaamisajat vahvistetaan erikseen sähköpostitse. Projektityö perustuu aina erilliseen kirjalliseen sopimukseen.',
        },
        {
          title: 'Vastuu',
          body: 'Pyrimme pitämään sivuston tiedot oikeina, mutta emme voi taata, että ne ovat aina täydellisiä tai ajantasaisia.',
        },
        {
          title: 'Sovellettava laki',
          body: 'Näihin ehtoihin sovelletaan Suomen lakia.',
        },
      ],
    },
  },
  notFound: {
    title: 'Sivua ei löytynyt',
    description: 'Etsimääsi sivua ei ole olemassa tai se on siirretty.',
    cta: 'Takaisin etusivulle',
  },
}

export default fi
