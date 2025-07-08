import type { ImportsMap } from 'unplugin-auto-import/types'

function NaiveUIProImports(): ImportsMap {
  return {
    'naive-ultra': [
      'defineForm',
      'defineTable',
      'defineActions',
      'field',
      'ONLY_RENDER',
      'useColumnIndexes',
      'useColumnLink',
      'useColumns',
    ],
  }
}

export default NaiveUIProImports
