# Contribution Guidelines

Thank you for your valuable time. Your contributions will make this project better! Before making any contributions, please take the time to read the getting started guide below.

## Code of Conduct

This project has a [Code of Conduct](./CODE_OF_CONDUCT.md) that all contributors are expected to strictly adhere to.

## Transparent Development

All work is done directly and transparently on GitHub. Both core team members and external contributors' pull requests go through the same code review process.

## Semantic Versioning

This project follows semantic versioning. We release patch versions for important bug fixes, minor versions for new features or non-breaking changes, and major versions for major and potentially breaking changes.

## Reporting Issues

We use [Github issues](https://github.com/ano-ui/ano-ui/issues) for reporting bugs and suggesting new features. Before reporting a bug, please make sure to search for similar [issues](https://github.com/ano-ui/ano-ui/issues) as they may have already been answered or are being addressed. For bug reports, please include code that can be used to reproduce the issue. For new feature suggestions, please describe the desired changes and expected behavior.

## Submitting Pull Requests

1. Fork [this repository](https://github.com/ano-ui/ano-ui) and create a branch from `main`. For new feature implementations, submit the pull request to the `feature` branch. For other changes, submit to the `main` branch.
2. Install dependencies using `pnpm install`.
3. Start and view the documentation and examples with `pnpm run docs:dev`.
4. Make changes to the codebase, add corresponding test files, and run tests with `pnpm run test`.
5. Before committing the code, run `pnpm run test:ci` for CI testing.
6. Commit the changes using git commit, following the [Commit Guidelines](#commit-guidelines).
7. Submit the pull request, and if there is a related issue, [link](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword) it.

## Commit Guidelines

Please follow the [conventional-changelog standard](https://www.conventionalcommits.org/en/v1.0.0/) for commit messages:

```bash
<type>[optional scope]: <description>

[optional body]

[optional footer]
```

### Commit Types

- feat: New feature or enhancement
- fix: Bug fix
- docs: Documentation update
- style: Code style or component style update
- refactor: Code refactoring without introducing new features or fixing bugs
- perf: Performance optimization
- test: Unit tests
- chore: Other commits that do not modify src or test files

## Naive UI Pro Components Project Structure

This repository uses `pnpm` for management and includes the following packages:

2. `docs`: Source code for the component library documentation
1. `packages/components`: Reference and installation programs for all components, plugin programs
3. `packages/config`: Compilation configuration for the component library
3. `packages/controls`: Control components
3. `packages/form`: Form components
3. `packages/table`: Table components
3. `packages/globals`: Global components

## License

[MIT License](./LICENSE).