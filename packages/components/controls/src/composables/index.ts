import type { Ref } from 'vue'
import type { ControlParsedProps, ControlProps } from '../types'
import { useAsyncCallback } from '@naiveui-pro/utils'
import { computed, reactive, unref } from 'vue'

export function useControlButtons<T extends any[]>(args: Ref<T>, controls: Ref<ControlProps<T>[]>) {
  const buttons = computed(() => {
    return unref(controls)
      .filter((control) => {
        const enable = typeof control.enable === 'function'
          ? control.enable(...unref(args))
          : (control.enable || true)
        return enable
      })
      .map((control) => {
        const { disabled: _, helper, render, ...props } = control
        const [onClick, loading] = useAsyncCallback(() => helper?.(...unref(args)))
        const defaultRender = () => typeof render === 'function'
          ? () => render(...unref(args))
          : () => render
        const slots: any = { default: defaultRender, ...props.slots }
        for (const key in slots)
          slots[key] = slots[key]?.(...unref(args))
        return reactive({
          ...props,
          loading,
          slots,
          onClick,
        }) as ControlParsedProps
      })
  })

  return buttons
}
