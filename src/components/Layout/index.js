import React from 'react'
import PropTypes from 'prop-types'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'

import Header from '../Header'
import Footer from '../Footer';
import globalStyles from './styles'
import theme from './theme'

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Global styles={globalStyles} />
    <Header />
    <div
      style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `0px 1.0875rem 1.45rem`,
              paddingTop: 0,
            }}
    >
      {children}
    </div>
    <Footer />
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
