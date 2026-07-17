/* ============================================================
   Artikel-Renderer für den Wissens-Bereich.
   Setzt den SEO/GEO-Bauplan um: Antwort-Box („Die kurze Antwort“),
   fragenförmige H2s mit Anker-IDs, Definitions-Blöcke, Quellen.
   Design: identische Tokens wie sections.jsx/primitives.jsx.
   ============================================================ */
import Link from 'next/link';
import { Icon, Eyebrow, Badge, Card, ButtonLink } from './primitives';
import { formatDate, getArticle } from '../content/artikel';

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

/* ---------- Artikelkopf (Sage-Fläche wie PageHeader) ---------- */
export function ArticleHeader({ article }) {
  return (
    <section className="bg-forest-100 px-5 py-section-m md:py-section">
      <div className="mx-auto max-w-container">
        <div className="mx-auto max-w-3xl">
          <span className="flex items-center gap-3">
            <Eyebrow icon={article.categoryIcon}>{article.category}</Eyebrow>
            {article.draft && <Badge tone="warning">Entwurf – nur im Dev-Modus sichtbar</Badge>}
          </span>
          <h1 className="mt-3 animate-fade-up font-display text-display-lg text-forest-950">
            {article.title}
          </h1>
          <p className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-1 text-body-sm text-sand-600">
            <span className="inline-flex items-center gap-1.5">
              <Icon name="calendar" size={15} />
              {formatDate(article.datePublished)}
            </span>
            {article.dateModified !== article.datePublished && (
              <span>Aktualisiert am {formatDate(article.dateModified)}</span>
            )}
            <span className="inline-flex items-center gap-1.5">
              <Icon name="clock" size={15} />
              {article.readingTime} Min. Lesezeit
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- „Die kurze Antwort“ (GEO: extraktionsfähige Passage) ---------- */
export function AnswerBox({ text }) {
  return (
    <div className="rounded-md bg-forest-100 p-6 md:p-8">
      <Eyebrow icon="check">Die kurze Antwort</Eyebrow>
      <p className="m-0 mt-3 text-body-lg text-forest-950">{text}</p>
    </div>
  );
}

/* ---------- Inhaltsblöcke ---------- */
function Block({ block }) {
  switch (block.type) {
    case 'h2':
      return (
        <h2 id={slugify(block.text)} className="mt-12 scroll-mt-24 font-display text-h2 text-sand-900">
          {block.text}
        </h2>
      );
    case 'h3':
      return <h3 className="mt-8 font-display text-h3 text-sand-900">{block.text}</h3>;
    case 'ul':
      return (
        <ul className="mt-5 list-none space-y-3 p-0">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sand-700">
              <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-pill bg-forest-100 text-forest-700">
                <Icon name="check" size={13} />
              </span>
              {item}
            </li>
          ))}
        </ul>
      );
    case 'ol':
      return (
        <ol className="mt-5 list-none space-y-3 p-0" style={{ counterReset: 'step' }}>
          {block.items.map((item, i) => (
            <li key={item} className="flex items-start gap-3 text-sand-700">
              <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-pill bg-forest-100 font-data text-data font-medium text-forest-800">
                {i + 1}
              </span>
              {item}
            </li>
          ))}
        </ol>
      );
    case 'callout':
      return (
        <div className="mt-8 rounded-md bg-forest-100 p-6">
          <p className="m-0 flex items-center gap-2 font-semibold text-forest-950">
            <Icon name="bell" size={18} className="text-forest-700" />
            {block.title}
          </p>
          <p className="m-0 mt-2 text-sand-700">{block.text}</p>
        </div>
      );
    case 'definition':
      return (
        <div className="mt-8 rounded-sm bg-sand-50 p-6 shadow-hairline">
          <p className="m-0 text-sand-700">
            <dfn className="font-semibold not-italic text-sand-900">{block.term}:</dfn> {block.text}
          </p>
        </div>
      );
    case 'quote':
      return (
        <figure className="m-0 mt-8 border-l-2 border-forest-500 pl-6">
          <blockquote className="m-0 font-display text-h4 font-medium leading-snug text-sand-900">
            „{block.text}“
          </blockquote>
          {block.source && <figcaption className="mt-2 text-body-sm text-sand-500">{block.source}</figcaption>}
        </figure>
      );
    default:
      return <p className="mt-5 text-body-lg text-sand-700">{block.text}</p>;
  }
}

