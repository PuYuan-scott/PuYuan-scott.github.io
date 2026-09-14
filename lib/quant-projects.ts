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
  frameworkTitle: string;
  framework: {
    title: string;
    description: string;
  }[];
  capabilitiesTitle: string;
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
    frameworkTitle: "A four-dimension confirmation framework.",
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
    capabilitiesTitle: "From market regime to individual ETF confirmation.",
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
  {
    slug: "investor-holdings-dashboard",
    title: "Investor Holdings Dashboard",
    eyebrow: "Public Disclosure Intelligence",
    published: "2026-09-14",
    displayDate: "September 14, 2026",
    status: "Open-source research system",
    abstract:
      "A full-stack research dashboard that collects and normalizes official public disclosures, then organizes investor portfolios, shared holdings and reported position changes with transparent source records and data-quality context.",
    repository:
      "https://github.com/PuYuan-scott/investor-holdings-dashboard",
    screenshot: {
      src: "/projects/investor-holdings-dashboard.png",
      alt: "Investor Holdings public disclosure dashboard showing twelve tracked investors, reported portfolios and positions, portfolio dates, source coverage, search filters and investor cards.",
      caption:
        "The Investors workspace presents normalized public disclosures with portfolio dates, source coverage and data-quality context. Reported holdings are historical disclosures, not live portfolios.",
      width: 5664,
      height: 2654,
    },
    frameworkTitle: "From official filings to comparable research records.",
    framework: [
      {
        title: "Official Sources",
        description:
          "Collects SEC EDGAR filings, U.S. House financial disclosures and official fund reports while retaining source documents and amendments.",
      },
      {
        title: "Normalized History",
        description:
          "Stores validated reporting periods in PostgreSQL with report dates, disclosure dates, precision labels and source-level warnings.",
      },
      {
        title: "Change Detection",
        description:
          "Compares share counts across complete periods to identify new, increased, reduced, exited and unchanged positions without confusing price movement with trading.",
      },
      {
        title: "Research Views",
        description:
          "Connects investor portfolios, individual holdings, disclosed changes and verified company mappings for cross-investor consensus analysis.",
      },
    ],
    capabilitiesTitle:
      "A traceable workspace for holdings, changes and shared conviction.",
    capabilities: [
      "Tracks twelve configured investors and investment entities across SEC 13F filings, House disclosures and official fund reports.",
      "Separates common stock and option positions and preserves reporting scope, amendments, source links and audit records.",
      "Processes quarterly holdings, House PTR transactions, N-PORT filings and official global-fund reports without estimating undisclosed positions.",
      "Provides responsive Investors, Holdings and Changes workspaces with search, filters, dark mode and explicit data-quality warnings.",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "SQLAlchemy",
      "Docker Compose",
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
