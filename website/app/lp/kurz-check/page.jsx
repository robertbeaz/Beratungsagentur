import { Reveal, TestimonialsGrid, Wordmark } from '../../../components/sections';
import { Icon, Eyebrow, Card, ButtonLink, Accordion } from '../../../components/primitives';
import { kurzCheckLp as lp, testimonials, site } from '../../../components/site';

export const metadata = {
  title: lp.seo.title,
  description: lp.seo.description,
  /* Ad-Landingpage: bewusst nicht indexiert (Bezahl-Traffic, kein Organik-Konflikt). */
  robots: { index: false, follow: false },
};

/* Bare Conversion-Landingpage (kein Menü/Footer – siehe SiteChrome).
   Struktur: Hero → Problem → Für wen → Ablauf → Beweise → CTA → FAQ → CTA/Buchung.
   Alle CTAs führen zur On-Page-Buchung (#termin) – keine Ablenkung, kein Weg-Link. */

function CtaButton({ children = lp.hero.ctaLabel, variant = 'accent' }) {
  return (
    <ButtonLink href="#termin" size="lg" variant={variant} icon="arrow-right">
      {children}
    </ButtonLink>
  );
}

export default function KurzCheckLandingPage() {
  return (
    <>
      {/* Hero */}
      <section className="overflow-hidden bg-forest-100 px-5 pb-section-m pt-10 md:pb-section md:pt-14">
        <div className="mx-auto max-w-container">
          <Wordmark />
          <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 md:mt-14">
            <div>
              <Eyebrow icon="user" tone="brand">{lp.hero.audience}</Eyebrow>
              <h1 className="mt-3 animate-fade-up font-display text-display-xl text-forest-950">
                {lp.hero.headline}
              </h1>
              <p className="mt-5 max-w-xl animate-fade-up text-body-lg text-sand-700 [animation-delay:120ms]">
                {lp.hero.sub}
              </p>
              <div className="mt-8 animate-fade-up [animation-delay:240ms]">
                <CtaButton />
              </div>
              <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 p-0">
                {lp.hero.trust.map((t) => (
                  <li key={t} className="inline-flex list-none items-center gap-1.5 text-body-sm font-semibold text-forest-800">
                    <Icon name="check" size={16} className="text-forest-600" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            {/* Ergebnis-Karte statt Deko */}
            <Reveal className="lg:justify-self-end">
              <div className="rounded-lg bg-sand-0 p-7 shadow-lg md:p-9">
                <p className="m-0 text-body-sm font-semibold uppercase tracking-widest text-forest-600">
                  Das nehmen Sie mit
                </p>
                <ul className="m-0 mt-5 list-none space-y-4 p-0">
                  {lp.ablauf.steps.map((s) => (
                    <li key={s.step} className="flex items-start gap-3">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-pill bg-forest-100 font-data text-data font-medium text-forest-700">
                        {s.step}
                      </span>
                      <span>
                        <span className="block font-semibold text-sand-900">{s.title}</span>
                        <span className="block text-body-sm text-sand-500">{s.text}</span>
                      </span>
                    </li>
                  ))}
                </ul>
                <ButtonLink href="#termin" variant="accent" size="lg" icon="arrow-right" className="mt-7 w-full">
                  {lp.hero.ctaLabel}
                </ButtonLink>
                <p className="m-0 mt-3 text-center text-body-sm text-sand-500">
                  Kostenlos · 15 Minuten · per Video oder Telefon
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="px-5 py-section-m md:py-section">
        <div className="mx-auto max-w-container">
          <Reveal>
            <Eyebrow icon="shield">{lp.problem.eyebrow}</Eyebrow>
            <h2 className="mt-3 max-w-3xl font-display text-display-lg text-sand-900">{lp.problem.title}</h2>
            <p className="mt-5 max-w-2xl text-body-lg text-sand-700">{lp.problem.text}</p>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {lp.problem.pains.map((p, i) => (
              <Reveal key={p} delay={i * 70}>
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

      {/* Für wen */}
      <section className="bg-sand-50 px-5 py-section-m md:py-section">
        <div className="mx-auto max-w-container">
          <Reveal>
            <Eyebrow icon="user">{lp.forWhom.eyebrow}</Eyebrow>
            <h2 className="mt-3 max-w-2xl font-display text-display-lg text-sand-900">{lp.forWhom.title}</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-md bg-sand-0 p-8 shadow-hairline">
                <p className="m-0 flex items-center gap-2 font-display text-h4 text-forest-800">
                  <Icon name="check" size={20} className="text-forest-600" /> Passt, wenn …
                </p>
                <ul className="m-0 mt-5 list-none space-y-3 p-0">
                  {lp.forWhom.fit.map((f) => (
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
                  {lp.forWhom.notFit.map((f) => (
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

      {/* Ablauf */}
      <section className="px-5 py-section-m md:py-section">
        <div className="mx-auto max-w-container">
          <Reveal>
            <Eyebrow icon="calendar">{lp.ablauf.eyebrow}</Eyebrow>
            <h2 className="mt-3 max-w-2xl font-display text-display-lg text-sand-900">{lp.ablauf.title}</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {lp.ablauf.steps.map((s, i) => (
              <Reveal key={s.step} delay={i * 90}>
                <div className="h-full rounded-sm bg-sand-0 p-6 shadow-hairline md:p-8">
                  <span className="font-data text-h3 font-medium text-forest-600">{s.step}</span>
                  <h3 className="mt-3 font-display text-h4 text-sand-900">{s.title}</h3>
                  <p className="mt-2 text-body-sm text-sand-600">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Beweise / Referenzen */}
      <TestimonialsGrid
        title="Was Agenturinhaber nach der Zusammenarbeit sagen"
        testimonials={testimonials}
        tone="sage"
      />

      {/* CTA (Mitte) */}
      <section className="bg-forest-900 px-5 py-section-m text-center md:py-section" data-theme="brand">
        <div className="mx-auto max-w-container">
          <Reveal>
            <h2 className="mx-auto max-w-2xl font-display text-display-lg text-forest-50">{lp.finalCta.title}</h2>
            <p className="mx-auto mt-5 max-w-xl text-body-lg text-forest-100">{lp.finalCta.sub}</p>
            <div className="mt-10">
              <CtaButton />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-section-m md:py-section">
        <div className="mx-auto grid max-w-container gap-12 lg:grid-cols-[1fr_2fr]">
          <Reveal>
            <h2 className="font-display text-display-lg text-sand-900">Häufige Fragen</h2>
          </Reveal>
          <Reveal delay={100}>
            <Accordion items={lp.faq} />
          </Reveal>
        </div>
      </section>

      {/* CTA / Buchung */}
      <section id="termin" className="scroll-mt-6 bg-forest-100 px-5 py-section-m md:py-section">
        <div className="mx-auto max-w-container">
          <Reveal>
            <div className="text-center">
              <h2 className="mx-auto max-w-2xl font-display text-display-lg text-forest-950">
                Kostenlosen Kurz-Check sichern
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-body-lg text-sand-700">
                Wählen Sie einen Termin, der Ihnen passt. 15 Minuten, per Video oder Telefon – ohne Verkaufsdruck.
              </p>
            </div>
            {/* TODO: calUrl in components/site.js durch echten Cal.com-Link ersetzen. */}
            <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-md bg-sand-0 shadow-md">
              <iframe
                src={site.calUrl}
                title="Kurz-Check buchen"
                className="h-[720px] w-full border-0"
                loading="lazy"
              />
            </div>
            <p className="mt-6 text-center text-body-sm text-sand-600">
              Lieber schreiben? Melden Sie sich an{' '}
              <a href={`mailto:${site.email}`} className="font-semibold">{site.email}</a>.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
