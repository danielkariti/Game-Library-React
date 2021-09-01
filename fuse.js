/**
 * We use fusebox as module bundler in thus project.
 * If you for some reason need to fiddle with this (to add sass for example)
 * check out https://fuse-box.org/ for documentation.
 */
const { FuseBox, WebIndexPlugin, CSSPlugin } = require('fuse-box');

const fuse = FuseBox.init({
  homeDir: 'src/',
  target: 'browser@es6',
  output: 'dist/$name.js',
  plugins: [WebIndexPlugin({ template: 'src/index.html' }), CSSPlugin()],
  useTypescriptCompiler: true,
  allowSyntheticDefaultImports: true,
  sourceMaps: true,
});

fuse.dev(); // launch http server

fuse
  .bundle('app')
  .instructions(' > index.jsx')
  .hmr()
  .watch();

fuse.run();
