import Link from "next/link";
import ReportCard from "@/components/ReportCard";
import { insightCategory } from "@/lib/insights";
import { categories, reports } from "@/lib/reports";

export default function Home() {
  const featuredReport = reports.find((report) => report.featured) ?? reports[0];
  const coverageAreas = [
    ...categories.map((category) => ({
      ...category,
      action: "View reports",
    })),
    {
      ...insightCategory,
      action: "Read insights",
    },
  ];

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
              commentary, complemented by short-form perspectives on markets,
              businesses and valuation.
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
          <h2>Four areas of coverage.</h2>
        </div>
        <div className="category-grid">
          {coverageAreas.map((category, index) => (
            <Link
              className="category-card"
              href={`/${category.slug}`}
              key={category.slug}
            >
              <span className="category-number">0{index + 1}</span>
              <h3>{category.label}</h3>
              <p>{category.description}</p>
              <span className="text-link">
                {category.action} <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
