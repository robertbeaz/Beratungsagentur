import Link from 'next/link';
import {
  HeroShowcase, FeatureStepper, LogoMarquee, StatsSection, CtaBand, TestimonialsGrid, FaqSection, Reveal,
} from '../components/sections';
import { Icon, Eyebrow, TextLink } from '../components/primitives';
import { IntegrationIllustration } from '../components/illustrations';
import { JsonLd, faqJsonLd } from '../components/schema';
import { processSteps, stats, testimonials, homeFaq, tools, audiences, useCases } from '../components/site';

export const metadata = {
  title: 'VERDA – Das digitale Betriebssystem für Versicherungsagenturen',
};

/* Hinweis zur Headline-Varianz: max. ein „Zwei-Satz-Aphorismus" pro Seite –
   die übrigen Überschriften bewusst als Frage, Einzelsatz oder konkrete Zahl. */

/* ---------- Ausgangslage (ersetzt Pain- + Audience-Sektion) ----------
   Schmerz zuerst benennen (PAS-Prinzip), dann Selbsteinordnung nach Größe –
   als redaktionelle Zweispalter-Sektion statt zweier Icon-Karten-Grids. */
const pains = [
  {
    title: 'Daten überall, Überblick nirgends',
    text: 'Kundendaten liegen in Excel, im Postfach und im Verwaltungsprogramm – und jede Auswertung ist Handarbeit.',
  },
  {
    title: 'Anfragen versanden',
    text: 'Interessenten schreiben über Portal, WhatsApp und E-Mail. Bis jemand antwortet, hat der Wettbewerber den Termin.',
  },
  {
    title: 'Verwaltung frisst Beratungszeit',
    text: 'Unterlagen anfordern, Daten übertragen, Standardmails tippen – Stunden pro Woche, die keine Provision bringen.',
  },
];

