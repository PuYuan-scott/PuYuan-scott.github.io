# Scott Yuan Research

Independent equity research, investment reports, and economic analysis by
Scott Yuan.

## Published site

The GitHub Pages site is configured to publish at:

`https://PuYuan-scott.github.io`

## Local development

```bash
npm install
npm run dev
```

## Production builds

```bash
# GitHub Pages static export
npm run build:pages

# OpenAI Sites deployment build
npm run build
```

## Economic report PDF

The August 7 economic-cycle update is maintained as Markdown and rendered into
the published black-and-gold PDF with:

```bash
npm run build:economic-update
```

Source: `content/reports/us-late-cycle-slowdown-2026-08-07.md`

Output: `public/reports/us_late_cycle_slowdown_august_2026.pdf`

The Memory Cycle equity-research report is maintained as Markdown and rendered
into the published black-and-gold PDF with:

```bash
npm run build:memory-cycle-report
```

Source: `content/drafts/memory-cycle-price-led-rollover-equity-research.md`

Output: `public/reports/memory_cycle_at_an_inflection_point.pdf`

Research reports are published for informational, educational, and analytical
purposes only and do not constitute investment advice.
