# Form Field Item

Form Field supports most Naive UI form components, including input, select, date picker, etc. You can specify the component type by setting `type: <component-type>`.

::: demo src="./demo/form.vue" title="Basic Usage"
:::

::: demo src="./demo/form-item-props.vue" title="Form Item Props"
`formItemProps` is used to set the properties of the current form item, supporting all properties of [Naive UI n-form-item](https://www.naiveui.com/en-US/os-theme/components/form#FormItem-Props) and [n-grid-item](https://www.naiveui.com/en-US/os-theme/components/grid#GridItem-Props). You can customize label, validation, layout, style, etc.

- ProForm enables grid layout by default, all form items are wrapped in `NFormItemGi` (Grid Item), and `formItemProps` supports both n-form-item and n-grid-item properties.
- You can set the column width of the current form item via the `span` property, or further customize it via `formItemProps`.
:::

::: demo src="./demo/props.vue" title="Component Props"
`props` is used to set the properties of the underlying Naive UI component. For example:
:::

::: demo src="./demo/slots.vue" title="Custom Slots"
`slots` is used to customize the slot content of the underlying component, formatted as an object. For example:
:::

## Placeholder

`placeholder` is used to set the placeholder text for the form item, supporting both string and function formats.

```ts
{
  placeholder: () => yourI18n.t('...')
}
```

## Only Render

When defining a Form, you can use ONLY_RENDER to mark a field as render-only, and it will not be collected as form data.

```ts
import { defineForm, field, ONLY_RENDER } from 'naive-ultra'
const form = defineForm({
  [ONLY_RENDER()]: field({
    type: 'button',
    props: {
      onClick() {
        form.validate()
      }
    },
  })
})
```

## Other Common Properties

- `label`: Form item label
- `span`: Column width of the current form item (only effective in grid layout)
- `rules`: Validation rules, supports Naive UI validation format
- `placeholder`: Placeholder
- `renderItem`: Custom render function, suitable for complex scenarios

## Reference

- [Naive UI n-form Props](https://www.naiveui.com/en-US/os-theme/components/form#Form-Props)
- [Naive UI n-form-item Props](https://www.naiveui.com/en-US/os-theme/components/form#FormItem-Props)
- [Naive UI n-grid Props](https://www.naiveui.com/en-US/os-theme/components/grid#Grid-Props)
- [Naive UI n-grid-item Props](https://www.naiveui.com/en-US/os-theme/components/grid#GridItem-Props)
