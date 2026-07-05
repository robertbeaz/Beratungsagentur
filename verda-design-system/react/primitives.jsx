/* ============================================================
   VERDA Design System · primitives.jsx · v1.0.0
   Basis-Komponenten. Benötigt tailwind.config.js des Systems.
   ============================================================ */
import React, { useState, useId } from 'react';

/* ---------- Icons (24er-Raster, 1.5px Strich, currentColor) ---------- */
const paths = {
  'arrow-right': 'M4 12h16m0 0-6-6m6 6-6 6',
  'arrow-up-right': 'M7 17 17 7m0 0H8m9 0v9',
  check: 'm5 13 4 4L19 7',
  plus: 'M12 5v14M5 12h14',
  close: 'M6 6l12 12M18 6 6 18',
  menu: 'M4 7h16M4 12h16M4 17h16',
  'chevron-down': 'm6 9 6 6 6-6',
  calendar: 'M8 3v3m8-3v3M4 9h16M6 5h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z',
  document: 'M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8m-5-5 5 5m-5-5v5h5M9 13h6M9 17h4',
  signature: 'M4 17c2-4 4-9 5-8s-1 7 0 7 2.5-3 3.5-3 .5 3 2 3 2.5-2 5.5-2',
  star: 'm12 4 2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4L4.2 9.7l5.4-.8L12 4Z',
  mic: 'M12 15a3 3 0 0 0 3-3V7a3 3 0 1 0-6 0v5a3 3 0 0 0 3 3Zm6-4a6 6 0 0 1-12 0m6 7v3',
  card: 'M3 9h18M5 6h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Zm2 8h4',
  bank: 'M4 10 12 4l8 6M5 10v7m4.5-7v7m5-7v7M19 10v7M3 20h18',
  chart: 'M4 20V10m5.5 10V4M15 20v-7m5 7V8',
  shield: 'M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3Zm-3 9 2.5 2.5L16 10',
  user: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-8 8a8 8 0 0 1 16 0',
  search: 'M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm10 2-4-4',
  bell: 'M6 9a6 6 0 1 1 12 0c0 5 2 6 2 6H4s2-1 2-6Zm4 9a2 2 0 0 0 4 0',
  settings: 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8-3a8 8 0 0 1-.2 1.8l2 1.5-2 3.4-2.3-.9a8 8 0 0 1-3 1.8L14 22h-4l-.4-2.4a8 8 0 0 1-3-1.8l-2.4.9-2-3.4 2-1.5A8 8 0 0 1 4 12c0-.6.1-1.2.2-1.8l-2-1.5 2-3.4 2.4.9a8 8 0 0 1 3-1.8L10 2h4l.4 2.4a8 8 0 0 1 3 1.8l2.3-.9 2 3.4-2 1.5c.2.6.3 1.2.3 1.8Z',
};

export function Icon({ name, size = 24, className = '', ...rest }) {
  return (
    <svg
      width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      className={className} aria-hidden="true" {...rest}
    >
      <path d={paths[name] || ''} />
    </svg>
  );
}

/* ---------- Buttons ---------- */
const btnBase =
  'inline-flex items-center justify-center gap-2 font-body font-semibold rounded-sm ' +
  'transition-all duration-fast ease-standard cursor-pointer select-none ' +
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-600 ' +
  'disabled:opacity-40 disabled:pointer-events-none';

const btnVariants = {
  primary: 'bg-forest-900 text-forest-50 hover:bg-forest-950 active:scale-[0.98]',
  accent: 'bg-sun-300 text-sand-900 hover:bg-sun-400 active:scale-[0.98]',
  secondary: 'bg-transparent text-sand-900 shadow-hairline hover:bg-sand-50 active:scale-[0.98]',
  ghost: 'bg-transparent text-sand-900 hover:bg-sand-100',
  danger: 'bg-carnelian-500 text-white hover:bg-carnelian-700',
};

const btnSizes = {
  sm: 'text-body-sm px-4 h-9',
  md: 'text-body px-6 h-12',
  lg: 'text-body-lg px-8 h-14',
};

export function Button({ variant = 'primary', size = 'md', icon, children, className = '', ...rest }) {
  return (
    <button className={`${btnBase} ${btnVariants[variant]} ${btnSizes[size]} ${className}`} {...rest}>
      {children}
      {icon && <Icon name={icon} size={size === 'sm' ? 16 : 20} />}
    </button>
  );
}

