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

/* ---------- Problem-Sektion ----------
   Direkt nach Hero & Vertrauensleiste: Schmerz zuerst benennen,
   bevor die Lösung (Pakete) gezeigt wird (PAS-Prinzip). */
const pains = [
  {
    icon: 'search',
    title: 'Daten überall, Überblick nirgends',
    text: 'Kundendaten liegen in Excel, im Postfach und im Verwaltungsprogramm – und jede Auswertung ist Handarbeit.',
  },
  {
    icon: 'bell',
    title: 'Anfragen versanden',
    text: 'Interessenten schreiben über Portal, WhatsApp und E-Mail. Bis jemand antwortet, hat der Wettbewerber den Termin.',
  },
  {
    icon: 'document',
    title: 'Verwaltung frisst Beratungszeit',
    text: 'Unterlagen anfordern, Daten übertragen, Standardmails tippen – Stunden pro Woche, die keine Provision bringen.',
  },
];

function PainSection() {
  return (
    <section className="px-5 py-section-m md:py-section">
      <div className="mx-auto max-w-container">
        <Reveal>
          <Eyebrow icon="shield">Kommt Ihnen das bekannt vor?</Eyebrow>
          <h2 className="mt-3 max-w-2xl font-display text-display-lg text-sand-900">
            Ihr Geschäft wächst. Ihre Verwaltung wächst schneller.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {pains.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <div className="h-full rounded-sm bg-sand-0 p-6 shadow-hairline md:p-8">
                <span className="inline-grid h-12 w-12 place-items-center rounded-sm bg-forest-100 text-forest-700">
                  <Icon name={p.icon} size={24} />
                </span>
                <h3 className="mt-5 font-display text-h3 text-sand-900">{p.title}</h3>
                <p className="mt-2 text-sand-600">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <p className="mt-10 max-w-2xl text-body-lg text-sand-700">
            Das ist kein Personalproblem – es ist ein Prozessproblem.
            Genau dazu beraten wir. Und anders als eine Softwarefirma hören wir
            nicht bei der Empfehlung auf: Wir implementieren die Lösung, bis sie
            in Ihrem Alltag läuft.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Brücke zu den Paketen ----------
   Kurze Selbsteinordnung nach Größe, direkt vor den drei Paketen –
   beantwortet „passt das zu meiner Agentur?", bevor die Lösung kommt. */
function AudienceSection() {
  return (
    <section className="bg-sand-50 px-5 py-section-m md:py-section">
      <div className="mx-auto max-w-container">
        <Reveal>
          <Eyebrow icon="user">Für jede Größe passend</Eyebrow>
          <h2 className="mt-3 max-w-2xl font-display text-display-lg text-sand-900">
            Vom Einzelbüro bis zum großen Team – für jede Größe das passende Paket.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {audiences.map((a, i) => (
            <Reveal key={a.label} delay={i * 90}>
              <div className="flex h-full flex-col rounded-sm bg-sand-0 p-6 shadow-hairline md:p-8">
                <span className="inline-grid h-12 w-12 place-items-center rounded-sm bg-forest-100 text-forest-700">
                  <Icon name={a.icon} size={24} />
                </span>
                <h3 className="mt-5 font-display text-h3 text-sand-900">{a.label}</h3>
                <p className="mt-2 flex-1 text-sand-600">{a.text}</p>
                <div className="mt-5">
                  <TextLink href={a.href}>{a.linkLabel}</TextLink>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
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
    <section className="px-5 py-section-m md:py-section">
      <div className="mx-auto max-w-container">
        <Reveal>
          <Eyebrow icon="settings">Tool-Integration</Eyebrow>
          <h2 className="mt-3 max-w-2xl font-display text-display-lg text-sand-900">
            Nahtlose Integration in Ihren Arbeitsalltag
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
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
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-pill bg-forest-100 text-forest-700">
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

/* ---------- Ablauf-Sektion ---------- */
function ProcessSection() {
  return (
    <section className="bg-sand-50 px-5 py-section-m md:py-section">
      <div className="mx-auto max-w-container">
        <Reveal>
          <Eyebrow icon="calendar">So arbeiten wir</Eyebrow>
          <h2 className="mt-3 max-w-2xl font-display text-display-lg text-sand-900">
            Kein IT-Projekt. Ein klarer Weg in vier Etappen.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((p, i) => (
            <Reveal key={p.step} delay={i * 90}>
              <div className="h-full rounded-sm bg-sand-0 p-6 shadow-hairline">
                <span className="font-data text-data font-medium text-forest-600">{p.step}</span>
                <h3 className="mt-3 font-display text-h4 text-sand-900">{p.title}</h3>
                <p className="mt-2 text-body-sm text-sand-600">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <div className="mt-10">
            <TextLink href="/erstgespraech">Mit Etappe 01 starten – kostenloses Erstgespräch</TextLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Use-Case-Teaser ----------
   Konkreter Beweis (eine Kurzgeschichte je Paket) statt nur
   abstrakter Kennzahlen – direkt vor der Stats-/Testimonial-Beweiskette. */
const teaserSlugs = ['/leistungen/digitale-agentur', '/leistungen/kundenmagnet', '/leistungen/ki-assistenz'];

function UseCaseTeaser() {
  const featured = teaserSlugs
    .map((href) => useCases.find((c) => c.serviceHref === href))
    .filter(Boolean);

  return (
    <section className="bg-sand-50 px-5 py-section-m md:py-section">
      <div className="mx-auto max-w-container">
        <Reveal>
          <Eyebrow icon="chart">Aus der Praxis</Eyebrow>
          <h2 className="mt-3 max-w-2xl font-display text-display-lg text-sand-900">
            Sehen Sie, wie andere Agenturen das lösen.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {featured.map((c, i) => (
            <Reveal key={c.title} delay={i * 90}>
              <Link
                href="/use-cases"
                className="group flex h-full flex-col rounded-sm bg-sand-0 p-6 no-underline shadow-hairline transition-all duration-fast hover:-translate-y-1 hover:shadow-md md:p-8"
              >
                <p className="m-0 text-body-sm font-semibold uppercase tracking-widest text-forest-600">
                  {c.branch}
                </p>
                <h3 className="mt-2 font-display text-h4 text-sand-900">{c.title}</h3>
                <p className="mt-2 flex-1 text-sand-600">{c.problem}</p>
                <p className="m-0 mt-5 flex items-start gap-2 font-display text-h4 font-medium text-forest-900">
                  <Icon name="trend" size={20} className="mt-0.5 shrink-0 text-forest-600" />
                  {c.gain.value}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-body-sm font-semibold text-forest-700">
                  Case ansehen
                  <Icon name="arrow-right" size={15} className="transition-transform duration-fast group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <div className="mt-8">
            <TextLink href="/use-cases">Alle Use Cases ansehen</TextLink>
          </div>
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
      <PainSection />
      <AudienceSection />
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
