export type CategorySlug =
  | "equity-research"
  | "investment-reports"
  | "economic-analysis";

export type ResearchReport = {
  slug: string;
  category: CategorySlug;
  categoryLabel: string;
  title: string;
  company?: string;
  ticker?: string;
  published: string;
  displayDate: string;
  pages: number;
  abstract: string;
  takeaways: string[];
  pdf: string;
  featured: boolean;
};

export const categories: {
  slug: CategorySlug;
  label: string;
  description: string;
}[] = [
  {
    slug: "equity-research",
    label: "Equity Research",
    description:
      "Fundamental company research, earnings analysis and valuation.",
  },
  {
    slug: "investment-reports",
    label: "Investment Reports",
    description:
      "Focused investment theses, portfolio perspectives and scenario work.",
  },
  {
    slug: "economic-analysis",
    label: "Economic Analysis",
    description:
      "Independent analysis of macroeconomic trends and capital markets.",
  },
];

export const reports: ResearchReport[] = [
  {
    slug: "alphabet-q2-2026",
    category: "equity-research",
    categoryLabel: "Equity Research",
    title:
      "Search Resilience, Cloud Acceleration and the Economics of the AI Infrastructure Build-out",
    company: "Alphabet Inc.",
    ticker: "GOOG / GOOGL",
    published: "2026-07-26",
    displayDate: "July 26, 2026",
    pages: 185,
    abstract:
      "This report evaluates Alphabet’s Q2 2026 results across Search, YouTube, Google Cloud, AI monetization, infrastructure spending and valuation. Google Cloud was the quarter’s strongest operating contributor, while Search remained resilient as AI-powered products increased engagement. These positives were offset by sharply higher capital expenditures, negative quarterly free cash flow and rising infrastructure-related costs. The analysis separates recurring operating performance from material non-operating investment gains and develops normalized earnings, EBITDA, free-cash-flow and sum-of-the-parts valuations.",
    takeaways: [
      "Google Cloud was the highest-quality component of the quarter, with 81.8% revenue growth and a 35.6% operating margin.",
      "Search remained resilient, but long-term AI economics depend on monetization exceeding inference and infrastructure costs.",
      "Elevated capital expenditure and negative near-term free cash flow remain the principal valuation risks.",
    ],
    pdf: "/reports/alphabet_full_equity_research_report_q2_2026.pdf",
    featured: true,
  },
  {
    slug: "economic-cycle-framework",
    category: "economic-analysis",
    categoryLabel: "Economic Analysis",
    title:
      "Economic Cycle Framework: Five-Dimension Assessment, Market Performance, and Late-Cycle Pathways",
    published: "2026-07-29",
    displayDate: "July 29, 2026",
    pages: 31,
    abstract:
      "This report presents a five-dimension framework for assessing the economic cycle through growth, employment, inflation, financial conditions and credit. It defines practical thresholds for eight macroeconomic regimes, maps each regime to expected equity-market behavior, and outlines the decision rules and transmission mechanisms behind soft-landing, stagflation and hard-landing pathways.",
    takeaways: [
      "Economic regimes should be assessed through direction, duration and confirmation across all five dimensions rather than through isolated data points.",
      "The late-cycle path depends primarily on whether inflation continues to decline and whether employment and credit remain stable.",
      "Equity-market leadership, rate sensitivity and the relative performance of growth and defensive sectors vary systematically across the economic cycle.",
    ],
    pdf: "/reports/economic_cycle_framework.pdf",
    featured: false,
  },
];

export function reportsForCategory(category: CategorySlug) {
  return reports
    .filter((report) => report.category === category)
    .sort((a, b) => b.published.localeCompare(a.published));
}
