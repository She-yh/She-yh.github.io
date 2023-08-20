set -e

npm run build

cd ./dist
cp index.html 404.html

git init
git add -A
git commit -m 'deploy'

git push git@github.com:She-yh/she-yh.github.io.git main:gh-pages
