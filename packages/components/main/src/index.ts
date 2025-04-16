import type { App } from 'vue'
import { NpActions } from '@naive-ultra/actions'
import { NpCheckboxGroup } from '@naive-ultra/checkbox'
import { NpForm } from '@naive-ultra/form'
import { NpGlobalDialog, NpGlobalMessage, NpGlobalNotification, NpGlobalProvider, NpInstallProvider } from '@naive-ultra/provider'
import { NpRadioGroup } from '@naive-ultra/radio'
import { NpTable } from '@naive-ultra/table'

export * from '@naive-ultra/actions'
export * from '@naive-ultra/checkbox'
export * from '@naive-ultra/form'
export * from '@naive-ultra/provider'
export * from '@naive-ultra/radio'
export * from '@naive-ultra/table'

function install(app: App): void {
  app.component('NpForm', NpForm)
  app.component('NpTable', NpTable)
  app.component('NpActions', NpActions)
  app.component('NpRadioGroup', NpRadioGroup)
  app.component('NpCheckboxGroup', NpCheckboxGroup)
  app.component('NpGlobalProvider', NpGlobalProvider)
  app.component('NpGlobalDialog', NpGlobalDialog)
  app.component('NpGlobalMessage', NpGlobalMessage)
  app.component('NpGlobalNotification', NpGlobalNotification)
  app.component('NpInstallProvider', NpInstallProvider)
}

export { install }

export default install
