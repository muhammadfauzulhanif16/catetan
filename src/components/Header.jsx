import React, { useContext } from 'react'
import { Box, Flex, Heading } from '@chakra-ui/react'
import { Logo } from './Logo'
import PropTypes from 'prop-types'
import { FormControl } from './base/FormControl'
import { Theme } from './Theme'
import { Search as SearchRegular } from '@emotion-icons/fluentui-system-regular'
import { Search as SearchFilled } from '@emotion-icons/fluentui-system-filled'
import { Icon } from './base/Icon'
import { Drawer } from './Drawer'
import { LocaleContext } from '../context/Locale'
import { ThemeContext } from '../context/Theme'
import { Language } from './Language'

export const Header = ({
  layout,
  onLogOut,
  searchKeyword,
  onSearchKeywordChange
}) => {
  const { locale, onLocaleChange } = useContext(LocaleContext)
  const { theme, onThemeChange } = useContext(ThemeContext)

  return (
    <Flex
      flex='none'
      gap={4}
      justifyContent='space-between'
      direction={{ base: 'column', md: 'row' }}
      bgColor={`gray.${theme === 'light' ? '50' : '900'}`}
      pos='sticky'
      zIndex={2}
      pt={[4, 8, 12]}
      px={[4, 8, 12]}
      pb={localStorage.getItem('catetan-path') === 'add' ? 0 : [4, 8, 12]}
      top={0}
    >
      <Flex gap={4} w='full' justifyContent='space-between'>
        {layout === 'auth' ? (
          <Logo />
        ) : (
          <Box>
            <Heading
              size='lg'
              color={`yellow.${theme === 'light' ? '400' : '500'}`}
            >
              {locale === 'en' ? 'Welcome' : 'Selamat datang'},
            </Heading>

            <Heading
              size='lg'
              noOfLines={1}
              color={`gray.${theme === 'light' ? '500' : '400'}`}
            >
              {locale === 'en'
                ? 'what do wanna note?'
                : 'apa yang ingin dicatat?'}
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
              display: {
                base: 'none',
                md:
                  localStorage.getItem('catetan-path') === 'add' ||
                  localStorage.getItem('catetan-path') === 'detail'
                    ? 'none'
                    : 'block'
              }
            }}
            inputProps={{
              value: searchKeyword,
              onChange: onSearchKeywordChange,
              placeholder:
                locale === 'en'
                  ? 'Search notes by title...'
                  : 'Cari catatan berdasarkan judul...'
            }}
          />
        )}

        {layout === 'auth' ? (
          <Flex gap={4}>
            <Language data={locale} onChange={onLocaleChange} theme={theme} />

            <Theme data={theme} onChange={onThemeChange} />
          </Flex>
        ) : (
          <Box>
            <Drawer
              locale={locale}
              onLocaleChange={onLocaleChange}
              theme={theme}
              onThemeChange={onThemeChange}
              onLogOut={onLogOut}
            />
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
            display: {
              base:
                localStorage.getItem('catetan-path') === 'add' ||
                localStorage.getItem('catetan-path') === 'detail'
                  ? 'none'
                  : 'block',
              md: 'none'
            },
            m: 0
          }}
          inputProps={{
            value: searchKeyword,
            onChange: onSearchKeywordChange,
            placeholder:
              locale === 'en'
                ? 'Search notes by title...'
                : 'Cari catatan berdasarkan judul...'
          }}
        />
      )}
    </Flex>
  )
}

Header.propTypes = {
  layout: PropTypes.oneOf(['auth', 'app']).isRequired,
  onLogOut: PropTypes.func,
  notes: PropTypes.arrayOf(PropTypes.object),
  searchKeyword: PropTypes.string,
  onSearchKeywordChange: PropTypes.func
}
