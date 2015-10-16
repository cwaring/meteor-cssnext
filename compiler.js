const cssnext = Npm.require('cssnext')

CssnextCompiler = class CssnextCompiler {
  constructor(options) {
    this.options = {
      sourcemap: true,
      map: { inline: false, annotation: false }
    }

    if (options) this.options = {...this.options, ...options}
    
  }
  processFilesForTarget (files) {
    files.forEach((compileStep) => {
      // skip import files
      if (compileStep.getBasename().endsWith('import.next.css')) return

      let source = compileStep.getContentsAsString()
      let filename = compileStep.getPathInPackage(); //getPathInPackage() has no leading slash, allow cssnext @import to work with relative path
      let options = {...this.options, from: filename}

      try {
        let output = cssnext(source, options);
        // add the result to the app with sourcemaps
        compileStep.addStylesheet({
          path: filename,
          data: output.css,
          sourceMap: JSON.stringify(output.map)
        });
      } catch( e ) {
        compileStep.error({
          message: "cssnext compiler error: " + e.message,
          sourcePath: e.filename || filename,
          line: e.line,
          column: e.column + 1
        });
      }
    })
  }
}