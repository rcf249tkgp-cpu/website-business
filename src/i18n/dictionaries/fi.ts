import type { Dictionary } from './en'

const fi: Dictionary = {
  meta: {
    title: 'Novaform — Verkkosivut paikallisille yrityksille Helsingissä',
    description:
      'Novaform tekee moderneja verkkosivuja, verkkokauppoja ja ajanvaraussivuja paikallisille yrityksille. Kiinteä hinta etukäteen, suomeksi, ruotsiksi ja englanniksi.',
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
    eyebrow: 'Verkkostudio Helsingissä',
    titleLead: 'Verkkosivut, jotka tuovat yrityksellesi',
    titleHighlight: 'lisää asiakkaita.',
    description:
      'Teemme moderneja verkkosivuja, verkkokauppoja ja ajanvaraussivuja paikallisille yrityksille. Selkeä hinta etukäteen, ensimmäinen esikatselu muutamassa päivässä ja sivusto, joka toimii jokaisella puhelimella.',
    primaryCta: 'Aloita projekti',
    secondaryCta: 'Näin työskentelemme',
    trust: ['Vastaus yhden arkipäivän sisällä', 'Kiinteä hinta etukäteen', 'Suomeksi, ruotsiksi ja englanniksi'],
    visual: {
      label: 'Esikatselun koko',
      desktop: 'Tietokone',
      tablet: 'Tabletti',
      mobile: 'Mobiili',
      hint: 'Vaihda kokoa ja katso, miten asettelu mukautuu',
      checksTitle: 'Tarkistetaan ennen jokaista julkaisua',
      checks: [
        'Toimii kaikilla puhelimilla',
        'Latautuu nopeasti',
        'Valmis Googlea varten',
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
    title: 'Mitä teemme.',
    description:
      'Viisi tapaa, joilla autamme paikallisia yrityksiä verkkoon ja löydetyiksi. Sama pieni tiimi hoitaa sivustosi ensimmäisestä puhelusta julkaisuun.',
    items: [
      {
        id: 'design',
        title: 'Verkkosivut',
        description:
          'Selkeät ja näyttävät verkkosivut yrityksesi ympärille: palvelut, hinnat, kuvat ja yhteystiedot helposti löydettävissä millä tahansa laitteella.',
        points: [
          'Suunniteltu ensin puhelimille',
          'Omat tekstisi, kuvasi ja logosi',
          'Yhteystiedot, kartta ja aukioloajat',
        ],
      },
      {
        id: 'development',
        title: 'Verkossa ja valmiina',
        description:
          'Julkaisemme sivustosi ja hoidamme tekniikan, jotta se latautuu nopeasti, pysyy turvallisena ja yksinkertaisesti toimii.',
        points: ['Ylläpito Vercelissä', 'Oma verkkotunnus käyttöön', 'Yrityssähköposti tarvittaessa'],
      },
      {
        id: 'ecommerce',
        title: 'Verkkokaupat',
        description:
          'Yksinkertainen verkkokauppa, jossa asiakkaat selaavat tuotteitasi ja maksavat turvallisesti. Toteutus Shopifylla tai Stripe-maksuilla.',
        points: ['Shopify-kauppa valmiiksi pystytettynä', 'Kortti- ja verkkomaksut', 'Tuotteet, toimitukset ja kuitit'],
      },
      {
        id: 'landing',
        title: 'Ajanvaraus ja integraatiot',
        description:
          'Asiakkaat voivat varata, tilata tai ottaa yhteyttä suoraan sivustoltasi. Käytämme jo käyttämiäsi työkaluja tai otamme uudet käyttöön.',
        points: [
          'Ajanvaraus (Timma, Fresha ym.)',
          'Yhteydenottolomake suoraan sähköpostiisi',
          'Google Maps, some ja arvostelut',
        ],
      },
      {
        id: 'redesign',
        title: 'Uudistukset',
        description:
          'Onko nykyinen sivustosi vanhanaikainen tai hankala käyttää puhelimella? Rakennamme sen uudelleen, säilytämme toimivan ja siirrämme sisällön.',
        points: ['Raikas, moderni ulkoasu', 'Sisältö siirretään puolestasi', 'Näkyvyys Googlessa säilyy'],
      },
    ],
    labels: {
      before: 'Ennen',
      after: 'Jälkeen',
      compare: 'Vertaa vanhaa ja uutta ulkoasua',
      demo: {
        home: 'Etusivu',
        menu: 'Menu',
        contact: 'Yhteystiedot',
        welcome: 'Tervetuloa Café Aamuun',
        intro: 'Kahvia · Leivonnaisia · Lounasta',
        readMore: 'Lue lisää',
        cookies: 'Tämä sivusto käyttää evästeitä käyttökokemuksen parantamiseksi.',
        book: 'Varaa pöytä',
        open: 'Avoinna tänään 7–18',
        headline: 'Rauhallisia aamuja, hyvää kahvia.',
        cta: 'Katso menu',
      },
      buildPassed: 'Koostaminen onnistui',
      checkout: 'Kassa',
      getStarted: 'Varaa aika',
    },
    capabilities: {
      eyebrow: 'Sisältyy',
      title: 'Kaikki, mitä pienyrityksen verkkosivut tarvitsevat.',
      description:
        'Suunnittelusta julkaisuun yksi tiimi hoitaa kaiken, joten sinulla on yksi yhteyshenkilö eikä mitään huku matkalla.',
      groups: [
        {
          title: 'Suunnittelu',
          items: [
            'Mobiiliystävällinen asettelu',
            'Omat värisi ja logosi',
            'Selkeät tekstit ja rakenne',
            'Kuvat ja galleriat',
          ],
        },
        {
          title: 'Toteutus',
          items: [
            'Modernit, nopeat sivustot',
            'Ylläpito ja julkaisu',
            'Verkkotunnus ja sähköposti',
            'Yhteydenottolomakkeet',
          ],
        },
        {
          title: 'Myynti ja ajanvaraus',
          items: ['Shopify', 'Stripe-maksut', 'Ajanvarausjärjestelmät', 'Somelinkit'],
        },
        {
          title: 'Löydettävyys',
          items: [
            'Hakukoneiden perusasiat',
            'Google-yritysprofiili',
            'Kävijätilastot',
            'Sivut suomeksi, ruotsiksi ja englanniksi',
          ],
        },
      ],
    },
  },
  work: {
    eyebrow: 'Esimerkit',
    title: 'Tältä sinun verkkosivusi voisivat näyttää.',
    description:
      'Neljä esimerkkisivustoa kuvitteellisille yrityksille, joilla jokaisella on eri tarve. Sinun sivustosi suunnitellaan yhtä huolella juuri sinun yrityksellesi.',
    tagsLabel: 'Ominaisuudet',
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
        tags: ['Ajanvaraus', 'Saavutettava', 'Monikielinen'],
      },
      {
        id: 'voltra',
        name: 'Voltra',
        category: 'SaaS-laskeutumissivu',
        summary: 'Julkaisusivu sähköautojen latausalustalle, jolla on yksi selkeä tavoite: demon varaaminen.',
        tags: ['Laskeutumissivu', 'Animaatio', 'Yhteydenottolomake'],
      },
      {
        id: 'fjord',
        name: 'Form & Fjord',
        category: 'Arkkitehtiportfolio',
        summary: 'Journalistinen portfolio, jossa suuret kuvat ja hillitty typografia hoitavat työn.',
        tags: ['Portfolio', 'Kuvagalleria', 'Editoriaalinen'],
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
    title: 'Suoraviivaisesti alusta loppuun.',
    description:
      'Olemme pieni, uusi studio. Puhut suoraan niiden kanssa, jotka rakentavat sivustosi, ja kaikki selitetään selkeällä kielellä.',
    items: [
      {
        id: 'clarity',
        title: 'Selkeys ensin',
        description:
          'Mietimme ensin, mitä sivustosi pitää kertoa, ja vasta sitten ulkoasun. Näin kävijät löytävät nopeasti palvelut, hinnat ja yhteystiedot.',
      },
      {
        id: 'craft',
        title: 'Modernit työkalut, aitoa huolellisuutta',
        description:
          'Rakennamme moderneilla työkaluilla, myös tekoälyn avulla. Näin työ etenee nopeasti ja hinnat pysyvät kohtuullisina, ja säästetty aika menee sivustosi yksityiskohtiin.',
      },
      {
        id: 'performance',
        title: 'Nopea ja helppokäyttöinen',
        description:
          'Ennen julkaisua tarkistamme, että sivusto latautuu nopeasti, toimii hyvin puhelimella ja että Googlen tarvitsemat perusasiat ovat kunnossa.',
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
        'Kiinteä hinta ennen kuin työ alkaa',
        'Suora yhteys sivustosi tekijöihin',
        'Esikatselu, jota voit seurata milloin tahansa',
        'Nopeus ja mobiilikäyttö tarkistetaan ennen julkaisua',
        'Lyhyt ohje päivitysten hoitamisesta',
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
        description: 'Suunnittelemme sivut ja sisällön ja lähetämme kiinteähintaisen tarjouksen aikatauluineen.',
        deliverables: ['Sivusuunnitelma', 'Kiinteähintainen tarjous'],
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
          'Testaat kaiken. Tarkistamme nopeuden, mobiilikäytön ja Googlen perusasiat ja korjaamme havainnot.',
        deliverables: ['Lopputarkistus', 'Viimeistely'],
      },
      {
        id: 'launch',
        title: 'Julkaisu',
        duration: 'Päivät 12–14',
        description:
          'Yhdistämme verkkotunnuksesi, julkaisemme sivuston ja otamme kävijätilastot käyttöön. Lopuksi näytämme, miten päivitykset hoituvat.',
        deliverables: ['Valmis sivusto', 'Lyhyt ohje'],
      },
    ],
  },
  faq: {
    eyebrow: 'Kysymykset',
    title: 'Usein kysyttyä.',
    items: [
      {
        q: 'Paljonko verkkosivusto maksaa?',
        a: 'Jokainen projekti hinnoitellaan erikseen. Kerro budjettisi projektilomakkeella, niin lähetämme maksuttoman aloituspuhelun jälkeen kiinteähintaisen tarjouksen. Hinnasta sovitaan ennen kuin työ alkaa, joten yllätyksiä ei tule.',
      },
      {
        q: 'Kuinka kauan projekti kestää?',
        a: 'Tyypillinen yrityksen verkkosivusto on julkaistu yhdessä–kahdessa viikossa aloituksesta. Laskeutumissivut voivat valmistua vielä nopeammin, verkkokaupat ja laajemmat sivustot vievät enemmän aikaa. Aikataulusta sovitaan tarjouksessa.',
      },
      {
        q: 'Voimmeko päivittää sisältöä itse?',
        a: 'Halutessasi kyllä. Useimmat asiakkaat lähettävät muutokset meille ja teemme ne nopeasti, esimerkiksi osana kuukausittaista ylläpitosopimusta. Jos haluat muokata tekstejä itse, voimme lisätä yksinkertaisen muokkaustyökalun.',
      },
      {
        q: 'Teettekö monikielisiä sivustoja?',
        a: 'Kyllä. Työskentelemme suomeksi, ruotsiksi ja englanniksi ja rakennamme sivustoja tarvitsemillasi kielillä, hakukoneasetukset kunkin kielen mukaan.',
      },
      {
        q: 'Mitä julkaisun jälkeen tapahtuu?',
        a: 'Seuraamme julkaisua ja korjaamme mahdolliset ongelmat. Halutessasi hoidamme ylläpidon, päivitykset ja pienet muutokset kuukausimaksua vastaan.',
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
      webapp: 'Jotain muuta',
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
      accessibility: 'Saavutettavuus',
      branding: 'Logo ja brändi',
    },
    budgetUnsure: 'En ole vielä varma',
    budgetAbove: '{amount}+',
    budgetUpTo: 'Enintään {amount}',
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
          title: 'Esimerkkisivustot',
          body: 'Sivustolla esitellyt esimerkkisivustot ovat tiimimme kuvitteellisille yrityksille tekemiä näytteitä osaamisestamme. Ne eivät ole todellisia asiakastöitä.',
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
