import type {
  UseOffsetPaginationReturn as _OffsetPagination,
  UseOffsetPaginationOptions as _OffsetPaginationOptions,
} from '@vueuse/core'
import {
  useOffsetPagination as _useOffsetPagination,
} from '@vueuse/core'

import type { Ref, UnwrapNestedRefs } from 'vue'
import { ref } from 'vue'

export interface OffsetPaginationOptions extends Omit<_OffsetPaginationOptions, 'onPageChange' | 'onPageSizeChange' | 'onPageCountChange'> {
}

export interface OffsetPagination extends Omit<_OffsetPagination, 'currentPage' | 'currentPageSize'> {
  page: Ref<number>
  pageSize: Ref<number>
  total: Ref<number>
}
export interface ServerPaginationResolve extends Partial<UnwrapNestedRefs<OffsetPagination>> {
  page: number
  pageSize: number
}

export function useOffsetPagination(options: _OffsetPaginationOptions = {}): OffsetPagination {
  const total = ref(options.total || 0)
  const {
    currentPage,
    currentPageSize,
    pageCount,
    isFirstPage,
    isLastPage,
    prev,
    next,
  } = _useOffsetPagination({
    total,
    ...options,
  }) as _OffsetPagination

  const returnValue = {
    page: currentPage,
    pageSize: currentPageSize,
    pageCount,
    isFirstPage,
    isLastPage,
    prev,
    next,
    total,
  }

  return returnValue as any
}
