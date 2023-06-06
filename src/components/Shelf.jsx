import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Box, SimpleGrid } from '@chakra-ui/react'
import { Item } from './Item'
import { ThemeContext } from '../context/Theme'
import { EmptyState } from './EmptyState'
import { Navigation } from './base/Navigation'

export const Shelf = ({ notes, isLoading }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <>
      {isLoading ? (
        <Navigation
          buttonProps={{
            color: `gray.${theme === 'light' ? '300' : '600'}`,
            display: 'flex',
            gap: 2,
            isLoading: true,
            h: 'full',
            variant: '',
            loadingText: 'Wait a minute'
          }}
        />
      ) : (
        <Box flexGrow={1} overflowY='auto'>
          {notes && notes.length > 0 ? (
            <SimpleGrid
              bgColor={theme === 'light' ? 'gray.50' : 'gray.900'}
              columns={[1, 1, 2, 3]}
              gap={4}
              w='full'
              px={[4, 8, 12]}
            >
              {notes.map((note) => (
                <Item key={note.id} data={note} />
              ))}
            </SimpleGrid>
          ) : (
            <EmptyState />
          )}
        </Box>
      )}
    </>
  )
}

Shelf.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired
}
