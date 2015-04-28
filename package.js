Package.describe({
  name: 'kit:cssnext',
  version: '0.1.0',
  summary: 'Transpile CSS4 to CSS3',
  git: 'https://github.com/cwaring/meteor-cssnext',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
});

Package.registerBuildPlugin({
  name: 'cssnext',
  use: [],
  sources: [
    'plugin/cssnext.js'
  ],
  npmDependencies: {
    "cssnext": "1.3.0"
  }
});