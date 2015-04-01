var basswork = Npm.require('basswork')

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
