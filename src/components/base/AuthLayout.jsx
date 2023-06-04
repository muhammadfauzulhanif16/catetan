import React, { useContext } from 'react'
import { Layout } from './Layout'
import { Footer } from '../Footer'
import { Header } from '../Header'
import PropTypes from 'prop-types'
import { Flex, Link, Text } from '@chakra-ui/react'
import { LockClosed as LockClosedRegular } from '@emotion-icons/fluentui-system-regular/LockClosed'
import { LockOpen as LockOpenRegular } from '@emotion-icons/fluentui-system-regular/LockOpen'
import { LockClosed as LockClosedFilled } from '@emotion-icons/fluentui-system-filled/LockClosed'
import { LockOpen as LockOpenFilled } from '@emotion-icons/fluentui-system-filled/LockOpen'
import { ThemeContext } from '../../context/Theme'
import { LocaleContext } from '../../context/Locale'
import { Navigation } from './Navigation'
import { useNavigate } from 'react-router-dom'

export const AuthLayout = ({
  title,
  children,
  flexProps,
  isLoadingForm,
  isValidForm,
  onClickForm,
  isAuthPage,
  formAction,
  startFormHelperText,
  endFormHelperText,
  redirectPathPage
}) => {
  const { theme } = useContext(ThemeContext)
  const { locale } = useContext(LocaleContext)
  const navigate = useNavigate()

  return (
    <Layout
      title={title}
      boxProps={{
        display: 'flex',
        flexDirection: 'column',
        h: '100vh'
      }}
    >
      <Header layout='auth' />

      <Flex
        {...flexProps}
        flexGrow={1}
        direction='column'
        gap={[4, 6, 8]}
        m='auto'
        justifyContent='center'
        alignItems='center'
        px={[4, 4, 8, 12]}
      >
        {children}

        {isAuthPage && (
          <>
            <Navigation
              buttonProps={{
                isLoading: isLoadingForm,
                loadingText:
                  isLoadingForm && locale === 'en' ? 'Loading' : 'Memuat',
                isDisabled: isValidForm,
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
                onClick: onClickForm
              }}
              initIcon={isValidForm ? LockClosedRegular : LockOpenRegular}
              finalIcon={isValidForm ? LockClosedFilled : LockOpenFilled}
              iconProps={{
                w: 6,
                h: 6
              }}
              text={formAction}
            />

            <Text color='gray.500'>
              {`${startFormHelperText}? `}
              <Link
                color='yellow.500'
                onClick={() => navigate(`/${redirectPathPage}`)}
              >
                {endFormHelperText}
              </Link>
            </Text>
          </>
        )}
      </Flex>
      <Footer />
    </Layout>
  )
}

AuthLayout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  flexProps: PropTypes.object,
  isLoadingForm: PropTypes.bool,
  isValidForm: PropTypes.bool,
  onClickForm: PropTypes.func,
  isAuthPage: PropTypes.bool,
  formAction: PropTypes.string,
  startFormHelperText: PropTypes.string,
  endFormHelperText: PropTypes.string,
  redirectPathPage: PropTypes.string
}
