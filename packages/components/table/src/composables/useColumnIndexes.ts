import type { UnwrapNestedRefs } from 'vue'
import type { OffsetPagination } from './useOffsetPagination'
import { nanoid } from 'nanoid'

export function useColumnIndexes(pagination: UnwrapNestedRefs<OffsetPagination>) {
  return {
    key: nanoid(5),
    title: '#',
    render: (_: any, rowIndex: number) => {
      return rowIndex + 1 + ((pagination.page - 1) * pagination.pageSize)
    },
    fixed: 'left' as const,
  }
}
