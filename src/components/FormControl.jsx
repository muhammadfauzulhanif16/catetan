import React from 'react'
import {
  FormControl as FormControlChakra,
  FormHelperText,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Textarea
} from '@chakra-ui/react'
import PropTypes from 'prop-types'

export const FormControl = ({
  formControlProps,
  formLabelProps,
  formHelperTextProps,
  inputProps,
  radioGroupProps,
  stackProps,
  textareaProps,
  selectProps,
  label,
  type,
  options,
  helperText
}) => (
  <FormControlChakra {...formControlProps}>
    <FormLabel {...formLabelProps}>{label}</FormLabel>

    {type === 'radio'
      ? (
      <RadioGroup {...radioGroupProps}>
        <Stack {...stackProps}>
          {options.map(({ value, name }, id) => (
            <Radio key={id} value={value}>
              {name}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
        )
      : type === 'textarea'
        ? (
      <Textarea {...textareaProps} bgColor="white" />
          )
        : type === 'select'
          ? (
      <Select {...selectProps}>
        {options.map(({ value, name }, id) => (
          <option key={id} value={value}>
            {name}
          </option>
        ))}
      </Select>
            )
          : (
      <Input type={type} {...inputProps} bgColor="white" />
            )}

    <FormHelperText {...formHelperTextProps}>{helperText}</FormHelperText>
  </FormControlChakra>
)

FormControl.propTypes = {
  formControlProps: PropTypes.object,
  formLabelProps: PropTypes.object,
  formHelperTextProps: PropTypes.object,
  inputProps: PropTypes.object,
  radioGroupProps: PropTypes.object,
  stackProps: PropTypes.object,
  textareaProps: PropTypes.object,
  selectProps: PropTypes.object,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object),
  helperText: PropTypes.string.isRequired
}
