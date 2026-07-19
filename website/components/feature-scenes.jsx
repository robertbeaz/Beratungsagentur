/* ============================================================
   VERDA · feature-scenes.jsx
   Drei „Theo-Style"-Szenen für den Paket-Stepper der Startseite:
   weiße UI-Karten auf geblurrtem Foto-Hintergrund (Quelle der
   Gestaltung: /grafiken/grafik-*.html im Repo-Root).
   TODO: Alle Zahlen, Namen und Chat-Inhalte sind Beispieldaten –
   bei echten Kundenzahlen zusammen mit site.js aktualisieren.
   ============================================================ */
'use client';

import Image from 'next/image';
import { Icon, KiBadge } from './primitives';

/* ---------- Rahmen: geblurrtes Foto + Abdunklung + Inhalt ---------- */
function SceneFrame({ bg, label, children }) {
  return (
    <div className="relative overflow-hidden rounded-lg" role="img" aria-label={label}>
      {/* Eigener Wrapper für den Scroll-Parallax, damit die Drift-Animation
         nicht mit scale/blur des Bildes kollidiert */}
      <div className="scroll-drift absolute inset-0">
        <Image
          src={bg}
          alt=""
          fill
          sizes="(min-width: 1024px) 45vw, 90vw"
          className="scale-125 object-cover blur-2xl"
        />
      </div>
      <div className="absolute inset-0 bg-sand-950/10" />
      <div className="relative p-5 py-8 sm:p-9 sm:py-12">{children}</div>
    </div>
  );
}

/* ---------- Bausteine ---------- */
function SceneIconButton({ name, done = false }) {
  return (
    <span
      className={`grid h-10 w-10 shrink-0 place-items-center rounded-sm ${
        done ? 'bg-forest-100 text-forest-700' : 'bg-sand-50 text-sand-600 shadow-hairline'
      }`}
    >
      <Icon name={name} size={18} />
    </span>
  );
}

/* ---------- Szene 1: Dokumente digital (Paket „Digitale Agentur") ---------- */
const documents = [
  { title: 'Maklervollmacht', meta: 'signiert · 14.07.2026', done: true },
  { title: 'Schadenmeldung KFZ', meta: 'eingegangen · 11.07.2026' },
  { title: 'Beratungsprotokoll', meta: 'aktualisiert · 03.07.2026' },
  { title: 'Angebot Wohngebäude', meta: 'versendet · 28.06.2026' },
];

export function DocumentScene() {
  return (
    <SceneFrame
      bg="/grafiken/bg-gold.jpg"
      label="Beispieldarstellung: digitale Dokumentenliste einer Versicherungsagentur mit signierter Maklervollmacht und KFZ-Schadenmeldung"
    >
      <div className="flex flex-col gap-3">
        {documents.map((d) => (
          <div
            key={d.title}
            className="flex items-center justify-between gap-4 rounded-md bg-sand-0 p-4 shadow-md sm:px-6 sm:py-5"
          >
            <div className="min-w-0">
              <p className="m-0 truncate font-display text-h4 font-semibold text-sand-900">{d.title}</p>
              <p className="m-0 mt-1 font-data text-data text-sand-600">{d.meta}</p>
            </div>
            <div className="flex gap-2">
              <SceneIconButton name={d.done ? 'check' : 'eye'} done={d.done} />
              <SceneIconButton name="download" />
            </div>
          </div>
        ))}
      </div>
    </SceneFrame>
  );
}

