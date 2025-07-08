import type { ComponentResolver } from 'unplugin-vue-components/types'

function NaiveUltraResolver(): ComponentResolver {
  return {
    type: 'component',
    resolve: (name: string) => {
      if (name.match(/^Nu.+/))
        return { name, from: 'naive-ultra' }
    },
  }
}

export default NaiveUltraResolver
