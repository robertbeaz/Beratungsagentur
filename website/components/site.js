/* ============================================================
   Zentrale Site-Konfiguration & Inhalte
   – Name, Links und alle Platzhalter an einem Ort.
   TODO-Marker zeigen, was vor dem Livegang ersetzt werden muss.
   ============================================================ */

export const site = {
  name: 'VERDA', // TODO: Finaler Agenturname (Rebranding: nur hier + Impressum/Datenschutz ändern)
  claim: 'Digitale Prozesse für Versicherungsagenturen',
  url: 'https://verda-beratung.de', // TODO: echte Domain (wird für JSON-LD/Canonical genutzt)
  // TODO: Eigenen Cal.com-Link eintragen (z. B. https://cal.com/ihr-name/erstgespraech)
  calUrl: 'https://cal.com/verda/erstgespraech',
  email: 'kontakt@verda-beratung.de', // TODO: echte E-Mail-Adresse
  cta: 'Erstgespräch vereinbaren',
};

export const navLinks = [
  { label: 'Leistungen', href: '/leistungen' },
  { label: 'Wissen', href: '/wissen' },
  { label: 'Über uns', href: '/ueber-uns' },
];

export const tools = [
  'Zoho', 'HubSpot', 'ActiveCampaign', 'Superchat', 'Make', 'Zapier', 'Claude AI',
];

/* ---------- Ausgangslage (Startseite: „Für wen wir arbeiten") ----------
   Keine Branchen mehr, sondern drei typische Situationen einer
   Versicherungsagentur – jede führt direkt zum passenden Paket. */
export const audiences = [
  {
    icon: 'user',
    label: 'Einzelagentur',
    text: 'Sie führen die Agentur allein oder mit einer Kraft im Büro – und brauchen Systeme, die mitlaufen, statt zusätzliche Arbeit zu machen.',
    href: '/leistungen/digitale-agentur',
    linkLabel: 'Digitale Agentur ansehen',
  },
  {
    icon: 'shield',
    label: 'Kleines Team',
    text: 'Zwei bis zehn Mitarbeiter, gewachsene Prozesse – aber kein gemeinsamer Blick mehr auf Kunden und Anfragen.',
    href: '/leistungen/kundenmagnet',
    linkLabel: 'Kundenmagnet ansehen',
  },
  {
    icon: 'chart',
    label: 'Etablierte Agentur',
    text: 'Zehn Mitarbeiter oder mehr, hohes Anfragevolumen – Standardfragen und Rückrufe sollen nicht länger Beratungszeit kosten.',
    href: '/leistungen/ki-assistenz',
    linkLabel: 'KI-Assistenz ansehen',
  },
];

/* ---------- Leistungen: die drei Pakete ----------
   Struktur pro Paket (siehe geschaeftsmodell-digitalisierung-versicherungsagenturen.md, Abschnitt 6 & 88–98):
   Für-wen/Pains → Feature-Bento → Leistungsumfang (deliverables) → Use Cases (aus dem globalen useCases-Export,
   gefiltert nach serviceHref) → Preisblock → FAQ → CTA. */
