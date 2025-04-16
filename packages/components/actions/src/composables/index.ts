import type { Ref } from 'vue'
import type { ActionsParsedProps, ActionsProps } from '../types'
import { useAsyncCallback } from '@naive-ultra/utils'
import { computed, reactive, unref } from 'vue'

export function useActionsButtons<T extends any[]>(args: Ref<T>, actions: Ref<ActionsProps<T>[]>) {
  const buttons = computed(() => {
    return unref(actions)
      .filter((action) => {
        const enable = typeof action.enable === 'function'
          ? action.enable(...unref(args))
          : (action.enable || true)
        return enable
      })
      .map((action) => {
        const { disabled: _, helper, render, ...props } = action
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
        }) as ActionsParsedProps
      })
  })

  return buttons
}
