/* ============================================================
   Zentrale Site-Konfiguration & Inhalte
   – Name, Links und alle Platzhalter an einem Ort.
   TODO-Marker zeigen, was vor dem Livegang ersetzt werden muss.
   ============================================================ */

export const site = {
  name: 'VERDA', // TODO: Finaler Agenturname (Rebranding: nur hier + Impressum/Datenschutz ändern)
  claim: 'Digitale Prozesse für Vermittler',
  // TODO: Eigenen Cal.com-Link eintragen (z. B. https://cal.com/ihr-name/erstgespraech)
  calUrl: 'https://cal.com/verda/erstgespraech',
  email: 'kontakt@verda-beratung.de', // TODO: echte E-Mail-Adresse
  cta: 'Erstgespräch vereinbaren',
};

export const navLinks = [
  { label: 'Leistungen', href: '/leistungen' },
  { label: 'Use Cases', href: '/use-cases' },
  { label: 'Über uns', href: '/ueber-uns' },
];

export const tools = [
  'Zoho', 'HubSpot', 'ActiveCampaign', 'Superchat', 'Make', 'Zapier', 'Claude AI',
];

/* ---------- Zielgruppen (Startseite: „Für wen wir arbeiten") ---------- */
export const audiences = [
  {
    icon: 'shield',
    label: 'Versicherungsmakler',
    text: 'Bestände, Verträge und Anfragen verteilt auf Excel, Postfach und Maklerverwaltungsprogramm – ohne gemeinsamen Blick auf den Kunden.',
    href: '/leistungen/crm-und-daten',
    linkLabel: 'CRM & Datenstruktur ansehen',
  },
  {
    icon: 'bank',
    label: 'Baufinanzierer',
    text: 'Pro Finanzierungsfall Dutzende E-Mails nur für Unterlagen – während der Kunde auf eine Rückmeldung wartet.',
    href: '/leistungen/kundenkommunikation',
    linkLabel: 'Digitale Formulare ansehen',
  },
  {
    icon: 'search',
    label: 'Immobilienprofis',
    text: 'Anfragen aus Portalen kommen abends und am Wochenende – bis Montag hat der Interessent oft schon woanders gebucht.',
    href: '/leistungen/kundenkommunikation',
    linkLabel: 'Schnelle Anfragen-Bearbeitung ansehen',
  },
];

