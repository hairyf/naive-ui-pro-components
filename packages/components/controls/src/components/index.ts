import type { PropType } from 'vue'
import type { ControlInstance } from '../types'
import { defineComponent } from 'vue'

export const NpControls = defineComponent({
  name: 'NpControls',
  props: {
    is: {
      type: Object as PropType<ControlInstance<any>>,
      required: true,
    },
  },
  setup(props) {
    return () => props.is()
  },
})
