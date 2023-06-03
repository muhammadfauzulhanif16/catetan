import React, { useContext } from 'react'
import { Flex, Grid, Link, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { register } from '../utils/register'
import { FormControl } from '../components/base/FormControl'
import { Icon } from '../components/base/Icon'
import { Checkmark } from '@emotion-icons/fluentui-system-filled'
import { AuthLayout } from '../components/base/AuthLayout'
import { LocaleContext } from '../context/Locale'
import { action, formHelperText, title } from '../utils/content'
import { ThemeContext } from '../context/Theme'
import { Nav } from '../components/base/Nav'
import { LockClosed as LockClosedRegular } from '@emotion-icons/fluentui-system-regular/LockClosed'
import { LockOpen as LockOpenRegular } from '@emotion-icons/fluentui-system-regular/LockOpen'
import { LockClosed as LockClosedFilled } from '@emotion-icons/fluentui-system-filled/LockClosed'
import { LockOpen as LockOpenFilled } from '@emotion-icons/fluentui-system-filled/LockOpen'

export const Register = () => {
  const navigate = useNavigate()
  const { theme } = useContext(ThemeContext)
  const { locale } = useContext(LocaleContext)
  const {
    registerList,
    isValidFullName,
    isValidEmail,
    isValidPassword,
    isValidConfirmPassword
  } = register(locale)

  return (
    <AuthLayout title={title[locale].register}>
      <Flex
        flexGrow={1}
        direction='column'
        gap={[4, 6, 8]}
        w={{ base: 'full', md: '80%', lg: '60%' }}
        m='auto'
        justifyContent='center'
        alignItems='center'
      >
        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
          gap={4}
          w='full'
        >
          {registerList.map((register, id) => (
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

        <Nav
          buttonProps={{
            isLoading: false,
            loadingText: locale === 'en' ? 'Loading' : 'Memuat',
            isDisabled:
              !isValidFullName ||
              !isValidEmail ||
              !isValidPassword ||
              !isValidConfirmPassword,
            display: 'flex',
            gap: 4,
            w: 'full',
            color: `gray.${theme === 'light' ? '600' : '300'}`,
            bgColor: `yellow.${theme === 'light' ? '400' : '500'}`,
            _hover: {
              color: `gray.${theme === 'light' ? '300' : '600'}`,
              bgColor: `yellow.${theme === 'light' ? '500' : '400'}`
            },
            role: 'group',
            onClick: () => navigate('/all')
          }}
          initIcon={
            !isValidFullName ||
            !isValidEmail ||
            !isValidPassword ||
            !isValidConfirmPassword
              ? LockClosedRegular
              : LockOpenRegular
          }
          finalIcon={
            !isValidFullName ||
            !isValidEmail ||
            !isValidPassword ||
            !isValidConfirmPassword
              ? LockClosedFilled
              : LockOpenFilled
          }
          iconProps={{
            w: 6,
            h: 6
          }}
          text={action[locale].register.button}
        />

        <Text color='gray.500'>
          {`${formHelperText[locale].register}? `}
          <Link color='yellow.500' onClick={() => navigate('/login')}>
            {action[locale].login.link}
          </Link>
        </Text>
      </Flex>
    </AuthLayout>
  )
}
