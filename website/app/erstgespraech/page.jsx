import { PageHeader, Reveal } from '../../components/sections';
import { Icon } from '../../components/primitives';
import { site } from '../../components/site';

export const metadata = {
  title: 'Erstgespräch vereinbaren – kostenlos & unverbindlich',
  description:
    'Buchen Sie Ihr kostenloses 30-minütiges Erstgespräch: Wir analysieren Ihre Prozesse und zeigen die größten Hebel für Ihren Vermittlerbetrieb.',
};

const expectations = [
  {
    icon: 'mic',
    title: 'Sie erzählen, wir hören zu',
    text: 'Wo hakt es im Alltag? Welche Systeme sind im Einsatz? Was haben Sie schon probiert?',
  },
  {
    icon: 'search',
    title: 'Wir ordnen ein',
    text: 'Aus Dutzenden Projekten in Ihrer Branche wissen wir, welche Hebel zuerst wirken – und welche warten können.',
  },
  {
    icon: 'document',
    title: 'Sie erhalten eine Empfehlung',
    text: 'Konkrete nächste Schritte, ob mit oder ohne uns. Danach entscheiden Sie in Ruhe – kein Nachfassen im Stundentakt.',
  },
];

export default function ErstgespraechPage() {
  return (
    <>
      <PageHeader
        eyebrow="Erstgespräch"
        eyebrowIcon="calendar"
        title="30 Minuten, die Ihrem Betrieb Stunden sparen."
        lead="Wählen Sie einfach einen Termin, der Ihnen passt. Das Gespräch ist kostenlos, unverbindlich und findet per Video oder Telefon statt."
      />

      {/* Ablauf des Gesprächs */}
      <section className="px-5 py-section-m md:py-section">
        <div className="mx-auto max-w-container">
          <div className="grid gap-5 md:grid-cols-3">
            {expectations.map((e, i) => (
              <Reveal key={e.title} delay={i * 90}>
                <div className="h-full rounded-sm bg-sand-0 p-6 shadow-hairline md:p-8">
                  <span className="inline-grid h-12 w-12 place-items-center rounded-sm bg-forest-100 text-forest-700">
                    <Icon name={e.icon} size={24} />
                  </span>
                  <h2 className="mt-5 font-display text-h4 text-sand-900">{e.title}</h2>
                  <p className="mt-2 text-body-sm text-sand-600">{e.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cal.com-Einbettung */}
      <section className="bg-forest-100 px-5 py-section-m md:py-section">
        <div className="mx-auto max-w-container">
          <Reveal>
            <h2 className="text-center font-display text-display-lg text-forest-950">
              Termin auswählen
            </h2>
            <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-md bg-sand-0 shadow-md">
              {/* TODO: calUrl in components/site.js durch den echten Cal.com-Link ersetzen */}
              <iframe
                src={site.calUrl}
                title="Erstgespräch buchen"
                className="h-[720px] w-full border-0"
                loading="lazy"
              />
            </div>
            <p className="mt-6 text-center text-body-sm text-sand-600">
              Kein passender Termin dabei? Schreiben Sie uns an{' '}
              <a href={`mailto:${site.email}`} className="font-semibold">{site.email}</a> –
              wir melden uns innerhalb eines Werktags.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
