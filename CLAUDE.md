# Beratungsagentur (Arbeitsname „VERDA")

Monorepo für die Digitalberatungs-Agentur von Robert (Zielgruppe: Versicherungsmakler,
Baufinanzierer, Immobilienprofis). Positionierung: **Beratung + Implementierung**,
herstellerunabhängig — ausdrücklich **keine** Software-/SaaS-Firma.

## Ordnerstruktur

```
Beratungsagentur/
├── website/                 → Next.js 15 App (die Live-Website, via Vercel deployed)
├── verda-design-system/     → Design System (Tokens, React-Primitives, Styleguide)
├── werbeanzeigen/           → Werbeanzeigen-Creatives (statisches HTML)
├── grafiken/                → Website-Feature-Grafiken (HTML-Quellen + PNG-Exports, noch nicht eingebunden)
├── referenzen/              → Referenz-/Inspirations-Screenshots
└── CLAUDE.md                → diese Datei
```

Die vier Bereiche sind bewusst getrennt und werden **nicht** ineinander verschoben:
`website/` ist eigener Vercel-Projekt-Root (`.vercel/`), ein Umzug würde das Deploy brechen.

## website/ — Next.js 15 + Tailwind 3

- **Zentrale Datenquelle: [`website/components/site.js`](website/components/site.js)** —
  Name, Cal.com-Link, alle Texte, Leistungen, Use Cases, FAQ und TODO-Platzhalter liegen
  hier. **Bei jeder inhaltlichen Änderung zuerst hier prüfen.**
- App Router unter `app/`, Komponenten unter `components/`, Blog-/Artikel-Inhalte unter
  `content/artikel/`.
- Rebranding von „VERDA" läuft zentral über `site.js` + Design-Tokens.

Befehle (in `website/`):
```bash
npm install
npm run dev        # lokaler Dev-Server
npm run build      # Production-Build
```

## verda-design-system/

Token-basiertes System (Quelle der Wahrheit: `tokens/design-tokens.json` + `tokens/tokens.css`,
Tailwind-Mapping in `tailwind.config.js`). Lebender Styleguide: `styleguide.html` (im Browser
öffnen, kein Build nötig). Details siehe [`verda-design-system/README.md`](verda-design-system/README.md).

Kernregeln: Sand trägt, Forest spricht, Sun handelt (max. 1 gelber Button pro Ansicht);
Signal-Lime nur für KI-/Neu-Kennzeichnung. `website/` hat eine eigene, angepasste
`tailwind.config.js` — die des Design-Systems ist die Referenz, kein Zwang zur Deckungsgleichheit.

## Konventionen

- **Sprache:** Deutsch, Sie-Form. Agentur (nicht Person) im Vordergrund. Preise sind gewollt
  (Festpreis-Teaser „ab X €" je Paket, Retainer-Tiers) und liegen zentral in `site.js`.
- **Inhalte:** Testimonials, Zahlen und Cases sind markierte Platzhalter (TODO in `site.js`);
  echte Kundenstimmen/Ergebnisse werden nachgeliefert. Impressum/Datenschutz sind ungeprüfte Vorlagen.
- **Tools der Agentur:** Zoho, HubSpot, ActiveCampaign, Superchat, Make/Zapier, Claude.
- Keine `.DS_Store`, keine `* 2.*`-Kopien einchecken (sind in `.gitignore`).
