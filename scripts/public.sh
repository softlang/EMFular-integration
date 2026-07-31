#!/usr/bin/env bash
set -e

echo "Using published npm packages..."

rm -rf node_modules package-lock.json
npm install

echo
npm ls \
  emfular-core \
  ngx-emfular-tool \
  ngx-emfular-diagram