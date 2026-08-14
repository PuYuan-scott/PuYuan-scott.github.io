import { insights } from "@/lib/insights";
import { investmentArticles } from "@/lib/investment-articles";
import { reports } from "@/lib/reports";

const SITE_URL = "https://puyuan-scott.github.io";

type FeedItem = {
  title: string;
  category: string;
  published: string;
  description: string;
  path: string;
};

export const dynamic = "force-static";

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function absoluteUrl(path: string) {
  return new URL(path, `${SITE_URL}/`).toString();
}

function publicationDate(date: string) {
  return new Date(`${date}T12:00:00Z`).toUTCString();
}

function feedItems(): FeedItem[] {
  const reportItems: FeedItem[] = reports.map((report) => ({
    title: report.title,
    category: report.categoryLabel,
    published: report.published,
    description: report.abstract,
    path: report.pdf,
  }));

  const insightItems: FeedItem[] = insights.map((insight) => ({
    title: insight.title,
    category: "Insights",
    published: insight.published,
    description: insight.abstract,
    path: `/insights/${insight.slug}/`,
  }));

  const investmentItems: FeedItem[] = investmentArticles.map((article) => ({
    title: article.title,
    category: "Investment Decision",
    published: article.published,
    description: article.abstract,
    path: `/investment-reports/${article.slug}/`,
  }));

  return [...reportItems, ...insightItems, ...investmentItems].sort(
    (a, b) =>
      b.published.localeCompare(a.published) || a.title.localeCompare(b.title),
  );
}

export async function GET() {
  const items = feedItems();
  const lastBuildDate = publicationDate(items[0]?.published ?? "2026-01-01");
  const entries = items
    .map((item) => {
      const url = absoluteUrl(item.path);

      return `    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${escapeXml(url)}</link>
      <guid isPermaLink="true">${escapeXml(url)}</guid>
      <category>${escapeXml(item.category)}</category>
      <pubDate>${publicationDate(item.published)}</pubDate>
      <description>${escapeXml(item.description)}</description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Scott Yuan Research Updates</title>
    <link>${SITE_URL}/</link>
    <description>New equity research, investment decisions, economic analysis and insights from Scott Yuan Research.</description>
    <language>en</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
${entries}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
