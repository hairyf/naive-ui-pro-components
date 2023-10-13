import type { DefaultTheme } from 'vitepress'
import { defineConfig } from 'vitepress'
import mitDemo from 'markdown-it-vitepress-demo'
import VueJsx from 'unplugin-vue-jsx/vite'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Naive UI Pro Components',
  description: 'Make backend development easier',
  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }],
    ['meta', { name: 'author', content: 'Hairyf' }],
  ],
  markdown: {
    config(md) {
      md.use(mitDemo)
    },
    theme: {
      dark: 'vitesse-dark',
      light: 'vitesse-light',
    },
  },
  vite: {
    plugins: [
      VueJsx({}),
    ],
    ssr: {
      noExternal: ['naive-ui'],
    },
  },
  locales: {
    'root': {
      label: 'English',
      lang: 'en-US',
      themeConfig: defineThemeConfig('en-US'),
    },
    'zh-CN': {
      label: '简体中文',
      lang: 'zh-CN',
      themeConfig: defineThemeConfig('zh-CN'),
    },
  },
})

function defineThemeConfig(lang = 'en-US') {
  const prefix = lang = lang === 'en-US' ? '/' : `/${lang}/`
  const componentsNavOrSidebar = {
    text: 'Components',
    items: [
      { text: 'ProControls', link: `${prefix}components/controls/` },
      { text: 'ProForm', link: `${prefix}components/form/` },
      { text: 'ProTable', link: `${prefix}components/table/` },
      { text: 'ProCheckbox', link: `${prefix}components/checkbox/` },
      { text: 'ProRadio', link: `${prefix}components/radio/` },
      { text: 'ProGlobals', link: `${prefix}components/globals/` },
    ],
  }
  const themeConfig: DefaultTheme.Config = {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: prefix },
      { text: 'Docs', link: `${prefix}docs/intro` },
      componentsNavOrSidebar,
    ],
    sidebar: [
      {
        text: 'Docs',
        items: [
          { text: 'Introduction', link: `${prefix}docs/intro` },
          { text: 'Quick Start', link: `${prefix}docs/` },
          { text: 'FAQ', link: `${prefix}docs/faq` },
        ],
      },
      componentsNavOrSidebar,
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/hairyf/naive-ui-pro-components' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-PRESENT Hairyf contributors',
    },
    outline: false,
  }
  return themeConfig
}
