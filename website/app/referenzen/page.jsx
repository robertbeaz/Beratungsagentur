import { PageHeader, CtaBand, Reveal } from '../../components/sections';
import { Icon } from '../../components/primitives';
import { cases, testimonials } from '../../components/site';

export const metadata = {
  title: 'Referenzen – Ergebnisse aus echten Projekten',
  description:
    'CRM-Einführungen, Automatisierungen und Kommunikations-Setups für Versicherungsmakler, Baufinanzierer und Immobilienprofis – mit messbaren Ergebnissen.',
};

function CaseCard({ c, index }) {
  return (
    <Reveal delay={index * 80}>
      <article className="overflow-hidden rounded-md bg-sand-0 shadow-hairline">
        <div className="grid gap-8 p-8 md:grid-cols-2 md:p-12">
          <div>
            <p className="mb-2 font-data text-data font-medium uppercase tracking-widest text-forest-600">
              {c.branch}
            </p>
            <h2 className="font-display text-h2 text-sand-900">{c.title}</h2>
            <div className="mt-6 space-y-5">
              <div>
                <p className="mb-1 text-body-sm font-semibold uppercase tracking-widest text-sand-500">Ausgangslage</p>
                <p className="m-0 text-sand-600">{c.problem}</p>
              </div>
              <div>
                <p className="mb-1 text-body-sm font-semibold uppercase tracking-widest text-sand-500">Lösung</p>
                <p className="m-0 text-sand-600">{c.solution}</p>
              </div>
            </div>
          </div>
          <div className="grid content-center gap-6 rounded-sm bg-forest-100 p-8">
            {c.results.map((r) => (
              <div key={r.label} className="border-t border-forest-900/15 pt-3 first:border-t-0 first:pt-0">
                <div className="font-display text-h2 font-medium text-forest-900">{r.value}</div>
                <div className="text-body-sm text-sand-600">{r.label}</div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function ReferenzenPage() {
  return (
    <>
      <PageHeader
        eyebrow="Referenzen"
        eyebrowIcon="chart"
        title="Ergebnisse statt Buzzwords."
        lead="Drei Projekte, drei Branchen, ein Muster: Prozesse aufräumen, Werkzeuge verbinden, Team mitnehmen. Das kommt dabei heraus."
      />

      <section className="px-5 py-section-m md:py-section">
        <div className="mx-auto flex max-w-container flex-col gap-8">
          {cases.map((c, i) => <CaseCard key={c.title} c={c} index={i} />)}
        </div>
      </section>

      {/* Kundenstimmen */}
      <section className="bg-forest-100 px-5 py-section-m md:py-section">
        <div className="mx-auto max-w-container">
          <Reveal>
            <h2 className="max-w-xl font-display text-display-lg text-forest-950">
              Was Kunden nach der Zusammenarbeit sagen
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 90}>
                <figure className="m-0 flex h-full flex-col rounded-sm bg-sand-0 p-6 md:p-8">
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

      <CtaBand
        title="Ihr Betrieb könnte der nächste sein."
        lead="Erzählen Sie uns im Erstgespräch, wo es bei Ihnen hakt – wir sagen Ihnen, was realistisch erreichbar ist."
      />
    </>
  );
}
