import type { Component, FunctionalComponent, PropType, SlotsType, VNode } from 'vue-demi'
import { computed, defineComponent, toRefs } from 'vue-demi'

import { NForm, NFormItem, NFormItemGi, NGrid, formProps } from 'naive-ui'
import { reactiveOmit, reactivePick } from '@vueuse/core'
import { final, render } from '@naive-ui/utils'
import type { FormItemConfig, ProFormInstance } from '../types'
import { renderItemField } from '../utils'

const { rules: _r, model: _m, ...extendsProps } = formProps

export const proFormProps = {
  ...extendsProps,
  instance: {
    type: Object as PropType<ProFormInstance>,
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

export const NProForm = defineComponent({
  name: 'ProForm',
  props: proFormProps,
  slots: {} as SlotsType<{
    toolbars?: () => void
  }>,
  setup(_props, { slots }) {
    const customs = ['grid', 'xGap', 'yGap', 'cols', 'instance', 'toolbars'] as const
    const props = reactivePick(_props, ...customs)
    const _formProps = reactiveOmit(_props, ...customs)

    const {
      _formInstRef, _formItemInstRefs,
      _rules, data, values,
    } = toRefs(props.instance)

    const formProps = computed(() => ({
      rules: _rules.value,
      model: data.value,
      ..._formProps,
    }))

    const gridProps = computed(() => ({
      cols: props.cols,
      xGap: props.xGap,
      yGap: props.yGap,
      itemResponsive: true,
    }))

    const toolbars = computed(() => !!(props.toolbars || slots.toolbars))

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
      return <NForm ref={_formInstRef} {...formProps}>
        {props.grid
          ? <NGrid {...gridProps.value}>{content}</NGrid>
          : content}
      </NForm>
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
        {renderItemField(modal, config, path)}
      </FormItem>
      )
    }

    function renderToolbars() {
      const FormItem = props.grid ? NFormItemGi : NFormItem
      const content = render(props.toolbars) || slots.toolbars?.()

      if (!toolbars.value || !content)
        return null

      // TODO: https://github.com/tusen-ai/naive-ui/issues/4635
      return <FormItem suffix span={6} showLabel={false}>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'right' }}>
        {content}
        </div>
      </FormItem>
    }

    return () => renderForm(<>
      {Object
        .entries(values.value)
        .map(([path, config]) => renderFormItem(path, config))
      }
      {renderToolbars()}
    </>)
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
