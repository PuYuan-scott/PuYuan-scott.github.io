import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  quantProjectBySlug,
  quantProjects,
} from "@/lib/quant-projects";

type QuantProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;
export const dynamic = "force-static";

export function generateStaticParams() {
  return quantProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: QuantProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = quantProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.abstract,
  };
}

export default async function QuantProjectPage({
  params,
}: QuantProjectPageProps) {
  const { slug } = await params;
  const project = quantProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="page-shell quant-project-article">
      <header className="quant-project-header">
        <Link className="back-link" href="/quant-projects">
          <span aria-hidden="true">←</span> All quant projects
        </Link>
        <p className="eyebrow">{project.eyebrow}</p>
        <h1>{project.title}</h1>
        <p className="quant-project-deck">{project.abstract}</p>
        <div className="quant-project-header-row">
          <dl className="insight-byline">
            <div>
              <dt>By</dt>
              <dd>Scott Yuan</dd>
            </div>
            <div>
              <dt>Published</dt>
              <dd>{project.displayDate}</dd>
            </div>
            <div>
              <dt>Format</dt>
              <dd>{project.status}</dd>
            </div>
          </dl>
          <a
            className="button button-primary"
            href={project.repository}
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
      </header>

      <figure className="quant-project-figure">
        <Image
          src={project.screenshot.src}
          alt={project.screenshot.alt}
          width={project.screenshot.width}
          height={project.screenshot.height}
          sizes="(max-width: 1228px) 100vw, 1180px"
          priority
        />
        <figcaption>{project.screenshot.caption}</figcaption>
      </figure>

      <section className="quant-project-section">
        <div className="quant-section-heading">
          <p className="eyebrow">Research Design</p>
          <h2>{project.frameworkTitle}</h2>
        </div>
        <div className="quant-framework-grid">
          {project.framework.map((item, index) => (
            <div className="quant-framework-item" key={item.title}>
              <span>0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="quant-project-section quant-project-details">
        <div>
          <p className="eyebrow">What It Includes</p>
          <h2>{project.capabilitiesTitle}</h2>
        </div>
        <ul className="quant-capability-list">
          {project.capabilities.map((capability) => (
            <li key={capability}>{capability}</li>
          ))}
        </ul>
      </section>

      <footer className="quant-project-footer">
        <div>
          <p className="eyebrow">Technology</p>
          <ul className="quant-stack" aria-label="Project technology stack">
            {project.stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="quant-project-footer-actions">
          <a
            className="button button-primary"
            href={project.repository}
            target="_blank"
            rel="noreferrer"
          >
            Explore repository <span aria-hidden="true">↗</span>
          </a>
          <Link className="text-link" href="/quant-projects">
            More projects <span aria-hidden="true">→</span>
          </Link>
        </div>
      </footer>
    </article>
  );
}
