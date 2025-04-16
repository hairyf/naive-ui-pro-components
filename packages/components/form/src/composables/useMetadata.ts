import type { FormInst, FormItemInst } from 'naive-ui'
import type { ShouldRuleBeApplied } from 'naive-ui/es/form/src/interface'
import type { Ref } from 'vue'
import type { FormItemConfig } from '../types'
import { noop } from '@naive-ultra/utils'
import { reactiveComputed } from '@vueuse/core'
import { ref } from 'vue'

export interface Metadata {
  data: Record<string, any>
  dataTrans: Record<string, any>
  dataRef: Readonly<Ref<any>>
  dataTransRef: Readonly<Ref<any>>
  values: Ref<Record<string, FormItemConfig>>
  validate: (filters?: string[] | ShouldRuleBeApplied) => Promise<void>
  resetValidate: (fields?: string[]) => void
  resetFields: (fields?: string[]) => void
  formInstRef: Ref<FormInst | undefined>
  formItemInstRefs: Ref<FormItemInst[]>
}

export function useMetadata(): Metadata {
  const dataRef = ref<any>({})
  const dataTransRef = ref<any>({})
  const values = ref<any>({})
  const formInstRef = ref<FormInst | undefined>()
  const formItemInstRefs = ref<FormItemInst[]>([])

  function validate(filters?: string[] | ShouldRuleBeApplied) {
    if (!filters)
      return formInstRef.value?.validate() as any
    if (typeof filters === 'function')
      return formInstRef.value?.validate(undefined, filters)

    return formInstRef.value?.validate(undefined, rule => filters.includes(rule.key || ''))
  }

  function resetValidate(paths?: string[]) {
    if (!paths?.length)
      return formInstRef.value?.restoreValidation()
    for (const item of formItemInstRefs.value) {
      if (paths.includes(item.path || ''))
        item.restoreValidation()
    }
  }

  return {
    formInstRef,
    formItemInstRefs,
    data: reactiveComputed(() => dataRef.value),
    dataTrans: reactiveComputed(() => dataTransRef.value),
    dataRef,
    dataTransRef,
    validate,
    values,
    resetValidate,
    resetFields: noop,
  }
}
