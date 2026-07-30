import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InsightCard from "@/components/InsightCard";
import ReportCard from "@/components/ReportCard";
import { sortedInvestmentArticles } from "@/lib/investment-articles";
import {
  categories,
  reportsForCategory,
  type CategorySlug,
} from "@/lib/reports";

type CategoryPageProps = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category: slug } = await params;
  const category = categories.find((item) => item.slug === slug);

  if (!category) {
    return {};
  }

  return {
    title: category.label,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: slug } = await params;
  const category = categories.find((item) => item.slug === slug);

  if (!category) {
    notFound();
  }

  const categoryReports = reportsForCategory(category.slug as CategorySlug);
  const categoryArticles =
    category.slug === "investment-reports"
      ? sortedInvestmentArticles()
      : [];
  const hasPublications =
    categoryReports.length > 0 || categoryArticles.length > 0;

  return (
    <div className="page-shell interior-page">
      <header className="page-intro">
        <p className="eyebrow">Research Library</p>
        <h1>{category.label}</h1>
        <p>{category.description}</p>
      </header>

      <section className="report-list" aria-label={`${category.label} reports`}>
        {hasPublications ? (
          <>
            {categoryReports.map((report) => (
              <ReportCard key={report.slug} report={report} />
            ))}
            {categoryArticles.map((article) => (
              <InsightCard
                basePath="/investment-reports"
                insight={article}
                key={article.slug}
              />
            ))}
          </>
        ) : (
          <div className="empty-state">
            <span>Research archive</span>
            <h2>No reports published in this section yet.</h2>
            <p>New research will appear here when it is released.</p>
          </div>
        )}
      </section>
    </div>
  );
}
