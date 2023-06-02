import { NAutoComplete, NButton, NCascader, NDatePicker, NInput, NInputNumber, NMention, NRate, NSelect, NSlider, NSwitch, NTimePicker } from 'naive-ui'
import { NProCheckboxGroup } from '@naive-ui-pro/checkbox'
import { NProRadioGroup } from '@naive-ui-pro/radio'

export const FieldComponents: Record<string, any> = {
  'date-picker': NDatePicker,
  'select': NSelect,
  'auto-complete': NAutoComplete,
  'cascader': NCascader,
  'input': NInput,
  'input-number': NInputNumber,
  'button': NButton,
  'switch': NSwitch,
  'checkbox-group': NProCheckboxGroup,
  'radio-group': NProRadioGroup,
  'rate': NRate,
  'slider': NSlider,
  'time-picker': NTimePicker,
  'mention': NMention,
}
