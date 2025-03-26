import type { BundledLanguage, BundledTheme, CodeToHastOptions } from 'shiki'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $highlighter: import('shiki').Highlighter
    $c2h: (code: string, options: CodeToHastOptions<BundledLanguage, BundledTheme>) => string
  }
}
export {}
