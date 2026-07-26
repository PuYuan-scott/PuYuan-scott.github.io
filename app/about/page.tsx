import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About Scott Yuan Research.",
};

export default function AboutPage() {
  return (
    <div className="page-shell interior-page">
      <header className="page-intro">
        <p className="eyebrow">About</p>
        <h1>Independent analysis, presented with clarity.</h1>
      </header>

      <div className="about-grid">
        <section>
          <h2>Scott Yuan Research</h2>
          <p>
            Scott Yuan Research is an independent personal research
            publication focused on equity research, investment analysis and
            economic commentary.
          </p>
          <p>
            Research emphasizes fundamental business analysis, financial
            statement interpretation, scenario-based valuation and the
            relationship between operating performance and shareholder
            returns.
          </p>
        </section>
        <aside>
          <p className="eyebrow">Coverage</p>
          <ul>
            <li>Equity Research</li>
            <li>Investment Reports</li>
            <li>Economic Analysis</li>
          </ul>
        </aside>
      </div>

      <section className="disclosure">
        <p className="eyebrow">Important Disclosure</p>
        <p>
          This website and its reports are published solely for informational,
          educational and analytical purposes. They do not constitute
          investment advice, an offer to buy or sell securities, a
          solicitation, or a recommendation regarding any security, strategy
          or transaction.
        </p>
      </section>
    </div>
  );
}
