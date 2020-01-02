import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Header from "./Header"
import Footer from "./Footer"

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: ${props => props.theme.colors.mainBackground};
  padding-top: 100px;
  color: ${props => props.theme.colors.base};
  transition: all 0.2s ease-in-out;
`

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <main>{children}</main>
      <Footer />
    </Wrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
