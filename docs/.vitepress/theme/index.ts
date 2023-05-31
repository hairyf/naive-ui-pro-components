// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import './style.css'
import NaiveUIContainer from './components/NaiveUIContainer/index.vue'
import Outline from './components/Outline/index.vue'

export default {
  ...Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'aside-outline-before': () => h(Outline),
    })
  },
  async enhanceApp({ app }) {
    if (!import.meta.env.SSR) {
      const { default: NaiveUI } = await import('naive-ui')
      const { default: NaiveUIProComponents } = await import('naive-ui-pro-components')
      app.use(NaiveUI)
      app.use(NaiveUIProComponents)
    }
    app.component('DemoContainer', NaiveUIContainer)
  },
}
