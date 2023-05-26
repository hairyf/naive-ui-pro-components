import type { FormInst, FormItemInst, FormRules } from 'naive-ui'
import type { ShouldRuleBeApplied } from 'naive-ui/es/form/src/interface'
import type { Data, TransformData } from './data'

export interface ProFormInst<T = any> {
  values: T
  data: Data<T>
  dataTrans: TransformData<T>
  validate: (filters?: string[] | ShouldRuleBeApplied) => Promise<void>
  resetValidate: (fields?: string[]) => void
  resetFields: (fields?: string[]) => void
  _formInstRef: FormInst | undefined
  _formItemInstRefs: FormItemInst[]
  _rules: FormRules
}
