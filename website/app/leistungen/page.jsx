import Link from 'next/link';
import { PageHeader, CtaBand, Reveal } from '../../components/sections';
import { Icon, KiBadge, Eyebrow, Card, ButtonLink } from '../../components/primitives';
import { PackagesIllustration } from '../../components/illustrations';
import { services, retainerTiers } from '../../components/site';

export const metadata = {
  title: 'Leistungen – Digitale Agentur, Kundenmagnet & KI-Assistenz',
  description:
    'Drei Pakete zum Festpreis für Versicherungsagenturen: CRM, Superchat und Signaturen als Fundament, Landingpages und Newsletter fürs Wachstum, KI-Chatbot und Telefonbots als Premium-Assistenz.',
};

/* ---------- Stufen-Narrativ: die Pakete bauen aufeinander auf ---------- */
const stages = [
  { label: 'Fundament', hint: 'Erst die Basis: Ordnung in Daten & Prozessen' },
  { label: 'Wachstum', hint: 'Dann Neukunden: mehr Anfragen, mehr Termine' },
  { label: 'Optimierung', hint: 'Zuletzt der Feinschliff: Zeit durch KI zurückgewinnen' },
];

/* ---------- Paket-Spalten (Karte + Preis + Leistungsumfang in einem) ----------
   Gleichrangig gestaltet: keine Karte wirkt „wichtiger" als die anderen –
   die Tags zeigen nur die übliche Reihenfolge, nicht eine Empfehlung. */
function PackageColumn({ s, i }) {
  const stage = stages[i];
  return (
    <Reveal delay={i * 90} className="h-full">
      <div className="flex h-full flex-col rounded-md bg-sand-0 p-8 shadow-hairline">
        <span className="inline-flex w-fit items-center gap-1.5 rounded-pill bg-forest-100 px-3 py-1 text-body-sm font-semibold text-forest-800">
          {stage.label}
        </span>
        <p className="m-0 mt-2 text-body-sm text-sand-500">{stage.hint}</p>

        <span className="mt-5 inline-grid h-12 w-12 place-items-center rounded-sm bg-forest-100 text-forest-800">
          <Icon name={s.icon} size={22} />
        </span>
        <p className="mb-0 mt-4 flex items-center gap-2 text-body-sm font-semibold uppercase tracking-widest text-forest-600">
          {s.eyebrow} {s.ki && <KiBadge>KI</KiBadge>}
        </p>
        <p className="mt-3 flex-1 text-sand-600">{s.teaser}</p>

        <div className="mt-6 border-t border-sand-100 pt-5">
          <p className="m-0 font-display text-h2 font-medium text-sand-900">
            ab {s.price.from}
          </p>
          <p className="m-0 mt-1 text-body-sm text-sand-500">Festpreis, einmalig</p>
        </div>

        <ul className="m-0 mt-6 list-none space-y-2.5 p-0">
          {s.deliverables.map((d) => (
            <li key={d.title} className="flex items-start gap-2.5">
              <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-pill bg-forest-100 text-forest-700">
                <Icon name="check" size={11} />
              </span>
              <span className="text-body-sm text-sand-700">{d.title}</span>
            </li>
          ))}
        </ul>

        <Link
          href={`/leistungen/${s.slug}`}
          className="group mt-8 inline-flex items-center justify-center gap-2 rounded-sm bg-forest-900 px-6 py-3 font-semibold text-forest-50 no-underline transition-all duration-fast hover:bg-forest-950"
        >
          Paket ansehen
          <Icon name="arrow-right" size={18} className="transition-transform duration-fast group-hover:translate-x-1" />
        </Link>
      </div>
    </Reveal>
  );
}

