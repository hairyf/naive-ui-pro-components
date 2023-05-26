import { Options as _Options } from 'tsup'
import Globals from 'esbuild-plugin-globals'
export interface Options extends Omit<_Options, 'format'> {
  globals?: Parameters<typeof Globals>[0]
  format?: ('cjs'| 'esm'| 'iife'| 'iife-min')[]
}
export declare function defineBuildConfig(options: Options): _Options