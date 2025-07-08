# Form Field Item

Form Field 支持 Naive UI 大部分表单组件，包括输入框、选择器、日期选择器等，你可以通过设置 `type: <component-type>` 来指定使用的组件类型。

::: demo src="./demo/form.vue" title="基础用法"
:::

::: demo src="./demo/form-item-props.vue" title="Form Item Props"
`formItemProps` 用于设置当前表单项的属性，支持 [Naive UI n-form-item](https://www.naiveui.com/zh-CN/os-theme/components/form#FormItem-Props) 和 [n-grid-item](https://www.naiveui.com/zh-CN/os-theme/components/grid#GridItem-Props) 的所有属性。你可以通过它自定义 label、校验、布局、样式等。

- ProForm 默认启用 grid 布局，所有表单项均包裹在 `NFormItemGi`（Grid Item）中，`formItemProps` 同时支持 n-form-item 和 n-grid-item 的属性。
- 你可以通过 `span` 属性设置当前表单项的栅格宽度，或通过 `formItemProps` 进一步定制。
:::

::: demo src="./demo/props.vue" title="Component Props"
`props` 用于给底层 Naive UI 组件的属性。例如：
:::

::: demo src="./demo/slots.vue" title="自定义插槽"
`slots` 用于自定义底层组件的插槽内容，格式为对象。例如：
:::

## Placeholder

`placeholder` 用于设置表单项的占位符文本，支持字符串和函数两种形式。

```ts
{
  placeholder: () => yourI18n.t('...')
}
```

## Receive

`receive: false` 时，该字段不会参与表单数据的收集，仅用于渲染内容（如分割线、说明文本、插槽等）。适用于只展示不需要提交的内容。

```ts
field({
  type: 'button',
  receive: false,
  props: {
    // ...
  },
})
```

## 其他常用属性

- `label`：表单项标签
- `span`：当前表单项的栅格宽度（仅 grid 布局下生效）
- `rules`：校验规则，支持 Naive UI 的校验格式
- `placeholder`：占位符
- `renderItem`：自定义渲染函数，适合复杂场景

## 参考

- [Naive UI n-form Props](https://www.naiveui.com/zh-CN/os-theme/components/form#Form-Props)
- [Naive UI n-form-item Props](https://www.naiveui.com/zh-CN/os-theme/components/form#FormItem-Props)
- [Naive UI n-grid Props](https://www.naiveui.com/zh-CN/os-theme/components/grid#Grid-Props)
- [Naive UI n-grid-item Props](https://www.naiveui.com/zh-CN/os-theme/components/grid#GridItem-Props)
