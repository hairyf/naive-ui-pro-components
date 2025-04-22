## Form Field

::: demo src="./demo/field.vue" title="Form Fields"
`field` is an object description that can be a regular object. Fields can be separated from the form and provide additional capabilities through the `field` function.
:::

::: demo src="./demo/field-render.vue" title="Field Rendering"
The `renderItem` attribute allows for custom rendering of form items. For complex content, it is recommended to use tsx for writing.
:::

::: demo src="./demo/clone.vue" title="Field Cloning"
The `clone` method can be used on fields returned by the `field` function to create a new cloned field, avoiding reference sharing of field data.
:::

::: demo src="./demo/field-context.vue" title="Field Context"
The `field|withConfig` method can accept the current form instance for validation combinations.
:::
