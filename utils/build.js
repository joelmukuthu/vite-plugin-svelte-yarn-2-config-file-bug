const { build } = require("vite");
const { svelte } = require("@sveltejs/vite-plugin-svelte");
const { resolve } = require("path");

build({
  plugins: [
    svelte({
      configFile: resolve(__dirname, "../svelte.config.js"),
    }),
  ],
  root: resolve(__dirname, "../app"),
}).catch((e) => {
  console.error(e);
  process.exit(1);
});
