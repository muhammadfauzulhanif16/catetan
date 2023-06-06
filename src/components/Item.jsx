import React, { useContext } from 'react'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import { Menu } from './Menu'
import { ThemeContext } from '../context/Theme'
import moment from 'moment'

export const Item = ({ data }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <Box
      p={[4, 8, 12]}
      bgColor={`yellow.${theme === 'light' ? '100' : '800'}`}
      rounded={8}
      color={`gray.${theme === 'light' ? '600' : '300'}`}
    >
      <Heading noOfLines={1} size='lg'>
        {data.title}
      </Heading>
      <Text noOfLines={2}>{data.body}</Text>

      <Flex
        mt={[2, 4, 6]}
        justifyContent='space-between'
        alignItems='center'
        gap={4}
      >
        <Menu data={data} />

        <Text color={`gray.${theme === 'light' ? '500' : '400'}`} noOfLines={1}>
          {moment(data.createdAt).format('DD/MM/YY, HH:mm:ss')}
        </Text>
      </Flex>
    </Box>
  )
}

Item.propTypes = {
  data: PropTypes.object,
  onArchive: PropTypes.func,
  onDelete: PropTypes.func,
  setPathName: PropTypes.func,
  active: PropTypes.string
}
