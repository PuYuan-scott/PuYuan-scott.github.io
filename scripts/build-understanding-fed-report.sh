#!/usr/bin/env bash

set -euo pipefail

project_dir="$(cd "$(dirname "$0")/.." && pwd)"
source_file="$project_dir/content/reports/understanding-the-federal-reserve.md"
definitions_file="$project_dir/scripts/pdf/understanding-fed-report-definitions.tex"
header_file="$project_dir/scripts/pdf/institutional-blue-equity-header.tex"
output_file="$project_dir/public/reports/understanding_the_federal_reserve.pdf"
raw_pdf="$(mktemp -t understanding-fed-raw).pdf"

cleanup() {
  rm -f "$raw_pdf"
}
trap cleanup EXIT

cd "$project_dir"

pandoc "$source_file" \
  --from=markdown+yaml_metadata_block+raw_tex \
  --pdf-engine=xelatex \
  --toc \
  --toc-depth=1 \
  --include-in-header="$definitions_file" \
  --include-in-header="$header_file" \
  --variable=mainfont:"Helvetica Neue" \
  --variable=sansfont:"Helvetica Neue" \
  --variable=papersize=letter \
  --variable=geometry:"top=23mm,bottom=19mm,left=17mm,right=17mm" \
  --variable=fontsize=10pt \
  --variable=documentclass=article \
  --output="$raw_pdf"

python3 "$project_dir/scripts/pdf/ensure-white-background.py" \
  "$raw_pdf" \
  "$output_file"

echo "$output_file"
