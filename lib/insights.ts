export type InsightBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "heading";
      text: string;
    }
  | {
      type: "list";
      items: string[];
    }
  | {
      type: "quote";
      text: string;
    };

export type InsightArticle = {
  slug: string;
  title: string;
  topic: string;
  company?: string;
  ticker?: string;
  published: string;
  displayDate: string;
  readingTime: number;
  abstract: string;
  content: InsightBlock[];
};

export const insightCategory = {
  slug: "insights",
  label: "Insights",
  description:
    "Short-form research notes, market observations and investment perspectives.",
};

export const insights: InsightArticle[] = [];

export function sortedInsights() {
  return [...insights].sort((a, b) =>
    b.published.localeCompare(a.published),
  );
}

export function insightBySlug(slug: string) {
  return insights.find((insight) => insight.slug === slug);
}
