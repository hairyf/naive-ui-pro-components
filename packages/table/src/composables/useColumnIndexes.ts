import { nanoid } from 'nanoid'
import type { UnwrapNestedRefs } from 'vue-demi'
import type { OffsetPagination } from './useOffsetPagination'

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
