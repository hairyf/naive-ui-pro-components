import type { DefaultTheme } from 'vitepress'
import { defineConfig } from 'vitepress'
import { componentPreview, containerPreview } from '@vitepress-demo-preview/plugin'

// 组件绝对路径
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
            text: 'Form',
            link: `/${lang}/components/form`,
            collapsed: true,
            items: [
              { text: 'Field', link: `/${lang}/components/form-field` },
              { text: 'Toolbars', link: `/${lang}/components/form-toolbars` },
            ],
          },
          {
            text: 'Table',
            link: `/${lang}/components/table`,
            collapsed: true,
            items: [
              { text: 'Columns', link: `/${lang}/components/table-columns` },
            ],
          },
          {
            text: 'Controls',
            link: `/${lang}/components/controls`,
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
      md.use(containerPreview)
      md.use(componentPreview)
    },
    theme: {
      dark: 'vitesse-dark',
      light: 'vitesse-light',
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
