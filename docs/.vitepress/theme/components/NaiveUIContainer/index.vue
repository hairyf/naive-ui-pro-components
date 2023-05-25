<script lang="ts" setup>
import { NButton, NCard, NConfigProvider, NIcon, NMessageProvider, NP, NTooltip, darkTheme, lightTheme } from 'naive-ui'
import { onMounted, ref } from 'vue'
import { CodeOutline } from '@vicons/ionicons5'
import { useData } from 'vitepress'
import { i18n } from './composables'
import EditOnSandboxButton from './components/EditOnSandboxButton.vue'
import CopyButton from './components/CopyButton.vue'

const props = defineProps<{
  title: string
  code: string
  showCode: string
  description?: string
}>()

const { t } = i18n({
  'zh-CN': {
    show: '显示代码',
    hide: '收起代码',
    editOnGithub: '在 GitHub 中编辑',
    editInCodeSandbox: '在 CodeSandbox 中编辑',
    copyCode: '复制代码',
    copySuccess: '复制成功',
  },
  'en-US': {
    show: 'Show Code',
    hide: 'Hide Code',
    editOnGithub: 'Edit on GitHub',
    editInCodeSandbox: 'Edit in CodeSandbox',
    copyCode: 'Copy Code',
    copySuccess: 'Successfully Copied',
  },
})

const { isDark } = useData()

const sourceCode = ref(decodeURIComponent(props.code))
const showSourceCode = ref(decodeURIComponent(props.showCode))

const visible = ref(false)

onMounted(() => visible.value = false)
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
          <NTooltip>
            <template #trigger>
              <EditOnSandboxButton
                style="padding: 0; margin-right: 6px"
                size="tiny"
                :code="sourceCode"
              />
            </template>
            {{ t('editInCodeSandbox') }}
          </NTooltip>
          <NTooltip>
            <template #trigger>
              <CopyButton
                depth="3"
                style="padding: 0; margin-right: 6px"
                size="tiny"
                :code="sourceCode"
                :success-text="t('copySuccess')"
              />
            </template>
            {{ t('copyCode') }}
          </NTooltip>
          <NTooltip>
            <template #trigger>
              <NButton
                style="padding: 0"
                size="tiny"
                text
                depth="3"
                @click="visible = !visible"
              >
                <template #icon>
                  <NIcon>
                    <CodeOutline />
                  </NIcon>
                </template>
              </NButton>
            </template>
            {{ !visible ? t('show') : t('hide') }}
          </NTooltip>
        </template>
        <NP v-if="description">
          {{ description }}
        </NP>
        <div class="demo-content">
          <slot />
        </div>
        <template v-if="visible" #footer>
          <div v-show="visible" class="language-vue" v-html="showSourceCode" />
        </template>
      </NCard>
    </NMessageProvider>
  </NConfigProvider>
</template>

<style>
  .demo-content p {
    margin: 0;
  }
</style>
