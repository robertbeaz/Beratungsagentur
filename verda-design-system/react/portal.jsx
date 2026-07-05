/* ============================================================
   VERDA Design System · portal.jsx · v1.0.0
   Portal-/App-UI-Komponenten. Benötigt primitives.jsx.
   ============================================================ */
import React from 'react';
import { Icon, Badge, StatusDot, Input } from './primitives';
import { Wordmark } from './sections';

/* ---------- App-Shell: Sidebar + Topbar + Content ---------- */
export function AppShell({ nav = [], active = 0, user = { name: 'Praxis Muster', initials: 'PM' }, children, title }) {
  return (
    <div className="grid min-h-screen grid-cols-1 bg-sand-50 lg:grid-cols-[248px_1fr]">
      {/* Sidebar */}
      <aside className="hidden flex-col border-r border-sand-950/5 bg-sand-25 p-4 lg:flex">
        <div className="px-3 py-4"><Wordmark className="!text-[1.25rem]" /></div>
        <nav className="mt-4 flex flex-1 flex-col gap-1">
          {nav.map((item, i) => (
            <a
              key={item.label} href="#"
              aria-current={i === active ? 'page' : undefined}
              className={`flex items-center gap-3 rounded-sm px-3 py-2.5 text-body-sm font-semibold no-underline transition-colors duration-fast ${
                i === active
                  ? 'bg-forest-100 text-forest-900'
                  : 'text-sand-600 hover:bg-sand-100 hover:text-sand-900'
              }`}
            >
              <Icon name={item.icon} size={18} />
              {item.label}
              {item.count != null && (
                <span className="ml-auto rounded-pill bg-sand-100 px-2 font-data text-data text-sand-600">{item.count}</span>
              )}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3 rounded-sm px-3 py-3">
          <span className="grid h-9 w-9 place-items-center rounded-pill bg-forest-900 font-semibold text-forest-50">{user.initials}</span>
          <span className="text-body-sm font-semibold text-sand-800">{user.name}</span>
        </div>
      </aside>

      {/* Main */}
      <div className="flex min-w-0 flex-col">
        <header className="sticky top-0 z-sticky flex h-nav items-center justify-between gap-4 border-b border-sand-950/5 bg-sand-25/90 px-6 backdrop-blur">
          <h1 className="m-0 font-display text-h4 font-semibold text-sand-900">{title}</h1>
          <div className="flex items-center gap-3">
            <div className="relative hidden md:block">
              <Icon name="search" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-sand-400" />
              <input placeholder="Suchen …" className="h-10 w-64 rounded-sm bg-sand-100 pl-9 pr-4 text-body-sm text-sand-900 placeholder:text-sand-400 focus:outline-none focus:shadow-focus" />
            </div>
            <button aria-label="Benachrichtigungen" className="grid h-10 w-10 place-items-center rounded-sm text-sand-600 transition-colors hover:bg-sand-100">
              <Icon name="bell" size={18} />
            </button>
            <button aria-label="Einstellungen" className="grid h-10 w-10 place-items-center rounded-sm text-sand-600 transition-colors hover:bg-sand-100">
              <Icon name="settings" size={18} />
            </button>
          </div>
        </header>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}

/* ---------- KPI-Card ---------- */
export function KpiCard({ label, value, delta, positive = true, icon }) {
  return (
    <div className="rounded-md bg-sand-0 p-5 shadow-hairline">
      <div className="flex items-center justify-between">
        <span className="font-caption text-caption uppercase tracking-widest text-sand-500">{label}</span>
        {icon && <Icon name={icon} size={18} className="text-forest-500" />}
      </div>
      <div className="mt-3 font-display text-h2 font-medium text-sand-900">{value}</div>
      {delta && (
        <div className={`mt-1 font-data text-data ${positive ? 'text-forest-600' : 'text-carnelian-500'}`}>
          {positive ? '↑' : '↓'} {delta}
        </div>
      )}
    </div>
  );
}

/* ---------- Datentabelle ---------- */
export function DataTable({ columns = [], rows = [] }) {
  return (
    <div className="overflow-x-auto rounded-md bg-sand-0 shadow-hairline">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="border-b border-sand-100">
            {columns.map((c) => (
              <th key={c} className="px-4 py-3 font-caption text-caption uppercase tracking-widest text-sand-500">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-sand-50 transition-colors duration-instant last:border-0 hover:bg-forest-50/60">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3.5 text-body-sm text-sand-800 first:font-semibold first:text-sand-900">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Zahlen-Zelle: Mono + Tabular für saubere Spalten */
export function Amount({ children }) {
  return <span className="font-data text-data tabular-nums">{children}</span>;
}

/** Status-Zelle mit Badge – z. B. Rechnungsstatus */
export function InvoiceStatus({ state = 'offen' }) {
  const map = {
    bezahlt: <Badge tone="success">Bezahlt</Badge>,
    offen: <Badge tone="warning">Offen</Badge>,
    überfällig: <Badge tone="danger">Überfällig</Badge>,
    entwurf: <Badge tone="neutral">Entwurf</Badge>,
  };
  return map[state] || map.offen;
}

/* ---------- Empty-State ---------- */
export function EmptyState({ icon = 'document', title, text, action }) {
  return (
    <div className="grid place-items-center rounded-md bg-sand-0 px-6 py-16 text-center shadow-hairline">
      <span className="grid h-14 w-14 place-items-center rounded-pill bg-forest-100 text-forest-700">
        <Icon name={icon} size={26} />
      </span>
      <h3 className="mt-5 font-display text-h4 text-sand-900">{title}</h3>
      <p className="mt-1 max-w-sm text-body-sm text-sand-500">{text}</p>
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}

/* ---------- Toast ---------- */
export function Toast({ tone = 'success', children, onClose }) {
  const tones = {
    success: 'bg-forest-900 text-forest-50',
    danger: 'bg-carnelian-700 text-white',
    neutral: 'bg-sand-950 text-sand-25',
  };
  return (
    <div className={`fixed bottom-6 left-1/2 z-toast flex -translate-x-1/2 items-center gap-3 rounded-pill px-5 py-3 shadow-lg animate-fade-up ${tones[tone]}`} role="status">
      <Icon name={tone === 'danger' ? 'close' : 'check'} size={18} />
      <span className="text-body-sm font-semibold">{children}</span>
      {onClose && (
        <button onClick={onClose} aria-label="Schließen" className="ml-2 opacity-70 transition-opacity hover:opacity-100">
          <Icon name="close" size={16} />
        </button>
      )}
    </div>
  );
}

/* ---------- Chart-Rahmen (für Recharts/Chart.js-Inhalte) ---------- */
export function ChartCard({ title, legend, children }) {
  return (
    <div className="rounded-md bg-sand-0 p-5 shadow-hairline">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="m-0 font-display text-h4 font-semibold text-sand-900">{title}</h3>
        {legend}
      </div>
      {children}
    </div>
  );
}

/* Chart-Farbreihenfolge für Diagramm-Bibliotheken */
export const chartColors = ['#1D3A22', '#64925C', '#AFC98D', '#F5EA4A', '#4181A6', '#DCDCD2'];
