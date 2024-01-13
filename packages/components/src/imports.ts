import type { ImportsMap } from 'unplugin-auto-import/types'

function NaiveUIProImports(): ImportsMap {
  return {
    'naive-ui-pro-components': [
      'defineForm',
      'defineTable',
      'field',
      'useColumnIndexes',
      'useColumnLink',
      'useColumns',
      'useControls',
    ],
  }
}

export default NaiveUIProImports
