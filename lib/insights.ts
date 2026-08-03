import { aiCapexCycleInsight } from "@/lib/ai-capex-cycle-insight";

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
    }
  | {
      type: "framework";
      items: string[];
    }
  | {
      type: "table";
      headers: string[];
      rows: string[][];
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

export const insights: InsightArticle[] = [
  aiCapexCycleInsight,
  {
    slug: "us-economy-still-expanding",
    title:
      "The U.S. Economy Is Still Expanding—but the Risks Have Not Disappeared",
    topic: "U.S. Economy",
    published: "2026-07-30",
    displayDate: "July 30, 2026",
    readingTime: 6,
    abstract:
      "The U.S. economy is currently best described as being in a late-cycle soft-landing phase, with meaningful reflation risk.",
    content: [
      {
        type: "heading",
        text: "Conclusion",
      },
      {
        type: "paragraph",
        text: "The U.S. economy is currently best described as being in a late-cycle soft-landing phase, with meaningful reflation risk.",
      },
      {
        type: "paragraph",
        text: "Headline GDP growth has slowed, hiring is weak, inflation remains above target, and financial conditions are restrictive. At the same time, consumer spending, business investment, and broad credit markets remain resilient. This explains why the equity market can continue rising even though economic and financial risks have not disappeared.",
      },
      {
        type: "heading",
        text: "Growth: Headline Weakness, Strong Private Demand",
      },
      {
        type: "paragraph",
        text: "Second-quarter real GDP grew at a 1.5% annualized rate, but real final sales to private domestic purchasers rose 3.9%. Consumer spending increased 3.2%, while nonresidential fixed investment rose 8.4%.",
      },
      {
        type: "paragraph",
        text: "This suggests that the weak GDP headline was partly driven by trade, inventories, and government components rather than a broad decline in private demand.",
      },
      {
        type: "quote",
        text: "Assessment: Positive but slowing headline growth, with strong underlying demand.",
      },
      {
        type: "heading",
        text: "Employment: Low Hiring, Low Layoffs",
      },
      {
        type: "paragraph",
        text: "Payroll growth has slowed, while the unemployment rate remains near 4.2%. The three-month average of payroll gains is still positive, and initial unemployment claims remain low.",
      },
      {
        type: "paragraph",
        text: "Companies are hiring cautiously, but they are not yet conducting broad layoffs.",
      },
      {
        type: "quote",
        text: "Assessment: Low hiring, low layoffs—a typical late-cycle condition.",
      },
      {
        type: "heading",
        text: "Inflation: Improving, but Still Elevated",
      },
      {
        type: "paragraph",
        text: "Core inflation momentum has moderated, but core PCE remains above the Federal Reserve’s 2% objective. Wage growth has also slowed, while long-term inflation expectations remain relatively stable.",
      },
      {
        type: "paragraph",
        text: "The main risk is that strong consumer spending and investment prevent inflation from returning smoothly to target.",
      },
      {
        type: "quote",
        text: "Assessment: Falling but still elevated, with continuing reflation risk.",
      },
      {
        type: "heading",
        text: "Financial Conditions: Restrictive",
      },
      {
        type: "paragraph",
        text: "The federal funds rate remains high, long-term real Treasury yields are elevated, and mortgage and refinancing costs continue to pressure housing and leveraged borrowers.",
      },
      {
        type: "paragraph",
        text: "Even though equity and corporate bond markets remain supportive, the real cost of capital is still restrictive.",
      },
      {
        type: "quote",
        text: "Assessment: Restrictive financial conditions.",
      },
      {
        type: "heading",
        text: "Credit: Stable Overall, but Tail-End Stress Is Building",
      },
      {
        type: "paragraph",
        text: "Broad high-yield credit spreads remain contained, suggesting that markets are not pricing an imminent recession or systemic crisis.",
      },
      {
        type: "paragraph",
        text: "However, stress is visible among:",
      },
      {
        type: "list",
        items: [
          "CCC-rated borrowers",
          "Lower-income consumers",
          "Credit-card and auto-loan borrowers",
          "Commercial real estate",
          "Some private-credit and small-business borrowers",
        ],
      },
      {
        type: "quote",
        text: "Assessment: Credit remains loose overall, but weaker borrowers are under growing pressure.",
      },
      {
        type: "heading",
        text: "Six-to-Twelve-Month Scenario Outlook",
      },
      {
        type: "table",
        headers: ["Six-to-Twelve-Month Path", "Probability"],
        rows: [
          [
            "Late-cycle soft landing, followed by a return to Goldilocks conditions",
            "45%",
          ],
          [
            "No landing or reflation, with interest rates remaining higher for longer",
            "35%",
          ],
          ["Hard landing or recession", "15%"],
          ["Credit crisis", "5%"],
        ],
      },
      {
        type: "paragraph",
        text: "The base case is a soft landing in which inflation continues to decline, employment remains stable, and the Federal Reserve eventually lowers rates gradually.",
      },
      {
        type: "paragraph",
        text: "However, the relatively high probability of a no-landing or reflation scenario reflects the continued strength of consumer spending and business investment. If demand remains too strong, rates may stay high for longer and valuation pressure could increase.",
      },
      {
        type: "heading",
        text: "Why the Market Can Continue Rising",
      },
      {
        type: "paragraph",
        text: "The equity market remains supported by:",
      },
      {
        type: "list",
        items: [
          "Resilient consumer demand",
          "Strong AI and equipment investment",
          "Stable broad credit spreads",
          "Limited layoffs",
          "Expectations of eventual monetary easing",
        ],
      },
      {
        type: "paragraph",
        text: "This environment can support further market gains, especially if corporate earnings remain strong.",
      },
      {
        type: "paragraph",
        text: "However, market strength does not mean that risk has disappeared. High valuations and tight credit spreads leave less room for disappointment if inflation reaccelerates, growth weakens, or credit stress spreads.",
      },
      {
        type: "heading",
        text: "What to Watch Next",
      },
      {
        type: "paragraph",
        text: "The most important indicators are:",
      },
      {
        type: "list",
        items: [
          "Whether private domestic demand remains above 3%",
          "Whether payroll growth approaches zero",
          "Whether initial claims rise above roughly 240,000",
          "Whether monthly core PCE returns to 0.3% or more",
          "Whether long-term real yields remain above 2%",
          "Whether high-yield spreads and household delinquencies begin rising more broadly",
          "Whether AI-related capital spending continues to generate sufficient cash returns",
        ],
      },
      {
        type: "heading",
        text: "Final Assessment",
      },
      {
        type: "paragraph",
        text: "The U.S. economy is still expanding and is not currently showing the broad contraction associated with recession.",
      },
      {
        type: "paragraph",
        text: "The most likely path remains a late-cycle soft landing followed by a return to Goldilocks conditions. However, strong private demand, persistent inflation, restrictive real rates, and growing stress among weaker borrowers make the outlook fragile.",
      },
    ],
  },
  {
    slug: "ai-cash-returns",
    title: "The Market Is Shifting From AI Revenue Growth to AI Cash Returns",
    topic: "AI & Hyperscalers",
    published: "2026-07-27",
    displayDate: "July 27, 2026",
    readingTime: 5,
    abstract: "My current view on the hyperscaler sector is bearish.",
    content: [
      {
        type: "paragraph",
        text: "This view is not based on the assumption that AI demand will disappear. Demand for cloud infrastructure, training and inference remains strong. My concern is that the market may be underestimating how capital intensive this growth has become and how difficult it may be for hyperscalers to convert AI revenue into sustainable free cash flow.",
      },
      {
        type: "paragraph",
        text: "Alphabet is the clearest recent example, but the same risks apply to Microsoft, Amazon, Meta, Oracle and other large AI infrastructure investors.",
      },
      {
        type: "paragraph",
        text: "During the first half of 2026, Alphabet generated approximately $84.9 billion of operating cash flow but spent $80.6 billion on capital expenditures. CapEx therefore consumed about 95% of operating cash flow, compared with roughly 62% one year earlier.",
      },
      {
        type: "paragraph",
        text: "Simplified free cash flow declined from approximately $24.3 billion to $4.3 billion, a decrease of about 82%. Free cash flow margin fell to approximately 1.9%.",
      },
      {
        type: "paragraph",
        text: "The full cost of the AI infrastructure buildout may also not yet be reflected in earnings. Alphabet reported $122.8 billion of property and equipment that had not yet entered service. Cash has already been spent, but depreciation generally begins only when those assets become operational.",
      },
      {
        type: "framework",
        items: [
          "Higher AI CapEx → Lower current free cash flow",
          "New infrastructure entering service → Higher depreciation and operating costs",
        ],
      },
      {
        type: "paragraph",
        text: "Google Cloud remains strong, with second-quarter revenue growth of approximately 82% and operating margin of around 35.6%. The concern is not that Cloud profitability has already weakened. The question is whether current growth and margins can be sustained once the full cost of newer AI infrastructure is recognized.",
      },
      {
        type: "heading",
        text: "Six Metrics I Am Watching",
      },
      {
        type: "table",
        headers: ["Metric", "Alphabet example", "Bearish signal"],
        rows: [
          [
            "CapEx / operating cash flow",
            "95%",
            "Remains near or above 100%",
          ],
          [
            "Free cash flow",
            "$4.3B, down 82%",
            "Cloud grows but FCF stays weak",
          ],
          [
            "FCF margin",
            "1.9%",
            "Cash conversion continues to decline",
          ],
          [
            "Assets not yet in service",
            "$122.8B",
            "Depreciation rises faster than Cloud profit",
          ],
          [
            "Net debt issuance / CapEx",
            "63%",
            "Borrowing rises while FCF remains weak",
          ],
          [
            "EBIT / interest expense",
            "44.4x",
            "Interest expense grows faster than EBIT",
          ],
        ],
      },
      {
        type: "paragraph",
        text: "The final test is incremental ROIC relative to WACC. AI investment creates value only when the additional operating profit and cash flow generated by new infrastructure exceed the company’s cost of capital.",
      },
      {
        type: "paragraph",
        text: "Alphabet is not facing a debt crisis. Its interest coverage remains strong and it retains substantial liquidity. However, the direction of change matters. Total debt more than doubled during the first half of 2026, net debt issuance reached approximately $51 billion and interest expense increased by more than 500%.",
      },
      {
        type: "paragraph",
        text: "The macro environment adds further pressure. Near-term Federal Reserve tightening expectations have risen, the 10-year Treasury yield is around 4.7%, and the 10-year real yield is around 2.4%.",
      },
      {
        type: "paragraph",
        text: "Higher rates affect hyperscalers in two ways:",
      },
      {
        type: "framework",
        items: [
          "Higher rates → Higher financing costs",
          "Higher WACC → Lower present value of long-duration AI cash flows",
        ],
      },
      {
        type: "paragraph",
        text: "Market risk indicators have also deteriorated. The VIX is around 19, bearish investor sentiment is above 40%, and index put volume has exceeded call volume. These conditions do not indicate a systemic crisis, but they suggest that investors are becoming less willing to tolerate uncertain returns, falling free cash flow and aggressive capital spending.",
      },
      {
        type: "heading",
        text: "Investment View",
      },
      {
        type: "paragraph",
        text: "My bearish view applies to the hyperscaler sector as a whole.",
      },
      {
        type: "paragraph",
        text: "The sector currently faces three pressures:",
      },
      {
        type: "framework",
        items: [
          "Higher rates → Higher WACC → Lower valuation multiples",
          "Higher AI CapEx → Lower near-term free cash flow",
          "Future infrastructure deployment → Higher depreciation and operating costs",
        ],
      },
      {
        type: "paragraph",
        text: "The central question is no longer whether AI demand is growing. It is whether hyperscalers can generate enough incremental operating profit and free cash flow to justify the scale and cost of their AI investment.",
      },
      {
        type: "paragraph",
        text: "Until operating cash flow begins to grow faster than CapEx and there is clearer evidence that incremental AI ROIC exceeds WACC, I believe the risk-reward profile for hyperscalers remains skewed to the downside.",
      },
    ],
  },
];

export function sortedInsights() {
  return [...insights].sort((a, b) =>
    b.published.localeCompare(a.published),
  );
}

export function insightBySlug(slug: string) {
  return insights.find((insight) => insight.slug === slug);
}
