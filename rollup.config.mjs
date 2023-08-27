import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import minifyLiterals from 'rollup-plugin-minify-html-literals-v3';
import summary from 'rollup-plugin-summary';
import path from 'path'

export default {
  plugins: [
    // Resolve bare module specifiers to relative paths
    resolve(),
    // Minify HTML template literals
    minifyLiterals(),
    // Minify JS
    terser({
      ecma: 2020,
      module: true,
      warnings: true,
    }),
    // Print bundle summary
    summary(),
  ],
  input: path.join(process.cwd(), 'app/javascript/application.js'),
  output: {
    dir: path.join(process.cwd(), 'app/assets/builds'),
  },
  preserveEntrySignatures: 'strict',
};
