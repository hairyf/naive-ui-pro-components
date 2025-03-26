import type Globals from 'esbuild-plugin-globals'
import type { Options as _Options } from 'tsup'

export interface Options extends Omit<_Options, 'format'> {
  globals?: Parameters<typeof Globals>[0]
  format?: ('cjs' | 'esm' | 'iife' | 'iife-min')[]
}
export declare function defineBuildConfig(options: Options): _Options[]
