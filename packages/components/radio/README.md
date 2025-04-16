# Naive Ultra

See our website [naive-ultra](/https://naiveui-naive-ultra.vercel.app/) for more information.

## Install

Using pnpm:

```bash
pnpm install --save naive-ultra
```

or using yarn:

```bash
yarn add naive-ultra
```

## Usage

### Globals

```js
import NaiveUltra from 'naive-ultra'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.use(NaiveUltra)
```

## On-Demand Import (Recommended)

Install the `unplugin-vue-components` and `unplugin-auto-import` plugins, which will automatically import all components and APIs from `naive-ultra`.

```sh
npm install -D unplugin-vue-components unplugin-auto-import
```

### Vite

```ts
import NaiveUIProImports from 'naive-ultra/imports'
import NaiveUIProResolver from 'naive-ultra/resolver'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
// vite.config.ts
import { defineConfig } from 'vite'

export default defineConfig({
  // ...
  plugins: [
    // ...
    AutoImport({
      imports: [NaiveUIProImports()],
    }),
    Components({
      resolvers: [NaiveUIProResolver()],
    }),
  ],
})
```

### Webpack

```js
const NaiveUIProImports = require('naive-ultra/imports')
const NaiveUIProResolver = require('naive-ultra/resolver')
// webpack.config.js
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')

module.exports = {
  // ...
  plugins: [
    // ...
    AutoImport({
      imports: [NaiveUIProImports()],
    }),
    Components({
      resolvers: [NaiveUIProResolver()],
    }),
  ],
}
```
