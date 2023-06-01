import type { FormItemRule } from 'naive-ui'
import type { MaybeRef } from 'vue'
import { computed, unref } from 'vue'

import type { FormItemConfig } from '../types'

export function useRules(values: MaybeRef<Record<string, FormItemConfig>>) {
  return computed(() => {
    const entries = Object.keys(unref(values))
      .map((key) => {
        const { rules, validate } = unref(values)[key]
        return [key, parseRules(key, unref(rules), validate)]
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
