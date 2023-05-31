import { isFunction, isUndefined, noop } from '@naive-ui-pro/utils'
import { syncRef } from '@vueuse/core'
import type { MaybeRef } from 'vue-demi'
import { computed, reactive, unref } from 'vue-demi'

import type { FormItemConfig, WithFieldConfigExtends } from '../types'
import type { Metadata } from './useMetadata'

export function useValues(metadata: Metadata, initialValues: MaybeRef<WithFieldConfigExtends>) {
  function parse(): Record<string, FormItemConfig> {
    const entries = Object.keys(unref(initialValues)).map((key) => {
      const target = Reflect.get(unref(initialValues), key)
      const option = isFunction(target) ? target(metadata) : target
      // 修复 naive-ui 无法处理 undefined 的情况
      if (isUndefined(option.value))
        option.value = null
      return [key, option]
    })
    return reactive(Object.fromEntries(entries))
  }

  const values = computed<any>({
    get: parse,
    set: noop,
  })

  syncRef(metadata.values, values.value, { direction: 'rtl' })

  return values
}