export default function LeistungenPage() {
  return (
    <>
      <PageHeader
        eyebrow="Leistungen"
        eyebrowIcon="settings"
        title="Das digitale Betriebssystem für Ihre Agentur – in drei Paketen."
        lead="Sie müssen nicht alles auf einmal angehen. Die meisten Agenturen starten mit dem größten Schmerzpunkt – wir sagen Ihnen im Kurz-Check ehrlich, welcher das ist."
        media={<PackagesIllustration />}
      />

      {/* Einstieg: jedes Projekt startet mit der Digital-Analyse */}
      <section className="px-5 pt-section-m md:pt-section">
        <div className="mx-auto max-w-container">
          <Reveal>
            <Card tone="brand" className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <Eyebrow icon="search" tone="on-dark">Der Einstieg</Eyebrow>
                <h2 className="mt-3 max-w-2xl font-display text-h2 text-forest-50">
                  Jedes Projekt startet mit der Digital-Analyse.
                </h2>
                <p className="mt-3 max-w-xl text-forest-100">
                  490 €, bei Beauftragung voll angerechnet. Sie bekommen erst einen Fahrplan mit
                  Festpreis – dann entscheiden Sie in Ruhe über das passende Paket.
                </p>
              </div>
              <ButtonLink href="/kurz-check" variant="accent" size="lg" icon="arrow-right">
                Kurz-Check buchen
              </ButtonLink>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* Pakete mit Preis & Leistungsumfang */}
      <section className="px-5 py-section-m md:py-section">
        <div className="mx-auto max-w-container">
          <Reveal>
            <Eyebrow icon="trend">Der übliche Weg</Eyebrow>
            <h2 className="mt-3 max-w-2xl font-display text-display-lg text-sand-900">
              Die Pakete bauen aufeinander auf.
            </h2>
            <p className="mt-4 max-w-2xl text-sand-600">
              Digitale Agentur schafft das Fundament, Kundenmagnet bringt neue Kunden,
              KI-Assistenz optimiert zuletzt, was schon läuft. Sie müssen aber nicht beim
              Fundament anfangen – in der Digital-Analyse sagen wir ehrlich, wo Ihr größter Hebel liegt.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-3 lg:items-stretch">
            {services.map((s, i) => (
              <PackageColumn key={s.slug} s={s} i={i} />
            ))}
          </div>
          <Reveal delay={200}>
            <p className="mt-8 text-center text-body-sm text-sand-500">
              Alle Preise zzgl. Softwarelizenzen, die Sie direkt beim jeweiligen Anbieter abschließen.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Retainer: „Digital-Partner" */}
      <section className="bg-forest-100 px-5 py-section-m md:py-section">
        <div className="mx-auto max-w-container">
          <Reveal>
            <Eyebrow icon="shield">Danach</Eyebrow>
            <h2 className="mt-3 max-w-2xl font-display text-display-lg text-forest-950">
              Ihr Digital-Partner – dauerhaft betreut, nicht nur eingerichtet.
            </h2>
            <p className="mt-4 max-w-2xl text-sand-700">
              Nach dem Projekt entscheiden sich die meisten Kunden für eine laufende Betreuung:
              Support, Weiterentwicklung und neue Workflows, ohne dass Sie sich selbst darum kümmern müssen.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {retainerTiers.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 90} className="h-full">
                <div className={`flex h-full flex-col rounded-md p-6 md:p-8 ${tier.highlight ? 'bg-forest-900 text-forest-50' : 'bg-sand-0 shadow-hairline'}`}>
                  <h3 className={`font-display text-h3 ${tier.highlight ? 'text-forest-50' : 'text-sand-900'}`}>{tier.name}</h3>
                  <p className={`mt-1 font-display text-h2 font-medium ${tier.highlight ? 'text-forest-50' : 'text-forest-800'}`}>{tier.price}</p>
                  <ul className="m-0 mt-5 list-none space-y-2.5 p-0">
                    {tier.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-pill ${tier.highlight ? 'bg-forest-50/15' : 'bg-forest-100 text-forest-700'}`}>
                          <Icon name="check" size={11} />
                        </span>
                        <span className={`text-body-sm ${tier.highlight ? 'text-forest-100' : 'text-sand-700'}`}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <p className="mt-6 text-body-sm text-sand-600">Mindestlaufzeit 6–12 Monate.</p>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Nicht sicher, wo Sie anfangen sollen?"
        lead="Starten Sie mit dem kostenlosen Kurz-Check: 15–20 Minuten, und Sie wissen, welcher Baustein bei Ihnen zuerst wirkt."
      />
    </>
  );
}
