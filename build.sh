#!/bin/bash
# Build production bundle from JSX sources.
set -e
cd "$(dirname "$0")"
npx -y esbuild@0.21.5 tweaks-panel.jsx app-top.jsx app-bottom.jsx app-wellness.jsx app.jsx \
  --loader:.jsx=jsx --jsx=transform --target=es2020 \
  --outdir=build --log-level=warning
cat build/tweaks-panel.js build/app-top.js build/app-bottom.js build/app-wellness.js build/app.js > bundle.js
echo "bundle.js → $(wc -c < bundle.js) bytes"
