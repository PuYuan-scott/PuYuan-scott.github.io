import type { Metadata } from "next";
import QuantProjectCard from "@/components/QuantProjectCard";
import {
  quantProjectCategory,
  sortedQuantProjects,
} from "@/lib/quant-projects";

export const metadata: Metadata = {
  title: quantProjectCategory.pageTitle,
  description: quantProjectCategory.description,
};

export default function QuantProjectsPage() {
  const projects = sortedQuantProjects();

  return (
    <div className="page-shell interior-page">
      <header className="page-intro quant-page-intro">
        <p className="eyebrow">Systematic Research</p>
        <h1>{quantProjectCategory.pageTitle}</h1>
        <p>{quantProjectCategory.description}</p>
      </header>

      <section className="quant-project-list" aria-label="Quant projects">
        {projects.map((project) => (
          <QuantProjectCard project={project} key={project.slug} />
        ))}
      </section>
    </div>
  );
}
