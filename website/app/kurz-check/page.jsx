import { PageHeader, Reveal } from '../../components/sections';
import { Icon } from '../../components/primitives';
import { site } from '../../components/site';

export const metadata = {
  title: 'Kurz-Check buchen – 15 Minuten, kostenlos & unverbindlich',
  description:
    'Buchen Sie Ihren kostenlosen Kurz-Check: 15–20 Minuten, in denen wir Ihre Situation verstehen und sagen, ob und wie wir helfen. Kein Verkaufsgespräch.',
  alternates: { canonical: '/kurz-check' },
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
    title: 'Sie kennen den nächsten Schritt',
    text: 'Passt es, ist der nächste Schritt die Digital-Analyse: ein Fahrplan zum Festpreis. Wenn nicht, sagen wir das ehrlich.',
  },
];

export default function KurzCheckPage() {
  return (
    <>
      <PageHeader
        eyebrow="Kurz-Check"
        eyebrowIcon="calendar"
        title="15 Minuten Kennenlernen – ohne Verkaufsdruck."
        lead="Wählen Sie einfach einen Termin, der Ihnen passt. Der Kurz-Check ist kostenlos, unverbindlich und findet per Video oder Telefon statt. Kein Pitch – wir hören erst einmal zu."
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
          <Reveal delay={120}>
            <p className="mt-8 text-body-sm text-sand-500">
              Schon entschlossen? Sie können den Kurz-Check überspringen und direkt die{' '}
              <a href="/digital-analyse" className="font-semibold text-forest-700">Digital-Analyse</a>{' '}
              anfragen – der Fahrplan zum Festpreis, bei Beauftragung angerechnet.
            </p>
          </Reveal>
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
                title="Kurz-Check buchen"
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
