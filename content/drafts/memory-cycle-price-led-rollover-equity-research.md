---
title: "Memory Cycle at an Inflection Point"
subtitle: "Price-Led Roll-Over Across Micron, SK hynix, and Samsung Signals Rising Earnings Risk"
author: "Scott Yuan"
date: "August 10, 2026"
subject: "Equity Research"
data_cutoff: "August 6, 2026"
status: "Published"
keywords:
  - memory semiconductors
  - Micron
  - SK hynix
  - Samsung Electronics
  - earnings revisions
  - semiconductor cycle
lang: en
---

# Executive Summary

Our proprietary Memory Cycle Tracker indicates that Micron, SK hynix, and Samsung Electronics have simultaneously entered **Stage 10 — Price-Led Roll-Over** as of August 6, 2026. The common configuration is unusual but important: three-month forward EBITDA revisions remain positive, yet revision momentum has decelerated sharply and all three stocks have posted negative three-month returns.

This is not yet a confirmed earnings downturn. Consensus estimates are still rising on a three-month basis, and Micron and Samsung remain at 100% of their respective 36-month forward EBITDA peaks. The signal is instead a **late-cycle warning**: equity prices have begun to question the durability of peak or near-peak earnings before consensus forecasts have turned down.

The cross-company reading supports a **Neutral to Cautious** sector view. Risk-reward is less attractive than it was during recovery and earnings-acceleration stages, even though current fundamentals remain strong. Low forward EV/EBITDA multiples should not be interpreted mechanically as cheap; in a cyclical industry, low multiples often occur when the EBITDA denominator is close to its peak.

Stage 10 is a branching point rather than a deterministic sell signal. Historical observations in the workbook include both genuine down-cycle transitions and temporary pauses followed by renewed recovery. The next one to three monthly observations will therefore matter more than the current earnings level. The key question is whether three-month revision acceleration turns positive again or whether positive revisions fade toward zero and eventually become cuts.

## Investment View

**Sector stance: Neutral to Cautious**

We would avoid adding aggressive pure-cycle exposure at the current stage. Existing holders should focus on revision momentum rather than headline earnings strength, and new capital should wait for one of two cleaner setups:

1. **Re-acceleration:** revisions remain positive, three-month acceleration turns positive, and stock returns recover.
2. **Post-downturn recovery:** estimates are cut, prices reset, and acceleration improves from a depressed base as the cycle moves toward trough formation or a price-led bottom.

Among the three companies, **SK hynix currently shows the most advanced deterioration**: its three-month stock return is -35.9%, its latest one-month EBITDA revision is negative, and forward EBITDA has fallen to 82% of its 36-month peak. Micron presents a more balanced signal because its three-month EBITDA revision remains exceptionally strong at +44.9%, but the associated three-month acceleration has dropped to -59.8 percentage points. Samsung offers greater business diversification, but its 0th-percentile forward multiple should not be treated as a standalone valuation floor while memory earnings remain near a peak.

This report does not assign formal company ratings or price targets. The tracker is designed to locate the industry within the earnings cycle and improve timing discipline around cyclical exposure.

# Key Takeaways

1. **All three companies are in Stage 10.** Positive three-month EBITDA revisions, negative three-month revision acceleration, and negative stock returns create a synchronized price-led roll-over signal.
2. **The market is moving before consensus.** Stocks are down between 9% and 36% over three months even though forward EBITDA revisions remain positive.
3. **The three companies are not equally exposed.** SK hynix is furthest from its 36-month EBITDA peak and has already recorded a negative one-month revision; Micron and Samsung remain at their forward EBITDA peaks.
4. **Low multiples are not automatically bullish.** Forward EV/EBITDA stands at 4.7x for Micron, 2.6x for SK hynix, and 2.2x for Samsung, but low multiples can reflect peak-cycle denominators rather than undervaluation.
5. **Stage 10 is a warning, not confirmation.** The downside case requires revisions to move toward or below zero; the bull case requires acceleration and price to turn positive again.

# Current Dashboard

The latest workbook readings are summarized below. Revision acceleration follows the three-month definition used by the cycle-classification engine and printed in the workbook's `Cycle Reason` field.

