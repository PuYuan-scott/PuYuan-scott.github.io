export type QuantProject = {
  slug: string;
  title: string;
  eyebrow: string;
  published: string;
  displayDate: string;
  status: string;
  abstract: string;
  repository: string;
  screenshot: {
    src: string;
    alt: string;
    caption: string;
    width: number;
    height: number;
  };
  framework: {
    title: string;
    description: string;
  }[];
  capabilities: string[];
  stack: string[];
};

export const quantProjectCategory = {
  slug: "quant-projects",
  label: "Quant Projects",
  pageTitle: "Quantitative Research & Tools",
  description:
    "Open-source dashboards, systematic investment frameworks and research automation built to turn market data into repeatable analysis.",
};

export const quantProjects: QuantProject[] = [
  {
    slug: "etf-rotation-radar",
    title: "ETF Rotation Radar",
    eyebrow: "Systematic Market Monitor",
    published: "2026-08-29",
    displayDate: "August 29, 2026",
    status: "Open-source dashboard",
    abstract:
      "A rule-based ETF monitoring dashboard for identifying strengthening and weakening sectors, assessing whether markets favor risk-on or defensive assets, and confirming price trends with holdings breadth and actual changes in ETF shares outstanding.",
    repository: "https://github.com/PuYuan-scott/etf-rotation-radar",
    screenshot: {
      src: "/projects/etf-rotation-radar-overview.png",
      alt: "ETF Rotation Radar market overview dashboard showing sector leaders, emerging and weakening themes, a multi-horizon return heatmap, and a risk-on versus defensive chart.",
      caption:
        "Market Overview in deterministic demo mode. The repository also supports live market and official issuer data.",
      width: 3200,
      height: 2200,
    },
    framework: [
      {
        title: "Trend",
        description:
          "Ranks 5D, 20D, 60D, 120D and 250D returns and evaluates long-period drawdowns.",
      },
      {
        title: "Relative Strength",
        description:
          "Tracks leadership ratios including SMH/MAGS, IGV/SMH, XLY/XLP and IWM/MAGS.",
      },
      {
        title: "Market Breadth",
        description:
          "Tests whether ETF performance is supported by participation among core holdings rather than a small group of leaders.",
      },
      {
        title: "Fund Flows",
        description:
          "Calculates flow from changes in shares outstanding and official NAV instead of treating trading volume as fund flow.",
      },
    ],
    capabilities: [
      "Six dashboard pages: Market Overview, Return Rankings, Relative Strength, Market Breadth, Fund Flows and Composite View.",
      "Fourteen ETFs spanning mega-cap technology, semiconductors, software, cloud, cybersecurity, sectors, small caps and gold.",
      "A composite score combining trend, relative strength, breadth and fund flow, with explicit handling of missing dimensions.",
      "Live and deterministic demo modes, full-project refresh controls, official issuer-history storage and automated tests.",
    ],
    stack: [
      "Python",
      "Streamlit",
      "Pandas",
      "Plotly",
      "Yahoo Finance",
      "Official issuer data",
    ],
  },
];

export function sortedQuantProjects() {
  return [...quantProjects].sort((a, b) =>
    b.published.localeCompare(a.published),
  );
}

export function quantProjectBySlug(slug: string) {
  return quantProjects.find((project) => project.slug === slug);
}
