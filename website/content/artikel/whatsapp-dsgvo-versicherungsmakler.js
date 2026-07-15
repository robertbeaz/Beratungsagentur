/* ============================================================
   Wissens-Artikel: WhatsApp & DSGVO für Versicherungsmakler
   Primär-Keyword: „whatsapp dsgvo versicherungsmakler“
   Sekundär: „whatsapp business dsgvo-konform nutzen“,
   „whatsapp business api versicherung“, „whatsapp einwilligung
   kunden“, „gesundheitsdaten whatsapp art. 9 dsgvo“
   Recherche-Stand: Juli 2026 (Rechtslage inkl. EuG T-553/23).
   ============================================================ */

export const article = {
  slug: 'whatsapp-dsgvo-versicherungsmakler',

  category: 'Kundenkommunikation',
  categoryIcon: 'mic',

  title: 'Dürfen Versicherungsmakler WhatsApp nutzen? Der DSGVO-Leitfaden',
  excerpt:
    'Die Business App ist das Problem, die Business Platform die Lösung: was Aufsichtsbehörden sagen, welche Einwilligung Sie brauchen – und was nie in den Chat gehört.',

  seo: {
    title: 'WhatsApp & DSGVO: Leitfaden für Versicherungsmakler',
    description:
      'Die WhatsApp Business App gilt bei Aufsichtsbehörden als nicht DSGVO-konform, die Business Platform schon. Was Makler und Agenturen jetzt beachten müssen.',
  },

  answer:
    'Ja – aber nur über die WhatsApp Business Platform (API), nicht über die normale Business App auf dem Smartphone. Die App gilt wegen des automatischen Adressbuch-Zugriffs bei Datenschutz-Aufsichtsbehörden als nicht DSGVO-konform. Rechtssicher wird der Kanal erst mit Auftragsverarbeitungsvertrag, dokumentierter Einwilligung Ihrer Kunden und klaren Regeln für sensible Daten – Gesundheitsdaten gehören grundsätzlich nicht in den Chat.',

  datePublished: '2026-07-15',
  dateModified: '2026-07-15',

  primaryKeyword: 'whatsapp dsgvo versicherungsmakler',

  serviceHref: '/leistungen/digitale-agentur',
  serviceLabel: 'Digitale Agentur – inkl. rechtssicherer WhatsApp-Anbindung',

  blocks: [
    {
      type: 'p',
      text: 'Ihre Kunden sind längst dort: 83 Prozent der 16- bis 74-Jährigen in Deutschland nutzen Messengerdienste (Statistisches Bundesamt, 2025). Schadenfotos, Terminwünsche, kurze Rückfragen – vieles davon kommt heute per WhatsApp. Gleichzeitig warnen Fachmedien und Datenschützer seit Jahren vor genau diesem Kanal. Beides stimmt. Dieser Leitfaden zeigt, wo die Risiken wirklich liegen und wie Agenturen WhatsApp sauber einsetzen.',
    },
    {
      type: 'h2',
      text: 'Warum ist WhatsApp für Versicherungsagenturen ein Datenschutz-Thema?',
    },
    {
      type: 'p',
      text: 'Sobald Sie als Agentur mit Kunden über WhatsApp schreiben, verarbeiten Sie personenbezogene Daten im Sinne der DSGVO – und sind dafür verantwortlich. In der Versicherungsberatung sind das schnell besonders geschützte Daten: Gesundheitsangaben in der PKV- oder BU-Beratung, Einkommensdaten, Vertragsdetails. Der Kanal selbst ist dabei nicht verboten. Entscheidend ist, welche technische Variante Sie nutzen und wie Sie sie einsetzen.',
    },
    {
      type: 'p',
      text: 'Die Fallhöhe ist real: Verstöße können nach Art. 83 DSGVO mit bis zu 20 Millionen Euro oder 4 Prozent des Jahresumsatzes geahndet werden – dazu kommen Abmahnrisiken und Auskunftsersuchen von Kunden. Gegen WhatsApp selbst verhängte die irische Aufsichtsbehörde 2021 ein Bußgeld von 225 Millionen Euro wegen Transparenzverstößen. Das Thema steht bei den Behörden also nicht auf der Ersatzbank.',
    },
    {
      type: 'h2',
      text: 'Ist die normale WhatsApp Business App DSGVO-konform?',
    },
    {
      type: 'p',
      text: 'Nach Einschätzung der Aufsichtsbehörden: nein. Das Kernproblem ist der Adressbuch-Zugriff. Die kostenlose Business App liest – wie die private App – das gesamte Telefonbuch aus und übermittelt die Kontaktdaten an Meta. Auch von Menschen, die WhatsApp gar nicht nutzen und nie eingewilligt haben. Die Landesdatenschutzbeauftragte Niedersachsen bewertet diese Übermittlung als „regelmäßig unzulässig“, weil dafür keine Rechtsgrundlage nach Art. 6 DSGVO besteht.',
    },
    {
      type: 'p',
      text: 'Schon 2017 wertete das Amtsgericht Bad Hersfeld die Weitergabe von Kontaktdaten an WhatsApp ohne Einwilligung der Betroffenen als deliktische Handlung mit Abmahnrisiko. Ein familienrechtlicher Einzelfall, kein Unternehmensurteil – aber er zeigt, in welche Richtung Gerichte denken.',
    },
    {
      type: 'p',
      text: 'Das zweite Problem der App: Es fehlt ein Auftragsverarbeitungsvertrag, der die Anforderungen des Art. 28 DSGVO vollständig erfüllt. Sie haben keine Kontrolle darüber, was mit den Daten passiert – kein Weisungsrecht, kein Löschkonzept, keine sauber geregelten Backups.',
    },
    {
      type: 'definition',
      term: 'Auftragsverarbeitungsvertrag (AVV)',
      text: 'Ein Vertrag nach Art. 28 DSGVO zwischen Ihnen als Verantwortlichem und einem Dienstleister, der Daten in Ihrem Auftrag verarbeitet. Er regelt Weisungsrechte, Löschpflichten und Sicherheitsmaßnahmen – ohne ihn dürfen Sie personenbezogene Kundendaten nicht an einen Dienstleister geben.',
    },
    {
      type: 'h2',
      text: 'Was macht die WhatsApp Business Platform (API) anders?',
    },
    {
      type: 'p',
      text: 'Die Business Platform läuft serverseitig – ohne Smartphone und ohne Zugriff auf ein Adressbuch. Der automatische Kontakt-Upload, das Hauptargument der Aufsichtsbehörden gegen die App, findet hier technisch nicht statt. Zusätzlich stellt Meta für die Platform eigene „Business Data Processing Terms“ bereit: Meta verarbeitet die Daten als Auftragsverarbeiter nur nach Ihren Weisungen und hält Nachrichten maximal 30 Tage vor.',
    },
    {
      type: 'definition',
      term: 'Business Solution Provider (BSP)',
      text: 'Ein von Meta zertifizierter Anbieter, der Agenturen den Zugang zur WhatsApp Business Platform bereitstellt – etwa Superchat oder 360dialog. Der BSP schließt einen eigenen AVV mit Ihnen, verwaltet Einwilligungen und hostet die Konversationsdaten auf Wunsch in der EU.',
    },
    {
      type: 'p',
      text: 'Auch das Drittland-Argument hat an Gewicht verloren: Seit Juli 2023 gilt das EU-US Data Privacy Framework, unter dem WhatsApp LLC zertifiziert ist. Das Gericht der Europäischen Union hat eine Klage gegen dieses Framework im September 2025 abgewiesen (Rs. T-553/23). Ältere Artikel, die WhatsApp vor allem wegen „unsicherer Drittlandübermittlung“ ablehnen, sind in diesem Punkt überholt – ein Restrisiko für die Zukunft bleibt, das Kernproblem ist es derzeit nicht.',
    },
    {
      type: 'callout',
      title: 'Vorsicht bei „100 % DSGVO-konform“',
      text: 'Anbieter werben gern mit pauschaler Konformität. So einfach ist es nicht: Das Tool liefert die technische Grundlage, aber Einwilligungen, Datenschutzerklärung und Team-Regeln bleiben Ihre Aufgabe. DSGVO-konform ist nie die Software allein – sondern Ihr Einsatz davon.',
    },
    {
      type: 'h2',
      text: 'Welche Voraussetzungen gelten für den rechtssicheren Einsatz?',
    },
    {
      type: 'p',
      text: 'Aus Gesetz, Behördenlinie und Fachkonsens ergibt sich eine klare Checkliste. Wer diese sieben Punkte umsetzt, hat die wesentlichen Risiken im Griff:',
    },
    {
      type: 'ol',
      items: [
        'Business Platform statt Business App nutzen – über einen BSP, mit eigener Firmennummer statt privater Handys.',
        'AVV abschließen: die Data Processing Terms von Meta plus den AVV Ihres Providers, beides dokumentiert ablegen.',
        'Einwilligung einholen (Art. 6 Abs. 1 lit. a DSGVO): aktives Opt-in, am einfachsten indem der Kunde den Chat selbst startet – und die Einwilligung nachweisbar festhalten (Art. 7 DSGVO).',
        'Datenschutzerklärung ergänzen (Art. 13 DSGVO): WhatsApp als Kanal, Meta als Empfänger, Übermittlung in die USA unter dem Data Privacy Framework.',
        'Sensible Daten aussteuern: Gesundheits- und Antragsdaten nicht über den Chat, sondern per Kanalwechsel (sicherer Upload, verschlüsselte Strecke).',
        'Verläufe dokumentieren: Beratungsrelevante Kommunikation gehört in die Dokumentation nach §§ 61, 62 VVG – am zuverlässigsten über eine CRM-Anbindung.',
        'Widerruf ermöglichen (Art. 7 Abs. 3 DSGVO): Kunden können die Einwilligung jederzeit zurückziehen – der Prozess dafür muss stehen.',
      ],
    },
    {
      type: 'h2',
      text: 'Was dürfen Sie per WhatsApp verschicken – und was nicht?',
    },
    {
      type: 'p',
      text: 'Die Faustregel: Organisatorisches ja, Sensibles nein. Terminabstimmungen und Erinnerungen sind mit Einwilligung unkritisch. Gesundheitsdaten sind dagegen besondere Kategorien nach Art. 9 DSGVO – ihre Verarbeitung ist grundsätzlich untersagt und nur mit ausdrücklicher Einwilligung zulässig. Für Messenger legen die Aufsichtsbehörden hier die strengsten Maßstäbe an, wie die Papiere der Datenschutzkonferenz zum Gesundheitsbereich zeigen.',
    },
    {
      type: 'ul',
      items: [
        'Unkritisch mit Opt-in: Terminvereinbarung und -bestätigung, Erinnerung an fehlende Unterlagen, Status-Updates („Ihre Schadenmeldung ist eingegangen“), allgemeine Rückfragen ohne sensible Details.',
        'Nicht in den Chat: Gesundheitsangaben für PKV, BU oder Lebensversicherung, Antrags- und Risikofragen dazu, Bank- und Einkommensnachweise, vollständige Vertragsdokumente mit sensiblen Daten.',
        'Der saubere Ausweg ist der Kanalwechsel: „Dafür schicke ich Ihnen einen sicheren Upload-Link“ – die Anfrage kommt per WhatsApp, die sensiblen Daten laufen über eine geschützte Strecke.',
      ],
    },
    {
      type: 'p',
      text: 'Für einen Teil der Branche kommt eine strafrechtliche Ebene dazu: Wer als Vertreter für private Kranken-, Unfall- oder Lebensversicherer tätig ist, unterliegt der Schweigepflicht des § 203 StGB – das hat der Bundesgerichtshof bereits 2010 entschieden (VIII ZR 53/09). Ob und wie weit die Norm auch unabhängige Makler und andere Sparten erfasst, ist juristisch umstritten. Die DSGVO-Pflichten gelten aber in jedem Fall und für alle.',
    },
    {
      type: 'quote',
      text: 'Die normale Variante der App ist für die geschäftliche Kommunikation absolut nicht geeignet.',
      source: 'Interview im Fachmagazin AssCompact, Oktober 2025',
    },
    {
      type: 'h2',
      text: 'Wie führen Sie WhatsApp in der Agentur sauber ein?',
    },
    {
      type: 'p',
      text: 'Die Reihenfolge aus der Praxis: Erst einen BSP mit EU-Hosting und branchentauglichem AVV auswählen. Dann eine zentrale Firmennummer einrichten, damit die Kommunikation nicht über private Handys der Mitarbeiter läuft. Den Kanal ans CRM anbinden, sodass jede Konversation automatisch in der Kundenakte landet – das erledigt die Dokumentationspflicht nebenbei. Und zuletzt schriftliche Team-Regeln: was in den Chat darf, wann der Kanalwechsel greift, wer antwortet.',
    },
    {
      type: 'p',
      text: 'Die Kosten sind überschaubar: die Softwarelizenz des Providers plus Konversationsgebühren von Meta – Service-Antworten innerhalb von 24 Stunden sind derzeit kostenlos, vorlagenbasierte Nachrichten kosten je nach Typ wenige Cent (Stand 2026, direkt beim Anbieter zu prüfen).',
    },
    {
      type: 'p',
      text: 'Aus unseren Projekten können wir sagen: Das Tool ist selten das Problem – die Regeln sind es. Agenturen scheitern nicht am AVV, sondern daran, dass drei Monate nach der Einführung doch wieder jemand über das private Handy schreibt. Der rechtssichere Betrieb entsteht durch Schulung und klare Abläufe, nicht durch die Lizenz allein.',
    },
    {
      type: 'callout',
      title: 'Rechtlicher Hinweis',
      text: 'Dieser Artikel dient der allgemeinen Information und ersetzt keine Rechtsberatung. Verbindliche Auskünfte zu Ihrem Einzelfall geben Ihnen Rechtsanwälte oder Ihr Datenschutzbeauftragter. Rechtsstand: Juli 2026.',
    },
  ],

  faq: [
    {
      q: 'Ist WhatsApp Business DSGVO-konform?',
      a: 'Die kostenlose Business App gilt bei Aufsichtsbehörden wegen des Adressbuch-Zugriffs als nicht DSGVO-konform. Die WhatsApp Business Platform (API) über einen zertifizierten Provider lässt sich dagegen DSGVO-konform betreiben – mit Auftragsverarbeitungsvertrag, dokumentierter Einwilligung und angepasster Datenschutzerklärung.',
    },
    {
      q: 'Brauche ich eine Einwilligung meiner Kunden für WhatsApp?',
      a: 'Ja. Sie benötigen ein aktives, dokumentiertes Opt-in nach Art. 6 Abs. 1 lit. a DSGVO. Am einfachsten: Der Kunde startet den Chat selbst. Halten Sie die Einwilligung nachweisbar fest – etwa im CRM – und ermöglichen Sie jederzeit den Widerruf.',
    },
    {
      q: 'Darf ich Gesundheitsdaten oder Vertragsdokumente per WhatsApp verschicken?',
      a: 'Grundsätzlich nein. Gesundheitsdaten sind besondere Kategorien nach Art. 9 DSGVO und nur mit ausdrücklicher Einwilligung verarbeitbar – die Behördenlinie für Messenger ist hier sehr streng. Die Praxis-Lösung ist der Kanalwechsel: Anfrage per WhatsApp, sensible Unterlagen über einen sicheren Upload-Link.',
    },
    {
      q: 'Was kostet die WhatsApp Business Platform für ein Maklerbüro?',
      a: 'Zwei Bausteine: die Lizenz Ihres Providers (je nach Anbieter und Teamgröße) plus Konversationsgebühren von Meta. Service-Antworten innerhalb von 24 Stunden sind derzeit kostenlos, vorlagenbasierte Nachrichten kosten wenige Cent pro Stück (Stand 2026).',
    },
    {
      q: 'Welche Strafen drohen bei DSGVO-Verstößen mit WhatsApp?',
      a: 'Der Rahmen des Art. 83 DSGVO reicht bis 20 Millionen Euro oder 4 Prozent des Jahresumsatzes. Realistischer für Agenturen sind Abmahnungen, Auskunftsersuchen und Reputationsschäden. Ein deutsches Bußgeld gegen ein Unternehmen speziell wegen WhatsApp-Kundenkommunikation ist bislang nicht bekannt – verlassen sollten Sie sich darauf nicht.',
    },
  ],

  sources: [
    {
      label: 'LfD Niedersachsen – Nutzung von WhatsApp im Unternehmen',
      href: 'https://www.lfd.niedersachsen.de/dsgvo/nutzung_von_whatsapp_im_unternehmen/',
    },
    {
      label: 'Datenschutzkonferenz – Whitepaper Messenger-Dienste im Krankenhausbereich (2019, PDF)',
      href: 'https://www.datenschutzkonferenz-online.de/media/oh/20191106_whitepaper_messenger_krankenhaus_dsk.pdf',
    },
    {
      label: 'Meta – WhatsApp Business Data Processing Terms',
      href: 'https://www.whatsapp.com/legal/business-data-processing-terms',
    },
    {
      label: 'WhatsApp LLC – EU-U.S. Data Privacy Framework Disclosure',
      href: 'https://www.whatsapp.com/legal/data-privacy-framework',
    },
    {
      label: 'EuG, Urteil vom 03.09.2025, Rs. T-553/23 – Pressemitteilung (curia.europa.eu, PDF)',
      href: 'https://curia.europa.eu/site/upload/docs/application/pdf/2025-09/cp250106en.pdf',
    },
    {
      label: '§ 203 StGB – Verletzung von Privatgeheimnissen (dejure.org)',
      href: 'https://dejure.org/gesetze/StGB/203.html',
    },
    {
      label: 'Statistisches Bundesamt – Nutzung von Messengerdiensten in Europa (2025)',
      href: 'https://www.destatis.de/Europa/DE/Thema/Wissenschaft-Technologie-digitaleGesellschaft/Digitale_Kommunikation.html',
    },
    {
      label: 'AssCompact – WhatsApp DSGVO-konform und mit KI im Vertrieb einsetzen (18.10.2025)',
      href: 'https://www.asscompact.de/nachrichten/whatsapp-dsgvo-konform-und-mit-ki-im-vertrieb-einsetzen',
    },
    {
      label: 'heise online – 225-Mio.-€-Bußgeld der irischen Datenschutzbehörde gegen WhatsApp (2021)',
      href: 'https://www.heise.de/news/WhatsApp-von-irischer-Datenschutzbehoerde-zu-225-Millionen-Euro-Strafe-verurteilt-6180500.html',
    },
    {
      label: 'Pfefferminzia – Was Makler bei der Kommunikation über WhatsApp beachten sollten',
      href: 'https://www.pfefferminzia.de/top-thema-assekuranz-der-zukunft/messengerdienste-was-makler-bei-der-kommunikation-ueber-whatsapp-beachten-sollten/',
    },
  ],
};
