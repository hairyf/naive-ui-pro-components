import type { ImportsMap } from 'unplugin-auto-import/types'

function NaiveUIProImports(): ImportsMap {
  return {
    'naive-ui-pro-components': [
      'defineForm',
      'defineTable',
      'defineControls',
      'field',
      'useColumnIndexes',
      'useColumnLink',
      'useColumns',
    ],
  }
}

export default NaiveUIProImports
