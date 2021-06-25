# Reproduction for issue https://github.com/sveltejs/vite-plugin-svelte/issues/73

To reproduce:

1. Clone this repo and `cd` into the directory
2. Run `yarn build`
3. Observe that the build runs successfully. However, note that
   `svelte.config.js` is set to throw an error as soon as it's imported (via
   `require` or `import`). Compare with `yarn expected` which fails with the
   error as expected.

Debug logs produced with `DEBUG=vite:vite-plugin-svelte yarn build`:

```text
   vite:vite-plugin-svelte additional vite config {
  optimizeDeps: {
    exclude: [
      'svelte/animate',
      'svelte/easing',
      'svelte/internal',
      'svelte/motion',
      'svelte/store',
      'svelte/transition',
      'svelte',
      'svelte-hmr/runtime/hot-api-esm.js',
      'svelte-hmr/runtime/proxy-adapter-dom.js',
      'svelte-hmr'
    ]
  },
  resolve: {
    mainFields: [ 'svelte', 'module', 'jsnext:main', 'jsnext' ],
    dedupe: [
      'svelte/animate',
      'svelte/easing',
      'svelte/internal',
      'svelte/motion',
      'svelte/store',
      'svelte/transition',
      'svelte',
      'svelte-hmr/runtime/hot-api-esm.js',
      'svelte-hmr/runtime/proxy-adapter-dom.js',
      'svelte-hmr'
    ]
  }
} +0ms
  vite:vite-plugin-svelte default options for production  {
  extensions: [ '.svelte' ],
  hot: false,
  emitCss: true,
  compilerOptions: { format: 'esm', css: false, dev: false, hydratable: true }
} +8ms
  vite:vite-plugin-svelte resolved options {
  extensions: [ '.svelte' ],
  hot: false,
  emitCss: true,
  compilerOptions: { format: 'esm', css: false, dev: false, hydratable: true },
  configFile: 'vite-plugin-svelte-yarn-2-config-file-bug/svelte.config.js',
  root: 'vite-plugin-svelte-yarn-2-config-file-bug/app',
  isProduction: true,
  isBuild: true,
  isServe: false
} +22ms
vite v2.3.8 building for production...
  vite:vite-plugin-svelte resolveId vite-plugin-svelte-yarn-2-config-file-bug/app/index.html +35ms
✓ 1 modules transformed.
Generated an empty chunk: "index"
rendering chunks (1)...  vite:vite-plugin-svelte transformIndexHtml <script type="module" crossorigin src="/assets/index.935273ac.js"></script>
<!DOCTYPE html>
<html>
  <body>
    foo
  </body>
</html>
 +190ms
dist/index.html                 0.13kb
dist/assets/index.935273ac.js   0.00kb / brotli: 0.00kb
```
