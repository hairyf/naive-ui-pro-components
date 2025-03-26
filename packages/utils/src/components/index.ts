import { defineComponent, h } from 'vue'

export const If = defineComponent({
  name: 'If',
  props: {
    cond: {
      type: Boolean,
      default: true,
    },
    tag: {
      type: String,
    },
  },
  setup(props, { slots }) {
    return () => props.cond
      ? (props.tag ? h(props.tag, {}, slots) : slots.default?.())
      : null
  },
})
