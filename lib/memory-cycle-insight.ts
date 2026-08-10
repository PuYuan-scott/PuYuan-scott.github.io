import type { InsightArticle } from "@/lib/insights";

export const memoryCycleInsight: InsightArticle = {
  slug: "memory-stocks-stage-10-price-led-rollover",
  title: "Memory Stocks Are Falling Before Earnings Estimates",
  topic: "Memory Semiconductors",
  published: "2026-08-10",
  displayDate: "August 10, 2026",
  readingTime: 5,
  language: "en",
  fullReport: "/reports/memory_cycle_at_an_inflection_point.pdf",
  abstract:
    "Micron, SK hynix, and Samsung have entered Stage 10—Price-Led Roll-Over. Forward EBITDA estimates are still rising, but revision momentum has weakened sharply and stock prices have already turned lower.",
  content: [
    {
      type: "heading",
      text: "The Signal",
    },
    {
      type: "paragraph",
      text: "The most important signal in the memory sector is no longer the level of earnings. It is the widening gap between still-rising forward EBITDA estimates and falling stock prices.",
    },
    {
      type: "paragraph",
      text: "My Memory Cycle Tracker places Micron, SK hynix, and Samsung Electronics in Stage 10—Price-Led Roll-Over—as of August 6, 2026.",
    },
    {
      type: "quote",
      text: "Forward EBITDA revisions remain positive, revision momentum has turned negative, and the stock price has already declined.",
    },
    {
      type: "paragraph",
      text: "This does not mean that the earnings cycle has definitely peaked. It means the market has started questioning the durability of current earnings before analysts have formally cut their forecasts.",
    },
    {
      type: "heading",
      text: "The Current Reading",
    },
    {
      type: "table",
      headers: [
        "Company",
        "3M Stock Return",
        "3M EBITDA Revision",
        "3M Revision Acceleration",
        "36M Peak Ratio",
        "Stage",
      ],
      rows: [
        ["Micron", "-9.2%", "+44.9%", "-59.8ppt", "100%", "Stage 10"],
        ["SK hynix", "-35.9%", "+12.1%", "-76.9ppt", "82%", "Stage 10"],
        [
          "Samsung Electronics",
          "-27.3%",
          "+19.7%",
          "-81.1ppt",
          "100%",
          "Stage 10",
        ],
      ],
    },
    {
      type: "paragraph",
      text: "Consensus EBITDA is still moving higher over three months, but the rate of improvement has fallen sharply. At the same time, all three stocks have turned negative.",
    },
    {
      type: "paragraph",
      text: "Price may be wrong, creating a temporary dislocation. But in cyclical industries, price often moves before consensus earnings. That makes the signal difficult to ignore.",
    },
    {
      type: "heading",
      text: "The Three Companies Are Not in the Same Position",
    },
    {
      type: "paragraph",
      text: "Micron still has the strongest revision profile. Its three-month EBITDA revision is +44.9%, and forward EBITDA remains at a 36-month high. The warning is almost entirely about deceleration: revision acceleration has fallen to -59.8 percentage points while the stock has started to decline.",
    },
    {
      type: "paragraph",
      text: "SK hynix shows the most advanced deterioration. Its stock is down 35.9% over three months, its latest one-month EBITDA revision has turned negative, and forward EBITDA has fallen to 82% of its 36-month peak. It is the closest of the three companies to a formal earnings roll-over.",
    },
    {
      type: "paragraph",
      text: "Samsung Electronics remains at its forward EBITDA peak and still has positive revisions, but its stock has fallen 27.3% and three-month acceleration has dropped to -81.1 percentage points. Its diversified business mix may provide some defense, though it also makes EBITDA a less precise pure-memory signal.",
    },
    {
      type: "heading",
      text: "Why Low Multiples Can Be Misleading",
    },
    {
      type: "paragraph",
      text: "Micron, SK hynix, and Samsung trade at approximately 4.7x, 2.6x, and 2.2x NTM EV/EBITDA in the tracker. Those multiples look inexpensive, but low forward multiples often appear when the EBITDA denominator is close to a cyclical peak.",
    },
    {
      type: "paragraph",
      text: "If forward EBITDA falls, the multiple can rise even while the stock price declines. The relevant question is not simply whether the multiple is low, but whether earnings revisions are still accelerating enough to sustain the denominator.",
    },
    {
      type: "quote",
      text: "Right now, revisions remain positive—but acceleration does not.",
    },
    {
      type: "heading",
      text: "Stage 10 Is a Fork, Not a Final Verdict",
    },
    {
      type: "framework",
      items: [
        "Bearish path: Stage 10 → Earnings Peak → Downturn Confirmation",
        "Bullish path: Stage 10 → Transition → Recovery or Earnings Acceleration",
      ],
    },
    {
      type: "paragraph",
      text: "Micron in 2018 and SK hynix in 2018 and 2022 followed versions of the bearish sequence. Price weakness correctly anticipated later earnings deterioration.",
    },
    {
      type: "paragraph",
      text: "Micron in 2020 and several 2021 episodes show the other path: a price-led roll-over can be a temporary mid-cycle correction. Stage 10 should therefore be treated as a warning that requires confirmation, not as an automatic sell signal.",
    },
    {
      type: "heading",
      text: "What I Am Watching Next",
    },
    {
      type: "list",
      items: [
        "Whether three-month EBITDA revisions remain positive or move toward zero.",
        "Whether three-month revision acceleration recovers from deeply negative levels.",
        "Whether stock prices stabilize before consensus estimates turn down.",
        "Whether forward multiples begin rising because the EBITDA denominator is falling.",
      ],
    },
    {
      type: "paragraph",
      text: "The strongest bull signal would be positive revisions, positive acceleration, and positive stock returns. The clearest bear signal would be revisions turning negative while acceleration and stock returns remain negative.",
    },
    {
      type: "heading",
      text: "Final View",
    },
    {
      type: "paragraph",
      text: "The memory sector is no longer in a clean high-cycle expansion. It has entered a late-cycle phase in which price has begun to roll over before earnings estimates.",
    },
    {
      type: "quote",
      text: "My current stance is Neutral to Cautious.",
    },
    {
      type: "paragraph",
      text: "I would not aggressively chase pure memory-cycle exposure simply because forward multiples look low. Existing holders should focus on revision momentum, while new capital should wait for either genuine re-acceleration or a deeper reset followed by trough formation.",
    },
    {
      type: "paragraph",
      text: "The central question is not whether earnings are still strong today. They are. The question is whether the collapse in revision acceleration is a temporary pause—or the first signal that the memory earnings peak is approaching.",
    },
    {
      type: "heading",
      text: "Methodology Note",
    },
    {
      type: "paragraph",
      text: "Source: Scott Yuan Memory Cycle Tracker, data through August 6, 2026. Historical EV/EBITDA and NTM EBITDA series are approximate monthly values digitized from Koyfin charts and are intended for cycle analysis rather than precise trading signals.",
    },
  ],
};
