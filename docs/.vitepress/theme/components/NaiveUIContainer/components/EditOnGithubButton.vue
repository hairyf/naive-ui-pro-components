<script lang="ts">
import { defineComponent } from 'vue'
import EditIcon from '@vicons/fluent/Compose16Regular.js'
import { githubBlobURL } from '../utils'

export default defineComponent({
  name: 'EditOnGithubButton',
  components: {
    EditIcon,
  },
  props: {
    relativePath: {
      type: String,
      required: true,
    },
    text: Boolean,
    quaternary: Boolean,
    tooltip: String,
  },
  setup(props) {
    function open() {
      window.open(githubBlobURL + props.relativePath, '__blank')
    }
    return { open }
  },
})
</script>

<template>
  <n-tooltip>
    <template #trigger>
      <n-button
        class="edit-button"
        size="tiny"
        text
        target="_blank"
        :style="{ padding: 0 }"
        @click="open"
      >
        <template #icon>
          <n-icon>
            <EditIcon />
          </n-icon>
        </template>
      </n-button>
    </template>
    {{ tooltip }}
  </n-tooltip>
</template>
