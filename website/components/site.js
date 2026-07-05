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
  { label: 'Referenzen', href: '/referenzen' },
  { label: 'Über uns', href: '/ueber-uns' },
];

export const tools = [
  'Zoho', 'HubSpot', 'ActiveCampaign', 'Superchat', 'Make', 'Zapier', 'Claude AI',
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
    sub: 'Make · Zapier · Claude',
    eyebrow: 'Automatisierung & KI',
    title: 'Routineaufgaben laufen von selbst',
    teaser:
      'Workflows mit Make und Zapier, KI-Unterstützung mit Claude: Wir automatisieren die Abläufe, die Ihr Team jede Woche Stunden kosten.',
    ki: true,
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
    sub: 'Superchat · Newsletter · Funnels',
    eyebrow: 'Kundenkommunikation & Funnels',
    title: 'Erreichbar sein, ohne erreichbar sein zu müssen',
    teaser:
      'Superchat für WhatsApp & Co., E-Mail-Newsletter, digitale Kundenformulare und einfache Funnels – damit aus Anfragen Termine werden.',
    ki: false,
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

/* TODO: Durch echte Projekte ersetzen (anonymisiert möglich: „Versicherungsmakler, 12 Mitarbeiter") */
export const cases = [
  {
    branch: 'Versicherungsmakler · 14 Mitarbeiter',
    title: 'Vom Excel-Chaos zum zentralen CRM',
    problem:
      'Bestände in Excel, Leads im E-Mail-Postfach, Wiedervorlagen auf Zetteln. Kein gemeinsamer Blick auf Kunden und offene Vorgänge.',
    solution:
      'Zoho CRM eingeführt, Bestandsdaten migriert, Maklerverwaltungsprogramm angebunden und das Team in drei kurzen Sessions geschult.',
    results: [
      { value: '6 Wochen', label: 'von Kickoff bis Livegang' },
      { value: '8 Std./Woche', label: 'weniger Verwaltungsaufwand' },
      { value: '0', label: 'verlorene Leads seit Einführung' },
    ],
  },
  {
    branch: 'Baufinanzierung · 5 Mitarbeiter',
    title: 'Unterlagen einsammeln ohne E-Mail-Pingpong',
    problem:
      'Pro Finanzierungsfall über 20 E-Mails nur für Unterlagen. Kunden genervt, Berater blockiert, Fälle verzögert.',
    solution:
      'Digitale Selbstauskunft mit Dokumenten-Upload, automatische Erinnerungen über Make, Status-Updates per WhatsApp über Superchat.',
    results: [
      { value: '−70 %', label: 'E-Mails pro Finanzierungsfall' },
      { value: '4 Tage', label: 'schnellere Einreichung bei der Bank' },
      { value: '9 von 10', label: 'Kunden nutzen den digitalen Weg' },
    ],
  },
  {
    branch: 'Immobilienmakler · 8 Mitarbeiter',
    title: 'Aus Portal-Anfragen werden Besichtigungen',
    problem:
      'Anfragen aus Portalen blieben abends und am Wochenende liegen – Interessenten waren bis Montag schon weiter.',
    solution:
      'Automatische Erstantwort mit Terminbuchung, Qualifizierungs-Funnel und Newsletter für Suchkunden in ActiveCampaign.',
    results: [
      { value: '< 5 Min.', label: 'Antwortzeit auf Portal-Anfragen' },
      { value: '3×', label: 'mehr Besichtigungstermine' },
      { value: '1.200+', label: 'Suchkunden im Newsletter' },
    ],
  },
];

/* ---------- FAQ (Startseite) ---------- */
export const homeFaq = [
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