export const services = [
  {
    slug: 'digitale-agentur',
    icon: 'chart',
    sub: 'CRM · Superchat · Signaturen · Formulare',
    eyebrow: 'Digitale Agentur',
    /* Suchgetriebener Title/Description (statt Markenclaim) – Haupt-Keyword:
       „CRM-Einführung Versicherungsagentur/-makler“. */
    seo: {
      title: 'CRM-Einführung für Versicherungsagenturen & Makler',
      description:
        'CRM, Superchat-Anbindung, digitale Signaturen und Schadenformulare – in 90 Tagen eingerichtet und im Team geschult. Festpreis ab 6.000 €.',
    },
    title: 'Das Fundament: Ihre Agentur, digital aufgestellt',
    teaser:
      'In 90 Tagen arbeitet Ihre Agentur digital – ohne Zettelwirtschaft, ohne verlorene Anfragen. CRM-Einrichtung, Superchat-Anbindung, digitale Signaturen, Schadenformulare und Standardprozesse, eingerichtet und Ihrem Team übergeben.',
    ki: false,
    /* Feature-Showcase (Bento-Grid im Nelly-Stil) – Visuals liegen in components/feature-bento.jsx,
       Zuordnung über den key. */
    features: {
      title: 'Alles über Ihre Kunden.\nAn einem Ort.',
      lead: 'Vom ersten Lead bis zum langjährigen Bestandskunden: CRM, Kommunikation, Signaturen und Formulare greifen ineinander – damit Ihr Team jederzeit weiß, was ansteht.',
      items: [
        {
          key: 'kundenverwaltung',
          title: 'CRM-Einrichtung & Datenmigration',
          text: 'Kontakte, Verträge, Dokumente und jede E-Mail in einer Kundenakte. Bestände aus Excel, Postfach und Altsystemen werden bereinigt und sauber übernommen – Ihr Team öffnet einen Datensatz und sieht alles.',
        },
        {
          key: 'whatsapp',
          title: 'Superchat-Anbindung inkl. Automationen',
          text: 'WhatsApp, Instagram, E-Mail und Website-Chat in einem Posteingang, direkt am CRM. Automatische Antworten außerhalb der Bürozeiten sorgen dafür, dass keine Anfrage mehr versandet.',
        },
        {
          key: 'signaturen',
          title: 'Digitale Signaturen',
          text: 'Vollmacht, Beratungsprotokoll oder Vereinbarung: Ihre Kunden unterschreiben digital am Handy – rechtsgültig, dokumentiert und ohne Papierstapel.',
        },
        {
          key: 'formulare',
          title: 'Schadenformulare & digitale Formulare',
          text: 'Ob Schadenmeldung oder Selbstauskunft: mobilfähig, mit Foto-Upload und direkt ins CRM. Schluss mit unleserlichen Scans und E-Mail-Pingpong.',
        },
        {
          key: 'workflows',
          title: 'Standardprozesse & Workflows',
          text: 'Wir automatisieren die Handgriffe, die jede Woche Stunden kosten: Unterlagen anfordern, Termine bestätigen, Daten übertragen, Standardmails versenden. Ihr Team stößt den Vorgang an – den Rest erledigt der Workflow.',
        },
        {
          key: 'schulung',
          title: 'Team-Schulung, die hängen bleibt',
          text: 'Wir übergeben kein System, sondern einen Arbeitsablauf: kurze, praxisnahe Sessions im Tagesgeschäft, bis jeder im Team sicher damit arbeitet – dokumentiert, damit Sie nicht von uns abhängig bleiben.',
        },
        {
          key: 'wiedervorlagen',
          title: 'Wiedervorlagenmanagement',
          text: 'Ablaufende Verträge, zugesagte Rückrufe, fehlende Unterlagen: Das CRM erinnert automatisch. Nichts hängt mehr am Gedächtnis einzelner Mitarbeiter.',
        },
        {
          key: 'kalender',
          title: 'Kalender & Terminvereinbarung',
          text: 'Kunden buchen freie Termine direkt online. Der Termin landet im Kalender des richtigen Beraters – Bestätigung und Erinnerung inklusive.',
        },
        {
          key: 'telefonanlage',
          title: 'Einbindung der Telefonanlage',
          text: 'Beim Anruf öffnet sich die Kundenakte automatisch. Jedes Gespräch wird mit Dauer, Notiz und nächstem Schritt protokolliert.',
        },
        {
          key: 'schnittstellen',
          title: 'Schnittstellen & Verknüpfungen',
          text: 'CRM, Bestandssystem, E-Mail, Kalender und Telefonanlage tauschen Daten automatisch aus. Einmal erfasst, überall aktuell – ohne doppelte Pflege.',
        },
      ],
    },
    pains: [
      'Kundendaten verteilt auf Excel, Postfach und Bestandssystem',
      'Anfragen kommen über mehrere Kanäle und versanden in Postfächern',
      'Schadenmeldungen und Vollmachten laufen noch auf Papier',
      'Wiedervorlagen und Fristen hängen am Gedächtnis einzelner Mitarbeiter',
    ],
    deliverables: [
      {
        title: 'CRM-Einrichtung & Datenmigration',
        text: 'Wir wählen mit Ihnen das passende CRM, richten Pipelines, Felder und Rechte ein und übernehmen Bestände aus Excel, Outlook oder Altsystemen – ohne Stillstand im Tagesgeschäft.',
      },
      {
        title: 'Superchat-Anbindung inkl. Automationen',
        text: 'WhatsApp, Instagram, E-Mail und Website-Chat in einem Posteingang – mit Vorlagen, Zuweisungen und automatischen Antworten außerhalb der Bürozeiten.',
      },
      {
        title: 'Digitale Signaturen & Formulare',
        text: 'Vollmachten, Beratungsprotokolle und Schadenformulare digital und rechtsgültig – mobilfähig und direkt mit dem CRM verbunden.',
      },
      {
        title: 'Standardprozesse & Team-Schulung',
        text: 'Wiederkehrende Abläufe werden automatisiert und dokumentiert, Ihr Team in kurzen, praxisnahen Sessions geschult – bis jeder sicher damit arbeitet.',
      },
    ],
    price: {
      from: '6.000 €',
      note: 'Festpreis zwischen 6.000–12.000 €, je nach Umfang – zzgl. Softwarelizenzen direkt beim Anbieter (ca. 20–50 €/Nutzer/Monat)',
      duration: 'Typische Umsetzung: 6–10 Wochen bis Livegang',
      retainer: 'Danach optional: laufende Betreuung als „Digital-Partner" ab 490 €/Monat.',
    },
    faq: [
      {
        q: 'Müssen wir unser bestehendes Bestandssystem ersetzen?',
        a: 'Nein. Das CRM ergänzt Ihre Bestandsverwaltung um Vertrieb und Kundenkommunikation. Wo es Schnittstellen gibt, binden wir Ihr bestehendes System an.',
      },
      {
        q: 'Wie lange dauert die Umsetzung?',
        a: 'Je nach Umfang zwischen sechs und zehn Wochen. Wir arbeiten in Etappen, sodass Ihr Team früh mit den ersten Bereichen produktiv arbeitet.',
      },
      {
        q: 'Welches CRM empfehlen Sie?',
        a: 'Das hängt von Teamgröße, Prozessen und Budget ab. Wir arbeiten herstellerunabhängig mit Zoho, HubSpot und ActiveCampaign und empfehlen, was zu Ihnen passt.',
      },
      {
        q: 'Was kostet die Zusammenarbeit zusätzlich zum Festpreis?',
        a: 'Nur die Softwarelizenzen, die Sie direkt beim Anbieter abschließen (z. B. Zoho, Superchat). Wir verkaufen keine Software und verdienen nichts an den Lizenzen – wir richten sie gemeinsam mit Ihnen ein.',
      },
    ],
  },
  {
    slug: 'kundenmagnet',
    icon: 'trend',
    sub: 'Landingpages · Newsletter · Bewertungen · Lead-Routing',
    eyebrow: 'Kundenmagnet',
    /* Haupt-Keyword: „Leadgenerierung Versicherungsmakler“. */
    seo: {
      title: 'Leadgenerierung für Versicherungsmakler & Agenturen',
      description:
        'Anfragen, die automatisch im CRM landen: Expertenseite, Newsletter, Bewertungsmanagement und Lead-Routing. Festpreis ab 4.000 €.',
    },
    title: 'Wachstum: Anfragen, die von selbst kommen',
    teaser:
      'Anfragen, die automatisch in Ihrem CRM landen – statt im Nirgendwo. Expertenseite, Newsletter, Bewertungsmanagement und Lead-Routing, aufeinander abgestimmt und mit Ihrem CRM verbunden.',
    ki: false,
    /* Feature-Showcase (Bento-Grid) – Reihenfolge = Layout-Reihenfolge,
       Visuals in components/feature-bento.jsx über den key. */
    features: {
      title: 'Marketing, das Termine bringt.\nNicht nur Klicks.',
      lead: 'Wir verkaufen Ihnen keine Software. Wir beraten, welche Kanäle sich für Ihre Agentur lohnen – und implementieren sie rechtssicher, angebunden an Ihr CRM und übergeben an Ihr Team.',
      items: [
        {
          key: 'websites',
          title: 'Expertenseite & Landingpages',
          text: 'Wir erstellen schlanke Websites und Landingpages, die auf ein Ziel einzahlen: Anfragen. Schnell geladen, mobil optimiert und direkt mit Ihrem CRM und Kalender verbunden.',
        },
        {
          key: 'newsletter',
          title: 'Newsletter-Strecken',
          text: 'Wir konzipieren Ihren Newsletter, bauen Vorlagen im eigenen Design und richten Versand und Segmentierung ein. So bleiben Sie bei Bestandskunden präsent – die günstigste Quelle für Zusatzgeschäft.',
        },
        {
          key: 'bewertungen',
          title: 'Bewertungsmanagement',
          text: 'Wir implementieren einen Prozess, der zufriedene Kunden im richtigen Moment um eine Google-Bewertung bittet. Mehr Sterne bedeuten mehr Vertrauen – und mehr Anfragen, bevor Sie ein Wort gesagt haben.',
        },
        {
          key: 'qualifizierung',
          title: 'Lead-Routing',
          text: 'Leads werden automatisch nach Potenzial, Status und Anliegen eingeordnet und an den richtigen Ansprechpartner verteilt. Ihr Team sieht auf einen Blick, welche Anfrage sich zuerst lohnt.',
        },
      ],
    },
    pains: [
      'Anfragen aus Website, Google und Social Media verteilen sich auf mehrere Kanäle',
      'Kunden warten tagelang auf Rückmeldung – und fragen beim Wettbewerber an',
      'Newsletter gibt es nicht oder nur unregelmäßig',
      'Leads werden nicht nach Priorität sortiert – jede Anfrage wartet gleich lange',
    ],
    deliverables: [
      {
        title: 'Expertenseite & Landingpages',
        text: 'Schlanke Seiten, die auf ein Ziel einzahlen: Anfragen. Direkt mit Formularen, Funnels und Ihrem Kalender verbunden.',
      },
      {
        title: 'Newsletter-Aufbau',
        text: 'Konzept, Vorlagen im eigenen Design, Segmentierung nach Zielgruppen und ein Redaktionsrhythmus, der durchhaltbar ist.',
      },
      {
        title: 'Bewertungsmanagement',
        text: 'Ein automatisierter Prozess bittet zufriedene Kunden im richtigen Moment um eine Bewertung – ohne dass Ihr Team daran denken muss.',
      },
      {
        title: 'Lead-Routing',
        text: 'Eingehende Anfragen werden qualifiziert und automatisch an den passenden Berater weitergeleitet – nichts bleibt liegen.',
      },
    ],
    price: {
      from: '4.000 €',
      note: 'Festpreis zwischen 4.000–8.000 €, je nach Umfang – setzt in der Regel das Paket „Digitale Agentur" voraus, zzgl. Softwarelizenzen direkt beim Anbieter',
      duration: 'Typische Umsetzung: 3–6 Wochen bis Livegang',
      retainer: 'Danach optional: laufende Betreuung als „Digital-Partner" ab 490 €/Monat.',
    },
    faq: [
      {
        q: 'Setzt das Paket „Kundenmagnet" das Paket „Digitale Agentur" voraus?',
        a: 'In der Regel ja: Anfragen sollen ja direkt in Ihrem CRM landen. Ohne CRM beraten wir Sie, welche Bausteine trotzdem sinnvoll sind.',
      },
      {
        q: 'Wer schreibt die Newsletter-Inhalte?',
        a: 'Wahlweise Sie oder wir. Viele Kunden starten mit von uns vorbereiteten Vorlagen und Themenplänen und übernehmen die Texte später selbst.',
      },
      {
        q: 'Brauchen wir dafür eine neue Website?',
        a: 'Nein. Formulare und Funnels lassen sich in bestehende Websites einbetten. Wo gar keine Basis existiert, bauen wir eine schlanke Landingpage.',
      },
    ],
  },
  {
    slug: 'ki-assistenz',
    icon: 'settings',
    sub: 'KI-Chatbot · Telefonbots · Terminvorbereitung',
    eyebrow: 'KI-Assistenz',
    /* Haupt-Keyword: „KI für Versicherungsmakler/-agenturen“. */
    seo: {
      title: 'KI für Versicherungsagenturen: Chatbot & Telefonbot',
      description:
        'KI-Chatbot mit Wissensdatenbank, Telefonbots und automatische Terminvorbereitung – DSGVO-konform eingerichtet. Festpreis ab 5.000 €.',
    },
    title: 'Premium: Ihr Team antwortet in Sekunden',
    teaser:
      'Ihr Team beantwortet Fragen in Sekunden statt Minuten. KI-Chatbot mit Wissensdatenbank, Telefonbots und automatische Terminvorbereitung – DSGVO-konform eingerichtet und an Ihre Systeme angebunden.',
    ki: true,
    /* Feature-Showcase (Bento-Grid) – Reihenfolge = Layout-Reihenfolge,
       Visuals in components/feature-bento.jsx über den key. */
    features: {
      title: 'Automatisierung, die Arbeit abnimmt.\nNicht Arbeit macht.',
      lead: 'Wir prüfen, wo sich KI in Ihren Abläufen wirklich lohnt – und implementieren sie DSGVO-konform, verbunden mit Ihren Systemen und übergeben an Ihr Team.',
      items: [
        {
          key: 'chatbots',
          title: 'KI-Chatbot fürs Team',
          text: 'Chatbots für WhatsApp, Website & Co. beantworten Standardfragen sofort, qualifizieren Anliegen und buchen Termine – rund um die Uhr. Ihr Team übernimmt erst, wenn es wirklich gebraucht wird.',
        },
        {
          key: 'wissensdatenbank',
          title: 'Wissensdatenbank',
          text: 'Wir bündeln Tarifwissen, Abläufe und Vorlagen in einer durchsuchbaren Wissensdatenbank. Ihr Team fragt in normaler Sprache und bekommt belegte Antworten – statt Kollegen zu unterbrechen.',
        },
        {
          key: 'telefonbots',
          title: 'Telefonbots – Inbound & Outbound',
          text: 'Sprachassistenten nehmen Anrufe auch nach Feierabend an, erfassen das Anliegen und vereinbaren Rückrufe – oder erinnern von sich aus an Termine und fehlende Unterlagen. Kein Anruf geht mehr verloren.',
        },
        {
          key: 'terminprep',
          title: 'KI-Terminvorbereitung',
          text: 'Vor jedem Kundentermin fasst die KI Vertragsstand, letzten Kontakt und offene Punkte automatisch zusammen. Ihr Team startet vorbereitet, ohne selbst zu recherchieren.',
        },
      ],
    },
    pains: [
      'Standardfragen unterbrechen Ihr Team jeden Tag aufs Neue',
      'Anrufe nach Feierabend und in Beratungsterminen bleiben unbeantwortet',
      'Vor jedem Termin wird der Kundenverlauf mühsam von Hand zusammengesucht',
      'Neue Mitarbeiter brauchen Monate, bis sie alle Tarife und Abläufe kennen',
    ],
    deliverables: [
      {
        title: 'KI-Chatbot & Wissensdatenbank',
        text: 'Konzeption und Implementierung eines Chatbots für Team und Kunden, gespeist aus einer durchsuchbaren Wissensdatenbank Ihrer Tarife und Abläufe.',
        ki: true,
      },
      {
        title: 'Telefonbots – Inbound & Outbound',
        text: 'Sprachassistenten nehmen Anrufe an, erfassen Anliegen und vereinbaren Rückrufe – oder erinnern proaktiv an Termine und fehlende Unterlagen.',
        ki: true,
      },
      {
        title: 'KI-Terminvorbereitung',
        text: 'Automatisch erstellte Briefings vor jedem Kundentermin: Vertragsstand, letzter Kontakt, offene Punkte und Gesprächsvorschläge.',
        ki: true,
      },
      {
        title: 'DSGVO-konforme Einrichtung',
        text: 'Wir setzen KI gezielt dort ein, wo sie messbar Zeit spart – mit EU-Hosting, wo immer möglich, und dokumentierten Datenflüssen für Ihre Datenschutz-Unterlagen.',
      },
    ],
    price: {
      from: '5.000 €',
      note: 'Festpreis zwischen 5.000–9.000 €, je nach Umfang – oft kombiniert mit dem Paket „Digitale Agentur", zzgl. KI- und Softwarelizenzen direkt beim Anbieter',
      duration: 'Typische Umsetzung: 4–8 Wochen bis Livegang',
      retainer: 'Danach optional: laufende Betreuung als „Digital-Partner" ab 490 €/Monat.',
    },
    faq: [
      {
        q: 'Ist KI-Einsatz mit der DSGVO vereinbar?',
        a: 'Ja, wenn er richtig eingerichtet ist. Wir konfigurieren Systeme so, dass personenbezogene Daten geschützt bleiben, und dokumentieren die Verarbeitung für Ihre Datenschutz-Unterlagen.',
      },
      {
        q: 'Was passiert, wenn ein Bot ausfällt oder eine Anfrage nicht beantworten kann?',
        a: 'Jeder Bot übergibt unklare Anliegen an Ihr Team und bekommt Fehlerbenachrichtigungen. Auf Wunsch übernehmen wir die laufende Betreuung.',
      },
      {
        q: 'Lässt sich das Paket mit „Digitale Agentur" kombinieren?',
        a: 'Ja, sogar häufig: Chatbot, Telefonbot und Terminvorbereitung entfalten die größte Wirkung, wenn sie direkt an ein bestehendes CRM angebunden sind.',
      },
    ],
  },
];

