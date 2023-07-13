set -e

git checkout .

git add .

git commit -m "update master branch"

git push -f origin master