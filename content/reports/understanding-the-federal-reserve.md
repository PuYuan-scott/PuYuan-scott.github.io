---
title: "Understanding the Federal Reserve"
subtitle: "From Bank Reserves to Interest Rates, Liquidity, and Asset Pricing"
author: "Scott Yuan"
date: "August 29, 2026"
subject: "Economic Analysis"
lang: en-US
---

# Executive Overview {.unnumbered}

The Federal Reserve is often described simply as the institution that decides whether U.S. interest rates rise or fall. That description is not wrong, but it captures only the most visible layer of the modern monetary system. A deeper understanding requires answers to more fundamental questions. Where do reserves in the banking system come from? Why can commercial banks create deposits but not reserves? How does a change in one overnight interest rate ultimately affect mortgages, corporate financing, Treasury yields, and equity valuations? How do quantitative easing, quantitative tightening, the Treasury General Account, and Treasury issuance jointly alter financial-system liquidity?

These questions may appear to belong to different fields, but they fit within a single framework. The Federal Reserve first changes the price and quantity conditions of funding through the policy rate and its balance sheet. Those changes pass through bank reserves, money markets, and the Treasury market into broader financial conditions. Financial conditions then affect household consumption, housing demand, corporate capital expenditure, and employment. Changes in growth, labor, and inflation ultimately feed back into the Federal Reserve's next policy decision.

The complete system can be summarized as follows:

> **Economic Data — Fed Reaction Function — Policy Rate & Balance Sheet — Reserves & Money Markets — Treasury Yields — Financial Conditions — Consumption, Investment & Employment — Growth & Inflation — Fed**

\newpage

# What the Federal Reserve Is

The Federal Reserve System is the central banking system of the United States, but it is not a bank in the conventional commercial sense. Its core institutional structure consists of the Board of Governors, the twelve regional Federal Reserve Banks, and the Federal Open Market Committee, or FOMC.

The Board of Governors in Washington, D.C. is the center of policy and supervision. The twelve regional Reserve Banks provide payment and settlement services, banking services, regional economic intelligence, and operational support for monetary policy. The Federal Reserve Bank of New York has a particularly important market role: many open-market operations, repo facilities, and Treasury-market transactions are implemented through the New York Fed.

The FOMC determines the direction of U.S. monetary policy. The federal funds target range, rate increases and cuts, quantitative easing, and quantitative tightening all ultimately center on decisions made by the Committee.

The Federal Reserve must also be distinguished from the U.S. Treasury. Treasury administers taxes, government spending, and debt issuance as part of the fiscal system. The Fed is responsible for monetary policy, bank reserves, and the financial system's liquidity environment. The two institutions interact extensively through the Treasury General Account, Treasury issuance, and the payments system, but their institutional responsibilities are fundamentally different.

\begin{researchfigure}
\includegraphics[width=0.88\textwidth]{public/figures/federal-reserve-system-figure-1.png}
\end{researchfigure}

# The Federal Reserve's Balance Sheet

One of the most important starting points for understanding the modern Federal Reserve is its balance sheet. Like any financial institution, the Fed satisfies the basic accounting identity:

> **Assets = Liabilities + Capital**

The asset side primarily includes Treasury securities, agency mortgage-backed securities, and, during periods of stress, loans or repo assets extended to financial institutions. The liability side mainly includes bank reserves, currency in circulation, the Treasury General Account, and overnight reverse repurchase agreements.

Bank reserves are the central concept. Suppose JPMorgan holds $100 billion of reserve balances at the Fed. For JPMorgan, those reserves are an asset. From the Fed's perspective, however, the same $100 billion is a liability.

The structure mirrors an ordinary bank deposit. A customer's $10,000 deposit at JPMorgan is an asset to the customer but a liability to JPMorgan. JPMorgan's reserve balance at the Fed is an asset to JPMorgan but a liability to the Federal Reserve.

This produces one of the most important principles in the monetary system:

> **The Fed creates reserves; banks hold reserves.**

