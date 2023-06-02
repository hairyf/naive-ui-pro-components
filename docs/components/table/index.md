# NProTable

The advanced table is designed to address the issue of writing repetitive boilerplate code for tables in projects. It encapsulates many common logic and behaviors. These encapsulations can be simply classified into preset actions and preset logic.

If your table needs to interact with the server or requires different cell styles, ProTable is the perfect choice. However, if you just need to render a basic table, we recommend using [data-table](https://www.naiveui.com/en-US/os-theme/components/data-table) or [table](https://www.naiveui.com/en-US/os-theme/components/table).

<demo title="Basic" src="./demo/basic.vue" />

::: demo src="./demo/request.vue" title="External Control"

Use `defineTable` to control the request externally.

:::

::: demo src="./demo/form.vue" title="Form Integration"

You can also use it with `defineForm` to create a complete search page:

:::

::: demo src="./demo/pagination.vue" title="Table Pagination"

Pagination is enabled by default. If you don't need pagination, you can set the `pagination` parameter to `false` to disable it. You can also override the `pagination` parameter by providing your own `pagination` configuration.

:::

::: demo src="./demo/watcher.vue" title="Data Watcher"

When the table data changes, you may need to perform additional operations. You can use the `watch` parameter to listen for data changes, and it will automatically reset the pagination and make a new request.

:::

::: demo src="./demo/hooks.vue" title="Hooks Functions"

The table provides several utility functions to quickly create columns.

:::


## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| instance | `ProTableInstance` | `-` | The instance of the component |
| pagination | `boolean \| PaginationProps` | `true` | Pagination configuration |

> For more parameters, refer to [data-table](https://www.naiveui.com/en-US/os-theme/components/data-table).

## Methods (table)

| Name | Type | Description |
| --- | --- | --- |
| pagination | `OffsetPagination` | Pagination configuration for the table |
| next | `() => void` | Go to the next page and make the corresponding request |
| prev | `() => void` | Go to the previous page and make the corresponding request |
| search | `(pagination?: ServerPaginationResolve) => Promise<void>` | Request content based on pagination information |
| reset | `() => Promise<void>` | Reset the page number and make a new request |
| request | `(pagination: ServerPaginationResolve) => DataResolved<T> \| Promise<DataResolved<T>>` | Source request function |
| requestAll | `() => Promise<T>` | Request all data based on page-related information, usually used for combining `.csv` files |