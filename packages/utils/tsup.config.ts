import { defineBuildConfig } from 'tsup-config'

export default defineBuildConfig({
  format: ['cjs', 'esm', 'iife', 'iife-min'],
  entry: ['src/index.ts'],
  name: 'ultra-utils',
  globalName: 'NaiveUltraUtils',
  globals: {
    vue: 'Vue',
  },
  clean: true,
})
