// esbuild.config.js
const path = require("path")
const ruby2js = require("@ruby2js/esbuild-plugin")
const esbuild = require('esbuild')

esbuild.build({
  entryPoints: ["application.js"],
  outdir: path.join(process.cwd(), "app/assets/builds"),
  bundle: true,
  absWorkingDir: path.join(process.cwd(), "app/javascript"),
  publicPath: "/assets",
  minify: true,
  sourcemap: "inline",
  plugins: [
    ruby2js()
  ],
}).catch(() => process.exit(1));
