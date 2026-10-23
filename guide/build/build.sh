#!/usr/bin/env bash
# Rebuilds the PDF and Word versions of the study guide from the Markdown source.
# Needs pandoc and a Chromium-based browser. Set CHROME to the browser binary if it is not
# on PATH as "chromium", and CHROME_FLAGS for extra flags (for example --no-sandbox when running as root).
set -euo pipefail
here="$(cd "$(dirname "$0")" && pwd)"
guide="$(dirname "$here")"
src="$guide/ITIL_ISO20000_Study_Guide.md"
chrome="${CHROME:-chromium}"

pandoc -f gfm -t html5 --standalone --embed-resources --css "$here/guide.css" \
  --metadata pagetitle="ITIL & ISO/IEC 20000 Study Guide" -o "$here/guide.html" "$src"
"$chrome" --headless=new --disable-gpu --no-pdf-header-footer ${CHROME_FLAGS:-} \
  --print-to-pdf="$guide/ITIL_ISO20000_Study_Guide.pdf" "file://$here/guide.html"
pandoc -f gfm -t docx --toc --toc-depth=1 --metadata title="ITIL & ISO/IEC 20000 Study Guide" \
  -o "$guide/ITIL_ISO20000_Study_Guide.docx" "$src"
rm -f "$here/guide.html"
echo "Built ITIL_ISO20000_Study_Guide.pdf and ITIL_ISO20000_Study_Guide.docx"
