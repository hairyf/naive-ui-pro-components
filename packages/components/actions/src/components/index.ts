import type { PropType } from 'vue'
import type { ActionsInstance } from '../types'
import { defineComponent } from 'vue'

export const NpActions = defineComponent({
  name: 'NpActions',
  props: {
    is: {
      type: Object as PropType<ActionsInstance<any>>,
      required: true,
    },
  },
  setup(props) {
    return () => props.is()
  },
})
