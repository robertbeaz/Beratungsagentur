import { Schibsted_Grotesk, Hanken_Grotesk, IBM_Plex_Mono } from 'next/font/google';
import { Navbar, Footer } from '../components/sections';
import { site } from '../components/site';
import { JsonLd, organizationJsonLd } from '../components/schema';
import './globals.css';

/* Fonts werden von next/font selbst gehostet – kein Request an Google (DSGVO). */
const displayFont = Schibsted_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const bodyFont = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const dataFont = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-data',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} – Das digitale Betriebssystem für Versicherungsagenturen`,
    template: `%s | ${site.name}`,
  },
  description:
    'CRM-Einführung, Automatisierung und Kundenkommunikation für Versicherungsagenturen und Maklerbüros – eingerichtet, verbunden und im Team geschult. Zum Festpreis, in 90 Tagen.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="de" className={`${displayFont.variable} ${bodyFont.variable} ${dataFont.variable}`}>
      <body className="font-body">
        <JsonLd data={organizationJsonLd()} />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
