import type { ComponentResolver } from 'unplugin-vue-components/types'
import type { ImportsMap } from 'unplugin-auto-import/types'

export function NaiveUiResolver(): ComponentResolver {
  return {
    type: 'component',
    resolve: (name: string) => {
      if (name.match(/^NPro.+/))
        return { name, from: 'naive-ui-pro-components' }
      if (name.match(/^NGlobal.+/))
        return { name, from: 'naive-ui-pro-components' }
      if (name.match(/^NInstall.+/))
        return { name, from: 'naive-ui-pro-components' }
    },
  }
}

export function NaiveUIImports(): ImportsMap {
  return {
    'naive-ui-pro-components': [
      'defineForm',
      'defineTable',
      'field',
      'useColumnIndexes',
      'useColumnLink',
      'useColumns',
      'defineControls',
    ],
  }
}
