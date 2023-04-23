#!/usr/bin/env sh

set -e
rm -rf dist
npm run build

cd dist

git init 

git add -A

git commit -m '🎉deploy gh-pages🎉'

git push -f git@github.com:fxzer/es6-vitepress.git master:gh-pages

cd ..


cd -
