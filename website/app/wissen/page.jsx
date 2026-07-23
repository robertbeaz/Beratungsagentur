import { PageHeader, CtaBand, Reveal } from '../../components/sections';
import { ArticleCard } from '../../components/article';
import { articles } from '../../content/artikel';

export const metadata = {
  title: 'Wissen: Digitalisierung & KI für Versicherungsagenturen',
  description:
    'Praxiswissen für Versicherungsagenturen und Maklerbüros: CRM, digitale Prozesse, WhatsApp-Kommunikation und KI – konkret, umsetzbar und aus echten Projekten.',
  alternates: { canonical: '/wissen' },
};

export default function WissenPage() {
  return (
    <>
      <PageHeader
        eyebrow="Wissen"
        eyebrowIcon="document"
        title="Praxiswissen für digitale Agenturen."
        lead="Konkrete Antworten auf die Fragen, die uns Agenturinhaber täglich stellen – zu CRM, Prozessen, Kundenkommunikation und KI. Aus Projekten, nicht aus der Theorie."
      />
      <section className="px-5 py-section-m md:py-section">
        <div className="mx-auto max-w-container">
          {articles.length === 0 ? (
            <Reveal>
              <p className="mx-auto max-w-2xl text-center text-body-lg text-sand-600">
                Die ersten Artikel erscheinen in Kürze. Bis dahin: Im{' '}
                <a href="/kurz-check" className="font-semibold">kostenlosen Kurz-Check</a>{' '}
                beantworten wir Ihre Fragen direkt.
              </p>
            </Reveal>
          ) : (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((a, i) => (
                <Reveal key={a.slug} delay={i * 90}>
                  <ArticleCard article={a} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
      <CtaBand
        title="Lieber direkt fragen statt lesen?"
        lead="Im kostenlosen Kurz-Check schauen wir auf Ihre konkrete Situation – 15–20 Minuten, unverbindlich."
      />
    </>
  );
}
