# Table Hooks

::: demo src="./demo/hooks.vue" title="Common hooks usage"
Table Hooks provide a set of utility functions for simplifying table column configuration, index columns, link columns, and other common scenarios, making ProTable's column configuration more flexible and reusable.
:::

## useColumns

Used for batch processing and generating table column configurations, supports dynamic filtering, default min width, etc.

```ts
import { useColumns } from 'naive-ultra'

const columns = useColumns([
  { key: 'name', title: 'Name' },
  { key: 'age', title: 'Age' },
])
```

## useColumnIndexes

Quickly generate static index columns (auto serial number), commonly used for the first column of tables.

```ts
import { useColumnIndexes } from 'naive-ultra'

const columns = [
  useColumnIndexes(table.pagination),
  { key: 'name', title: 'Name' },
]
```

## useColumnLink

Quickly generate link columns, supports custom render content and jump addresses.

```ts
import { useColumnLink } from 'naive-ultra'

const columns = [
  useColumnLink('url', { title: 'Official Site', render: row => row.name }),
]
```

## Other Common Hooks

- `useTableMinWidth(columns)`: Automatically calculates the minimum table width, suitable for responsive layouts.
- `useOffsetPagination(options)`: Pagination state management, used with ProTable.

> You can flexibly combine these hooks to quickly implement complex table scenarios.
