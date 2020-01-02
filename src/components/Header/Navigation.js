import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { mediaQuery } from "../../theme"

const links = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about" },
  { title: "Contact", url: "/contact" },
]

const NavBar = styled.nav`
  position: fixed;
  z-index: 9999;
  top: 0;
  right: 0;
  height: 100vh;
  width: 280px;
  background: ${props => props.theme.colors.mainBackground};
  transform: translateX(${props => (props.isNavVisible ? "0%" : "100%")});
  transition: all 0.2s ease-in-out;

  ${mediaQuery[1]} {
    position: static;
    height: auto;
    width: auto;
    transform: none;
    order: 1;
  }

  ul {
    margin: 70px 0 0 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    text-align: center;

    ${mediaQuery[1]} {
      margin: 0;
      flex-direction: row;
    }

    li > a {
      display: block;
      text-decoration: none;
      color: ${props => props.theme.colors.base};
      font-size: 20px;
      font-weight: bold;
      padding: 0 15px;
      line-height: 3em;
      transition: all 0.2s ease-in-out;

      ${mediaQuery[1]} {
        font-size: ${props => (props.isScrolled ? "16px" : "20px")};
        line-height: 2em;
      }

      &.active,
      &:hover,
      &:focus {
        color: ${props => props.theme.colors.primary};
        box-shadow: inset 12px 0 0px -7px ${props => props.theme.colors.primary};

        ${mediaQuery[1]} {
          box-shadow: none;
        }
      }
    }
  }
`

const NavOverlay = styled.div`
  display: ${props => (props.isNavVisible ? "block" : "none")};
  position: fixed;
  z-index: 9998;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.colors.highlighted};
  opacity: 0.6;
  ${mediaQuery[1]} {
    display: none;
  }
`

const Close = styled.button`
  font-size: 24px;
  color: ${props => props.theme.colors.highlighted};
  background: transparent;
  border: none;
  padding: 0 15px;
  position: absolute;
  right: 20px;
  top: 30px;
  ${mediaQuery[1]} {
    display: none;
  }
`

const Navigation = ({ isScrolled, isNavVisible, toggleNavigation }) => (
  <>
    <NavBar isScrolled={isScrolled} isNavVisible={isNavVisible}>
      <Close onClick={toggleNavigation}>
        <FontAwesomeIcon icon="times" />
      </Close>
      <ul>
        {links.map(({ title, url }) => (
          <li>
            <Link to={url} activeClassName="active" onClick={toggleNavigation}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </NavBar>
    <NavOverlay isNavVisible={isNavVisible} onClick={toggleNavigation} />
  </>
)

Navigation.propTypes = {
  isScrolled: PropTypes.bool.isRequired,
  isNavVisible: PropTypes.bool.isRequired,
  toggleNavigation: PropTypes.func.isRequired,
}

export default Navigation