/* ---------- Szene 2: Kennzahlen (Paket „Kundenmagnet") ---------- */
export function MetricsScene() {
  return (
    <SceneFrame
      bg="/grafiken/bg-forest.jpg"
      label="Beispieldarstellung: Kennzahlen-Dashboard einer Versicherungsagentur mit neuen Anfragen, Antwortzeit und der Entwicklung von Anfragen und Abschlüssen"
    >
      <div className="flex flex-col gap-3">
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-md bg-sand-0 p-4 shadow-md sm:p-5">
            <p className="m-0 text-body-sm text-sand-600">Neue Anfragen</p>
            <p className="m-0 mt-1.5 font-data text-h2 font-semibold tracking-tight text-sand-900">214</p>
            <p className="m-0 mt-1.5 flex items-center gap-1.5 text-body-sm text-sand-500">
              <Icon name="trend" size={16} className="shrink-0 text-forest-600" />
              <strong className="font-semibold text-forest-600">+23 %</strong> ggü. Vormonat
            </p>
          </div>
          <div className="rounded-md bg-sand-0 p-4 shadow-md sm:p-5">
            <p className="m-0 text-body-sm text-sand-600">Ø Antwortzeit</p>
            <p className="m-0 mt-1.5 font-data text-h2 font-semibold tracking-tight text-sand-900">4 Min</p>
            <p className="m-0 mt-1.5 flex items-center gap-1.5 text-body-sm text-sand-500">
              <Icon name="trend-down" size={16} className="shrink-0 text-amber-500" />
              <strong className="font-semibold text-amber-700">−82 %</strong> seit Start
            </p>
          </div>
        </div>
        <div className="rounded-md bg-sand-0 p-4 shadow-md sm:p-6">
          <p className="m-0 font-display text-h4 font-semibold text-sand-900">Anfragen vs. Abschlüsse</p>
          <p className="m-0 mt-0.5 text-body-sm text-sand-600">Monatliche Entwicklung, letzte 12 Monate</p>
          <div className="mt-3 flex gap-5 text-body-sm font-medium text-sand-600">
            <span className="flex items-center gap-2">
              <i className="h-2.5 w-2.5 rounded-pill bg-forest-600" /> Anfragen
            </span>
            <span className="flex items-center gap-2">
              <i className="h-2.5 w-2.5 rounded-pill bg-amber-500" /> Abschlüsse
            </span>
          </div>
          <svg viewBox="0 0 440 170" className="mt-2 w-full" aria-hidden="true">
            <line x1="36" y1="20" x2="440" y2="20" stroke="#EEEEE5" strokeWidth="1" />
            <line x1="36" y1="80" x2="440" y2="80" stroke="#EEEEE5" strokeWidth="1" />
            <line x1="36" y1="140" x2="440" y2="140" stroke="#EEEEE5" strokeWidth="1" />
            <text x="0" y="24" className="fill-sand-400 font-data" fontSize="11">200</text>
            <text x="0" y="84" className="fill-sand-400 font-data" fontSize="11">100</text>
            <text x="14" y="144" className="fill-sand-400 font-data" fontSize="11">0</text>
            <path
              d="M36 112 C 84 108, 116 100, 164 92 S 264 72, 312 60 S 412 36, 440 32"
              fill="none" stroke="#4B7345" strokeWidth="3.5" strokeLinecap="round"
            />
            <path
              d="M36 136 C 84 134, 116 130, 164 125 S 264 113, 312 105 S 412 91, 440 87"
              fill="none" stroke="#C77E1D" strokeWidth="3.5" strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </SceneFrame>
  );
}

/* ---------- Szene 3: KI-Posteingang (Paket „KI-Assistenz") ---------- */
export function InboxScene() {
  return (
    <SceneFrame
      bg="/grafiken/bg-warm.jpg"
      label="Beispieldarstellung: KI-Assistent beantwortet eine Kundenanfrage um 21:47 Uhr und bestätigt automatisch einen Beratungstermin"
    >
      <div className="rounded-md bg-sand-0 p-5 shadow-md sm:p-7">
        <div className="flex items-center gap-3.5">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-pill bg-forest-900 text-forest-50">
            <Icon name="chat" size={20} />
          </span>
          <div className="min-w-0 flex-1">
            <p className="m-0 font-display text-h4 font-semibold text-sand-900">Posteingang</p>
            <p className="m-0 truncate text-body-sm text-sand-600">WhatsApp · Website-Chat · E-Mail</p>
          </div>
          <KiBadge>KI-Assistent</KiBadge>
        </div>
        <hr className="my-5 border-0 border-t border-sand-100" />
        <div className="max-w-[85%]">
          <p className="m-0 rounded-[18px] rounded-bl-[4px] bg-sand-100 px-4 py-3 text-body-sm leading-relaxed text-sand-900">
            Guten Abend! Ich hätte gern ein Angebot für eine Hausratversicherung. Geht das noch diese Woche?
          </p>
          <p className="m-0 mt-1.5 font-data text-caption text-sand-500">21:47</p>
        </div>
        <div className="ml-auto mt-4 max-w-[85%]">
          <p className="m-0 rounded-[18px] rounded-br-[4px] bg-forest-100 px-4 py-3 text-body-sm leading-relaxed text-sand-900">
            Gern! Dafür brauche ich nur wenige Angaben. Passt Ihnen Dienstag um 9:30&nbsp;Uhr für ein kurzes Gespräch?
          </p>
          <p className="m-0 mt-1.5 text-right font-data text-caption text-sand-500">21:47 · automatisch beantwortet</p>
        </div>
        <div className="mt-5 flex items-center gap-3.5 rounded-md bg-sand-50 p-4 shadow-hairline">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-pill bg-forest-100 text-forest-700">
            <Icon name="check" size={16} />
          </span>
          <div className="min-w-0">
            <p className="m-0 text-body-sm font-semibold text-sand-900">Termin bestätigt · Dienstag, 09:30 Uhr</p>
            <p className="m-0 mt-0.5 text-body-sm text-sand-600">Automatisch im Kalender und CRM hinterlegt</p>
          </div>
        </div>
      </div>
    </SceneFrame>
  );
}

