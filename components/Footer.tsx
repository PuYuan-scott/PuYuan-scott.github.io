import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-grid">
        <div>
          <strong>Scott Yuan Research</strong>
          <p>Independent research for informational and educational purposes.</p>
        </div>
        <p className="footer-disclaimer">
          This publication does not constitute investment advice, an offer, a
          solicitation or a recommendation regarding any security or
          transaction. Readers should conduct their own research.
        </p>
        <Link href="/about">About the publication</Link>
      </div>
    </footer>
  );
}
