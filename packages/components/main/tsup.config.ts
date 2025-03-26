import { defineBuildConfig } from 'tsup-define'

export default [
  ...defineBuildConfig({
    format: ['cjs', 'esm', 'iife', 'iife-min'],
    entry: ['src/index.ts'],
    name: 'naive-ui-pro-components',
    globalName: 'NaiveUIProComponents',
    globals: {
      'naive-ui': 'naive',
      'vue': 'Vue',
    },
    clean: true,
    dts: true,
  }),
  {
    format: ['cjs', 'esm'],
    entry: ['src/resolver.ts', 'src/imports.ts'],
    dts: true,
  },
]
