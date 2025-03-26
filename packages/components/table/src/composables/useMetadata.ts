/* eslint-disable ts/ban-ts-comment */
import type { DataTableInst } from 'naive-ui'
import type { ColumnKey, FilterState } from 'naive-ui/es/data-table/src/interface'
import type { DefineTableOptions } from '../define'
import { ref } from 'vue'
import { useOffsetPagination } from './useOffsetPagination'

export function useMetadata(options: DefineTableOptions) {
  const tableInstRef = ref<DataTableInst | undefined>()
  const firstPage = ref(options.pagination?.page || 1)
  const pagination = useOffsetPagination({ ...options.pagination })

  function clearFilters() {
    tableInstRef.value?.clearFilters()
  }
  function clearSorter() {
    tableInstRef.value?.clearSorter()
  }
  function filters(filters: FilterState | null) {
    tableInstRef.value?.filters(filters)
  }
  function scrollTo(...args: any[]) {
    // @ts-expect-error
    tableInstRef.value?.scrollTo(...args)
  }
  function sort(columnKey: ColumnKey, order: 'ascend' | 'descend' | false) {
    tableInstRef.value?.sort(columnKey, order)
  }

  return {
    tableInstRef,
    pagination,
    clearFilters,
    clearSorter,
    filters,
    firstPage,
    scrollTo,
    sort,
  }
}
