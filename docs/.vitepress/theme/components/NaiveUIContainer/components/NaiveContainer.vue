<script lang="ts" setup>
import { NCard, NConfigProvider, NMessageProvider, darkTheme, lightTheme } from 'naive-ui'
import { useData } from 'vitepress'

defineProps<{
  title: string
}>()

const { isDark } = useData()
</script>

<template>
  <NConfigProvider :theme="isDark ? darkTheme : lightTheme">
    <NMessageProvider>
      <NCard
        class="demo-card"
        :segmented="{
          footer: true,
        }"
        footer-style="padding: 0;"
        :title="title"
      >
        <template #header-extra>
          <div style="display: flex; gap: 6px">
            <slot name="header-extra" />
          </div>
        </template>
        <div class="demo-content">
          <slot />
        </div>
        <template #footer>
          <slot name="footer" />
        </template>
      </NCard>
    </NMessageProvider>
  </NConfigProvider>
</template>

<style>
  .demo-card {
    margin: 28px 0;
  }
  .demo-content p {
    margin: 0;
  }
</style>
