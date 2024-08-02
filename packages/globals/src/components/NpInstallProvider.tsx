import type { Component, PropType, VNode } from 'vue'
import { defineComponent, h } from 'vue'

export interface InstallComponentOptions { component: Component; props: any }
export type InstallComponentItem = Component | InstallComponentOptions

export const NpInstallProvider = defineComponent({
  props: {
    install: {
      type: Array as PropType<InstallComponentItem[]>,
      default: () => [],
    },
  },
  setup({ install }, { slots }) {
    function render(content: VNode, { component, props }: any) {
      return h(component, props, () => content)
    }
    return () => resolve(install).reduceRight(render, slots.default?.() as any)
  },
})

function resolve(components: InstallComponentItem[]): InstallComponentOptions[] {
  return components.map((item: any) => {
    if (!item.component)
      return { component: item as Component, props: {} }
    else
      return item
  })
}
