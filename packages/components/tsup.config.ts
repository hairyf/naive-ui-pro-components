import { defineBuildConfig } from '@naive-ui-pro/config'

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
    entry: ['src/resolvers.ts'],
    dts: true,
  },
]
