#!/usr/bin/env bash

set -euo pipefail

project_dir="$(cd "$(dirname "$0")/.." && pwd)"
source_pdf="$project_dir/content/source-pdfs/mega-cap-technology-drawdown-framework-original.pdf"
front_source="$project_dir/content/drafts/mega-cap-technology-drawdown-front-matter.md"
definitions_file="$project_dir/scripts/pdf/mega-cap-report-definitions.tex"
header_file="$project_dir/scripts/pdf/institutional-blue-equity-header.tex"
output_file="$project_dir/public/reports/mega_cap_technology_drawdown_framework.pdf"
front_pdf="$(mktemp -t mega-cap-front-matter).pdf"

cleanup() {
  rm -f "$front_pdf"
}
trap cleanup EXIT

pandoc "$front_source" \
  --from=markdown+raw_tex+yaml_metadata_block \
  --pdf-engine=xelatex \
  --include-in-header="$definitions_file" \
  --include-in-header="$header_file" \
  --variable=mainfont:"Helvetica Neue" \
  --variable=sansfont:"Helvetica Neue" \
  --variable=papersize=letter \
  --variable=geometry:"top=23mm,bottom=19mm,left=17mm,right=17mm" \
  --variable=fontsize=10pt \
  --output="$front_pdf"

python3 "$project_dir/scripts/style-mega-cap-report.py" \
  "$source_pdf" \
  "$front_pdf" \
  "$output_file"

echo "$output_file"
