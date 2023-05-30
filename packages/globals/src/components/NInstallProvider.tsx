import type { Component, PropType, VNode } from 'vue'
import { computed, defineComponent, h } from 'vue'

export const NInstallProvider = defineComponent({
  props: {
    install: {
      type: Array as PropType<Component[]>,
      default: () => [],
    },
  },
  setup({ install }, { slots }) {
    const content = computed(() => h(() => slots.default?.()))
    function render(content: VNode, Component: any) {
      return <Component>{content}</Component>
    }
    return () => install.reduceRight(render, content.value)
  },
})
