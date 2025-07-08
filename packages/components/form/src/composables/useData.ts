import type { DeepReadonly } from 'vue'
import type { Data, TransformData } from '../types'
import type { Metadata } from './useMetadata'
import { noop } from '@naive-ultra/utils'
import { syncRef } from '@vueuse/core'
import { computed, reactive } from 'vue'

export function useData(metadata: Metadata) {
  const { values, data, dataTrans } = metadata

  const dataRef = computed({
    get: () => parse(values),
    set: noop,
  })

  const dataTransRef = computed(() => parseTrans(values).value)

  const dataFirst = JSON.stringify(dataRef.value)

  function resetFields(paths?: string[]) {
    const cloneFirst = JSON.parse(dataFirst)
    paths ??= Object.keys(dataRef.value)
    for (const key of paths)
      dataRef.value[key] = cloneFirst[key] ?? null
  }

  syncRef(metadata.dataRef, dataRef, { direction: 'rtl' })
  syncRef(metadata.dataTransRef, dataTransRef, { direction: 'rtl' })
  metadata.resetFields = resetFields

  return {
    resetFields,
    data,
    dataTrans,
    dataRef,
    dataTransRef,
  }
}

function parse(values: Metadata['values']): Data<any> {
  const entries = Object.entries(values.value)
    .filter(([key]) => typeof key === 'symbol')
    .map(([key]) => key)
    .map((key) => {
      return [
        key,
        computed({
          get: () => values.value[key].value,
          set: v => (values.value[key].value = v),
        }),
      ]
    })

  return reactive(Object.fromEntries(entries))
}

function parseTrans(values: Metadata['values']) {
  return computed(() => {
    const target: Record<string, any> = {}
    for (const key in values.value) {
      const { value, transform } = values.value[key]
      if (typeof key === 'symbol')
        continue
      if (transform)
        Object.assign(target, transform(value, key))
      else
        target[key] = value
    }
    return target as DeepReadonly<TransformData<any>>
  })
}
