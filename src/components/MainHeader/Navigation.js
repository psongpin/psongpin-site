import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const NavBar = styled.nav`
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;

    li > a {
      display: block;
      text-decoration: none;
      color: ${props => props.theme.colors.base};
      font-size: ${props => (props.isScrolled ? '16px' : '20px')};
      font-weight: bold;
      padding: 0 15px;
      line-height: 2em;
      transition: all 0.2s ease-in-out;

      &.active,
      &:hover,
      &:focus {
        color: ${props => props.theme.colors.primary};
      }
    }
  }
`

const Navigation = ({ isScrolled }) => (
  <NavBar isScrolled={isScrolled}>
    <ul>
      <li>
        <Link to="/" activeClassName="active">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" activeClassName="active">
          About
        </Link>
      </li>
      <li>
        <Link to="/works" activeClassName="active">
          Works
        </Link>
      </li>
      <li>
        <Link to="/contact" activeClassName="active">
          Contact
        </Link>
      </li>
    </ul>
  </NavBar>
)

Navigation.propTypes = {
  isScrolled: PropTypes.bool.isRequired,
}

export default Navigation
