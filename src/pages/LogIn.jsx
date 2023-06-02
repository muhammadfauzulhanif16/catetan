import React, { useContext } from 'react'
import { Button, Flex, Grid, Link, Text } from '@chakra-ui/react'
import { FormControl } from '../components/base/FormControl'
import { LockClosed, LockOpen } from '@emotion-icons/fluentui-system-regular'
import { Checkmark } from '@emotion-icons/fluentui-system-filled'
import { Icon } from '../components/base/Icon'
import { useNavigate } from 'react-router-dom'
import { login } from '../utils/login'
import { AuthLayout } from '../components/base/AuthLayout'
import { title } from '../utils/content'
import { LocaleContext } from '../context/Locale'

export const LogIn = () => {
  const navigate = useNavigate()
  const { locale } = useContext(LocaleContext)
  const { loginList, isValidEmail, isValidPassword } = login()

  return (
    <AuthLayout title={title[locale].login}>
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
          {loginList.map((register, id) => (
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
                color: register.inValid ? 'red.600' : 'gray.600'
              }}
              inputProps={{
                placeholder: register.placeholder,
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

        <Button
          isLoading={false}
          loadingText='Creating'
          leftIcon={
            !isValidEmail || !isValidPassword ? (
              <Icon
                initIcon={LockClosed}
                iconProps={{
                  w: 6,
                  h: 6
                }}
              />
            ) : (
              <Icon
                initIcon={LockOpen}
                iconProps={{
                  w: 6,
                  h: 6
                }}
              />
            )
          }
          isDisabled={!isValidEmail || !isValidPassword}
          w='full'
          bgColor='yellow.300'
          color='gray.600'
          _hover={{
            bgColor: 'yellow.400'
          }}
          display='flex'
          alignItems='center'
          onClick={() => navigate('/dashboard')}
        >
          Log In
        </Button>

        <Text color='gray.500'>
          {"Don't have an account yet? "}
          <Link color='yellow.500' onClick={() => navigate('/register')}>
            Register
          </Link>
        </Text>
      </Flex>
    </AuthLayout>
  )
}
