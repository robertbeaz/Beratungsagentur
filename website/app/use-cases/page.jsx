import Link from 'next/link';
import { PageHeader, CtaBand, Reveal, TestimonialsGrid } from '../../components/sections';
import { Icon, KiBadge } from '../../components/primitives';
import { useCases, testimonials } from '../../components/site';
import {
  DashboardMockup,
  FlowIllustration,
  MiniChatPhone,
  MiniNotifyPhone,
} from '../../components/illustrations';

export const metadata = {
  title: 'Use Cases – So setzen wir digitale Prozesse um',
  description:
    'Konkrete Implementierungen für Versicherungsagenturen: wie umgesetzt wurde, wie lange es gedauert hat und was es an Zeit und Ertrag gebracht hat.',
};

function CaseVisual({ visual }) {
  switch (visual) {
    case 'dashboard':
      return <DashboardMockup />;
    case 'chat':
      return <div className="mx-auto w-[230px]"><MiniChatPhone /></div>;
    case 'notify':
      return <div className="mx-auto w-[230px]"><MiniNotifyPhone /></div>;
    case 'flow':
      return <FlowIllustration />;
    default:
      return null;
  }
}

/* Jeder Use Case folgt demselben Beratungs-Dreiklang –
   die Labels machen das Muster über alle Cases hinweg sichtbar. */
const stepPhases = ['Analyse & Beratung', 'Implementierung', 'Schulung & Übergabe'];

function UseCaseCard({ c, index }) {
  const reversed = index % 2 === 1;
  return (
    <Reveal>
      <article className="overflow-hidden rounded-md bg-sand-0 shadow-hairline">
        <div className="grid md:grid-cols-[1.1fr_0.9fr]">
          {/* Inhalt */}
          <div className={`p-8 md:p-12 ${reversed ? 'md:order-2' : ''}`}>
            <p className="mb-3 flex items-center gap-2 font-data text-data font-medium uppercase tracking-widest text-forest-600">
              <Icon name={c.icon} size={16} />
              {c.branch}
            </p>
            <h2 className="font-display text-h2 text-sand-900">{c.title}</h2>

            <div className="mt-5">
              <p className="mb-1 text-body-sm font-semibold uppercase tracking-widest text-sand-500">Ausgangslage</p>
              <p className="m-0 text-sand-600">{c.problem}</p>
            </div>

            <div className="mt-7">
              <p className="mb-4 text-body-sm font-semibold uppercase tracking-widest text-sand-500">So haben wir es umgesetzt</p>
              <ol className="m-0 list-none space-y-4 p-0">
                {c.steps.map((s, i) => (
                  <li key={s.title} className="flex gap-4">
                    <span className="relative inline-grid h-10 w-10 shrink-0 place-items-center rounded-sm bg-forest-100 text-forest-700">
                      <Icon name={s.icon} size={19} />
                      <span className="absolute -right-1.5 -top-1.5 grid h-[1.125rem] min-w-[1.125rem] place-items-center rounded-pill bg-forest-900 px-1 font-data text-[0.625rem] font-medium leading-[1.125rem] text-forest-50">
                        {i + 1}
                      </span>
                    </span>
                    <div>
                      <p className="m-0 font-data text-[0.625rem] font-medium uppercase tracking-widest text-forest-600">
                        {stepPhases[i]}
                      </p>
                      <p className="m-0 font-semibold text-sand-900">{s.title}</p>
                      <p className="m-0 text-body-sm text-sand-600">{s.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-7">
              <p className="mb-4 text-body-sm font-semibold uppercase tracking-widest text-sand-500">Umgesetzt mit</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {c.tools.map((t) => (
                  <div key={t.name} className="flex items-start gap-3 rounded-sm bg-sand-50 p-3.5">
                    <span className="mt-0.5 inline-grid h-8 w-8 shrink-0 place-items-center rounded-sm bg-forest-100 text-forest-700">
                      {t.ki ? <KiBadge>KI</KiBadge> : <Icon name={t.icon} size={16} />}
                    </span>
                    <div className="min-w-0">
                      <p className="m-0 font-semibold text-sand-900">{t.name}</p>
                      <p className="m-0 text-body-sm text-sand-600">{t.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-7">
              <Link
                href={c.serviceHref}
                className="inline-flex items-center gap-1.5 text-body-sm font-semibold text-forest-700 no-underline hover:text-forest-900"
              >
                {c.serviceLabel}
                <Icon name="arrow-right" size={15} />
              </Link>
            </div>
          </div>

          {/* Illustration + Verbesserung + Ergebnis */}
          <div className={`flex flex-col justify-between gap-6 bg-forest-100 p-8 md:p-10 ${reversed ? 'md:order-1' : ''}`}>
            <CaseVisual visual={c.visual} />
            <div>
              <p className="m-0 mb-4 inline-flex items-center gap-2 rounded-pill bg-sand-0/70 px-3.5 py-1.5 text-body-sm font-semibold text-forest-900">
                <Icon name="calendar" size={15} />
                {c.duration}
              </p>
              {c.improvement && (
                <p className="m-0 mb-5 text-body-sm text-forest-950">
                  <span className="font-semibold">Verbesserung: </span>{c.improvement}
                </p>
              )}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-sm bg-sand-0 p-5">
                  <p className="m-0 mb-1 flex items-center gap-1.5 text-body-sm font-semibold uppercase tracking-widest text-sand-500">
                    <Icon name="clock" size={14} /> Zeit
                  </p>
                  <div className="font-display text-h3 font-medium text-forest-900">{c.time.value}</div>
                  <p className="m-0 mt-1 text-body-sm text-sand-600">{c.time.label}</p>
                </div>
                <div className="rounded-sm bg-forest-900 p-5">
                  <p className="m-0 mb-1 flex items-center gap-1.5 text-body-sm font-semibold uppercase tracking-widest text-forest-300">
                    <Icon name="trend" size={14} /> Ertrag
                  </p>
                  <div className="font-display text-h3 font-medium text-forest-50">{c.gain.value}</div>
                  <p className="m-0 mt-1 text-body-sm text-forest-200">{c.gain.label}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function UseCasesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Use Cases"
        eyebrowIcon="chart"
        title="So sieht Umsetzung bei uns aus."
        lead="Sechs Implementierungen aus dem Agenturalltag: was das Problem war, wie wir es gelöst haben – und was es an Zeit und Ertrag gebracht hat."
      />

      <section className="px-5 py-section-m md:py-section">
        <div className="mx-auto flex max-w-container flex-col gap-8">
          {useCases.map((c, i) => <UseCaseCard key={c.title} c={c} index={i} />)}
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
