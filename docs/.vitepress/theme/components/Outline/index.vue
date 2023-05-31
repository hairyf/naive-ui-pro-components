<template>
  <div v-if="headers.length > 0" class="VPDocOutlineDropdown">
    <button :class="{ open }" @click="open = !open">
      {{ resolveTitle(theme) }}
      <VPIconChevronRight class="icon" />
    </button>
    <div v-if="open" class="items">
      <VPDocOutlineItem :headers="headers" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, shallowRef } from 'vue'
import { onContentUpdated, useData } from 'vitepress'

import VPIconChevronRight from 'vitepress/dist/client/theme-default/components//icons/VPIconChevronRight.vue'
import { resolveTitle } from 'vitepress/dist/client/theme-default/composables/outline'
import VPDocOutlineItem from './components/VPDocOutlineItem.vue'
import { getHeaders } from './utils'

const { frontmatter, theme } = useData()
const open = ref(true)
const headers = shallowRef<any[]>([])

onContentUpdated(() => {
  headers.value = getHeaders(frontmatter.value.outline)
})
</script>

<style scoped>
.VPDocOutlineDropdown {
  margin-bottom: 42px;
}

.VPDocOutlineDropdown button {
  display: block;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  color: var(--vp-c-text-2);
  transition: color 0.5s;
  border: 1px solid var(--vp-c-border);
  padding: 4px 12px;
  border-radius: 8px;
}

.VPDocOutlineDropdown button:hover {
  color: var(--vp-c-text-1);
  transition: color 0.25s;
}

.VPDocOutlineDropdown button.open {
  color: var(--vp-c-text-1);
}

.icon {
  display: inline-block;
  vertical-align: middle;
  margin-left: 2px;
  width: 14px;
  height: 14px;
  fill: currentColor;
}

:deep(.outline-link) {
  font-size: 13px;
}

.open > .icon {
  transform: rotate(90deg);
}

.items {
  margin-top: 10px;
  border-left: 1px solid var(--vp-c-divider);
}
</style>
