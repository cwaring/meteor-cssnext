Package.describe({
  name: 'kit:cssnext',
  version: '1.0.2',
  summary: 'Transpile CSS4 to CSS3',
  git: 'https://github.com/cwaring/meteor-cssnext',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use('isobuild:compiler-plugin@1.0.0');
  api.use(['ecmascript'], ['server']);

  api.addFiles('compiler.js', 'server');
  api.export('CssnextCompiler', 'server');
});

var npmDependencies = {
  "cssnext": "1.8.4"
}

Npm.depends(npmDependencies)

Package.registerBuildPlugin({
  name: 'cssnext',
  use: ['ecmascript'],
  sources: [
    'compiler.js',
    'plugin/cssnext.js'
  ],
  npmDependencies: npmDependencies
});