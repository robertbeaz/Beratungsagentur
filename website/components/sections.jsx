/* ============================================================
   VERDA Design System · sections.jsx · v1.0.0
   Marketing-Sections, adaptiert für Next.js.
   ============================================================ */
'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ButtonLink, Icon, Eyebrow, StatCard, KiBadge, Accordion } from './primitives';
import { HeroWidgets, HeroIconTiles, DashboardMockup, FlowIllustration, PhoneChatMockup } from './illustrations';
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
          <ButtonLink href="/erstgespraech" size="sm">{site.cta}</ButtonLink>
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
          <ButtonLink href="/erstgespraech" className="mt-6 w-full" onClick={() => setOpen(false)}>
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
          <ButtonLink href="/erstgespraech" size="lg" variant="accent" icon="arrow-right">{site.cta}</ButtonLink>
          {secondaryLabel && (
            <ButtonLink href={secondaryHref} size="lg" variant="secondary">{secondaryLabel}</ButtonLink>
          )}
        </div>
        <p className="mt-6 animate-fade-up text-body-sm text-sand-500 [animation-delay:360ms]">
          Kostenlos & unverbindlich · 30 Minuten · per Video oder Telefon
        </p>
        {media && <div className="mt-14 animate-fade-up [animation-delay:480ms]">{media}</div>}
      </div>
    </section>
  );
}

/* ---------- Hero-Showcase (Startseite, verteilte Prozess-Widgets) ---------- */
export function HeroShowcase({ eyebrow, title, lead, secondaryLabel, secondaryHref }) {
  return (
    <section className="relative overflow-hidden bg-forest-100 px-5 pb-14 pt-8 md:pb-24 md:pt-10 xl:min-h-[max(620px,calc(100dvh-232px))] xl:pb-24">
      {/* Schwebende Widgets über die gesamte Hero-Fläche (ab xl) */}
      <div className="animate-fade-in [animation-delay:400ms]">
        <HeroWidgets />
      </div>

      <div className="relative mx-auto max-w-container text-center">
        {eyebrow && (
          <p className="m-0 mb-3 hidden animate-fade-up sm:block">
            <span className="inline-flex items-center gap-2 rounded-pill bg-sand-0/70 px-4 py-1.5 text-body-sm font-semibold text-forest-800 shadow-hairline">
              {eyebrow}
            </span>
          </p>
        )}
        <h1 className="mx-auto max-w-3xl animate-fade-up font-display text-display-xl text-forest-950">
          {title}
        </h1>
        <p className="mx-auto mt-3 max-w-2xl animate-fade-up text-body-lg text-sand-600 [animation-delay:120ms]">
          {lead}
        </p>
        <div className="mt-5 flex animate-fade-up flex-wrap items-center justify-center gap-4 [animation-delay:240ms]">
          <ButtonLink href="/erstgespraech" size="lg">{site.cta}</ButtonLink>
          {secondaryLabel && (
            <ButtonLink href={secondaryHref} size="lg" variant="secondary">{secondaryLabel}</ButtonLink>
          )}
        </div>
        <p className="mt-2 animate-fade-up text-body-sm text-sand-500 [animation-delay:360ms]">
          Kostenlos & unverbindlich · 30 Minuten · per Video oder Telefon
        </p>
        {/* Unterhalb von xl: kompakte Icon-Kacheln statt der Widgets */}
        <div className="mt-9 animate-fade-up [animation-delay:480ms] xl:hidden">
          <HeroIconTiles />
        </div>
      </div>
    </section>
  );
}

/* ---------- Feature-Stepper (Leistungen im Wechsel, Nelly-Muster) ---------- */
const stepperMedia = {
  'crm-und-daten': <DashboardMockup />,
  'automatisierung-und-ki': <FlowIllustration />,
  'kundenkommunikation': <PhoneChatMockup />,
};

export function FeatureStepper({ title = 'Drei Bausteine für einen Betrieb, der von selbst läuft.' }) {
  const [active, setActive] = useState(0);
  const next = () => setActive((active + 1) % services.length);

  return (
    <section id="leistungen" className="px-5 py-section-m md:py-section">
      <div className="mx-auto max-w-container">
        <Reveal>
          <h2 className="mx-auto max-w-2xl text-center font-display text-display-lg text-sand-900">{title}</h2>
        </Reveal>
        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-16">
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
                  className="block w-full border-t border-sand-200 py-5 text-left font-display text-h4 font-medium text-sand-400 transition-colors duration-fast first:border-t-0 hover:text-sand-700"
                >
                  {s.eyebrow}
                </button>
              )
            )}
          </div>
          {/* Rechte Spalte: Illustration der aktiven Leistung */}
          <div className="rounded-md bg-sand-50 p-6 sm:p-10 md:p-14">
            <div key={services[active].slug} className="animate-fade-in">
              {stepperMedia[services[active].slug]}
            </div>
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
  const row = [...logos, ...logos];
  return (
    <section className="overflow-hidden pb-10 pt-8">
      <p className="mb-6 text-center text-body-lg text-sand-500">{label}</p>
      <div className="flex w-max animate-marquee gap-20 hover:[animation-play-state:paused]" aria-hidden="true">
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
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
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
  lead = 'In 30 Minuten wissen Sie, wo Ihre größten Hebel liegen – und ob wir zueinander passen.',
  ctaLabel = site.cta,
}) {
  return (
    <section className="bg-forest-900 px-5 py-section-m text-center md:py-section" data-theme="brand">
      <div className="mx-auto max-w-container">
        <Reveal>
          <h2 className="mx-auto max-w-2xl font-display text-display-lg text-forest-50">{title}</h2>
          {lead && <p className="mx-auto mt-5 max-w-xl text-body-lg text-forest-200">{lead}</p>}
          <div className="mt-10">
            <ButtonLink href="/erstgespraech" size="lg" variant="accent" icon="arrow-right">{ctaLabel}</ButtonLink>
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

/* ---------- FAQ ---------- */
export function FaqSection({ title = 'Häufige Fragen', items = [] }) {
  return (
    <section className="px-5 py-section-m md:py-section">
      <div className="mx-auto grid max-w-container gap-12 lg:grid-cols-[1fr_2fr]">
        <Reveal>
          <h2 className="font-display text-display-lg text-sand-900">{title}</h2>
          <p className="mt-4 text-sand-600">
            Ihre Frage ist nicht dabei? <Link href="/erstgespraech" className="font-semibold">Stellen Sie sie uns direkt.</Link>
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
      { label: 'CRM & Datenstruktur', href: '/leistungen/crm-und-daten' },
      { label: 'Automatisierung & KI', href: '/leistungen/automatisierung-und-ki' },
      { label: 'Marketing & Kundenkommunikation', href: '/leistungen/kundenkommunikation' },
    ],
  },
  {
    title: 'Unternehmen',
    links: [
      { label: 'Use Cases', href: '/use-cases' },
      { label: 'Über uns', href: '/ueber-uns' },
      { label: 'Erstgespräch', href: '/erstgespraech' },
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
              Beratung und Implementierung digitaler Prozesse für Versicherungsmakler,
              Baufinanzierer und Immobilienprofis – herstellerunabhängig, von der
              Analyse bis zur Schulung.
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
