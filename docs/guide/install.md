# Naive Ultra

Pro Components is a set of advanced components developed based on Naive UI. It provides higher-level abstraction and encapsulation, with out-of-the-box usability, and significantly improves the efficiency of building CRUD pages, focusing on page development.

## Features

- [ProForm](/components/form/) Object-based functional programming form template component, with preset common layouts and behaviors
- [ProTable](/components/table/) Abstracts network requests and table formatting
- [ProActions](/components/actions/) Multi-scenario form and table controls
- [ProCheckbox](/components/checkbox/) Composite checkbox group
- [ProRadio](/components/radio/) Composite radio group
- [ProProvider](/components/provider/) Global feedback component mounting and optimization
- More in development...

## Installation

Each component in naive-ultra is a standalone package. You can also install `naive-ultra` to use all components.

```sh
pnpm add @naive-ultra/form
pnpm add @naive-ultra/table

# or

pnpm add naive-ultra
```

## Full Import

```ts
import NaiveUltra from 'naive-ultra'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.use(NaiveUltra)
```

## On-demand Import (Recommended)

Install the plugins unplugin-vue-components and unplugin-auto-import, which will automatically import all components and APIs from naive-ultra.

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
