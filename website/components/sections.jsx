/* ============================================================
   VERDA Design System · sections.jsx · v1.0.0
   Marketing-Sections, adaptiert für Next.js.
   ============================================================ */
'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ButtonLink, Icon, Eyebrow, StatCard, KiBadge, Accordion } from './primitives';
import { HeroBeforeAfter } from './illustrations';
import { DocumentScene, MetricsScene, InboxScene } from './feature-scenes';
import { site, navLinks, services } from './site';

/* ---------- Scroll-Reveal (700ms, ease-out, IntersectionObserver) ---------- */
export function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-revealed');
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </div>
  );
}

/* ---------- Brand-Wortmarke mit Schleifen-Motiv ---------- */
export function Wordmark({ name = site.name, className = '' }) {
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

/* ---------- Navbar ----------
   Hellgrün auf Seitenanfang (verschmilzt mit dem Sage-Hero),
   beim Scrollen weiß/transparent mit Blur. „Leistungen" als Dropdown. */
export function Navbar() {
  const [open, setOpen] = useState(false);
  const [ddOpen, setDdOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`sticky top-0 z-sticky border-b transition-colors duration-base ${
        solid ? 'border-sand-950/5 bg-sand-25/90 backdrop-blur' : 'border-transparent bg-forest-100'
      }`}
    >
      <nav className="mx-auto flex h-nav-m max-w-container items-center justify-between px-5 md:h-nav">
        <Link href="/" className="no-underline" aria-label="Zur Startseite">
          <Wordmark />
        </Link>
        <div className="hidden items-center gap-6 lg:flex">
          {/* Leistungen-Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDdOpen(true)}
            onMouseLeave={() => setDdOpen(false)}
          >
            <button
              aria-expanded={ddOpen}
              aria-haspopup="true"
              onClick={() => setDdOpen(!ddOpen)}
              className={`inline-flex items-center gap-1.5 rounded-sm px-3 py-2 font-medium transition-colors duration-fast ${
                ddOpen ? 'bg-forest-200/60 text-sand-950' : 'text-sand-700 hover:text-sand-950'
              }`}
            >
              Leistungen
              <Icon name="chevron-down" size={16} className={`transition-transform duration-fast ${ddOpen ? 'rotate-180' : ''}`} />
            </button>
            {ddOpen && (
              <div className="absolute left-0 top-full pt-2">
                <div className="w-[400px] rounded-md bg-sand-0 p-5 shadow-lg animate-fade-in">
                  <span className="inline-block rounded-xs bg-forest-100 px-2 py-0.5 text-body-sm font-semibold text-forest-800">
                    Leistungen
                  </span>
                  <div className="mt-3 flex flex-col">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/leistungen/${s.slug}`}
                        onClick={() => setDdOpen(false)}
                        className="flex items-start gap-4 rounded-sm p-3 no-underline transition-colors duration-fast hover:bg-sand-50"
                      >
                        <Icon name={s.icon} size={24} className="mt-0.5 shrink-0 text-sand-800" />
                        <span>
                          <span className="flex items-center gap-2 font-semibold text-sand-900">
                            {s.eyebrow} {s.ki && <KiBadge>KI</KiBadge>}
                          </span>
                          <span className="block text-body-sm text-sand-500">{s.sub}</span>
                        </span>
                      </Link>
                    ))}
                  </div>
                  <Link
                    href="/leistungen"
                    onClick={() => setDdOpen(false)}
                    className="mt-2 flex items-center gap-2 border-t border-sand-100 px-3 pt-3 text-body-sm font-semibold text-forest-700 no-underline transition-colors duration-fast hover:text-forest-900"
                  >
                    Alle Leistungen im Überblick
                    <Icon name="arrow-right" size={15} />
                  </Link>
                </div>
              </div>
            )}
          </div>
          {navLinks.filter((l) => l.href !== '/leistungen').map((l) => (
            <Link key={l.label} href={l.href} className="px-1 font-medium text-sand-700 no-underline transition-colors duration-fast hover:text-sand-950">
              {l.label}
            </Link>
          ))}
          <ButtonLink href="/kurz-check" size="sm">{site.cta}</ButtonLink>
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
        <div className="max-h-[calc(100dvh-56px)] overflow-y-auto rounded-b-md border-t border-sand-950/5 bg-sand-25 px-5 py-6 lg:hidden animate-fade-in">
          <p className="m-0 mb-1 font-display text-h4 text-sand-900">Leistungen</p>
          <div className="flex flex-col">
            {services.map((s) => (
              <Link
                key={s.slug} href={`/leistungen/${s.slug}`} onClick={() => setOpen(false)}
                className="flex items-center gap-4 border-b border-sand-100 py-4 no-underline"
              >
                <Icon name={s.icon} size={26} className="shrink-0 text-sand-800" />
                <span>
                  <span className="flex items-center gap-2 font-semibold text-sand-900">
                    {s.eyebrow} {s.ki && <KiBadge>KI</KiBadge>}
                  </span>
                  <span className="block text-body-sm text-sand-500">{s.sub}</span>
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-4 flex flex-col">
            {navLinks.filter((l) => l.href !== '/leistungen').map((l) => (
              <Link
                key={l.label} href={l.href} onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-sand-100 py-4 font-semibold text-sand-900 no-underline"
              >
                {l.label}
                <Icon name="arrow-right" size={18} className="text-forest-600" />
              </Link>
            ))}
          </div>
          <ButtonLink href="/kurz-check" className="mt-6 w-full" onClick={() => setOpen(false)}>
            {site.cta}
          </ButtonLink>
        </div>
      )}
    </header>
  );
}

/* ---------- Hero (Sage-Fläche, zentriert, optional mit Media) ---------- */
export function Hero({ title, lead, secondaryLabel, secondaryHref, media }) {
  return (
    <section className="overflow-hidden bg-forest-100 px-5 pb-section-m pt-section-m md:pb-section md:pt-section">
      <div className="mx-auto max-w-container text-center">
        <h1 className="mx-auto max-w-4xl animate-fade-up font-display text-display-xl text-forest-950">
          {title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl animate-fade-up text-body-lg text-sand-600 [animation-delay:120ms]">
          {lead}
        </p>
        <div className="mt-10 flex animate-fade-up flex-wrap items-center justify-center gap-4 [animation-delay:240ms]">
          <ButtonLink href="/kurz-check" size="lg" variant="accent" icon="arrow-right">{site.cta}</ButtonLink>
          {secondaryLabel && (
            <ButtonLink href={secondaryHref} size="lg" variant="secondary">{secondaryLabel}</ButtonLink>
          )}
        </div>
        <p className="mt-6 animate-fade-up text-body-sm text-sand-500 [animation-delay:360ms]">
          Kostenlos & unverbindlich · 15–20 Minuten · per Video oder Telefon
        </p>
        {media && <div className="mt-14 animate-fade-up [animation-delay:480ms]">{media}</div>}
      </div>
    </section>
  );
}

/* ---------- Hero-Showcase (Startseite) ----------
   Ruhiger Zweispalter: Text linksbündig, rechts ein einziges
   Vorher/Nachher-Bild als Motiv – keine Widgets, keine Deko. */
export function HeroShowcase({ eyebrow, title, lead, secondaryLabel, secondaryHref }) {
  /* Mindesthöhe = Viewport minus Navbar minus Logo-Banner darunter,
     damit Hero UND Banner zusammen ohne Scrollen sichtbar sind
     (Banner-Höhe: ~207px mobil, ~150px ab md – siehe LogoMarquee). */
  return (
    <section className="flex min-h-[calc(100dvh-263px)] items-center overflow-hidden bg-forest-100 px-5 py-10 md:min-h-[calc(100dvh-222px)] md:py-16">
      <div className="mx-auto grid w-full max-w-container items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          {eyebrow && (
            <p className="m-0 mb-4 animate-fade-up">
              <span className="inline-flex items-center gap-2 rounded-pill bg-sand-0/70 px-4 py-1.5 text-body-sm font-semibold text-forest-800 shadow-hairline">
                {eyebrow}
              </span>
            </p>
          )}
          <h1 className="animate-fade-up font-display text-display-lg text-forest-950">
            {title}
          </h1>
          <p className="mt-4 max-w-xl animate-fade-up text-body-lg text-sand-600 [animation-delay:120ms]">
            {lead}
          </p>
          <div className="mt-6 flex animate-fade-up flex-wrap items-center gap-4 [animation-delay:240ms]">
            <ButtonLink href="/kurz-check" size="lg">{site.cta}</ButtonLink>
            {secondaryLabel && (
              <ButtonLink href={secondaryHref} size="lg" variant="secondary">{secondaryLabel}</ButtonLink>
            )}
          </div>
          <p className="mt-3 animate-fade-up text-body-sm text-sand-500 [animation-delay:360ms]">
            Kostenlos & unverbindlich · 15–20 Minuten · per Video oder Telefon
          </p>
        </div>
        <div className="animate-fade-up [animation-delay:240ms]">
          <HeroBeforeAfter />
        </div>
      </div>
    </section>
  );
}

/* ---------- Feature-Stepper (Leistungen im Wechsel, Nelly-Muster) ----------
   Media: Live-JSX-Szenen im „Karten auf geblurrtem Foto"-Stil
   (siehe components/feature-scenes.jsx bzw. grafiken/ im Repo-Root). */
const stepperMedia = {
  'digitale-agentur': <DocumentScene />,
  'kundenmagnet': <MetricsScene />,
  'ki-assistenz': <InboxScene />,
};

export function FeatureStepper({ title = 'Drei Bausteine für einen Betrieb, der von selbst läuft.' }) {
  const [active, setActive] = useState(0);
  const next = () => setActive((active + 1) % services.length);

  return (
    <section id="leistungen" className="bg-sand-50 px-5 py-section-m md:py-section">
      <div className="mx-auto max-w-container">
        <Reveal>
          <h2 className="mx-auto max-w-2xl text-center font-display text-display-lg text-sand-900">{title}</h2>
        </Reveal>
        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-16 md:mt-20">
          {/* Linke Spalte: Kategorien mit aktivem Eintrag */}
          <div>
            {services.map((s, i) =>
              i === active ? (
                <div key={s.slug} className="border-t border-sand-200 py-8 first:border-t-0">
                  <p className="m-0 mb-2 flex items-center gap-2 text-body-sm font-semibold uppercase tracking-widest text-forest-600">
                    {s.eyebrow} {s.ki && <KiBadge>KI</KiBadge>}
                  </p>
                  <h3 className="font-display text-h2 text-sand-900">{s.title}</h3>
                  <p className="mt-3 text-sand-600">{s.teaser}</p>
                  {s.price && (
                    <p className="m-0 mt-4 font-display text-h4 font-medium text-forest-800">
                      ab {s.price.from} <span className="font-body text-body-sm font-normal text-sand-500">Festpreis, einmalig</span>
                    </p>
                  )}
                  <div className="mt-6 flex flex-wrap items-center gap-5">
                    <ButtonLink href={`/leistungen/${s.slug}`} variant="secondary">Mehr erfahren</ButtonLink>
                    <button
                      onClick={next}
                      className="inline-flex items-center gap-2 font-semibold text-forest-700 transition-colors duration-fast hover:text-forest-900"
                    >
                      Weiter
                      <Icon name="arrow-right" size={18} />
                    </button>
                  </div>
                  {/* Fortschritt */}
                  <div className="mt-8 flex gap-1.5" aria-hidden="true">
                    {services.map((_, j) => (
                      <span key={j} className={`h-0.5 flex-1 rounded-pill transition-colors duration-base ${j === active ? 'bg-forest-700' : 'bg-sand-200'}`} />
                    ))}
                  </div>
                </div>
              ) : (
                <button
                  key={s.slug}
                  onClick={() => setActive(i)}
                  className="block w-full border-t border-sand-200 py-5 text-left font-display text-h4 font-medium text-sand-400 transition-all duration-fast first:border-t-0 hover:translate-x-1 hover:text-sand-700"
                >
                  {s.eyebrow}
                </button>
              )
            )}
          </div>
          {/* Rechte Spalte: Szene der aktiven Leistung (bringt eigenen Hintergrund mit).
             Alle drei Szenen liegen im selben Grid-Feld übereinander – so ist der
             Rahmen bei jedem Paket exakt gleich groß und der Wechsel springt nicht. */}
          <div className="grid">
            {services.map((s, i) => (
              <div
                key={s.slug}
                aria-hidden={i !== active}
                className={`[grid-area:1/1] transition-all duration-base ${
                  i === active
                    ? 'scale-100 opacity-100'
                    : 'pointer-events-none invisible scale-[0.97] opacity-0'
                }`}
              >
                {stepperMedia[s.slug]}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Seitenkopf für Unterseiten (optional mit Media rechts) ---------- */
export function PageHeader({ eyebrow, eyebrowIcon, title, lead, dark = false, media }) {
  return (
    <section className={`${dark ? 'bg-forest-900' : 'bg-forest-100'} overflow-hidden px-5 py-section-m md:py-section`} data-theme={dark ? 'brand' : undefined}>
      <div className={`mx-auto max-w-container ${media ? 'grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]' : ''}`}>
        <div>
          {eyebrow && <Eyebrow icon={eyebrowIcon} tone={dark ? 'on-dark' : 'brand'}>{eyebrow}</Eyebrow>}
          <h1 className={`mt-3 max-w-3xl animate-fade-up font-display text-display-lg ${dark ? 'text-forest-50' : 'text-forest-950'}`}>
            {title}
          </h1>
          {lead && (
            <p className={`mt-5 max-w-2xl animate-fade-up text-body-lg [animation-delay:120ms] ${dark ? 'text-forest-200' : 'text-sand-600'}`}>
              {lead}
            </p>
          )}
        </div>
        {media && <div className="animate-fade-up [animation-delay:240ms]">{media}</div>}
      </div>
    </section>
  );
}

/* ---------- Logo-Marquee ---------- */
export function LogoMarquee({ label = 'Wir arbeiten mit den Tools, die Sie brauchen', logos = [] }) {
  /* Die Marquee-Animation läuft bis -50 % – die halbe Laufbreite ist also die
     Loop-Distanz und muss breiter sein als der Viewport, sonst läuft rechts
     Leere mit. 6 Wiederholungen decken auch Ultrawide-Monitore (~3400px) ab. */
  const row = [...Array(6)].flatMap(() => logos);
  return (
    <section className="overflow-hidden pb-10 pt-8">
      <p className="mb-5 text-center text-body-lg text-sand-500">{label}</p>
      <div className="fade-x-edges flex w-max animate-marquee gap-20 hover:[animation-play-state:paused]" aria-hidden="true">
        {row.map((logo, i) => (
          <span key={i} className="whitespace-nowrap font-display text-h3 font-medium text-sand-400">
            {logo}
          </span>
        ))}
      </div>
      <p className="sr-only">{logos.join(', ')}</p>
    </section>
  );
}

/* ---------- Stats-Section ---------- */
export function StatsSection({ title, lead, stats = [], note }) {
  return (
    <section className="bg-forest-100 px-5 py-section-m md:py-section">
      <div className="mx-auto max-w-container">
        <Reveal>
          <h2 className="max-w-xl font-display text-display-lg text-forest-950">{title}</h2>
          {lead && <p className="mt-4 max-w-xl text-body-lg text-sand-600">{lead}</p>}
        </Reveal>
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <StatCard value={s.value} label={s.label} />
            </Reveal>
          ))}
        </div>
        {note && <p className="mt-10 text-body-sm text-sand-500">{note}</p>}
      </div>
    </section>
  );
}

/* ---------- CTA-Band (dunkelgrün) ---------- */
export function CtaBand({
  title = 'Lassen Sie uns über Ihre Prozesse sprechen.',
  lead = 'In 15–20 Minuten Kurz-Check wissen Sie, wo Ihre größten Hebel liegen – und ob wir zueinander passen.',
  ctaLabel = site.cta,
}) {
  return (
    <section className="bg-forest-900 px-5 py-section-m text-center md:py-section" data-theme="brand">
      <div className="mx-auto max-w-container">
        <Reveal>
          <h2 className="mx-auto max-w-2xl font-display text-display-lg text-forest-50">{title}</h2>
          {lead && <p className="mx-auto mt-5 max-w-xl text-body-lg text-forest-200">{lead}</p>}
          <div className="mt-10">
            <ButtonLink href="/kurz-check" size="lg" variant="accent" icon="arrow-right">{ctaLabel}</ButtonLink>
          </div>
          <p className="mt-6 text-body-sm text-forest-200/80">
            Kein Vertrag, kein Verkaufsdruck – Sie entscheiden danach in Ruhe, ob und wie wir weiterarbeiten.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Testimonial (einzeln, groß) ---------- */
export function Testimonial({ quote, name, role }) {
  return (
    <section className="px-5 py-section-m md:py-section">
      <Reveal>
        <figure className="mx-auto max-w-3xl text-center">
          <div className="mb-6 flex justify-center gap-1 text-forest-500">
            {[...Array(5)].map((_, i) => <Icon key={i} name="star" size={20} />)}
          </div>
          <blockquote className="m-0 font-display text-h2 font-medium leading-snug text-sand-900">
            „{quote}“
          </blockquote>
          <figcaption className="mt-8">
            <span className="block font-semibold text-sand-900">{name}</span>
            <span className="block text-body-sm text-sand-500">{role}</span>
          </figcaption>
        </figure>
      </Reveal>
    </section>
  );
}

/* ---------- Testimonials-Grid (mehrere Stimmen nebeneinander) ----------
   tone="sage" (Standard) für einen grünen Block zwischen weißen Sections;
   tone="plain" wenn die vorherige Section bereits grün ist (kein Doppel-Grün). */
export function TestimonialsGrid({ title = 'Was Kunden nach der Zusammenarbeit sagen', testimonials = [], tone = 'sage' }) {
  return (
    <section className={`px-5 py-section-m md:py-section ${tone === 'sage' ? 'bg-forest-100' : ''}`}>
      <div className="mx-auto max-w-container">
        <Reveal>
          <h2 className={`max-w-xl font-display text-display-lg ${tone === 'sage' ? 'text-forest-950' : 'text-sand-900'}`}>{title}</h2>
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 90}>
              <figure className={`m-0 flex h-full flex-col rounded-sm p-6 md:p-8 ${tone === 'sage' ? 'bg-sand-0' : 'bg-sand-0 shadow-hairline'}`}>
                <div className="mb-4 flex gap-1 text-forest-500">
                  {[...Array(5)].map((_, j) => <Icon key={j} name="star" size={16} />)}
                </div>
                <blockquote className="m-0 flex-1 text-sand-700">„{t.quote}“</blockquote>
                <figcaption className="mt-6">
                  <span className="block font-semibold text-sand-900">{t.name}</span>
                  <span className="block text-body-sm text-sand-500">{t.role}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
export function FaqSection({ title = 'Häufige Fragen', items = [] }) {
  return (
    <section className="px-5 py-section-m md:py-section">
      <div className="mx-auto grid max-w-container gap-12 lg:grid-cols-[1fr_2fr]">
        <Reveal>
          <h2 className="font-display text-display-lg text-sand-900">{title}</h2>
          <p className="mt-4 text-sand-600">
            Ihre Frage ist nicht dabei? <Link href="/kurz-check" className="font-semibold">Stellen Sie sie uns direkt.</Link>
          </p>
        </Reveal>
        <Reveal delay={100}>
          <Accordion items={items} />
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
const footerColumns = [
  {
    title: 'Leistungen',
    links: [
      { label: 'Digitale Agentur', href: '/leistungen/digitale-agentur' },
      { label: 'Kundenmagnet', href: '/leistungen/kundenmagnet' },
      { label: 'KI-Assistenz', href: '/leistungen/ki-assistenz' },
    ],
  },
  {
    title: 'Unternehmen',
    links: [
      { label: 'Use Cases', href: '/use-cases' },
      { label: 'Wissen', href: '/wissen' },
      { label: 'Über uns', href: '/ueber-uns' },
      { label: 'Kurz-Check', href: '/kurz-check' },
    ],
  },
  {
    title: 'Rechtliches',
    links: [
      { label: 'Impressum', href: '/impressum' },
      { label: 'Datenschutz', href: '/datenschutz' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-sand-950 px-5 pb-10 pt-20 text-sand-300">
      <div className="mx-auto max-w-container">
        <div className="grid gap-12 md:grid-cols-[2fr_repeat(3,1fr)]">
          <div>
            <Wordmark className="!text-sand-25" />
            <p className="mt-4 max-w-xs text-body-sm text-sand-400">
              Beratung und Implementierung digitaler Prozesse für Versicherungsagenturen –
              herstellerunabhängig, von der Analyse bis zur Schulung.
            </p>
          </div>
          {footerColumns.map((col) => (
            <div key={col.title}>
              <p className="mb-4 text-caption uppercase tracking-widest text-sand-500">{col.title}</p>
              <ul className="m-0 list-none space-y-3 p-0">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sand-300 no-underline transition-colors duration-fast hover:text-sand-25">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-body-sm text-sand-500">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <div className="flex gap-6">
            <Link href="/impressum" className="text-sand-500 no-underline hover:text-sand-300">Impressum</Link>
            <Link href="/datenschutz" className="text-sand-500 no-underline hover:text-sand-300">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
