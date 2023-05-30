import React from 'react'
import {
  FormControl as FormControlChakra,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
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
  label,
  type,
  options,
  inputLeftElement,
  inputRightElement,
  helperText
}) => (
  <FormControlChakra {...formControlProps}>
    <FormLabel {...formLabelProps}>{label}</FormLabel>

    {type === 'radio' ? (
      <RadioGroup {...radioGroupProps}>
        <Stack {...stackProps}>
          {options.map(({ name }, id) => (
            <Radio key={id}>{name}</Radio>
          ))}
        </Stack>
      </RadioGroup>
    ) : null}

    {type === 'textarea' ?? <Textarea {...textareaProps} bgColor='white' />}

    {type === 'select' ? (
      <Select>
        {options.map(({ name }, id) => (
          <option key={id}>{name}</option>
        ))}
      </Select>
    ) : null}

    {type !== 'radio' || type !== 'textarea' || type !== 'select' ? (
      <InputGroup>
        <InputLeftElement pointerEvents='none'>
          {inputLeftElement}
        </InputLeftElement>
        <Input type={type} {...inputProps} bgColor='white' />
        <InputRightElement pointerEvents='none'>
          {inputRightElement}
        </InputRightElement>
      </InputGroup>
    ) : null}

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
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object),
  inputLeftElement: PropTypes.any,
  inputRightElement: PropTypes.elementType,
  helperText: PropTypes.string.isRequired
}
