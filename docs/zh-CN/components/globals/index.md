# Globals

`naive-ui` 所提供的所有全局组件，并不能在全局中使用，因为他们需要挂载到某个组件上，我们提供了 `globals` 组件，用于在全局中使用这些反馈组件，它将自动挂载 Typescript 类型。

```html
<!-- App.vue -->
<np-global-provider>
  <content />
</np-global-provider>
```

现在你可以在全局中通过使用 `$message`、`$dialog`、`$loadingBar`、`$notification` 来使用这些方法。

<demo title="Basic" src="./demo/basic.vue" />

```ts
function onClick() {
  $message.info('人生处处是美梦')
}
```

另外，我们对 `$message`、`$dialog` 的返回结果进行了优化，现在你可以直接使用 `await` 来获取用户的选择结果：

```ts
const ins = $dialog.warning({
  content: glbI18n.t('merchant.store.deleteText'),
  // 如果用户点击了确认，则会执行 postApiStoreDelete 方法，此时 button 处于 loading 状态
  onPositiveClick: () => postApiStoreDelete({ storeId: id }),
})

// 销毁方法
ins.destroy

// promise 方法
ins.then
ins.catch

// 使用 await 等待结果
await ins
// 用户点击了确认，并等待请求结束
```

`$message` 则是动画结束后，promise 变为成功，这在一些需要等待动画结束后再执行的场景中非常有用：

```ts
await $message.error('错误')
// 动画执行结束，组件被销毁
```

## 按需使用

如果你只需要使用 `$message`，你可以通过挂载单独的组件来实现：

```html
<!-- App.vue -->
<script lang="ts" setup>
  import { NpGlobalMessage } from 'naive-ui-pro-components'
</script>

<template>
  <np-global-message>
    <content />
  </np-global-message>
</template>
```

你可以使用 `np-install-provider` 简化挂载操作：


```html
<!-- App.vue -->
<script lang="ts" setup>
  import { NpInstallProvider, NpGlobalMessage, NpGlobalDialog } from 'naive-ui-pro-components'
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
