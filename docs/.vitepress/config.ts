import { DefaultTheme, defineConfig } from 'vitepress'

function defineThemeConfig(lang = 'en-US') {
  const themeConfig: DefaultTheme.Config = {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: lang === 'en-US' ? '/' : `/${lang}/` },
      { text: 'Docs', link: `/${lang}/docs/intro` },
      { text: 'Components', link: `/${lang}/components` },
    ],
    search: {
      provider: 'local'
    },
    sidebar: [
      {
        text: 'Docs',
        items: [
          { text: 'Introduction', link: `/${lang}/docs/intro` },
          { text: 'Quick Start', link: `/${lang}/docs/` }
        ]
      },
      {
        text: 'Components',
        items: [
          { text: 'Global Feedbacks', link: `/${lang}/components/global-feedbacks` },
          { text: 'Pro Form', link: `/${lang}/components/pro-form` },
          { text: 'Pro Form Field', link: `/${lang}/components/pro-form-field` },
          { text: 'Pro Form Toolbars', link: `/${lang}/components/pro-form-toolbars` },
          { text: 'Pro Table', link: `/${lang}/components/pro-table` },
          { text: 'Pro Table Controls', link: `/${lang}/components/pro-table-controls` },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-PRESENT Hairyf contributors',
    }
  }

  return themeConfig
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Naive UI Pro Components",
  description: "Make backend development easier",
  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }],
    ['meta', { name: 'author', content: 'Hairyf' }],
  ],
  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      themeConfig: defineThemeConfig('en-US')
    },
    'zh-CN': {
      label: '简体中文',
      lang: 'zh-CN',
      themeConfig: defineThemeConfig('zh-CN')
    }
  },
})
