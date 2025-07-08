# Pro Table

np-table is designed to solve the problem of writing a lot of table template code in projects, so it encapsulates a lot of common logic. These encapsulations can be simply classified as preset behaviors and preset logic.

When your table needs to interact with the server or requires multiple cell formats, ProTable is the best choice. If you just want to render a table, it is recommended to use [data-table](https://www.naiveui.com/en-US/os-theme/components/data-table) or [table](https://www.naiveui.com/en-US/os-theme/components/table).

<demo title="Basic" src="./demo/basic.vue" />

::: demo src="./demo/request.vue" title="External Control"

Use `defineTable` for external request control.

:::

::: demo src="./demo/form.vue" title="Form Integration"

You can also use it with `defineForm` to create a complete search page:

:::

::: demo src="./demo/pagination.vue" title="Table Pagination"

Pagination is enabled by default. If you don't need pagination, you can set the `pagination` prop to `false` to disable it, or override the `pagination` prop to customize it.

:::

::: demo src="./demo/watcher.vue" title="Watch Data"

When the table data changes, you may need to perform some extra operations. You can use the `watch` prop to listen for data changes, and it will automatically reset pagination and request data.

:::

## Props

| Name       | Type                           | Default | Description         |
| ---------- | ------------------------------ | ------- | ------------------- |
| is         | `ProTableInstance`             | `-`     | Instance of the component |
| pagination | `boolean \| PaginationProps`     | `true`  | Pagination config   |

> For more parameters, see [data-table](https://www.naiveui.com/en-US/os-theme/components/data-table).

## Methods (table)

| Name        | Type                                              | Description         |
| ----------- | ------------------------------------------------- | ------------------- |
| pagination  | `OffsetPagination`                                | Table pagination config |
| next        | `() => void`                                      | Go to next page and request data |
| prev        | `() => void`                                      | Go to previous page and request data |
| search      | `(pagination?: ServerPaginationResolve) => Promise<void>` | Request content based on pagination info |
| reset       | `() => Promise<void>`                             | Reset page and request data |
| request     | `(pagination: ServerPaginationResolve) => DataResolved<T> \| Promise<DataResolved<T>>` | Source request function |
| requestAll  | `() => Promise<T>`                                | Request all data based on pagination info, usually for exporting .csv files |
