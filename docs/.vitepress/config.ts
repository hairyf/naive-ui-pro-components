import type { DefaultTheme } from 'vitepress'
import { defineConfig } from 'vitepress'
import mitVitepressDemo from 'markdown-it-vitepress-demo'
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
      md.use(mitVitepressDemo)
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
    // fix: https://github.com/vuejs/vitepress/issues/1905
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
  const themeConfig: DefaultTheme.Config = {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: lang === 'en-US' ? '/' : `/${lang}/` },
      { text: 'Docs', link: `/${lang}/docs/intro` },
      {
        text: 'Components',
        items: [
          { text: 'ProForm', link: `/${lang}/components/form/` },
          { text: 'ProTable', link: `/${lang}/components/table/` },
          { text: 'ProControls', link: `/${lang}/components/controls/` },
          { text: 'Globals', link: `/${lang}/components/globals/` },
        ],
      },
    ],
    search: {
      provider: 'local',
    },
    sidebar: [
      {
        text: 'Docs',
        items: [
          { text: 'Introduction', link: `/${lang}/docs/intro` },
          { text: 'Quick Start', link: `/${lang}/docs/` },
        ],
      },
      {
        text: 'Components',
        items: [
          { text: 'ProForm', link: `/${lang}/components/form/` },
          { text: 'ProTable', link: `/${lang}/components/table/` },
          { text: 'ProControls', link: `/${lang}/components/controls/` },
          { text: 'Globals', link: `/${lang}/components/globals/` },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-PRESENT Hairyf contributors',
    },
    outline: false,
  }
  return themeConfig
}
