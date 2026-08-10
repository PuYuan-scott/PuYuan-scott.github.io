import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArticleContent from "@/components/ArticleContent";
import { insightBySlug, insights } from "@/lib/insights";

type InsightPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;
export const dynamic = "force-static";

export function generateStaticParams() {
  // Static export requires one path even before the first insight is published.
  // This unlinked placeholder resolves through the site's 404 page.
  if (insights.length === 0) {
    return [{ slug: "__empty__" }];
  }

  return insights.map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({
  params,
}: InsightPageProps): Promise<Metadata> {
  const { slug } = await params;
  const insight = insightBySlug(slug);

  if (!insight) {
    return {};
  }

  return {
    title: insight.title,
    description: insight.abstract,
  };
}

export default async function InsightPage({ params }: InsightPageProps) {
  const { slug } = await params;
  const insight = insightBySlug(slug);

  if (!insight) {
    notFound();
  }

  return (
    <article
      className="page-shell insight-article"
      lang={insight.language ?? "en"}
    >
      <header className="insight-article-header">
        <Link className="back-link" href="/insights">
          <span aria-hidden="true">←</span> All insights
        </Link>
        <p className="eyebrow">{insight.topic}</p>
        {insight.company && (
          <p className="company-name">
            {insight.company}
            {insight.ticker ? ` · ${insight.ticker}` : ""}
          </p>
        )}
        <h1>{insight.title}</h1>
        <p className="insight-deck">{insight.abstract}</p>
        <dl className="insight-byline">
          <div>
            <dt>By</dt>
            <dd>Scott Yuan</dd>
          </div>
          <div>
            <dt>Published</dt>
            <dd>{insight.displayDate}</dd>
          </div>
          <div>
            <dt>Reading time</dt>
            <dd>{insight.readingTime} min</dd>
          </div>
        </dl>
      </header>

      <div className="insight-content">
        <ArticleContent content={insight.content} />
      </div>

      <footer className="insight-article-footer">
        <p>
          This article is for informational and educational purposes and does
          not constitute investment advice.
        </p>
        <div className="insight-article-links">
          {insight.fullReport && (
            <a
              className="text-link"
              href={insight.fullReport}
              target="_blank"
              rel="noreferrer"
            >
              {insight.fullReportLabel ?? "Full report PDF"}{" "}
              <span aria-hidden="true">↗</span>
            </a>
          )}
          <Link className="text-link" href="/insights">
            More insights <span aria-hidden="true">→</span>
          </Link>
        </div>
      </footer>
    </article>
  );
}
