import React, { useContext } from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import { Icon } from './base/Icon'
import { Note } from '@emotion-icons/fluentui-system-regular'
import { ThemeContext } from '../context/Theme'
import { LocaleContext } from '../context/Locale'

export const EmptyState = () => {
  const { theme } = useContext(ThemeContext)
  const { locale } = useContext(LocaleContext)

  return (
    <Flex
      color={`gray.${theme === 'light' ? '300' : '600'}`}
      direction='column'
      alignItems='center'
      justifyContent='center'
      py={16}
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
          {`Ops... ${locale === 'en' ? 'no notes yet' : 'belum ada catatan'}`}
        </Text>
        <Text fontSize='md'>
          {locale === 'en'
            ? 'Please add one or more notes'
            : 'Silahkan tambahkan satu atau beberapa catatan'}
        </Text>
      </Box>
    </Flex>
  )
}
