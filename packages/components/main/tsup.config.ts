import { defineBuildConfig } from 'tsup-define'

export default [
  ...defineBuildConfig({
    format: ['cjs', 'esm', 'iife', 'iife-min'],
    entry: ['src/index.ts'],
    name: 'naive-ultra',
    globalName: 'NaiveUltra',
    globals: {
      'naive-ui': 'naive',
      'vue': 'Vue',
    },
    clean: true,

  }),
  {
    format: ['cjs', 'esm'],
    entry: ['src/resolver.ts', 'src/imports.ts'],
    name: 'naive-ultra',
    dts: true,
  },
]
