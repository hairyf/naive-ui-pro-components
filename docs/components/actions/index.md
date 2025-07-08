# Pro Actions

Pro Actions are commonly used in Table Columns and Form Toolbars, and can also be rendered independently using `<component />`.

It returns a Function Component, which renders components based on the passed parameters.

<demo src="./demo/basic.vue" title="Basic" />

::: demo src="./demo/form.vue" title="Form Toolbars"

Use with Form Toolbars to quickly create form toolbars.

:::

<demo src="./demo/table.vue" title="Table Controls" />

::: demo src="./demo/custom.vue" title="Custom Rendering"

By default, Actions only render button controls. If you need to use other components, you can use the `custom` property.

:::

## Item Props

| Name   | Type                                   | Default | Description                                  |
| ------ | -------------------------------------- | ------- | -------------------------------------------- |
| render | `string | (...args) => string \| VNodeChild` | `-`     | Render the content inside the button control |
| helper | `(...args) => void \| Promise<void>`      | `-`     | Handles click events, if returns a `promise` will automatically enable `loading` |
| enable | `(...args) => void \| Promise<void>`      | `-`     | Whether to enable the control, returns `false` will not render the control |
| custom | `(...args) => VNodeChild`               | `-`     | Custom rendering                             |

> For more parameters, please refer to [n-button](https://www.naiveui.com/en-US/light/components/button).
