/* ============================================================
   Feature-Bento (Nelly-Muster) für Leistungs-Detailseiten
   – zentrierte Headline + Karten-Grid, jede Karte mit eigener
   Grafik. Texte kommen aus site.js (service.features),
   die Visuals werden hier über den key zugeordnet.
   ============================================================ */
'use client';

import React from 'react';
import { Icon, KiBadge } from './primitives';
import { Reveal } from './sections';

/* ---------- Karten-Hülle ---------- */
const cardTones = {
  surface: 'bg-sand-0 shadow-hairline',
  sage: 'bg-forest-100',
  subtle: 'bg-sand-50',
};

function BentoCard({ tone = 'surface', item, children }) {
  return (
    <div className={`flex h-full flex-col overflow-hidden rounded-md p-8 md:p-10 ${cardTones[tone]}`}>
      <h3 className="font-display text-h3 text-sand-900">{item.title}</h3>
      <p className="mt-3 max-w-lg text-sand-600">{item.text}</p>
      <div aria-hidden="true" className="mt-8 flex flex-1 flex-col justify-end">
        {children}
      </div>
    </div>
  );
}

/* ---------- Visual: Chips-Wolke (Zentrale Kundenverwaltung) ---------- */
const chipRows = [
  { offset: '-ml-12', items: ['Verträge & Policen', 'Leads aus Portalen', 'E-Mail-Verlauf', 'Termine & Wiedervorlagen'] },
  { offset: '-ml-4', items: ['Dokumente & Uploads', 'Beratungsprotokolle', 'Telefonnotizen', 'Angebote'] },
  { offset: '-ml-16', items: ['Baufinanzierungs-Fälle', 'Objekte & Exposés', 'Newsletter-Status', 'Familien & Verbünde'] },
];

