/* ============================================================
   Strukturierte Daten (JSON-LD) für Suchmaschinen & KI-Assistenten.
   FAQPage macht die ohnehin gepflegten FAQ-Inhalte maschinenlesbar,
   Organization/Service klären die Entität für GEO (ChatGPT, Perplexity,
   AI Overviews). Kein Einfluss auf das Rendering.
   ============================================================ */
import { site } from './site';

export function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${site.url}/#organization`,
    name: site.name,
    slogan: site.claim,
    url: site.url,
    email: site.email,
    areaServed: ['DE', 'AT', 'CH'],
    description:
      'Beratung, Implementierung und Schulung für Versicherungsagenturen und Maklerbüros: CRM-Einführung, automatisierte Prozesse und Kundenkommunikation – herstellerunabhängig, zum Festpreis.',
    knowsAbout: [
      'CRM-Einführung für Versicherungsagenturen',
      'Digitalisierung von Maklerbüros',
      'WhatsApp-Kundenkommunikation (Superchat)',
      'KI-Chatbots und Telefonassistenten',
      'DSGVO-konforme Prozessautomatisierung',
    ],
  };
}

export function faqJsonLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}

/* BlogPosting-Schema je Wissens-Artikel. */
export function articleJsonLd(article) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.seo?.description ?? article.excerpt,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    inLanguage: 'de',
    articleSection: article.category,
    mainEntityOfPage: `${site.url}/wissen/${article.slug}`,
    author: { '@id': `${site.url}/#organization` },
    publisher: { '@id': `${site.url}/#organization` },
  };
}

/* Service-Schema je Paketseite – „ab“-Preis als minPrice, damit weder
   Google noch KI-Assistenten den Einstiegspreis als Festbetrag lesen. */
export function serviceJsonLd(service) {
  const minPrice = Number.parseInt(service.price.from.replace(/\D/g, ''), 10);
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service.eyebrow} – ${service.title}`,
    description: service.teaser,
    url: `${site.url}/leistungen/${service.slug}`,
    provider: { '@id': `${site.url}/#organization` },
    audience: {
      '@type': 'BusinessAudience',
      name: 'Versicherungsagenturen, Versicherungsmakler und Vermittlerbüros',
    },
    areaServed: ['DE', 'AT', 'CH'],
    offers: {
      '@type': 'Offer',
      priceCurrency: 'EUR',
      priceSpecification: {
        '@type': 'PriceSpecification',
        minPrice,
        priceCurrency: 'EUR',
      },
      description: service.price.note,
    },
  };
}
