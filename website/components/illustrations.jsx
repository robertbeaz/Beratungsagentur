/* ============================================================
   Illustrationen & Mockups im VERDA-Stil
   – reine CSS/SVG-Grafiken in Token-Farben, keine Bilddateien.
   Alle Illustrationen sind dekorativ (aria-hidden).
   ============================================================ */
'use client';

import React from 'react';
import { Icon, KiBadge } from './primitives';

/* ---------- Isometrischer System-Stack (Startseiten-Hero) ----------
   Ebenen von unten nach oben: bestehende Software → Integrations-
   schicht → die Module, die wir aufsetzen. */
const stackModules = [
  { label: 'CRM & Vertrieb', tone: 'bg-forest-600 text-forest-50' },
  { label: 'Automatisierung', tone: 'bg-forest-500 text-forest-50', ki: true },
  { label: 'WhatsApp & Chat', tone: 'bg-forest-400 text-forest-950' },
  { label: 'Newsletter', tone: 'bg-forest-300 text-forest-950' },
  { label: 'Formulare & Funnels', tone: 'bg-forest-200 text-forest-950' },
];

const stackOutcomes = [
  { label: 'Leads' },
  { label: 'Termine' },
  { label: 'Bestände' },
  { label: 'Auswertungen' },
];

export function StackIllustration() {
  return (
    <div aria-hidden="true" className="relative mx-auto h-[360px] w-full max-w-[600px] overflow-visible [perspective:1100px] sm:h-[460px]">
      <div
        className="absolute left-1/2 top-1/2 h-[430px] w-[430px] [transform-style:preserve-3d] [transform:translate(-50%,-46%)_rotateX(55deg)_rotateZ(-45deg)] sm:h-[500px] sm:w-[500px]"
      >
        {/* Ebene 1: Bestehende Software */}
        <div className="absolute inset-[1%] rounded-xl bg-sand-200/90 shadow-lg [transform:translateZ(0px)]">
          <span className="absolute bottom-5 left-6 text-body-sm font-semibold tracking-wide text-sand-600">
            Ihre bestehende Software
          </span>
        </div>

        {/* Ebene 2: Integrationsschicht */}
        <div className="absolute inset-[10%] rounded-xl bg-forest-900 shadow-lg [transform:translateZ(80px)]">
          <span className="absolute bottom-5 left-6 flex items-center gap-2 text-body-sm font-semibold tracking-wide text-forest-100">
            Integration &amp; Automatisierung
            <span className="rounded-xs bg-signal-300 px-1.5 py-0.5 font-data text-[0.6875rem] font-medium text-sand-950">KI</span>
          </span>
        </div>

        {/* Ebene 3: Module & Ergebnisse */}
        <div className="absolute inset-[10%] grid grid-cols-2 gap-5 p-[9%] [transform:translateZ(160px)]">
          <div className="flex flex-col justify-center gap-2.5">
            {stackModules.map((m, i) => (
              <div
                key={m.label}
                className={`flex items-center gap-1.5 rounded-sm px-3.5 py-2 text-body-sm font-semibold shadow-md ${m.tone}`}
                style={{ marginLeft: `${i * 8}px` }}
              >
                {m.label}
                {m.ki && (
                  <span className="rounded-xs bg-signal-300 px-1 py-px font-data text-[0.625rem] font-medium text-sand-950">KI</span>
                )}
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-center gap-2.5 pt-6">
            {stackOutcomes.map((o, i) => (
              <div
                key={o.label}
                className="rounded-sm bg-sand-0 px-3.5 py-2 text-body-sm font-semibold text-forest-900 shadow-md"
                style={{ marginLeft: `${i * 8}px` }}
              >
                {o.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Dashboard-Mockup im Browser-Fenster (CRM-Seite) ----------
   frameless: ohne äußeren Rahmen/Schatten, z. B. innerhalb des Tablet-Bezels. */
function SkeletonBar({ w = 'w-16', tone = 'bg-sand-100' }) {
  return <span className={`block h-2 rounded-pill ${w} ${tone}`} />;
}

export function DashboardMockup({ frameless = false }) {
  const bars = [38, 52, 44, 66, 58, 80, 72];
  return (
    <div aria-hidden="true" className={frameless ? '' : 'mx-auto w-full max-w-xl'}>
      <div className={`overflow-hidden bg-sand-0 ${frameless ? '' : 'rounded-md shadow-lg ring-1 ring-sand-950/10'}`}>
        {/* Fenster-Kopf */}
        <div className="flex items-center gap-2 border-b border-sand-100 bg-sand-50 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-pill bg-sand-200" />
          <span className="h-2.5 w-2.5 rounded-pill bg-sand-200" />
          <span className="h-2.5 w-2.5 rounded-pill bg-sand-200" />
          <span className="ml-3 hidden h-5 w-40 rounded-pill bg-sand-100 sm:block" />
        </div>
        <div className="grid grid-cols-[56px_1fr] sm:grid-cols-[88px_1fr]">
          {/* Sidebar */}
          <div className="space-y-3 border-r border-sand-100 p-3 sm:p-4">
            <span className="block h-6 w-6 rounded-sm bg-forest-900" />
            <SkeletonBar w="w-full" tone="bg-forest-100" />
            <SkeletonBar w="w-4/5" />
            <SkeletonBar w="w-full" />
            <SkeletonBar w="w-3/5" />
            <SkeletonBar w="w-4/5" />
          </div>
          {/* Hauptfläche */}
          <div className="space-y-3 p-3 sm:p-4">
            {/* KPI-Reihe */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { v: '312', l: 'Offene Leads' },
                { v: '38 %', l: 'Abschlussquote' },
                { v: '2,1 Std.', l: 'Antwortzeit' },
              ].map((k) => (
                <div key={k.l} className="rounded-sm bg-sand-50 p-2.5 sm:p-3">
                  <div className="font-data text-body-sm font-medium text-forest-900 sm:text-h4">{k.v}</div>
                  <div className="mt-0.5 text-[0.625rem] text-sand-500 sm:text-data">{k.l}</div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-[1.5fr_1fr] gap-3">
              {/* Balken-Chart */}
              <div className="rounded-sm bg-sand-50 p-3">
                <SkeletonBar w="w-20" tone="bg-sand-200" />
                <div className="mt-3 flex h-20 items-end gap-1.5 sm:h-24">
                  {bars.map((h, i) => (
                    <span
                      key={i}
                      className={`flex-1 rounded-t-xs ${i === bars.length - 2 ? 'bg-forest-500' : 'bg-forest-200'}`}
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
              {/* Donut */}
              <div className="grid place-items-center rounded-sm bg-sand-50 p-3">
                <svg viewBox="0 0 36 36" className="h-20 w-20 sm:h-24 sm:w-24">
                  <circle r="15.9" cx="18" cy="18" fill="none" stroke="#EEEEE5" strokeWidth="4.5" />
                  <circle
                    r="15.9" cx="18" cy="18" fill="none" stroke="#4B7345" strokeWidth="4.5"
                    strokeDasharray="72 28" strokeDashoffset="25" strokeLinecap="round"
                  />
                  <text x="18" y="20.5" textAnchor="middle" className="fill-forest-900 font-data" fontSize="7" fontWeight="500">72%</text>
                </svg>
              </div>
            </div>
            {/* Pipeline-Zeilen */}
            <div className="space-y-2 rounded-sm bg-sand-50 p-3">
              {['w-11/12', 'w-4/5', 'w-2/3'].map((w, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-pill bg-forest-400" />
                  <SkeletonBar w={w} tone="bg-sand-200" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Workflow-Flow (Automatisierungs-Seite) ---------- */
const flowSteps = [
  { icon: 'bell', title: 'Anfrage kommt rein', sub: 'Portal, Website oder WhatsApp' },
  { icon: 'user', title: 'Kontakt landet im CRM', sub: 'automatisch angelegt & zugewiesen' },
  { icon: 'document', title: 'Unterlagen angefordert', sub: 'Entwurf von der KI vorbereitet', ki: true },
  { icon: 'calendar', title: 'Follow-up terminiert', sub: 'nichts bleibt mehr liegen' },
];

export function FlowIllustration() {
  return (
    <div aria-hidden="true" className="mx-auto w-full max-w-md">
      <div className="relative flex flex-col gap-3">
        {/* Verbindungslinie */}
        <span className="absolute bottom-8 left-[27px] top-8 w-px border-l-2 border-dashed border-forest-300" />
        {flowSteps.map((s) => (
          <div key={s.title} className="relative flex items-center gap-4 rounded-sm bg-sand-0 p-4 shadow-md">
            <span className="inline-grid h-11 w-11 shrink-0 place-items-center rounded-sm bg-forest-100 text-forest-700">
              <Icon name={s.icon} size={22} />
            </span>
            <div className="min-w-0">
              <p className="m-0 flex items-center gap-2 font-semibold text-sand-900">
                {s.title} {s.ki && <KiBadge>KI</KiBadge>}
              </p>
              <p className="m-0 text-body-sm text-sand-500">{s.sub}</p>
            </div>
            <span className="ml-auto inline-grid h-6 w-6 shrink-0 place-items-center rounded-pill bg-forest-100 text-forest-700">
              <Icon name="check" size={13} />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Phone-Chat-Mockup (Kommunikations-Seite) ---------- */
const channels = ['WhatsApp', 'Instagram', 'E-Mail', 'Web-Chat'];

export function PhoneChatMockup() {
  return (
    <div aria-hidden="true" className="relative mx-auto w-[270px] py-6">
      {/* Kanal-Chips */}
      <span className="absolute -left-14 top-14 hidden rounded-pill bg-sand-0 px-3.5 py-1.5 text-body-sm font-semibold text-forest-800 shadow-md sm:block">
        WhatsApp
      </span>
      <span className="absolute -right-12 top-32 hidden rounded-pill bg-sand-0 px-3.5 py-1.5 text-body-sm font-semibold text-forest-800 shadow-md sm:block">
        Instagram
      </span>
      <span className="absolute -left-10 bottom-24 hidden rounded-pill bg-sand-0 px-3.5 py-1.5 text-body-sm font-semibold text-forest-800 shadow-md sm:block">
        E-Mail
      </span>

      {/* Phone-Rahmen */}
      <div className="overflow-hidden rounded-[2rem] bg-sand-950 p-1.5 shadow-lg">
        <div className="overflow-hidden rounded-[1.6rem] bg-sand-50">
          {/* Chat-Kopf */}
          <div className="flex items-center gap-3 bg-forest-900 px-4 py-3">
            <span className="grid h-8 w-8 place-items-center rounded-pill bg-forest-100 text-body-sm font-bold text-forest-800">M</span>
            <div className="leading-tight">
              <p className="m-0 text-body-sm font-semibold text-forest-50">Familie Berger</p>
              <p className="m-0 text-[0.6875rem] text-forest-200">über WhatsApp</p>
            </div>
          </div>
          {/* Nachrichten */}
          <div className="space-y-2.5 p-3">
            <div className="max-w-[85%] rounded-md rounded-bl-xs bg-sand-0 p-2.5 text-[0.8125rem] leading-snug text-sand-800 shadow-hairline">
              Guten Abend! Können Sie mir kurz zur Hausratversicherung schreiben?
              <span className="mt-1 block text-right text-[0.625rem] text-sand-400">21:47</span>
            </div>
            <div className="ml-auto max-w-[85%] rounded-md rounded-br-xs bg-forest-100 p-2.5 text-[0.8125rem] leading-snug text-forest-950">
              Gern! Hier finden Sie Ihren Tarif im Überblick – wir melden uns morgen früh persönlich.
              <span className="mt-1.5 block rounded-sm bg-sand-0/80 px-2 py-1 text-center text-[0.75rem] font-semibold text-forest-800">
                📋 Tarif ansehen
              </span>
              <span className="mt-1 block text-right text-[0.625rem] text-sand-500">21:47 ✓✓</span>
            </div>
            <div className="flex justify-end">
              <span className="inline-flex items-center gap-1.5 rounded-pill bg-signal-100 px-2.5 py-1 text-[0.6875rem] font-medium text-forest-800">
                <span className="rounded-xs bg-signal-300 px-1 font-data font-medium text-sand-950">KI</span>
                Automatische Antwort nach Feierabend
              </span>
            </div>
          </div>
          {/* Eingabezeile */}
          <div className="flex items-center gap-2 border-t border-sand-100 px-3 py-2.5">
            <span className="h-8 flex-1 rounded-pill bg-sand-100" />
            <span className="grid h-8 w-8 place-items-center rounded-pill bg-forest-900 text-forest-50">
              <Icon name="arrow-right" size={15} />
            </span>
          </div>
        </div>
      </div>

      {/* Chip unterhalb */}
      <span className="absolute -right-8 bottom-10 hidden rounded-pill bg-sand-0 px-3.5 py-1.5 text-body-sm font-semibold text-forest-800 shadow-md sm:block">
        Web-Chat
      </span>
      {/* Mobile: Chips als Reihe */}
      <div className="mt-4 flex flex-wrap justify-center gap-2 sm:hidden">
        {channels.map((c) => (
          <span key={c} className="rounded-pill bg-sand-0 px-3 py-1 text-body-sm font-semibold text-forest-800 shadow-hairline">{c}</span>
        ))}
      </div>
    </div>
  );
}

/* ---------- Schwebende Hero-Widgets (Startseiten-Hero) ----------
   Chat, Telefon, Dokumente, Terminbuchung, CRM und Prozess als
   Widgets über die gesamte Hero-Fläche verteilt (ab xl) – bewusst
   asymmetrisch. Gestrichelte Verbindungslinien mit Knotenpunkten
   erzählen die Geschichte: Wir integrieren Systeme und Prozesse. */
function FloatCard({ className = '', rot = 0, children }) {
  return (
    <div
      style={{ transform: `rotate(${rot}deg)` }}
      className={`absolute rounded-md bg-sand-0 p-3 text-left shadow-lg ${className}`}
    >
      {children}
    </div>
  );
}

/* Einzelne Icon-Kachel (z. B. nur ein Dokument) */
function FloatTile({ className = '', rot = 0, children }) {
  return (
    <span
      style={{ transform: `rotate(${rot}deg)` }}
      className={`absolute grid h-14 w-14 place-items-center rounded-md bg-sand-0 shadow-lg ${className}`}
    >
      {children}
    </span>
  );
}

/* Durchgezogener Verbindungspfeil (gerade, geschwungen oder mit
   Schleife) – führt von einem Widget zum CRM-Tablet in der Mitte. */
function FlowArrow({ className = '', viewBox, d, tip }) {
  return (
    <svg
      viewBox={viewBox} aria-hidden="true"
      className={`absolute text-sand-500/80 ${className}`}
      fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
    >
      <path d={d} vectorEffect="non-scaling-stroke" />
      <path d={tip} vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

export function HeroWidgets() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden xl:block">
      {/* CRM-Tablet unten mittig, am Hero-Rand angeschnitten */}
      <div className="absolute bottom-0 left-1/2 w-[600px] -translate-x-1/2 translate-y-[58%]">
        <TabletDashboard />
      </div>

      {/* Pfeile: von jedem Widget zum CRM */}
      {/* Chat → CRM (mit Schleife) */}
      <FlowArrow
        className="left-[19%] top-[31%] w-[10%]" viewBox="0 0 160 220"
        d="M10 8 C 60 40, 100 30, 96 70 C 92 104, 40 92, 52 120 C 62 142, 110 160, 146 204"
        tip="M132 202 L146 204 L142 190"
      />
      {/* Dokument-Kachel → CRM */}
      <FlowArrow
        className="left-[18%] top-[55%] w-[9%]" viewBox="0 0 130 110"
        d="M8 8 C 50 18, 60 60, 122 100"
        tip="M108 98 L122 100 L116 86"
      />
      {/* Anruf → CRM */}
      <FlowArrow
        className="left-[16.5%] top-[68%] w-[12%]" viewBox="0 0 170 70"
        d="M8 10 C 60 14, 120 34, 162 60"
        tip="M148 58 L162 60 L156 46"
      />
      {/* Signiertes Dokument → CRM (gerade, wie die Vorlage) */}
      <FlowArrow
        className="bottom-[9%] left-[23%] w-[5%]" viewBox="0 0 120 40"
        d="M6 20 H 112"
        tip="M100 10 L112 20 L100 30"
      />
      {/* Stern → CRM (lange Schleife) */}
      <FlowArrow
        className="right-[19%] top-[15%] w-[8%]" viewBox="0 0 130 300"
        d="M118 10 C 92 44, 122 78, 82 96 C 44 112, 100 140, 76 190 C 60 222, 40 254, 22 284"
        tip="M34 276 L22 284 L28 268"
      />
      {/* CRM-Pipeline → CRM */}
      <FlowArrow
        className="right-[13%] top-[33%] w-[5%]" viewBox="0 0 80 90"
        d="M72 8 C 50 28, 30 50, 12 80"
        tip="M26 74 L12 80 L18 64"
      />
      {/* Terminbuchung → CRM */}
      <FlowArrow
        className="right-[19%] top-[60%] w-[7%]" viewBox="0 0 100 90"
        d="M92 8 C 60 24, 30 50, 10 82"
        tip="M24 78 L10 82 L16 68"
      />
      {/* Prozess → CRM (gerade) */}
      <FlowArrow
        className="bottom-[10%] right-[24%] w-[4.5%]" viewBox="0 0 80 30"
        d="M74 15 H 8"
        tip="M20 5 L8 15 L20 25"
      />

      {/* Dokument-Kachel – zwischen Chat und Anruf */}
      <FloatTile rot={8} className="left-[14%] top-[45%] text-forest-800">
        <Icon name="document" size={24} />
      </FloatTile>

      {/* Bewertungs-Stern – oben rechts, eingerückt */}
      <FloatTile rot={-8} className="right-[13%] top-9 text-sun-400">
        <Icon name="star" size={24} fill="currentColor" />
      </FloatTile>

      {/* Chat – oben links */}
      <FloatCard rot={-5} className="left-[3.5%] top-14 w-56 2xl:left-[5%]">
        <div className="space-y-1.5">
          <div className="max-w-[88%] rounded-sm rounded-bl-xs bg-sand-50 px-2.5 py-1.5 text-[0.75rem] leading-snug text-sand-800">
            Ich möchte einen Schaden melden.
          </div>
          <div className="ml-auto max-w-[88%] rounded-sm rounded-br-xs bg-forest-100 px-2.5 py-1.5 text-[0.75rem] leading-snug text-forest-950">
            Klar! Hier können Sie ihn direkt melden. 📋
          </div>
          <div className="flex justify-end">
            <span className="inline-flex items-center gap-1 rounded-pill bg-signal-100 px-2 py-0.5 text-[0.625rem] font-medium text-forest-800">
              <span className="rounded-xs bg-signal-300 px-1 font-data font-medium text-sand-950">KI</span>
              beantwortet in 2 Min.
            </span>
          </div>
        </div>
      </FloatCard>

      {/* Eingehender Anruf – unteres Drittel links */}
      <FloatCard rot={2} className="left-[1.5%] top-[58%] w-52 2xl:left-[3%]">
        <div className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-pill bg-forest-100 text-forest-700">
            <Icon name="phone" size={17} />
          </span>
          <div className="min-w-0 leading-tight">
            <p className="m-0 truncate text-[0.75rem] font-semibold text-sand-900">Familie Berger ruft an</p>
            <p className="m-0 truncate text-[0.6875rem] text-sand-500">Kundenakte öffnet sich …</p>
          </div>
          <span className="ml-auto h-2.5 w-2.5 shrink-0 rounded-pill bg-forest-500" />
        </div>
      </FloatCard>

      {/* Signiertes Dokument – unten links */}
      <FloatCard rot={-3} className="bottom-12 left-[8%] w-52">
        <div className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-sm bg-sand-100 text-sand-700">
            <Icon name="document" size={17} />
          </span>
          <div className="min-w-0 leading-tight">
            <p className="m-0 text-[0.75rem] font-semibold text-sand-900">Vollmacht.pdf</p>
            <p className="m-0 text-[0.6875rem] text-sand-500">digital signiert</p>
          </div>
          <span className="ml-auto grid h-5 w-5 shrink-0 place-items-center rounded-pill bg-forest-100 text-forest-700">
            <Icon name="check" size={11} />
          </span>
        </div>
      </FloatCard>

      {/* Terminbuchung – Mitte rechts, unterhalb der Pipeline */}
      <FloatCard rot={-4} className="right-[4%] top-[52%] w-52">
        <p className="m-0 mb-2 text-[0.625rem] font-semibold uppercase tracking-widest text-sand-400">
          Terminbuchung
        </p>
        <div className="space-y-1.5">
          <div className="flex items-center justify-between rounded-sm bg-forest-100 px-2.5 py-1.5 text-[0.75rem] font-semibold text-forest-950">
            Do · 14:30 Uhr
            <Icon name="check" size={13} className="text-forest-700" />
          </div>
          <div className="flex items-center justify-between rounded-sm bg-sand-50 px-2.5 py-1.5 text-[0.75rem] text-sand-600">
            Fr · 10:00 Uhr
          </div>
        </div>
      </FloatCard>

      {/* CRM-Pipeline – oben rechts */}
      <FloatCard rot={3} className="right-[2%] top-[18%] w-56 2xl:right-[4%]">
        <div className="mb-2 flex items-center justify-between">
          <p className="m-0 text-[0.625rem] font-semibold uppercase tracking-widest text-sand-400">CRM-Pipeline</p>
          <span className="rounded-xs bg-signal-300 px-1.5 py-0.5 font-data text-[0.625rem] font-medium text-sand-950">
            A · heiß
          </span>
        </div>
        <div className="space-y-1.5">
          {['w-11/12', 'w-3/4', 'w-1/2'].map((w, i) => (
            <div key={w} className="flex items-center gap-2">
              <span className={`h-2 w-2 shrink-0 rounded-pill ${i === 0 ? 'bg-forest-500' : 'bg-forest-300'}`} />
              <span className={`block h-2 rounded-pill bg-sand-100 ${w}`} />
            </div>
          ))}
        </div>
      </FloatCard>

      {/* Automatisierter Prozess – unten rechts, eingerückt */}
      <FloatCard rot={-2} className="bottom-9 right-[13%]">
        <div className="flex items-center gap-1.5">
          <span className="grid h-8 w-8 place-items-center rounded-sm bg-sand-100 text-sand-700">
            <Icon name="bell" size={15} />
          </span>
          <Icon name="arrow-right" size={13} className="text-sand-400" />
          <span className="grid h-8 w-8 place-items-center rounded-sm bg-forest-900 text-forest-100">
            <Icon name="settings" size={15} />
          </span>
          <Icon name="arrow-right" size={13} className="text-sand-400" />
          <span className="grid h-8 w-8 place-items-center rounded-sm bg-forest-100 text-forest-700">
            <Icon name="check" size={15} />
          </span>
        </div>
        <p className="m-0 mt-2 text-[0.6875rem] text-sand-500">Prozess läuft automatisch</p>
      </FloatCard>
    </div>
  );
}

/* Kompakte Icon-Kacheln als Hero-Deko unterhalb von xl */
const heroTileIcons = ['document', 'mic', 'calendar', 'phone', 'chart', 'settings'];

export function HeroIconTiles() {
  return (
    <div aria-hidden="true" className="flex flex-wrap items-center justify-center gap-3">
      {heroTileIcons.map((name, i) => (
        <span
          key={name}
          className={`grid h-12 w-12 place-items-center rounded-sm bg-sand-0 text-forest-800 shadow-md ${
            i % 2 === 0 ? 'rotate-3' : '-rotate-3'
          }`}
        >
          <Icon name={name} size={22} />
        </span>
      ))}
    </div>
  );
}

/* ---------- Tablet mit CRM-Dashboard (Hero) ---------- */
export function TabletDashboard() {
  return (
    <div aria-hidden="true" className="mx-auto w-full max-w-2xl rounded-[1.75rem] bg-sand-950 p-2.5 shadow-lg sm:p-3">
      <div className="overflow-hidden rounded-[1.15rem] bg-sand-0">
        <DashboardMockup frameless />
      </div>
    </div>
  );
}

/* ---------- Kompaktes Chat-Phone (Hero, links) ---------- */
export function MiniChatPhone() {
  return (
    <div aria-hidden="true" className="rounded-[1.9rem] bg-sand-950 p-1.5 shadow-lg">
      <div className="overflow-hidden rounded-[1.5rem] bg-sand-50">
        <div className="flex items-center gap-2 bg-forest-900 px-3.5 py-2.5">
          <span className="grid h-6 w-6 place-items-center rounded-pill bg-forest-100 text-[0.6875rem] font-bold text-forest-800">B</span>
          <div className="leading-tight">
            <p className="m-0 text-[0.75rem] font-semibold text-forest-50">Familie Berger</p>
            <p className="m-0 text-[0.625rem] text-forest-200">über WhatsApp</p>
          </div>
        </div>
        <div className="space-y-2 p-2.5">
          <div className="max-w-[88%] rounded-md rounded-bl-xs bg-sand-0 p-2 text-[0.6875rem] leading-snug text-sand-800 shadow-hairline">
            Was kostet eine KFZ-Versicherung für mich?
          </div>
          <div className="ml-auto max-w-[88%] rounded-md rounded-br-xs bg-forest-100 p-2 text-[0.6875rem] leading-snug text-forest-950">
            Gern! Buchen Sie hier direkt einen Beratungstermin.
            <span className="mt-1 block rounded-xs bg-sand-0/80 px-1.5 py-0.5 text-center text-[0.625rem] font-semibold text-forest-800">
              📅 Termin auswählen
            </span>
          </div>
          <div className="flex justify-end">
            <span className="inline-flex items-center gap-1 rounded-pill bg-signal-100 px-2 py-0.5 text-[0.5625rem] font-medium text-forest-800">
              <span className="rounded-xs bg-signal-300 px-1 font-data font-medium text-sand-950">KI</span>
              Automatische Antwort
            </span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 border-t border-sand-100 px-2.5 py-2">
          <span className="h-6 flex-1 rounded-pill bg-sand-100" />
          <span className="grid h-6 w-6 place-items-center rounded-pill bg-forest-900 text-forest-50">
            <Icon name="arrow-right" size={11} />
          </span>
        </div>
      </div>
    </div>
  );
}

/* ---------- Kompaktes Benachrichtigungs-Phone (Hero, rechts) ---------- */
const notifications = [
  { icon: 'bell', title: 'Neuer Lead', sub: 'Portal-Anfrage · vor 2 Min.' },
  { icon: 'calendar', title: 'Termin bestätigt', sub: 'Familie Berger · Do 14:00' },
  { icon: 'document', title: 'Unterlagen vollständig', sub: 'automatisch geprüft', ki: true },
];

export function MiniNotifyPhone() {
  return (
    <div aria-hidden="true" className="rounded-[1.9rem] bg-sand-950 p-1.5 shadow-lg">
      <div className="overflow-hidden rounded-[1.5rem] bg-sand-50">
        <div className="flex items-center justify-between bg-forest-900 px-3.5 py-2.5">
          <p className="m-0 text-[0.75rem] font-semibold text-forest-50">Heute</p>
          <span className="font-data text-[0.625rem] font-medium text-forest-200">09:41</span>
        </div>
        <div className="space-y-2 p-2.5">
          {notifications.map((n) => (
            <div key={n.title} className="flex items-center gap-2 rounded-md bg-sand-0 p-2 shadow-hairline">
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-sm bg-forest-100 text-forest-700">
                <Icon name={n.icon} size={14} />
              </span>
              <div className="min-w-0 leading-tight">
                <p className="m-0 flex items-center gap-1 text-[0.6875rem] font-semibold text-sand-900">
                  {n.title}
                  {n.ki && <span className="rounded-xs bg-signal-300 px-1 font-data text-[0.5625rem] font-medium text-sand-950">KI</span>}
                </p>
                <p className="m-0 text-[0.625rem] text-sand-500">{n.sub}</p>
              </div>
            </div>
          ))}
          <div className="rounded-md bg-forest-900 p-2 text-center text-[0.6875rem] font-semibold text-forest-50">
            Alles im CRM dokumentiert ✓
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Integrations-Illustration (Dokument → Software) ---------- */
export function IntegrationIllustration() {
  return (
    <div aria-hidden="true" className="mt-auto flex items-end gap-4 pt-10 sm:gap-6">
      {/* Dokument */}
      <div className="mb-10 grid h-20 w-16 shrink-0 place-items-center rounded-sm bg-sand-0 shadow-md">
        <Icon name="signature" size={30} className="text-sand-700" />
      </div>
      {/* Pfeil */}
      <div className="relative mb-20 flex-1">
        <span className="block border-t-2 border-dashed border-sand-400" />
        <Icon name="arrow-right" size={18} className="absolute -right-1 -top-[9px] text-sand-400" />
      </div>
      {/* Monitor mit Software-Skeleton */}
      <div className="w-[52%] shrink-0 sm:w-[48%]">
        <div className="rounded-md bg-sand-0 p-3 shadow-md ring-1 ring-sand-950/10">
          <div className="mb-2 flex gap-1">
            <span className="h-1.5 w-6 rounded-pill bg-sand-200" />
            <span className="h-1.5 w-6 rounded-pill bg-sand-100" />
            <span className="h-1.5 w-6 rounded-pill bg-sand-100" />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[0, 1, 2].map((col) => (
              <div key={col} className="space-y-1.5 rounded-xs bg-sand-50 p-2">
                {[...Array(6)].map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1.5 rounded-pill ${col === 1 && i === 2 ? 'bg-forest-500' : 'bg-sand-200'} ${i % 3 === 2 ? 'w-2/3' : 'w-full'}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto h-9 w-14 bg-forest-200" />
        <div className="mx-auto h-2.5 w-24 rounded-sm bg-forest-300" />
      </div>
    </div>
  );
}

/* ---------- Drei-Pakete-Illustration (Leistungsseite-Hero) ----------
   Drei Karten – ein Modul je Paket – stehen auf einer gemeinsamen
   Basisleiste: das „digitale Betriebssystem" der Agentur. Die mittlere
   Karte (Kundenmagnet) ist leicht angehoben, um Wachstum zu betonen. */
const packagePillars = [
  {
    icon: 'chart',
    label: 'Digitale Agentur',
    tone: 'bg-forest-900 text-forest-100',
    lift: false,
  },
  {
    icon: 'trend',
    label: 'Kundenmagnet',
    tone: 'bg-forest-600 text-forest-50',
    lift: true,
  },
  {
    icon: 'settings',
    label: 'KI-Assistenz',
    tone: 'bg-forest-900 text-forest-100',
    lift: false,
    ki: true,
  },
];

function PillarVisual({ index }) {
  if (index === 0) {
    return (
      <div className="mt-4 space-y-1.5">
        <span className="block h-1.5 w-full rounded-pill bg-sand-100" />
        <span className="block h-1.5 w-3/4 rounded-pill bg-sand-100" />
        <div className="mt-2 flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-pill bg-forest-500" />
          <span className="block h-1.5 w-2/3 rounded-pill bg-sand-200" />
        </div>
      </div>
    );
  }
  if (index === 1) {
    return (
      <div className="mt-4">
        <svg viewBox="0 0 100 32" className="h-8 w-full text-forest-500" aria-hidden="true">
          <path d="M2 26 C 20 28, 30 10, 45 16 C 60 22, 68 4, 98 6" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
        <span className="mt-1.5 inline-flex items-center rounded-pill bg-forest-100 px-2 py-0.5 text-[0.625rem] font-semibold text-forest-800">
          +3× Termine
        </span>
      </div>
    );
  }
  return (
    <div className="mt-4 space-y-1.5">
      <div className="max-w-[85%] rounded-sm rounded-bl-xs bg-sand-100 px-2 py-1 text-[0.625rem] leading-snug text-sand-700">
        Was kostet Tarif Plus?
      </div>
      <div className="ml-auto flex max-w-[85%] items-center gap-1 rounded-sm rounded-br-xs bg-forest-700 px-2 py-1 text-[0.625rem] leading-snug text-forest-50">
        <KiBadge>KI</KiBadge> Antwort in Sekunden
      </div>
    </div>
  );
}

export function PackagesIllustration() {
  return (
    <div aria-hidden="true" className="mx-auto grid w-full max-w-lg grid-cols-3 items-end gap-4 pt-6">
      {packagePillars.map((p, i) => (
        <div key={p.label} className={p.lift ? '-translate-y-4' : ''}>
          <div className={`rounded-md p-4 shadow-lg sm:p-5 ${p.tone}`}>
            <span className="inline-grid h-9 w-9 place-items-center rounded-sm bg-sand-0/15">
              <Icon name={p.icon} size={18} />
            </span>
            <PillarVisual index={i} />
          </div>
          <p className="m-0 mt-3 text-center text-[0.75rem] font-semibold leading-snug text-sand-800">
            {p.label}
          </p>
        </div>
      ))}
      {/* Gemeinsame Basisleiste – das „Betriebssystem", auf dem alle drei Pakete laufen */}
      <div className="col-span-3 mt-1 h-2 rounded-pill bg-forest-200" />
    </div>
  );
}
