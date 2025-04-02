import { defineBuildConfig } from 'tsup-define'

export default defineBuildConfig({
  format: ['cjs', 'esm', 'iife', 'iife-min'],
  entry: ['src/index.ts'],
  name: 'pro-utils',
  globalName: 'NaiveProUtils',
  globals: {
    vue: 'Vue',
  },
  clean: true,
})
