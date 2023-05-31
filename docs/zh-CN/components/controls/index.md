# Pro Controls

Pro Controls 通常用于在 Table Columns 与 Form Toolbars 中，它也可以使用 `<component />` 独立渲染。

它返回一个 Function Component，该 Function Component 会根据传入的参数渲染组件。

<demo src="./demo/basic.vue" title="基础" />

::: demo src="./demo/form.vue" title="表单工具栏"

与 Form Toolbars 配合使用，可以快速制作表单工具栏。

:::


<demo src="./demo/table.vue" title="表格控件" />

## Item Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| render | `string \| (...args) => string \| VNode` | `-` | 渲染控件项目 |
| helper | `(...args) => void \| Promise<void>` | `-` | 处理点击事件，如果返回的是 `promise` 将自动开启 `loading` |
| enable | `(...args) => void \| Promise<void>` | `-` | 是否启用控件，返回 `false` 将不渲染该控件 |

> 更多参数请参考 [n-button](https://www.naiveui.com/zh-CN/light/components/button)。
