#!/usr/bin/env bash
set -e

ROOT=".."

echo "Building local EMFular repositories..."

rm -f "$ROOT/EMFular-core"/*.tgz
rm -f "$ROOT/EMFular-tool/dist"/*.tgz
rm -f "$ROOT/EMFular-diagram/dist"/*.tgz

echo "== emfular-core =="
(
  cd "$ROOT/EMFular-core"
  npm run build
  npm pack
)

echo "== ngx-emfular-tool =="
(
  cd "$ROOT/EMFular-tool"
  npm run build
  cd dist
  npm pack
)

echo "== ngx-emfular-diagram =="
(
  cd "$ROOT/EMFular-diagram"
  npm run build
  cd dist
  npm pack
)

CORE_TGZ=$(ls "$ROOT/EMFular-core"/emfular-core-*.tgz | tail -1)
TOOL_TGZ=$(ls "$ROOT/EMFular-tool/dist"/ngx-emfular-tool-*.tgz | tail -1)
DIAGRAM_TGZ=$(ls "$ROOT/EMFular-diagram/dist"/ngx-emfular-diagram-*.tgz | tail -1)

echo
echo "Installing:"
echo "$CORE_TGZ"
echo "$TOOL_TGZ"
echo "$DIAGRAM_TGZ"

npm install --save-peer --no-save \
  "$CORE_TGZ" \
  "$TOOL_TGZ" \
  "$DIAGRAM_TGZ"

echo
npm ls \
  emfular-core \
  ngx-emfular-tool \
  ngx-emfular-diagram