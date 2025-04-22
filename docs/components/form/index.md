# Pro Form

> Advanced form is used to quickly build form views. Using pro-form requires the use of defineForm functions.

Advanced forms are based on the principles of functional programming and abstract the form data into a JavaScript object. By manipulating and encapsulating this object, the form data becomes more reusable and maintainable.

::: demo src="./demo/basic.vue" title="Basic"
Advanced forms are defined using `defineForm`, which returns an instance of a form object. It restructures the form data and provides excellent TypeScript support.
:::

::: demo src="./demo/array.vue" title="Schema"
`defineForm` also supports array/object schemas. When defining an array, the `key` is required and it merges the fields within the array.
:::

::: demo src="./demo/grid.vue" title="Grid"
Different fields can be set with different `span` values to achieve different grid layouts.
:::

::: demo src="./demo/props.vue" title="Form Component Settings"
The `props` attribute within the fields can be used to customize the form components.
:::

::: demo src="./demo/formItemProps.vue" title="Form Item Settings"
The `formItemProps` attribute within the fields allows for customization of the form items. It inherits all the properties of [n-form-item](https://www.naiveui.com/en-US/os-theme/components/form#FormItem-Props) and [n-grid-item](https://www.naiveui.com/en-US/os-theme/components/grid#GridItem-Props).
:::

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| is | `ProFormInstance` | `-` | The instance of the component |
| grid | `boolean` | `true` | Enables grid layout |
| cols | `number \| ResponsiveDescription` | `24` | The number of grid columns to display |
| x-gap | `number \| ResponsiveDescription` | `0` | The horizontal gap between slots |
| y-gap | `number \| ResponsiveDescription` | `0` | The vertical gap between slots |

> For more parameters, please refer to the attributes of [n-form](https://www.naiveui.com/en-US/os-theme/components/form) and [n-grid](https://www.naiveui.com/en-US/os-theme/components/grid).

## Form Methods

| Name | Type | Description |
| --- | --- | --- |
| validate | `(paths?: string[]) => Promise<void>` | Validates the form items, passing `paths`

 filters the parameters to be validated |
| resetValidate | `(paths?: string[]) => void` | Resets the validation, passing `paths` filters the parameters to be reset |
| resetFields | `(paths?: string[]) => void` | Resets the form data to its initial values, passing `paths` filters the parameters to be reset |

## Field Methods

| Name | Type | Description |
| --- | --- | --- |
| withConfig | `(config) => WithConfigField` | Carries and returns a new configuration |
| preventDefault | `() => WithConfigField` | Sets the label and rules to empty |
| preventRequired | `() => WithConfigField` | Removes the required rule from the rules |
| preventAutofill | `() => WithConfigField` | Prevents browser autofill |
| clone | `() => WithConfigField` | Shallow clones the `field` |
| cloneDeep | `() => WithConfigField` | Deep clones the `field` |

## Field Types

| Name | Description |
| --- | --- |
| date-picker | Date picker |
| auto-complete | Auto-complete |
| cascader | Cascading selector |
| input | Input field |
| input-number | Number input field |
| rate | Rating |
| time-picker | Time picker |
| mention | Mention |
| select | Selector |
| switch | Switch |
| slider | Slider |
| radio | Radio button |
| checkbox | Checkbox |
| textarea | Textarea |

## Slots

| Name | Type | Description |
| --- | --- | --- |
| toolbars | `()` | Content of the toolbar. This slot is automatically enabled when using the toolbar mode. |
