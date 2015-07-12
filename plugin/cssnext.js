Plugin.registerSourceHandler('next.css', {archMatching: 'web'}, Cssnext.compile);

// register import.css files with the dependency watcher, without actually
// processing them. There is a similar rule in the stylus package.
Plugin.registerSourceHandler("import.next.css", function () {
  // do nothing
});