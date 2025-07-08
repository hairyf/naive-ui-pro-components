# Ultra Form

> Advanced forms for quickly building form UIs. Using pro-form requires the use of defineForm Functions.

Advanced forms are based on object-oriented functional programming concepts. The form data is abstracted as a JavaScript object, which can be manipulated and encapsulated for better reusability and maintainability.

UltraForm is a downward-compatible wrapper based on Naive Form, fully compatible with Naive features, and includes all data entry components. It also adds some preset behaviors and layouts, and provides a common API.

::: demo src="./demo/basic.vue" title="Basic"
Advanced forms use `defineForm` to define and return an instance of a form object, which will reorganize the form data and has excellent TypeScript support.
:::

::: demo src="./demo/array.vue" title="Array Mode"
`defineForm` supports both array/object modes. When defining an array, `key` is required and fields in the array will be merged.
:::

::: demo src="./demo/grid.vue" title="Grid"
Set the `span` of different fields to achieve different grid layouts.
:::

::: demo src="./demo/props.vue" title="Component Props"
The `props` property in a field can be used to set the properties of the form component.
:::

::: demo src="./demo/form-item-props.vue" title="Form Item Props"
The `formItemProps` of a field can be used to set the properties of the form item. It inherits all properties from [n-form-item](https://www.naiveui.com/en-US/os-theme/components/form#FormItem-Props) and [n-grid-item](https://www.naiveui.com/en-US/os-theme/components/grid#GridItem-Props).
:::

::: demo src="./demo/field.vue" title="Form Field"
`field` is a descriptor object, which can be a plain object. The field can be separated from the form, and the `field` function can create fields with additional capabilities.
:::

::: demo src="./demo/field-context.vue" title="Field Context"
The function passed to `field|config` can receive the current form instance for composing validation.
:::

::: demo src="./demo/field-render.vue" title="Field Render"
The `renderItem` field allows custom rendering of form items. For complex content, it is recommended to use tsx.
:::

::: demo src="./demo/clone.vue" title="Field Clone"
The `clone` method of a field returns a new field, avoiding value reference issues.
:::

::: demo src="./demo/toolbars.vue" title="Toolbars"
Enable the `toolbars` mode, the grid will be fixed as `0:24 742:6 1394:4`, and you can use the `toolbars` slot to customize the right toolbar content.
:::

## Form Props

| Name   | Type                              | Default | Description                |
| ------ | --------------------------------- | ------- | -------------------------- |
| is     | `UltraFormInstance`                 | `-`     | Instance of the component  |
| grid   | `boolean`                         | `true`  | Enable grid layout         |
| cols   | `number | ResponsiveDescription`   | `24`    | Number of columns to show  |
| x-gap  | `number | ResponsiveDescription`   | `0`     | Horizontal gap             |
| y-gap  | `number | ResponsiveDescription`   | `0`     | Vertical gap               |

> For more parameters, see [n-form](https://www.naiveui.com/en-US/os-theme/components/form) and [n-grid](https://www.naiveui.com/en-US/os-theme/components/grid).

## Form Methods

| Name          | Type                                 | Description                                      |
| ------------- | ------------------------------------ | ------------------------------------------------ |
| validate      | `(paths?: string[]) => Promise<void>` | Validate form items, filter by `paths`           |
| resetValidate | `(paths?: string[]) => void`          | Reset validation, filter by `paths`              |
| resetFields   | `(paths?: string[]) => void`          | Reset form data to initial values, filter by `paths` |

## Field Methods

| Name            | Type              | Description                                      |
| --------------- | ---------------- | ------------------------------------------------ |
| config          | `(config) => Field` | Attach and return a new config                   |
| preventDefault  | `() => Field`     | Clear label and rules                            |
| preventRequired | `() => Field`     | Remove required from rules                       |
| preventAutofill | `() => Field`     | Prevent browser autofill                         |
| clone           | `() => Field`     | Shallow clone field                              |
| cloneDeep       | `() => Field`     | Deep clone field                                 |

## Field Types

| Name           | Description         |
| -------------- | ------------------ |
| date-picker    | Date picker        |
| auto-complete  | Auto complete      |
| cascader       | Cascader           |
| input          | Input              |
| input-number   | Input number       |
| rate           | Rate               |
| time-picker    | Time picker        |
| mention        | Mention            |
| select         | Select             |
| switch         | Switch             |
| slider         | Slider             |
| radio          | Radio              |
| checkbox       | Checkbox           |
| textarea       | Textarea           |

## Slots

| Name      | Type   | Description                                      |
| --------- | ------ | ------------------------------------------------ |
| toolbars  | `()`   | Toolbar content, enable toolbar mode by default  |
