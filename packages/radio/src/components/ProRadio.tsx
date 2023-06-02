import { NRadio, NRadioButton, radioProps } from 'naive-ui'
import type { ExtractPropTypes, PropType } from 'vue'
import { defineComponent } from 'vue'

export const proRadioProps = {
  ...radioProps,
  type: String as PropType<'button' | 'default'>,
}

export type ProRadioProps = ExtractPropTypes<typeof proRadioProps>

export const NProRadio = defineComponent({
  name: 'ProRadio',
  props: proRadioProps,
  setup(props, { slots }) {
    return () => {
      const { type, ...rest } = props
      return type === 'button'
        ? <NRadioButton {...rest}>{slots}</NRadioButton>
        : <NRadio {...rest}>{slots}</NRadio>
    }
  },
})

export default NProRadio
