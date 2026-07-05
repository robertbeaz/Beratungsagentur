import { site } from '../../components/site';

export const metadata = {
  title: 'Impressum',
  robots: { index: false },
};

/* TODO: Alle Angaben vor Livegang durch echte Daten ersetzen
   und rechtlich prüfen lassen (§ 5 DDG, § 18 MStV). */
export default function ImpressumPage() {
  return (
    <section className="px-5 py-section-m md:py-section">
      <div className="mx-auto max-w-col-3">
        <h1 className="font-display text-h1 text-sand-900">Impressum</h1>

        <div className="mt-10 space-y-8 text-sand-700">
          <div>
            <h2 className="font-display text-h4 text-sand-900">Angaben gemäß § 5 DDG</h2>
            <p>
              {site.name} [Rechtsform ergänzen]<br />
              [Straße und Hausnummer]<br />
              [PLZ und Ort]
            </p>
          </div>

          <div>
            <h2 className="font-display text-h4 text-sand-900">Vertreten durch</h2>
            <p>[Name der Geschäftsführung / Inhaber]</p>
          </div>

          <div>
            <h2 className="font-display text-h4 text-sand-900">Kontakt</h2>
            <p>
              Telefon: [Telefonnummer]<br />
              E-Mail: {site.email}
            </p>
          </div>

          <div>
            <h2 className="font-display text-h4 text-sand-900">Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:<br />
              [USt-IdNr. ergänzen]
            </p>
          </div>

          <div>
            <h2 className="font-display text-h4 text-sand-900">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
            <p>
              [Name]<br />
              [Anschrift wie oben]
            </p>
          </div>

          <div>
            <h2 className="font-display text-h4 text-sand-900">EU-Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
              bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a>.
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
