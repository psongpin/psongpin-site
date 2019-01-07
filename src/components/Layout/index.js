import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import styled from '@emotion/styled'

import MainHeader from '../MainHeader'
import MainFooter from '../MainFooter'
import globalStyles from './styles'
import theme from './theme'

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: ${props => props.theme.colors.mainBackground};
`

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <Global styles={globalStyles} />
      <Wrapper>
        <MainHeader />
        <main>{children}</main>
        <MainFooter />
      </Wrapper>
    </Fragment>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
