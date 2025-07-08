import type { CheckboxInst, CheckboxProps, SpaceProps } from 'naive-ui'
import type { ExtractPropTypes, PropType, Ref } from 'vue'

import type { JSX } from 'vue/jsx-runtime'
import { reactiveOmit } from '@vueuse/core'
import { checkboxGroupProps, NCheckbox, NCheckboxGroup, NSpace } from 'naive-ui'
import { computed, defineComponent, isRef } from 'vue'

export const ultraCheckboxGroupProps = {
  ...checkboxGroupProps,
  options: Array as PropType<CheckboxMixedOption[]>,
  space: Object as PropType<SpaceProps>,
}

export type UltraCheckboxGroupProps = ExtractPropTypes<typeof ultraCheckboxGroupProps>

export interface CheckboxMixedOption extends CheckboxProps {
  slots?: Record<string, () => JSX.Element | undefined>
  ref?: CheckboxInst | undefined | Ref<CheckboxInst | undefined>
}

export const NuCheckboxGroup = defineComponent({
  name: 'NuCheckboxGroup',
  props: ultraCheckboxGroupProps,
  setup(props) {
    const options = computed(() => props.options || [])
    const groupProps = reactiveOmit(props, ['space', 'options'])
    function renderCheckbox(opts: CheckboxMixedOption, i: number) {
      return (
        <NCheckbox
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
      )
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

export default NuCheckboxGroup