/** Text-Link mit Pfeil – „Mehr erfahren →" */
export function TextLink({ children, href = '#', className = '', ...rest }) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-2 font-semibold text-forest-700 hover:text-forest-900 transition-colors duration-fast ${className}`}
      {...rest}
    >
      <Icon name="arrow-right" size={18} className="transition-transform duration-fast group-hover:translate-x-1" />
      {children}
    </a>
  );
}

export function IconButton({ icon = 'arrow-up-right', label, className = '', ...rest }) {
  return (
    <button
      aria-label={label}
      className={`inline-flex h-11 w-11 items-center justify-center rounded-sm bg-sand-0/60 text-sand-900 shadow-hairline backdrop-blur transition-all duration-fast hover:bg-sand-0 hover:shadow-sm ${className}`}
      {...rest}
    >
      <Icon name={icon} size={18} />
    </button>
  );
}

/* ---------- Badges & Labels ---------- */
export function Eyebrow({ icon, children, tone = 'brand' }) {
  const tones = {
    brand: 'text-forest-600',
    'on-dark': 'text-forest-200',
  };
  return (
    <span className={`inline-flex items-center gap-2 text-body font-semibold ${tones[tone]}`}>
      {icon && <Icon name={icon} size={18} />}
      {children}
    </span>
  );
}

export function Badge({ tone = 'neutral', children }) {
  const tones = {
    neutral: 'bg-sand-100 text-sand-700',
    brand: 'bg-forest-100 text-forest-700',
    success: 'bg-forest-100 text-forest-700',
    info: 'bg-sky-50 text-sky-700',
    warning: 'bg-amber-50 text-amber-700',
    danger: 'bg-carnelian-50 text-carnelian-700',
  };
  return (
    <span className={`inline-flex items-center gap-1 rounded-xs px-2 py-0.5 text-body-sm font-semibold ${tones[tone]}`}>
      {children}
    </span>
  );
}

/** KI-Badge im Signal-Lime – für AI-Features */
export function KiBadge({ children = 'KI' }) {
  return (
    <span className="inline-flex items-center rounded-xs bg-signal-300 px-1.5 py-0.5 font-data text-data font-medium text-sand-950">
      {children}
    </span>
  );
}

export function StatusDot({ tone = 'success', children }) {
  const dots = { success: 'bg-forest-500', warning: 'bg-amber-500', danger: 'bg-carnelian-500', neutral: 'bg-sand-400' };
  return (
    <span className="inline-flex items-center gap-2 text-body-sm text-sand-700">
      <span className={`h-2 w-2 rounded-pill ${dots[tone]}`} />
      {children}
    </span>
  );
}

/* ---------- Cards ---------- */
export function Card({ tone = 'surface', className = '', children, ...rest }) {
  const tones = {
    surface: 'bg-sand-0 shadow-hairline',
    subtle: 'bg-sand-50',
    sage: 'bg-forest-100',
    brand: 'bg-forest-900 text-forest-50 [&_h3]:text-forest-50 [&_h4]:text-forest-50',
  };
  return (
    <div className={`rounded-sm p-6 md:p-8 ${tones[tone]} ${className}`} {...rest}>
      {children}
    </div>
  );
}

export function StatCard({ value, label }) {
  return (
    <div className="border-t border-forest-900/15 pt-4">
      <div className="font-display text-h1 font-medium text-forest-900">{value}</div>
      <div className="mt-1 text-body text-sand-600">{label}</div>
    </div>
  );
}

/* ---------- Formulare ---------- */
export function Field({ label, hint, error, required, children }) {
  const id = useId();
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-body-sm font-semibold text-sand-900">
        {label} {required && <span className="text-carnelian-500">*</span>}
      </label>
      {React.cloneElement(children, {
        id,
        'aria-invalid': !!error,
        'aria-describedby': error ? `${id}-err` : hint ? `${id}-hint` : undefined,
      })}
      {hint && !error && <p id={`${id}-hint`} className="text-body-sm text-sand-500">{hint}</p>}
      {error && <p id={`${id}-err`} className="text-body-sm font-medium text-carnelian-500">{error}</p>}
    </div>
  );
}

const inputBase =
  'w-full rounded-sm bg-sand-0 px-4 h-12 text-body text-sand-900 shadow-hairline ' +
  'placeholder:text-sand-400 transition-shadow duration-fast ' +
  'hover:shadow-[inset_0_0_0_1px_rgba(23,25,19,0.2)] ' +
  'focus:outline-none focus:shadow-[inset_0_0_0_2px_#4B7345] ' +
  'aria-[invalid=true]:shadow-[inset_0_0_0_2px_#A82D1F]';

export function Input(props) {
  return <input className={inputBase} {...props} />;
}

export function Textarea(props) {
  return <textarea rows={4} className={`${inputBase} h-auto py-3`} {...props} />;
}

export function Select({ children, ...rest }) {
  return (
    <div className="relative">
      <select className={`${inputBase} appearance-none pr-10 cursor-pointer`} {...rest}>
        {children}
      </select>
      <Icon name="chevron-down" size={18} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sand-500" />
    </div>
  );
}

export function Checkbox({ label, ...rest }) {
  return (
    <label className="inline-flex cursor-pointer items-start gap-3 text-body text-sand-700">
      <input type="checkbox" className="peer sr-only" {...rest} />
      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-xs bg-sand-0 shadow-hairline transition-colors duration-fast peer-checked:bg-forest-900 peer-checked:[&_svg]:opacity-100 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-forest-600">
        <Icon name="check" size={13} className="text-forest-50 opacity-0 transition-opacity duration-instant" />
      </span>
      {label}
    </label>
  );
}

export function Radio({ label, name, ...rest }) {
  return (
    <label className="inline-flex cursor-pointer items-center gap-3 text-body text-sand-700">
      <input type="radio" name={name} className="peer sr-only" {...rest} />
      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-pill bg-sand-0 shadow-hairline transition-all duration-fast peer-checked:shadow-[inset_0_0_0_6px_#1D3A22]" />
      {label}
    </label>
  );
}

export function Toggle({ label, ...rest }) {
  return (
    <label className="inline-flex cursor-pointer items-center gap-3 text-body text-sand-700">
      <input type="checkbox" role="switch" className="peer sr-only" {...rest} />
      <span className="relative h-6 w-11 shrink-0 rounded-pill bg-sand-200 transition-colors duration-fast peer-checked:bg-forest-900 after:absolute after:left-0.5 after:top-0.5 after:h-5 after:w-5 after:rounded-pill after:bg-sand-0 after:shadow-sm after:transition-transform after:duration-fast peer-checked:after:translate-x-5" />
      {label}
    </label>
  );
}

/* ---------- Alert ---------- */
export function Alert({ tone = 'info', title, children }) {
  const tones = {
    info: 'bg-sky-50 text-sky-700',
    success: 'bg-forest-100 text-forest-700',
    warning: 'bg-amber-50 text-amber-700',
    danger: 'bg-carnelian-50 text-carnelian-700',
  };
  const icons = { info: 'bell', success: 'check', warning: 'shield', danger: 'close' };
  return (
    <div role="status" className={`flex items-start gap-3 rounded-sm p-4 ${tones[tone]}`}>
      <Icon name={icons[tone]} size={20} className="mt-0.5 shrink-0" />
      <div>
        {title && <p className="m-0 font-semibold">{title}</p>}
        <p className="m-0 text-body-sm opacity-90">{children}</p>
      </div>
    </div>
  );
}

/* ---------- Tabs ---------- */
export function Tabs({ items, initial = 0 }) {
  const [active, setActive] = useState(initial);
  return (
    <div>
      <div role="tablist" className="inline-flex gap-1 rounded-pill bg-sand-100 p-1">
        {items.map((it, i) => (
          <button
            key={it.label} role="tab" aria-selected={active === i}
            onClick={() => setActive(i)}
            className={`rounded-pill px-4 py-2 text-body-sm font-semibold transition-all duration-fast ${
              active === i ? 'bg-sand-0 text-sand-900 shadow-sm' : 'text-sand-600 hover:text-sand-900'
            }`}
          >
            {it.label}
          </button>
        ))}
      </div>
      <div role="tabpanel" className="pt-6">{items[active].content}</div>
    </div>
  );
}

/* ---------- Accordion ---------- */
export function Accordion({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="divide-y divide-sand-200 border-y border-sand-200">
      {items.map((it, i) => (
        <div key={it.q}>
          <button
            aria-expanded={open === i}
            onClick={() => setOpen(open === i ? -1 : i)}
            className="flex w-full items-center justify-between gap-4 py-5 text-left font-display text-h4 font-medium text-sand-900"
          >
            {it.q}
            <Icon name="chevron-down" size={20} className={`shrink-0 text-forest-600 transition-transform duration-base ${open === i ? 'rotate-180' : ''}`} />
          </button>
          <div className={`grid transition-[grid-template-rows] duration-base ease-standard ${open === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
            <div className="overflow-hidden">
              <p className="m-0 pb-5 text-sand-600">{it.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---------- Modal ---------- */
export function Modal({ open, onClose, title, children, footer }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-modal grid place-items-center p-5" role="dialog" aria-modal="true" aria-label={title}>
      <div className="absolute inset-0 bg-sand-950/50 animate-fade-in" onClick={onClose} />
      <div className="relative w-full max-w-lg rounded-md bg-sand-25 p-8 shadow-lg animate-scale-in">
        <div className="mb-4 flex items-start justify-between gap-4">
          <h3 className="m-0 font-display text-h3 text-sand-900">{title}</h3>
          <IconButton icon="close" label="Schließen" onClick={onClose} />
        </div>
        <div className="text-sand-600">{children}</div>
        {footer && <div className="mt-8 flex justify-end gap-3">{footer}</div>}
      </div>
    </div>
  );
}
