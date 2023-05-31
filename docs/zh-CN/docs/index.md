# Naive UI Pro Components

Pro Components 是基于 Naive UI 开发的一套高级组件。它提供了更高层次的抽象和封装，具备开箱即用的可用性，并显著提高了创建 CRUD 页面的效率，专注于页面开发。

## Features

- [ProForm](/zh-CN/components/form/) 基于对象的函数式编程的表单模板组件，预设常见布局和行为
- [ProTable](/zh-CN/components/table/) 抽象网络请求和表格格式化
- [ProControls](/zh-CN/components/controls/) 多场景的表单、表格控件
- [ProGlobals](/zh-CN/components/globals/) 全局反馈组件挂载、优化
- 开发中...

## 安装

pro-components 中的每个组件都是一个独立的包。您也可以安装 `naive-ui-pro-components` 来使用所有组件。

```sh
pnpm add @naive-ui-pro/form
pnpm add @naive-ui-pro/table

# or

pnpm add naive-ui-pro-components
```

## 完整引入

```ts
import { createApp } from 'vue'
import NaiveUIProComponents from 'naive-ui-pro-components'
import App from './App.vue'

const app = createApp(App)

app.use(NaiveUIProComponents)
```

## 按需导入（推荐）

安装 unplugin-vue-components 和 unplugin-auto-import 这两款插件，它们将自动导入 naive-ui-pro-components 的所有组件与 API。

```sh
npm install -D unplugin-vue-components unplugin-auto-import
```

### Vite

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import NaiveUIProResolves from 'naive-ui-pro-components/resolvers'

export default defineConfig({
  // ...
  plugins: [
    // ...
    AutoImport({
      resolvers: [NaiveUIProResolves()],
    }),
    Components({
      resolvers: [NaiveUIProResolves()],
    }),
  ],
})
```

### Webpack

```js
// webpack.config.js
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const NaiveUIProResolves = require('naive-ui-pro-components/resolvers')

module.exports = {
  // ...
  plugins: [
    AutoImport({
      resolvers: [NaiveUIProResolves()],
    }),
    Components({
      resolvers: [NaiveUIProResolves()],
    }),
  ],
}
```

<!-- <demo title="Using in a project" src="./demo/basic.vue" /> -->