import { site, services } from '../components/site';
import { articles } from '../content/artikel';

/* Automatische sitemap.xml: statische Seiten + Pakete + veröffentlichte
   Wissens-Artikel (Drafts sind in `articles` im Prod-Build nicht enthalten). */
export default function sitemap() {
  const staticRoutes = ['', '/leistungen', '/use-cases', '/wissen', '/ueber-uns', '/kurz-check'].map(
    (path) => ({
      url: `${site.url}${path}`,
      changeFrequency: 'monthly',
      priority: path === '' ? 1 : 0.8,
    })
  );

  const serviceRoutes = services.map((s) => ({
    url: `${site.url}/leistungen/${s.slug}`,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  const articleRoutes = articles
    .filter((a) => !a.draft)
    .map((a) => ({
      url: `${site.url}/wissen/${a.slug}`,
      lastModified: a.dateModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    }));

  return [...staticRoutes, ...serviceRoutes, ...articleRoutes];
}
