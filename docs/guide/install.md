# Naive Ultra

Pro Components is a set of advanced components developed based on Naive UI. It provides higher-level abstractions and encapsulation, with out-of-the-box usability, and significantly improves the efficiency of creating CRUD pages, focusing on page development.

## Features

- [ProForm](/components/form/) - A form template component based on object-oriented functional programming, with preset common layouts and behaviors.
- [ProTable](/components/table/) - Abstracts network requests and table formatting.
- [ProActions](/components/actions/) - Form and table actions for multiple scenarios.
- [ProProvider](/components/provider/) - Mounting and optimization of global feedback components.
- In development...

## Installation

Each component in naive-ultra is a separate package. You can also install `naive-ultra` to use all components.

```sh
pnpm add @naive-ultra/form
pnpm add @naive-ultra/table

# or

pnpm add naive-ultra
```

## Global Import

```ts
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
