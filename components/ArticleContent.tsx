import type { InsightBlock } from "@/lib/insights";

type ArticleContentProps = {
  content: InsightBlock[];
};

function ArticleBlock({ block }: { block: InsightBlock }) {
  switch (block.type) {
    case "heading":
      return <h2>{block.text}</h2>;
    case "list":
      return (
        <ul>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "quote":
      return <blockquote>{block.text}</blockquote>;
    case "framework":
      return (
        <div className="insight-framework">
          {block.items.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      );
    case "table":
      return (
        <div className="insight-table-wrap">
          <table
            className={`insight-table insight-table-${block.headers.length}`}
          >
            <thead>
              <tr>
                {block.headers.map((header) => (
                  <th key={header} scope="col">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row) => (
                <tr key={row.join("|")}>
                  {row.map((cell, index) => (
                    <td key={`${cell}-${index}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "paragraph":
      return <p>{block.text}</p>;
  }
}

export default function ArticleContent({ content }: ArticleContentProps) {
  return content.map((block, index) => (
    <ArticleBlock block={block} key={`${block.type}-${index}`} />
  ));
}
