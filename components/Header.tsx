import Link from "next/link";

const navigation = [
  { href: "/equity-research", label: "Equity Research" },
  { href: "/investment-reports", label: "Investment Reports" },
  { href: "/economic-analysis", label: "Economic Analysis" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="page-shell masthead">
        <Link className="brand" href="/" aria-label="Scott Yuan Research home">
          <span className="brand-mark" aria-hidden="true">
            SYR
          </span>
          <span>
            <strong>Scott Yuan Research</strong>
            <small>Independent Equity Research</small>
          </span>
        </Link>
        <nav aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
