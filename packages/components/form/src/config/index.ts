import { NpCheckboxGroup } from '@naive-ultra/checkbox'
import { NpRadioGroup } from '@naive-ultra/radio'
import { NAutoComplete, NButton, NCascader, NDatePicker, NInput, NInputNumber, NMention, NRate, NSelect, NSlider, NSwitch, NTimePicker } from 'naive-ui'

export const FieldComponents: Record<string, any> = {
  'date-picker': NDatePicker,
  'select': NSelect,
  'auto-complete': NAutoComplete,
  'cascader': NCascader,
  'input': NInput,
  'input-number': NInputNumber,
  'button': NButton,
  'switch': NSwitch,
  'checkbox-group': NpCheckboxGroup,
  'radio-group': NpRadioGroup,
  'rate': NRate,
  'slider': NSlider,
  'time-picker': NTimePicker,
  'mention': NMention,
}