### Cycle Direction

| Company | 3M Stock Return | 3M EBITDA Revision | 3M Revision Acceleration | 36M EBITDA Peak Ratio | Stage |
|---|---:|---:|---:|---:|---|
| Micron | **-9.2%** | **+44.9%** | **-59.8ppt** | 100% | **Stage 10** |
| SK hynix | **-35.9%** | **+12.1%** | **-76.9ppt** | 82% | **Stage 10** |
| Samsung Electronics | **-27.3%** | **+19.7%** | **-81.1ppt** | 100% | **Stage 10** |

### Valuation and Cycle Position

| Company | NTM EV/EBITDA | Historical Multiple Percentile | 3M Multiple Change | Earnings–Price Gap | Cycle Heat |
|---|---:|---:|---:|---:|---:|
| Micron | 4.7x | 38th | -35.3% | +54.1ppt | 52% |
| SK hynix | 2.6x | 23rd | -41.9% | +48.1ppt | 38% |
| Samsung Electronics | 2.2x | 0th | -47.3% | +46.9ppt | 54% |

The positive Earnings–Price Gap shows that forward EBITDA revisions have outpaced stock performance. In isolation, that could indicate a dislocation. The stage engine reaches a more cautious conclusion because price is negative while the properly defined three-month revision acceleration is sharply negative. The signal label and cycle-stage label answer different questions: the first describes the current earnings-versus-price gap, while the second applies rule precedence to identify the broader cycle regime.

# Research Framework

## Why a Twelve-Stage Model

Memory is one of the most cyclical segments of the semiconductor industry. A conventional four-stage framework—recovery, expansion, peak, and downturn—often loses the sequencing that matters most for equity investors. Prices can bottom before earnings estimates recover, and they can roll over while estimates are still rising.

The Memory Cycle Tracker therefore divides the cycle into twelve economic stages, plus an insufficient-history state and a mixed-transition state:

| Stage | Name | Core Interpretation |
|---:|---|---|
| 1 | Downturn Acceleration | Earnings cuts continue well below peak |
| 2 | Deep Downturn / Capitulation | Deep earnings trough with weak price and high multiple percentile |
| 3 | Trough Formation | Estimates are still falling, but cuts are becoming less severe |
| 4 | Price-Led Bottom | Price turns positive before consensus earnings |
| 5 | Early Recovery | Forward earnings turn upward from a low base |
| 6 | Broad Recovery | Normal earnings and price recovery |
| 7 | Earnings Acceleration | Historically strong upgrades continue to accelerate |
| 8 | High-Cycle Expansion | Forward earnings are near peak and multiples appear low |
| 9 | Late-Cycle Deceleration | Earnings remain high, but upgrade momentum fades |
| 10 | Price-Led Roll-Over | Price turns negative before revisions turn negative |
| 11 | Earnings Peak / Roll-Over | Forward earnings begin to peak or decline |
| 12 | Downturn Confirmation | The down-cycle is confirmed while earnings remain elevated |

The framework is designed around the sequence:

> **Earnings direction → revision momentum → leading price signal → cycle height → valuation confirmation**

## Core Variables

### Three-Month EBITDA Revision

$$
Revision_{3M,t}=\frac{NTM\ EBITDA_t}{NTM\ EBITDA_{t-3}}-1
$$

This is the primary direction-of-fundamentals variable. A positive reading indicates that consensus forward EBITDA has increased over the last three months; a negative reading indicates cuts.

### Three-Month Revision Acceleration

$$
Acceleration_{3M,t}=Revision_{3M,t}-Revision_{3M,t-3}
$$

Acceleration measures whether the pace of upgrades or cuts is improving. This variable is more useful near inflection points than the level of EBITDA itself. A company can have strong positive revisions and still show deeply negative acceleration if the upgrade cycle is losing momentum.

### Three-Month Stock Return

$$
StockReturn_{3M,t}=\frac{1+CumulativeReturn_t}{1+CumulativeReturn_{t-3}}-1
$$

Equity prices often lead consensus earnings. A negative stock return alongside positive revisions is the defining price-led warning in Stage 10.

### Thirty-Six-Month EBITDA Peak Ratio

