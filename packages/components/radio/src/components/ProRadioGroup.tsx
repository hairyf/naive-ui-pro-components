import type { RadioProps, SpaceProps } from 'naive-ui'
import type { ExtractPropTypes, PropType, VNodeChild } from 'vue'
import type { JSX } from 'vue/jsx-runtime'
import { reactiveOmit } from '@vueuse/core'
import { NRadio, NRadioButton, NRadioGroup, NSpace, radioGroupProps } from 'naive-ui'
import { computed, defineComponent } from 'vue'

export const proRadioGroupProps = {
  ...radioGroupProps,
  type: {
    type: String as PropType<'button' | 'default'>,
    default: 'default',
  },
  options: Array as PropType<RadioMixedOption[]>,
  space: Object as PropType<SpaceProps>,
}

export type ProRadioGroupProps = ExtractPropTypes<typeof proRadioGroupProps>

export interface RadioMixedOption extends RadioProps {
  slots?: Record<string, () => JSX.Element | undefined>
}

export const NpRadioGroup = defineComponent({
  name: 'ProRadioGroup',
  props: proRadioGroupProps,
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

export default NpRadioGroup
