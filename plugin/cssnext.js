Plugin.registerCompiler({
  extensions: ["next.css"],
  archMatching: 'web'
  }, () => {
  const compiler = new CssnextCompiler();
  return compiler;
});