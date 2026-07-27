import type { Metadata } from "next";
import InsightCard from "@/components/InsightCard";
import { insightCategory, sortedInsights } from "@/lib/insights";

export const metadata: Metadata = {
  title: "Insights",
  description: insightCategory.description,
};

export default function InsightsPage() {
  const articles = sortedInsights();

  return (
    <div className="page-shell interior-page">
      <header className="page-intro">
        <p className="eyebrow">Short-form Commentary</p>
        <h1>{insightCategory.label}</h1>
        <p>{insightCategory.description}</p>
      </header>

      <section className="insight-list" aria-label="Insights">
        {articles.length > 0 ? (
          articles.map((insight) => (
            <InsightCard insight={insight} key={insight.slug} />
          ))
        ) : (
          <div className="empty-state">
            <span>Insights archive</span>
            <h2>Short-form research will appear here.</h2>
            <p>
              New market observations, investment perspectives and research
              notes will be published directly on this page.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
