/* ============================================================
   Zentrale Site-Konfiguration & Inhalte
   – Name, Links und alle Platzhalter an einem Ort.
   TODO-Marker zeigen, was vor dem Livegang ersetzt werden muss.
   ============================================================ */

export const site = {
  name: 'VERDA', // TODO: Finaler Agenturname (Rebranding: nur hier + Impressum/Datenschutz ändern)
  claim: 'Digitale Prozesse für Versicherungsagenturen',
  url: 'https://verda-beratung.de', // TODO: echte Domain (wird für JSON-LD/Canonical genutzt)
  // TODO: Eigenen Cal.com-Link eintragen (z. B. https://cal.com/ihr-name/kurz-check)
  calUrl: 'https://cal.com/verda/kurz-check',
  email: 'kontakt@verda-beratung.de', // TODO: echte E-Mail-Adresse
  cta: 'Kurz-Check buchen',
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

/* ---------- Ablauf = die Verkaufstreppe ----------
   Kurz-Check (kostenlos) → Digital-Analyse (Fahrplan) → Umsetzung → Betreuung.
   Siehe geschaeftsmodell-…​.md, Abschnitt 7. */
export const processSteps = [
  {
    step: '01',
    title: 'Kurz-Check',
    text: '15–20 Minuten, kostenlos: Wir hören zu, stellen Fragen und sagen ehrlich, ob und wie wir helfen können. Kein Verkaufsgespräch.',
  },
  {
    step: '02',
    title: 'Digital-Analyse',
    text: 'Wir sehen uns Ihre Systeme und Abläufe im Detail an und liefern einen priorisierten Fahrplan mit Festpreis. 490 €, bei Beauftragung angerechnet.',
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

/* ---------- Digital-Analyse: das Einstiegsprodukt ----------
   Das einzige Produkt, das die Website aktiv verkauft (Prinzip „Ein Produkt,
   viele Türen"). Qualifiziert jeden Kunden, liefert den Fahrplan und verkauft
   damit das Paket. Siehe geschaeftsmodell-…​.md, Abschnitt 6 & 7. */
export const digitalAnalyse = {
  slug: 'digital-analyse',
  eyebrow: 'Der Einstieg',
  seo: {
    title: 'Digital-Analyse für Versicherungsagenturen – Fahrplan zum Festpreis',
    description:
      'Status-quo-Analyse Ihrer Agentur mit priorisiertem Fahrplan und Festpreis-Empfehlung – herstellerunabhängig. 490 €, bei Beauftragung vollständig angerechnet.',
  },
  title: 'Ihr Fahrplan, bevor Sie einen Euro in die Umsetzung stecken.',
  teaser:
    'In wenigen Tagen wissen Sie, wo Ihre Agentur digital steht, welche Maßnahmen sich zuerst lohnen – und was die Umsetzung konkret kostet. Kein Angebot ins Blaue, sondern ein belastbarer Plan auf Basis Ihrer echten Systeme.',
  price: {
    amount: '490 €',
    anchor: 'wird bei Beauftragung voll angerechnet',
    note: 'Einmalig, zzgl. USt. Beauftragen Sie danach ein Paket, rechnen wir die 490 € vollständig an – die Analyse kostet Sie dann effektiv nichts.',
    duration: 'Ergebnis in der Regel innerhalb von 5–10 Werktagen',
  },
  /* Kurzsatz für Paket-Preisblöcke (DRY – zentral gepflegt). */
  packageNote:
    'Jedes Paket startet mit der Digital-Analyse (490 €) – der Betrag wird voll auf das Paket angerechnet.',
  /* ----- Inhalte für die eigenständige Landingpage (Bezahl-Traffic/SEA) ----- */
  audience: 'Für Inhaber von Versicherungsagenturen & Maklerbüros',
  trust: ['Herstellerunabhängig', 'DSGVO-konform', 'Festpreis-Fahrplan', 'Kein Software-Verkauf'],
  /* Painpoints (Agitation, PAS) – bewusst in der Sprache der Zielgruppe. */
  pains: [
    'Sie ahnen, dass Digitalisierung nötig ist – aber nicht, wo Sie anfangen sollen.',
    'Kundendaten liegen in Excel, Postfach und Bestandssystem – keiner hat den Überblick.',
    'Sie haben schon Tools gekauft, die am Ende niemand genutzt hat.',
    'Ein großes IT-Projekt ohne klaren Preis? Das Risiko ist Ihnen zu hoch.',
    'Anfragen versanden, Verwaltung frisst Beratungszeit – und es wird nicht besser.',
  ],
  solution: {
    title: 'Das Problem ist nicht Ihr Team – es ist der fehlende Plan.',
    text: 'Statt blind ein Projekt für zehntausende Euro zu starten, bekommen Sie für 490 € erst einen belastbaren Fahrplan: Wo steht Ihre Agentur, was lohnt sich zuerst, was kostet die Umsetzung. Sie investieren erst, wenn Sie wissen, wofür – und der Betrag wird bei Beauftragung voll angerechnet.',
  },
  offer: {
    title: 'Ihr Fahrplan für 490 € – ohne Risiko.',
    points: [
      'Vollständige Status-quo-Analyse Ihrer Systeme und Abläufe',
      'Priorisierter Maßnahmenplan – nach Aufwand und Wirkung sortiert',
      'Herstellerunabhängige Tool-Empfehlung, an der wir nichts verdienen',
      'Konkreter Festpreis-Fahrplan für die Umsetzung',
      'Ergebnis in 5–10 Werktagen, verständlich aufbereitet',
    ],
    reassurance: 'Ihr Risiko: null. Beauftragen Sie danach ein Paket, rechnen wir die 490 € vollständig an. Der Fahrplan gehört in jedem Fall Ihnen – ganz ohne Verpflichtung zur Weiterarbeit.',
  },
  /* Der Fahrplan als Ergebnis – Bausteine der Analyse. */
  deliverables: [
    {
      icon: 'search',
      title: 'Status-quo-Aufnahme',
      text: 'Wir sichten CRM, Bestandssystem, Postfächer, Website und Kommunikationswege und halten fest, wo Daten liegen, wo Zeit verloren geht und wo Anfragen versanden.',
    },
    {
      icon: 'trend',
      title: 'Priorisierte Maßnahmen',
      text: 'Alle Hebel nach Aufwand und Wirkung sortiert – Sie sehen schwarz auf weiß, was zuerst den größten Unterschied macht und was warten kann.',
    },
    {
      icon: 'shield',
      title: 'Herstellerunabhängige Tool-Empfehlung',
      text: 'Welche Systeme wirklich zu Ihrer Agentur passen – begründet, nicht verkauft. Wir verdienen nichts an Lizenzen und empfehlen nur, was sich rechnet.',
    },
    {
      icon: 'card',
      title: 'Festpreis-Fahrplan',
      text: 'Ein konkreter Umsetzungsplan mit Festpreis und Zeitrahmen. Sie entscheiden danach in Ruhe – mit uns oder ohne uns.',
    },
  ],
  /* Ablauf der Analyse selbst. */
  steps: [
    {
      step: '01',
      title: 'Kurz-Check',
      text: 'Ein kostenloses 15–20-Minuten-Gespräch, in dem wir Ihre Situation grob verstehen und die Analyse beauftragen.',
    },
    {
      step: '02',
      title: 'Analyse Ihrer Systeme',
      text: 'Wir sehen uns Ihre Systeme und Abläufe strukturiert an – per Bildschirmfreigabe oder vor Ort, mit möglichst wenig Aufwand für Ihr Team.',
    },
    {
      step: '03',
      title: 'Fahrplan & Festpreis',
      text: 'Sie erhalten den priorisierten Fahrplan mit Tool-Empfehlung und Festpreis – die Grundlage für Ihre Entscheidung.',
    },
  ],
  faq: [
    {
      q: 'Was kostet die Digital-Analyse – und was passiert mit dem Betrag?',
      a: '490 € einmalig, zzgl. USt. Beauftragen Sie im Anschluss ein Paket, rechnen wir die 490 € vollständig an. Sie zahlen die Analyse also nur, wenn Sie danach nicht mit uns weiterarbeiten.',
    },
    {
      q: 'Warum nicht gleich ein Angebot für ein Paket?',
      a: 'Ein seriöser Festpreis setzt voraus, dass wir Ihre Systeme kennen. Ohne diesen Blick wäre jedes Angebot geraten. Die Analyse schützt Sie vor Fehlkäufen und uns vor Angeboten ins Blaue.',
    },
    {
      q: 'Wie viel Zeit muss ich einplanen?',
      a: 'Für Sie sind es der kostenlose Kurz-Check und ein bis zwei kurze Termine für den Systemblick. Das Ergebnis liegt in der Regel innerhalb von 5–10 Werktagen vor.',
    },
    {
      q: 'Bin ich nach der Analyse zu etwas verpflichtet?',
      a: 'Nein. Der Fahrplan gehört Ihnen. Sie können ihn mit uns umsetzen, intern angehen oder erst einmal liegen lassen – ohne Verpflichtung.',
    },
  ],
};

/* ============================================================
   LANDINGPAGES (/lp/*) – eigenständige Conversion-Seiten für
   Bezahl-Traffic (SEA/Social). Bewusst getrennt vom organischen
   Funnel, ohne Menü/Footer. Copy ist auf spätere Werbeanzeigen
   ausgerichtet und hier zentral pflegbar.
   ============================================================ */

/* ---------- LP 1: Kurz-Check (Ziel: Termin buchen) ---------- */
export const kurzCheckLp = {
  seo: {
    title: 'Kurz-Check für Versicherungsagenturen – wo stehen Sie digital?',
    description:
      '15 Minuten, kostenlos: Inhaber von Versicherungsagenturen erfahren, wo sie digital stehen, wo die Quick Wins liegen und wie ein Fahrplan aussieht. Kein Verkaufspitch.',
  },
  hero: {
    audience: 'Für Inhaber von Versicherungsagenturen & Maklerbüros',
    headline: 'Wo steht Ihre Agentur digital – und wo verlieren Sie jede Woche Kunden?',
    sub: 'Finden wir es gemeinsam heraus. Im kostenlosen Kurz-Check sehen Sie in 15 Minuten, wo Ihre größten Quick Wins liegen und wie ein realistischer Fahrplan aussieht. Ohne Fachchinesisch, ohne Verkaufspitch.',
    ctaLabel: 'Kostenlosen Kurz-Check sichern',
    trust: ['100 % kostenlos', '15 Minuten', 'Kein Verkaufsdruck', 'Spezialisiert auf die Branche'],
  },
  problem: {
    eyebrow: 'Kennen Sie das?',
    title: 'Digitalisierung steht auf der Liste – aber der erste Schritt fehlt.',
    text: 'Sie wissen, dass es effizienter geht. Aber zwischen Tagesgeschäft, Beratung und Verwaltung bleibt keine Zeit, das Ganze zu sortieren. Und jeder Monat ohne klaren Plan kostet Anfragen, Zeit und Bestandskunden.',
    pains: [
      'Anfragen kommen über WhatsApp, Portal und E-Mail – und versanden im Alltag.',
      'Kundendaten liegen in Excel, Postfach und Bestandssystem verteilt.',
      'Verwaltung frisst die Zeit, die für Beratung und Abschluss fehlt.',
      'Sie spüren: Der Wettbewerber reagiert schneller als Sie.',
    ],
  },
  forWhom: {
    eyebrow: 'Für wen',
    title: 'Ist der Kurz-Check das Richtige für Sie?',
    fit: [
      'Sie führen eine Versicherungsagentur oder ein Maklerbüro (1–50 Mitarbeiter).',
      'Sie merken, dass Anfragen und Zeit im Alltag verloren gehen.',
      'Sie wollen umsetzen – nicht nur ein weiteres Konzept in der Schublade.',
      'Sie investieren in Prozesse, die sich rechnen.',
    ],
    notFit: [
      'Sie suchen nur eine Software, die Sie selbst einrichten.',
      'Sie erwarten eine kostenlose Komplettlösung ohne eigene Beteiligung.',
      'Digitalisierung ist für Sie gerade überhaupt kein Thema.',
    ],
  },
  ablauf: {
    eyebrow: 'So läuft der Call ab',
    title: '15 Minuten, drei konkrete Ergebnisse.',
    steps: [
      {
        step: '01',
        title: 'Standortbestimmung',
        text: 'Sie schildern kurz, wie Sie heute arbeiten. Wir ordnen ein, wo Ihre Agentur digital steht – ehrlich und ohne Bewertung.',
      },
      {
        step: '02',
        title: 'Quick Wins',
        text: 'Wir benennen ein bis zwei Hebel, die sofort Zeit sparen oder Anfragen retten – Dinge, die Sie teils selbst umsetzen können.',
      },
      {
        step: '03',
        title: 'Fahrplan',
        text: 'Sie wissen danach, was der sinnvolle nächste Schritt ist – ob mit uns oder ohne uns.',
      },
    ],
  },
  faq: [
    {
      q: 'Ist der Kurz-Check wirklich kostenlos?',
      a: 'Ja. 15 Minuten, unverbindlich, ohne versteckte Kosten. Wir investieren die Zeit, weil sich daraus oft eine Zusammenarbeit ergibt – aber ohne jede Verpflichtung für Sie.',
    },
    {
      q: 'Bekomme ich einen Verkaufspitch?',
      a: 'Nein. 80 % der Zeit reden Sie. Wir hören zu, stellen Fragen und ordnen ein. Ein Angebot gibt es erst, wenn Sie es wollen – und nie ohne Blick auf Ihre Systeme.',
    },
    {
      q: 'Was passiert nach dem Kurz-Check?',
      a: 'Passt es, ist der nächste Schritt die Digital-Analyse: ein Fahrplan zum Festpreis, bei Beauftragung angerechnet. Passt es nicht, sagen wir das ehrlich – auch das ist ein Ergebnis.',
    },
    {
      q: 'Wie und wann findet der Kurz-Check statt?',
      a: 'Per Video oder Telefon, zu einem Termin, den Sie selbst wählen. Sie brauchen nichts vorzubereiten.',
    },
  ],
  finalCta: {
    title: 'Sie ahnen, dass mehr drin ist. Finden wir heraus, wo.',
    sub: '15 Minuten, kostenlos und unverbindlich. Danach wissen Sie, wo Ihre Agentur steht und was sich zuerst lohnt.',
  },
};

/* ---------- LP 2: Leadmagnet-Guide (Ziel: E-Mail / Download) ---------- */
export const leadMagnet = {
  seo: {
    title: '7 digitale Lücken, die Versicherungsagenturen Kunden kosten – Gratis-Guide',
    description:
      'Kostenloser Guide für Inhaber von Versicherungsagenturen: die 7 häufigsten digitalen Lücken, die jeden Monat Kunden kosten – und wie Sie sie schließen.',
  },
  hero: {
    badge: 'Kostenloser Guide',
    audience: 'Für Inhaber von Versicherungsagenturen & Maklerbüros',
    headline: '7 digitale Lücken, die Ihre Agentur jeden Monat Kunden kosten.',
    sub: 'Der kostenlose Guide zeigt die häufigsten Schwachstellen in Agenturen – und was Sie konkret dagegen tun. In 10 Minuten gelesen, sofort anwendbar.',
    ctaLabel: 'Gratis-Guide herunterladen',
    trust: ['Kostenlos', 'Sofort per E-Mail', '10 Minuten Lesezeit', 'Kein Newsletter-Spam'],
  },
  problem: {
    eyebrow: 'Warum dieser Guide',
    title: 'Die meisten Kunden gehen nicht durch schlechte Beratung verloren – sondern durch Lücken im Prozess.',
    text: 'Eine verpasste Anfrage, ein vergessener Vertragsablauf, eine fehlende Bewertung: einzeln unscheinbar, in Summe kosten sie jede Agentur Monat für Monat echtes Geschäft. Der Guide macht diese Lücken sichtbar.',
  },
  forWhom: {
    eyebrow: 'Für wen',
    title: 'Für wen ist der Guide gedacht?',
    fit: [
      'Inhaber von Versicherungsagenturen und Maklerbüros.',
      'Alle, die ahnen, dass Anfragen und Bestandsgeschäft verloren gehen.',
      'Praktiker, die konkrete Ansatzpunkte wollen – keine Theorie.',
    ],
    notFit: [
      'Wer bereits alle Prozesse durchdigitalisiert hat.',
      'Wer nach reiner Software-Werbung sucht.',
    ],
  },
  /* Die 7 Lücken – Teaser des Guide-Inhalts. */
  gaps: [
    { title: 'Anfragen nach Feierabend', text: 'Wer abends anfragt, hat bis Montag oft schon woanders abgeschlossen.' },
    { title: 'Zu langsame Reaktion auf Online-Anfragen', text: 'Die Reaktionszeit entscheidet, wer den Termin bekommt – nicht der beste Tarif.' },
    { title: 'Bestandskunden ohne systematisches Cross-Selling', text: 'Das größte Potenzial liegt im eigenen Bestand – und bleibt meist ungenutzt.' },
    { title: 'Vertragsabläufe, die niemand im Blick hat', text: 'Kunden verlängern beim Vergleichsportal, statt bei Ihnen anzufragen.' },
    { title: 'Kaum Google-Bewertungen', text: 'Wer online unsichtbar ist, wird im lokalen Vergleich schlicht nicht angefragt.' },
    { title: 'Schadenprozess per E-Mail-Pingpong', text: 'Frust beim Kunden, Zeitfresser fürs Team, verzögerte Regulierung.' },
    { title: 'Kein Follow-up bei Unentschlossenen', text: 'Ein „vielleicht später" ohne Nachfassen ist ein verlorener Kunde.' },
  ],
  /* Daten für das Cover-Visual des Guides. */
  guide: {
    kicker: 'Kostenloser Praxis-Guide',
    title: '7 digitale Lücken',
    subtitle: 'die Versicherungsagenturen jeden Monat Kunden kosten',
    meta: '14 Seiten · Sofort umsetzbar',
    brand: 'VERDA · für Agenturinhaber',
  },
  form: {
    heading: 'Guide kostenlos herunterladen',
    note: 'Wir schicken Ihnen den Guide sofort per E-Mail. Kein Newsletter-Zwang – Sie können sich jederzeit mit einem Klick abmelden.',
    buttonLabel: 'Guide jetzt herunterladen',
    successTitle: 'Fast geschafft!',
    successText: 'Prüfen Sie Ihr Postfach – der Guide ist unterwegs. (Schauen Sie sicherheitshalber auch im Spam-Ordner nach.)',
  },
  faq: [
    {
      q: 'Ist der Guide wirklich kostenlos?',
      a: 'Ja, vollständig kostenlos. Sie hinterlassen nur Ihre E-Mail-Adresse, damit wir Ihnen den Guide zusenden können.',
    },
    {
      q: 'Werde ich danach mit Werbung überschüttet?',
      a: 'Nein. Sie erhalten den Guide und gelegentlich einen Praxis-Tipp – höchstens einmal im Monat. Abmeldung jederzeit mit einem Klick.',
    },
    {
      q: 'Für wen ist der Guide geschrieben?',
      a: 'Für Inhaber und Verantwortliche in Versicherungsagenturen und Maklerbüros – aus der Praxis, in der Sprache der Branche.',
    },
    {
      q: 'Was, wenn ich eine Lücke bei mir erkenne?',
      a: 'Der Guide zeigt jeweils den ersten konkreten Schritt. Wollen Sie es gemeinsam angehen, ist der kostenlose Kurz-Check der einfachste Einstieg.',
    },
  ],
};

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
    a: 'Das hängt vom Umfang ab – eine Superchat-Einrichtung ist etwas anderes als eine komplette CRM-Einführung. Deshalb starten wir mit der Digital-Analyse (490 €): Sie erhalten einen Fahrplan mit Festpreis, bevor Sie sich entscheiden. Beauftragen Sie danach ein Paket, wird der Betrag angerechnet.',
  },
  {
    q: 'Wie fange ich am besten an?',
    a: 'Mit dem kostenlosen Kurz-Check – 15–20 Minuten, in denen wir Ihre Situation verstehen. Passt es, folgt die Digital-Analyse als Fahrplan zum Festpreis. Erst danach entscheiden Sie über die Umsetzung.',
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
    a: 'Sehr oft, ja. Meist liegt es nicht am Tool, sondern an fehlender Struktur und Schulung. In der Digital-Analyse prüfen wir, ob sich Ihr System aufräumen lässt oder ein Wechsel sinnvoller ist.',
  },
];
