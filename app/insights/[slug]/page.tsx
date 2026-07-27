import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  insightBySlug,
  insights,
  type InsightBlock,
} from "@/lib/insights";

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

function InsightContent({ block }: { block: InsightBlock }) {
  switch (block.type) {
    case "heading":
      return <h2>{block.text}</h2>;
    case "list":
      return (
        <ul>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "quote":
      return <blockquote>{block.text}</blockquote>;
    case "paragraph":
      return <p>{block.text}</p>;
  }
}

export default async function InsightPage({ params }: InsightPageProps) {
  const { slug } = await params;
  const insight = insightBySlug(slug);

  if (!insight) {
    notFound();
  }

  return (
    <article className="page-shell insight-article">
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
        {insight.content.map((block, index) => (
          <InsightContent block={block} key={`${block.type}-${index}`} />
        ))}
      </div>

      <footer className="insight-article-footer">
        <p>
          This article is for informational and educational purposes and does
          not constitute investment advice.
        </p>
        <Link className="text-link" href="/insights">
          More insights <span aria-hidden="true">→</span>
        </Link>
      </footer>
    </article>
  );
}
