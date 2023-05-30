// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import './style.css'
import naive from 'naive-ui'
import NaiveUIContainer from './components/NaiveUIContainer/index.vue'
import Outline from './components/Outline/index.vue'

// fix: global is not defined
// fix: document is not defined
if (typeof global !== 'undefined' && !global.document) {
  global.document = {
    querySelector: () => ({}),
    createElement: () => ({}),
  } as any
}
export default {
  ...Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'aside-outline-before': () => h(Outline),
    })
  },
  enhanceApp({ app }) {
    app.use(naive)
    app.component('DemoContainer', NaiveUIContainer)
  },
}
