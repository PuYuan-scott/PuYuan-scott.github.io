import Link from "next/link";
import ReportCard from "@/components/ReportCard";
import { categories, reports } from "@/lib/reports";

export default function Home() {
  const featuredReport = reports.find((report) => report.featured) ?? reports[0];

  return (
    <>
      <section className="hero">
        <div className="page-shell hero-grid">
          <div>
            <p className="eyebrow">Independent Research</p>
            <h1>Fundamental research with an institutional perspective.</h1>
          </div>
          <div className="hero-intro">
            <p>
              Company research, investment analysis and macroeconomic
              commentary focused on business quality, capital allocation and
              valuation.
            </p>
            <Link className="text-link" href="/equity-research">
              View published research <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="page-shell featured-section">
        <ReportCard report={featuredReport} featured />
      </section>

      <section className="page-shell categories-section">
        <div className="section-heading">
          <p className="eyebrow">Research Library</p>
          <h2>Three areas of coverage.</h2>
        </div>
        <div className="category-grid">
          {categories.map((category, index) => (
            <Link
              className="category-card"
              href={`/${category.slug}`}
              key={category.slug}
            >
              <span className="category-number">0{index + 1}</span>
              <h3>{category.label}</h3>
              <p>{category.description}</p>
              <span className="text-link">
                View reports <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
