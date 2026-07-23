/* ============================================================
   VORLAGE für Wissens-Artikel (draft: true → erscheint nur im
   Dev-Modus, nie im Production-Build).

   So entsteht ein neuer Artikel:
   1. Diese Datei kopieren → content/artikel/<slug>.js
   2. Inhalte ersetzen, draft entfernen (oder auf false setzen)
   3. Artikel in content/artikel/index.js importieren und
      zur Liste hinzufügen – fertig.

   SEO/GEO-Bauplan (siehe 03-seo/seo-geo-keywordrecherche.md):
   - `title` = H1, beantwortet idealerweise die Suchanfrage wörtlich
   - `answer` = Die kurze Antwort in 2–3 Sätzen (wird prominent
     gerendert; KI-Assistenten zitieren extraktionsfähige Passagen)
   - h2-Blöcke = verwandte Fragen im Wortlaut der Prompt-Query
   - `definition`-Blöcke für Fachbegriffe (Begriff: Definition)
   - `faq` = 3–5 verwandte Fragen → FAQPage-Schema automatisch
   - Zahlen & Fakten mit `sources` belegen (YMYL)
   ============================================================ */

export const article = {
  slug: 'artikel-vorlage',
  draft: true, // ← bei echten Artikeln entfernen

  /* Kategorie = Cluster aus der Keywordrecherche, z. B.
     „CRM & Prozesse“, „Kundenkommunikation“, „KI“, „Marketing“ */
  category: 'CRM & Prozesse',
  categoryIcon: 'chart',

  title: 'Artikel-Vorlage: So ist ein Wissens-Artikel aufgebaut',
  excerpt:
    'Interne Vorlage für neue Wissens-Artikel – zeigt alle verfügbaren Inhaltsblöcke und den SEO/GEO-Bauplan. Erscheint nur im Dev-Modus.',

  /* Suchgetriebene Metadaten (Title ≤ 60 Zeichen inkl. „| VERDA“) */
  seo: {
    title: 'Artikel-Vorlage (nur intern sichtbar)',
    description:
      'Interne Vorlage für Wissens-Artikel mit allen Inhaltsblöcken – nur im Entwicklungsmodus sichtbar.',
  },

  /* GEO: Die kurze Antwort – 2–3 Sätze, die die Suchanfrage direkt
     beantworten. Wird als hervorgehobene Box unter dem Titel gerendert. */
  answer:
    'Hier steht die direkte Antwort auf die Suchanfrage in zwei bis drei Sätzen – mit konkreter Zahl oder Empfehlung, ohne Umschweife. Dieser Absatz ist das, was ChatGPT, Perplexity und Google AI Overviews am liebsten zitieren.',

  datePublished: '2026-07-15',
  dateModified: '2026-07-15',

  primaryKeyword: 'beispiel keyword',

  /* Verknüpfung zum passenden Paket (interne Verlinkung + CTA) */
  serviceHref: '/leistungen/digitale-agentur',
  serviceLabel: 'Digitale Agentur',

  blocks: [
    {
      type: 'p',
      text: 'Ein normaler Absatz. Kurze Sätze, konkrete Aussagen, Sie-Form. Jeder Abschnitt beantwortet genau eine Frage – so bleibt der Artikel für Leser scannbar und für KI-Assistenten zitierfähig.',
    },
    {
      type: 'h2',
      text: 'Eine H2 formuliert die Frage so, wie sie gesucht wird',
    },
    {
      type: 'p',
      text: 'Direkt nach der H2 folgt die Antwort im ersten Satz. Danach Kontext, Beispiele und Details. Faustregel: Wer nur H2 und den jeweils ersten Satz liest, versteht den ganzen Artikel.',
    },
    {
      type: 'definition',
      term: 'Definitions-Block',
      text: 'Ein Fachbegriff wird in ein bis zwei Sätzen erklärt. KI-Modelle übernehmen solche Definitionen gern wörtlich – samt Quelle.',
    },
    {
      type: 'ul',
      items: [
        'Aufzählungen für Vorteile, Voraussetzungen oder Beispiele',
        'Maximal fünf bis sieben Punkte pro Liste',
        'Jeder Punkt ein vollständiger Gedanke',
      ],
    },
    {
      type: 'h3',
      text: 'H3 für Unterpunkte innerhalb eines H2-Abschnitts',
    },
    {
      type: 'ol',
      items: [
        'Nummerierte Listen für Schritt-für-Schritt-Anleitungen',
        'Jeder Schritt beginnt mit einem Verb',
        'Ergebnis des Schritts kurz benennen',
      ],
    },
    {
      type: 'callout',
      title: 'Praxis-Hinweis',
      text: 'Callout-Boxen für Warnungen, Praxistipps oder rechtliche Hinweise. Sparsam einsetzen – eine bis zwei pro Artikel.',
    },
    {
      type: 'quote',
      text: 'Zitate aus Projekten oder von Kunden – mit Freigabe – machen den Artikel glaubwürdig und einzigartig.',
      source: 'Agenturinhaber, 8 Mitarbeiter',
    },
    {
      type: 'h2',
      text: 'Der letzte Abschnitt leitet zum nächsten Schritt über',
    },
    {
      type: 'p',
      text: 'Kein hartes Verkaufen: Der Artikel endet mit einer ehrlichen Einordnung, wann sich professionelle Unterstützung lohnt – der CTA-Baustein (Kurz-Check) wird automatisch darunter gerendert.',
    },
  ],

  /* 3–5 verwandte Fragen → werden als Akkordeon gerendert und
     automatisch als FAQPage-Schema (JSON-LD) ausgegeben. */
  faq: [
    {
      q: 'Wozu dient dieser Vorlage-Artikel?',
      a: 'Er dokumentiert den Artikelaufbau und alle verfügbaren Inhaltsblöcke. Neue Artikel entstehen als Kopie dieser Datei.',
    },
    {
      q: 'Erscheint die Vorlage auf der Live-Website?',
      a: 'Nein. Artikel mit draft: true werden nur im Entwicklungsmodus angezeigt und aus Production-Builds ausgeschlossen.',
    },
    {
      q: 'Wie viele FAQ-Einträge sollte ein Artikel haben?',
      a: 'Drei bis fünf. Die Fragen sollten echte Anschlussfragen der Zielgruppe sein – im Wortlaut, wie sie gestellt werden.',
    },
  ],

  /* Quellen für Zahlen und Fakten (YMYL-Pflicht) */
  sources: [
    { label: 'Beispielquelle: GDV-Statistik', href: 'https://www.gdv.de' },
  ],
};
