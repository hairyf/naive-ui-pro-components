import type { UltraCheckboxGroupProps } from '@naive-ultra/checkbox'
import type { UltraRadioGroupProps } from '@naive-ultra/radio'
import type { NestedRefs } from '@naive-ultra/utils'
import type { MaybeRef } from '@vueuse/core'
import type * as NaiveUI from 'naive-ui'
import type { Ref, VNodeChild } from 'vue'
import type { UltraFormInstance } from './instance'

export interface FormItemDate {
  type?: 'date-picker'
  props?: NestedRefs<NaiveUI.DatePickerProps>
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

export interface FormItemRate {
  type?: 'rate'
  props?: NestedRefs<NaiveUI.RateProps>
}

export interface FormItemSlider {
  type?: 'slider'
  props?: NestedRefs<NaiveUI.SliderProps>
}

export interface FormItemTimePicker {
  type?: 'time-picker'
  props?: NestedRefs<NaiveUI.TimePickerProps>
}

export interface FormItemSelect {
  type?: 'select'
  options?: MaybeRef<NaiveUI.SelectProps['options']>
  props?: NestedRefs<NaiveUI.SelectProps>
}

export interface FormItemCheckboxGroup {
  type?: 'checkbox-group'
  options?: MaybeRef<UltraCheckboxGroupProps['options']>
  props?: NestedRefs<UltraCheckboxGroupProps>
}

export interface FormItemRadioGroup {
  type?: 'radio-group'
  options?: MaybeRef<UltraRadioGroupProps['options']>
  props?: NestedRefs<UltraRadioGroupProps>
}
export interface FormItemMention {
  type?: 'mention'
  options?: MaybeRef<NaiveUI.MentionProps['options']>
  props?: NestedRefs<NaiveUI.MentionProps>
}

export type FormItemComponents
  = FormItemDate
    | FormItemSelect
    | FormItemAutoComplete
    | FormItemCascader
    | FormItemInput
    | FormItemInputNumber
    | FormItemButton
    | FormItemSwitch
    | FormItemCheckboxGroup
    | FormItemRadioGroup
    | FormItemRate
    | FormItemSlider
    | FormItemTimePicker
    | FormItemMention

export type FormItemDefaultRender = (model: Ref<any>, config: FormItemConfig) => any

export type FormItemConfig<V = any, K = string, T = unknown> = FormItemComponents & {
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
  transform?: (value: V, key: string) => T
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

  formItemSlots?: Record<string, any>
  /**
   * render current component slots
   */
  slots?: Record<string, any>
  /**
   * whether to validate the value of the current form item
   *
   * @default true
   */
  validate?: MaybeRef<boolean>
}

export type FormItemConfigWithKey = (FormItemConfig & { key: string })

export type Field<V, T> = FormItemConfig<V, string, T> & {
  /**
   * set with new config
   */
  config: FieldConfigFn<V, T>
  /**
   * clone current config
   */
  clone: () => Field<V, T>
  /**
   * clone current config deep
   */
  cloneDeep: () => Field<V, T>
  /**
   * prevent the current form item rules and label
   */
  preventDefault: () => Field<V, T>
  /**
   * prevent the current form item rules required
   */
  preventRequired: () => Field<V, T>
  /**
   * prevent browser from automatically filling
   */
  preventAutofill: () => Field<V, T>
  /**
   * render current form item
   */
  render: () => VNodeChild
}

export type FormItemConfigExport<V = any, K = string> = FormItemConfig<V, K> | ((inst: UltraFormInstance) => FormItemConfig<V, K>)

export type FieldConfigExtends<V = any> = FormItemConfig<V> | FormItemConfigWithKey | (() => FormItemConfig<V> | FormItemConfigWithKey)
export type FieldConfig<V = any, T = unknown> = FormItemConfig<V, string, T> | ((config: UltraFormInstance) => FormItemConfig<V, string, T>)

export type RecordFormItemConfigExport = Record<string, FormItemConfigExport>
export type ArrayFormItemConfigExport = FormItemConfigWithKey[]
export type FormExtendsConfig = RecordFormItemConfigExport | ArrayFormItemConfigExport

export type FieldConfigFn<V, T> = (config: FieldConfig<V, T>) => Field<V, T>

export type DecodeValues<T extends RecordFormItemConfigExport> = {
  [key in keyof T]: T[key] extends FormItemConfig ? FormItemConfig : never
}