/* ---------- Ablauf ---------- */
export const processSteps = [
  {
    step: '01',
    title: 'Erstgespräch',
    text: '30 Minuten, unverbindlich: Wir hören zu, stellen Fragen und sagen ehrlich, ob und wie wir helfen können.',
  },
  {
    step: '02',
    title: 'Prozess-Analyse',
    text: 'Wir schauen uns Ihre Abläufe und Systeme im Detail an und priorisieren die Maßnahmen nach Aufwand und Wirkung.',
  },
  {
    step: '03',
    title: 'Umsetzung in Etappen',
    text: 'Kein Big Bang: Wir setzen in kurzen Etappen um, Ihr Team arbeitet früh mit den ersten Ergebnissen.',
  },
  {
    step: '04',
    title: 'Übergabe & Betreuung',
    text: 'Dokumentation, Schulung und auf Wunsch laufende Betreuung – damit die Systeme dauerhaft laufen.',
  },
];

/* ---------- „Digital-Partner" – Retainer nach dem Projekt ----------
   Siehe geschaeftsmodell-digitalisierung-versicherungsagenturen.md, Abschnitt 6.
   Mindestlaufzeit 6–12 Monate. */
export const retainerTiers = [
  {
    name: 'Basis',
    price: '490 €/Monat',
    items: ['Laufender Support', 'Kleine Anpassungen'],
  },
  {
    name: 'Standard',
    price: '890 €/Monat',
    items: [
      'Laufender Support & kleine Anpassungen',
      'Monatliche Weiterentwicklung, neue Workflows',
      'Schulung neuer Mitarbeiter',
    ],
    highlight: true,
  },
  {
    name: 'Premium',
    price: '1.490 €/Monat',
    items: [
      'Alles aus Standard',
      'Fester Ansprechpartner',
      'Quartals-Strategie',
      'Priorisierte Umsetzung',
    ],
  },
];

