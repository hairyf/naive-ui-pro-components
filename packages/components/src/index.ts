import type { App } from 'vue'
import { NpForm } from '@naive-ui-pro/form'
import { NpTable } from '@naive-ui-pro/table'
import { NpRadioGroup } from '@naive-ui-pro/radio'
import { NpCheckboxGroup } from '@naive-ui-pro/checkbox'
import { NpGlobalDialog, NpGlobalMessage, NpGlobalNotification, NpGlobalProvider, NpInstallProvider } from '@naive-ui-pro/globals'

export * from '@naive-ui-pro/form'
export * from '@naive-ui-pro/controls'
export * from '@naive-ui-pro/table'
export * from '@naive-ui-pro/globals'
export * from '@naive-ui-pro/radio'
export * from '@naive-ui-pro/checkbox'

function install(app: App): void {
  app.component('NpForm', NpForm)
  app.component('NpTable', NpTable)
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
