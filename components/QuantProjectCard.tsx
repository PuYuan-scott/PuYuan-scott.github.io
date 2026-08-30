import Image from "next/image";
import Link from "next/link";
import type { QuantProject } from "@/lib/quant-projects";

type QuantProjectCardProps = {
  project: QuantProject;
};

export default function QuantProjectCard({ project }: QuantProjectCardProps) {
  return (
    <article className="quant-project-card">
      <Link
        className="quant-project-preview"
        href={`/quant-projects/${project.slug}`}
        aria-label={`View ${project.title}`}
      >
        <Image
          src={project.screenshot.src}
          alt={project.screenshot.alt}
          width={project.screenshot.width}
          height={project.screenshot.height}
          sizes="(max-width: 900px) 100vw, 58vw"
        />
      </Link>
      <div className="quant-project-card-copy">
        <p className="eyebrow">{project.eyebrow}</p>
        <h2>
          <Link href={`/quant-projects/${project.slug}`}>{project.title}</Link>
        </h2>
        <p className="quant-project-summary">{project.abstract}</p>
        <dl className="quant-project-meta">
          <div>
            <dt>Status</dt>
            <dd>{project.status}</dd>
          </div>
          <div>
            <dt>Published</dt>
            <dd>{project.displayDate}</dd>
          </div>
        </dl>
        <div className="quant-project-actions">
          <Link
            className="button button-primary"
            href={`/quant-projects/${project.slug}`}
          >
            View project <span aria-hidden="true">→</span>
          </Link>
          <a
            className="button button-secondary"
            href={project.repository}
            target="_blank"
            rel="noreferrer"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </article>
  );
}