$$
PeakRatio_{36M,t}=\frac{NTM\ EBITDA_t}{\max(NTM\ EBITDA\ over\ prior\ 36M)}
$$

The peak ratio locates forward earnings within the recent cycle. A ratio above 90% indicates high or near-peak earnings; a ratio below 70% is more consistent with an early recovery or deeper downturn.

### Historical EV/EBITDA Percentile

Each company's current forward multiple is compared with its own January 2018–December 2023 historical distribution. This company-specific benchmark avoids applying the same absolute multiple threshold to businesses with different structures.

For cyclical stocks, interpretation is counterintuitive. A low multiple percentile may indicate that forward EBITDA is unusually high, not that the equity is unusually cheap. As earnings estimates fall, the multiple can rise even if the stock price declines.

### Earnings–Price Gap

$$
Gap_t=Revision_{3M,t}-StockReturn_{3M,t}
$$

A positive gap means earnings revisions are running ahead of price; a negative gap means price is running ahead of revisions. The gap identifies the source of divergence but cannot by itself determine whether a positive gap is an opportunity or an early warning.

### Cycle Heat Score

$$
Heat=35\%\ RevisionPercentile+25\%\ AccelerationPercentile+20\%\ ValuationHeat+20\%\ StockPercentile
$$

Cycle Heat compresses several indicators into a 0–100 score. It is a summary rather than a stage classifier. A moderate heat score can coexist with late-cycle risk when price and acceleration have already weakened.

# Why the Current Reading Is Stage 10

Stage 10 requires three conditions:

$$
Revision_{3M}>0,\quad Acceleration_{3M}<0,\quad StockReturn_{3M}<0
$$

All three companies satisfy this rule. Consensus has not yet moved into a cutting cycle, but the rate of improvement has fallen sharply and equity prices have already turned lower.

The synchronization matters. A single company's negative return could reflect company-specific execution, product mix, capital allocation, or valuation. Three companies spanning U.S. and Korean markets showing the same stage increases the probability that the signal is industry-wide.

The signal is nevertheless not sufficient to declare an earnings peak. The current state should be described as **late cycle with a price-led warning**, not a confirmed downturn.

# Company-Level Readings

## Micron: Strong Revisions, Sharp Deceleration

Micron's three-month EBITDA revision remains the strongest of the group at **+44.9%**, and forward EBITDA is still at its 36-month peak. Those readings show that current earnings expectations remain exceptionally strong.

The warning comes from the change in momentum. Three-month revision acceleration has fallen to **-59.8 percentage points**, while the stock has declined **9.2%** over three months. The stock decline is modest compared with the two Korean companies, but the combination suggests that investors are no longer willing to capitalize current upgrades at the same rate.

Micron's 4.7x NTM EV/EBITDA multiple is at the 38th historical percentile—less extreme than SK hynix or Samsung. The stock therefore offers the cleanest test of the core thesis: if acceleration recovers while the price stabilizes, Stage 10 may prove temporary. If revisions fade toward zero, the current price weakness will look increasingly prescient.

## SK hynix: The Most Advanced Deterioration

SK hynix carries the highest near-term cycle risk in the tracker. Its three-month stock return is **-35.9%**, revision acceleration is **-76.9 percentage points**, and the latest one-month EBITDA revision has turned negative. Its 36-month peak ratio has fallen to **82%**, compared with 100% for Micron and Samsung.

The three-month EBITDA revision remains positive at **+12.1%**, so Stage 11 has not yet been confirmed. However, SK hynix is closer than the other two companies to a forward-earnings roll-over. A continued negative one-month revision would pull the three-month measure toward zero and could move the company into an earnings-peak or downturn-confirmation stage.

The 2.6x NTM EV/EBITDA multiple sits at the 23rd historical percentile. That apparent cheapness should be treated cautiously because forward EBITDA is already below its recent peak. If the denominator continues to fall, the multiple can rise without providing equity support.

## Samsung Electronics: Diversification Helps, but Memory Still Matters

Samsung's three-month EBITDA revision is **+19.7%**, forward EBITDA remains at its 36-month peak, and its latest one-month revision is positive. On fundamentals alone, the company has not reached an earnings roll-over.

