import type { MaybeRef } from '@vueuse/core'
import { useArrayMap, useArrayReduce } from '@vueuse/core'
import type { TableColumns } from './useColumns'

export function useTableMinWidth(columns: MaybeRef<TableColumns>) {
  const columnWidths = useArrayMap(columns, col => Number(col.width || col.minWidth || 100))
  return useArrayReduce(columnWidths, (acc, cur) => acc + cur, 0)
}
