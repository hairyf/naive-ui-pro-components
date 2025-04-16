# Pro Actions

Pro Actions are commonly used in Table Columns and Form Toolbars, and can also be rendered independently using `<component />`.

It returns a Function Component that renders the component based on the provided parameters.

<demo src="./demo/basic.vue" title="Basic" />

::: demo src="./demo/form.vue" title="Form Toolbar"

Used in conjunction with Form Toolbars, Pro Actions allow you to quickly create form toolbars.

:::

<demo src="./demo/table.vue" title="Table Actions" />

::: demo src="./demo/custom.vue" title="Custom Rendering"

By default, Actions only render button actions. If you need to use other components, you can use the custom attribute.

:::

## Item Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| render | `string \| (...args) => string \| VNodeChild` | `-` | Render the button item content |
| helper | `(...args) => void \| Promise<void>` | `-` | Handle click events, if a `promise` is returned, it will automatically enable `loading` |
| enable | `(...args) => void \| Promise<void>` | `-` | Whether to enable the control, returning `false` will not render the control |
| custom | `(...args) => VNodeChild` | `-` | custom render |

> For more parameters, please refer to [n-button](https://www.naiveui.com/zh-CN/light/components/button).
