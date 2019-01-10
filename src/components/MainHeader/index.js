import React, { Component } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { Scroll } from 'react-fns'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import Avatar from '../Avatar'
import Navigation from './Navigation'

const Header = styled.header`
  height: ${props => (props.isScrolled ? '70px' : '100px')};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 ${props => props.theme.contentPadding};
  position: sticky;
  z-index: 9999;
  top: 0;
  background-color: ${props => props.theme.colors.mainBackground};
  box-shadow: ${props =>
    props.isScrolled && `0px 0px 10px ${props.theme.colors.highlighted}`};
  transition: all 0.2s ease-in-out;

  > div {
    width: 1200px;
    max-width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

const Hamburger = styled.button`
  font-size: 24px;
  color: ${props => props.theme.colors.highlighted};
  ${props => props.theme.mq[1]} {
    display: none;
  }
`

class MainHeader extends Component {
  state = { isNavVisible: false }

  toggleNavigation = () =>
    this.setState(state => ({ isNavVisible: !state.isNavVisible }))

  render() {
    const { isNavVisible } = this.state
    return (
      <Scroll
        render={({ y }) => {
          const isScrolled = y > 60
          const avatarDimension = isScrolled ? '40px' : '60px'

          return (
            <Header isScrolled={isScrolled}>
              <div>
                <Link to="/">
                  <Avatar width={avatarDimension} height={avatarDimension} />
                </Link>
                <Navigation
                  isScrolled={isScrolled}
                  isNavVisible={isNavVisible}
                  toggleNavigation={this.toggleNavigation}
                />
                <Hamburger onClick={this.toggleNavigation}>
                  <FontAwesomeIcon icon={faBars} />
                </Hamburger>
              </div>
            </Header>
          )
        }}
      />
    )
  }
}

export default MainHeader