Individual commercial banks can change their reserve holdings through payments, asset transactions, or interbank funding. The commercial banking system as a whole, however, cannot independently create additional Federal Reserve balances.

# Reserves, Deposits, and Currency

Reserves, deposits, and currency are among the most easily confused—and most important—concepts in modern banking.

Reserves are central-bank money held by commercial banks, primarily for interbank payments, settlement, and liquidity management. Deposits are balances held by households and businesses at commercial banks and are liabilities of those banks. Currency is the physical form of central-bank money.

Reserves and currency are therefore both central-bank money, while deposits are commercial-bank money.

The distinction becomes clearest during payments. If one JPMorgan customer transfers $100 to another JPMorgan customer, the bank can reduce one deposit balance and increase the other internally. JPMorgan's total reserve balance does not need to change.

If a JPMorgan customer transfers $100 to a Bank of America customer, the process is different. JPMorgan reduces the sender's deposit and transfers reserves to Bank of America through the Fed's settlement system. Bank of America receives the reserves and increases the recipient's deposit.

Deposits are therefore the money used by households and businesses, while reserves are the banking system's final settlement asset.

Bank lending follows from the same structure. When a bank approves a $100,000 loan, it simultaneously creates a loan asset and a deposit liability. This is why modern banking is often summarized as:

> **Loans create deposits.**

Commercial banks cannot, however, create central-bank reserves. If a newly created deposit is transferred to another bank, the originating bank must ultimately settle the payment with reserves.

\begin{researchfigure}
\includegraphics[width=0.88\textwidth]{public/figures/federal-reserve-system-figure-2.png}
\end{researchfigure}

# How the Fed Controls Short-Term Interest Rates

The modern Federal Reserve does not simply order market participants to transact at one particular interest rate. The FOMC first establishes the federal funds target range, while the effective federal funds rate, or EFFR, is the overnight rate that actually emerges in the market.

To keep the EFFR near its target range, the Fed primarily relies on interest on reserve balances, or IORB, and the overnight reverse repurchase facility, or ON RRP.

IORB is the interest paid by the Fed on reserve balances held by eligible institutions. If a bank can earn 4.4% by leaving funds safely at the Fed, it will generally be unwilling to lend equivalent funds to another institution at 3%. IORB therefore establishes a critical opportunity-cost benchmark for bank funding.

ON RRP plays a similar role for money market funds and other institutions that generally cannot earn IORB directly. It provides a safe overnight investment alternative and helps stabilize short-term rates across the broader money market.

The United States now operates under an ample-reserves regime. The Fed no longer controls rates mainly by creating reserve scarcity. Instead, it assigns administered rates to central-bank liabilities and allows market arbitrage to keep overnight rates near the policy range.

# Quantitative Easing and Quantitative Tightening

Quantitative easing is the large-scale purchase of Treasury securities and agency mortgage-backed securities by the Federal Reserve.

If the Fed purchases $100 billion of Treasuries, it adds $100 billion of securities to its assets and creates $100 billion of new reserves on the liability side. The Fed does not need to obtain those funds from another account first because reserves are liabilities that the central bank itself can create.

> **QE = An Increase in Fed Assets + An Increase in Bank Reserves**

It is inaccurate, however, to describe QE simply as the Fed giving banks money that banks then lend. Its more important effect is to change the composition of assets held by the private sector.

When the Fed purchases large amounts of long-duration Treasuries, the quantity of duration risk that private investors must hold declines. Treasury demand rises, placing downward pressure on bond yields and the term premium. Investors who sell Treasuries and receive deposits may then rebalance toward corporate bonds, equities, mortgage-backed securities, or other risk assets.

The central transmission mechanisms of QE are therefore duration removal, portfolio rebalancing, and easier financial conditions—not merely a larger quantity of reserves.

Quantitative tightening reverses the process. The Fed typically allows some maturing Treasury and MBS holdings to run off without full reinvestment, gradually shrinking its assets. Some Fed liability must decline at the same time.

