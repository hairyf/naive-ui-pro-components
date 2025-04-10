import { fileURLToPath } from 'node:url'
import VueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import Tsconfig from 'vite-tsconfig-paths'
import { groupIconVitePlugin as GroupIconVitePlugin } from 'vitepress-plugin-group-icons'

export default defineConfig({
  plugins: [
    Tsconfig({ projects: [fileURLToPath(new URL('../../tsconfig.json', import.meta.url))] }),
    // UnoCSS(fileURLToPath(new URL('./uno.config.ts', import.meta.url))),
    GroupIconVitePlugin(),
    VueJsx(),
    AutoImport({
      imports: [{
        'naive-ui-pro-components': [
          'defineForm',
          'defineTable',
          'defineControls',
          'field',
          'useColumnIndexes',
          'useColumnLink',
          'useColumns',
        ],
      }],
    }),
    Components({
      resolvers: [{
        type: 'component',
        resolve: (name: string) => {
          if (name.match(/^Np.+/))
            return { name, from: 'naive-ui-pro-components' }
        },
      }],
    }),
  ],
  ssr: {
    noExternal: ['naive-ui', 'vueuc', 'date-fns'],
  },
})
