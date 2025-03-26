import type { Component, FunctionalComponent, PropType, VNode } from 'vue'
import type { FormItemConfig, ProFormInstance } from '../types'

import { final, render } from '@naiveui-pro/utils'
import { reactiveOmit, reactivePick } from '@vueuse/core'
import { formProps, NForm, NFormItem, NFormItemGi, NGrid } from 'naive-ui'
import { computed, defineComponent, toRefs } from 'vue'
import { renderItemField } from '../utils'

const { rules: _r, model: _m, ...extendsProps } = formProps

export const proFormProps = {
  ...extendsProps,
  is: {
    type: Object as PropType<ProFormInstance<any>>,
    required: true as const,
  },
  cols: {
    type: Number,
    default: 24,
  },
  xGap: {
    type: Number,
    default: 12,
  },
  yGap: {
    type: Number,
    default: 0,
  },
  grid: {
    type: Boolean,
    default: true,
  },
  toolbars: [
    String,
    Number,
    Object,
    Boolean,
    Function,
  ] as PropType<
    | Component
    | FunctionalComponent
    | string
    | number
    | VNode
    | boolean
  >,
}

export const NpForm = defineComponent({
  name: 'ProForm',
  props: proFormProps,
  setup(_props, { slots }) {
    const customs = ['grid', 'xGap', 'yGap', 'cols', 'is', 'toolbars'] as const
    const props = reactivePick(_props, ...customs)
    const formProps = reactiveOmit(_props, ...customs)

    const {
      _formInstRef,
      _formItemInstRefs,
      _rules,
      data,
      values,
    } = toRefs(props.is)

    const gridProps = computed(() => ({
      cols: props.cols,
      xGap: props.xGap,
      yGap: props.yGap,
      itemResponsive: true,
    }))

    const toolbars = computed(() => props.toolbars === '' || !!(props.toolbars || slots.toolbars))

    function spawnItemProps(path: string, config: FormItemConfig) {
      return {
        label: final(config.label),
        showLabel: !!config.label,
        path,
        span: spawnSpan(config, toolbars.value),
        ...config.formItemProps,
      }
    }

    function renderForm(content: VNode | VNode[]) {
      return (
        <NForm ref={_formInstRef} model={data.value} rules={_rules.value} {...formProps}>
          {props.grid
            ? <NGrid {...gridProps.value}>{content}</NGrid>
            : content}
        </NForm>
      )
    }

    function renderFormItem(path: string, config: FormItemConfig) {
      const FormItem = props.grid ? NFormItemGi : NFormItem
      const modal = computed({
        get: () => data.value[path],
        set: v => data.value[path] = v,
      })
      return (
        <FormItem
          ref={_formItemInstRefs}
          key={path}
          {...spawnItemProps(path, config)}
        >
          {{
            default: () => renderItemField(modal, config, path),
            ...config.formItemSlots,
          }}
        </FormItem>
      )
    }

    function renderToolbars() {
      const FormItem = props.grid ? NFormItemGi : NFormItem
      const content = render(props.toolbars) || slots.toolbars?.()

      if (!toolbars.value || !content)
        return null

      // TODO: https://github.com/tusen-ai/naive-ui/issues/4635
      return (
        <FormItem suffix span={6} showLabel={false}>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'right' }}>
            {content}
          </div>
        </FormItem>
      )
    }

    return () => renderForm(
      <>
        {Object
          .entries(values.value)
          .map(([path, config]) => renderFormItem(path, config))}
        {renderToolbars()}
      </>,
    )
  },
})

function spawnSpan(config: FormItemConfig, toolbars = false) {
  if (!toolbars)
    return config.span || 24

  if (config.props?.type === 'datetimerange')
    return '0:24 742:12 1394:8'
  if (config.props?.type === 'daterange')
    return '0:24 742:12 1394:4'

  return '0:24 742:6 1394:4'
}