/* ---------- Beweise ----------
   TODO: Alle Werte und Zitate durch echte Kundenergebnisse ersetzen.
   Die Struktur (Zahl + Kontext) beibehalten – sie konvertiert. */
export const stats = [
  { value: '8 Std.', label: 'weniger Verwaltungsaufwand pro Woche und Mitarbeiter' }, // TODO: echter Wert
  { value: '2 Std.', label: 'durchschnittliche Reaktionszeit auf Anfragen – statt 2 Tagen' }, // TODO: echter Wert
  { value: '3×', label: 'mehr qualifizierte Termine aus denselben Anfragen' }, // TODO: echter Wert
  { value: '100 %', label: 'dokumentierte Workflows – kein Wissen nur in Köpfen' },
];

export const testimonials = [
  {
    quote:
      'Vorher haben wir Anfragen in drei Postfächern gesucht. Heute sehe ich morgens in einer Übersicht, was ansteht – und mein Team auch.',
    name: 'Max Mustermann', // TODO: echtes Zitat + Freigabe einholen
    role: 'Geschäftsführer, Versicherungsagentur Mustermann',
  },
  {
    quote:
      'Die Schadenmeldungen sammelt jetzt ein Formular ein, nicht mehr mein Posteingang. Allein das spart uns Stunden pro Woche.',
    name: 'Erika Beispiel', // TODO: echtes Zitat + Freigabe einholen
    role: 'Inhaberin, Versicherungsagentur Beispiel',
  },
  {
    quote:
      'Wir wollten kein IT-Projekt, sondern funktionierende Abläufe. Genau das haben wir bekommen – in Etappen, ohne Stillstand im Tagesgeschäft.',
    name: 'Thomas Platzhalter', // TODO: echtes Zitat + Freigabe einholen
    role: 'Agenturinhaber, Platzhalter Versicherungen',
  },
];

