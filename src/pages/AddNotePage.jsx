import React, { useContext } from 'react'
import { Layout } from '../components/base/Layout'
import { Header } from '../components/Header'
import { NavBar } from '../components/NavBar'
import { LocaleContext } from '../context/Locale'
import PropTypes from 'prop-types'
import { Flex } from '@chakra-ui/react'
import { FormControl } from '../components/base/FormControl'

export const AddNotePage = ({ onLogOut }) => {
  const { locale } = useContext(LocaleContext)

  return (
    <Layout
      title={locale === 'en' ? 'AddNotePage Note' : 'Tambah Catatan'}
      boxProps={{
        display: 'flex',
        flexDirection: 'column',
        h: '100vh'
      }}
    >
      <Header layout='app' onLogOut={onLogOut} />

      <Flex bgColor='green.300' display='flex'>
        <FormControl
          // key={id}
          // label={login.label}
          label={locale === 'en' ? 'Title' : 'Judul'}
          // type={login.type}
          type='text'
          // inputLeftElement={
          //   <Icon
          //     initIcon={login.initIcon}
          //     finalIcon={login.finalIcon}
          //     iconProps={{
          //       w: 6,
          //       h: 6
          //     }}
          //   />
          // }
          // helperText={login.helperText}
          // formHelperTextProps={{
          //   color: login.inValid
          //     ? `red.${theme === 'light' ? '600' : '300'}`
          //     : `gray.${theme === 'light' ? '600' : '300'}`
          // }}
          inputProps={{
            placeholder: locale === 'en' ? 'Enter tile' : 'Masukkan judul'
            // value: login.value,
            // onChange: login.onChange
          }}
          formControlProps={{
            isRequired: true,
            role: 'group'
            // isInvalid: login.inValid,
            // onBlur: login.valid
            //   ? () => login.setInValid(false)
            //   : () => login.setInValid(true)
          }}
          // inputRightElement={
          //   login.valid && (
          //     <Icon
          //       initIcon={Checkmark}
          //       iconProps={{
          //         color: 'green.400',
          //         w: 6,
          //         h: 6
          //       }}
          //     />
          //   )
          // }
        />
      </Flex>

      <NavBar />
    </Layout>
  )
}

AddNotePage.propTypes = {
  onLogOut: PropTypes.func
}
