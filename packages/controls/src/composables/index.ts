import { useAsyncCallback } from '@naive-ui/utils'
import { computed, reactive } from 'vue-demi'
import type { ControlProps } from '../types'

export function useControlButtons<T extends any[]>(args: T, controls: ControlProps<T>[]) {
  const buttons = computed(() => {
    return controls
      .filter((control) => {
        const disabled = typeof control.disabled === 'function'
          ? control.disabled(...args)
          : control.disabled
        return !disabled
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
          loading: props.text ? false : loading.value,
          slots,
          onClick,
        })
      })
  })

  return buttons
}
