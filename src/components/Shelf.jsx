import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { SimpleGrid } from '@chakra-ui/react'
import { Item } from './Item'
import { ThemeContext } from '../context/Theme'

export const Shelf = ({ notes, onArchive, onDelete, setPathName, active }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <>
      {notes?.length > 0 ? (
        <SimpleGrid
          bgColor={theme === 'light' ? 'gray.50' : 'gray.900'}
          columns={[1, 1, 2, 3]}
          gap={4}
          w='full'
          pb={[24, 32, 40]}
          p={[4, 8, 12]}
        >
          {notes.map((note) => (
            <Item
              key={note.id}
              data={note}
              onArchive={onArchive}
              onDelete={onDelete}
              setPathName={setPathName}
              active={active}
            />
          ))}
        </SimpleGrid>
      ) : (
        // <EmptyState />
        <>Tidak ada</>
      )}
    </>
  )
}

Shelf.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object),
  onArchive: PropTypes.func,
  onDelete: PropTypes.func,
  setPathName: PropTypes.func,
  active: PropTypes.string
}
