#!/usr/bin/env bash

set -euo pipefail

project_dir="$(cd "$(dirname "$0")/.." && pwd)"
source_file="$project_dir/content/drafts/ai-capex-cycle-cash-return-phase-equity-research.md"
header_file="$project_dir/scripts/pdf/institutional-blue-equity-header.tex"
output_file="$project_dir/public/reports/ai_capex_cycle_cash_return_phase.pdf"

pandoc "$source_file" \
  --from=gfm+yaml_metadata_block \
  --pdf-engine=xelatex \
  --toc \
  --toc-depth=1 \
  --number-sections \
  --include-in-header="$header_file" \
  --variable=mainfont:"Helvetica Neue" \
  --variable=sansfont:"Helvetica Neue" \
  --variable=papersize:a4 \
  --variable=geometry:"top=23mm,bottom=19mm,left=17mm,right=17mm" \
  --variable=fontsize=10pt \
  --variable=documentclass=article \
  --output="$output_file"

echo "$output_file"
