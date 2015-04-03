var cssnext = Npm.require('cssnext')

var handler = function (compileStep, isLiterate) {

  var source = compileStep.read().toString('utf8');

  var outputFile = compileStep.inputPath.replace('.next', '');
  try {
    var output = cssnext(source,
      {
        features: { rem: false },
        from: compileStep.inputPath,
        to: outputFile,
        sourcemap: true,
        map: { inline: false, annotation: false, sourcesContent: true }
      });
  } catch( e ) {
    throw new Error(e);
  }

  compileStep.addStylesheet({
    path: outputFile,
    data: output.css,
    sourceMap: output.map.toString()
  });

};

Plugin.registerSourceHandler('next.css', {archMatching: 'web'}, handler);
