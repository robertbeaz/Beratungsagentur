# VERDA Design System · v1.0

Token-basiertes Design System für **Website + Portal/App-UI**, adaptiert vom Nelly-Stil
(warme Sand-Neutrale, tiefes Markengrün, Butter-Gelb als Handlungsakzent, Sage-Flächen,
Pill-Buttons, Hairline-Karten, KI-Lime-Badge).

> **„VERDA" ist ein Arbeitsname.** Name, Farben und Schriften sind zentral über die
> Tokens austauschbar – siehe [Rebranding](#rebranding-in-3-schritten).

## Struktur

```
verda-design-system/
├── styleguide.html          ← Lebender Styleguide (im Browser öffnen, kein Build nötig)
├── README.md
├── tailwind.config.js       ← Tailwind-Theme, gemappt auf die Tokens
├── tokens/
│   ├── design-tokens.json   ← Quelle der Wahrheit (Style-Dictionary-/W3C-Format)
│   └── tokens.css           ← CSS Custom Properties + Basis-Styles
└── react/
    ├── index.js
    ├── primitives.jsx       ← Button, Badge, Formulare, Card, Tabs, Accordion, Modal, Icon
    ├── sections.jsx         ← Navbar, Hero, Stats, Showcase, CTA, Testimonial, FAQ, Footer
    └── portal.jsx           ← AppShell, KPI-Card, DataTable, Toast, EmptyState, ChartCard
```

## Schnellstart

**1 · Nur CSS (jedes Projekt):**
```html
<link href="https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@400..900&family=Hanken+Grotesk:wght@300..800&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="tokens/tokens.css">
```
Danach stehen alle Variablen bereit: `var(--forest-900)`, `var(--radius-xl)`, `var(--dur-fast)` …

**2 · Tailwind (Next.js / Vite):**
`tailwind.config.js` ins Projekt übernehmen (oder per `presets` einbinden). Dann:
```jsx
<button className="bg-forest-900 text-forest-50 rounded-pill h-12 px-6 font-semibold
                   hover:bg-forest-950 transition-all duration-fast ease-standard">
  Gespräch vereinbaren
</button>
```

**3 · React-Komponenten:**
```jsx
import { Button, Hero, AppShell, DataTable } from './react';

<Hero
  title="Die Praxis läuft. Verwaltung läuft mit."
  lead="Termine, Dokumente und Abrechnung in einem ruhigen System."
  secondary="Produkt ansehen"
/>
```
Die Komponenten setzen die Tailwind-Konfiguration dieses Systems voraus.

## Kernregeln (Kurzfassung)

| Thema | Regel |
|---|---|
| Farben | Sand trägt, Forest spricht, Sun handelt. **Max. 1 gelber Button pro Ansicht.** |
| Signal-Lime | Nur für KI-/Neu-Kennzeichnung – nie für Buttons oder Flächen. |
| Typografie | Schibsted Grotesk 500 für Headlines, Hanken Grotesk für Text/UI, IBM Plex Mono für Zahlen. |
| Radien | 8px durchgängig – Buttons und Cards teilen sich denselben Wert. 12px nur für große Flächen (Dropdown, Modal). Pill ausschließlich für Tags, Avatare, Schalter. |
| Karten | Hairline-Kontur statt Schatten; md/lg-Schatten nur für schwebende Ebenen. |
| Motion | 200ms Interaktion, 700ms Scroll-Reveal, `ease-out(.16,1,.3,1)`, `prefers-reduced-motion` respektieren. |
| Dunkle Sektionen | `data-theme="brand"` auf die Sektion setzen – semantische Tokens schalten um. |

## Rebranding in 3 Schritten

1. **Name:** `Wordmark`-Komponente bzw. Wortmarke im Styleguide ändern.
2. **Farben:** Hex-Werte in `tokens/tokens.css`, `tokens/design-tokens.json` und
   `tailwind.config.js` ersetzen – die Struktur (Skalen + semantische Rollen) bleibt.
3. **Schrift (optional):** Display-Font in den drei Dateien tauschen.

Alle Komponenten nutzen ausschließlich Token-Referenzen und ziehen automatisch nach.

## Schrift-Hinweis

Die Design-Vorlage (getnelly.de) nutzt die kommerzielle **ES Klarheit Grotesk**
([extraset.ch](https://www.extraset.ch)). Dieses System verwendet freie Alternativen mit
verwandtem Charakter – **Schibsted Grotesk**, **Hanken Grotesk**, **IBM Plex Mono**
(Google Fonts, SIL Open Font License). Bei Lizenzierung des Originals genügt ein Tausch
in den Font-Tokens.

## Chart-Farben (Diagramm-Bibliotheken)

```js
import { chartColors } from './react/portal';
// ['#1D3A22', '#64925C', '#AFC98D', '#F5EA4A', '#4181A6', '#DCDCD2']
```
