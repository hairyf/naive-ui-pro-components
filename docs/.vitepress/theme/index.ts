// https://vitepress.dev/guide/custom-theme
import type { EnhanceAppContext } from 'vitepress'
import TwoslashFloating from '@shikijs/vitepress-twoslash/client'
import { NuGlobalProvider } from 'naive-ultra'
import NaiveUIContainer from 'vitepress-plugin-demo/client/naive-ui'
import Theme from 'vitepress/theme'
import { h } from 'vue'
import Outline from './components/Outline/index.vue'

import { codeeditor } from './index.codeeditor'
import '@shikijs/vitepress-twoslash/style.css'
import 'virtual:group-icons.css'
import './style.css'
import './naive-ui.css'
// import 'uno.css'

// @unocss-include
export default {
  ...Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'aside-top': () => h(Outline),
    })
  },
  async enhanceApp({ app }: EnhanceAppContext) {
    if (!import.meta.env.SSR) {
      const { default: NaiveUI } = await import('naive-ui')
      const { default: NaiveUltra } = await import('naive-ultra')
      app.use(NaiveUI)
      app.use(NaiveUltra)
      app.use(NaiveUIContainer, {
        github: 'https://github.com/hairyf/naive-ultra/tree/main',
        codeeditor,
        install: [
          NuGlobalProvider,
        ],
      })
    }

    app.use(TwoslashFloating)
  },
}
