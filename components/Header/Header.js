import { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Avatar from '../Avatar'
import Navigation from './Navigation'
import ThemeSwitch from './ThemeSwitch'

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.colors.bg};
  transition: all 0.2s ease-in-out;
`

const Hamburger = styled.button`
  color: ${props => props.theme.colors.header_icon};
`

const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(false)

  const toggleNavigation = () =>
    setIsNavVisible(prevIsNavVisible => !prevIsNavVisible)

  const avatarDimensions = '60px'

  return (
    <HeaderWrapper className="flex items-center justify-between h-24 px-4">
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
    </HeaderWrapper>
  )
}

export default Header
