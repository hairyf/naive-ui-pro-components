import type { ExtractPropTypes, PropType } from 'vue'
import { debounce } from '@hairy/utils'
import { useAsyncCallback } from '@naive-ultra/utils'
import { useVModel } from '@vueuse/core'
import { dialogProps, NDialog, NModal } from 'naive-ui'
import { defineComponent } from 'vue'

export const proDialogProps = {
  ...dialogProps,
  show: Boolean,
  width: String,
  onPositiveClick: Function as PropType<(e: MouseEvent) => void | Promise<void>>,
  onNegativeClick: Function as PropType<(e: MouseEvent) => void | Promise<void>>,
  disabled: Boolean,
}

export type ProDialogProps = ExtractPropTypes<typeof proDialogProps>

export const NpDialog = defineComponent({
  name: 'ProDialog',
  props: proDialogProps,
  setup(props, { slots }) {
    const visible = useVModel(props, 'show')

    const [onPositiveClick, loading] = useAsyncCallback(async (e: MouseEvent) => {
      await props.onPositiveClick?.(e)
    })

    const onDebouncedPositiveClick = debounce(onPositiveClick, 1000, {
      leading: true,
      trailing: false,
    })

    return (
      <NModal v-model={[visible.value, 'show']}>
        <NDialog
          {...props}
          loading={loading.value}
          onPositiveClick={onDebouncedPositiveClick}
        >
          {slots.default?.()}
        </NDialog>
      </NModal>
    )
  },
})