When ON RRP balances remain large, early-stage QT may primarily reduce ON RRP while bank reserves remain relatively stable. After that buffer is depleted, continued QT is more likely to reduce bank reserves directly.

\begin{researchfigure}
\includegraphics[width=0.88\textwidth]{public/figures/federal-reserve-system-figure-3.png}
\end{researchfigure}

# Treasury, the TGA, and System Liquidity

The Treasury General Account is the U.S. Treasury's cash account at the Federal Reserve—the government's central-bank checking account.

When households or businesses pay taxes, private deposits decline, commercial-bank reserves decline correspondingly, and the TGA rises. Funds move from the private banking system to the government's account:

> **A Rising TGA generally corresponds to Falling Private Liquidity.**

Government spending works in the opposite direction. When Treasury pays a household or business from the TGA, the TGA declines, the recipient's bank receives reserves, and the recipient receives a deposit:

> **A Falling TGA generally corresponds to Rising Private Liquidity.**

The effects of Treasury issuance are more complex. New debt issuance increases the TGA, but whether it reduces bank reserves or ON RRP depends on the funding source.

If households or businesses purchase Treasuries using bank deposits, reserves generally decline. If a money market fund withdraws funds from ON RRP to purchase Treasury bills, ON RRP may absorb more of the adjustment and bank reserves may change much less.

Assessing whether Treasury issuance is truly draining liquidity therefore requires more than observing gross issuance. The source of funding and Treasury's subsequent use of the TGA balance are equally important.

\begin{researchfigure}
\includegraphics[width=0.88\textwidth]{public/figures/federal-reserve-system-figure-4.png}
\end{researchfigure}

# Repo, SOFR, and the Money Market

Economically, a repurchase agreement is collateralized short-term financing. A financial institution obtains short-term cash against Treasury collateral, while the cash provider receives the Treasury as security.

Treasuries are especially important because they combine minimal credit risk, enormous market depth, transparent pricing, and high liquidity. They are not only investment assets; they are among the global financial system's most important forms of collateral.

The Secured Overnight Financing Rate, or SOFR, is a major overnight benchmark based on the Treasury-backed repo market. By contrast, the EFFR is associated with the largely unsecured federal funds market.

The repo market connects money market funds, banks, securities dealers, hedge funds, and the Treasury market. A severe shortage of cash in repo can therefore spread rapidly through the wider financial system.

The repo-market dislocation of 2019 illustrates the mechanism. QT had already reduced bank reserves, corporate tax payments moved balances into the TGA, and heavy Treasury settlement increased dealers' short-term financing needs. Cash supply and funding demand abruptly diverged, repo rates surged, and the Fed ultimately had to restore liquidity to the market.

# How Monetary Policy Reaches the Real Economy

The Fed cannot directly reduce CPI inflation from 4% to 2%. Monetary policy must transmit gradually through the financial system.

When the Fed raises the policy rate, the EFFR and SOFR rise first. Markets then increase their expectations for future short-term rates, changing the Treasury yield curve. Higher Treasury yields push up mortgage rates, corporate bond yields, and business borrowing costs.

More expensive financing weighs on housing demand, durable-goods consumption, and corporate capital expenditure. As investment and consumption slow, demand for labor may weaken, hiring may decline, and wage growth may gradually moderate.

Cooling aggregate demand ultimately reduces corporate pricing power and helps inflation fall.

Monetary policy also operates through credit, wealth, and exchange-rate channels. Banks may tighten lending standards. Falling equity and real-estate prices can weaken household willingness to spend. A stronger dollar can reduce imported inflation.

The defining feature of the process is the lag. It can take months or longer for monetary policy to affect the real economy fully. The Fed is therefore always using current and historical data to make decisions about future economic conditions.

\begin{researchfigure}
\includegraphics[width=0.88\textwidth]{public/figures/federal-reserve-system-figure-5.png}
\end{researchfigure}

# The Data the Fed Watches

