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
        <h1>Research at the intersection of markets, data and valuation.</h1>
      </header>

      <div className="about-grid">
        <section>
          <h2>About Scott Yuan</h2>
          <p>
            Scott Yuan is a Toronto-based applied machine learning
            professional and independent researcher focused on financial
            markets, company fundamentals and quantitative analysis. He
            currently works in model validation at TD Bank, where his work
            includes financial-surveillance models and equity-return prediction
            frameworks.
          </p>
          <p>
            His previous experience includes investment analytics at AGF
            Investments and financial and operating analysis at Boston
            Consulting Group. His research approach combines financial
            statement analysis, scenario-based valuation, economic data and
            rigorous model evaluation.
          </p>
          <p>
            Scott holds a Master of Management Analytics from the University
            of Toronto&apos;s Rotman School of Management and an Honours
            Bachelor of Arts &amp; Science with High Distinction in Economics
            and Statistics from the University of Toronto.
          </p>
        </section>
        <aside>
          <p className="eyebrow">Background</p>
          <ul>
            <li>Senior Applied Machine Learning Scientist, TD Bank</li>
            <li>Investment Analytics, AGF Investments</li>
            <li>Management Analytics, Rotman</li>
            <li>Economics &amp; Statistics, University of Toronto</li>
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
