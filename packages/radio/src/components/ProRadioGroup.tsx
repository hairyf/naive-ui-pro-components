import type { ExtractPropTypes, PropType } from 'vue'
import { computed, defineComponent } from 'vue'
import type { RadioProps, SpaceProps } from 'naive-ui'
import { NRadioGroup, NSpace, radioGroupProps } from 'naive-ui'
import { reactiveOmit } from '@vueuse/core'
import NProRadio from './ProRadio'

export const proRadioGroupProps = {
  ...radioGroupProps,
  type: String as PropType<'button' | 'default'>,
  options: Array as PropType<RadioMixedOption[]>,
  space: Object as PropType<SpaceProps>,
}

export type ProRadioGroupProps = ExtractPropTypes<typeof proRadioGroupProps>

export interface RadioMixedOption extends RadioProps {
  slots?: Record<string, () => JSX.Element | undefined>
}

export const NProRadioGroup = defineComponent({
  name: 'ProRadioGroup',
  props: proRadioGroupProps,
  setup(props) {
    const options = computed(() => props.options || [])
    const radioGroupProps = reactiveOmit(props, ['space', 'options', 'type'])
    function renderRadio({ slots, ...rest }: RadioMixedOption, i: number) {
      return <NProRadio
        key={i}
        type={props.type}
        {...rest}
      >
        {slots}
      </NProRadio>
    }
    return () => (
      <NRadioGroup {...radioGroupProps}>
        <NSpace {...props.space}>
          {options.value.map(renderRadio)}
        </NSpace>
      </NRadioGroup>
    )
  },
})

export default NProRadioGroup
