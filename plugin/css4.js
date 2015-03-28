var rework = Npm.require('rework');
var reworkCalc = Npm.require('rework-calc');
var reworkMedia = Npm.require('rework-custom-media');
var reworkNPM = Npm.require('rework-npm');
var reworkVars = Npm.require('rework-vars');
var reworkColor = Npm.require('rework-color-function');
var reworkPluginColors = Npm.require('rework-plugin-colors');
var namespace = Npm.require('rework-namespace');
var autoprefixer = Npm.require('autoprefixer');

var basswork = function(src, options, toStringOptions) {

  var options = options || {};
  var toStringOptions = toStringOptions || {};

  var css = rework(src, options)
    .use(reworkNPM())
    .use(reworkVars())
    .use(reworkMedia())
    .use(reworkCalc)
    .use(reworkColor)
    .use(reworkPluginColors()) // For legacy support
    .use(namespace(options.namespace, options.namespaceOptions))
    .toString(toStringOptions);

  css.code = autoprefixer().process(css.code.toString()).css;

  return css;

};

var handler = function (compileStep, isLiterate) {

  var source = compileStep.read().toString('utf8');

  var outputFile = compileStep.inputPath + ".css";
  try {
    var css = basswork(source,
      { source: compileStep.inputPath }, { sourcemapAsObject: true, sourcemap: true });
  } catch( e ) {
    throw new Error(e);
  }

  compileStep.addStylesheet({
    path: outputFile,
    data: css.code,
    sourceMap: JSON.stringify(css.map)
  });

};

Plugin.registerSourceHandler('css4', {archMatching: 'web'}, handler);
