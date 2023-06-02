import React, { useContext } from 'react'
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
import { ThemeContext } from '../../context/Theme'

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
}) => {
  const { theme } = useContext(ThemeContext)

  return (
    <FormControlChakra {...formControlProps}>
      {label && (
        <FormLabel
          {...formLabelProps}
          color={`gray.${theme === 'light' ? '600' : '300'}`}
        >
          {label}
        </FormLabel>
      )}

      {type === 'radio' && (
        <RadioGroup {...radioGroupProps}>
          <Stack {...stackProps}>
            {options.map(({ name }, id) => (
              <Radio key={id}>{name}</Radio>
            ))}
          </Stack>
        </RadioGroup>
      )}

      {type === 'textarea' ?? <Textarea {...textareaProps} bgColor='white' />}

      {type === 'select' && (
        <Select>
          {options.map(({ name }, id) => (
            <option key={id}>{name}</option>
          ))}
        </Select>
      )}

      {type !== 'radio' || type !== 'textarea' || type !== 'select' ? (
        <InputGroup>
          {inputLeftElement && (
            <InputLeftElement
              pointerEvents='none'
              color={theme === 'light' ? 'gray.500' : 'gray.400'}
            >
              {inputLeftElement}
            </InputLeftElement>
          )}

          <Input
            type={type}
            {...inputProps}
            bgColor={theme === 'light' ? 'whiteAlpha.900' : 'blackAlpha.50'}
            borderColor={`gray.${theme === 'light' ? '300' : '600'}`}
            focusBorderColor={`blue.${theme === 'light' ? '600' : '300'}`}
            errorBorderColor={`red.${theme === 'light' ? '600' : '300'}`}
            color={`gray.${theme === 'light' ? '800' : '100'}`}
          />

          {inputRightElement && (
            <InputRightElement pointerEvents='none'>
              {inputRightElement}
            </InputRightElement>
          )}
        </InputGroup>
      ) : null}

      <FormHelperText {...formHelperTextProps}>{helperText}</FormHelperText>
    </FormControlChakra>
  )
}

FormControl.propTypes = {
  formControlProps: PropTypes.object,
  formLabelProps: PropTypes.object,
  formHelperTextProps: PropTypes.object,
  inputProps: PropTypes.object,
  radioGroupProps: PropTypes.object,
  stackProps: PropTypes.object,
  textareaProps: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object),
  inputLeftElement: PropTypes.any,
  inputRightElement: PropTypes.node,
  helperText: PropTypes.string
}
