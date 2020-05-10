import { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cn from 'classnames'

import Avatar from '../Avatar'
import Navigation from './Navigation'
import ThemeSwitch from './ThemeSwitch'
import ScrollChecker from './ScrollChecker'
import ScrollCheckContext from './context'

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.colors.bg};
`

const Hamburger = styled.button.attrs({
  type: 'button',
})`
  color: ${props => props.theme.colors.headerIcon};
`

const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(false)
  const [isPageOnTop, setIsPageOnTop] = useState(true)

  const toggleNavigation = () =>
    setIsNavVisible(prevIsNavVisible => !prevIsNavVisible)

  const avatarDimensions = isPageOnTop ? '50px' : '40px'

  return (
    <ScrollCheckContext.Provider value={{ isPageOnTop, setIsPageOnTop }}>
      <ScrollChecker />
      <HeaderWrapper
        className={cn(
          'flex items-center justify-center px-4 sticky top-0 z-40 transition-all duration-200 ease-in-out',
          {
            'shadow-lg': !isPageOnTop,
            'h-16': !isPageOnTop,
            'h-20': isPageOnTop,
          }
        )}
      >
        <div className="flex items-center justify-between container">
          <Link href="/">
            <a>
              <Avatar width={avatarDimensions} height={avatarDimensions} />
            </a>
          </Link>

          <div className="flex justify-between items-center">
            <Navigation
              isNavVisible={isNavVisible}
              toggleNavigation={toggleNavigation}
            />

            <Hamburger
              onClick={toggleNavigation}
              className="text-2xl bg-transparent border-none outline-none focus:outline-none p-0 ml-6 order-2 md:hidden"
            >
              <FontAwesomeIcon icon={['fas', 'bars']} />
            </Hamburger>

            <div className="md:ml-6 flex items-center order-1 md:order-3">
              <ThemeSwitch />
            </div>
          </div>
        </div>
      </HeaderWrapper>
    </ScrollCheckContext.Provider>
  )
}

export default Header
