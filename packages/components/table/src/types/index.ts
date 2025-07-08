import type { PromisifyFn } from '@vueuse/core'
import type { DataTableInst } from 'naive-ui'
import type { UnwrapNestedRefs } from 'vue'
import type { OffsetPagination, ServerPaginationResolve } from '../composables'

export interface ScrollTo {
  (x: number, y: number): void
  (options: {
    left?: number
    top?: number
    behavior?: ScrollBehavior
  }): void
}

export interface DataResolved<T> {
  data: T
  total: number
}

export interface UltraTableRequest<T> {
  (pagination: ServerPaginationResolve): DataResolved<T> | Promise<DataResolved<T>>
}

export interface UltraTableInstance<T = any[]> {
  data: T
  loading: boolean
  pagination: UnwrapNestedRefs<OffsetPagination>
  next: () => void
  prev: () => void
  request: UltraTableRequest<T>
  requestAll: () => Promise<T>
  search: PromisifyFn<(pagination?: ServerPaginationResolve) => void>
  reset: PromisifyFn<() => void>
  _tableInstRef: DataTableInst | undefined
}
