import { notFound } from 'next/navigation';
import { CtaBand, FaqSection } from '../../../components/sections';
import { ArticleHeader, ArticleBody, ArticleServiceTeaser } from '../../../components/article';
import { JsonLd, faqJsonLd, articleJsonLd } from '../../../components/schema';
import { articles, getArticle } from '../../../content/artikel';

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.seo?.title ?? article.title,
    description: article.seo?.description ?? article.excerpt,
    alternates: { canonical: `/wissen/${article.slug}` },
    robots: article.draft ? { index: false, follow: false } : undefined,
    openGraph: {
      type: 'article',
      title: article.title,
      description: article.seo?.description ?? article.excerpt,
      publishedTime: article.datePublished,
      modifiedTime: article.dateModified,
    },
  };
}

export default async function ArtikelPage({ params }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <>
      <JsonLd data={articleJsonLd(article)} />
      {article.faq?.length > 0 && <JsonLd data={faqJsonLd(article.faq)} />}
      <ArticleHeader article={article} />
      <ArticleBody article={article} />
      {article.faq?.length > 0 && <FaqSection title="Häufige Fragen dazu" items={article.faq} />}
      <ArticleServiceTeaser article={article} />
      <CtaBand
        title="Wie sieht das bei Ihnen aus?"
        lead="Im Erstgespräch schauen wir auf Ihre Abläufe und Sie erhalten eine ehrliche Einschätzung – 30 Minuten, kostenlos und unverbindlich."
      />
    </>
  );
}
