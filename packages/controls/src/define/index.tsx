import { NButton, c } from 'naive-ui'
import type { PropType } from 'vue'
import { defineComponent, h } from 'vue'
import type { ControlInstance, ControlProps } from '../types'
import { useControlButtons } from '../composables'

export function defineControls<T extends any[]>(controls: ControlProps<T>[]): ControlInstance<T> {
  return (...args: T) => h(Component, { args, controls })
}

const Component = defineComponent({
  props: {
    args: {
      type: Array as PropType<any[]>,
      default: () => [],
    },
    controls: {
      type: Array as PropType<any[]>,
      default: () => [],
    },
  },
  setup(props) {
    const buttons = useControlButtons(props.args, props.controls)

    style.mount()

    return () => <div class="n-controls">
    {buttons.value.map((rest) => {
      const { slots, ...props } = rest
      return <NButton class="n-controls__button" type="primary" {...props}>{{ ...slots }}</NButton>
    })}
  </div>
  },
})

const style = c('.n-controls', {
  display: 'flex',
}, [
  c('.n-controls__button:not(:first-child)', {
    marginLeft: '12px',
  }),
])