At the same time, the stock has fallen **27.3%** over three months and three-month revision acceleration has dropped to **-81.1 percentage points**, the weakest momentum reading of the group. Its 2.2x forward multiple is at the 0th percentile of the 2018–2023 benchmark.

Samsung's diversified business mix gives it lower pure memory beta and potentially greater defensive value than Micron or SK hynix. That diversification also makes EBITDA a less precise memory-cycle proxy. The current multiple should therefore be interpreted with both cycle and conglomerate effects in mind.

# Historical Stage 10 Outcomes

Historical observations confirm that Stage 10 is a warning state, not a guaranteed path.

## Down-Cycle Precedents

* **Micron, August 2018:** the tracker moved from Stage 10 to Stage 11 within three months, consistent with a forward-earnings peak.
* **SK hynix, September 2018:** the tracker moved to Stage 12 within three months.
* **SK hynix, June 2022:** Stage 10 was followed by Stage 1 within three months and Stage 2 within six months, a clear downturn and capitulation sequence.

These episodes support the model's intended use: price can roll over before consensus estimates formally decline.

## Recovery and False-Start Precedents

* **Micron, August 2020:** Stage 10 was followed by Stage 5 at both three and six months.
* **Micron, the June–August 2021 episode:** the tracker moved through a mixed state and returned to Stage 6 within six months.
* **Samsung, the August–October 2021 episode:** the tracker returned to Stage 6 within three months and Stage 8 within six months.

These counterexamples show why Stage 10 should not be used as a mechanical sell rule. Positive revisions can re-accelerate, and an apparent roll-over can prove to be a mid-cycle correction.

## What Is Different Today

The current signal is broader than most single-company historical episodes because all three companies entered Stage 10 at the same data cut. The magnitude of negative acceleration is also severe across the group. This synchronized deterioration raises the weight of the downside case, but the historical sample contains only a limited number of cycles and many monthly observations belong to the same episode. Statistical confidence should therefore remain modest.

# Scenario Analysis

## Base Case: Stage 10 Moves Toward Earnings Peak

The base case is that forward EBITDA upgrades continue to slow over the next one to three months, leading at least some companies from Stage 10 toward Stage 11 or Stage 12.

Confirmation would include:

* three-month EBITDA revisions falling toward or below zero;
* three-month acceleration remaining negative;
* stock returns staying negative;
* peak ratios declining, particularly for Micron and Samsung;
* forward EV/EBITDA multiples beginning to rise as EBITDA estimates fall.

This path would reduce the value of current low multiples and shift the investment question from peak earnings to the depth and duration of the next estimate-cutting cycle.

## Bull Case: Re-Acceleration Restores Stage 7 or 8

Stage 10 may prove to be a mid-cycle pause if AI infrastructure, HBM demand, conventional DRAM pricing, and disciplined supply support renewed earnings upgrades.

The bull case requires:

* three-month revisions remaining positive;
* three-month acceleration turning positive;
* stock returns recovering before estimates deteriorate;
* peak ratios stabilizing or returning toward 100%;
* the industry moving back toward Stage 7 or Stage 8.

Micron and SK hynix would likely offer the greatest upside beta in this scenario because their earnings are more directly exposed to the memory cycle.

## Bear Case: Rapid Down-Cycle Confirmation

The bear case is a faster move from price weakness to broad estimate cuts. Warning signs would include negative revisions, continued price declines, falling peak ratios, and rising forward multiples caused by a contracting EBITDA denominator.

SK hynix would be the most likely first confirmation under the current data because its one-month revision is already negative and its peak ratio has fallen below 90%.

# Portfolio Implications

## Avoid Mechanical “Low Multiple” Arguments

At high points in a memory cycle, the EBITDA denominator can make forward valuation appear unusually low. A 2–5x forward multiple is not necessarily a margin of safety if the earnings estimate is at risk of falling materially.

The relevant question is not simply whether the current multiple is below history. It is whether forward EBITDA revisions are still accelerating enough to sustain that denominator.

## Existing Holders

Existing holders should distinguish between price recovery and fundamental re-acceleration. A stock rebound without improvement in three-month revision acceleration would be less convincing and may offer an opportunity to manage exposure. A rebound accompanied by positive acceleration would provide stronger evidence that Stage 10 was temporary.