export function ArticleBody({ article }) {
  return (
    <section className="px-5 py-section-m md:py-section">
      <div className="mx-auto max-w-container">
        <article className="mx-auto max-w-3xl">
          <AnswerBox text={article.answer} />
          {article.blocks.map((block, i) => (
            <Block key={i} block={block} />
          ))}
          {article.relatedArticles?.length > 0 && (
            <div className="mt-12 rounded-md bg-sand-50 p-6 shadow-hairline md:p-8">
              <p className="m-0 text-body-sm font-semibold uppercase tracking-widest text-forest-600">
                Weiterlesen
              </p>
              <ul className="m-0 mt-4 list-none space-y-3 p-0">
                {article.relatedArticles.map(getArticle).filter(Boolean).map((rel) => (
                  <li key={rel.slug}>
                    <Link
                      href={`/wissen/${rel.slug}`}
                      className="font-semibold text-sand-900 no-underline transition-colors duration-fast hover:text-forest-700"
                    >
                      {rel.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {article.sources?.length > 0 && (
            <div className="mt-12 border-t border-sand-200 pt-6">
              <p className="m-0 text-body-sm font-semibold uppercase tracking-widest text-sand-500">Quellen</p>
              <ul className="m-0 mt-3 list-none space-y-2 p-0">
                {article.sources.map((s) => (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-body-sm text-sand-600 hover:text-sand-900"
                    >
                      <Icon name="arrow-up-right" size={14} />
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </article>
      </div>
    </section>
  );
}

/* ---------- Paket-Teaser am Artikelende (interne Verlinkung) ---------- */
export function ArticleServiceTeaser({ article }) {
  if (!article.serviceHref) return null;
  return (
    <section className="px-5 pb-section-m md:pb-section">
      <div className="mx-auto max-w-container">
        <div className="mx-auto max-w-3xl">
          <Card tone="sage" className="flex flex-wrap items-center justify-between gap-5">
            <div>
              <p className="m-0 text-body-sm font-semibold uppercase tracking-widest text-forest-600">
                Passendes Paket
              </p>
              <p className="m-0 mt-1 font-display text-h4 text-forest-950">{article.serviceLabel}</p>
            </div>
            <ButtonLink href={article.serviceHref} variant="secondary">
              Paket ansehen
            </ButtonLink>
          </Card>
        </div>
      </div>
    </section>
  );
}

/* ---------- Artikel-Karte für die Übersicht ---------- */
export function ArticleCard({ article, delay = 0 }) {
  return (
    <Link
      href={`/wissen/${article.slug}`}
      className="group flex h-full flex-col rounded-sm bg-sand-0 p-6 no-underline shadow-hairline transition-all duration-fast hover:-translate-y-1 hover:shadow-md md:p-8"
    >
      <span className="flex items-center gap-3">
        <p className="m-0 text-body-sm font-semibold uppercase tracking-widest text-forest-600">
          {article.category}
        </p>
        {article.draft && <Badge tone="warning">Entwurf</Badge>}
      </span>
      <h3 className="mt-3 font-display text-h4 text-sand-900">{article.title}</h3>
      <p className="mt-2 flex-1 text-sand-600">{article.excerpt}</p>
      <p className="m-0 mt-5 flex items-center gap-4 text-body-sm text-sand-500">
        <span>{formatDate(article.datePublished)}</span>
        <span className="inline-flex items-center gap-1.5">
          <Icon name="clock" size={14} />
          {article.readingTime} Min.
        </span>
      </p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-body-sm font-semibold text-forest-700">
        Artikel lesen
        <Icon name="arrow-right" size={15} className="transition-transform duration-fast group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
