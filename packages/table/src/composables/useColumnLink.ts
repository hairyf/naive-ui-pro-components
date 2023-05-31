import { NButton } from 'naive-ui'
import { h } from 'vue-demi'
import type { TableBaseColumn, TableColumn } from './useColumns'

export function useColumnLink<T = any>(linkKey: string, column: Partial<TableBaseColumn<T>>): TableColumn<T> {
  return {
    key: linkKey,
    ...column,
    render: (row: any, index) => {
      const content = column.render?.(row, index) || row[column.key || linkKey]
      if (content === '-' || !content)
        return '-'
      if (!row[linkKey])
        return content
      return h(NButton,
        { tag: 'a', href: row[linkKey], target: '_blank', text: true, type: 'primary' },
        { default: () => content },
      )
    },
  }
}
