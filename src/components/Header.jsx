import React from 'react'
import { Box, Flex, Heading } from '@chakra-ui/react'
import { Logo } from './Logo'
import PropTypes from 'prop-types'
import { FormControl } from './FormControl'
import { Language } from './Language'
import { Theme } from './Theme'
import { Search as SearchRegular } from '@emotion-icons/fluentui-system-regular'
import { Search as SearchFilled } from '@emotion-icons/fluentui-system-filled'
import { Icon } from './Icon'

export const Header = ({ layout }) => (
  <Flex
    flex='none'
    gap={4}
    justifyContent='space-between'
    direction={{ base: 'column', md: 'row' }}
  >
    <Flex gap={4} w='full' justifyContent='space-between'>
      {layout === 'auth' ? (
        <Logo />
      ) : (
        <Box>
          <Heading size='lg' color='yellow.300'>
            Welcome back
          </Heading>
          <Heading size='lg' noOfLines={1} color='gray.600'>
            Muhammad Fauzul Hanif
          </Heading>
        </Box>
      )}

      {layout !== 'auth' && (
        <FormControl
          type='search'
          inputLeftElement={
            <Icon
              initIcon={SearchRegular}
              finalIcon={SearchFilled}
              iconProps={{
                w: 6,
                h: 6
              }}
            />
          }
          formControlProps={{
            w: '40%',
            display: { base: 'none', md: 'block' }
          }}
          inputProps={{
            placeholder: 'Search notes by title...'
          }}
        />
      )}

      {layout === 'auth' ? (
        <Flex gap={4}>
          <Language />

          <Theme />
        </Flex>
      ) : (
        <Box>
          <Theme />
        </Box>
      )}
    </Flex>

    {layout !== 'auth' && (
      <FormControl
        type='search'
        inputLeftElement={
          <Icon
            initIcon={SearchRegular}
            finalIcon={SearchFilled}
            iconProps={{
              w: 6,
              h: 6
            }}
          />
        }
        formControlProps={{
          w: 'full',
          display: { base: 'block', md: 'none' }
        }}
        inputProps={{
          placeholder: 'Search notes by title...'
        }}
      />
    )}
  </Flex>
)

Header.propTypes = {
  layout: PropTypes.oneOf(['auth', 'app']).isRequired
}
