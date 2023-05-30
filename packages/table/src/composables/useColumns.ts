import { final } from '@naive-ui/utils'
import type { InternalRowData, TableExpandColumn, TableSelectionColumn, TableBaseColumn as _TableBaseColumn, TableColumnGroup as _TableColumnGroup } from 'naive-ui/es/data-table/src/interface'
import type { MaybeRef, Ref } from 'vue'
import { computed, unref } from 'vue'

export interface TableBaseColumn<T> extends _TableBaseColumn<T> {
  disabled?: boolean | Ref<boolean> | ((row: T, index: number) => boolean)
  text?: string | ((row: T, index: number) => string)
}

export type TableColumnGroup<T = InternalRowData> = _TableColumnGroup<T> & {
  disabled?: TableBaseColumn<T>['disabled']
  text?: TableBaseColumn<T>['text']
}

export type TableColumn<T = InternalRowData> = TableColumnGroup<T> | TableBaseColumn<T> | TableSelectionColumn<T> | TableExpandColumn<T>
export type TableColumns<T = InternalRowData> = Array<TableColumn<T>>

export function useColumns<T>(columns: MaybeRef<TableColumns<T>>) {
  const value = computed(() => {
    return unref(columns).filter(col => !final(col.disabled))
      .map(col => ({ minWidth: 120, ...col }))
  })
  return value
}

export function useColumn(columns: MaybeRef<TableColumns<any>>, key: string) {
  return unref(columns).find((v: any) => v.key === key)!
}
