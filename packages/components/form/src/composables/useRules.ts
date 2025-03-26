import type { MaybeRef } from '@vueuse/core'
import type { FormItemRule } from 'naive-ui'
import type { FormItemConfig, FormItemConfigWithKey } from '../types'

import { computed, unref } from 'vue'

export function useRules(values: MaybeRef<Record<string, FormItemConfig>>) {
  return computed(() => {
    const entries = Object.keys(unref(values))
      .map((key) => {
        const value = unref(values)[key] as FormItemConfigWithKey
        key = value.key || key
        return [value.key || key, parseRules(key, unref(value.rules), value.validate)]
      })
    return Object.fromEntries(entries)
  })
}

function parseRules(key: string, rules: FormItemRule | FormItemRule[] = [], validate?: MaybeRef<boolean>) {
  if (unref(validate) === false)
    return []
  if (!Array.isArray(rules))
    rules = [rules]
  return rules.map(rule => ({ trigger: 'blur', key, ...rule }))
}
