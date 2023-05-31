# naive-ui-pro-components

See our website [naive-ui-pro-components](https://naiveui-pro-components.vercel.app/) for more information.

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
import { createApp } from 'vue'
import NaiveUIProComponents from 'naive-ui-pro-components'
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
// vite.config.ts
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUIProImports, NaiveUIProResolver } from 'naive-ui-pro-components/resolvers'

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
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { NaiveUIProImports, NaiveUIProResolver } = require('naive-ui-pro-components/resolvers')

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
