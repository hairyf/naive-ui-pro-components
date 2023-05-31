<template>
  <NaiveContainer :id="metadata.fileName" :title="title">
    <template #header-extra>
      <EditOnSandboxButton
        :code="sfcCode"
        :tooltip="t('editInCodeSandbox')"
      />
      <EditOnGithubButton
        :relative-path="metadata.relativePath"
        :tooltip="t('editOnGithub')"
      />
      <CopyCodeButton
        :code="sfcCode"
        :success-text="t('copySuccess')"
        :tooltip="t('copyCode')"
      />
      <ExpandToggleButton
        :tooltip="!visible ? t('show') : t('hide')"
        @click="visible = !visible"
      />
    </template>
    <n-p v-if="$slots.desc" class="desc">
      <slot name="desc" />
    </n-p>
    <slot />
    <template v-if="visible" #footer>
      <n-tabs
        v-if="isUsingTs"
        size="small"
        type="segment"
        style="padding: 12px 24px 0 24px"
        animated
        @update:value="($e) => (showTs = $e === 'ts')"
      >
        <n-tab name="ts">
          TypeScript
        </n-tab>
        <n-tab name="js">
          JavaScript
        </n-tab>
      </n-tabs>
      <div class="language-vue" v-html="highlightedHtml" />
    </template>
  </NaiveContainer>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import NaiveContainer from './components/NaiveContainer.vue'
import { i18n } from './composables'
import ExpandToggleButton from './components/ExpandToggleButton.vue'
import EditOnSandboxButton from './components/EditOnSandboxButton.vue'
import CopyCodeButton from './components/CopyCodeButton.vue'
import EditOnGithubButton from './components/EditOnGithubButton.vue'

const props = defineProps<{
  sfcTsCode: string
  // if using ts, sfcJsCode will transform the to js
  sfcJsCode: string
  sfcTsHtml: string
  sfcJsHtml: string
  // descriptionHtml is generally not used since the slot with name="desc" will handle everything
  descriptionHtml?: string
  title: string
  metadata: Record<string, any>
}>()

const visible = ref(false)

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

const sfcTsCode = computed(() => decodeURIComponent(props.sfcTsCode))
const sfcJsCode = computed(() => decodeURIComponent(props.sfcJsCode))

const isUsingTs = computed(() => !!props.sfcTsCode)

const sfcCode = computed(() => isUsingTs.value ? sfcTsCode.value : sfcJsCode.value)

const showTs = ref(isUsingTs.value)

const highlightedHtml = computed(() => decodeURIComponent(showTs.value ? props.sfcTsHtml : props.sfcJsHtml))
</script>

<style>
  .desc:not(:empty) {
    margin-bottom: 24px;
  }
  .demo-card .demo-card__view:not(:first-child) {
    margin-top: 16px;
  }
  .demo-card code.n-text {
    white-space: nowrap;
  }
</style>
