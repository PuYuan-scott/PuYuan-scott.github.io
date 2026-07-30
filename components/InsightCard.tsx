import Link from "next/link";
import type { InsightArticle } from "@/lib/insights";

type InsightCardProps = {
  insight: InsightArticle;
  basePath?: string;
};

export default function InsightCard({
  insight,
  basePath = "/insights",
}: InsightCardProps) {
  const articleHref = `${basePath}/${insight.slug}`;

  return (
    <article className="insight-card">
      <div className="insight-card-main">
        <p className="eyebrow">{insight.topic}</p>
        {insight.company && (
          <p className="company-name">
            {insight.company}
            {insight.ticker ? ` · ${insight.ticker}` : ""}
          </p>
        )}
        <h2>
          <Link href={articleHref}>{insight.title}</Link>
        </h2>
        <p className="insight-summary">{insight.abstract}</p>
        <Link className="text-link" href={articleHref}>
          Read article <span aria-hidden="true">→</span>
        </Link>
      </div>
      <dl className="insight-card-meta">
        <div>
          <dt>Published</dt>
          <dd>{insight.displayDate}</dd>
        </div>
        <div>
          <dt>Reading time</dt>
          <dd>{insight.readingTime} min</dd>
        </div>
      </dl>
    </article>
  );
}
