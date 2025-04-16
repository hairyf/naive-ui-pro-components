# 常见问题

## defineForm 传递对象而不是数组

你可以会感到疑惑，defineForm 通过对象的形式声明组件的顺序，而不是数组，在组件设计之初我们我们的确是使用数组的形式，但是在实际使用中，我们发现数组的形式会有一些问题，且经过我们长期的实践，我们认为采用对象是完全可行的。

**类型推断在数组上无法进行：**

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

// 无法正确推断出 form 的类型
form.data // { name: string } | { age: string }
```

而通过对象的形式却能轻松的推断出类型：

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

**组合表单的复用形式不够灵活：**

```ts
const nameField = {
  type: 'input',
  key: 'name' as const,
  // ...其他配置
}

const form = defineForm([
  nameField,
  { ...nameField, key: 'name2' as const }
])
```

对象的复用形式：

```ts
const nameField = {
  type: 'input',
  // ...其他配置
}
const form = defineForm({
  name: nameField,
  name2: nameField,
})
```

尽管通过数组可以很轻松的操作索引控制表单顺序和显示，然而现实情况是索引却并不直观，而对象也可以通过组合的方式实现动态的表单显示：

```ts
const formFields = {/* ... */}
const formFields2 = {/* ... */}

const form = defineForm(() => {
  return { ...formFields, ...formFields2 }
})
```

## defineTable 分页的配置与控制分离

在 `np-table` 中，组件的 `pagination` 仅用于配置分页的显示参数，而 `page` 与 `pageSize` 由 `defineTable` 全程接管，你可以通过 `defineTable` 参数配置这两个参数的初始值。

```ts
const table = defineTable({
  // ...其他配置
  page: 2,
  pageSize: 15,
})

// 你可以通过 table.pagination.page、table.pagination.pageSize 获取当前页码和当前页大小
```
