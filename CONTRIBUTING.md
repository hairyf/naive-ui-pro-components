
# 贡献指南

感谢你的宝贵时间。你的贡献将使这个项目变得更好！在提交贡献之前，请务必花点时间阅读下面的入门指南。

## 行为准则

该项目有一份 [行为准则](./CODE_OF_CONDUCT.md)，希望参与项目的贡献者都能严格遵守。

## 透明的开发

所有工作都直接透明地在 `GitHub` 上进行。核心团队成员和外部贡献者的 `pull requests` 都需要经过相同的 `code review` 流程。

## 语义化版本

该项目遵循语义化版本。我们对重要的漏洞修复发布修订号，对新特性或不重要的变更发布次版本号，对重大且不兼容的变更发布主版本号。

## 报告 Issues

我们使用 [Github issues](https://github.com/ano-ui/ano-ui/issues) 进行 bug 报告和新 feature 建议。在报告 bug 之前，请确保已经搜索过类似的 [问题](https://github.com/ano-ui/ano-ui/issues)，因为它们可能已经得到解答或正在被修复。对于 bug 报告，请包含可用于重现问题的代码。对于新 feature 建议，请指出你想要的更改以及期望的行为。

## 提交 Pull Request

1. Fork [此仓库](https://github.com/ano-ui/ano-ui)，从 `main` 创建分支。新功能实现请发 pull request 到 `feature` 分支。其他更改发到 `main` 分支。
2. 使用 `pnpm install` 安装依赖。
3. 使用 `pnpm run docs:dev` 启动并查看文档与示例。
4. 对代码库进行更改，添加相应测试文件并运行 `pnpm run test` 测试
5. 提交代码前使用 `pnpm run test:ci` 进行构建 `CI` 测试。
6. 提交 git commit, 请同时遵守 [Commit 规范](#commit-指南)。
7. 提交 pull request, 如果有对应的 issue，请进行[关联](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword)。

## Commit 指南

Commit messages 请遵循[conventional-changelog 标准](https://www.conventionalcommits.org/en/v1.0.0/)：

```bash
<类型>[可选 范围]: <描述>

[可选 正文]

[可选 脚注]
```

### Commit 类型

- feat: 新特性或功能
- fix: 缺陷修复
- docs: 文档更新
- style: 代码风格或者组件样式更新
- refactor: 代码重构，不引入新功能和缺陷修复
- perf: 性能优化
- test: 单元测试
- chore: 其他不修改 src 或测试文件的提交

## Naive UI Pro Components 项目结构

本仓库使用 `pnpm` 管理，包括以下 packages：

2. `docs`: 组件库文档源码
1. `packages/components`: 所有组件的引用与安装程序、插件程序
3. `packages/config`: 组件库的编译配置
3. `packages/controls`: 控件组件
3. `packages/form`: 表单组件
3. `packages/table`: 表格组件
3. `packages/globals`: 全局组件

## License

[MIT 协议](./LICENSE).
