import {
  HeroShowcase, FeatureStepper, LogoMarquee, StatsSection, CtaBand, Testimonial, FaqSection, Reveal,
} from '../components/sections';
import { Icon, Eyebrow, TextLink } from '../components/primitives';
import { IntegrationIllustration } from '../components/illustrations';
import { processSteps, stats, testimonials, homeFaq, tools } from '../components/site';

export const metadata = {
  title: 'VERDA – Digitale Prozesse für Versicherungsmakler, Baufinanzierer & Immobilienprofis',
};

/* ---------- Problem-Sektion ---------- */
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
            Und genau dafür sind wir da.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Integrations-Sektion (Bestandssysteme & Schnittstellen) ---------- */
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
                Wir arbeiten mit dem, was Sie schon nutzen – Maklerverwaltungsprogramm,
                Immobiliensoftware, E-Mail und Kalender. Wir vereinfachen Ihre Abläufe,
                ohne bestehende Systeme zu ersetzen.
              </p>
              <div className="mt-5">
                <TextLink href="/leistungen/crm-und-daten">Mehr erfahren</TextLink>
              </div>
              <IntegrationIllustration />
            </div>
          </Reveal>
          <Reveal delay={100} className="h-full">
            <div className="flex h-full flex-col rounded-md bg-sand-0 p-8 shadow-hairline md:p-12">
              <h3 className="font-display text-h3 text-sand-900">Direkte Schnittstellen erleichtern die Handhabung</h3>
              <p className="mt-3 text-sand-600">
                Wir unterstützen die gängigsten CRM-, Marketing- und Automatisierungs-Tools –
                und verbinden stetig mehr.
              </p>
              <div className="mt-8 grid flex-1 grid-cols-2 content-center gap-x-6 gap-y-8">
                {tools.map((t) => (
                  <span key={t} className="text-center font-display text-h3 font-medium text-sand-400">
                    {t}
                  </span>
                ))}
              </div>
              <p className="mb-0 mt-8 text-center text-body-sm text-sand-500">… und viele mehr</p>
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
    <section className="px-5 py-section-m md:py-section">
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

export default function HomePage() {
  return (
    <>
      <HeroShowcase
        title={<>Weniger Verwaltung.<br />Mehr Abschlüsse.</>}
        lead="Wir digitalisieren die Prozesse von Versicherungsmaklern, Baufinanzierern und Immobilienprofis – CRM, Automatisierung und Kundenkommunikation aus einer Hand."
      />
      <LogoMarquee logos={tools} />
      <PainSection />
      <FeatureStepper />
      <ProcessSection />
      <IntegrationSection />
      <StatsSection
        title="Ergebnisse, die man im Kalender sieht."
        lead="Was unsere Kunden nach der Zusammenarbeit anders machen – gemessen, nicht geschätzt."
        stats={stats}
      />
      <Testimonial {...testimonials[0]} />
      <FaqSection items={homeFaq} />
      <CtaBand />
    </>
  );
}
