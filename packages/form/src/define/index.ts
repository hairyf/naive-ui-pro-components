import type { MaybeRef } from 'vue-demi'
import { reactive } from 'vue-demi'
import { useData, useMetadata, useRules, useValues } from '../composables'
import type { ProFormInst, RecordFormItemConfigExport } from '../types'

export function defineForm<T extends RecordFormItemConfigExport>(initialValues: MaybeRef<T>): ProFormInst {
  const metadata = useMetadata()
  const values = useValues(metadata, initialValues)
  const formData = useData(metadata)
  const rules = useRules(values)

  const instance: ProFormInst = reactive({
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

  return instance
}
