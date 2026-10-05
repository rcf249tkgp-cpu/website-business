import type { Dictionary } from './en'

const fi: Dictionary = {
  meta: {
    title: 'Fusion Sites — Verkkosivut paikallisille yrityksille Helsingissä',
    description:
      'Fusion Sites tekee moderneja verkkosivuja, verkkokauppoja ja ajanvaraussivuja paikallisille yrityksille. Kiinteä hinta etukäteen, suomeksi, ruotsiksi ja englanniksi.',
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
    process: 'Prosessi',
    pricing: 'Hinnat',
    about: 'Meistä',
    faq: 'Kysymykset',
    contact: 'Yhteystiedot',
    cta: 'Aloita projekti',
  },
  hero: {
    kicker: 'Verkkostudio — Helsinki',
    titleLead: 'Verkkosivut, jotka tuovat yrityksellesi',
    titleHighlight: 'lisää asiakkaita.',
    description:
      'Suunnittelemme ja rakennamme nopeita, näyttäviä verkkosivuja, verkkokauppoja ja ajanvaraussivuja paikallisille yrityksille. Kiinteä hinta etukäteen ja ensimmäinen esikatselu muutamassa päivässä.',
    primaryCta: 'Aloita projekti',
    secondaryCta: 'Katso työmme',
    facts: [
      { label: 'Studio', value: 'Työpajankatu, Helsinki' },
      { label: 'Vastaus', value: 'Yhden arkipäivän sisällä' },
      { label: 'Kielet', value: 'Suomi · Ruotsi · Englanti' },
    ],
    scroll: 'Vieritä',
  },
  services: {
    eyebrow: 'Palvelut',
    title: 'Mitä teemme.',
    description:
      'Neljä asiaa, jotka osaamme hyvin. Sama pieni tiimi vie projektisi ensimmäisestä puhelusta julkaisuun ja pitää siitä huolta myöhemminkin, jos haluat.',
    includesLabel: 'Sisältää',
    addon: {
      label: 'Lisäpalvelu',
      title: 'Shopify-integraatio',
      text: 'Yhdistämme sivustosi Shopifyhin: tuotteet, maksut ja tilaukset. Saatavilla valinnaisena lisäpalveluna lisähinnasta.',
    },
    items: [
      {
        id: 'websites',
        title: 'Verkkosivut',
        description:
          'Selkeät ja näyttävät verkkosivut yrityksesi ympärille, jotta asiakkaat löytävät palvelut, hinnat ja yhteystiedot millä tahansa laitteella.',
        includes: [
          'Suunniteltu ensin puhelimille',
          'Omat tekstisi, kuvasi ja logosi',
          'Kartta, aukioloajat ja yhteydenottolomake',
        ],
      },
      {
        id: 'stores',
        title: 'Verkkokaupat',
        description:
          'Verkkokauppa, josta asiakkaasi ostavat mielellään. Toteutus Shopifylla tai Stripe-maksuilla, ja tuotteet, toimitukset ja kuitit valmiiksi asetettuina.',
        includes: ['Shopify tai Stripe', 'Kortti- ja mobiilimaksut', 'Tuotteet, toimitukset ja kuitit'],
      },
      {
        id: 'booking',
        title: 'Ajanvaraus ja integraatiot',
        description:
          'Asiakkaasi voivat varata, tilata tai ottaa yhteyttä suoraan sivuiltasi, joko jo käyttämilläsi työkaluilla tai uusilla, jotka otamme käyttöön.',
        includes: ['Timma, Fresha ja vastaavat', 'Lomakkeet suoraan sähköpostiisi', 'Google Maps, arvostelut ja some'],
      },
      {
        id: 'redesign',
        title: 'Uudistukset',
        description:
          'Onko nykyinen sivusto vanhentunut tai hankala puhelimella? Rakennamme sen uudelleen, säilytämme toimivan, siirrämme sisällön ja pidämme nykyiset Google-asetuksesi ennallaan.',
        includes: ['Moderni ulkoasu', 'Sisältö siirretään puolestasi', 'Nykyiset Google-asetukset säilyvät'],
      },
    ],
  },
  beforeAfter: {
    eyebrow: 'Ennen ja jälkeen',
    title: 'Sama yritys. Täysin eri ensivaikutelma.',
    description:
      'Vedä kahvasta ja vertaa tyypillistä vanhentunutta sivustoa siihen, mitä me rakentaisimme tilalle. Valitse toimiala nähdäksesi toisen esimerkin.',
    tabsLabel: 'Valitse esimerkki',
    hint: 'Vedä',
    before: 'Ennen',
    after: 'Jälkeen',
    compare: 'Vertaa vanhaa ja uutta ulkoasua',
    disclaimer: 'Havainnollistavia esimerkkejä. Yritykset ovat keksittyjä.',
    examples: {
      cafe: {
        label: 'Kahvila',
        before: {
          nav: ['Etusivu', 'Menu', 'Yhteystiedot'],
          welcome: 'Tervetuloa Café Aamuun',
          intro: 'Kahvia · Leivonnaisia · Lounasta',
          readMore: 'Lue lisää',
          cookies: 'Tämä sivusto käyttää evästeitä käyttökokemuksen parantamiseksi.',
        },
        after: {
          nav: ['Menu', 'Löydä meidät', 'Tilaa'],
          kicker: 'Kallio, Helsinki',
          title: 'Rauhallisia aamuja, vakavasti otettavaa kahvia.',
          text: 'Erikoiskahvia, joka aamu leivottuja korvapuusteja ja keittolounas arkisin.',
          cta: 'Katso menu',
          secondary: 'Tilaa ennakkoon',
          open: 'Avoinna tänään 7–18',
          menuTitle: 'Tällä viikolla',
          menu: [
            ['Flat white kauramaidolla', '4,90'],
            ['Kardemummapulla', '3,80'],
            ['Päivän keitto', '12,50'],
          ],
        },
      },
      salon: {
        label: 'Kampaamo',
        before: {
          welcome: 'Tervetuloa kotisivuillemme!',
          text: 'Tarjoamme hiustenleikkuut, värjäykset ja hoidot koko perheelle. Soita ja varaa aika!',
          phone: 'Puh. 09 123 4567',
          prices: 'Hinnasto (PDF)',
          news: 'Uutiset',
          newsText: 'Olemme suljettuna juhannusaattona.',
        },
        after: {
          nav: ['Palvelut', 'Tiimi', 'Hinnasto'],
          kicker: 'Kampaamo Punavuoressa',
          title: 'Hiukset, jotka tuntuvat sinulta.',
          text: 'Leikkaukset, värit ja hoidot rauhallisessa studiossa. Varaa aika verkossa alle minuutissa.',
          cta: 'Varaa aika',
          services: [
            ['Leikkaus ja muotoilu', '45 min', '65 €'],
            ['Väri', '2 h', 'alk. 110 €'],
            ['Balayage', '3 h', 'alk. 160 €'],
          ],
          slotsTitle: 'Seuraavat vapaat ajat',
          slots: ['Ti 10.00', 'Ti 14.30', 'Ke 9.15'],
        },
      },
      construction: {
        label: 'Rakennusala',
        before: {
          tagline: 'Laadukasta rakentamista vuodesta 1998',
          menu: ['Etusivu', 'Palvelut', 'Referenssit', 'Ota yhteyttä'],
          servicesTitle: 'Palvelumme:',
          services: ['Remontit', 'Uudisrakentaminen', 'Kattotyöt', 'Julkisivutyöt'],
          contact: 'Pyydä tarjous!',
        },
        after: {
          nav: ['Palvelut', 'Kohteet', 'Yhteystiedot'],
          kicker: 'Remontit · Uudiskohteet · Julkisivut',
          title: 'Tehty oikein. Valmis ajallaan.',
          text: 'Yksi urakoitsija suunnitelmasta luovutukseen ja aikataulu, josta pidämme kiinni.',
          cta: 'Pyydä tarjous',
          secondary: 'Katso kohteet',
          services: ['Remontit', 'Uudiskohteet', 'Julkisivut'],
          area: 'Toimimme koko Uudellamaalla',
        },
      },
    },
  },
  work: {
    eyebrow: 'Työt',
    title: 'Valittuja töitä.',
    description: 'Ensin oikea julkaisu, sitten konseptitöitä, jotka näyttävät, miten lähestymme eri toimialoja.',
    caseLabel: 'Asiakastyö',
    caseLive: 'Julkaistu sivusto',
    featured: {
      client: 'VYRO Athletics',
      category: 'Verkkokauppa · Treenivaatteet',
      summary:
        'VYRO on treenivaatebrändi, joka julkaisee ensimmäisen mallistonsa, Drop 01:n. Suunnittelimme ja rakensimme heidän verkkokauppansa: tumman ja rohkean kaupan, jossa tuote on pääosassa. Mukana on julkaisusivu, värivaihtoehtojen vaihtaja, suodattimet, yksityiskohtaiset tuotesivut ja arvostelut istuvuusvinkein, englanniksi ja suomeksi.',
      built: [
        'Julkaisusivu ja värivaihtoehtojen vaihtaja',
        'Kauppa suodattimineen ja tuotesivuineen',
        'Arvostelut istuvuusvinkein, englanniksi ja suomeksi',
        'Verkkokaupan Shopify-integraatio',
      ],
      builtLabel: 'Mitä rakensimme',
      cta: 'Vieraile vyroathletics.comissa',
      pages: { drop: 'Julkaisusivu', shop: 'Kauppa', product: 'Tuotesivu', reviews: 'Arvostelut' },
      galleryLabel: 'Sivuja julkaistusta sivustosta',
    },
    devicesLabel: 'Esikatselun koko',
    desktop: 'Tietokone',
    mobile: 'Mobiili',
    scrollHint: 'Vieritä esikatselun sisällä',
    conceptBadge: 'Konsepti',
    conceptsTitle: 'Konseptityöt',
    conceptsDescription:
      'Kuvitteellisia brändejä, jotka suunnittelimme tutkiaksemme, miltä eri yritykset voivat näyttää ja miten ne toimivat verkossa. Valitse yksi ja selaa sitä.',
    disclaimer: 'Brändit ovat kuvitteellisia ja tiimimme luomia. Ne eivät ole asiakastöitä.',
    projectsLabel: 'Valitse konsepti',
    projects: {
      ember: {
        id: 'ember',
        name: 'Ember Roasters',
        category: 'Verkkokauppa',
        summary: 'Pienpaahtimo, joka myy kahvia ja tilauksia lämpimän, tarinallisen brändin voimin.',
        site: {
          nav: ['Kauppa', 'Tilaukset', 'Blogi'],
          cart: 'Ostoskori',
          kicker: 'Pienpaahtimo · Helsinki',
          title: 'Kahvia, jonka takia kannattaa herätä.',
          text: 'Paahdettu joka tiistai ja lähetetty samalla viikolla. Valitse pussi tai anna meidän valita puolestasi.',
          cta: 'Osta kahvia',
          secondary: 'Aloita tilaus',
          productsTitle: 'Viikon paahdot',
          products: [
            ['Yirgacheffe', 'Etiopia', 'Jasmiini · Bergamotti', '18 €'],
            ['La Palma', 'Kolumbia', 'Kaakao · Punainen omena', '16 €'],
            ['Kiambu', 'Kenia', 'Mustaherukka · Lime', '19 €'],
          ],
          add: 'Lisää koriin',
          storyTitle: 'Hitaasti paahdettu, pienissä erissä.',
          storyText:
            'Ostamme suoraan tutuilta tiloilta, paahdamme vaaleaksi hedelmäisyyden säilyttämiseksi ja painamme paahtopäivän jokaiseen pussiin.',
          subTitle: 'Kahvi ei lopu koskaan.',
          subText: 'Tuoretta kahvia kahden tai neljän viikon välein. Tauota tai peru milloin vain.',
          subCta: 'Tilaa',
        },
      },
      lumo: {
        id: 'lumo',
        name: 'Lumo Clinic',
        category: 'Terveydenhuolto',
        summary: 'Rauhallinen ja saavutettava klinikkasivusto, jossa ajan varaaminen vie kolme vaihetta.',
        site: {
          nav: ['Hoidot', 'Asiantuntijat', 'Hinnasto'],
          book: 'Varaa',
          kicker: 'Fysioterapia ja urheilulääketiede',
          title: 'Hoitoa, joka tuntuu rauhalliselta.',
          text: 'Varaa aika kolmessa vaiheessa suomeksi, ruotsiksi tai englanniksi.',
          cta: 'Varaa aika',
          month: 'Lokakuu',
          times: ['9.00', '10.30', '13.15'],
          stepsTitle: 'Näin varaat',
          steps: ['Valitse hoito', 'Valitse aika', 'Vahvista'],
          servicesTitle: 'Hoidot',
          services: [
            ['Fysioterapia', '45 min'],
            ['Urheiluhieronta', '60 min'],
            ['Juoksuanalyysi', '75 min'],
          ],
        },
      },
      voltra: {
        id: 'voltra',
        name: 'Voltra',
        category: 'Tuotteen laskeutumissivu',
        summary: 'Sähköautojen latausalustan julkaisusivu, jolla on yksi selkeä tavoite: demon varaaminen.',
        site: {
          nav: ['Tuote', 'Hinnoittelu', 'Yritys'],
          demo: 'Varaa demo',
          kicker: 'Sähköautojen lataus kalustoille',
          title: ['Lataa', 'nopeammin.'],
          text: 'Yksi alusta kaikille kalustosi latureille: reaaliaikainen saatavuus, älykäs ajoitus ja yksinkertainen laskutus.',
          cta: 'Varaa demo',
          secondary: 'Näin se toimii',
          features: [
            ['Reaaliaikainen saatavuus', 'Näe jokainen vapaa laturi heti.'],
            ['Älykäs ajoitus', 'Lataa silloin, kun sähkö on halvinta.'],
            ['Yksi lasku', 'Kaikki toimipisteet yhdellä kuukausilaskulla.'],
          ],
          ctaTitle: 'Valmiina, kun sinä olet.',
        },
      },
      fjord: {
        id: 'fjord',
        name: 'Form & Fjord',
        category: 'Arkkitehtiportfolio',
        summary: 'Journalistinen portfolio, jossa suuret kuvat ja hillitty typografia hoitavat työn.',
        site: {
          nav: ['Projektit', 'Studio', 'Yhteystiedot'],
          title: ['Hiljaista', 'arkkitehtuuria.'],
          text: 'Pieni toimisto, joka suunnittelee koteja ja julkisia tiloja valon ja materiaalin ehdoilla.',
          projectsTitle: 'Valitut projektit',
          projects: [
            ['Saaren talo', '2024'],
            ['Satamakirjasto', '2023'],
            ['Mäntypaviljonki', '2022'],
          ],
          quote: 'Suunnittelemme niille valoisille tunneille, jotka meillä on.',
          contact: 'Aloita keskustelu',
        },
      },
    },
  },
  process: {
    eyebrow: 'Prosessi',
    title: 'Viisi vaihetta ensimmäisestä puhelusta julkaisuun.',
    description:
      'Tyypillisen verkkosivuston tekeminen kestää noin kaksi viikkoa. Näet esikatselun jo ensimmäisinä päivinä, joten tiedät aina, mitä seuraavaksi tapahtuu ja mitä tarvitsemme sinulta.',
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
  pricing: {
    eyebrow: 'Hinnat',
    title: 'Selkeät hinnat. Ei yllätyksiä.',
    description:
      'Tyypilliset lähtöhinnat. Maksuttoman aloituspuhelun jälkeen saat kiinteän tarjouksen, ja hinnasta sovitaan ennen kuin työ alkaa.',
    from: 'alk.',
    vat: 'alv 0 %',
    pending: 'Hinta pyynnöstä',
    recommended: 'Suosittelemme',
    tiers: [
      {
        id: 'basic',
        name: 'Basic',
        description: 'Terävä ja tiivis verkkosivusto yritykselle, jonka pitää näyttää hyvältä ja löytyä helposti.',
        features: [
          'Enintään 3 sivua',
          'Suunniteltu ensin puhelimille',
          'Yhteydenottolomake ja kartta',
          'Googlen perusasiat kuntoon',
        ],
        cta: 'Aloita Basicilla',
      },
      {
        id: 'standard',
        name: 'Standard',
        description:
          'Kattava verkkosivusto, jossa on tilaa palveluillesi, ajanvaraukselle ja kaikelle, mitä asiakkaat kysyvät.',
        features: ['Enintään 8 sivua', 'Ajanvaraus tai tilaus sivustolla', 'Kaksi kieltä', 'Kävijätilastot'],
        cta: 'Aloita Standardilla',
      },
      {
        id: 'custom',
        name: 'Custom',
        description: 'Verkkokaupat, laajemmat monikieliset sivustot ja kaikki, mikä vaatii räätälöityjä toimintoja.',
        features: [
          'Shopify tai räätälöity kauppa',
          'Integraatiot työkaluihisi',
          'Kolme kieltä',
          'Räätälöidyt toiminnot',
        ],
        cta: 'Pyydä tarjous',
      },
    ],
    addon: {
      label: 'Lisäpalvelu',
      title: 'Shopify-integraatio',
      description:
        'Yhdistämme verkkosivustosi Shopifyhin: tuotteet, varastosaldot, maksut ja tilaukset yhdessä paikassa. Valinnainen lisäpalvelu.',
      price: 'Lisähinnasta',
    },
    maintenance: {
      title: 'Ylläpito ja palvelin',
      description:
        'Palvelin, tietoturvapäivitykset, varmuuskopiot ja pienet sisältömuutokset joka kuukausi, jotta sivustosi pysyy nopeana eikä sinun tarvitse murehtia sitä.',
      per: '/ kk',
    },
  },
  about: {
    eyebrow: 'Meistä',
    title: 'Pieni studio Työpajankadulla.',
    statement: 'Rakennamme verkkosivuja niin kuin hyvä työpaja rakentaa mitä tahansa: huolella, käsin ja kestämään.',
    body: [
      'Fusion Sites on Martin Haukerudin ja Casper Gauffin-Kausten nuori verkkostudio Helsingin Työpajankadulla. Kadun nimi kertoo, miten haluamme tehdä työtä: pieni tiimi lähellä käsityötä, eikä välikäsiä sinun ja sivustosi tekijöiden välillä.',
      'Suunnittelemme ja rakennamme paikallisille yrityksille: kahviloille, kampaamoille, klinikoille, kaupoille ja urakoitsijoille. Saat sivuston, joka näyttää sinulta, toimii jokaisella puhelimella ja helpottaa asiakkaan seuraavaa askelta.',
    ],
    valuesTitle: 'Näin toimimme',
    values: [
      {
        title: 'Suoraan',
        text: 'Puhut suoraan Martinin ja Casperin kanssa, jotka suunnittelevat ja rakentavat sivustosi. Ei välikäsiä.',
      },
      {
        title: 'Rehellisesti',
        text: 'Kiinteä hinta ennen aloitusta, selkeää kieltä koko matkan eikä sitoumuksia jälkikäteen.',
      },
      {
        title: 'Huolella',
        text: 'Ennen jokaista julkaisua tarkistamme nopeuden, puhelimet, saavutettavuuden ja Googlen perusasiat.',
      },
    ],
    photo: 'Studiokuva tulossa',
    findUs: 'Löydät meidät',
  },
  faq: {
    eyebrow: 'Kysymykset',
    title: 'Usein kysyttyä.',
    items: [
      {
        q: 'Paljonko verkkosivusto maksaa?',
        a: 'Pakettiemme lähtöhinnat löydät Hinnat-osiosta. Maksuttoman aloituspuhelun jälkeen lähetämme projektillesi kiinteähintaisen tarjouksen. Hinnasta sovitaan ennen kuin työ alkaa, joten yllätyksiä ei tule.',
      },
      {
        q: 'Kuinka kauan projekti kestää?',
        a: 'Tyypillinen yrityksen verkkosivusto on julkaistu yhdessä–kahdessa viikossa aloituksesta. Laskeutumissivut voivat valmistua vielä nopeammin, verkkokaupat ja laajemmat sivustot vievät enemmän aikaa. Aikataulusta sovitaan tarjouksessa.',
      },
      {
        q: 'Voimmeko päivittää sisältöä itse?',
        a: 'Halutessasi kyllä. Voit myös vain lähettää muutokset meille, ja teemme ne nopeasti, esimerkiksi osana kuukausittaista ylläpitosopimusta. Jos haluat muokata tekstejä itse, voimme lisätä yksinkertaisen muokkaustyökalun.',
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
        a: 'Olemme nuori studio, joten teemme työn näkyväksi: oikea projekti, johon voit tutustua, kiinteähintainen tarjous, esikatselulinkki koko projektin ajan ja laaduntarkistukset, jotka voit käydä läpi ennen julkaisua.',
      },
    ],
  },
  contact: {
    eyebrow: 'Aloita projekti',
    title: 'Rakennetaan jotain merkittävää.',
    description:
      'Kerro projektistasi ja valitse sinulle sopiva aika. Palaamme asiaan yhden arkipäivän sisällä ja kerromme seuraavat askeleet.',
    direct: 'Haluatko mieluummin sähköpostin tai puhelun?',
    nextLabel: 'Mitä seuraavaksi tapahtuu',
    points: [
      'Maksuton ja sitoumukseton aloituspalaveri',
      'Kiinteähintainen tarjous kahdessa päivässä',
      'Tietojasi käsitellään luottamuksellisesti',
    ],
    reply: 'Vastaus yhden arkipäivän sisällä',
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
      consent: 'Hyväksyn, että {legalName} käsittelee tietojani yhteydenottooni vastaamiseksi, kuten kuvataan',
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
    description: 'Helsinkiläinen verkkostudio, joka tekee verkkosivuja paikallisille yrityksille.',
    navigation: 'Navigaatio',
    contact: 'Yhteystiedot',
    legal: 'Juridiset tiedot',
    privacy: 'Tietosuojaseloste',
    terms: 'Käyttöehdot',
    cookies: 'Sivusto ei käytä seurantaevästeitä.',
    businessId: 'Y-tunnus',
    brandNote: 'Fusion Sites on Fusion Hauk Oy:n brändi.',
    rights: 'Kaikki oikeudet pidätetään.',
    backToTop: 'Takaisin ylös',
  },
  legal: {
    back: 'Takaisin etusivulle',
    updated: 'Päivitetty viimeksi',
    privacy: {
      title: 'Tietosuojaseloste',
      intro:
        '{legalName} kunnioittaa yksityisyyttäsi. Tämä seloste kertoo, mitä henkilötietoja keräämme tämän verkkosivuston kautta, miksi, ja mitä oikeuksia sinulla on EU:n yleisen tietosuoja-asetuksen (GDPR) mukaan.',
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
          body: 'Sivustolla esitellyt konseptisivustot ovat tiimimme kuvitteellisille yrityksille tekemiä näytteitä osaamisestamme. Ne eivät ole todellisia asiakastöitä. VYRO Athletics on todellinen asiakastyö.',
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
