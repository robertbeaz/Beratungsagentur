import { PageHeader, CtaBand, Reveal } from '../../components/sections';
import { Icon, Eyebrow } from '../../components/primitives';
import { tools } from '../../components/site';

export const metadata = {
  title: 'Über uns – Beratung, die umsetzt',
  description:
    'Wir sind eine Digitalberatung für Versicherungsagenturen. Keine Konzepte für die Schublade – wir setzen um.',
};

const values = [
  {
    icon: 'check',
    title: 'Umsetzung statt Folien',
    text: 'Sie bekommen von uns keine 80-seitige Strategie-Präsentation, sondern funktionierende Systeme. Beratung heißt bei uns: anpacken.',
  },
  {
    icon: 'shield',
    title: 'Branchenkenntnis',
    text: 'Provision, Bestandsübertragung, Deckungskonzepte, § 34d – wir kennen die Begriffe und Abläufe Ihrer Branche und müssen nicht bei null anfangen.',
  },
  {
    icon: 'user',
    title: 'Unabhängig vom Hersteller',
    text: 'Wir verkaufen keine Software-Lizenzen und bekommen keine Provision von Tool-Anbietern. Wir empfehlen, was zu Ihnen passt – nicht, was uns nützt.',
  },
  {
    icon: 'document',
    title: 'Kein Abhängigkeits-Modell',
    text: 'Alles, was wir bauen, wird dokumentiert und übergeben. Sie sollen mit uns arbeiten, weil es sich lohnt – nicht, weil Sie müssen.',
  },
];

export default function UeberUnsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Über uns"
        eyebrowIcon="user"
        title="Wir bauen die Systeme, mit denen Versicherungsagenturen wieder verkaufen können."
        lead="Digitalisierung scheitert in Versicherungsagenturen selten an der Technik – sondern daran, dass niemand Zeit hat, sie richtig einzuführen. Genau diese Lücke füllen wir."
      />

      {/* Story */}
      <section className="px-5 py-section-m md:py-section">
        <div className="mx-auto grid max-w-container gap-12 lg:grid-cols-[1fr_2fr]">
          <Reveal>
            <Eyebrow icon="signature">Warum es uns gibt</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <div className="space-y-5 text-body-lg text-sand-700">
              <p className="m-0">
                Versicherungsagenturen verdienen ihr Geld im Gespräch – nicht in der
                Dateneingabe. Trotzdem verbringen die meisten Teams einen erheblichen Teil
                ihrer Woche damit, Informationen zwischen Postfach, Excel und Bestandssystem
                hin- und herzutragen.
              </p>
              <p className="m-0">
                Die Werkzeuge, die das lösen, existieren längst: CRM-Systeme, Automatisierungs-Plattformen,
                Messaging-Tools, KI-Assistenten. Was fehlt, ist jemand, der sie auswählt, einführt,
                verbindet – und das Team so mitnimmt, dass die Systeme nach drei Monaten noch benutzt werden.
              </p>
              <p className="m-0 font-semibold text-sand-900">
                Genau das ist unsere Arbeit: Wir übersetzen Digitalisierung in Abläufe,
                die im Agenturalltag funktionieren.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Werte / Arbeitsweise */}
      <section className="bg-forest-100 px-5 py-section-m md:py-section">
        <div className="mx-auto max-w-container">
          <Reveal>
            <h2 className="max-w-2xl font-display text-display-lg text-forest-950">
              Vier Prinzipien, an denen Sie uns messen können.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="h-full rounded-sm bg-sand-0 p-6 md:p-8">
                  <span className="inline-grid h-12 w-12 place-items-center rounded-sm bg-forest-100 text-forest-700">
                    <Icon name={v.icon} size={24} />
                  </span>
                  <h3 className="mt-5 font-display text-h3 text-sand-900">{v.title}</h3>
                  <p className="mt-2 text-sand-600">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Werkzeugkasten */}
      <section className="px-5 py-section-m md:py-section">
        <div className="mx-auto max-w-container">
          <Reveal>
            <Eyebrow icon="settings">Unser Werkzeugkasten</Eyebrow>
            <h2 className="mt-3 max-w-2xl font-display text-display-lg text-sand-900">
              Wir arbeiten mit dem, was sich bewährt hat.
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {tools.map((t) => (
                <span key={t} className="rounded-pill bg-sand-100 px-4 py-2 font-medium text-sand-700">
                  {t}
                </span>
              ))}
            </div>
            <p className="mt-6 max-w-2xl text-sand-600">
              Und wenn Ihr Bestandssystem eine Schnittstelle hat, binden wir auch das an.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Lernen Sie uns im Gespräch kennen."
        lead="30 Minuten, keine Verkaufsshow: Sie schildern Ihre Situation, wir sagen ehrlich, ob und wie wir helfen können."
      />
    </>
  );
}
