import type { ExtractPropTypes, PropType, Ref } from 'vue'
import { computed, defineComponent } from 'vue'
import type { CheckboxInst, CheckboxProps, SpaceProps } from 'naive-ui'
import { NCheckbox, NCheckboxGroup, NSpace, checkboxGroupProps } from 'naive-ui'
import { reactiveOmit, useVModel } from '@vueuse/core'

export const proCheckboxGroupProps = {
  ...checkboxGroupProps,
  options: Array as PropType<CheckboxMixedOption[]>,
  space: Object as PropType<SpaceProps>,
}

export type ProCheckboxGroupProps = ExtractPropTypes<typeof proCheckboxGroupProps>

export interface CheckboxMixedOption extends CheckboxProps {
  slots?: Record<string, () => JSX.Element | undefined>
  ref?: Ref<CheckboxInst | undefined>
}

export const NProCheckboxGroup = defineComponent({
  name: 'ProCheckboxGroup',
  props: proCheckboxGroupProps,
  setup(props) {
    const options = computed(() => props.options || [])
    const groupProps = reactiveOmit(props, ['space', 'options'])
    const model = useVModel(props, 'value')
    function renderCheckbox({ slots, ref, ...rest }: CheckboxMixedOption, i: number) {
      return <NCheckbox
        key={i}
        ref={ref}
        {...rest}
      >
        {slots}
      </NCheckbox>
    }
    return () => (
      <NCheckboxGroup {...groupProps} v-model={[model.value, 'value']}>
        <NSpace {...props.space}>
          {options.value.map(renderCheckbox)}
        </NSpace>
      </NCheckboxGroup>
    )
  },
})

export default NProCheckboxGroup
