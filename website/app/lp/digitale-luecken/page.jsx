import { Reveal, TestimonialsGrid, Wordmark } from '../../../components/sections';
import { Icon, Eyebrow, ButtonLink, Accordion } from '../../../components/primitives';
import { GuideForm } from '../../../components/guide-form';
import { leadMagnet as lm, testimonials } from '../../../components/site';

export const metadata = {
  title: lm.seo.title,
  description: lm.seo.description,
  /* Ad-Landingpage: bewusst nicht indexiert. */
  robots: { index: false, follow: false },
};

/* Bare Leadmagnet-Landingpage (kein Menü/Footer – siehe SiteChrome).
   Ziel: E-Mail-Eintrag für den Guide-Download. Struktur wie die Kurz-Check-LP,
   nur anderes Conversion-Ziel. Alle CTAs führen zum Formular (#guide). */

/* Cover-Mockup des Guides (Platzhalter, bis das echte PDF vorliegt). */
function GuideCover() {
  const g = lm.guide;
  return (
    <div className="relative mx-auto w-full max-w-xs">
      <div className="aspect-[3/4] overflow-hidden rounded-md bg-forest-900 p-7 shadow-lg ring-1 ring-forest-950/20 md:p-8" data-theme="brand">
        <div className="flex h-full flex-col">
          <p className="m-0 inline-flex w-fit items-center gap-1.5 rounded-pill bg-signal-300 px-3 py-1 font-data text-[0.6875rem] font-semibold uppercase tracking-widest text-sand-950">
            {g.kicker}
          </p>
          <span className="mt-6 font-display text-[5rem] font-bold leading-none text-signal-300">7</span>
          <h3 className="mt-2 font-display text-h2 leading-tight text-forest-50">{g.title}</h3>
          <p className="mt-2 text-body-sm text-forest-100">{g.subtitle}</p>
          <div className="mt-auto flex items-center justify-between border-t border-forest-50/15 pt-4">
            <span className="text-[0.6875rem] font-semibold uppercase tracking-widest text-forest-200">{g.brand}</span>
            <span className="text-[0.6875rem] text-forest-200">{g.meta}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function CtaButton({ children = lm.hero.ctaLabel }) {
  return (
    <ButtonLink href="#guide" size="lg" variant="accent" icon="arrow-right">
      {children}
    </ButtonLink>
  );
}

export default function DigitaleLueckenLandingPage() {
  return (
    <>
      {/* Hero */}
      <section className="overflow-hidden bg-forest-100 px-5 pb-section-m pt-10 md:pb-section md:pt-14">
        <div className="mx-auto max-w-container">
          <Wordmark />
          <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 md:mt-14">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-pill bg-forest-900 px-3 py-1 text-body-sm font-semibold text-forest-50">
                {lm.hero.badge}
              </span>
              <p className="mt-4"><Eyebrow icon="user" tone="brand">{lm.hero.audience}</Eyebrow></p>
              <h1 className="mt-3 animate-fade-up font-display text-display-xl text-forest-950">
                {lm.hero.headline}
              </h1>
              <p className="mt-5 max-w-xl animate-fade-up text-body-lg text-sand-700 [animation-delay:120ms]">
                {lm.hero.sub}
              </p>
              <div className="mt-8 animate-fade-up [animation-delay:240ms]">
                <CtaButton />
              </div>
              <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 p-0">
                {lm.hero.trust.map((t) => (
                  <li key={t} className="inline-flex list-none items-center gap-1.5 text-body-sm font-semibold text-forest-800">
                    <Icon name="check" size={16} className="text-forest-600" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <Reveal className="lg:justify-self-end">
              <GuideCover />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="px-5 py-section-m md:py-section">
        <div className="mx-auto max-w-container">
          <Reveal>
            <Eyebrow icon="shield">{lm.problem.eyebrow}</Eyebrow>
            <h2 className="mt-3 max-w-3xl font-display text-display-lg text-sand-900">{lm.problem.title}</h2>
            <p className="mt-5 max-w-2xl text-body-lg text-sand-700">{lm.problem.text}</p>
          </Reveal>
        </div>
      </section>

      {/* Was drin ist – die 7 Lücken */}
      <section className="bg-sand-50 px-5 py-section-m md:py-section">
        <div className="mx-auto max-w-container">
          <Reveal>
            <Eyebrow icon="document">Das steckt drin</Eyebrow>
            <h2 className="mt-3 max-w-2xl font-display text-display-lg text-sand-900">
              7 Lücken, die Sie vielleicht gerade Kunden kosten.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {lm.gaps.map((g, i) => (
              <Reveal key={g.title} delay={i * 60}>
                <div className="flex h-full items-start gap-4 rounded-sm bg-sand-0 p-6 shadow-hairline">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-pill bg-forest-900 font-data text-data font-medium text-forest-50">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-h4 text-sand-900">{g.title}</h3>
                    <p className="mt-1 text-body-sm text-sand-600">{g.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <div className="mt-10 text-center">
              <CtaButton>{lm.hero.ctaLabel}</CtaButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Für wen */}
      <section className="px-5 py-section-m md:py-section">
        <div className="mx-auto max-w-container">
          <Reveal>
            <Eyebrow icon="user">{lm.forWhom.eyebrow}</Eyebrow>
            <h2 className="mt-3 max-w-2xl font-display text-display-lg text-sand-900">{lm.forWhom.title}</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-md bg-sand-0 p-8 shadow-hairline">
                <p className="m-0 flex items-center gap-2 font-display text-h4 text-forest-800">
                  <Icon name="check" size={20} className="text-forest-600" /> Passt, wenn …
                </p>
                <ul className="m-0 mt-5 list-none space-y-3 p-0">
                  {lm.forWhom.fit.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sand-700">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-pill bg-forest-100 text-forest-700">
                        <Icon name="check" size={11} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="h-full rounded-md bg-sand-0 p-8 shadow-hairline">
                <p className="m-0 flex items-center gap-2 font-display text-h4 text-sand-500">
                  <Icon name="close" size={20} className="text-sand-400" /> Eher nicht, wenn …
                </p>
                <ul className="m-0 mt-5 list-none space-y-3 p-0">
                  {lm.forWhom.notFit.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sand-600">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-pill bg-sand-100 text-sand-400">
                        <Icon name="close" size={11} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Beweise / Referenzen */}
      <TestimonialsGrid
        title="Was Agenturinhaber über die Zusammenarbeit sagen"
        testimonials={testimonials}
        tone="sage"
      />

      {/* FAQ */}
      <section className="px-5 py-section-m md:py-section">
        <div className="mx-auto grid max-w-container gap-12 lg:grid-cols-[1fr_2fr]">
          <Reveal>
            <h2 className="font-display text-display-lg text-sand-900">Häufige Fragen</h2>
          </Reveal>
          <Reveal delay={100}>
            <Accordion items={lm.faq} />
          </Reveal>
        </div>
      </section>

      {/* CTA / Download-Formular */}
      <section id="guide" className="scroll-mt-6 bg-forest-900 px-5 py-section-m md:py-section" data-theme="brand">
        <div className="mx-auto max-w-container">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
            <Reveal>
              <h2 className="max-w-xl font-display text-display-lg text-forest-50">
                Holen Sie sich den Guide – kostenlos.
              </h2>
              <p className="mt-5 max-w-lg text-body-lg text-forest-100">
                7 konkrete Lücken, jeweils mit dem ersten Schritt zur Lösung. In 10 Minuten gelesen,
                sofort in Ihrer Agentur anwendbar.
              </p>
              <div className="mt-8 hidden lg:block">
                <GuideCover />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <GuideForm form={lm.form} />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
