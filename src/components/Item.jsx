import React from 'react'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import { Menu } from './Menu'

export const Item = ({ data, onArchive, onDelete, setPathName, active }) => {
  return (
    <Box p={[4, 8, 12]} bgColor='yellow.50' rounded={8} color='gray.600'>
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
        <Menu
          data={data}
          onArchive={onArchive}
          onDelete={onDelete}
          setPathName={setPathName}
          active={active}
        />

        <Text color='gray.400' noOfLines={1}>
          {data.createdAt}
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
