/* ============================================================
   VERDA Design System · sections.jsx · v1.0.0
   Marketing-Website-Sections. Benötigt primitives.jsx.
   ============================================================ */
import React, { useState } from 'react';
import { Button, TextLink, Icon, IconButton, Eyebrow, StatCard, KiBadge, Accordion } from './primitives';

/* ---------- Brand-Wortmarke mit Schleifen-Motiv ---------- */
export function Wordmark({ name = 'VERDA', className = '' }) {
  return (
    <span className={`relative inline-block font-display text-[1.6rem] font-bold tracking-tight text-sand-950 ${className}`}>
      {name}
      <svg viewBox="0 0 120 14" className="absolute -bottom-1.5 left-0 w-full text-forest-500" aria-hidden="true">
        <path d="M2 10 C 30 2, 44 2, 58 8 C 64 10.5, 63 3, 57 5 C 51 7, 70 12, 118 6"
          fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </span>
  );
}

/* ---------- Announcement-Bar ---------- */
export function AnnouncementBar({ children, cta = 'Mehr erfahren', href = '#' }) {
  return (
    <div className="bg-forest-900 px-5 py-4 text-forest-50">
      <div className="mx-auto flex max-w-container flex-wrap items-center justify-center gap-x-6 gap-y-3 text-center">
        <p className="m-0 text-body-lg">{children}</p>
        <a href={href} className="rounded-sm bg-sun-300 px-5 py-2 font-semibold text-sand-900 no-underline transition-colors duration-fast hover:bg-sun-400">
          {cta}
        </a>
      </div>
    </div>
  );
}

/* ---------- Navbar ---------- */
export function Navbar({ name = 'VERDA', links = [], cta = 'Gespräch vereinbaren' }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-sticky border-b border-sand-950/5 bg-sand-25/90 backdrop-blur">
      <nav className="mx-auto flex h-nav-m max-w-container items-center justify-between px-5 md:h-nav">
        <a href="/" className="no-underline"><Wordmark name={name} /></a>
        <div className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="font-medium text-sand-700 no-underline transition-colors duration-fast hover:text-sand-950">
              {l.label}
            </a>
          ))}
          <Button size="sm">{cta}</Button>
        </div>
        <button
          className="grid h-11 w-11 place-items-center rounded-sm bg-sand-100 lg:hidden"
          aria-expanded={open} aria-label="Menü"
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? 'close' : 'menu'} size={22} />
        </button>
      </nav>
      {open && (
        <div className="rounded-b-md border-t border-sand-950/5 bg-sand-25 px-5 py-6 lg:hidden animate-fade-in">
          <p className="m-0 mb-4 font-display text-h4 text-sand-900">Produkte</p>
          <div className="flex flex-col">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="flex items-center gap-4 border-b border-sand-100 py-4 no-underline">
                {l.icon && <Icon name={l.icon} size={26} className="text-sand-800" />}
                <span>
                  <span className="block font-semibold text-sand-900">
                    {l.ki && <KiBadge />} {l.label}
                  </span>
                  {l.sub && <span className="block text-body-sm text-sand-500">{l.sub}</span>}
                </span>
              </a>
            ))}
          </div>
          <Button className="mt-6 w-full">{cta}</Button>
        </div>
      )}
    </header>
  );
}

