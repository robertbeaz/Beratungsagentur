import { site } from '../../components/site';

export const metadata = {
  title: 'Datenschutzerklärung',
  robots: { index: false },
};

/* TODO: Vor Livegang vollständig ausfüllen und rechtlich prüfen lassen.
   Diese Vorlage deckt die technisch eingesetzten Dienste ab:
   – Hosting (z. B. Vercel) – Cal.com-Einbettung (Terminbuchung)
   Fonts werden lokal gehostet (next/font), kein Google-Fonts-Hinweis nötig. */
export default function DatenschutzPage() {
  return (
    <section className="px-5 py-section-m md:py-section">
      <div className="mx-auto max-w-col-3">
        <h1 className="font-display text-h1 text-sand-900">Datenschutzerklärung</h1>

        <div className="mt-10 space-y-8 text-sand-700">
          <div>
            <h2 className="font-display text-h4 text-sand-900">1. Verantwortlicher</h2>
            <p>
              {site.name} [Rechtsform]<br />
              [Anschrift]<br />
              E-Mail: {site.email}
            </p>
          </div>

          <div>
            <h2 className="font-display text-h4 text-sand-900">2. Hosting</h2>
            <p>
              Diese Website wird bei [Hosting-Anbieter, z. B. Vercel Inc.] gehostet. Beim Aufruf
              der Website verarbeitet der Anbieter technisch notwendige Daten (IP-Adresse,
              Datum und Uhrzeit des Zugriffs, aufgerufene Seite, Browsertyp) in sogenannten
              Server-Logfiles. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
              Interesse an der sicheren Bereitstellung der Website).
              [Ggf. Hinweis auf Auftragsverarbeitungsvertrag und Drittlandübermittlung ergänzen.]
            </p>
          </div>

          <div>
            <h2 className="font-display text-h4 text-sand-900">3. Terminbuchung über Cal.com</h2>
            <p>
              Für die Vereinbarung von Erstgesprächen binden wir den Terminbuchungsdienst
              Cal.com ein. Wenn Sie einen Termin buchen, werden die von Ihnen eingegebenen
              Daten (Name, E-Mail-Adresse, ggf. Telefonnummer und Ihre Nachricht) an Cal.com
              übermittelt und dort verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO
              (Durchführung vorvertraglicher Maßnahmen).
              [AV-Vertrag mit Cal.com abschließen und Details ergänzen.]
            </p>
          </div>

          <div>
            <h2 className="font-display text-h4 text-sand-900">4. Kontakt per E-Mail</h2>
            <p>
              Wenn Sie uns per E-Mail kontaktieren, verarbeiten wir Ihre Angaben zur Bearbeitung
              der Anfrage (Art. 6 Abs. 1 lit. b DSGVO) und speichern sie, solange dies für die
              Bearbeitung und mögliche Anschlussfragen erforderlich ist.
            </p>
          </div>

          <div>
            <h2 className="font-display text-h4 text-sand-900">5. Schriftarten</h2>
            <p>
              Diese Website nutzt lokal eingebundene Schriftarten. Beim Aufruf der Seite wird
              keine Verbindung zu Servern von Google oder anderen Font-Anbietern aufgebaut.
            </p>
          </div>

          <div>
            <h2 className="font-display text-h4 text-sand-900">6. Ihre Rechte</h2>
            <p>
              Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16 DSGVO),
              Löschung (Art. 17 DSGVO), Einschränkung der Verarbeitung (Art. 18 DSGVO),
              Datenübertragbarkeit (Art. 20 DSGVO) sowie Widerspruch gegen die Verarbeitung
              (Art. 21 DSGVO). Außerdem können Sie sich bei einer Datenschutz-Aufsichtsbehörde
              beschweren (Art. 77 DSGVO).
            </p>
          </div>

          <p className="text-body-sm text-sand-500">
            Stand: [Datum ergänzen]. Diese Erklärung ist eine Vorlage und ersetzt keine
            Rechtsberatung.
          </p>
        </div>
      </div>
    </section>
  );
}