The Fed's macroeconomic assessment can be organized into four broad categories: inflation, labor, growth, and financial conditions.

For inflation, core PCE and core CPI are among the most important measures, but year-over-year inflation alone is insufficient. Three- and six-month annualized inflation rates respond more quickly to current momentum. Services inflation, shelter, and wage-sensitive components help reveal whether inflation is becoming persistent.

The labor market should be assessed through payrolls, the unemployment rate, initial claims, JOLTS, quits, and wage growth. The Fed's ideal outcome is generally not an abrupt employment collapse, but an orderly normalization from an overheated labor market.

Growth can be evaluated through GDP, retail sales, ISM Manufacturing, ISM Services, and housing data to determine whether aggregate demand remains excessive or is slowing.

For financial markets, the absolute data point is often less important than the surprise relative to expectations:

> **Actual − Consensus**

If CPI exceeds consensus, markets may reduce the number of expected future rate cuts even when the absolute inflation rate is not extreme. The two-year Treasury yield may then rise as the expected policy path is repriced.

# The Yield Curve and Market Expectations

The Treasury yield curve is the bridge between Federal Reserve policy and asset prices.

The two-year Treasury yield is highly sensitive to the expected Fed policy path over the next one to two years. It can therefore be treated as an approximation of market pricing for medium-term monetary policy.

The ten-year Treasury yield is more complex. It incorporates the expected average of future short-term rates and a term premium, while also responding to growth, inflation expectations, Treasury supply, and the fiscal outlook.

> **2Y Yield ≈ Expected Fed Path**

> **10Y Yield ≈ Expected Future Short Rates + Term Premium**

When the two-year yield exceeds the ten-year yield, the curve is inverted. The market is effectively indicating that the current policy rate is unusually high and may not be sustainable, because slower future growth could force the Fed to cut rates.

Real yields are particularly important for equity valuation. Growth companies derive much of their value from cash flows expected far into the future. A higher real yield increases the discount rate and lowers the present value of those distant cash flows.

When the ten-year yield rises, the analysis should not stop at the statement that rates increased. The critical questions are whether real yields rose, breakeven inflation rose, or the term premium rose. Each explanation has a different macroeconomic meaning.

# Banking Crises and the Lender of Last Resort

Banking stress must first be separated into liquidity and solvency.

Liquidity asks whether a bank has enough cash and reserves to meet payments today. Solvency asks whether the true value of the bank's assets is sufficient to cover all liabilities.

A bank may hold substantial loans, Treasuries, and MBS yet face a reserve shortage if customers suddenly withdraw deposits. That is initially a liquidity problem.

A bank run can quickly turn a liquidity problem into a capital problem. Deposit outflows create reserve outflows, potentially forcing the bank to sell long-duration assets. If higher interest rates have already produced large unrealized losses on those assets, forced sales convert the losses into realized losses and directly reduce bank capital.

Silicon Valley Bank is a clear example. SVB accumulated long-duration Treasuries and MBS during the low-rate period. Its deposits were highly concentrated among technology and venture-capital clients, and a large share exceeded FDIC insurance limits. Rapid Fed tightening reduced bond prices, while deposit outflows forced the bank to confront those asset losses.

The mechanism can be summarized as:

> **Duration Risk + Concentrated Uninsured Deposits — Liquidity Stress — Forced Asset Sales — Capital Loss — Confidence Crisis**

As lender of last resort, the Fed can provide reserves through tools such as the discount window and alleviate short-term liquidity stress. If the true value of a bank's assets is already below its liabilities, however, additional liquidity alone cannot permanently resolve insolvency.

# How to Read an FOMC Meeting

Whether an FOMC meeting is hawkish or dovish cannot be determined only by whether the Fed raises, cuts, or holds rates.

The key comparison is:

> **Actual Policy Relative to Market Expectations**

A complete FOMC assessment should examine the rate decision, statement, Summary of Economic Projections, dot plot, Chair Powell's press conference, and the minutes published later.

