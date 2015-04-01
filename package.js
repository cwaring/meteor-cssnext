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
    "basswork": "1.4.0"
  }
});