# 高级表单（n-pro-form）

> 高级表单用于快速构建表单视图，使用 pro-form 需要使用 defineForm Functions。

高级表单基于对象的函数式编程（functional programming）思想。并将表单数据抽象为一个 JavaScript 对象，通过对这个对象进行操作和封装，让表单数据具有更好的可复用性和可维护性。

::: demo src="./demo/basic.vue" title="基础"

高级表单使用 `defineForm` 定义，返回一个表单对象的实例，它会将表单数据进行重组，它具有良好的 Typescript 支持。

:::


::: demo src="./demo/grid.vue" title="栅格"

对不同的字段的 `span` 进行设置，可以实现不同栅格布局。

:::

::: demo src="./demo/props.vue" title="表单组件设置"

字段中的 `props` 属性，可以对表单组件进行设置。

:::


::: demo src="./demo/formItemProps.vue" title="表单组件设置"

字段的 `formItemProps` 可以对表单项进行设置，它会继承 [n-form-item](https://www.naiveui.com/zh-CN/os-theme/components/form#FormItem-Props) 和 [n-grid-item](https://www.naiveui.com/zh-CN/os-theme/components/grid#GridItem-Props) 的所有属性。

::: demo src="./demo/field.vue" title="表单字段"

`field` 是一个描述对象，他可以是普通的对象，field 可以与 form 分离，并且通过 `field` 函数创建具有额外的能力。

:::


::: demo src="./demo/field-context.vue" title="字段上下文"

`field|withConfig` 传入函数可接收当前使用的 form 实例，用于组合校验。

:::

::: demo src="./demo/field-render.vue" title="字段渲染"

通过 `renderItem` 字段可以自定义渲染表单项，如果内容比较复杂，我们建议使用 tsx 编写。

:::


::: demo src="./demo/clone.vue" title="字段克隆"

通过 `field` 方法返回的字段，使用 `clone` 方法可以克隆一个新的字段，避免字段数据引用是同一个 value。

:::


## Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| instance | `ProFormInstance` | `-` | 组件的实例 |
| grid | `boolean` | `true` | 是否开启栅格布局 |
| cols | `number \| ResponsiveDescription` | `24` | 显示的栅格数量 |
| x-gap | `number \| ResponsiveDescription` | `0` | 横向间隔槽 |
| y-gap | `number \| ResponsiveDescription` | `0` | 纵向间隔槽 |

> 更多参数请参考 [n-form](https://www.naiveui.com/zh-CN/os-theme/components/form) 和 [n-grid](https://www.naiveui.com/zh-CN/os-theme/components/grid) 的属性。

## Methods（form）

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| validate | `(paths?: string[]) => Promise<void>` | 验证表项，传递 `paths` 过滤需要验证的参数 |
| resetValidate | `(paths?: string[]) => void` | 重置校验，传递 `paths` 过滤需要重置的参数 |
| resetFields | `(paths?: string[]) => void` | 重置表单数据为初始值，传递 `paths` 过滤需要重置的参数 |

## Methods（field）

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| withConfig | `(config) => WithConfigField` | 携带并返回新的配置 |
| preventDefault | `() => WithConfigField` | 将 label、rules 置空 |
| preventRequired | `() => WithConfigField` | rules 中的 required 被删除 |
| preventAutofill | `() => WithConfigField` | 阻止浏览器自动填充 |
| clone | `() => WithConfigField` | 浅拷贝 `field` |
| cloneDeep | `() => WithConfigField` | 深拷贝 `field` |


## Slots

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| toolbars | `()` | 工具栏内容，使用该插槽默认开启工具栏模式 |


