// https://vitepress.dev/guide/custom-theme
import type { EnhanceAppContext } from 'vitepress'
import TwoslashFloating from '@shikijs/vitepress-twoslash/client'
import { NpGlobalProvider } from 'naive-ui-pro-components'
import NaiveUIContainer from 'vitepress-plugin-demo/client/naive-ui'
import Theme from 'vitepress/theme'
import { h } from 'vue'
import Outline from './components/Outline/index.vue'

import { codeeditor } from './index.codeeditor'
import '@shikijs/vitepress-twoslash/style.css'
import 'virtual:group-icons.css'
import './style.css'

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
      const { default: NaiveUIProComponents } = await import('naive-ui-pro-components')
      app.use(NaiveUI)
      app.use(NaiveUIProComponents)
    }
    app.use(NaiveUIContainer, {
      github: 'https://github.com/hairyf/naive-ui-pro-components/tree/main',
      codeeditor,
      install: [
        NpGlobalProvider,
      ],
    })
    app.use(TwoslashFloating)
  },
}
