#!/usr/bin/env bash
set -e

ROOT=".."

echo "Using local EMFular repositories..."

npm uninstall \
  emfular-core \
  ngx-emfular-tool \
  ngx-emfular-diagram || true

npm install \
  "$ROOT/EMFular-core" \
  "$ROOT/EMFular-tool/dist" \
  "$ROOT/EMFular-diagram/dist"

echo
npm ls \
  emfular-core \
  ngx-emfular-tool \
  ngx-emfular-diagram