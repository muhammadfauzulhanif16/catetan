import React from 'react'
import { Button } from '@chakra-ui/react'
import { Icon } from './Icon'
import { ID, US } from 'country-flag-icons/react/3x2'
import PropTypes from 'prop-types'

export const Language = ({ locale, onLocaleChange }) => (
  <Button p={0} onClick={onLocaleChange}>
    {locale === 'en' ? (
      <Icon
        initIcon={ID}
        iconProps={{
          w: 6,
          h: 6
        }}
      />
    ) : (
      <Icon
        initIcon={US}
        iconProps={{
          w: 6,
          h: 6
        }}
      />
    )}
  </Button>
)

Language.propTypes = {
  locale: PropTypes.string.isRequired,
  onLocaleChange: PropTypes.func.isRequired
}
