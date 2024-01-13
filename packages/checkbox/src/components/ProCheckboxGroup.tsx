import type { ExtractPropTypes, PropType, Ref } from 'vue'
import { computed, defineComponent, isRef } from 'vue'

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

export const NpCheckboxGroup = defineComponent({
  name: 'ProCheckboxGroup',
  props: proCheckboxGroupProps,
  setup(props) {
    const options = computed(() => props.options || [])
    const groupProps = reactiveOmit(props, ['space', 'options'])
    function renderCheckbox(opts: CheckboxMixedOption, i: number) {
      return <NCheckbox
        key={i}
        {...opts}
        ref={
          (inst: any) => isRef(opts.ref)
            ? opts.ref.value = inst
            : opts.ref = inst
        }
      >
        {opts.label || opts.slots?.default?.()}
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

export default NpCheckboxGroup
