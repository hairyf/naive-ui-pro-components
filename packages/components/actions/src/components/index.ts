import type { PropType } from 'vue'
import type { ActionsInstance } from '../types'
import { defineComponent } from 'vue'

export const NuActions = defineComponent({
  name: 'NuActions',
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
