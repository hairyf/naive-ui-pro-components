export const viteConfigJs = `\
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
// import NaiveUltraResolver from 'naive-ultra/resolver'
// import NaiveUltraImports from 'naive-ultra/imports'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
plugins: [
  // AutoImport({
  //   imports: [NaiveUltraImports()],
  // }),
  // Components({
  //   resolvers: [NaiveUltraResolver()],
  // }),
  Vue()
],
})
`
export const srcMainTs = `\
import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount('#app');
`

export const indexHtml = `\
<!DOCTYPE html>
<html class="dark" lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + Vue + TS</title>
  </head>
  <body>
    <div vaul-drawer-wrapper id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
`
