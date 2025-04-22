import type { DefaultTheme } from 'vitepress'
import path from 'node:path'
import process from 'node:process'
import { transformerTwoslash } from '@shikijs/vitepress-twoslash'
import { defineConfig } from 'vitepress'
import { demoMdPlugin } from 'vitepress-plugin-demo'
import { groupIconMdPlugin } from 'vitepress-plugin-group-icons'
import { version } from '../../package.json'
import vite from './vite.config'

const VERSIONS: (DefaultTheme.NavItemWithLink | DefaultTheme.NavItemChildren)[] = [
  { text: `v${version} (current)`, link: '/' },
  { text: `Release Notes`, link: 'https://github.com/hairyf/naive-ultra/releases' },
  { text: `Contributing`, link: 'https://github.com/hairyf/naive-ultra/blob/main/CONTRIBUTING.md' },
]

const types = [
  'auto-imports.d.ts',
  'components.d.ts',
]

export default defineConfig({
  title: 'Naive Ultra',
  description: 'Make backend development easier',
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
    codeTransformers: [
      transformerTwoslash({
        twoslashOptions: {
          compilerOptions: {
            types: types.map(type => path.resolve(process.cwd(), `./${type}`)),
          },
        },
      }),
    ],
    languages: ['js', 'jsx', 'ts', 'tsx'],
    config: (md) => {
      md.use(groupIconMdPlugin)
      md.use(demoMdPlugin)
    },
  },
  cleanUrls: true,
  vite,
  locales: {
    'root': {
      label: 'English',
      lang: 'en-US',
      themeConfig: useThemeConfig('en-US'),
    },
    'zh-CN': {
      label: '简体中文',
      lang: 'zh-CN',
      themeConfig: useThemeConfig('zh-CN'),
    },
  },
  themeConfig: {
    search: { provider: 'local' },
  },

  head: [
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }],
    ['meta', { name: 'author', content: 'Hairyf' }],
    // ['meta', { property: 'og:title', content: '' }],
    // ['meta', { property: 'og:image', content: '' }],
    ['meta', { property: 'og:description', content: 'Make backend development easier' }],
    // ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    // ['meta', { name: 'twitter:image', content: '' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, viewport-fit=cover' }],
  ],
})

function useThemeConfig(lang = 'en-US') {
  const prefix = lang = lang === 'en-US' ? '' : `/${lang}`

  const GUIDES: DefaultTheme.NavItemWithLink[] = [
    { text: 'Getting Started', link: '/guide/' },
    { text: 'Installation & Usage', link: '/guide/install' },
    { text: 'FAQ', link: `${prefix}/guide/faq` },
  ]
  const COMPONENTS: DefaultTheme.SidebarItem[] = [
    {
      text: 'Form',
      link: `${prefix}/components/form/`,
      items: [
        { text: 'Data Transform', link: `${prefix}/components/form/data-trans` },
        { text: 'Field Component', link: `${prefix}/components/form/field-component` },
        { text: 'Field API', link: `${prefix}/components/form/field-api` },
        { text: 'Field Context', link: `${prefix}/components/form/field-context` },
      ],
      collapsed: false,
    },
    {
      text: 'Pro Table',
      link: `${prefix}/components/table/`,
      items: [
        { text: 'Column Hooks', link: `${prefix}/components/table/form` },
        { text: 'Actions', link: `${prefix}/components/table/actions` },
      ],
      collapsed: false,
    },
    { text: 'Pro Checkbox', link: `${prefix}/components/checkbox/` },
    { text: 'Pro Radio', link: `${prefix}/components/radio/` },
    { text: 'Pro Actions', link: `${prefix}/components/actions/` },
    { text: 'Pro Provider', link: `${prefix}/components/provider/` },
  ]
  const themeConfig: DefaultTheme.Config = {
    // https://vitepress.dev/reference/default-theme-config

    logo: '/logo.svg',
    nav: [
      { text: 'Guide', items: [{ items: GUIDES }] },
      { text: 'Components', items: [{ items: COMPONENTS as any }] },
      { text: `v${version}`, items: VERSIONS },
    ],
    sidebar: [
      { text: 'Guide', items: [{ items: GUIDES }] },
      { text: 'Components', items: [{ items: COMPONENTS }] },
    ],

    editLink: {
      pattern: 'https://github.com/hairyf/naive-ultra/edit/main/docs/:path',
      text: 'Suggest changes to this page',
    },
    search: {
      provider: 'local',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hairyf/naive-ultra' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-PRESENT Hairyf.',
    },
  }
  return themeConfig
}
