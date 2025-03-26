import { fileURLToPath } from 'node:url'
import VueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vite'
import Tsconfig from 'vite-tsconfig-paths'
import { groupIconVitePlugin as GroupIconVitePlugin } from 'vitepress-plugin-group-icons'

export default defineConfig({
  plugins: [
    Tsconfig({ projects: [fileURLToPath(new URL('../../tsconfig.json', import.meta.url))] }),
    // UnoCSS(fileURLToPath(new URL('./uno.config.ts', import.meta.url))),
    GroupIconVitePlugin(),
    VueJsx(),
  ],
})
