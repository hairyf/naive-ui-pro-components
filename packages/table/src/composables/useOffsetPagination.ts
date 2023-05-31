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

export interface OffsetPagination extends _OffsetPagination {
  total: Ref<number>
}
export interface ServerPaginationResolve extends Partial<UnwrapNestedRefs<OffsetPagination>> {
  currentPageSize: number
  currentPage: number
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
    currentPage,
    currentPageSize,
    pageCount,
    isFirstPage,
    isLastPage,
    prev,
    next,
    total,
  }

  return returnValue as any
}
