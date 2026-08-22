#!/usr/bin/env bash

set -euo pipefail

project_dir="$(cd "$(dirname "$0")/.." && pwd)"
frontmatter_file="$project_dir/content/reports/economic-cycle-framework-frontmatter.md"
source_file="$project_dir/content/source-pdfs/economic-cycle-framework-original.pdf"
definitions_file="$project_dir/scripts/pdf/economic-cycle-report-definitions.tex"
header_file="$project_dir/scripts/pdf/institutional-blue-equity-header.tex"
output_file="$project_dir/public/reports/economic_cycle_framework.pdf"
front_pdf="$(mktemp -t economic-cycle-frontmatter).pdf"
composed_pdf="$(mktemp -t economic-cycle-composed).pdf"

cleanup() {
  rm -f "$front_pdf" "$composed_pdf"
}
trap cleanup EXIT

pandoc "$frontmatter_file" \
  --from=markdown+yaml_metadata_block+raw_tex \
  --pdf-engine=xelatex \
  --toc \
  --toc-depth=1 \
  --include-in-header="$definitions_file" \
  --include-in-header="$header_file" \
  --variable=mainfont:"Helvetica Neue" \
  --variable=sansfont:"Helvetica Neue" \
  --variable=papersize:letter \
  --variable=geometry:"top=23mm,bottom=19mm,left=17mm,right=17mm" \
  --variable=fontsize=10pt \
  --variable=documentclass=article \
  --output="$front_pdf"

python3 "$project_dir/scripts/pdf/compose-economic-cycle-framework.py" \
  "$front_pdf" \
  "$source_file" \
  "$composed_pdf"

python3 "$project_dir/scripts/pdf/ensure-white-background.py" \
  "$composed_pdf" \
  "$output_file"

echo "$output_file"
