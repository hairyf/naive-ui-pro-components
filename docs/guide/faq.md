# FAQ

## Why does defineForm accept an object instead of an array?

You may wonder why defineForm declares components in the form of an object rather than an array. In our practical use, we found some issues with arrays, and after long-term practice, we believe using objects is completely feasible.

**Type inference does not work well with arrays:**

```ts
const form = defineForm([
  {
    type: 'input',
    key: 'name' as const,
  },
  {
    type: 'input',
    key: 'age' as const,
  },
])

// Cannot correctly infer the type of form
form.data // { name: string } | { age: string }
```

But with objects, type inference works easily:

```ts
const form = defineForm({
  name: {
    type: 'input',
  },
  age: {
    type: 'input',
  },
})

form.data // { name: string; age: string }
```

**Array-based form reuse is not flexible enough:**

```ts
const nameField = {
  type: 'input',
  key: 'name' as const,
  // ...other config
}

const form = defineForm([
  nameField,
  { ...nameField, key: 'name2' as const }
])
```

Object-based reuse:

```ts
const nameField = {
  type: 'input',
  // ...other config
}
const form = defineForm({
  name: nameField,
  name2: nameField,
})
```

Although arrays make it easy to control the order and display of form fields, objects can also achieve dynamic form display through composition:

```ts
const formFields = {/* ... */}
const formFields2 = {/* ... */}

const form = defineForm(() => {
  return { ...formFields, ...formFields2 }
})
```

## Pagination config and control separation in defineTable

In `np-table`, the `pagination` prop is only for configuring the display parameters of pagination, while `page` and `pageSize` are managed entirely by `defineTable`. You can configure the initial values of these two parameters via the defineTable options.

```ts
const table = defineTable({
  // ...other config
  page: 2,
  pageSize: 15,
})

// You can get the current page and page size via table.pagination.page and table.pagination.pageSize
```