/* ============================================================
   Use-Case-Szenen: je Paket-Kapitel auf /use-cases eine Szene,
   deren Inhalt exakt die beiden Cases der Gruppe spiegelt.
   ============================================================ */

/* Kleine Bausteine für die Use-Case-Szenen */
function SceneCard({ children, className = '' }) {
  return <div className={`rounded-md bg-sand-0 p-4 shadow-md sm:p-5 ${className}`}>{children}</div>;
}

function SceneMeta({ children, right = false }) {
  return <p className={`m-0 mt-1.5 font-data text-caption text-sand-500 ${right ? 'text-right' : ''}`}>{children}</p>;
}

/* ---------- Szene: Zentrale Kundenakte (Cases „Excel-Chaos → CRM" + „Schadenmeldungen") ---------- */
export function CrmCaseScene() {
  return (
    <SceneFrame
      bg="/grafiken/bg-gold.jpg"
      label="Beispieldarstellung: zentrale CRM-Kundenakte mit Verträgen, vollständiger Schadenmeldung und automatischer Wiedervorlage"
    >
      <div className="flex flex-col gap-3">
        <SceneCard>
          <div className="flex items-center gap-3.5">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-pill bg-forest-900 font-display text-body-sm font-semibold text-forest-50">
              FB
            </span>
            <div className="min-w-0 flex-1">
              <p className="m-0 font-display text-h4 font-semibold text-sand-900">Familie Berger</p>
              <p className="m-0 truncate text-body-sm text-sand-600">Bestandskunden · alles in einer Akte</p>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {['KFZ', 'Hausrat', 'Wohngebäude', 'Unfall'].map((v) => (
              <span key={v} className="rounded-pill bg-sand-100 px-3 py-1 text-body-sm font-medium text-sand-700">
                {v}
              </span>
            ))}
          </div>
        </SceneCard>
        <SceneCard>
          <div className="flex items-center gap-3.5">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-pill bg-forest-100 text-forest-700">
              <Icon name="check" size={16} />
            </span>
            <div className="min-w-0">
              <p className="m-0 text-body-sm font-semibold text-sand-900">Schadenmeldung KFZ · vollständig</p>
              <p className="m-0 mt-0.5 text-body-sm text-sand-600">Fotos und Unterlagen direkt im Formular hochgeladen</p>
            </div>
          </div>
          <SceneMeta>09:12 · ohne eine einzige E-Mail</SceneMeta>
        </SceneCard>
        <SceneCard>
          <div className="flex items-center gap-3.5">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-pill bg-sand-100 text-sand-600">
              <Icon name="bell" size={16} />
            </span>
            <div className="min-w-0">
              <p className="m-0 text-body-sm font-semibold text-sand-900">Wiedervorlage erinnert automatisch</p>
              <p className="m-0 mt-0.5 text-body-sm text-sand-600">Rückruf zugesagt · Selbstauskunft noch offen</p>
            </div>
          </div>
        </SceneCard>
      </div>
    </SceneFrame>
  );
}

