import type { ExtractPropTypes, PropType } from 'vue'
import { computed, defineComponent } from 'vue'
import type { RadioProps, SpaceProps } from 'naive-ui'
import { NRadioGroup, NSpace, radioGroupProps } from 'naive-ui'
import { reactiveOmit, useVModel } from '@vueuse/core'
import NProRadio from './ProRadio'

export const proRadioGroupProps = {
  ...radioGroupProps,
  type: String as PropType<'button' | 'default'>,
  options: Array as PropType<RadioOption[]>,
  space: Object as PropType<SpaceProps>,
}

export type ProRadioGroupProps = ExtractPropTypes<typeof proRadioGroupProps>

export interface RadioOption extends RadioProps {
  slots?: Record<string, () => JSX.Element | undefined>
}

export const NProRadioGroup = defineComponent({
  name: 'ProRadioGroup',
  props: proRadioGroupProps,
  setup(props) {
    const options = computed(() => props.options || [])
    const radioGroupProps = reactiveOmit(props, ['space', 'options', 'type'])
    const model = useVModel(props, 'value')
    function renderRadio({ slots, ...rest }: RadioOption, i: number) {
      return <NProRadio
        key={i}
        type={props.type}
        {...rest}
      >
        {slots}
      </NProRadio>
    }
    return () => (
      <NRadioGroup {...radioGroupProps} v-model={[model.value, 'value']}>
        <NSpace {...props.space}>
          {options.value.map(renderRadio)}
        </NSpace>
      </NRadioGroup>
    )
  },
})

export default NProRadioGroup
