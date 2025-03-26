import type { NaiveUIContainerOptions } from 'vitepress-plugin-demo/client/naive-ui'
import { indexHtml, srcMainTs, viteConfigJs } from './index.codeeditor.files'

export const codeeditor: NaiveUIContainerOptions['codeeditor'] = {
  editors: ['stackblitz', 'codesandbox'],
  globals: {
    package: {
      scripts: { start: 'vite' },
      dependencies: {
        'naive-ui-pro-components': 'latest',
        'vue': 'latest',
      },
      devDependencies: {
        'unplugin-vue-components': 'latest',
        'unplugin-auto-import': 'latest',
        '@vitejs/plugin-vue': 'latest',
        'typescript': 'latest',
        'vite': 'latest',
      },
    },
    files: {
      'vite.config.js': { content: viteConfigJs },
      'src/main.ts': { content: srcMainTs },
      'index.html': { content: indexHtml },
    },
  },
  resolve(props) {
    const content = decodeURIComponent(props.tsCode || props.jsCode)
    return {
      opens: ['src/App.vue'],
      files: {
        'src/App.vue': { content },
      },
    }
  },
}
