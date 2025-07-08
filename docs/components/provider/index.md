# Ultra Provider

All global components provided by `naive-ui` cannot be used globally by default, because they need to be mounted on a certain component. We provide the `globals` component, which allows you to use these feedback components globally, and it will automatically mount TypeScript types.

```html
<!-- App.vue -->
<nu-global-provider>
  <content />
</nu-global-provider>
```

Now you can use `$message`, `$dialog`, `$loadingBar`, `$notification` globally.

<demo title="Basic" src="./demo/basic.vue" />

```ts
function onClick() {
  $message.info('Life is a dream everywhere')
}
```

In addition, we have optimized the return results of `$message` and `$dialog`, so you can directly use `await` to get the user's selection result:

```ts
const ins = $dialog.warning({
  content: glbI18n.t('merchant.store.deleteText'),
  // If the user clicks confirm, postApiStoreDelete will be executed, and the button will be in loading state
  onPositiveClick: () => postApiStoreDelete({ storeId: id }),
})

// destroy method
ins.destroy

// promise methods
ins.then
ins.catch

// use await to wait for the result
await ins
// The user clicked confirm and waited for the request to finish
```

For `$message`, the promise resolves after the animation ends, which is useful in scenarios where you need to wait for the animation to finish before executing:

```ts
await $message.error('Error')
// Animation ends, component is destroyed
```

## On-demand Usage

If you only need to use `$message`, you can mount a single component:

```html
<!-- App.vue -->
<script lang="ts" setup>
  import { NuGlobalMessage } from 'naive-ultra'
</script>

<template>
  <nu-global-message>
    <content />
  </nu-global-message>
</template>
```

You can use `nu-installs-provider` for simplified mounting:

```html
<!-- App.vue -->
<script lang="ts" setup>
  import { NuInstallProvider, NuGlobalMessage, NuGlobalDialog } from 'naive-ultra'
</script>
<template>
  <nu-installs-provider
    :install="[
      NuGlobalMessage,
      NuGlobalDialog,
    ]"
  >
    <content />
  </nu-installs-provider>
</template>
```
