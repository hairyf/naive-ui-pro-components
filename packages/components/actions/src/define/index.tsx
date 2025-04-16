import type { PropType } from 'vue'
import type { ActionsInstance, ActionsParsedProps, ActionsProps } from '../types'
import { c, NButton } from 'naive-ui'
import { defineComponent, h, toRefs } from 'vue'
import { useActionsButtons } from '../composables'

export function defineActions<T extends any[]>(actions: ActionsProps<T>[]): ActionsInstance<T> {
  return (...args: T) => h(Component, { args, actions })
}

const Component = defineComponent({
  props: {
    args: {
      type: Array as PropType<any[]>,
      default: () => [],
    },
    actions: {
      type: Array as PropType<any[]>,
      default: () => [],
    },
  },
  setup(props) {
    const { args, actions } = toRefs(props)
    const buttons = useActionsButtons(args, actions)

    style.mount()

    function renderCustom(options: ActionsParsedProps) {
      return <div class="n-actions__item">{options.custom?.(...props.args)}</div>
    }
    function renderButton(options: ActionsParsedProps) {
      const { slots, ...props } = options
      return (
        <NButton
          class="n-actions__item"
          type="primary"
          {...props}
        >
          {{ ...slots }}
        </NButton>
      )
    }

    return () => (
      <div class="n-actions">
        {buttons.value.map((options) => {
          return options.custom
            ? renderCustom(options)
            : renderButton(options)
        })}
      </div>
    )
  },
})

const style = c('.n-actions', {
  display: 'flex',
  alignItems: 'center',
}, [
  c('.n-actions__item:not(:first-child)', {
    marginLeft: '12px',
  }),
])
