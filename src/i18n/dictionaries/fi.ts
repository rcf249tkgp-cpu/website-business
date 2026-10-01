import type { Dictionary } from './en'

const fi: Dictionary = {
  meta: {
    title: 'Novaform — Premium-verkkosivut, jotka kasvattavat liiketoimintaasi',
    description:
      'Suunnittelemme ja toteutamme nopeita, näyttäviä ja myyviä verkkosivuja, verkkokauppoja ja laskeutumissivuja kunnianhimoisille yrityksille.',
  },
  a11y: {
    skipToContent: 'Siirry sisältöön',
    openMenu: 'Avaa valikko',
    closeMenu: 'Sulje valikko',
    language: 'Kieli',
    mainNav: 'Päänavigaatio',
    home: 'Etusivu',
  },
  nav: {
    services: 'Palvelut',
    work: 'Työt',
    why: 'Miksi me',
    process: 'Prosessi',
    contact: 'Yhteystiedot',
    cta: 'Aloita projekti',
  },
  hero: {
    eyebrow: 'Verkkosuunnittelu- ja kehitysstudio',
    titleLead: 'Verkkosivut, joiden ansiosta yritystäsi',
    titleHighlight: 'on mahdoton ohittaa.',
    description:
      'Suunnittelemme ja rakennamme premium-verkkosivuja, verkkokauppoja ja laskeutumissivuja — nopeita, saavutettavia ja tehty muuttamaan kävijät asiakkaiksi.',
    primaryCta: 'Aloita projekti',
    secondaryCta: 'Katso töitämme',
    trust: ['Vastaus yhden arkipäivän sisällä', 'Kiinteähintaiset tarjoukset', 'Tehty Suomessa'],
    panel: {
      performance: 'Suorituskyky',
      accessibility: 'Saavutettavuus',
      bestPractices: 'Parhaat käytännöt',
      seo: 'SEO',
      lighthouse: 'Laatutavoitteemme jokaisessa julkaisussa',
      deploy: 'Julkaistu tuotantoon',
      live: 'Live',
    },
  },
  marquee: {
    label: 'Rakennettu modernilla, luotettavalla teknologialla',
  },
  services: {
    eyebrow: 'Palvelut',
    title: 'Kaikki, mitä tarvitset menestyäksesi verkossa.',
    description:
      'Terävästä laskeutumissivusta täysimittaiseen verkkokauppaan — strategia, suunnittelu ja kehitys saman katon alta.',
    items: [
      {
        id: 'design',
        title: 'Verkkosivujen suunnittelu',
        description:
          'Brändisi näköiset, ainutlaatuiset käyttöliittymät, jotka on suunniteltu asiakkaidesi ehdoilla — ei valmispohjia. Jokainen näkymä on hiottu selkeäksi ja myyväksi.',
        points: ['UX ja informaatioarkkitehtuuri', 'Visuaalinen identiteetti verkossa', 'Interaktiiviset prototyypit'],
      },
      {
        id: 'development',
        title: 'Verkkokehitys',
        description:
          'Käsityönä moderneilla teknologioilla — salamannopeat latausajat, vankka tietoturva ja helppo sisällönhallinta.',
        points: ['Next.js ja headless CMS', 'Optimoitu Core Web Vitals -mittareille', 'Integraatiot ja rajapinnat'],
      },
      {
        id: 'ecommerce',
        title: 'Verkkokaupat',
        description:
          'Verkkokauppoja, jotka myyvät — sujuva kassa, älykkäät tuotesivut ja maksutavat, jotka toimivat pohjoismaisille asiakkaille.',
        points: ['Shopify ja headless-kauppa', 'Klarna, Stripe, MobilePay', 'Tuote- ja varastosynkronointi'],
      },
      {
        id: 'landing',
        title: 'Laskeutumissivut',
        description:
          'Korkean konversion kampanjasivut, joilla on yksi tavoite: enemmän liidejä, rekisteröitymisiä ja myyntiä markkinointieuroillasi.',
        points: ['Myyvä copywriting', 'Valmiina A/B-testaukseen', 'Analytiikka ja seuranta'],
      },
      {
        id: 'redesign',
        title: 'Uudistukset',
        description:
          'Anna vanhentuneelle sivustolle uusi elämä. Säilytämme toimivan, korjaamme loput ja siirrämme kaiken turvallisesti — hakukonenäkyvyys mukaan lukien.',
        points: ['UX- ja suorituskykyauditointi', 'Hakukoneystävällinen siirto', 'Sisällön uudelleenjärjestely'],
      },
    ],
  },
  work: {
    eyebrow: 'Valittuja töitä',
    title: 'Konsepteja, jotka näyttävät mihin pystymme.',
    description:
      'Valikoima tiimimme suunnittelemia konseptiprojekteja, jotka esittelevät osaamisemme laajuuden — verkkokaupasta terveydenhuoltoon. Sinun projektisi voi olla seuraava.',
    conceptBadge: 'Konseptiprojekti',
    projects: [
      {
        id: 'ember',
        name: 'Ember Roasters',
        category: 'Verkkokauppa',
        summary: 'Erikoiskahvien verkkokauppa tilauskassalla ja tarinavetoisella tuotekokemuksella.',
        tags: ['Shopify', 'Tilaukset', 'Brändi'],
      },
      {
        id: 'lumo',
        name: 'Lumo Clinic',
        category: 'Terveydenhuolto',
        summary: 'Rauhallinen ja saavutettava klinikkasivusto ajanvarauksella ja monikielisillä palvelusivuilla.',
        tags: ['Ajanvaraus', 'WCAG 2.2', 'Monikielinen'],
      },
      {
        id: 'voltra',
        name: 'Voltra',
        category: 'SaaS-laskeutumissivu',
        summary: 'Rohkea julkaisusivu sähköautojen latausalustalle, rakennettu kasvattamaan demopyyntöjä.',
        tags: ['Laskeutumissivu', 'Animaatio', 'A/B-testaus'],
      },
      {
        id: 'fjord',
        name: 'Form & Fjord',
        category: 'Arkkitehtiportfolio',
        summary: 'Journalistinen portfolio arkkitehtitoimistolle — suuret kuvat, hillitty typografia.',
        tags: ['Portfolio', 'Headless CMS', 'Editoriaalinen'],
      },
    ],
    mock: {
      shop: 'Kauppa',
      subscribe: 'Tilaa',
      addToCart: 'Lisää ostoskoriin',
      bookVisit: 'Varaa aika',
      ourServices: 'Palvelumme',
      requestDemo: 'Pyydä demo',
      chargingStations: 'latausasemaa',
      uptime: 'käytettävyys',
      projects: 'Projektit',
      studio: 'Studio',
    },
  },
  why: {
    eyebrow: 'Miksi valita meidät',
    title: 'Verkkosivusto on investointi. Me teemme siitä kannattavan.',
    description:
      'Yhdistämme designstudion käsityötaidon ja kehitystiimin kurinalaisuuden — sivustosi näyttää poikkeukselliselta ja toimii siellä, missä sillä on merkitystä.',
    items: [
      {
        id: 'quality',
        title: 'Tinkimätön laatu',
        description:
          'Pikselintarkka suunnittelu, puhdas koodi ja perusteellinen testaus kaikilla laitteilla ennen julkaisua.',
      },
      {
        id: 'creativity',
        title: 'Aitoa luovuutta',
        description:
          'Ei valmispohjia. Jokainen sivusto suunnitellaan alusta asti ilmentämään brändiäsi ja erottumaan markkinoillasi.',
      },
      {
        id: 'performance',
        title: 'Rakennettu nopeaksi',
        description:
          'Alle sekunnin latausajat ja huippuluokan Core Web Vitals -tulokset — paremmat hakusijoitukset ja vähemmän menetettyjä kävijöitä.',
      },
      {
        id: 'value',
        title: 'Todellista liiketoiminta-arvoa',
        description:
          'Suunnittelemme tavoitteidesi pohjalta: enemmän liidejä, enemmän myyntiä, vähemmän hallinnointia. Jokainen päätös perustuu tuloksiin.',
      },
    ],
    stats: [
      { value: '<1 s', label: 'Latausaikatavoite' },
      { value: '95+', label: 'Lighthouse-tavoite' },
      { value: '3', label: 'Tuettua kieltä' },
      { value: '24 h', label: 'Vasteaika' },
    ],
  },
  process: {
    eyebrow: 'Prosessimme',
    title: 'Ensimmäisestä puhelusta julkaisuun — ilman yllätyksiä.',
    description:
      'Selkeä ja hyväksi todettu prosessi kiinteine välitavoitteineen, joten tiedät aina, mitä seuraavaksi tapahtuu.',
    steps: [
      {
        id: 'discovery',
        title: 'Kartoitus',
        duration: 'Viikko 1',
        description:
          'Tutustumme yritykseesi, asiakkaisiisi ja tavoitteisiisi maksuttomassa aloituspalaverissa ja käymme läpi nykytilanteen.',
      },
      {
        id: 'planning',
        title: 'Suunnittelu',
        duration: 'Viikot 1–2',
        description:
          'Sivukartta, sisältösuunnitelma, tekninen ratkaisu sekä kiinteähintainen tarjous selkeällä aikataululla.',
      },
      {
        id: 'development',
        title: 'Design ja toteutus',
        duration: 'Viikot 2–6',
        description:
          'Suunnittelemme ja rakennamme lyhyissä sykleissä ja jaamme edistymisen live-esikatselulinkin kautta.',
      },
      {
        id: 'review',
        title: 'Tarkistus',
        duration: 'Viikot 6–7',
        description:
          'Testaat kaiken. Me viimeistelemme, auditoimme suorituskyvyn ja saavutettavuuden sekä korjaamme jokaisen yksityiskohdan.',
      },
      {
        id: 'launch',
        title: 'Julkaisu',
        duration: 'Viikot 7–8',
        description: 'Julkaisemme sivuston, otamme analytiikan käyttöön ja luovutamme sen — koulutuksen ja tuen kera.',
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
      'Kiinteähintainen tarjous viikossa',
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
