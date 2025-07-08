# Naive Ultra

Pro Components 是基于 Naive UI 开发的一套高级组件。它提供了更高层次的抽象和封装，具备开箱即用的可用性，并显著提高了创建 CRUD 页面的效率，专注于页面开发。

## Features

- [Ultra Form](/zh-CN/components/form/) 基于对象的函数式编程的表单模板组件，预设常见布局和行为
- [Ultra Table](/zh-CN/components/table/) 抽象网络请求和表格格式化
- [Ultra Actions](/zh-CN/components/actions/) 多场景的表单、表格控件
- [Ultra Checkbox](/zh-CN/components/checkbox/) 组合式复选框
- [Ultra Radio](/zh-CN/components/radio/) 组合式单选框
- [Ultra Provider](/zh-CN/components/provider/) 全局反馈组件挂载与优化
- 开发中...

## 安装

naive-ultra 中的每个组件都是一个独立的包。您也可以安装 `naive-ultra` 来使用所有组件。

```sh
pnpm add @naive-ultra/form
pnpm add @naive-ultra/table

# or

pnpm add naive-ultra
```

## 完整引入

```ts
import NaiveUltra from 'naive-ultra'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.use(NaiveUltra)
```

## 按需导入（推荐）

安装 unplugin-vue-components 和 unplugin-auto-import 这两款插件，它们将自动导入 naive-ultra 的所有组件与 API。

```sh
npm install -D unplugin-vue-components unplugin-auto-import
```

### Vite

```ts
import NaiveUltraImports from 'naive-ultra/imports'
import NaiveUltraResolver from 'naive-ultra/resolver'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
// vite.config.ts
import { defineConfig } from 'vite'

export default defineConfig({
  // ...
  plugins: [
    // ...
    AutoImport({
      imports: [NaiveUltraImports()],
    }),
    Components({
      resolvers: [NaiveUltraResolver()],
    }),
  ],
})
```

### Webpack

```js
const NaiveUltraImports = require('naive-ultra/imports')
const NaiveUltraResolver = require('naive-ultra/resolver')
// webpack.config.js
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')

module.exports = {
  // ...
  plugins: [
    // ...
    AutoImport({
      imports: [NaiveUltraImports()],
    }),
    Components({
      resolvers: [NaiveUltraResolver()],
    }),
  ],
}
```
