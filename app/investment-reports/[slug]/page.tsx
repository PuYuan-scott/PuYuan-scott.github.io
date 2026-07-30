import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArticleContent from "@/components/ArticleContent";
import {
  investmentArticleBySlug,
  investmentArticles,
} from "@/lib/investment-articles";

type InvestmentArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;
export const dynamic = "force-static";

export function generateStaticParams() {
  return investmentArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: InvestmentArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = investmentArticleBySlug(slug);

  if (!article) {
    return {};
  }

  return {
    title: article.title,
    description: article.abstract,
  };
}

export default async function InvestmentArticlePage({
  params,
}: InvestmentArticlePageProps) {
  const { slug } = await params;
  const article = investmentArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="page-shell insight-article">
      <header className="insight-article-header">
        <Link className="back-link" href="/investment-reports">
          <span aria-hidden="true">←</span> All investment reports
        </Link>
        <p className="eyebrow">{article.topic}</p>
        {article.company && (
          <p className="company-name">
            {article.company}
            {article.ticker ? ` · ${article.ticker}` : ""}
          </p>
        )}
        <h1>{article.title}</h1>
        <p className="insight-deck">{article.abstract}</p>
        <dl className="insight-byline">
          <div>
            <dt>By</dt>
            <dd>Scott Yuan</dd>
          </div>
          <div>
            <dt>Published</dt>
            <dd>{article.displayDate}</dd>
          </div>
          <div>
            <dt>Reading time</dt>
            <dd>{article.readingTime} min</dd>
          </div>
        </dl>
      </header>

      <div className="insight-content">
        <ArticleContent content={article.content} />
      </div>

      <footer className="insight-article-footer">
        <p>
          This article is for informational and educational purposes and does
          not constitute investment advice.
        </p>
        <Link className="text-link" href="/investment-reports">
          More investment reports <span aria-hidden="true">→</span>
        </Link>
      </footer>
    </article>
  );
}
