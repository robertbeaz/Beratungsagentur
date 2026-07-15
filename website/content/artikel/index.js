/* ============================================================
   Artikel-Registry für den Wissens-Bereich (/wissen).
   Neuer Artikel: Datei in content/artikel/ anlegen (Kopie der
   vorlage-artikelaufbau.js), hier importieren und zur Liste
   hinzufügen. Sortierung und Lesezeit passieren automatisch.
   ============================================================ */
import { article as vorlage } from './vorlage-artikelaufbau';
import { article as whatsappDsgvo } from './whatsapp-dsgvo-versicherungsmakler';

const alleArtikel = [
  vorlage,
  whatsappDsgvo,
];

/* Lesezeit aus dem tatsächlichen Textumfang (~200 Wörter/Minute). */
function readingTime(article) {
  const blockText = (b) => b.text || b.items?.join(' ') || '';
  const words = [article.answer, ...article.blocks.map(blockText), ...(article.faq || []).map((f) => `${f.q} ${f.a}`)]
    .join(' ')
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

/* Drafts erscheinen nur im Dev-Modus – nie im Production-Build. */
const isProd = process.env.NODE_ENV === 'production';

export const articles = alleArtikel
  .filter((a) => !isProd || !a.draft)
  .map((a) => ({ ...a, readingTime: readingTime(a) }))
  .sort((a, b) => (a.datePublished < b.datePublished ? 1 : -1));

export function getArticle(slug) {
  return articles.find((a) => a.slug === slug);
}

export function formatDate(iso) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString('de-DE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
