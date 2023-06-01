# NProForm

> NProForm is used to quickly build form views and requires the use of defineForm Functions.

Advanced Form is based on the concept of functional programming with objects. It abstracts form data as a JavaScript object, allowing for better reusability and maintainability of form data through operations and encapsulation.

::: demo src="./demo/basic.vue" title="Basic"
Advanced Form is defined using `defineForm`, which returns an instance of a form object. It restructures the form data and has excellent TypeScript support.
:::


::: demo src="./demo/grid.vue" title="Grid"
By setting the `span` for different fields, you can achieve different grid layouts.
:::

::: demo src="./demo/props.vue" title="Form Component Settings"
The `props` attribute in the field allows for customization of form components.
:::


::: demo src="./demo/formItemProps.vue" title="FormItem Settings"
The `formItemProps` attribute in the field allows for customization of form items. It inherits all the properties of [n-form-item](https://www.naiveui.com/zh-CN/os-theme/components/form#FormItem-Props) and [n-grid-item](https://www.naiveui.com/zh-CN/os-theme/components/grid#GridItem-Props).
:::

::: demo src="./demo/field.vue" title="Form Fields"
`field` is a descriptor object that can be a plain object. Fields can be separated from the form and have additional capabilities created using the `field` function.
:::


::: demo src="./demo/field-context.vue" title="Field Context"
`field|withConfig` accepts a function that can receive the current form instance being used to combine validation.
:::

::: demo src="./demo/field-render.vue" title="Field Rendering"
The `renderItem` field allows for custom rendering of form items. If the content is more complex, we recommend using TSX to write it.
:::


::: demo src="./demo/clone.vue" title="Field Cloning"
The `field` method returns a field, and the `clone` method can be used to clone a new field, avoiding reference sharing of field data.
:::

::: demo src="./demo/toolbars.vue" title="Toolbar"
Enable the `toolbars` mode, the grid will be fixed as `0:24 742:6 1394:4`, and you can customize the toolbar content through the `toolbars` slot.
:::

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| instance | `ProFormInstance` | `-` | The instance of the component |
| grid | `boolean` | `true` | Whether to enable grid layout |
| cols | `number \| ResponsiveDescription` | `24` | Number of grid columns to display |
| x-gap | `number \| ResponsiveDescription` | `0` | Horizontal gap between grid items |
| y-gap | `number \| ResponsiveDescription` | `0` | Vertical gap between grid items |

> For more parameters, please refer to the properties of [n-form](https://www.naiveui.com/zh-CN/os-theme/components/form) and [n-grid](https://www.naiveui.com/zh-CN/os-theme/components/grid).

## Methods (form)

| Name | Type | Description |
| --- | --- | --- |
| validate | `(paths?: string[]) => Promise<void>` | Validate form fields, passing `paths` filters the parameters to be validated |
| resetValidate | `(paths?: string[]) => void` | Reset validation, passing `paths` filters the parameters to be reset |
| resetFields | `(paths?: string[]) => void` | Reset form data to initial values, passing `paths` filters the parameters to be reset |

## Methods (field)

| Name | Type | Description |
| --- | --- | --- |
| withConfig | `(config) => WithConfigField` | Carry and return a new configuration |
| preventDefault | `() => WithConfigField` | Set label and rules to empty |
| preventRequired | `() => WithConfigField` | Remove `required` from rules |
| preventAutofill | `() => WithConfigField` | Prevent browser autofill |
| clone | `() => WithConfigField` | Shallow clone of `field` |
| cloneDeep | `() => WithConfigField` | Deep clone of `field` |


## Slots

| Name | Type | Description |
| --- | --- | --- |
| toolbars | `()` | Content for the toolbar, enabling toolbar mode by default |