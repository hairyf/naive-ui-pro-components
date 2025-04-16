# Pro Install

All global components provided by `naive-ui` cannot be used in the global scope because they need to be mounted to a component. We provide the `install` component to use these feedback components in the global scope, and it will automatically mount the TypeScript types.

```html
<!-- App.vue -->
<np-install-provider>
  <content />
</np-install-provider>
```

Now you can use `$message`, `$dialog`, `$loadingBar`, `$notification` in the global scope.

<demo title="Basic" src="./demo/basic.vue" />

```ts
function onClick() {
  $message.info('Life is full of beautiful dreams')
}
```

Furthermore, we have optimized the return results of `$message` and `$dialog`, so now you can directly use `await` to get the user's selection result:

```ts
const ins = $dialog.warning({
  content: glbI18n.t('merchant.store.deleteText'),
  // If the user clicks on confirmation, the postApiStoreDelete method will be executed, and the button will be in a loading state.
  onPositiveClick: () => postApiStoreDelete({ storeId: id }),
})

// Destroy method
ins.destroy

// Promise methods
ins.then
ins.catch

// Use await to wait for the result
await ins
// The user clicked on confirmation and waited for the request to finish
```

For `$message`, the promise becomes successful after the animation ends. This is very useful in scenarios where you need to wait for the animation to finish before executing further actions:

```ts
await $message.error('Error')
// Animation finished, component is destroyed
```

## On-Demand Usage

If you only need to use `$message`, you can achieve it by mounting the component separately:

```html
<!-- App.vue -->
<script lang="ts" setup>
  import { NpGlobalMessage } from 'naive-ultra'
</script>

<template>
  <np-global-message>
    <content />
  </np-global-message>
</template>
```

You can use `np-install-provider` to simplify the mounting process:

```html
<!-- App.vue -->
<script lang="ts" setup>
  import { NpInstallProvider, NpGlobalMessage, NpGlobalDialog } from 'naive-ultra'
</script>
<template>
  <np-install-provider
    :install="[
      NpGlobalMessage,
      NpGlobalDialog,
    ]"
  >
    <content />
  </np-install-provider>
</template>
```
