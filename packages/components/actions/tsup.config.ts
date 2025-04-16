import { defineBuildConfig } from 'tsup-define'

export default defineBuildConfig({
  format: ['cjs', 'esm', 'iife', 'iife-min'],
  entry: ['src/index.ts'],
  name: 'pro-actions',
  globalName: 'NaiveProActions',
  globals: {
    vue: 'Vue',
  },
  clean: true,
})
