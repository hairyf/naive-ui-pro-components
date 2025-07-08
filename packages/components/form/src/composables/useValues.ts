import type { MaybeRef } from '@vueuse/core'
import type { FieldConfigExtends, FormItemConfig } from '../types'
import type { Metadata } from './useMetadata'
import { isFunction, isUndefined, noop } from '@naive-ultra/utils'

import { syncRef } from '@vueuse/core'
import { computed, reactive, unref } from 'vue'

export function useValues(metadata: Metadata, initialValues: MaybeRef<FieldConfigExtends | FormItemConfig[]>) {
  function parse(): Record<string, FormItemConfig> {
    const values = unref(initialValues)
    const entries = Object.keys(values).map((key) => {
      const target = Reflect.get(values, key)
      const option = isFunction(target)
        ? target(metadata)
        : target
      // 修复 naive-ui 无法处理 undefined 的情况
      if (isUndefined(option.value))
        option.value = null
      return [option.key ?? key, option]
    })
    return reactive(Object.fromEntries(entries))
  }

  const values = computed<any>({
    get: parse,
    set: noop,
  })

  syncRef(metadata.values, values.value, { direction: 'rtl' } as any)

  return values
}
