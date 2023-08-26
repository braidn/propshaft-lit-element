// Import rollup plugins
// import html from '@web/rollup-plugin-html';
// import {copy} from '@web/rollup-plugin-copy';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
// import minifyHTML from 'rollup-plugin-minify-html-literals';
import minifyLiterals from 'rollup-plugin-minify-html-literals-v3';
import summary from 'rollup-plugin-summary';
import path from 'path'

export default {
  plugins: [
    // Entry point for application build; can specify a glob to build multiple
    // HTML files for non-SPA app
    // html({
    //   input: 'app/javscript/application.js',
    // }),
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
    // Optional: copy any static assets to build directory
    // copy({
    //   patterns: ['images/**/*'],
    // }),
  ],
  input: path.join(process.cwd(), 'app/javascript/application.js'),
  output: {
    dir: path.join(process.cwd(), 'app/assets/builds'),
  },
  preserveEntrySignatures: 'strict',
};
