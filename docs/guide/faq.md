# Frequently Asked Questions

## Passing an Object Instead of an Array in defineForm

You may be puzzled by the use of objects instead of arrays in defineForm to declare the order of components. While we did initially use arrays in the design of the components, we found that arrays had some issues in practical use. Through our long-term practice, we believe that using objects is completely viable.

**Type inference doesn't work well with arrays:**

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

On the other hand, using objects allows for easy type inference:

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

**Limited flexibility in reusing combined form fields:**

```ts
const nameField = {
  type: 'input',
  key: 'name' as const,
  // ...other configurations
}

const form = defineForm([
  nameField,
  { ...nameField, key: 'name2' as const }
])
```

Using object reuse:

```ts
const nameField = {
  type: 'input',
  // ...other configurations
}
const form = defineForm({
  name: nameField,
  name2: nameField,
})
```

While arrays make it easy to manipulate the order and display of form fields through indexing, the reality is that indexing is not always intuitive. Objects can also achieve dynamic form display through composition:

```ts
const formFields = {/* ... */}
const formFields2 = {/* ... */}

const form = defineForm(() => {
  return { ...formFields, ...formFields2 }
})
```

## Separation of Pagination Configuration and Actions in defineTable

In `np-table`, the `pagination` property of the component is only used to configure the display parameters of pagination, while `page` and `pageSize` are managed entirely by `defineTable`. You can configure the initial values of these two parameters through the arguments of `defineTable`.

```ts
const table = defineTable({
  // ...other configurations
  page: 2,
  pageSize: 15,
})

// You can access the current page number and page size through table.pagination.page and table.pagination.pageSize
```
