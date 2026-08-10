#!/usr/bin/env bash

set -euo pipefail

project_dir="$(cd "$(dirname "$0")/.." && pwd)"
source_file="$project_dir/content/drafts/memory-cycle-price-led-rollover-equity-research.md"
header_file="$project_dir/scripts/pdf/equity-research-header.tex"
output_file="$project_dir/public/reports/memory_cycle_at_an_inflection_point.pdf"
raw_pdf="$(mktemp -t memory-cycle-report).pdf"

cleanup() {
  rm -f "$raw_pdf"
}
trap cleanup EXIT

pandoc "$source_file" \
  --from=gfm+yaml_metadata_block \
  --pdf-engine=xelatex \
  --toc \
  --toc-depth=2 \
  --include-in-header="$header_file" \
  --variable=mainfont:"PingFang SC" \
  --variable=sansfont:"PingFang SC" \
  --variable=papersize:a4 \
  --variable=geometry:"top=23mm,bottom=23mm,left=20mm,right=20mm" \
  --variable=fontsize:11pt \
  --variable=colorlinks:true \
  --variable=linkcolor:ResearchInk \
  --variable=urlcolor:ResearchGold \
  --variable=citecolor:ResearchGold \
  --output="$raw_pdf"

python3 "$project_dir/scripts/style-research-pdf.py" \
  "$raw_pdf" \
  "$output_file"

echo "$output_file"