/* ---------- Szene: Anfrage → Termin & Bestandsimpulse (Cases „Website-Anfragen" + „Vertragsabläufe") ---------- */
export function FunnelCaseScene() {
  return (
    <SceneFrame
      bg="/grafiken/bg-forest.jpg"
      label="Beispieldarstellung: Website-Anfrage wird automatisch zum Beratungstermin, auslaufender Vertrag löst eine persönliche Ansprache aus"
    >
      <div className="flex flex-col gap-3">
        <SceneCard>
          <p className="m-0 text-body-sm font-semibold text-sand-900">Neue Anfrage über die Website</p>
          <p className="m-0 mt-1 text-body-sm text-sand-600">„Bitte um ein Angebot zur Berufsunfähigkeit."</p>
          <SceneMeta>Sa · 20:12</SceneMeta>
        </SceneCard>
        <SceneCard>
          <div className="flex items-center gap-3.5">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-pill bg-forest-100 text-forest-700">
              <Icon name="calendar" size={16} />
            </span>
            <div className="min-w-0">
              <p className="m-0 text-body-sm font-semibold text-sand-900">Terminvorschlag sofort verschickt</p>
              <p className="m-0 mt-0.5 text-body-sm text-sand-600">Beratungstermin gebucht: Donnerstag, 14:30 Uhr</p>
            </div>
          </div>
          <SceneMeta>Sa · 20:13 · automatisch, statt Montagmorgen</SceneMeta>
        </SceneCard>
        <SceneCard>
          <div className="flex items-center gap-3.5">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-pill bg-sand-100 text-sand-600">
              <Icon name="clock" size={16} />
            </span>
            <div className="min-w-0">
              <p className="m-0 text-body-sm font-semibold text-sand-900">KFZ-Vertrag läuft in 30 Tagen ab</p>
              <p className="m-0 mt-0.5 text-body-sm text-sand-600">Persönliche Ansprache an Familie Weber ausgelöst</p>
            </div>
          </div>
        </SceneCard>
      </div>
    </SceneFrame>
  );
}

/* ---------- Szene: Telefonassistent & Wissensdatenbank (Cases „verpasste Anrufe" + „Team-Chatbot") ---------- */
export function AssistCaseScene() {
  return (
    <SceneFrame
      bg="/grafiken/bg-warm.jpg"
      label="Beispieldarstellung: KI-Telefonassistent übernimmt einen verpassten Anruf, KI-Wissensdatenbank beantwortet eine Tariffrage aus dem Team"
    >
      <div className="flex flex-col gap-3">
        <SceneCard>
          <div className="flex items-center gap-3.5">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-pill bg-forest-900 text-forest-50">
              <Icon name="phone" size={20} />
            </span>
            <div className="min-w-0 flex-1">
              <p className="m-0 font-display text-h4 font-semibold text-sand-900">Anruf nach Feierabend</p>
              <p className="m-0 truncate text-body-sm text-sand-600">17:42 · niemand mehr im Büro</p>
            </div>
            <KiBadge>KI-Assistent</KiBadge>
          </div>
          <div className="mt-4 flex items-center gap-3.5 rounded-md bg-sand-50 p-3.5 shadow-hairline">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-pill bg-forest-100 text-forest-700">
              <Icon name="check" size={14} />
            </span>
            <p className="m-0 text-body-sm text-sand-900">
              Anliegen aufgenommen, im CRM dokumentiert – <span className="font-semibold">Rückruf Montag, 9:00 Uhr</span>
            </p>
          </div>
        </SceneCard>
        <SceneCard>
          <p className="m-0 text-body-sm font-semibold uppercase tracking-widest text-sand-500">Wissensdatenbank</p>
          <div className="mt-3 max-w-[92%]">
            <p className="m-0 rounded-[16px] rounded-bl-[4px] bg-sand-100 px-3.5 py-2.5 text-body-sm leading-relaxed text-sand-900">
              Gilt beim Zahnzusatz die Wartezeit auch nach einem Unfall?
            </p>
            <SceneMeta>Neue Mitarbeiterin · im Team-Chat</SceneMeta>
          </div>
          <div className="ml-auto mt-3 max-w-[92%]">
            <p className="m-0 rounded-[16px] rounded-br-[4px] bg-forest-100 px-3.5 py-2.5 text-body-sm leading-relaxed text-sand-900">
              Nein – bei unfallbedingten Behandlungen entfällt die Wartezeit (Tarif DZ80, §4).
            </p>
            <SceneMeta right>sofort · aus den Tarifunterlagen der Agentur</SceneMeta>
          </div>
        </SceneCard>
      </div>
    </SceneFrame>
  );
}
