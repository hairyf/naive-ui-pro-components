# Naive UI Pro Components

Pro Components is a set of advanced components developed based on Naive UI. It provides higher-level abstractions and encapsulation, with out-of-the-box usability, and significantly improves the efficiency of creating CRUD pages, focusing on page development.

## Features

- [ProForm](/components/form/) - A form template component based on object-oriented functional programming, with preset common layouts and behaviors.
- [ProTable](/components/table/) - Abstracts network requests and table formatting.
- [ProControls](/components/controls/) - Form and table controls for multiple scenarios.
- [ProGlobals](/components/globals/) - Mounting and optimization of global feedback components.
- In development...

## Installation

Each component in pro-components is a separate package. You can also install `naive-ui-pro-components` to use all components.

```sh
pnpm add @naive-ui-pro/form
pnpm add @naive-ui-pro/table

# or

pnpm add naive-ui-pro-components
```

## Global Import

```ts
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
import NaiveUIProResolver from 'naive-ui-pro-components/resolver'
import NaiveUIProImports from 'naive-ui-pro-components/imports'

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
const NaiveUIProResolver = require('naive-ui-pro-components/resolver')
const NaiveUIProImports = require('naive-ui-pro-components/imports')

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