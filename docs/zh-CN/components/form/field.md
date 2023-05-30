# Form Field

`field` 是一个描述对象，他可以是普通的对象，field 可以与 form 分离，并且通过 `field` 函数创建具有额外的能力。


::: demo src="./demo/field.vue" title="Basic"

:::


::: demo src="./demo/field-context.vue" title="字段上下文"

`field|withConfig` 传入函数可接收当前使用的 form 实例，用于组合校验。

:::

::: demo src="./demo/field-render.vue" title="字段渲染"

通过 `renderItem` 字段可以自定义渲染表单项，如果内容比较复杂，我们建议使用 tsx 编写。

:::


## 克隆字段

克隆一个新 Field 该字段 value 引用将是一个新的，避免字段数据引用是同一个 value。

```ts
const filed1 = numberField.clone() // 两个字段引用 value 不相同
const filed2 = numberField.clone()
```

## 深度克隆

深度克隆一个新 Field（字段）

```ts
const filed1 = numberField.cloneDeep()
filed1.rules.push({ /* 新添加规则 */}) // 原字段不受到印象
```


## Methods（field）

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| preventDefault | `() => WithConfigField` | 将 label、rules 置空 |
| preventRequired | `() => WithConfigField` | rules 中的 required 被删除 |
| preventAutofill | `() => WithConfigField` | 阻止浏览器自动填充 |
| clone | `() => WithConfigField` | 浅拷贝 `field` |
| cloneDeep | `() => WithConfigField` | 深拷贝 `field` |