/* ---------- Leistungen ---------- */
export const services = [
  {
    slug: 'crm-und-daten',
    icon: 'chart',
    sub: 'Zoho · HubSpot · ActiveCampaign',
    eyebrow: 'CRM & Datenstruktur',
    title: 'Ein CRM, das Ihr Geschäft versteht',
    teaser:
      'Wir wählen, implementieren und strukturieren Ihr CRM – von Zoho über HubSpot bis ActiveCampaign. Bestandsdaten, Leads und Verträge endlich an einem Ort.',
    ki: false,
    /* Feature-Showcase (Bento-Grid im Nelly-Stil) – Visuals liegen in components/feature-bento.jsx,
       Zuordnung über den key. */
    features: {
      title: 'Alles über Ihre Kunden.\nAn einem Ort.',
      lead: 'Vom ersten Lead bis zum langjährigen Bestandskunden: Ihr CRM bündelt Daten, Termine und Aufgaben – damit Ihr Team jederzeit weiß, was ansteht.',
      items: [
        {
          key: 'kundenverwaltung',
          title: 'Zentrale Kundenverwaltung',
          text: 'Kontakte, Verträge, Dokumente und jede E-Mail in einer Kundenakte. Statt in Excel, Postfach und Ordnern zu suchen, öffnet Ihr Team einen Datensatz – und sieht alles.',
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
          key: 'signaturen',
          title: 'Digitale Signaturen',
          text: 'Maklervollmacht, Beratungsprotokoll oder Vereinbarung: Ihre Kunden unterschreiben digital am Handy – rechtsgültig, dokumentiert und ohne Papierstapel.',
        },
        {
          key: 'qualifizierung',
          title: 'Qualifizierung & Kategorisierung',
          text: 'Leads und Kunden werden nach Potenzial, Status und Anliegen eingeordnet. Ihr Team sieht auf einen Blick, welcher Anruf sich zuerst lohnt.',
        },
        {
          key: 'telefonanlage',
          title: 'Einbindung der Telefonanlage',
          text: 'Beim Anruf öffnet sich die Kundenakte automatisch. Jedes Gespräch wird mit Dauer, Notiz und nächstem Schritt protokolliert.',
        },
        {
          key: 'zeitlinie',
          title: 'Aktivitäten & Zeitlinie',
          text: 'Jede E-Mail, jeder Anruf, jede Notiz erscheint chronologisch in der Akte. Auch eine Vertretung weiß in Sekunden, was zuletzt passiert ist.',
        },
        {
          key: 'dsgvo',
          title: 'DSGVO-konforme Dokumentation',
          text: 'Einwilligungen, Auskunfts- und Löschpflichten sind sauber dokumentiert und nachweisbar – bei Versicherungs- und Finanzdaten nicht verhandelbar.',
        },
      ],
    },
    pains: [
      'Kundendaten verteilt auf Excel, Postfach und Maklerverwaltungsprogramm',
      'Kein Überblick, welcher Lead gerade wo im Prozess steht',
      'Wiedervorlagen und Fristen hängen am Gedächtnis einzelner Mitarbeiter',
      'Auswertungen zu Abschlussquoten oder Beständen dauern Tage',
    ],
    deliverables: [
      {
        title: 'Auswahl & Einrichtung',
        text: 'Wir prüfen Ihre Anforderungen und richten das passende CRM ein – inklusive Pipelines, Feldern und Rechten, abgestimmt auf Vermittlerprozesse.',
      },
      {
        title: 'Datenmigration',
        text: 'Bestände aus Excel, Outlook oder Altsystemen werden bereinigt und sauber übernommen – ohne Datenverlust und ohne Stillstand im Tagesgeschäft.',
      },
      {
        title: 'Anbindung Ihrer Systeme',
        text: 'Maklerverwaltungsprogramm, E-Mail, Kalender und Telefonie werden angebunden, damit niemand doppelt pflegen muss.',
      },
      {
        title: 'Schulung Ihres Teams',
        text: 'Wir übergeben kein System, sondern einen Arbeitsablauf: kurze, praxisnahe Schulungen, bis jeder im Team sicher damit arbeitet.',
      },
    ],
    faq: [
      {
        q: 'Müssen wir unser Maklerverwaltungsprogramm ersetzen?',
        a: 'Nein. Das CRM ergänzt Ihre Bestandsverwaltung um Vertrieb und Kundenkommunikation. Wo es Schnittstellen gibt, binden wir Ihr bestehendes Programm an.',
      },
      {
        q: 'Wie lange dauert eine CRM-Einführung?',
        a: 'Je nach Umfang zwischen vier und zwölf Wochen. Wir arbeiten in Etappen, sodass Ihr Team früh mit den ersten Bereichen produktiv arbeitet.',
      },
      {
        q: 'Welches CRM empfehlen Sie?',
        a: 'Das hängt von Teamgröße, Prozessen und Budget ab. Wir arbeiten herstellerunabhängig mit Zoho, HubSpot und ActiveCampaign und empfehlen, was zu Ihnen passt.',
      },
    ],
  },
  {
    slug: 'automatisierung-und-ki',
    icon: 'settings',
    sub: 'Chatbots · Telefonbots · Workflows · Schnittstellen',
    eyebrow: 'Automatisierung & KI',
    title: 'Routineaufgaben laufen von selbst',
    teaser:
      'Chatbots, Telefonbots, Workflows und Schnittstellen: Wir automatisieren die Abläufe, die Ihr Team jede Woche Stunden kosten – DSGVO-konform und angebunden an Ihre Systeme.',
    ki: true,
    /* Feature-Showcase (Bento-Grid) – Reihenfolge = Layout-Reihenfolge,
       Visuals in components/feature-bento.jsx über den key. */
    features: {
      title: 'Automatisierung, die Arbeit abnimmt.\nNicht Arbeit macht.',
      lead: 'Wir prüfen, wo sich Automatisierung und KI in Ihren Abläufen wirklich lohnen – und implementieren sie DSGVO-konform, verbunden mit Ihren Systemen und übergeben an Ihr Team.',
      items: [
        {
          key: 'chatbots',
          title: 'Chatbots für WhatsApp, Website & Co.',
          text: 'Wir konzipieren und implementieren Chatbots, die Standardfragen sofort beantworten, Anliegen qualifizieren und Termine buchen – rund um die Uhr. Ihr Team übernimmt erst, wenn es wirklich gebraucht wird.',
        },
        {
          key: 'wissensdatenbank',
          title: 'Wissensdatenbank für Ihre Agentur',
          text: 'Wir bündeln Tarifwissen, Abläufe und Vorlagen in einer durchsuchbaren Wissensdatenbank. Ihr Team fragt in normaler Sprache und bekommt belegte Antworten – statt Kollegen zu unterbrechen.',
        },
        {
          key: 'telefonbots',
          title: 'Telefonbots – Inbound & Outbound',
          text: 'Sprachassistenten nehmen Anrufe auch nach Feierabend an, erfassen das Anliegen und vereinbaren Rückrufe – oder erinnern von sich aus an Termine und fehlende Unterlagen. Kein Anruf geht mehr verloren.',
        },
        {
          key: 'schnittstellen',
          title: 'Schnittstellen & Verknüpfungen',
          text: 'Wir verbinden Ihre Software so, dass sie miteinander spricht und agiert: CRM, Maklerverwaltung, E-Mail, Kalender und Telefonanlage tauschen Daten automatisch aus. Einmal erfasst, überall aktuell – ohne doppelte Pflege.',
        },
        {
          key: 'workflows',
          title: 'Workflows für den Alltag',
          text: 'Wir automatisieren die Handgriffe, die jede Woche Stunden kosten: Unterlagen anfordern, Termine bestätigen, Daten übertragen, Standardmails versenden. Ihr Team stößt den Vorgang an – den Rest erledigt der Workflow.',
        },
        {
          key: 'ki-dsgvo',
          title: 'KI – DSGVO-konform, wo sie hilft',
          text: 'Wir setzen KI gezielt dort ein, wo sie messbar Zeit spart – nicht überall, wo es geht. Und wir richten sie so ein, dass personenbezogene Daten geschützt bleiben.',
        },
      ],
    },
    pains: [
      'Daten werden von Hand von einem System ins nächste übertragen',
      'Angebote, Folgetermine und Dokumentenanforderungen bleiben liegen',
      'Standard-E-Mails werden jedes Mal neu geschrieben',
      'Neue Mitarbeiter brauchen Monate, bis sie alle Abläufe kennen',
    ],
    deliverables: [
      {
        title: 'Prozess-Analyse',
        text: 'Wir zeichnen Ihre Abläufe auf – vom Lead bis zur Police, vom Objekt bis zum Notartermin – und finden die Stellen, an denen Zeit verloren geht.',
      },
      {
        title: 'Workflow-Automatisierung',
        text: 'Mit Make und Zapier verbinden wir Ihre Tools: Follow-ups, Dokumentenanforderungen, Statusmeldungen und Übergaben laufen automatisch.',
      },
      {
        title: 'KI-Unterstützung',
        text: 'Claude fasst Gesprächsnotizen zusammen, entwirft Antworten und bereitet Unterlagen vor – DSGVO-bewusst eingerichtet und auf Ihre Abläufe trainiert.',
        ki: true,
      },
      {
        title: 'Dokumentation & Übergabe',
        text: 'Jeder Workflow wird dokumentiert, damit Ihr Team ihn versteht, anpassen kann und nicht von uns abhängig ist.',
      },
    ],
    faq: [
      {
        q: 'Ist KI-Einsatz mit der DSGVO vereinbar?',
        a: 'Ja, wenn er richtig eingerichtet ist. Wir konfigurieren Systeme so, dass personenbezogene Daten geschützt bleiben, und dokumentieren die Verarbeitung für Ihre Datenschutz-Unterlagen.',
      },
      {
        q: 'Was lässt sich in unserem Betrieb überhaupt automatisieren?',
        a: 'Mehr, als die meisten erwarten: Terminbestätigungen, Unterlagen-Anforderungen, Follow-up-Sequenzen, Datenübertragung zwischen Systemen, Berichte. Im Erstgespräch finden wir die drei größten Hebel.',
      },
      {
        q: 'Was passiert, wenn ein Workflow ausfällt?',
        a: 'Jeder Workflow bekommt Fehlerbenachrichtigungen und eine Dokumentation. Auf Wunsch übernehmen wir die laufende Betreuung und beheben Störungen, bevor sie auffallen.',
      },
    ],
  },
  {
    slug: 'kundenkommunikation',
    icon: 'mic',
    sub: 'WhatsApp · Newsletter · Funnels · Websites',
    eyebrow: 'Marketing & Kundenkommunikation',
    title: 'Erreichbar sein, ohne erreichbar sein zu müssen',
    teaser:
      'WhatsApp, Newsletter, Landingpages, Funnels und Google-Bewertungen – wir beraten, was sich für Ihren Betrieb lohnt, und implementieren es bis zur Übergabe.',
    ki: false,
    /* Feature-Showcase (Bento-Grid) – Reihenfolge = Layout-Reihenfolge,
       Visuals in components/feature-bento.jsx über den key. */
    features: {
      title: 'Marketing, das Termine bringt.\nNicht nur Klicks.',
      lead: 'Wir verkaufen Ihnen keine Software. Wir beraten, welche Kanäle sich für Ihren Betrieb lohnen – und implementieren sie rechtssicher, angebunden an Ihr CRM und übergeben an Ihr Team.',
      items: [
        {
          key: 'whatsapp',
          title: 'WhatsApp für Kundenkommunikation',
          text: 'Wir richten WhatsApp Business rechtssicher ein – mit Opt-in, Vorlagen und CRM-Anbindung. Ihr Vorteil: Kunden erhalten in Minuten eine Antwort statt in Tagen, und keine Anfrage versandet mehr im Postfach.',
        },
        {
          key: 'bewertungen',
          title: 'Google-Bewertungen',
          text: 'Wir implementieren einen Prozess, der zufriedene Kunden im richtigen Moment um eine Bewertung bittet. Mehr Sterne bedeuten mehr Vertrauen – und mehr Anfragen, bevor Sie ein Wort gesagt haben.',
        },
        {
          key: 'newsletter',
          title: 'Newsletter, die gelesen werden',
          text: 'Wir konzipieren Ihren Newsletter, bauen Vorlagen im eigenen Design und richten Versand und Segmentierung ein. So bleiben Sie bei Bestandskunden präsent – die günstigste Quelle für Zusatzgeschäft.',
        },
        {
          key: 'funnel',
          title: 'Funnels zur Leadgewinnung',
          text: 'Wir konzipieren und bauen die Strecke von der Anzeige bis zum gebuchten Termin – mit klaren Schritten und automatischer Qualifizierung. Aus anonymen Besuchern werden planbare Anfragen.',
        },
        {
          key: 'websites',
          title: 'Websites & Landingpages',
          text: 'Wir erstellen schlanke Websites und Landingpages, die auf ein Ziel einzahlen: Anfragen. Schnell geladen, mobil optimiert und direkt mit Ihren Formularen, Funnels und Ihrem Kalender verbunden.',
        },
        {
          key: 'formulare',
          title: 'Digitale Formulare',
          text: 'Ob Schadenmeldung oder Selbstauskunft: Wir digitalisieren Ihre Formulare – mobilfähig, mit Foto-Upload und direkt ins CRM. Schluss mit unleserlichen Scans und E-Mail-Pingpong.',
        },
      ],
    },
    pains: [
      'Anfragen kommen über fünf Kanäle und versanden in Postfächern',
      'Kunden warten tagelang auf Rückmeldung – und fragen beim Wettbewerber an',
      'Newsletter gibt es nicht oder nur unregelmäßig',
      'Unterlagen werden per Mail-Pingpong eingesammelt',
    ],
    deliverables: [
      {
        title: 'Superchat-Einrichtung',
        text: 'WhatsApp, Instagram, E-Mail und Website-Chat in einem Posteingang – mit Vorlagen, Zuweisungen und automatischen Antworten außerhalb der Bürozeiten.',
      },
      {
        title: 'E-Mail-Newsletter',
        text: 'Aufbau in ActiveCampaign oder HubSpot: Vorlagen im eigenen Design, Segmentierung nach Zielgruppen und ein Redaktionsrhythmus, der durchhaltbar ist.',
      },
      {
        title: 'Digitale Kundenformulare',
        text: 'Unterlagen, Selbstauskünfte und Risikofragen digital erfassen – vorbefüllt, mobilfähig und direkt mit Ihrem CRM verbunden.',
      },
      {
        title: 'Funnels für Anfragen',
        text: 'Einfache Strecken von der Anzeige oder Website bis zum gebuchten Termin – mit klaren nächsten Schritten statt Kontaktformular-Friedhof.',
      },
    ],
    faq: [
      {
        q: 'Dürfen wir Kunden einfach per WhatsApp anschreiben?',
        a: 'Mit Einwilligung ja. Superchat nutzt die offizielle WhatsApp-Business-Plattform; wir richten den Opt-in-Prozess so ein, dass er rechtlich sauber dokumentiert ist.',
      },
      {
        q: 'Wer schreibt die Newsletter-Inhalte?',
        a: 'Wahlweise Sie oder wir. Viele Kunden starten mit von uns vorbereiteten Vorlagen und Themenplänen und übernehmen die Texte später selbst.',
      },
      {
        q: 'Brauchen wir dafür eine neue Website?',
        a: 'Nein. Formulare und Funnels lassen sich in bestehende Websites einbetten. Wo gar keine Basis existiert, bauen wir schlanke Landingpages.',
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
    role: 'Geschäftsführer, Mustermann Versicherungsmakler GmbH',
  },
  {
    quote:
      'Die Baufinanzierungs-Unterlagen sammelt jetzt ein Formular ein, nicht mehr mein Posteingang. Allein das spart uns Stunden pro Fall.',
    name: 'Erika Beispiel', // TODO: echtes Zitat + Freigabe einholen
    role: 'Inhaberin, Beispiel Baufinanz',
  },
  {
    quote:
      'Wir wollten kein IT-Projekt, sondern funktionierende Abläufe. Genau das haben wir bekommen – in Etappen, ohne Stillstand im Tagesgeschäft.',
    name: 'Thomas Platzhalter', // TODO: echtes Zitat + Freigabe einholen
    role: 'Immobilienmakler, Platzhalter Immobilien',
  },
];

/* ---------- Use Cases ----------
   TODO: Durch echte Projekte ersetzen (anonymisiert möglich: „Versicherungsmakler, 12 Mitarbeiter").
   Alle Zahlen (Dauer, Zeit, Ertrag) sind Platzhalter.
   `visual` steuert die Illustration auf der Use-Cases-Seite:
   dashboard | notify | chat | flow */
export const useCases = [
  {
    icon: 'chart',
    visual: 'dashboard',
    branch: 'Versicherungsmakler · 14 Mitarbeiter',
    title: 'Vom Excel-Chaos zum zentralen CRM',
    problem:
      'Bestände in Excel, Leads im E-Mail-Postfach, Wiedervorlagen auf Zetteln. Kein gemeinsamer Blick auf Kunden und offene Vorgänge.',
    steps: [
      { icon: 'search', title: 'Drei CRM-Optionen verglichen', text: 'Bestände und Abläufe analysiert, Zoho, HubSpot und ActiveCampaign gegenübergestellt – Zoho passte zu Budget und Maklerverwaltungsprogramm.' },
      { icon: 'settings', title: 'Zoho CRM implementiert', text: 'Bestandsdaten migriert, Maklerverwaltungsprogramm angebunden, Wiedervorlagen automatisiert – Lizenz direkt beim Anbieter.' },
      { icon: 'user', title: 'Team geschult, System übergeben', text: 'Drei kurze Sessions im Tagesgeschäft, Dokumentation und Spickzettel für jeden Arbeitsplatz – das System gehört dem Team.' },
    ],
    tools: ['Zoho CRM', 'Make'],
    duration: '6 Wochen bis Livegang',
    time: { value: '8 Std./Woche', label: 'weniger Verwaltungsaufwand im Team' },
    gain: { value: '0 verlorene Leads', label: 'seit Einführung – vorher ca. 3 pro Monat' },
    serviceHref: '/leistungen/crm-und-daten',
    serviceLabel: 'CRM & Datenstruktur',
  },
  {
    icon: 'document',
    visual: 'notify',
    branch: 'Baufinanzierung · 5 Mitarbeiter',
    title: 'Unterlagen einsammeln ohne E-Mail-Pingpong',
    problem:
      'Pro Finanzierungsfall über 20 E-Mails nur für Unterlagen. Kunden genervt, Berater blockiert, Fälle verzögert.',
    steps: [
      { icon: 'search', title: 'Unterlagenprozess durchleuchtet', text: 'Jeden E-Mail-Schritt erfasst und bewertet. Unsere Empfehlung: kein teures Kundenportal, sondern eine schlanke Formular-Lösung.' },
      { icon: 'document', title: 'Formular-Strecke umgesetzt', text: 'Digitale Selbstauskunft mit Dokumenten-Upload, automatische Erinnerungen über Make, Status-Updates per WhatsApp über Superchat.' },
      { icon: 'user', title: 'Berater befähigt', text: 'Team geschult und Textbausteine übergeben – neue Fälle legt das Büro heute ohne uns an.' },
    ],
    tools: ['Make', 'Superchat'],
    duration: '3 Wochen bis Livegang',
    time: { value: '4 Tage schneller', label: 'bei der Bank eingereicht, −70 % E-Mails pro Fall' },
    gain: { value: '+2 Fälle/Monat', label: 'mehr Kapazität bei gleichem Team' },
    serviceHref: '/leistungen/automatisierung-und-ki',
    serviceLabel: 'Automatisierung & KI',
  },
  {
    icon: 'search',
    visual: 'chat',
    branch: 'Immobilienmakler · 8 Mitarbeiter',
    title: 'Aus Portal-Anfragen werden Besichtigungen',
    problem:
      'Anfragen aus Portalen blieben abends und am Wochenende liegen – Interessenten waren bis Montag schon weiter.',
    steps: [
      { icon: 'search', title: 'Anfrageweg analysiert', text: 'Ausgewertet, wo Interessenten verloren gingen. Statt teurer Portal-Zusatzmodule fiel unsere Empfehlung auf ActiveCampaign mit Terminbuchung.' },
      { icon: 'bell', title: 'Funnel implementiert', text: 'Sofortige Erstantwort mit Terminbuchungs-Link, Qualifizierungsfragen vorab, Suchkunden-Verteiler für alle, die nicht zum Zuge kamen.' },
      { icon: 'user', title: 'Übergabe ans Team', text: 'Geschult und dokumentiert – Objekte und Kampagnen pflegt das Maklerbüro heute selbst.' },
    ],
    tools: ['ActiveCampaign', 'Superchat', 'Cal.com'],
    duration: '4 Wochen bis Livegang',
    time: { value: '< 5 Min.', label: 'Antwortzeit statt bis zu 2 Tagen' },
    gain: { value: '3× Besichtigungen', label: 'und 1.200+ Suchkunden im Newsletter' },
    serviceHref: '/leistungen/kundenkommunikation',
    serviceLabel: 'Marketing & Kundenkommunikation',
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
    tools: ['Zoho CRM', 'Claude AI', 'Make'],
    duration: '4 Wochen bis Livegang',
    time: { value: '6 Std./Woche', label: 'weniger Rückruf-Aufwand im Team' },
    gain: { value: '0 verpasste Anrufe', label: 'jedes Anliegen wird erfasst und bearbeitet' },
    serviceHref: '/leistungen/automatisierung-und-ki',
    serviceLabel: 'Automatisierung & KI',
  },
  {
    icon: 'trend',
    visual: 'notify',
    branch: 'Baufinanzierung · 12 Mitarbeiter',
    title: 'Anschlussfinanzierungen automatisch im Blick',
    problem:
      'Auslaufende Zinsbindungen im Bestand blieben unbemerkt – Kunden verlängerten bei der Bank, statt beim Vermittler anzufragen.',
    steps: [
      { icon: 'search', title: 'Bestand analysiert, Potenzial beziffert', text: 'Zinsbindungs-Enddaten strukturiert erfasst und vorgerechnet, wie viele Anschlussfälle pro Jahr im Bestand stecken.' },
      { icon: 'calendar', title: 'Kampagne implementiert', text: '18 Monate vor Ablauf startet automatisch eine persönliche E-Mail-Strecke mit Terminangebot – angebunden ans CRM.' },
      { icon: 'chart', title: 'Auswertung übergeben', text: 'Dashboard eingerichtet und Team geschult – Texte und Zeitpunkte passt das Büro heute selbst an.' },
    ],
    tools: ['ActiveCampaign', 'Zoho CRM'],
    duration: '3 Wochen bis Livegang',
    time: { value: '0 Std. Pflege', label: 'die Strecke läuft seit Livegang von selbst' },
    gain: { value: '40+ Termine/Jahr', label: 'für Anschlussfinanzierungen aus dem Bestand' },
    serviceHref: '/leistungen/kundenkommunikation',
    serviceLabel: 'Marketing & Kundenkommunikation',
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
    a: 'Für Versicherungsagenturen und Makler, Baufinanzierer und Immobilienprofis – vom Einzelkämpfer bis zum Team mit 50 Mitarbeitern. Wir kennen die Abläufe, Systeme und rechtlichen Rahmenbedingungen dieser Branchen.',
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
