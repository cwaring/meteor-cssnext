Package.describe({
  name: 'kit:css4',
  version: '0.0.1',
  summary: 'Transpile CSS4 using Rework',
  git: 'https://github.com/cwaring/meteor-css4',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.5');
});


Package.registerBuildPlugin({
  name: 'css4',
  use: [],
  sources: [
  'plugin/css4.js'
  ],
  npmDependencies: {
    "autoprefixer": "5.0.0",
    "minimist": "1.1.0",
    "rework": "1.0.1",
    "rework-calc": "1.1.0",
    "rework-color-function": "1.2.1",
    "rework-custom-media": "0.2.0",
    "rework-namespace": "0.3.0",
    "rework-npm": "1.0.0",
    "rework-plugin-colors": "1.0.3",
    "rework-vars": "3.1.1"
  }
});