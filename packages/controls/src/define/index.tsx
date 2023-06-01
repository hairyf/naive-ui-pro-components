import { NButton, c } from 'naive-ui'
import type { PropType } from 'vue'
import { defineComponent, h } from 'vue'
import type { ControlInstance, ControlParsedProps, ControlProps } from '../types'
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

    
    function renderCustom(options: ControlParsedProps) {
      return <div class="n-controls__item">{options.custom?.(...props.args)}</div>
    }
    function renderButton(options: ControlParsedProps) {
      const { slots, ...props } = options
      return <NButton
        class="n-controls__item"
        type="primary"
        {...props}
      >
        {{ ...slots }}
      </NButton>
    }

    return () => <div class="n-controls">
      {buttons.value.map((options) => {
        return options.custom 
        ? renderCustom(options) 
        : renderButton(options)
      })}
    </div>
  },
})

const style = c('.n-controls', {
  display: 'flex',
  alignItems: 'center',
}, [
  c('.n-controls__item:not(:first-child)', {
    marginLeft: '12px',
  }),
])
