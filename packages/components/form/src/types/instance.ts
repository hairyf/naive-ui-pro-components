import type { FormInst, FormItemInst, FormRules } from 'naive-ui'
import type { ShouldRuleBeApplied } from 'naive-ui/es/form/src/interface'
import type { DecodeValues, RecordFormItemConfigExport } from './config'
import type { Data, TransformData } from './data'

export interface ProFormInstance<T extends RecordFormItemConfigExport = RecordFormItemConfigExport> {
  values: DecodeValues<T>
  data: Data<T>
  dataTrans: TransformData<T>
  validate: (filters?: string[] | ShouldRuleBeApplied) => Promise<void>
  resetValidate: (fields?: string[]) => void
  resetFields: (fields?: string[]) => void
  _formInstRef: FormInst | undefined
  _formItemInstRefs: FormItemInst[]
  _rules: FormRules
}
