var cssnext = Npm.require('cssnext')

var handler = function (compileStep, isLiterate) {

  var source = compileStep.read().toString('utf8');
  var filename = compileStep.inputPath;

  try {
    var output = cssnext(source,
      {
        features: { rem: false },
        from: filename,
        sourcemap: true,
        map: { inline: false, annotation: false, sourcesContent: true }
      });
  } catch( e ) {
    compileStep.error({
      message: "cssnext compiler error: " + e.message,
      sourcePath: e.filename || compileStep.inputPath,
      line: e.line,
      column: e.column + 1
    });
  }

  // Add the result to the app with sourcemaps
  compileStep.addStylesheet({
    path: filename,
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
