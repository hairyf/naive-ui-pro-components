import type { App } from 'vue'
import { NuActions } from '@naive-ultra/actions'
import { NuCheckboxGroup } from '@naive-ultra/checkbox'
import { NuForm } from '@naive-ultra/form'
import { NuGlobalDialog, NuGlobalMessage, NuGlobalNotification, NuGlobalProvider, NuInstallProvider } from '@naive-ultra/provider'
import { NuRadioGroup } from '@naive-ultra/radio'
import { NuTable } from '@naive-ultra/table'

export * from '@naive-ultra/actions'
export * from '@naive-ultra/checkbox'
export * from '@naive-ultra/form'
export * from '@naive-ultra/provider'
export * from '@naive-ultra/radio'
export * from '@naive-ultra/table'

function install(app: App): void {
  app.component('NuForm', NuForm)
  app.component('NuTable', NuTable)
  app.component('NuActions', NuActions)
  app.component('NuRadioGroup', NuRadioGroup)
  app.component('NuCheckboxGroup', NuCheckboxGroup)
  app.component('NuGlobalProvider', NuGlobalProvider)
  app.component('NuGlobalDialog', NuGlobalDialog)
  app.component('NuGlobalMessage', NuGlobalMessage)
  app.component('NuGlobalNotification', NuGlobalNotification)
  app.component('NuInstallProvider', NuInstallProvider)
}

export { install }

export default install
