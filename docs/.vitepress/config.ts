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
      { text: 'Components', link: `/${lang}/components` },
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
          {
            text: 'Form Pro',
            link: `/${lang}/components/form`,

          },
          { text: 'Form Field', link: `/${lang}/components/form-field` },
          { text: 'Form Toolbars', link: `/${lang}/components/form-toolbars` },
          { text: 'Table Pro', link: `/${lang}/components/table` },
          { text: 'Table Columns', link: `/${lang}/components/table-columns` },

          {
            text: 'Controls',
            link: `/${lang}/components/controls/`,
          },
          {
            text: 'Modal',
            link: `/${lang}/components/modal`,
          },
        ],
      },
      {
        text: 'Globals',
        items: [
          { text: 'Feedbacks', link: `/${lang}/globals/feedbacks` },
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
  }

  return themeConfig
}
