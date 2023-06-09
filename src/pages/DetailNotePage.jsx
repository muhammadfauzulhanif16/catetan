import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  deleteNote,
  editArchiveNote,
  editUnarchiveNote,
  getActiveNotes,
  getArchiveNotes,
  getNote
} from '../api'
import { Layout } from '../components/base/Layout'
import { Header } from '../components/Header'
import { NavBar } from '../components/NavBar'
import { LocaleContext } from '../context/Locale'
import PropTypes from 'prop-types'
import { Badge, Flex, Heading, Text, useToast } from '@chakra-ui/react'
import { ThemeContext } from '../context/Theme'
import { Navigation } from '../components/base/Navigation'
import {
  Archive as ArchiveRegular,
  Delete as DeleteRegular
} from '@emotion-icons/fluentui-system-regular'
import {
  Archive as ArchiveFilled,
  Delete as DeleteFilled
} from '@emotion-icons/fluentui-system-filled'
import { NotesContext } from '../context/Notes'
import moment from 'moment/moment'
import { LoadingState } from '../components/LoadingState'

export const DetailNotePage = ({ onLogOut }) => {
  const { theme } = useContext(ThemeContext)
  const { locale } = useContext(LocaleContext)
  const navigate = useNavigate()
  const toast = useToast()
  const [note, setNote] = useState(null)
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const { setNotes } = useContext(NotesContext)
  localStorage.setItem('catetan-path', 'detail')

  const onStatusNote = (data) => {
    setTimeout(async () => {
      const { error, data: note } = data.archived
        ? await editUnarchiveNote(data.id)
        : await editArchiveNote(data.id)

      if (!error) {
        toast({
          title: note.message,
          status: 'success',
          duration: 4000,
          isClosable: true,
          position: 'top'
        })
      } else {
        toast({
          title: note.message,
          status: 'error',
          duration: 4000,
          isClosable: true,
          position: 'top'
        })
      }

      data.archived
        ? getArchiveNotes().then(({ data }) => setNotes(data))
        : getActiveNotes().then(({ data }) => setNotes(data))
    })
  }

  const onDeleteNote = async (data) => {
    const { error, data: note } = await deleteNote(data.id)

    if (!error) {
      toast({
        title: note.message,
        status: 'success',
        duration: 4000,
        isClosable: true,
        position: 'top'
      })
    } else {
      toast({
        title: note.message,
        status: 'error',
        duration: 4000,
        isClosable: true,
        position: 'top'
      })
    }

    data.archived
      ? getArchiveNotes().then(({ data }) => setNotes(data))
      : getActiveNotes().then(({ data }) => setNotes(data))
  }

  useEffect(() => {
    setTimeout(() => {
      getNote(id).then(({ data }) => {
        setNote(data)
        setIsLoading(false)
      })
    }, 2000)
  }, [id])

  const actionDetailPage = [
    {
      text:
        locale === 'en'
          ? `${note?.archived ? 'Unarchive' : 'Archive'}`
          : `${note?.archived ? 'Batalkan arsip' : 'Arsipkan'}`,
      initIcon: ArchiveRegular,
      finalIcon: ArchiveFilled,
      color: 'purple',
      onClick: onStatusNote
    },
    {
      text: locale === 'en' ? 'Delete' : 'Hapus',
      initIcon: DeleteRegular,
      finalIcon: DeleteFilled,
      color: 'red',
      onClick: onDeleteNote
    }
  ]

  return (
    <Layout title={locale === 'en' ? 'Active Notes' : 'Catatan Aktif'}>
      <Header layout='app' onLogOut={onLogOut} />

      {isLoading ? (
        <LoadingState />
      ) : (
        <Flex
          direction='column'
          px={[4, 8, 12]}
          h='full'
          color={`gray.${theme === 'light' ? '600' : '300'}`}
          gap={4}
          justifyContent='space-between'
        >
          <Flex gap={4} direction='column'>
            <Heading w='full'>{note.title}</Heading>

            <Flex
              justifyContent='space-between'
              w='full'
              gap={4}
              alignItems='center'
            >
              <Text color={`gray.${theme === 'light' ? '500' : '400'}`}>
                {moment(note.createdAt).format('DD/MM/YY, HH:mm:ss')}
              </Text>

              {note.archived && (
                <Badge colorScheme='purple'>
                  {locale === 'en' ? 'Archived' : 'Diarsipkan'}
                </Badge>
              )}
            </Flex>

            <Text>{note.body}</Text>
          </Flex>

          <Flex gap={4}>
            {actionDetailPage.map((action, id) => (
              <Navigation
                key={id}
                initIcon={action.initIcon}
                finalIcon={action.finalIcon}
                iconProps={{
                  w: 6,
                  h: 6
                }}
                buttonProps={{
                  display: 'flex',
                  gap: [2, 4],
                  w: 'full',
                  variant: 'outline',
                  color: `${action.color}.${theme === 'light' ? '400' : '500'}`,
                  borderColor: `${action.color}.${
                    theme === 'light' ? '400' : '500'
                  }`,
                  _hover: {
                    bgColor: `gray.${theme === 'light' ? '100' : '800'}`
                  },
                  onClick: () => {
                    navigate(`/${note.archived ? 'archive' : ''}`)
                    localStorage.setItem(
                      'catetan-path',
                      `${note.archived ? 'archive' : 'active'}`
                    )
                    action.onClick(note)
                  }
                }}
                text={action.text}
              />
            ))}
          </Flex>
        </Flex>
      )}

      <NavBar />
    </Layout>
  )
}

DetailNotePage.propTypes = {
  onLogOut: PropTypes.func
}
