# Naive UI Pro Components

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

See our website [naive-ui-pro-components](https://naiveui-pro.vercel.app/) for more information.

## Install

Using pnpm:

```bash
pnpm install --save naive-ui-pro-components
```

or using yarn:

```bash
yarn add naive-ui-pro-components
```

## Usage

### Globals

```js
import NaiveUIProComponents from 'naive-ui-pro-components'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.use(NaiveUIProComponents)
```

## On-Demand Import (Recommended)

Install the `unplugin-vue-components` and `unplugin-auto-import` plugins, which will automatically import all components and APIs from `naive-ui-pro-components`.

```sh
npm install -D unplugin-vue-components unplugin-auto-import
```

### Vite

```ts
import NaiveUIProImports from 'naive-ui-pro-components/imports'
import NaiveUIProResolver from 'naive-ui-pro-components/resolver'
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
// webpack.config.js
const NaiveUIProImports = require('naive-ui-pro-components/imports')
const NaiveUIProResolver = require('naive-ui-pro-components/resolver')
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

## License

[MIT](./LICENSE) License © [Hairyf](https://github.com/hairyf)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/naive-ui-pro-components?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/naive-ui-pro-components
[npm-downloads-src]: https://img.shields.io/npm/dm/naive-ui-pro-components?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/naive-ui-pro-components
[bundle-src]: https://img.shields.io/bundlephobia/minzip/naive-ui-pro-components?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=naive-ui-pro-components
[license-src]: https://img.shields.io/github/license/hairyf/naive-ui-pro-components.svg?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/hairyf/naive-ui-pro-components/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/naive-ui-pro-components