/* ---------- Use Cases ----------
   TODO: Durch echte Projekte ersetzen (anonymisiert möglich: „Versicherungsagentur, 12 Mitarbeiter").
   Alle Zahlen (Dauer, Zeit, Ertrag) sind Platzhalter.
   `visual` steuert die Illustration auf der Use-Cases-Seite: dashboard | notify | chat | flow
   `serviceHref`/`serviceLabel` verknüpfen jeden Case mit dem passenden Paket – die Paket-
   Detailseiten filtern diese Liste danach, statt eigene Kurzfassungen zu pflegen. */
export const useCases = [
  {
    icon: 'chart',
    visual: 'dashboard',
    branch: 'Versicherungsagentur · 14 Mitarbeiter',
    title: 'Vom Excel-Chaos zum zentralen CRM',
    problem:
      'Bestände in Excel, Leads im E-Mail-Postfach, Wiedervorlagen auf Zetteln. Kein gemeinsamer Blick auf Kunden und offene Vorgänge.',
    steps: [
      { icon: 'search', title: 'Drei CRM-Optionen verglichen', text: 'Bestände und Abläufe analysiert, Zoho, HubSpot und ActiveCampaign gegenübergestellt – Zoho passte zu Budget und Bestandssystem.' },
      { icon: 'settings', title: 'Zoho CRM implementiert', text: 'Bestandsdaten migriert, Bestandssystem angebunden, Wiedervorlagen automatisiert – Lizenz direkt beim Anbieter.' },
      { icon: 'user', title: 'Team geschult, System übergeben', text: 'Drei kurze Sessions im Tagesgeschäft, Dokumentation und Spickzettel für jeden Arbeitsplatz – das System gehört dem Team.' },
    ],
    tools: [
      { name: 'Zoho CRM', icon: 'chart', role: 'Zentrales System für Bestände, Pipeline und Wiedervorlagen' },
      { name: 'Make', icon: 'settings', role: 'Automatisiert die Datenübernahme aus den Altsystemen' },
    ],
    improvement: 'Das Team arbeitet heute aus einer Quelle statt drei Systemen – jede Anfrage ist sofort sichtbar, jede Wiedervorlage kommt von allein.',
    duration: '6 Wochen bis Livegang',
    time: { value: '8 Std./Woche', label: 'weniger Verwaltungsaufwand im Team' },
    gain: { value: '0 verlorene Leads', label: 'seit Einführung – vorher ca. 3 pro Monat' },
    serviceHref: '/leistungen/digitale-agentur',
    serviceLabel: 'Digitale Agentur',
  },
  {
    icon: 'document',
    visual: 'notify',
    branch: 'Versicherungsagentur · 6 Mitarbeiter',
    title: 'Schadenmeldungen einsammeln ohne E-Mail-Pingpong',
    problem:
      'Pro Schadenfall über 15 E-Mails nur für Unterlagen und Fotos. Kunden genervt, Berater blockiert, Regulierung verzögert sich.',
    steps: [
      { icon: 'search', title: 'Schadenprozess durchleuchtet', text: 'Jeden E-Mail-Schritt erfasst und bewertet. Unsere Empfehlung: kein teures Kundenportal, sondern eine schlanke Formular-Lösung.' },
      { icon: 'document', title: 'Formular-Strecke umgesetzt', text: 'Digitale Schadenmeldung mit Foto-Upload, automatische Erinnerungen über Make, Status-Updates per WhatsApp über Superchat.' },
      { icon: 'user', title: 'Berater befähigt', text: 'Team geschult und Textbausteine übergeben – neue Schäden legt das Büro heute ohne uns an.' },
    ],
    tools: [
      { name: 'Make', icon: 'settings', role: 'Verschickt automatische Erinnerungen bei fehlenden Unterlagen' },
      { name: 'Superchat', icon: 'mic', role: 'Bündelt WhatsApp-Status-Updates in einem Posteingang' },
    ],
    improvement: 'Kunden laden Fotos und Unterlagen direkt im Formular hoch, statt E-Mails hin- und herzuschicken – der Berater sieht sofort, was noch fehlt.',
    duration: '3 Wochen bis Livegang',
    time: { value: '3 Tage schneller', label: 'Schaden reguliert, −70 % E-Mails pro Fall' },
    gain: { value: '+1,5 Std./Fall', label: 'weniger Aufwand pro Schadenmeldung' },
    serviceHref: '/leistungen/digitale-agentur',
    serviceLabel: 'Digitale Agentur',
  },
  {
    icon: 'search',
    visual: 'chat',
    branch: 'Versicherungsagentur · 8 Mitarbeiter',
    title: 'Aus Website-Anfragen werden Beratungstermine',
    problem:
      'Tarifanfragen über die Website blieben abends und am Wochenende liegen – Interessenten hatten bis Montag oft schon anderswo abgeschlossen.',
    steps: [
      { icon: 'search', title: 'Anfrageweg analysiert', text: 'Ausgewertet, wo Interessenten verloren gingen. Statt teurer Zusatzmodule fiel unsere Empfehlung auf ActiveCampaign mit Terminbuchung.' },
      { icon: 'bell', title: 'Funnel implementiert', text: 'Sofortige Erstantwort mit Terminbuchungs-Link, Qualifizierungsfragen vorab, Verteiler für alle, die nicht sofort abschlussbereit waren.' },
      { icon: 'user', title: 'Übergabe ans Team', text: 'Geschult und dokumentiert – Landingpages und Kampagnen pflegt die Agentur heute selbst.' },
    ],
    tools: [
      { name: 'ActiveCampaign', icon: 'document', role: 'Steuert die Erstantwort und die Qualifizierungsfragen' },
      { name: 'Superchat', icon: 'mic', role: 'Nimmt Anfragen aus WhatsApp und Web-Chat zentral an' },
      { name: 'Cal.com', icon: 'calendar', role: 'Bucht den Beratungstermin direkt im Kalender des Beraters' },
    ],
    improvement: 'Interessenten erhalten sofort eine Antwort mit Terminvorschlag – statt bis Montag auf eine Rückmeldung zu warten.',
    duration: '4 Wochen bis Livegang',
    time: { value: '< 5 Min.', label: 'Antwortzeit statt bis zu 2 Tagen' },
    gain: { value: '3× Beratungstermine', label: 'und 900+ Interessenten im Newsletter' },
    serviceHref: '/leistungen/kundenmagnet',
    serviceLabel: 'Kundenmagnet',
  },
  {
    icon: 'phone',
    visual: 'flow',
    branch: 'Versicherungsagentur · 6 Mitarbeiter',
    title: 'KI-Telefonassistent für verpasste Anrufe',
    problem:
      'Während Beratungsterminen und nach Feierabend liefen Anrufe ins Leere. Rückrufe kosteten Zeit – oder unterblieben ganz.',
    steps: [
      { icon: 'shield', title: 'Erreichbarkeit ausgewertet, Lösung ausgewählt', text: 'Anrufzeiten analysiert und einen DSGVO-tauglichen KI-Assistenten mit EU-Hosting ausgewählt – inklusive Auftragsverarbeitungsvertrag.' },
      { icon: 'settings', title: 'Bot implementiert, ans CRM angebunden', text: 'Der Assistent nimmt Anrufe an, wenn niemand frei ist – jedes Gespräch landet als Aufgabe mit Zusammenfassung im CRM.' },
      { icon: 'user', title: 'Team behält die Kontrolle', text: 'Gemeinsam festgelegt, was der Bot übernimmt und was Chefsache bleibt – Ansagen und Regeln passt das Team selbst an.' },
    ],
    tools: [
      { name: 'Zoho CRM', icon: 'chart', role: 'Erhält jedes Gespräch automatisch als Aufgabe mit Zusammenfassung' },
      { name: 'Claude AI', ki: true, role: 'Nimmt Anrufe an, erfasst das Anliegen und beantwortet Rückfragen' },
      { name: 'Make', icon: 'settings', role: 'Verbindet Telefonassistent, CRM und Benachrichtigungen' },
    ],
    improvement: 'Kein Anruf verhallt mehr unbeantwortet – jedes Anliegen landet dokumentiert im CRM, auch wenn niemand im Team abheben kann.',
    duration: '4 Wochen bis Livegang',
    time: { value: '6 Std./Woche', label: 'weniger Rückruf-Aufwand im Team' },
    gain: { value: '0 verpasste Anrufe', label: 'jedes Anliegen wird erfasst und bearbeitet' },
    serviceHref: '/leistungen/ki-assistenz',
    serviceLabel: 'KI-Assistenz',
  },
  {
    icon: 'trend',
    visual: 'notify',
    branch: 'Versicherungsagentur · 10 Mitarbeiter',
    title: 'Vertragsabläufe automatisch im Blick',
    problem:
      'Auslaufende KFZ- und Sachverträge im Bestand blieben unbemerkt – Kunden verlängerten beim Vergleichsportal, statt bei der Agentur anzufragen.',
    steps: [
      { icon: 'search', title: 'Bestand analysiert, Potenzial beziffert', text: 'Vertragsablaufdaten strukturiert erfasst und vorgerechnet, wie viele Anschlussgespräche pro Jahr im Bestand stecken.' },
      { icon: 'calendar', title: 'Kampagne implementiert', text: '8 Wochen vor Ablauf startet automatisch eine persönliche E-Mail-Strecke mit Terminangebot – angebunden ans CRM.' },
      { icon: 'chart', title: 'Auswertung übergeben', text: 'Dashboard eingerichtet und Team geschult – Texte und Zeitpunkte passt die Agentur heute selbst an.' },
    ],
    tools: [
      { name: 'ActiveCampaign', icon: 'document', role: 'Startet die E-Mail-Strecke automatisch vor Vertragsablauf' },
      { name: 'Zoho CRM', icon: 'chart', role: 'Liefert die Ablaufdaten und dokumentiert jede Reaktion' },
    ],
    improvement: 'Auslaufende Verträge lösen von selbst eine persönliche Ansprache aus – die Agentur muss keine Liste mehr von Hand durchgehen.',
    duration: '3 Wochen bis Livegang',
    time: { value: '0 Std. Pflege', label: 'die Strecke läuft seit Livegang von selbst' },
    gain: { value: '30+ Termine/Jahr', label: 'für Vertragsanpassungen aus dem Bestand' },
    serviceHref: '/leistungen/kundenmagnet',
    serviceLabel: 'Kundenmagnet',
  },
  {
    icon: 'user',
    visual: 'chat',
    branch: 'Versicherungsagentur · 9 Mitarbeiter',
    title: 'Chatbot mit Wissensdatenbank fürs Team',
    problem:
      'Neue Mitarbeiter brauchten Monate, bis sie alle Tarife kannten, und unterbrachen ständig Kollegen mit Rückfragen.',
    steps: [
      { icon: 'search', title: 'Wissensstand erfasst', text: 'Tarifhandbücher, Checklisten und interne Abläufe gesichtet und priorisiert, was am häufigsten nachgefragt wird.' },
      { icon: 'settings', title: 'Chatbot mit Wissensdatenbank implementiert', text: 'Fragen in normaler Sprache stellen, belegte Antworten aus Tarifhandbuch und Prozessdokumenten erhalten – DSGVO-konform mit EU-Hosting.' },
      { icon: 'user', title: 'Team eingearbeitet', text: 'Kurzschulung durchgeführt – neue Mitarbeiter nutzen den Chatbot heute vom ersten Tag an.' },
    ],
    tools: [
      { name: 'Claude AI', ki: true, role: 'Beantwortet Fragen aus Tarifhandbuch und Prozessdokumenten' },
      { name: 'Zoho CRM', icon: 'chart', role: 'Liefert den Kundenkontext für individuelle Rückfragen' },
    ],
    improvement: 'Neue Mitarbeiter finden Antworten selbst, statt Kollegen zu unterbrechen – das Wissen der Agentur steckt im System, nicht nur in Köpfen.',
    duration: '5 Wochen bis Livegang',
    time: { value: '−60 %', label: 'interne Rückfragen im ersten Quartal' },
    gain: { value: '2 Wochen kürzer', label: 'Einarbeitungszeit neuer Mitarbeiter' },
    serviceHref: '/leistungen/ki-assistenz',
    serviceLabel: 'KI-Assistenz',
  },
];

