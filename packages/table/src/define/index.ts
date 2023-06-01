import type { Ref } from 'vue'
import { reactive, ref, watch } from 'vue'

import { useAsyncCallback } from '@naive-ui-pro/utils'
import { useDebounceFn } from '@vueuse/core'
import type { OffsetPaginationOptions, ServerPaginationResolve } from '../composables'
import { useMetadata } from '../composables'
import type { ProTableInstance, ProTableRequest } from '../types'

export interface DefineTableOptions<T> extends OffsetPaginationOptions {
  request: ProTableRequest<T>
  watcher?: any[]
  immediate?: boolean
}

export function defineTable<T extends any[]>(options: DefineTableOptions<T>): ProTableInstance<T> {
  const { firstPage, pagination, tableInstRef } = useMetadata(options)
  const data = ref<any>([]) as Ref<T>
  const { immediate = true } = options

  const [request, loading] = useAsyncCallback(
    async (_pagination?: ServerPaginationResolve) => {
      if (typeof _pagination?.page === 'undefined')
        pagination.page.value = firstPage.value
      const result = await options.request(reactive(pagination))
      pagination.total.value = result.total
      data.value = result.data
    },
  )

  const search = useDebounceFn(request, 50)
  const reset = useDebounceFn(() => request(), 50)
  const requestAll = () => requestAllData(options.request)

  watch(pagination.page, (newValue, oldValue) => {
    if (newValue !== oldValue)
      search(reactive(pagination))
  })

  watch(pagination.pageSize, () => {
    search(reactive(pagination))
  })

  if (options.watcher)
    watch(options.watcher, () => reset())

  if (immediate)
    reset()

  return reactive({
    _tableInstRef: tableInstRef,
    data,
    loading,
    search,
    request: options.request,
    reset,
    requestAll,
    pagination: reactive(pagination),
    prev: pagination.prev,
    next: pagination.next,
  })
}

async function requestAllData<T>(request: DefineTableOptions<T>['request']) {
  const pagination = { page: 1, pageSize: 1000 }
  let length = Infinity
  const data: any[] = []
  while (length > 1000) {
    const result = await request(pagination as any)
    const array = result.data as unknown as any[] || []
    data.push(...array)
    length = array.length
    pagination.page++
  }
  return data as unknown as T
}
