rm -rf dist
cp -R app/ dist/
jam compile -o dist/scripts/vendor/require.js
rm -rf dist/scripts/vendor/backbone
rm -rf dist/scripts/vendor/underscore
rm -rf dist/scripts/vendor/jquery
rm -rf dist/tests
rm -rf dist/testRunner.html
rm -rf dist/doc
rm -rf dist/sass
rm -rf dist/dummy