/* ---------- FAQ (Startseite) ---------- */
export const homeFaq = [
  {
    q: 'Sind Sie eine Softwarefirma?',
    a: 'Nein – und das ist der Punkt. Wir entwickeln und verkaufen keine eigene Software. Wir beraten herstellerunabhängig, implementieren bewährte Systeme wie Zoho, HubSpot oder Superchat und schulen Ihr Team. Lizenzen schließen Sie direkt beim Anbieter ab – Sie bezahlen uns für Beratung und Umsetzung, nicht für ein Produkt.',
  },
  {
    q: 'Für wen ist Ihr Angebot gedacht?',
    a: 'Für Versicherungsagenturen jeder Größe – vom Einzelbüro bis zum Team mit 50 Mitarbeitern. Wir kennen die Abläufe, Systeme und rechtlichen Rahmenbedingungen der Branche.',
  },
  {
    q: 'Was kostet die Zusammenarbeit?',
    a: 'Das hängt vom Umfang ab – eine Superchat-Einrichtung ist etwas anderes als eine komplette CRM-Einführung. Im kostenlosen Erstgespräch klären wir Ihren Bedarf und Sie erhalten ein Festpreis-Angebot, bevor Sie sich entscheiden.',
  },
  {
    q: 'Wie viel Zeit muss unser Team investieren?',
    a: 'Deutlich weniger, als Sie befürchten. Wir brauchen Sie für die Analyse und für Feedback an wenigen, klar geplanten Terminen – die Umsetzung übernehmen wir.',
  },
  {
    q: 'Arbeiten Sie DSGVO-konform?',
    a: 'Ja. Wir wählen Tools mit EU-Hosting, wo immer möglich, richten Auftragsverarbeitungsverträge ein und dokumentieren Datenflüsse – gerade bei Versicherungs- und Finanzdaten nicht verhandelbar.',
  },
  {
    q: 'Sind wir nach dem Projekt von Ihnen abhängig?',
    a: 'Nein. Alles wird dokumentiert und Ihr Team geschult. Viele Kunden buchen trotzdem eine laufende Betreuung – aber aus Bequemlichkeit, nicht aus Abhängigkeit.',
  },
  {
    q: 'Wir haben schon ein CRM, das keiner nutzt. Können Sie das retten?',
    a: 'Sehr oft, ja. Meist liegt es nicht am Tool, sondern an fehlender Struktur und Schulung. Wir prüfen im Erstgespräch, ob sich Ihr System aufräumen lässt oder ein Wechsel sinnvoller ist.',
  },
];
