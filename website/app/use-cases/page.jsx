import Link from 'next/link';
import { PageHeader, CtaBand, Reveal, TestimonialsGrid } from '../../components/sections';
import { Icon, KiBadge, TextLink } from '../../components/primitives';
import { useCases, testimonials, services } from '../../components/site';
import { CrmCaseScene, FunnelCaseScene, AssistCaseScene } from '../../components/feature-scenes';

export const metadata = {
  title: 'Use Cases – So setzen wir digitale Prozesse um',
  description:
    'Konkrete Implementierungen für Versicherungsagenturen: wie umgesetzt wurde, wie lange es gedauert hat und was es an Zeit und Ertrag gebracht hat.',
};

/* Gleiche Bildsprache wie der Startseiten-Stepper, aber eigene Szenen:
   jede spiegelt exakt die beiden Cases ihres Paket-Kapitels. */
const groupScenes = {
  'digitale-agentur': <CrmCaseScene />,
  'kundenmagnet': <FunnelCaseScene />,
  'ki-assistenz': <AssistCaseScene />,
};

/* Ein Case als redaktioneller Block: Ausgangslage, Lösung, Ergebnis –
   bewusst ohne Schritt-für-Schritt- und Tool-Details (weniger ist mehr). */
function CaseBlock({ c }) {
  return (
    <article className="border-t border-sand-200 py-10 first:border-t-0 first:pt-0">
      <p className="m-0 mb-2 text-body-sm font-semibold uppercase tracking-widest text-forest-600">
        {c.branch}
      </p>
      <h3 className="font-display text-h3 text-sand-900">{c.title}</h3>
      <p className="mt-3 text-sand-600">{c.problem}</p>
      {c.improvement && <p className="mt-3 text-sand-600">{c.improvement}</p>}
      <div className="mt-6 flex flex-wrap items-baseline gap-x-10 gap-y-4">
        <div>
          <p className="m-0 font-display text-h3 font-medium text-forest-900">{c.gain.value}</p>
          <p className="m-0 mt-0.5 text-body-sm text-sand-500">{c.gain.label}</p>
        </div>
        <div>
          <p className="m-0 font-display text-h3 font-medium text-forest-900">{c.time.value}</p>
          <p className="m-0 mt-0.5 text-body-sm text-sand-500">{c.time.label}</p>
        </div>
        <p className="m-0 flex items-center gap-1.5 text-body-sm text-sand-500">
          <Icon name="clock" size={14} className="shrink-0" />
          {c.duration}
        </p>
      </div>
    </article>
  );
}

function CaseGroup({ service, cases, index }) {
  const reversed = index % 2 === 1;
  return (
    <div className="mt-24 first:mt-0 md:mt-30">
      <div className="mx-auto grid max-w-container gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* Szene + Paket-Anker (auf lg sticky, abwechselnd links/rechts) */}
        <div className={`lg:sticky lg:top-28 lg:self-start ${reversed ? 'lg:order-2' : ''}`}>
          <Reveal>
            <p className="m-0 mb-4 flex items-center gap-2 text-body-sm font-semibold uppercase tracking-widest text-forest-600">
              {service.eyebrow} {service.ki && <KiBadge>KI</KiBadge>}
            </p>
            {groupScenes[service.slug]}
            <div className="mt-5">
              <TextLink href={`/leistungen/${service.slug}`}>Zum Paket {service.eyebrow}</TextLink>
            </div>
          </Reveal>
        </div>
        <div className={reversed ? 'lg:order-1' : ''}>
          {cases.map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <CaseBlock c={c} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function UseCasesPage() {
  const groups = services
    .map((s) => ({
      service: s,
      cases: useCases.filter((c) => c.serviceHref === `/leistungen/${s.slug}`),
    }))
    .filter((g) => g.cases.length > 0);

  return (
    <>
      <PageHeader
        eyebrow="Use Cases"
        eyebrowIcon="chart"
        title="So sieht Umsetzung bei uns aus."
        lead="Sechs Implementierungen aus dem Agenturalltag: was das Problem war, wie wir es gelöst haben – und was es an Zeit und Ertrag gebracht hat."
      />

      <section className="px-5 py-section-m md:py-section">
        {groups.map((g, i) => (
          <CaseGroup key={g.service.slug} service={g.service} cases={g.cases} index={i} />
        ))}
        <div className="mx-auto mt-20 max-w-container">
          <p className="m-0 border-t border-sand-200 pt-6 text-body-sm text-sand-500">
            Beispielprojekte – Zahlen werden nach Kundenfreigabe durch echte Ergebnisse ersetzt.
          </p>
        </div>
      </section>

      <TestimonialsGrid testimonials={testimonials} />

      <CtaBand
        title="Ihr Betrieb könnte der nächste sein."
        lead="Erzählen Sie uns im Erstgespräch, wo es bei Ihnen hakt – wir sagen Ihnen, was realistisch erreichbar ist."
      />
    </>
  );
}
