import React, { useContext } from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import { Icon } from './base/Icon'
import { Add as AddRegular, Note } from '@emotion-icons/fluentui-system-regular'
import { ThemeContext } from '../context/Theme'
import { LocaleContext } from '../context/Locale'
import { Navigation } from './base/Navigation'
import { Add as AddFilled } from '@emotion-icons/fluentui-system-filled'
import { useNavigate } from 'react-router-dom'

export const EmptyState = () => {
  const navigate = useNavigate()
  const { theme } = useContext(ThemeContext)
  const { locale } = useContext(LocaleContext)

  return (
    <Flex
      color={`gray.${theme === 'light' ? '300' : '600'}`}
      direction='column'
      alignItems='center'
      justifyContent='center'
      px={[4, 0]}
      h='full'
      gap={4}
    >
      <Icon
        initIcon={Note}
        iconProps={{
          w: 12,
          h: 12
        }}
      />

      <Box textAlign='center'>
        <Text fontSize='md'>
          {`Ops... ${locale === 'en' ? 'no notes yet' : 'belum ada catatan'}.`}
        </Text>
        <Text fontSize='md'>
          {`${
            locale === 'en'
              ? 'Please add one or more notes'
              : 'Silahkan tambah satu atau beberapa catatan'
          }.`}
        </Text>
      </Box>

      <Navigation
        initIcon={AddRegular}
        finalIcon={AddFilled}
        iconProps={{
          w: 6,
          h: 6
        }}
        text='Add Note'
        buttonProps={{
          color: `gray.${theme === 'light' ? '700' : '200'}`,
          display: 'flex',
          gap: 4,
          bgColor: `yellow.${theme === 'light' ? '400' : '500'}`,
          _hover: {
            color: `gray.${theme === 'light' ? '200' : '700'}`,
            bgColor: `yellow.${theme === 'light' ? '500' : '400'}`,
            onClick: () => navigate('/add')
          }
        }}
      />
    </Flex>
  )
}