function SituationSection() {
  return (
    <section className="px-5 py-section-m md:py-section">
      <div className="mx-auto max-w-container">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <Eyebrow icon="shield">Kommt Ihnen das bekannt vor?</Eyebrow>
              <h2 className="mt-3 font-display text-display-lg text-sand-900">
                Wie viele Stunden pro Woche kostet Sie Ihre Verwaltung?
              </h2>
              <p className="mt-6 max-w-xl text-body-lg text-sand-700">
                Das ist kein Personalproblem – es ist ein Prozessproblem.
                Genau dazu beraten wir. Und anders als eine Softwarefirma hören wir
                nicht bei der Empfehlung auf: Wir implementieren die Lösung, bis sie
                in Ihrem Alltag läuft.
              </p>
              <div className="mt-6">
                <TextLink href="/leistungen">Unsere Leistungen ansehen</TextLink>
              </div>
            </Reveal>
          </div>
          <div>
            {pains.map((p, i) => (
              <Reveal key={p.title} delay={i * 110} className="reveal-left">
                <div className="flex gap-6 border-t border-sand-200 py-8 first:border-t-0 first:pt-0 md:gap-8">
                  <span className="font-data text-data font-medium leading-8 text-forest-600">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-h3 text-sand-900">{p.title}</h3>
                    <p className="mt-2 text-sand-600">{p.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        {/* Selbsteinordnung nach Agenturgröße – schmale Index-Leiste statt Karten-Grid */}
        <Reveal delay={120}>
          <div className="mt-20 border-t border-sand-200 pt-12">
            <p className="m-0 font-display text-h4 text-sand-900">Wo steht Ihre Agentur heute?</p>
            <div className="mt-8 grid gap-x-12 gap-y-8 sm:grid-cols-3">
              {audiences.map((a) => (
                <div key={a.label} className="flex flex-col">
                  <p className="m-0 font-semibold text-sand-900">{a.label}</p>
                  <p className="m-0 mt-1.5 flex-1 text-body-sm text-sand-600">{a.text}</p>
                  <div className="mt-3">
                    <TextLink href={a.href} className="text-body-sm">{a.linkLabel}</TextLink>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Integrations-Sektion (Bestandssysteme & Schnittstellen) ---------- */
const integrationPoints = [
  'E-Mail-Postfach & Kalender',
  'Bestandssystem',
  'Telefonanlage',
  'WhatsApp Business',
  'Bestehende Website & Formulare',
];

function IntegrationSection() {
  return (
    <section className="bg-sand-50 px-5 py-section-m md:py-section">
      <div className="mx-auto max-w-container">
        <Reveal>
          <Eyebrow icon="settings">Tool-Integration</Eyebrow>
          <h2 className="mt-3 max-w-2xl font-display text-display-lg text-sand-900">
            Wir bauen auf dem auf, was Sie schon nutzen
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-5 lg:grid-cols-[1.15fr_0.85fr] md:mt-16">
          <Reveal className="h-full">
            <div className="flex h-full flex-col rounded-md bg-forest-100 p-8 md:p-12">
              <h3 className="font-display text-h3 text-forest-950">Integriert in Ihre bestehende Software</h3>
              <p className="mt-3 max-w-lg text-sand-700">
                Wir arbeiten mit dem, was Sie schon nutzen – Bestandssystem, E-Mail
                und Kalender. Wir vereinfachen Ihre Abläufe, ohne bestehende Systeme
                zu ersetzen.
              </p>
              <div className="mt-5">
                <TextLink href="/leistungen/digitale-agentur">Mehr erfahren</TextLink>
              </div>
              <IntegrationIllustration />
            </div>
          </Reveal>
          <Reveal delay={100} className="h-full">
            <div className="flex h-full flex-col rounded-md bg-sand-0 p-8 shadow-hairline md:p-12">
              <h3 className="font-display text-h3 text-sand-900">Direkte Schnittstellen erleichtern die Handhabung</h3>
              <p className="mt-3 text-sand-600">
                Wir kennen die gängigsten CRM-, Marketing- und Automatisierungs-Tools aus
                der täglichen Projektarbeit – und implementieren die, die zu Ihren
                Abläufen passen.
              </p>
              <ul className="mt-8 flex-1 list-none space-y-3 p-0">
                {integrationPoints.map((point) => (
                  <li key={point} className="flex items-center gap-3">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-pill bg-sand-0 text-forest-700 shadow-hairline">
                      <Icon name="check" size={14} />
                    </span>
                    <span className="text-sand-800">{point}</span>
                  </li>
                ))}
              </ul>
              <p className="mb-0 mt-8 text-body-sm text-sand-500">
                Umgesetzt je nach Bedarf mit {tools.join(', ')} – und weiteren Tools.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- Ablauf als vertikale Timeline ---------- */
function ProcessSection() {
  return (
    <section className="px-5 py-section-m md:py-section">
      <div className="mx-auto max-w-container">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <Eyebrow icon="calendar">So arbeiten wir</Eyebrow>
              <h2 className="mt-3 font-display text-display-lg text-sand-900">
                In vier Etappen von der Analyse bis zur Übergabe
              </h2>
              <div className="mt-8">
                <TextLink href="/kurz-check">Mit Etappe 01 starten – kostenloser Kurz-Check</TextLink>
              </div>
            </Reveal>
          </div>
          <Reveal className="relative">
            {/* Linie der Timeline – zeichnet sich beim Reveal von oben ein (.reveal-rail) */}
            <span aria-hidden="true" className="reveal-rail absolute bottom-5 left-5 top-5 w-px bg-sand-200" />
            <ol className="relative m-0 list-none space-y-12 p-0">
              {processSteps.map((p) => (
                <li key={p.step} className="flex gap-6 md:gap-8">
                  <span className="z-10 grid h-10 w-10 shrink-0 place-items-center rounded-pill bg-sand-0 font-data text-data font-medium text-forest-700 shadow-hairline">
                    {p.step}
                  </span>
                  <div className="pt-1">
                    <h3 className="font-display text-h4 text-sand-900">{p.title}</h3>
                    <p className="mt-2 text-body-sm text-sand-600">{p.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- Featured Use Case ----------
   Ein Projekt redaktionell erzählt statt drei identischer Teaser-Karten;
   die übrigen Cases als kompakte Zeilen darunter. */
function UseCaseTeaser() {
  const featured = useCases.find((c) => c.title.startsWith('Schadenmeldungen einsammeln')) ?? useCases[0];
  const more = ['/leistungen/kundenmagnet', '/leistungen/ki-assistenz']
    .map((href) => useCases.find((c) => c.serviceHref === href))
    .filter(Boolean);

  return (
    <section className="px-5 py-section-m md:py-section">
      <div className="mx-auto max-w-container">
        <Reveal>
          <Eyebrow icon="chart">Aus der Praxis · ein Projekt im Detail</Eyebrow>
          <h2 className="mt-3 max-w-3xl font-display text-display-lg text-sand-900">
            {featured.title}
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 md:mt-12">
          <Reveal>
            <p className="m-0 text-body-sm font-semibold uppercase tracking-widest text-forest-600">
              {featured.branch}
            </p>
            <p className="mt-4 text-body-lg text-sand-700">{featured.problem}</p>
            <p className="mt-4 text-sand-600">{featured.improvement}</p>
            <div className="mt-6">
              <TextLink href="/use-cases">Alle Use Cases ansehen</TextLink>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-md bg-forest-100 p-7 md:p-8">
              <p className="m-0 flex items-baseline gap-2 text-body-sm text-amber-700">
                <span className="font-data font-medium">vorher</span> über 15 E-Mails pro Schadenfall
              </p>
              <div className="mt-5 grid gap-6 sm:grid-cols-2">
                <div className="border-t border-forest-900/15 pt-4">
                  <p className="m-0 font-display text-h3 font-medium text-forest-900">{featured.gain.value}</p>
                  <p className="m-0 mt-1 text-body-sm text-sand-600">{featured.gain.label}</p>
                </div>
                <div className="border-t border-forest-900/15 pt-4">
                  <p className="m-0 font-display text-h3 font-medium text-forest-900">{featured.time.value}</p>
                  <p className="m-0 mt-1 text-body-sm text-sand-600">{featured.time.label}</p>
                </div>
              </div>
              <p className="m-0 mt-5 flex items-center gap-2 border-t border-forest-900/15 pt-4 text-body-sm text-sand-700">
                <Icon name="clock" size={16} className="shrink-0 text-forest-700" />
                {featured.duration}
              </p>
            </div>
          </Reveal>
        </div>
        {/* Weitere Cases als kompakte Zeilen */}
        <Reveal delay={150}>
          <div className="mt-14 border-t border-sand-200">
            {more.map((c) => (
              <Link
                key={c.title}
                href="/use-cases"
                className="group -mx-4 flex flex-col gap-1.5 rounded-sm border-b border-sand-200 px-4 py-6 no-underline transition-colors duration-fast hover:bg-sand-50 sm:flex-row sm:items-center sm:gap-6"
              >
                <span className="w-56 shrink-0 text-body-sm text-sand-500">{c.branch}</span>
                <span className="flex-1 font-display text-h4 font-medium text-sand-900">{c.title}</span>
                <span className="flex items-center gap-2 font-semibold text-forest-700">
                  {c.gain.value}
                  <Icon name="arrow-right" size={16} className="transition-transform duration-fast group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
          <p className="mt-6 text-body-sm text-sand-500">
            Beispielprojekte – Zahlen werden nach Kundenfreigabe durch echte Ergebnisse ersetzt.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd(homeFaq)} />
      <HeroShowcase
        eyebrow="Beratung & Implementierung – keine Software von der Stange"
        title={'Das digitale Betriebssystem für Ihre Versicherungs­agentur.'}
        lead="CRM, automatisierte Prozesse und Kundenkommunikation – in 90 Tagen eingerichtet, verbunden und in Ihrem Team geschult. Zum Festpreis."
        secondaryLabel="Pakete ansehen"
        secondaryHref="/leistungen"
      />
      <LogoMarquee
        label="Herstellerunabhängig: Wir verkaufen keine Software, wir implementieren die passende – zum Beispiel"
        logos={tools}
      />
      <SituationSection />
      <FeatureStepper title="Wir beraten, implementieren und schulen – in drei Paketen." />
      <ProcessSection />
      <IntegrationSection />
      <UseCaseTeaser />
      <StatsSection
        title="Ergebnisse, die man im Kalender sieht."
        lead="Was unsere Kunden nach der Zusammenarbeit anders machen – gemessen, nicht geschätzt."
        stats={stats}
      />
      <TestimonialsGrid testimonials={testimonials} tone="plain" />
      <FaqSection items={homeFaq} />
      <CtaBand />
    </>
  );
}
