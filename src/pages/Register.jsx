import React, { useContext } from 'react'
import { Button, Flex, Grid, Link, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { register } from '../utils/register'
import { FormControl } from '../components/FormControl'
import { Icon } from '../components/Icon'
import { Checkmark } from '@emotion-icons/fluentui-system-filled'
import { LockClosed, LockOpen } from '@emotion-icons/fluentui-system-regular'
import { AuthLayout } from '../components/AuthLayout'
import { LocaleContext } from '../context/Locale'
import { title } from '../utils/content'

export const Register = () => {
  const navigate = useNavigate()
  const { locale } = useContext(LocaleContext)
  const {
    registerList,
    isValidFullName,
    isValidEmail,
    isValidPassword,
    isValidConfirmPassword
  } = register()

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
            !isValidFullName ||
            !isValidEmail ||
            !isValidPassword ||
            !isValidConfirmPassword ? (
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
          isDisabled={
            !isValidFullName ||
            !isValidEmail ||
            !isValidPassword ||
            !isValidConfirmPassword
          }
          w='full'
          bgColor='yellow.300'
          color='gray.600'
          _hover={{
            bgColor: 'yellow.400'
          }}
          display='flex'
          alignItems='center'
        >
          Create Account
        </Button>

        <Text color='gray.500'>
          Already have an account?{' '}
          <Link color='yellow.500' onClick={() => navigate('/login')}>
            Log in
          </Link>
        </Text>
      </Flex>
    </AuthLayout>
  )
}
