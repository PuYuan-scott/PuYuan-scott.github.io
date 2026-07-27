import Link from "next/link";
import type { InsightArticle } from "@/lib/insights";

type InsightCardProps = {
  insight: InsightArticle;
};

export default function InsightCard({ insight }: InsightCardProps) {
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
          <Link href={`/insights/${insight.slug}`}>{insight.title}</Link>
        </h2>
        <p className="insight-summary">{insight.abstract}</p>
        <Link className="text-link" href={`/insights/${insight.slug}`}>
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
