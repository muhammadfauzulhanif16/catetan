import React, { useContext, useState } from 'react'
import { Layout } from '../components/base/Layout'
import { Header } from '../components/Header'
import { NavBar } from '../components/NavBar'
import { LocaleContext } from '../context/Locale'
import PropTypes from 'prop-types'
import { Flex, useToast } from '@chakra-ui/react'
import { FormControl } from '../components/base/FormControl'
import { useForm } from '../utils/hooks'
import { ThemeContext } from '../context/Theme'
import { Navigation } from '../components/base/Navigation'
import { Send as SendFilled } from '@emotion-icons/fluentui-system-filled'
import { Send as SendRegular } from '@emotion-icons/fluentui-system-regular'
import { addNote } from '../api'
import { useNavigate } from 'react-router-dom'

export const AddNotePage = ({ onLogOut }) => {
  const { theme } = useContext(ThemeContext)
  const { locale } = useContext(LocaleContext)
  const [isLoadingForm, setIsLoadingForm] = useState(false)
  const toast = useToast()
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [content, onContentChange] = useForm('')
  const [maxTitleLength, setMaxTitleLength] = useState(50)

  const onTitleChange = (e) => {
    if (e.target.value.length <= 50) {
      setTitle(e.target.value)
      setMaxTitleLength(50 - e.target.value.length)
    }
  }

  const initialState = {
    title,
    body: content
  }

  const isValidTitle = title.length > 0
  const isValidContent = content.length > 0

  const isValidForm = !isValidTitle || !isValidContent

  const [isInValidTitle, setIsInValidTitle] = useState(false)
  const [isInValidContent, setIsInValidContent] = useState(false)

  const onAddNote = (payload) => {
    setIsLoadingForm(true)

    setTimeout(async () => {
      const { error, data } = await addNote(payload)

      if (!error) {
        toast({
          title: data.message,
          status: 'success',
          duration: 4000,
          isClosable: true,
          position: 'top'
        })

        navigate('/')
        localStorage.setItem('catetan-path', 'active')
      } else {
        toast({
          title: data.message,
          status: 'error',
          duration: 4000,
          isClosable: true,
          position: 'top'
        })
      }

      setIsLoadingForm(false)
    }, 2000)
  }

  return (
    <Layout title={locale === 'en' ? 'AddNotePage Note' : 'Tambah Catatan'}>
      <Header layout='app' onLogOut={onLogOut} />

      <Flex
        justifyContent='center'
        display='flex'
        alignItems='center'
        flexGrow={1}
        px={{ base: 4 }}
      >
        <Flex w={['full', '80%', '60%', '40%']} gap={4} direction='column'>
          <FormControl
            label={locale === 'en' ? 'Title' : 'Judul'}
            type='text'
            helperText={
              isInValidTitle
                ? `${
                    locale === 'en' ? 'Title is required' : 'Judul diperlukan'
                  }`
                : `${
                    locale === 'en'
                      ? `Maximal: ${maxTitleLength} characters left`
                      : `Maksimal: ${maxTitleLength} karakter tersisa`
                  }`
            }
            formHelperTextProps={{
              color: isInValidTitle
                ? `red.${theme === 'light' ? '600' : '300'}`
                : `gray.${theme === 'light' ? '600' : '300'}`
            }}
            inputProps={{
              placeholder: locale === 'en' ? 'Enter tile' : 'Masukkan judul',
              value: title,
              onChange: onTitleChange
            }}
            formControlProps={{
              isRequired: true,
              isInvalid: isInValidTitle,
              onBlur: isValidTitle
                ? () => setIsInValidTitle(false)
                : () => setIsInValidTitle(true)
            }}
          />

          <FormControl
            type='textarea'
            label={locale === 'en' ? 'Content' : 'Isi'}
            helperText={
              isInValidContent
                ? `${
                    locale === 'en' ? 'Content is required' : 'Isi diperlukan'
                  }`
                : `${locale === 'en' ? "Can't be empty" : 'Tidak boleh kosong'}`
            }
            formHelperTextProps={{
              color: isInValidContent
                ? `red.${theme === 'light' ? '600' : '300'}`
                : `gray.${theme === 'light' ? '600' : '300'}`
            }}
            textareaProps={{
              placeholder: locale === 'en' ? 'Type anything' : 'Ketik apa saja',
              value: content,
              onChange: onContentChange
            }}
            formControlProps={{
              isRequired: true,
              isInvalid: isInValidContent,
              onBlur: isValidContent
                ? () => setIsInValidContent(false)
                : () => setIsInValidContent(true)
            }}
          />

          <Navigation
            buttonProps={{
              type: 'submit',
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
              onClick: () => onAddNote(initialState)
            }}
            initIcon={SendRegular}
            finalIcon={SendFilled}
            iconProps={{
              w: 6,
              h: 6
            }}
            text={locale === 'en' ? 'Submit' : 'Kirim'}
          />
        </Flex>
      </Flex>

      <NavBar />
    </Layout>
  )
}

AddNotePage.propTypes = {
  onLogOut: PropTypes.func
}
