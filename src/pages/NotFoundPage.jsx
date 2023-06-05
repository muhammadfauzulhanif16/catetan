import React, { useContext } from 'react'
import { Layout } from '../components/base/Layout'
import { Header } from '../components/Header'
import { LocaleContext } from '../context/Locale'
import { NavBar } from '../components/NavBar'
import PropTypes from 'prop-types'
import { Flex, Text } from '@chakra-ui/react'
import { Icon } from '../components/base/Icon'
import { Page } from '@emotion-icons/fluentui-system-regular'

export const NotFoundPage = ({ onLogOut }) => {
  const { locale } = useContext(LocaleContext)
  localStorage.setItem('catetan-path', null)

  return (
    <Layout title={locale === 'en' ? 'Not Found' : 'Tidak Ditemukan'}>
      <Header layout='app' onLogOut={onLogOut} />

      <Flex
        color='gray.400'
        direction='column'
        alignItems='center'
        justifyContent='center'
        py={16}
        h='full'
      >
        <Icon
          initIcon={Page}
          iconProps={{
            w: 24,
            h: 24
          }}
        />
        <Text fontSize='xl'>Ops... page not found</Text>
      </Flex>

      <NavBar path='' />
    </Layout>
  )
}

NotFoundPage.propTypes = {
  onLogOut: PropTypes.func
}
