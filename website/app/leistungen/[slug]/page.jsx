import { notFound } from 'next/navigation';
import { PageHeader, CtaBand, FaqSection, Reveal } from '../../../components/sections';
import { Icon, KiBadge, Eyebrow } from '../../../components/primitives';
import { DashboardMockup, FlowIllustration, PhoneChatMockup } from '../../../components/illustrations';
import { services } from '../../../components/site';

const serviceMedia = {
  'crm-und-daten': <DashboardMockup />,
  'automatisierung-und-ki': <FlowIllustration />,
  'kundenkommunikation': <PhoneChatMockup />,
};

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.eyebrow} – ${service.title}`,
    description: service.teaser,
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <PageHeader
        eyebrow={service.eyebrow}
        eyebrowIcon={service.icon}
        title={service.title}
        lead={service.teaser}
        media={serviceMedia[service.slug]}
      />

      {/* Schmerzpunkte */}
      <section className="px-5 py-section-m md:py-section">
        <div className="mx-auto grid max-w-container gap-12 lg:grid-cols-[1fr_2fr]">
          <Reveal>
            <h2 className="font-display text-h2 text-sand-900">Woran Sie merken, dass es Zeit ist</h2>
            <p className="mt-4 text-sand-600">
              Wenn Ihnen mindestens zwei dieser Punkte bekannt vorkommen, lohnt sich ein Gespräch.
            </p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {service.pains.map((p, i) => (
              <Reveal key={p} delay={i * 80}>
                <div className="flex h-full items-start gap-3 rounded-sm bg-sand-0 p-5 shadow-hairline">
                  <span className="mt-0.5 inline-grid h-7 w-7 shrink-0 place-items-center rounded-xs bg-carnelian-50 text-carnelian-500">
                    <Icon name="close" size={14} />
                  </span>
                  <p className="m-0 text-sand-700">{p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leistungsumfang */}
      <section className="bg-forest-100 px-5 py-section-m md:py-section">
        <div className="mx-auto max-w-container">
          <Reveal>
            <Eyebrow icon="check">Das übernehmen wir</Eyebrow>
            <h2 className="mt-3 max-w-2xl font-display text-display-lg text-forest-950">
              Von der Analyse bis zur Übergabe – ein Paket, keine Baustellen.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {service.deliverables.map((d, i) => (
              <Reveal key={d.title} delay={i * 80}>
                <div className="h-full rounded-sm bg-sand-0 p-6 md:p-8">
                  <h3 className="flex items-center gap-2 font-display text-h4 text-sand-900">
                    {d.title} {d.ki && <KiBadge>KI</KiBadge>}
                  </h3>
                  <p className="mt-2 text-sand-600">{d.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FaqSection title="Häufige Fragen dazu" items={service.faq} />
      <CtaBand
        title="Klingt nach Ihrem Thema?"
        lead="Im Erstgespräch schauen wir konkret auf Ihre Situation – und Sie erhalten eine ehrliche Einschätzung, was sich lohnt."
      />
    </>
  );
}
