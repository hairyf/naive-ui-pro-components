import type { ExtractPropTypes, PropType, Ref } from 'vue'
import { computed, defineComponent, isRef, toRef } from 'vue'

import type { CheckboxInst, CheckboxProps, SpaceProps } from 'naive-ui'
import { NCheckbox, NCheckboxGroup, NSpace, checkboxGroupProps } from 'naive-ui'
import { reactiveOmit } from '@vueuse/core'

export const proCheckboxGroupProps = {
  ...checkboxGroupProps,
  options: Array as PropType<CheckboxMixedOption[]>,
  space: Object as PropType<SpaceProps>,
}

export type ProCheckboxGroupProps = ExtractPropTypes<typeof proCheckboxGroupProps>

export interface CheckboxMixedOption extends CheckboxProps {
  slots?: Record<string, () => JSX.Element | undefined>
  ref?: CheckboxInst | undefined | Ref<CheckboxInst | undefined>
}

export const NProCheckboxGroup = defineComponent({
  name: 'ProCheckboxGroup',
  props: proCheckboxGroupProps,
  setup(props) {
    const options = computed(() => props.options || [])
    const groupProps = reactiveOmit(props, ['space', 'options'])
    function renderCheckbox(options: CheckboxMixedOption, i: number) {
      const { slots, ref: _ref, ...rest } = options
      const ref = isRef(_ref) ? _ref : toRef(options, 'ref')
      return <NCheckbox
        key={i}
        ref={ref}
        {...rest}
      >
        {{
          default: () => rest.label,
          ...slots,
        }}
      </NCheckbox>
    }
    return () => (
      <NCheckboxGroup {...groupProps}>
        <NSpace {...props.space}>
          {options.value.map(renderCheckbox)}
        </NSpace>
      </NCheckboxGroup>
    )
  },
})

export default NProCheckboxGroup
