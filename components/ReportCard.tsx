import type { ResearchReport } from "@/lib/reports";

type ReportCardProps = {
  report: ResearchReport;
  featured?: boolean;
};

export default function ReportCard({
  report,
  featured = false,
}: ReportCardProps) {
  return (
    <article className={featured ? "report report-featured" : "report"}>
      <div className="report-heading">
        <div>
          <p className="eyebrow">
            {featured ? "Featured Research" : report.categoryLabel}
          </p>
          {report.company && <p className="company-name">{report.company}</p>}
          <h2>{report.title}</h2>
        </div>
        <dl className="report-meta">
          {report.ticker && (
            <div>
              <dt>Ticker</dt>
              <dd>{report.ticker}</dd>
            </div>
          )}
          <div>
            <dt>Published</dt>
            <dd>{report.displayDate}</dd>
          </div>
          <div>
            <dt>Length</dt>
            <dd>{report.pages} pages</dd>
          </div>
        </dl>
      </div>

      <div className="report-body">
        <div>
          <h3>Abstract</h3>
          <p className="abstract">{report.abstract}</p>
        </div>
        <div>
          <h3>Key Takeaways</h3>
          <ul className="takeaways">
            {report.takeaways.map((takeaway) => (
              <li key={takeaway}>{takeaway}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="report-actions">
        <a className="button button-primary" href={report.pdf} download>
          Download Full Report
          <span aria-hidden="true">↓</span>
        </a>
        <a
          className="button button-secondary"
          href={report.pdf}
          target="_blank"
          rel="noreferrer"
        >
          Open PDF
          <span aria-hidden="true">↗</span>
        </a>
        {report.spreadsheet && (
          <a
            className="button button-secondary"
            href={report.spreadsheet}
            download
          >
            Download Excel
            <span aria-hidden="true">↓</span>
          </a>
        )}
        <span className="file-note">
          PDF · {report.pages} pages{report.spreadsheet ? " · XLSX" : ""}
        </span>
      </div>
    </article>
  );
}
