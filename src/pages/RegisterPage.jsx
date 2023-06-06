import React, { useContext, useState } from 'react'
import { Grid, useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { registerFormList } from '../data/registerFormList'
import { FormControl } from '../components/base/FormControl'
import { Icon } from '../components/base/Icon'
import { Checkmark } from '@emotion-icons/fluentui-system-filled'
import { AuthLayout } from '../components/base/AuthLayout'
import { LocaleContext } from '../context/Locale'
import {
  formAction,
  formHelperText,
  titlePageLocaleList
} from '../utils/content'
import { ThemeContext } from '../context/Theme'
import { registerUser } from '../api'

export const RegisterPage = () => {
  const navigate = useNavigate()
  const { theme } = useContext(ThemeContext)
  const { locale } = useContext(LocaleContext)
  const { formList, isValid, initialState } = registerFormList({ locale })
  const [isLoading, setIsLoading] = useState(false)
  const toast = useToast()

  const onRegisterUser = (payload) => {
    setIsLoading(true)

    setTimeout(async () => {
      const { error, data } = await registerUser(payload)

      if (!error) {
        toast({
          title: data.message,
          status: 'success',
          duration: 4000,
          isClosable: true,
          position: 'top'
        })

        navigate('/login')
      } else {
        toast({
          title: data.message,
          status: 'error',
          duration: 4000,
          isClosable: true,
          position: 'top'
        })
      }

      setIsLoading(false)
    }, 2000)
  }

  return (
    <AuthLayout
      title={titlePageLocaleList[locale].register}
      redirectPathPage='login'
      flexProps={{
        w: { base: 'full', md: '80%', lg: '60%' }
      }}
      isLoadingForm={isLoading}
      isValidForm={isValid}
      onClickForm={() => onRegisterUser(initialState)}
      isAuthPage
      formAction={formAction[locale].register}
      startFormHelperText={formHelperText[locale].register.start}
      endFormHelperText={formHelperText[locale].register.end}
    >
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
        gap={4}
        w='full'
      >
        {formList.map((register, id) => (
          <FormControl
            key={id}
            label={register.label}
            type={register.type}
            inputLeftElement={
              <Icon
                initIcon={register.initIcon}
                finalIcon={register.finalIcon}
                iconProps={{
                  w: 6,
                  h: 6
                }}
              />
            }
            helperText={register.helperText}
            formHelperTextProps={{
              color: register.inValid
                ? `red.${theme === 'light' ? '600' : '300'}`
                : `gray.${theme === 'light' ? '600' : '300'}`
            }}
            inputProps={{
              placeholder:
                locale === 'en'
                  ? `Enter your ${register.label.toLowerCase()}`
                  : `Masukkan ${register.label.toLowerCase()} anda`,
              value: register.value,
              onChange: register.onChange
            }}
            formControlProps={{
              isRequired: true,
              role: 'group',
              isInvalid: register.inValid,
              onBlur: register.valid
                ? () => register.setInValid(false)
                : () => register.setInValid(true)
            }}
            inputRightElement={
              register.valid && (
                <Icon
                  initIcon={Checkmark}
                  iconProps={{
                    color: 'green.400',
                    w: 6,
                    h: 6
                  }}
                />
              )
            }
          />
        ))}
      </Grid>
    </AuthLayout>
  )
}
