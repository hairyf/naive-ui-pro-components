import type { NestedRefs } from '@naive-ui-pro/utils'
import type * as NaiveUI from 'naive-ui'
import type { MaybeRef, Ref, VNodeChild } from 'vue-demi'
import type { ProFormInstance } from './instance'

export interface FormItemDate {
  type?: 'date-picker'
  props?: NestedRefs<NaiveUI.DatePickerProps>
}
export interface FormItemSelect {
  type?: 'select'
  props?: NestedRefs<NaiveUI.SelectProps>
}
export interface FormItemAutoComplete {
  type?: 'auto-complete'
  props?: NestedRefs<NaiveUI.AutoCompleteProps>
}
export interface FormItemCascader {
  type?: 'cascader'
  props?: NestedRefs<NaiveUI.CascaderProps>
}
export interface FormItemInput {
  type?: 'input'
  props?: NestedRefs<NaiveUI.InputProps>
}

export interface FormItemInputNumber {
  type?: 'input-number'
  props?: NestedRefs<NaiveUI.InputNumberProps>
}
export interface FormItemButton {
  type?: 'button'
  props?: NestedRefs<NaiveUI.ButtonProps>
}

export interface FormItemSwitch {
  type?: 'switch'
  props?: NestedRefs<NaiveUI.SwitchProps>
}

export type FormItemComponents =
 FormItemDate |
 FormItemSelect |
 FormItemAutoComplete |
 FormItemCascader |
 FormItemInput |
 FormItemInputNumber |
 FormItemButton |
 FormItemSwitch

export type FormItemDefaultRender = (model: Ref<any>, config: FormItemConfig) => any

export type FormItemConfig<V = any, K = string> = FormItemComponents & {
  /**
   * Initial value of item
   */
  value?: V
  /**
   * when the value is empty, the default value
   */
  defaultValue?: V
  /**
   * form-item label
   */
  label?: string | (() => string)
  /**
   * for custom rendering projects
   * @param model the value of the current form item
   * @param config the config of the current form item
   * @param defaultRender the default render function
   * @returns
   */
  renderItem?: (model: Ref<any>, config: FormItemConfig<V, K>, defaultRender: FormItemDefaultRender) => VNodeChild
  /**
   * transform the value of the current form item
   */
  transform?: (value: V, key: string) => any
  /**
   * current grid-item span
   */
  span?: number | string
  /**
   * form-item rules
   */
  rules?: MaybeRef<NaiveUI.FormItemRule | NaiveUI.FormItemRule[]>
  /**
   * current component placeholder
   */
  placeholder?: string | (() => string)
  /**
   * current form-item props
   */
  formItemProps?: NaiveUI.FormItemGiProps
  /**
   * render current component slots
   */
  slots?: Record<string, any>
  /**
   * whether to receive the value of the current form item
   */
  receive?: false
  /**
   * whether to validate the value of the current form item
   *
   * @default true
   */
  validate?: MaybeRef<boolean>
}

export type FormItemConfigWithKey = (FormItemConfig & { key: string })

export type FormItemFieldConfig<T extends WithFieldConfigExtends> = T & {
  /**
   * set with new config
   */
  withConfig: WithConfig<T>
  /**
   * clone current config
   */
  clone: () => FormItemFieldConfig<T>
  /**
   * clone current config deep
   */
  cloneDeep: () => FormItemFieldConfig<T>
  /**
   * prevent the current form item rules and label
   */
  preventDefault: () => FormItemFieldConfig<T>
  /**
   * prevent the current form item rules required
   */
  preventRequired: () => FormItemFieldConfig<T>
  /**
   * prevent browser from automatically filling
   */
  preventAutofill: () => FormItemFieldConfig<T>
  /**
   * render current form item
   */
  render: () => VNodeChild
}
export type FormItemConfigExport<V = any, K = string> = FormItemConfig<V, K> | ((inst: ProFormInstance) => FormItemConfig<V, K>)

export type WithFieldConfigExtends = FormItemConfig | FormItemConfigWithKey | (() => FormItemConfig | FormItemConfigWithKey)
export type WithFieldConfig<T> = T | ((inst: ProFormInstance) => T)

export type RecordFormItemConfigExport = Record<string, FormItemConfigExport>
export type ArrayFormItemConfigExport = FormItemConfigWithKey[]
export type FormExtendsConfig = RecordFormItemConfigExport | ArrayFormItemConfigExport

export type WithConfig<T extends WithFieldConfigExtends> = (config: WithFieldConfig<FormItemConfig>) => FormItemFieldConfig<T>

export type DecodeValues<T extends RecordFormItemConfigExport> = {
  [key in keyof T]: T[key] extends WithFieldConfig<infer V> ? V : never
}
