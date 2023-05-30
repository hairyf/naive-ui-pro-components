import { defineComponent, h } from 'vue-demi'

export const Condition = defineComponent({
  name: 'Condition',
  props: {
    if: {
      type: Boolean,
      default: true,
    },
    tag: {
      type: String,
    },
  },
  setup(props, { slots }) {
    return () => props.if
      ? (props.tag ? h(props.tag, {}, slots) : slots.default?.())
      : null
  },
})