## New Capital

New capital should wait for confirmation rather than trying to identify the exact top or bottom. The two more attractive entry conditions are:

1. **Re-acceleration:** positive revisions, positive acceleration, and positive stock returns.
2. **Trough setup:** negative revisions after a price reset, followed by improving acceleration and price stabilization.

## Relative Positioning

* **Samsung Electronics:** potentially more defensive because of business diversification, but with lower pure memory upside.
* **Micron:** the most balanced current reading; strong revisions provide support, but deceleration requires monitoring.
* **SK hynix:** the highest current cycle risk, but also substantial upside sensitivity if revisions re-accelerate.

# Monitoring Framework

The next one to three monthly updates should focus on five variables:

1. **Three-month EBITDA Revision:** Does it remain positive or move toward zero?
2. **Three-month Revision Acceleration:** Does it recover from deeply negative readings?
3. **Three-month Stock Return:** Does price stabilize before estimates decline?
4. **Thirty-six-month Peak Ratio:** Does forward EBITDA remain near peak?
5. **Forward Multiple Direction:** Does EV/EBITDA rise because the earnings denominator is falling?

The most constructive near-term combination would be positive revisions, improving acceleration, and positive stock performance. The most bearish combination would be negative revisions, negative acceleration, negative price performance, and a rising multiple.

# Risks to the View

## Upside Risks

* HBM and AI-related demand could remain stronger for longer.
* Supply discipline could support pricing even as demand growth normalizes.
* Consensus estimates could re-accelerate following company guidance or contract-price increases.
* Equity prices could be reacting to temporary positioning or macro factors rather than an industry earnings peak.

## Downside Risks

* Consensus estimates may lag real-time pricing and inventory conditions.
* A synchronized price decline across all three companies may be signaling a sharper earnings reversal than current estimates imply.
* Low multiples may provide little support if forward EBITDA is cut rapidly.
* Company-specific capital spending or supply decisions could deepen the next memory down-cycle.

# Methodology and Data Limitations

The workbook uses monthly stock performance, NTM EV/EBITDA, and NTM EBITDA consensus data for Micron, SK hynix, and Samsung Electronics beginning in January 2018. Each company is standardized against its own January 2018–December 2023 historical distribution; the 2024–2026 cycle is evaluated against that prior-cycle benchmark.

Stock performance comes from a Koyfin export. Historical EV/EBITDA and NTM EBITDA series are approximate monthly values digitized from Koyfin charts. The framework is therefore intended for cycle and trend analysis rather than exact point-in-time valuation or trading triggers. This report emphasizes changes, percentiles, and stage relationships rather than absolute EBITDA values.

The workbook contains both a one-month change in the three-month revision measure and the rule-defined three-month acceleration measure. Where the dashboard display and cycle reason differ, this report follows the **three-month acceleration definition in the Cycle Rules and the value printed by the stage engine in Cycle Reason**.

The historical sample covers only a small number of full memory cycles. Consecutive monthly Stage 10 readings are not independent observations, so historical analogs should be treated as case studies rather than statistically robust probabilities.

# Conclusion

The Memory Cycle Tracker places Micron, SK hynix, and Samsung Electronics in **Stage 10 — Price-Led Roll-Over**. Earnings expectations are still rising, but the pace of improvement has slowed sharply and prices have already turned lower.

The industry has moved beyond ordinary high-cycle expansion and into a late-cycle decision point. The evidence does not yet confirm that forward earnings have peaked, but it does show that the market is demanding proof that peak-cycle profitability can persist.

The most important question is no longer whether current earnings are strong. It is whether the collapse in revision acceleration is temporary or the first step toward a formal estimate-cutting cycle.

Until that question is resolved, the appropriate stance is **Neutral to Cautious**: avoid chasing low headline multiples, manage existing cyclical exposure, and wait for either genuine re-acceleration or a more complete downturn-and-trough setup.

---

*Source: Scott Yuan Memory Cycle Tracker, data through August 6, 2026. This research is for informational and educational purposes only and does not constitute investment advice.*