function ChipsVisual() {
  return (
    <div className="-mx-8 space-y-2.5 overflow-hidden md:-mx-10">
      {chipRows.map((row) => (
        <div key={row.offset} className={`flex gap-2.5 ${row.offset}`}>
          {row.items.map((c) => (
            <span
              key={c}
              className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-pill bg-forest-100 py-1.5 pl-3.5 pr-2 text-body-sm font-semibold text-forest-900"
            >
              {c}
              <span className="grid h-[18px] w-[18px] place-items-center rounded-pill bg-forest-200 text-forest-800">
                <Icon name="check" size={10} strokeWidth="2.5" />
              </span>
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

/* ---------- Visual: Benachrichtigungen (Wiedervorlagen) ---------- */
const reminders = [
  { icon: 'bell', title: 'Wiedervorlage', time: 'jetzt', text: 'KFZ-Vertrag von Familie Berger läuft in 30 Tagen aus.' },
  { icon: 'mic', title: 'Rückruf zugesagt', time: '14:00', text: 'Herr Schmidt wartet auf das Angebot zur Baufinanzierung.' },
  { icon: 'document', title: 'Unterlagen offen', time: 'morgen', text: 'Selbstauskunft von Familie Weber noch nicht eingegangen.' },
];

function RemindersVisual() {
  return (
    <div className="space-y-2.5">
      {reminders.map((r, i) => (
        <div key={r.title} className="flex gap-3 rounded-md bg-sand-0 p-3 shadow-hairline" style={{ marginLeft: `${i * 10}px` }}>
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-sm bg-forest-900 text-forest-50">
            <Icon name={r.icon} size={16} />
          </span>
          <div className="min-w-0 leading-snug">
            <p className="m-0 flex items-baseline justify-between gap-3 text-[0.8125rem] font-semibold text-sand-900">
              {r.title}
              <span className="shrink-0 text-[0.6875rem] font-normal text-sand-400">{r.time}</span>
            </p>
            <p className="m-0 mt-0.5 text-[0.75rem] text-sand-500">{r.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---------- Visual: Terminbuchung (Kalender) ---------- */
const slots = [
  { day: 'Donnerstag', date: '14', month: 'März', time: '14:30 Uhr', active: true },
  { day: 'Donnerstag', date: '14', month: 'März', time: '16:30 Uhr', active: false },
];

function CalendarVisual() {
  return (
    <div className="mx-auto w-full max-w-xs">
      <p className="m-0 mb-3 text-center text-body-sm font-semibold text-sand-500">Wunschtermin auswählen</p>
      <div className="space-y-2.5">
        {slots.map((s) => (
          <div
            key={s.time}
            className={`flex items-stretch rounded-md bg-sand-0 shadow-hairline ${s.active ? 'ring-2 ring-forest-600' : ''}`}
          >
            <div className="flex flex-col items-center justify-center border-r border-sand-100 px-5 py-3 leading-tight">
              <span className="text-[0.6875rem] text-sand-500">{s.day}</span>
              <span className="font-display text-h3 font-medium text-sand-900">{s.date}</span>
              <span className="text-[0.6875rem] text-sand-500">{s.month}</span>
            </div>
            <div className="grid flex-1 place-items-center font-display text-h4 font-medium text-sand-900">
              {s.time}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Visual: Signatur-Block (Digitale Signaturen) ---------- */
function SignatureVisual() {
  return (
    <div className="mx-auto w-full max-w-sm">
      <div className="border-b border-sand-300 pb-1 text-sand-800">Musterstadt, den 19.06.2026</div>
      <p className="m-0 mt-1.5 text-[0.6875rem] text-sand-400">Ort, Datum</p>
      <div className="mt-7 rounded-l-sm border-l-2 border-forest-300 pl-5">
        <p className="m-0 text-body-sm text-sand-500">Elektronisch unterschrieben von:</p>
        <svg viewBox="0 0 220 56" className="mt-1 h-14 w-48 text-sand-900">
          <path
            d="M10 40 C 20 8, 32 6, 36 20 C 40 34, 28 46, 24 38 C 20 30, 42 22, 58 26 C 68 29, 62 42, 72 38 C 82 34, 88 22, 98 28 C 106 33, 116 28, 128 24 C 144 19, 156 34, 174 27 C 186 22, 196 26, 210 22"
            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
          />
        </svg>
        <div className="border-b border-sand-300 pb-1 font-data text-[0.6875rem] text-sand-400">
          a5226ccd-ab98-4c6b-ac1f-30fcd
        </div>
        <p className="m-0 mt-1.5 text-[0.6875rem] text-sand-400">Unterschrift Kunde</p>
      </div>
    </div>
  );
}

/* ---------- Visual: Lead-Liste (Qualifizierung) ---------- */
const leads = [
  { initial: 'B', name: 'Familie Berger', sub: 'Baufinanzierung · Unterlagen vollständig', badge: 'A · heiß', badgeTone: 'bg-signal-300 text-sand-950' },
  { initial: 'S', name: 'Herr Schmidt', sub: 'PKV-Wechsel · Termin steht aus', badge: 'B · warm', badgeTone: 'bg-sun-300 text-sand-900' },
  { initial: 'W', name: 'Frau Weber', sub: 'Suchkundin · liest den Newsletter', badge: 'C · später', badgeTone: 'bg-sand-200 text-sand-700' },
];

function LeadsVisual() {
  return (
    <div className="space-y-2.5">
      {leads.map((l) => (
        <div key={l.name} className="flex items-center gap-3 rounded-md bg-sand-50 p-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-pill bg-forest-100 text-body-sm font-bold text-forest-800">
            {l.initial}
          </span>
          <div className="min-w-0 leading-snug">
            <p className="m-0 truncate text-[0.8125rem] font-semibold text-sand-900">{l.name}</p>
            <p className="m-0 truncate text-[0.75rem] text-sand-500">{l.sub}</p>
          </div>
          <span className={`ml-auto shrink-0 rounded-xs px-2 py-1 font-data text-[0.6875rem] font-medium ${l.badgeTone}`}>
            {l.badge}
          </span>
        </div>
      ))}
    </div>
  );
}

/* ---------- Visual: Anruf-Popup (Telefonanlage) ---------- */
function PhoneVisual() {
  return (
    <div>
      <div className="rounded-md bg-sand-0 p-4 shadow-md">
        <p className="m-0 text-[0.6875rem] font-semibold uppercase tracking-widest text-sand-400">
          Eingehender Anruf
        </p>
        <div className="mt-3 flex items-center gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-pill bg-forest-100 font-bold text-forest-800">B</span>
          <div className="leading-snug">
            <p className="m-0 font-semibold text-sand-900">Familie Berger</p>
            <p className="m-0 text-[0.75rem] text-sand-500">Bestandskunde · 2 offene Vorgänge</p>
          </div>
        </div>
        <div className="mt-4 flex gap-2">
          <span className="grid flex-1 place-items-center rounded-sm bg-forest-600 py-2 text-body-sm font-semibold text-forest-50">
            Annehmen
          </span>
          <span className="grid flex-1 place-items-center rounded-sm bg-sand-100 py-2 text-body-sm font-semibold text-sand-700">
            Akte öffnen
          </span>
        </div>
      </div>
      <div className="mt-3 flex justify-center">
        <span className="inline-flex items-center gap-1.5 rounded-pill bg-forest-200/60 px-3 py-1 text-[0.75rem] font-medium text-forest-900">
          <Icon name="check" size={13} />
          Wird automatisch in der Kundenakte protokolliert
        </span>
      </div>
    </div>
  );
}

/* ---------- Visual: Zeitlinie (Aktivitäten) ---------- */
const timeline = [
  { icon: 'mic', title: 'Anruf · 12 Min.', time: 'Heute, 09:12', sub: 'Notiz automatisch hinterlegt' },
  { icon: 'document', title: 'Angebot versendet', time: 'Gestern, 16:40', sub: 'Tarifvergleich als PDF' },
  { icon: 'calendar', title: 'Termin vereinbart', time: 'Di, 11:20', sub: 'Beratung am 14. März, 14:30 Uhr' },
  { icon: 'signature', title: 'Vollmacht signiert', time: 'Mo, 08:05', sub: 'digital unterschrieben' },
];

function TimelineVisual() {
  return (
    <div className="relative flex flex-col gap-2.5">
      <span className="absolute bottom-8 left-[23px] top-8 w-px border-l-2 border-dashed border-forest-300" />
      {timeline.map((t) => (
        <div key={t.title} className="relative flex items-center gap-3 rounded-md bg-sand-0 p-3 shadow-hairline">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-sm bg-forest-100 text-forest-700">
            <Icon name={t.icon} size={17} />
          </span>
          <div className="min-w-0 leading-snug">
            <p className="m-0 truncate text-[0.8125rem] font-semibold text-sand-900">{t.title}</p>
            <p className="m-0 truncate text-[0.75rem] text-sand-500">{t.sub}</p>
          </div>
          <span className="ml-auto shrink-0 text-[0.6875rem] text-sand-400">{t.time}</span>
        </div>
      ))}
    </div>
  );
}

/* ---------- Visual: Checkliste (DSGVO) ---------- */
const dsgvoChecks = [
  'Einwilligungen & Opt-ins dokumentiert',
  'AV-Verträge zentral hinterlegt',
  'Auskunfts- & Löschfristen überwacht',
  'Hosting in der EU',
];

function DsgvoVisual() {
  return (
    <div className="grid gap-2.5 sm:grid-cols-2">
      {dsgvoChecks.map((c) => (
        <div key={c} className="flex items-center gap-3 rounded-sm bg-sand-50 p-3.5">
          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-pill bg-forest-100 text-forest-700">
            <Icon name="check" size={14} />
          </span>
          <p className="m-0 text-[0.8125rem] font-medium text-sand-800">{c}</p>
        </div>
      ))}
    </div>
  );
}

/* ============================================================
   Visuals für Marketing & Kundenkommunikation
   ============================================================ */

/* ---------- Visual: WhatsApp-Konversation ---------- */
function WhatsAppVisual() {
  return (
    <div className="mx-auto w-full max-w-lg space-y-2.5">
      <div className="max-w-[78%] rounded-md rounded-bl-xs bg-sand-50 p-3 text-[0.8125rem] leading-snug text-sand-800">
        Guten Abend, ich möchte einen Schaden an meinem Auto melden. Was brauchen Sie von mir?
        <span className="mt-1 block text-right text-[0.625rem] text-sand-400">18:42</span>
      </div>
      <div className="ml-auto max-w-[78%] rounded-md rounded-br-xs bg-forest-100 p-3 text-[0.8125rem] leading-snug text-forest-950">
        Das tut uns leid! Hier können Sie den Schaden direkt melden – dauert keine drei Minuten.
        <span className="mt-1.5 block rounded-sm bg-sand-0/80 px-2 py-1.5 text-center text-[0.75rem] font-semibold text-forest-800">
          📄 Schadenformular öffnen
        </span>
        <span className="mt-1 block text-right text-[0.625rem] text-sand-500">18:42 ✓✓</span>
      </div>
      <div className="flex justify-end">
        <span className="inline-flex items-center gap-1.5 rounded-pill bg-signal-100 px-2.5 py-1 text-[0.6875rem] font-medium text-forest-800">
          <KiBadge>KI</KiBadge>
          Automatische Antwort nach Feierabend
        </span>
      </div>
    </div>
  );
}

/* ---------- Visual: Google-Bewertungen ---------- */
function ReviewsVisual() {
  return (
    <div>
      <div className="flex items-center gap-4 rounded-md bg-sand-0 p-4 shadow-hairline">
        <span className="font-display text-h1 font-medium text-sand-900">4,9</span>
        <div className="leading-snug">
          <span className="flex gap-0.5 text-sun-400">
            {[...Array(5)].map((_, i) => (
              <Icon key={i} name="star" size={16} fill="currentColor" />
            ))}
          </span>
          <p className="m-0 mt-1 text-[0.75rem] text-sand-500">132 Bewertungen auf Google</p>
        </div>
      </div>
      <div className="ml-5 mt-2.5 flex gap-3 rounded-md bg-sand-0 p-3 shadow-hairline">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-pill bg-forest-100 text-body-sm font-bold text-forest-800">B</span>
        <div className="min-w-0 leading-snug">
          <p className="m-0 flex items-baseline justify-between gap-3 text-[0.8125rem] font-semibold text-sand-900">
            Neue 5-Sterne-Bewertung
            <span className="shrink-0 text-[0.6875rem] font-normal text-sand-400">jetzt</span>
          </p>
          <p className="m-0 mt-0.5 text-[0.75rem] text-sand-500">„Schnelle Hilfe beim Schaden – sehr zu empfehlen!“</p>
        </div>
      </div>
      <div className="mt-3 flex justify-center">
        <span className="inline-flex items-center gap-1.5 rounded-pill bg-forest-200/60 px-3 py-1 text-[0.75rem] font-medium text-forest-900">
          <Icon name="check" size={13} />
          Bewertungsanfrage automatisch versendet
        </span>
      </div>
    </div>
  );
}

/* ---------- Visual: Newsletter ---------- */
function NewsletterVisual() {
  return (
    <div className="space-y-2.5">
      <div className="rounded-md bg-sand-0 p-3.5 shadow-hairline">
        <div className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-sm bg-forest-900 text-[0.6875rem] font-bold text-forest-50">V</span>
          <div className="min-w-0 leading-tight">
            <p className="m-0 truncate text-[0.8125rem] font-semibold text-sand-900">Ihr Monats-Update</p>
            <p className="m-0 text-[0.75rem] text-sand-500">an 1.240 Empfänger</p>
          </div>
        </div>
        <p className="m-0 mt-2.5 text-[0.8125rem] font-medium text-sand-800">
          Zinswende: Was das für Ihre Anschlussfinanzierung bedeutet
        </p>
        <span className="mt-2.5 block h-2 w-11/12 rounded-pill bg-sand-100" />
        <span className="mt-1.5 block h-2 w-3/5 rounded-pill bg-sand-100" />
      </div>
      <div className="grid grid-cols-2 gap-2.5">
        {[
          { v: '58 %', l: 'Öffnungsrate' },
          { v: '24', l: 'Terminanfragen' },
        ].map((s) => (
          <div key={s.l} className="rounded-md bg-sand-0 p-3 text-center shadow-hairline">
            <div className="font-data text-h4 font-medium text-forest-900">{s.v}</div>
            <div className="mt-0.5 text-[0.6875rem] text-sand-500">{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Visual: Lead-Funnel ---------- */
const funnelSteps = [
  { value: '1.000', label: 'sehen die Anzeige', width: '100%' },
  { value: '480', label: 'besuchen die Landingpage', width: '62%' },
  { value: '96', label: 'füllen das Formular aus', width: '36%' },
  { value: '31', label: 'buchen einen Termin', width: '20%', highlight: true },
];

function FunnelVisual() {
  return (
    <div className="grid gap-2.5 sm:grid-cols-4">
      {funnelSteps.map((s) => (
        <div key={s.label} className={`rounded-md p-3.5 ${s.highlight ? 'bg-forest-100' : 'bg-sand-50'}`}>
          <div className="font-data text-h4 font-medium text-forest-900">{s.value}</div>
          <p className="m-0 mt-0.5 text-[0.75rem] leading-snug text-sand-500">{s.label}</p>
          <span
            className={`mt-3 block h-1.5 rounded-pill ${s.highlight ? 'bg-forest-600' : 'bg-forest-300'}`}
            style={{ width: s.width }}
          />
        </div>
      ))}
    </div>
  );
}

/* ---------- Visual: Website / Landingpage (Browser-Skeleton) ---------- */
function WebsiteVisual() {
  return (
    <div className="mx-auto w-full max-w-lg overflow-hidden rounded-md bg-sand-0 shadow-md ring-1 ring-sand-950/10">
      <div className="flex items-center gap-2 border-b border-sand-100 bg-sand-50 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-pill bg-sand-200" />
        <span className="h-2.5 w-2.5 rounded-pill bg-sand-200" />
        <span className="h-2.5 w-2.5 rounded-pill bg-sand-200" />
        <span className="ml-3 h-5 w-44 rounded-pill bg-sand-100" />
      </div>
      <div className="px-6 py-7 text-center">
        <span className="mx-auto block h-3.5 w-3/4 rounded-pill bg-sand-200" />
        <span className="mx-auto mt-2.5 block h-2 w-1/2 rounded-pill bg-sand-100" />
        <span className="mx-auto mt-4 block h-8 w-36 rounded-sm bg-sun-300" />
        <div className="mt-6 grid grid-cols-3 gap-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="space-y-1.5 rounded-sm bg-sand-50 p-3">
              <span className="mx-auto block h-6 w-6 rounded-sm bg-forest-200" />
              <span className="block h-1.5 w-full rounded-pill bg-sand-200" />
              <span className="block h-1.5 w-2/3 rounded-pill bg-sand-200" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- Visual: Digitales Formular (Schadenmeldung) ---------- */
function FormVisual() {
  return (
    <div>
      <div className="rounded-md bg-sand-0 p-4 shadow-hairline">
        <div className="flex items-baseline justify-between">
          <p className="m-0 text-[0.8125rem] font-semibold text-sand-900">Schadenmeldung</p>
          <span className="text-[0.6875rem] text-sand-400">Schritt 2 von 3</span>
        </div>
        <div className="mt-2 flex gap-1">
          <span className="h-1 flex-1 rounded-pill bg-forest-500" />
          <span className="h-1 flex-1 rounded-pill bg-forest-500" />
          <span className="h-1 flex-1 rounded-pill bg-sand-100" />
        </div>
        <div className="mt-3 space-y-2">
          {[
            { l: 'Vertragsnummer', v: 'KV-2024-0815' },
            { l: 'Schadentag', v: '28.06.2026' },
          ].map((f) => (
            <div key={f.l} className="rounded-sm bg-sand-50 px-3 py-2 leading-tight">
              <span className="block text-[0.625rem] text-sand-400">{f.l}</span>
              <span className="block text-[0.8125rem] font-medium text-sand-800">{f.v}</span>
            </div>
          ))}
        </div>
        <div className="mt-2 flex items-center justify-center gap-2 rounded-sm border-2 border-dashed border-sand-200 p-3 text-[0.75rem] text-sand-500">
          <Icon name="document" size={15} />
          Fotos vom Schaden hochladen
        </div>
        <div className="mt-3 grid place-items-center rounded-sm bg-forest-900 py-2 text-body-sm font-semibold text-forest-50">
          Absenden
        </div>
      </div>
      <div className="mt-3 flex justify-center">
        <span className="inline-flex items-center gap-1.5 rounded-pill bg-forest-200/60 px-3 py-1 text-[0.75rem] font-medium text-forest-900">
          <Icon name="check" size={13} />
          Landet direkt im CRM – ohne Abtippen
        </span>
      </div>
    </div>
  );
}

/* ============================================================
   Visuals für Automatisierung & KI
   ============================================================ */

/* ---------- Visual: Chatbot-Konversation ---------- */
const chatbotChannels = ['WhatsApp', 'Website-Chat', 'Instagram'];

function ChatbotVisual() {
  return (
    <div className="mx-auto w-full max-w-lg">
      <div className="space-y-2.5">
        <div className="max-w-[78%] rounded-md rounded-bl-xs bg-sand-50 p-3 text-[0.8125rem] leading-snug text-sand-800">
          Hallo! Ich bin umgezogen – wie ändere ich meine Adresse?
          <span className="mt-1 block text-right text-[0.625rem] text-sand-400">20:15</span>
        </div>
        <div className="ml-auto max-w-[78%] rounded-md rounded-br-xs bg-forest-100 p-3 text-[0.8125rem] leading-snug text-forest-950">
          Gern! Hier können Sie die neue Adresse direkt hinterlegen – die Bestätigung kommt automatisch per E-Mail.
          <span className="mt-1.5 block rounded-sm bg-sand-0/80 px-2 py-1.5 text-center text-[0.75rem] font-semibold text-forest-800">
            🏠 Adresse jetzt ändern
          </span>
          <span className="mt-1 block text-right text-[0.625rem] text-sand-500">20:15 ✓✓</span>
        </div>
        <div className="flex justify-end">
          <span className="inline-flex items-center gap-1.5 rounded-pill bg-signal-100 px-2.5 py-1 text-[0.6875rem] font-medium text-forest-800">
            <KiBadge>KI</KiBadge>
            Vom Chatbot beantwortet – rund um die Uhr
          </span>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap justify-center gap-2">
        {chatbotChannels.map((c) => (
          <span key={c} className="rounded-pill bg-sand-50 px-3 py-1 text-[0.75rem] font-semibold text-forest-800 shadow-hairline">
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------- Visual: Wissensdatenbank (Frage → belegte Antwort) ---------- */
function KnowledgeVisual() {
  return (
    <div>
      <div className="flex items-center gap-2.5 rounded-md bg-sand-0 p-3 shadow-hairline">
        <Icon name="search" size={16} className="shrink-0 text-sand-400" />
        <p className="m-0 truncate text-[0.8125rem] text-sand-700">Was gilt bei Elementarschäden im Tarif Wohnen Plus?</p>
      </div>
      <div className="ml-4 mt-2.5 rounded-md bg-sand-0 p-3.5 shadow-hairline">
        <p className="m-0 flex items-center gap-1.5 text-[0.6875rem] font-semibold uppercase tracking-widest text-sand-400">
          <KiBadge>KI</KiBadge> Antwort aus Ihrer Wissensdatenbank
        </p>
        <p className="m-0 mt-2 text-[0.8125rem] leading-snug text-sand-700">
          Elementarschäden sind nur mit dem Zusatzbaustein versichert. Für die Schadenmeldung gilt Checkliste 4 – Fotos und Kaufbelege anfordern.
        </p>
        <div className="mt-2.5 flex flex-wrap gap-1.5">
          {['Tarifhandbuch, S. 12', 'Prozess Schadenmeldung'].map((s) => (
            <span key={s} className="inline-flex items-center gap-1 rounded-xs bg-sand-50 px-1.5 py-0.5 text-[0.6875rem] text-sand-600">
              <Icon name="document" size={11} />
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- Visual: Telefonbot (Inbound & Outbound) ---------- */
const phoneBotCalls = [
  {
    tag: 'Inbound', time: '22:40 Uhr',
    title: 'Anruf nach Feierabend angenommen',
    text: 'Anliegen erfasst: Schadenmeldung KFZ. Rückruf für morgen, 9:00 Uhr vereinbart.',
  },
  {
    tag: 'Outbound', time: 'heute',
    title: 'Erinnerung an fehlende Unterlagen',
    text: 'Frau Weber automatisch angerufen – Selbstauskunft kommt bis Freitag.',
  },
];

function PhoneBotVisual() {
  return (
    <div className="space-y-2.5">
      {phoneBotCalls.map((c) => (
        <div key={c.tag} className="rounded-md bg-sand-0 p-3.5 shadow-hairline">
          <div className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-pill bg-forest-100 text-forest-700">
              <Icon name="phone" size={15} />
            </span>
            <span className="rounded-xs bg-forest-100 px-1.5 py-0.5 font-data text-[0.625rem] font-medium text-forest-800">
              {c.tag}
            </span>
            <span className="ml-auto text-[0.6875rem] text-sand-400">{c.time}</span>
          </div>
          <p className="m-0 mt-2 text-[0.8125rem] font-semibold text-sand-900">{c.title}</p>
          <p className="m-0 mt-0.5 text-[0.75rem] leading-snug text-sand-500">{c.text}</p>
        </div>
      ))}
    </div>
  );
}

/* ---------- Visual: Schnittstellen (Systeme tauschen Daten) ---------- */
function SyncArrows() {
  return (
    <svg
      width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"
      fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      className="shrink-0 text-sand-400"
    >
      <path d="M4 8h14m0 0-3-3m3 3-3 3" />
      <path d="M20 16H6m0 0 3-3m-3 3 3 3" />
    </svg>
  );
}

const integrationSystems = [
  { icon: 'chart', label: 'CRM' },
  { icon: 'document', label: 'Maklerverwaltung' },
  { icon: 'calendar', label: 'Kalender' },
  { icon: 'phone', label: 'Telefonanlage' },
];

function IntegrationsVisual() {
  return (
    <div className="mx-auto w-full max-w-md">
      <div className="flex items-start justify-between gap-1">
        {integrationSystems.map((s, i) => (
          <React.Fragment key={s.label}>
            {i > 0 && <span className="mt-3.5"><SyncArrows /></span>}
            <div className="flex w-16 flex-col items-center gap-1.5 text-center">
              <span className={`grid h-12 w-12 place-items-center rounded-sm ${i === 0 ? 'bg-forest-900 text-forest-100' : 'bg-forest-100 text-forest-700'}`}>
                <Icon name={s.icon} size={22} />
              </span>
              <span className="text-[0.6875rem] leading-tight text-sand-600">{s.label}</span>
            </div>
          </React.Fragment>
        ))}
      </div>
      <div className="mt-4 flex justify-center">
        <span className="inline-flex items-center gap-1.5 rounded-pill bg-forest-100 px-3 py-1 text-[0.75rem] font-medium text-forest-900">
          <Icon name="check" size={13} />
          Einmal erfasst – überall aktuell
        </span>
      </div>
    </div>
  );
}

/* ---------- Visual: Workflows (Zeit vorher → nachher) ---------- */
const workflowRows = [
  { icon: 'document', task: 'Unterlagen anfordern & nachfassen', old: '25 Min.', neu: '2 Min.' },
  { icon: 'calendar', task: 'Termin bestätigen & erinnern', old: '10 Min.', neu: 'automatisch' },
  { icon: 'user', task: 'Lead anlegen & zuweisen', old: '8 Min.', neu: 'automatisch' },
];

function WorkflowsVisual() {
  return (
    <div className="space-y-2.5">
      {workflowRows.map((w) => (
        <div key={w.task} className="flex items-center gap-3 rounded-md bg-sand-50 p-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-sm bg-forest-100 text-forest-700">
            <Icon name={w.icon} size={16} />
          </span>
          <p className="m-0 min-w-0 truncate text-[0.8125rem] font-medium text-sand-800">{w.task}</p>
          <span className="ml-auto shrink-0 text-[0.75rem] text-sand-400 line-through">{w.old}</span>
          <Icon name="arrow-right" size={13} className="shrink-0 text-sand-400" />
          <span className="shrink-0 rounded-xs bg-signal-100 px-1.5 py-0.5 font-data text-[0.6875rem] font-medium text-forest-800">
            {w.neu}
          </span>
        </div>
      ))}
    </div>
  );
}

/* ---------- Visual: KI DSGVO-konform (Grundsätze) ---------- */
const kiDsgvoChecks = [
  'KI nur dort, wo sie messbar Zeit spart',
  'EU-Hosting, wo immer möglich',
  'AV-Verträge & dokumentierte Datenflüsse',
  'Keine Kundendaten für KI-Training',
];

function KiDsgvoVisual() {
  return (
    <div className="space-y-2.5">
      {kiDsgvoChecks.map((c) => (
        <div key={c} className="flex items-center gap-3 rounded-md bg-sand-0 p-3 shadow-hairline">
          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-pill bg-forest-100 text-forest-700">
            <Icon name="shield" size={14} />
          </span>
          <p className="m-0 text-[0.8125rem] font-medium text-sand-800">{c}</p>
        </div>
      ))}
    </div>
  );
}

/* ---------- Zuordnung key → Visual ---------- */
const visuals = {
  /* CRM & Datenstruktur */
  kundenverwaltung: <ChipsVisual />,
  wiedervorlagen: <RemindersVisual />,
  kalender: <CalendarVisual />,
  signaturen: <SignatureVisual />,
  qualifizierung: <LeadsVisual />,
  telefonanlage: <PhoneVisual />,
  zeitlinie: <TimelineVisual />,
  dsgvo: <DsgvoVisual />,
  /* Marketing & Kundenkommunikation */
  whatsapp: <WhatsAppVisual />,
  bewertungen: <ReviewsVisual />,
  newsletter: <NewsletterVisual />,
  funnel: <FunnelVisual />,
  websites: <WebsiteVisual />,
  formulare: <FormVisual />,
  /* Automatisierung & KI */
  chatbots: <ChatbotVisual />,
  wissensdatenbank: <KnowledgeVisual />,
  telefonbots: <PhoneBotVisual />,
  schnittstellen: <IntegrationsVisual />,
  workflows: <WorkflowsVisual />,
  'ki-dsgvo': <KiDsgvoVisual />,
};

/* ---------- Section ----------
   Karten werden paarweise gerendert; breite Spalte und Farbton
   wechseln pro Reihe (Nelly-Rhythmus). Reihenfolge der items
   in site.js bestimmt das Layout. */
const rowTones = [
  ['surface', 'sage'],
  ['subtle', 'surface'],
];

export function FeatureBento({ features }) {
  if (!features) return null;
  const rows = [];
  for (let i = 0; i < features.items.length; i += 2) {
    rows.push(features.items.slice(i, i + 2));
  }

  return (
    <section className="px-5 py-section-m md:py-section">
      <div className="mx-auto max-w-container">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="whitespace-pre-line font-display text-display-lg text-sand-900">{features.title}</h2>
            <p className="mx-auto mt-5 max-w-xl text-body-lg text-sand-600">{features.lead}</p>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-6">
          {rows.map((row, ri) => (
            <Reveal key={row[0].key} delay={ri === 0 ? 0 : 80}>
              <div className={`grid gap-6 ${ri % 2 === 0 ? 'lg:grid-cols-[1.15fr_0.85fr]' : 'lg:grid-cols-[0.85fr_1.15fr]'}`}>
                {row.map((item, ci) => (
                  <BentoCard key={item.key} tone={rowTones[ri % 2][ci]} item={item}>
                    {visuals[item.key]}
                  </BentoCard>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
