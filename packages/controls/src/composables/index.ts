import { useAsyncCallback } from '@naive-ui-pro/utils'
import { computed, reactive } from 'vue'
import type { ControlProps } from '../types'

export function useControlButtons<T extends any[]>(args: T, controls: ControlProps<T>[]) {
  const buttons = computed(() => {
    return controls
      .filter((control) => {
        const enable = typeof control.enable === 'function'
          ? control.enable(...args)
          : (control.enable || true)
        return enable
      })
      .map((control) => {
        const { disabled: _, helper, render, ...props } = control
        const [onClick, loading] = useAsyncCallback(() => helper?.(...args))
        const defaultRender = () => typeof render === 'function'
          ? render
          : () => render
        const slots: any = { default: defaultRender, ...props.slots }
        for (const key in slots)
          slots[key] = slots[key]?.(...args)
        return reactive({
          ...props,
          loading,
          slots,
          onClick,
        })
      })
  })

  return buttons
}
