const concat = require('concat');
const replace = require('replace-in-file');
(async function build() {
  const files = [
    './dist/webapp/polyfills-es2015.js',
    './dist/webapp/runtime-es2015.js',
    './dist/webapp/main-es2015.js',
    './dist/webapp/styles-es2015.js',
  ];
  await concat(files, `../extension/src/angularBuild.js`);

  const options = {
    files: '../extension/src/angularBuild.js',
    from: /webpackJsonp/g,
    to: 'webpackJsonp2',
  };
  replace(options);
})();