Package.describe({
  name: 'kit:cssnext',
  version: '0.2.0',
  summary: 'Transpile CSS4 to CSS3',
  git: 'https://github.com/cwaring/meteor-cssnext',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('compiler.js', 'server');
  api.export('Cssnext', 'server');
});

var npmDependencies = {
  "cssnext": "1.8.0"
}

Npm.depends(npmDependencies)

Package.registerBuildPlugin({
  name: 'cssnext',
  use: [],
  sources: [
    'compiler.js',
    'plugin/cssnext.js'
  ],
  npmDependencies: npmDependencies
});