The most useful aspect of the statement is not any isolated sentence, but what changed relative to the previous statement. Is the Fed placing greater emphasis on inflation risks? Is it paying more attention to labor-market weakness? Does it still characterize economic activity as expanding at a solid pace?

The dot plot records FOMC participants' projections for the future policy rate. It is not a commitment, but a change in the median dot can materially alter market pricing of the future rate path.

Powell's press conference often has the greatest short-term market impact because it reveals more of the Fed's reaction function. The Fed may cut rates, for example, while Powell emphasizes sticky inflation, resilient economic activity, and no need for rapid additional easing. Markets may correctly interpret such an outcome as a hawkish cut.

FOMC analysis should therefore focus not on the number of basis points changed today, but on whether the entire expected future policy path shifted higher or lower relative to prior market expectations.

# Fed Dashboard: Applying the Framework to Investment

Using this framework for investment does not require tracking dozens of macro indicators every day. An effective Fed dashboard can be compressed into six modules.

The **inflation** module can track core PCE, core CPI, three- and six-month annualized inflation, services inflation, and the ten-year breakeven rate, classifying inflation as accelerating, stable, or cooling.

The **labor** module can track payrolls, unemployment, initial claims, JOLTS, quits, and wage growth, classifying the labor market as strong, normalizing, or breaking.

The **growth** module can combine ISM Services, ISM Manufacturing, retail sales, GDP or GDPNow, and housing data to determine whether growth is accelerating, stable, or slowing.

The **rates and Fed pricing** module should focus on the two-year and ten-year Treasury yields, the 2s10s spread, the ten-year real yield, and the ten-year breakeven. The two-year yield primarily reflects Fed expectations, the ten-year yield is closer to long-term financial conditions, and the real yield directly affects the equity discount rate.

The **liquidity** module should monitor the Fed balance sheet, bank reserves, the TGA, ON RRP, and SOFR or repo conditions to classify systemic liquidity as easing, neutral, or tightening.

The **financial conditions** module can include the S&P 500, Nasdaq, credit spreads, mortgage rates, corporate bond yields, the U.S. dollar, and bank lending standards. The Fed is not attempting to influence an isolated overnight rate; it is attempting to affect the full set of financial conditions faced by the economy.

\begin{researchfigure}
\includegraphics[width=0.88\textwidth]{public/figures/federal-reserve-system-figure-6.png}
\end{researchfigure}

Growth and inflation can then be combined into four broad regimes:

| | Inflation Rising | Inflation Falling |
|---|---:|---:|
| **Growth Rising** | Reflation | Goldilocks |
| **Growth Falling** | Stagflation | Slowdown / Disinflation |

Goldilocks generally describes resilient growth accompanied by declining inflation. Reflation describes growth and inflation strengthening together. Slowdown or disinflation requires a further judgment between a soft and hard landing. Stagflation—falling growth alongside rising inflation—is one of the most difficult environments for policymakers.

For practical investment work, the weekly process can be reduced to five questions:

1. Is inflation accelerating or cooling?
2. Is labor strong, normalizing, or breaking?
3. Is growth accelerating or slowing?
4. Is the market repricing the future Fed rate path higher or lower?
5. Are liquidity and financial conditions easing or tightening?

# Conclusion {.unnumbered}

Once the Federal Reserve is understood properly, the central question is no longer simply whether the next meeting will produce a rate cut.

The more important task is to understand the entire feedback loop:

> **Economic Data — Fed Reaction Function — Policy Rate & Balance Sheet — Reserves & Money Markets — Treasury Yield Curve — Financial Conditions — Consumption, CapEx & Employment — Growth & Inflation — Fed**

For equity investors, this complex system can ultimately be compressed into two variables:

> **Expected Cash Flows**

> **Discount Rate**

Economic growth determines the cash flows companies may generate in the future. The Federal Reserve, Treasury yields, and financial conditions jointly determine the discount rate applied to those cash flows.

Asset prices are ultimately the market's continuously revised assessment of those two forces.
