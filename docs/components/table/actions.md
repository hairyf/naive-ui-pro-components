# Pro Actions (Table Integration)

Pro Actions can be used with ProTable to render batch operation buttons in table columns, simplifying the implementation of table operation columns.

::: demo src="../actions/demo/table.vue" title="Table Controls"
In the table column configuration, you can directly use the component function returned by `defineActions` to implement batch operation buttons.
:::

## Basic Usage

```ts
import { defineActions, defineTable, useColumns } from 'naive-ultra'

const actions = defineActions([
  {
    text: true,
    render: () => 'Deposit',
    helper: row => alert(`Deposit ${row.id}`),
  },
  {
    text: true,
    render: () => 'Withdraw',
    helper: row => alert(`Withdraw ${row.id}`),
  },
])

const columns = useColumns([
  { key: 'id', title: 'ID' },
  { key: 'name', title: 'Name' },
  { key: 'action', title: 'Action', render: actions },
])
```

## Action Properties

| Name   | Type                                   | Description                                  |
| ------ | -------------------------------------- | -------------------------------------------- |
| render | `string | (...args) => string \| VNodeChild` | Render the content inside the button control |
| helper | `(...args) => void \| Promise<void>`      | Handles click events, supports async loading  |
| enable | `boolean \| (...args) => boolean`         | Whether to enable the control, returns false will not render |
| custom | `(...args) => VNodeChild`               | Custom rendering                             |

> For more parameters, please refer to [n-button](https://www.naiveui.com/en-US/light/components/button).

## Generics and Types

defineActions supports generic parameters, automatically inferring the parameter types for each action. For example, `defineActions<[Row, number]>()` can get the current row and index.

Pro Actions can be used in tables, toolbars, and other scenarios.
