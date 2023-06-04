import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthLayout } from '../components/base/AuthLayout'
import { Flex } from '@chakra-ui/react'
import { homePageActionList } from '../data/actionList'
import { LocaleContext } from '../context/Locale'
import { pageTitle } from '../utils/content'
import { ThemeContext } from '../context/Theme'
import { Nav } from '../components/base/Nav'

export const HomePage = () => {
  const navigate = useNavigate()

  const { locale } = useContext(LocaleContext)
  const { theme } = useContext(ThemeContext)

  return (
    <AuthLayout title={pageTitle[locale].home}>
      <Flex
        flexGrow={1}
        direction='column'
        gap={[4, 6, 8]}
        w={['full', '80%', '60%', '40%']}
        m='auto'
        justifyContent='center'
        alignItems='center'
      >
        {homePageActionList().map((action, id) => (
          <Nav
            key={id}
            text={action.name}
            buttonProps={{
              color: `gray.${theme === 'light' ? '600' : '300'}`,
              variant: action.variant,
              w: 'full',
              borderColor:
                action.variant === 'solid'
                  ? 'transparent'
                  : `yellow.${theme === 'light' ? '400' : '500'}`,
              bgColor:
                action.variant === 'solid'
                  ? `yellow.${theme === 'light' ? '400' : '500'}`
                  : 'transparent',
              _hover: {
                color: `gray.${theme === 'light' ? '300' : '600'}`,
                bgColor: `yellow.${theme === 'light' ? '500' : '400'}`
              },
              onClick: () => navigate(`/${action.path}`)
            }}
          />
        ))}
      </Flex>
    </AuthLayout>
  )
}
