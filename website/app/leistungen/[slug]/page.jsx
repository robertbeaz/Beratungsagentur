import { notFound } from 'next/navigation';
import { PageHeader, CtaBand, FaqSection, Reveal } from '../../../components/sections';
import { Icon, KiBadge, Eyebrow, Card, ButtonLink } from '../../../components/primitives';
import { DashboardMockup, FlowIllustration, PhoneChatMockup } from '../../../components/illustrations';
import { FeatureBento } from '../../../components/feature-bento';
import { JsonLd, faqJsonLd, serviceJsonLd } from '../../../components/schema';
import { services, useCases } from '../../../components/site';

const serviceMedia = {
  'digitale-agentur': <DashboardMockup />,
  'ki-assistenz': <FlowIllustration />,
  'kundenmagnet': <PhoneChatMockup />,
};

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  /* Suchgetriebene Metadaten aus service.seo; Fallback auf Markentexte. */
  return {
    title: service.seo?.title ?? `${service.eyebrow} – ${service.title}`,
    description: service.seo?.description ?? service.teaser,
    alternates: { canonical: `/leistungen/${service.slug}` },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();
  const relatedCases = useCases.filter((c) => c.serviceHref === `/leistungen/${service.slug}`);

  return (
    <>
      <JsonLd data={serviceJsonLd(service)} />
      <JsonLd data={faqJsonLd(service.faq)} />
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

      {/* Feature-Showcase (Bento-Grid), nur wenn für die Leistung gepflegt */}
      <FeatureBento features={service.features} />

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

      {/* Use Cases aus dem Alltag – gefiltert aus der globalen Use-Cases-Liste */}
      {relatedCases.length > 0 && (
        <section className="bg-sand-50 px-5 py-section-m md:py-section">
          <div className="mx-auto max-w-container">
            <Reveal>
              <Eyebrow icon="chart">Use Cases aus dem Alltag</Eyebrow>
              <h2 className="mt-3 max-w-2xl font-display text-display-lg text-sand-900">
                So sieht das in der Praxis aus.
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {relatedCases.map((c, i) => (
                <Reveal key={c.title} delay={i * 80}>
                  <Card className="h-full">
                    <p className="m-0 text-body-sm font-semibold uppercase tracking-widest text-forest-600">
                      {c.branch}
                    </p>
                    <h3 className="mt-2 font-display text-h4 text-sand-900">{c.title}</h3>
                    <p className="mt-2 text-sand-700">{c.problem}</p>

                    {c.tools?.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {c.tools.map((t) => (
                          <span
                            key={t.name}
                            className="inline-flex items-center gap-1.5 rounded-pill bg-sand-100 py-1 pl-1.5 pr-3 text-body-sm font-semibold text-sand-700"
                          >
                            {t.ki ? (
                              <KiBadge>KI</KiBadge>
                            ) : (
                              <span className="grid h-5 w-5 shrink-0 place-items-center rounded-pill bg-sand-0 text-forest-700">
                                <Icon name={t.icon} size={11} />
                              </span>
                            )}
                            {t.name}
                          </span>
                        ))}
                      </div>
                    )}

                    <p className="m-0 mt-5 flex items-start gap-2 font-display text-h4 font-medium text-forest-900">
                      <Icon name="trend" size={20} className="mt-0.5 shrink-0 text-forest-600" />
                      {c.gain.value} <span className="font-body text-body text-sand-600">{c.gain.label}</span>
                    </p>
                  </Card>
                </Reveal>
              ))}
            </div>
            <div className="mt-8">
              <ButtonLink href="/use-cases" variant="secondary">Weitere Use Cases ansehen</ButtonLink>
            </div>
          </div>
        </section>
      )}

      {/* Preisblock */}
      {service.price && (
        <section className="px-5 py-section-m md:py-section">
          <div className="mx-auto max-w-container">
            <Reveal>
              <Card tone="brand" className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <Eyebrow icon="card" tone="on-dark">Preis</Eyebrow>
                  <p className="mt-3 font-display text-display-lg text-forest-50">
                    ab {service.price.from}
                  </p>
                  <p className="mt-2 max-w-xl text-forest-100">{service.price.note}</p>
                  <p className="mt-4 text-body-sm text-forest-200">{service.price.duration}</p>
                  <p className="mt-1 text-body-sm text-forest-200">{service.price.retainer}</p>
                </div>
                <ButtonLink href="/erstgespraech" variant="accent" size="lg">Erstgespräch vereinbaren</ButtonLink>
              </Card>
            </Reveal>
          </div>
        </section>
      )}

      <FaqSection title="Häufige Fragen dazu" items={service.faq} />
      <CtaBand
        title="Klingt nach Ihrem Thema?"
        lead="Im Erstgespräch schauen wir konkret auf Ihre Situation – und Sie erhalten eine ehrliche Einschätzung, was sich lohnt."
      />
    </>
  );
}
