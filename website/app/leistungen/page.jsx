import Link from 'next/link';
import { PageHeader, CtaBand, Reveal } from '../../components/sections';
import { Icon, KiBadge } from '../../components/primitives';
import { StackIllustration } from '../../components/illustrations';
import { services } from '../../components/site';

export const metadata = {
  title: 'Leistungen – CRM, Automatisierung & Kundenkommunikation',
  description:
    'CRM-Einführung, Workflow-Automatisierung mit KI und Kundenkommunikation über Superchat, Newsletter und Funnels – für Versicherungsmakler, Baufinanzierer und Immobilienprofis.',
};

export default function LeistungenPage() {
  return (
    <>
      <PageHeader
        eyebrow="Leistungen"
        eyebrowIcon="settings"
        title="Drei Bausteine für einen Betrieb, der von selbst läuft."
        lead="Sie müssen nicht alles auf einmal angehen. Die meisten Kunden starten mit dem größten Schmerzpunkt – wir sagen Ihnen im Erstgespräch ehrlich, welcher das ist."
        media={<StackIllustration />}
      />
      <section className="px-5 py-section-m md:py-section">
        <div className="mx-auto flex max-w-container flex-col gap-6">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 80}>
              <Link
                href={`/leistungen/${s.slug}`}
                className="group grid gap-6 rounded-md bg-forest-100 p-8 no-underline transition-all duration-fast hover:-translate-y-1 hover:shadow-md md:grid-cols-[1fr_2fr_auto] md:items-center md:p-12"
              >
                <div>
                  <span className="inline-grid h-12 w-12 place-items-center rounded-sm bg-sand-0/70 text-forest-800">
                    <Icon name={s.icon} size={24} />
                  </span>
                  <p className="mb-0 mt-4 flex items-center gap-2 text-body-sm font-semibold uppercase tracking-widest text-forest-600">
                    {s.eyebrow} {s.ki && <KiBadge>KI</KiBadge>}
                  </p>
                </div>
                <div>
                  <h2 className="font-display text-h2 text-forest-950">{s.title}</h2>
                  <p className="mt-2 max-w-xl text-sand-700">{s.teaser}</p>
                </div>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-sm bg-sand-0/70 text-sand-900 transition-transform duration-fast group-hover:translate-x-1">
                  <Icon name="arrow-right" size={20} />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand
        title="Nicht sicher, wo Sie anfangen sollen?"
        lead="Genau dafür ist das Erstgespräch da: 30 Minuten, und Sie kennen Ihre drei größten Hebel."
      />
    </>
  );
}
