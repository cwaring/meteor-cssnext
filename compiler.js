var cssnext = Npm.require('cssnext')
var _ = Npm.require('underscore');

/**
 * Transpile CSS4 syntax to CSS3 with cssnext
 * @param  {Object}  compileStep  Meteor compileStep object
 * @param  {Boolean} isLiterate
 * @param  {Object}  [cssnextExtend] cssnext compile options object
 */
var compile = function (compileStep, isLiterate, cssnextExtend) {
  var source = compileStep.read().toString('utf8');
  var filename = compileStep.inputPath;

  var options = {
    from: filename,
    sourcemap: true,
    map: { inline: false, annotation: false }
  };

  // extend default options if defined
  if (cssnextExtend) {
    options = _.extend(options, cssnextExtend)
  }

  try {
    var output = cssnext(source, options);

    // add the result to the app with sourcemaps
    compileStep.addStylesheet({
      path: filename,
      data: output.css,
      sourceMap: JSON.stringify(output.map)
    });
  } catch( e ) {
    compileStep.error({
      message: "cssnext compiler error: " + e.message,
      sourcePath: e.filename || compileStep.inputPath,
      line: e.line,
      column: e.column + 1
    });
  }
};

Cssnext = {
  compile: compile
}