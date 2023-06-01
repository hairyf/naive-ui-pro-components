import type { MaybeRef } from 'vue-demi'
import { reactive } from 'vue-demi'

import { useData, useMetadata, useRules, useValues } from '../composables'
import type { FormExtendsConfig, ProFormInstance, RecordFormItemConfigExport } from '../types'

export type DefineFormReturn<T> = T extends RecordFormItemConfigExport ? ProFormInstance<T> : ProFormInstance

export function defineForm<T extends FormExtendsConfig>(initialValues: MaybeRef<T>): DefineFormReturn<T> {
  const metadata = useMetadata()
  const values = useValues(metadata, initialValues)
  const formData = useData(metadata)
  const rules = useRules(values)

  const instance: ProFormInstance = reactive({
    values,
    data: formData.data,
    dataTrans: formData.dataTrans,
    resetFields: formData.resetFields,
    validate: metadata.validate,
    resetValidate: metadata.resetValidate,
    _formInstRef: metadata.formInstRef,
    _formItemInstRefs: metadata.formItemInstRefs,
    _rules: rules,
  })

  return instance as any
}
