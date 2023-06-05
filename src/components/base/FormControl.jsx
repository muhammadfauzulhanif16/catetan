import React, { useContext } from 'react'
import {
  FormControl as FormControlChakra,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Textarea
} from '@chakra-ui/react'
import PropTypes from 'prop-types'
import { ThemeContext } from '../../context/Theme'

export const FormControl = ({
  formControlProps,
  formLabelProps,
  formHelperTextProps,
  inputProps,
  label,
  type,
  inputLeftElement,
  inputRightElement,
  helperText,
  textareaProps
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

      {type !== 'textarea' && (
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
      )}

      {type === 'textarea' && (
        <Textarea
          {...textareaProps}
          bgColor={theme === 'light' ? 'whiteAlpha.900' : 'blackAlpha.50'}
          borderColor={`gray.${theme === 'light' ? '300' : '600'}`}
          focusBorderColor={`blue.${theme === 'light' ? '600' : '300'}`}
          errorBorderColor={`red.${theme === 'light' ? '600' : '300'}`}
          color={`gray.${theme === 'light' ? '800' : '100'}`}
        />
      )}

      {helperText && (
        <FormHelperText {...formHelperTextProps}>{helperText}</FormHelperText>
      )}
    </FormControlChakra>
  )
}

FormControl.propTypes = {
  formControlProps: PropTypes.object,
  formLabelProps: PropTypes.object,
  formHelperTextProps: PropTypes.object,
  inputProps: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  inputLeftElement: PropTypes.any,
  inputRightElement: PropTypes.node,
  helperText: PropTypes.string,
  textareaProps: PropTypes.object
}
