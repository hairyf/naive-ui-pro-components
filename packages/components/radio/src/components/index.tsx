import type { RadioProps, SpaceProps } from 'naive-ui'
import type { ExtractPropTypes, PropType, VNodeChild } from 'vue'
import type { JSX } from 'vue/jsx-runtime'
import { reactiveOmit } from '@vueuse/core'
import { NRadio, NRadioButton, NRadioGroup, NSpace, radioGroupProps } from 'naive-ui'
import { computed, defineComponent } from 'vue'

export const ultraRadioGroupProps = {
  ...radioGroupProps,
  type: {
    type: String as PropType<'button' | 'default'>,
    default: 'default',
  },
  options: Array as PropType<RadioMixedOption[]>,
  space: Object as PropType<SpaceProps>,
}

export type UltraRadioGroupProps = ExtractPropTypes<typeof ultraRadioGroupProps>

export interface RadioMixedOption extends RadioProps {
  slots?: Record<string, () => JSX.Element | undefined>
}

export const NuRadioGroup = defineComponent({
  name: 'NuRadioGroup',
  props: ultraRadioGroupProps,
  setup(props) {
    const options = computed(() => props.options || [])
    const radioGroupProps = reactiveOmit(props, ['space', 'options', 'type'])
    function renderRadio({ slots, ...rest }: RadioMixedOption, i: number) {
      return props.type === 'default'
        ? <NRadio key={i} {...rest}>{slots}</NRadio>
        : <NRadioButton key={i} {...rest}>{slots}</NRadioButton>
    }
    function renderSpace(content: VNodeChild) {
      return props.type === 'default'
        ? <NSpace {...props.space}>{content}</NSpace>
        : content
    }
    return () => (
      <NRadioGroup {...radioGroupProps}>
        {renderSpace(options.value.map(renderRadio))}
      </NRadioGroup>
    )
  },
})

export default NuRadioGroup
