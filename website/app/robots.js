import { site } from '../components/site';

/* TODO Livegang: Auf `true` stellen, sobald echte Zahlen/Testimonials
   eingepflegt sind und die Seite indexiert werden soll. Solange `false`,
   wird die komplette Website für Suchmaschinen gesperrt (noindex-Schutz
   für die Platzhalter-Inhalte). */
const INDEXIERUNG_FREIGEGEBEN = false;

export default function robots() {
  if (!INDEXIERUNG_FREIGEGEBEN) {
    return {
      rules: { userAgent: '*', disallow: '/' },
    };
  }
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
