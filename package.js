Package.describe({
  name: 'kit:css4',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Transpile CSS4 using Rework',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
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