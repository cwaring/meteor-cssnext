var cssnext = Npm.require('cssnext')

var handler = function (compileStep, isLiterate) {

  var source = compileStep.read().toString('utf8');
  var outputFile = compileStep.inputPath.replace('.next', '');

  try {
    var output = cssnext(source,
      {
        features: { rem: false },
        from: compileStep.inputPath,
        sourcemap: true,
        map: { inline: false, annotation: false, sourcesContent: true }
      });
  } catch( e ) {
    throw new Error(e);
  }

  // Add the result to the app with sourcemaps
  compileStep.addStylesheet({
    path: outputFile,
    data: output.css,
    sourceMap: JSON.stringify(output.map)
  });

};

Plugin.registerSourceHandler('next.css', {archMatching: 'web'}, handler);

// Register import.css files with the dependency watcher, without actually
// processing them. There is a similar rule in the stylus package.
Plugin.registerSourceHandler("import.next.css", function () {
  // Do nothing
});