/* ---------- Hero (Sage-Fläche, zentriert) ---------- */
export function Hero({ title, lead, cta = 'Gespräch vereinbaren', secondary, media }) {
  return (
    <section className="bg-forest-100 px-5 pb-0 pt-section-m md:pt-section">
      <div className="mx-auto max-w-container text-center">
        <h1 className="mx-auto max-w-3xl animate-fade-up font-display text-display-xl text-forest-950">
          {title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl animate-fade-up text-body-lg text-sand-600 [animation-delay:120ms]">
          {lead}
        </p>
        <div className="mt-10 flex animate-fade-up flex-wrap items-center justify-center gap-4 [animation-delay:240ms]">
          <Button size="lg">{cta}</Button>
          {secondary && <Button size="lg" variant="secondary">{secondary}</Button>}
        </div>
        {media && <div className="mt-16 animate-fade-up [animation-delay:360ms]">{media}</div>}
      </div>
    </section>
  );
}

/* ---------- Logo-Marquee ---------- */
export function LogoMarquee({ label = '2000+ Kunden vertrauen uns bereits', logos = [] }) {
  const row = [...logos, ...logos];
  return (
    <section className="overflow-hidden py-16">
      <p className="mb-8 text-center text-body-lg text-sand-500">{label}</p>
      <div className="flex w-max animate-marquee gap-20 hover:[animation-play-state:paused]">
        {row.map((logo, i) => (
          <span key={i} className="whitespace-nowrap font-display text-h3 font-medium text-sand-400">
            {logo}
          </span>
        ))}
      </div>
    </section>
  );
}

/* ---------- Produkt-Showcase (große Sage-Karte) ---------- */
export function ProductShowcase({ eyebrow, eyebrowIcon = 'document', title, text, linkLabel = 'Mehr erfahren', media }) {
  return (
    <section className="px-5 py-section-m md:py-section">
      <div className="mx-auto max-w-container">
        {eyebrow && <Eyebrow icon={eyebrowIcon}>{eyebrow}</Eyebrow>}
        <h2 className="mt-3 max-w-2xl font-display text-display-lg text-sand-900">{title}</h2>
        <div className="relative mt-10 overflow-hidden rounded-md bg-forest-100 p-8 md:p-12">
          <div className="absolute right-6 top-6"><IconButton label={linkLabel} /></div>
          <div className="max-w-xl">
            <p className="text-body-lg text-sand-700">{text}</p>
            <div className="mt-6"><TextLink>{linkLabel}</TextLink></div>
          </div>
          {media && <div className="mt-12">{media}</div>}
        </div>
      </div>
    </section>
  );
}

/* ---------- Stats-Section ---------- */
export function StatsSection({ title, lead, stats = [] }) {
  return (
    <section className="bg-forest-100 px-5 py-section-m md:py-section">
      <div className="mx-auto max-w-container">
        <h2 className="max-w-xl font-display text-display-lg text-forest-950">{title}</h2>
        {lead && <p className="mt-4 max-w-xl text-body-lg text-sand-600">{lead}</p>}
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => <StatCard key={s.label} value={s.value} label={s.label} />)}
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA-Band (dunkelgrün) ---------- */
export function CtaBand({ title, lead, cta = 'Gespräch vereinbaren', media }) {
  return (
    <section className="bg-forest-900 px-5 py-section-m text-center md:py-section">
      <div className="mx-auto max-w-container">
        <h2 className="mx-auto max-w-2xl font-display text-display-lg text-forest-50">{title}</h2>
        {lead && <p className="mx-auto mt-5 max-w-xl text-body-lg text-forest-200">{lead}</p>}
        <div className="mt-10">
          <Button size="lg" variant="accent">{cta}</Button>
        </div>
        {media && <div className="mt-16">{media}</div>}
      </div>
    </section>
  );
}

/* ---------- Testimonial ---------- */
export function Testimonial({ quote, name, role, avatar }) {
  return (
    <section className="px-5 py-section-m md:py-section">
      <figure className="mx-auto max-w-3xl text-center">
        <div className="mb-6 flex justify-center gap-1 text-forest-500">
          {[...Array(5)].map((_, i) => <Icon key={i} name="star" size={20} />)}
        </div>
        <blockquote className="m-0 font-display text-h2 font-medium leading-snug text-sand-900">
          „{quote}"
        </blockquote>
        <figcaption className="mt-8 flex items-center justify-center gap-4">
          {avatar && <img src={avatar} alt="" className="h-12 w-12 rounded-pill object-cover" />}
          <span className="text-left">
            <span className="block font-semibold text-sand-900">{name}</span>
            <span className="block text-body-sm text-sand-500">{role}</span>
          </span>
        </figcaption>
      </figure>
    </section>
  );
}

/* ---------- FAQ ---------- */
export function FaqSection({ title = 'Häufige Fragen', items = [] }) {
  return (
    <section className="px-5 py-section-m md:py-section">
      <div className="mx-auto grid max-w-container gap-12 lg:grid-cols-[1fr_2fr]">
        <h2 className="font-display text-display-lg text-sand-900">{title}</h2>
        <Accordion items={items} />
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
export function Footer({ name = 'VERDA', columns = [], legal = [] }) {
  return (
    <footer className="bg-sand-950 px-5 pb-10 pt-20 text-sand-300">
      <div className="mx-auto max-w-container">
        <div className="grid gap-12 md:grid-cols-[2fr_repeat(3,1fr)]">
          <div>
            <Wordmark name={name} className="!text-sand-25" />
            <p className="mt-4 max-w-xs text-body-sm text-sand-400">
              Digitale Prozesse für Ihren Arbeitsalltag – vom ersten Kontakt bis zur Abrechnung.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <p className="mb-4 font-caption text-caption uppercase tracking-widest text-sand-500">{col.title}</p>
              <ul className="m-0 list-none space-y-3 p-0">
                {col.links.map((l) => (
                  <li key={l}><a href="#" className="text-sand-300 no-underline transition-colors duration-fast hover:text-sand-25">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-body-sm text-sand-500">
          <span>© {new Date().getFullYear()} {name} GmbH</span>
          <div className="flex gap-6">
            {legal.map((l) => <a key={l} href="#" className="text-sand-500 no-underline hover:text-sand-300">{l}</a>)}
          </div>
        </div>
      </div>
    </footer>
  );
}
