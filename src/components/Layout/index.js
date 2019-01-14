import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import styled from '@emotion/styled'
import { Scroll } from 'react-fns'

import MainHeader from '../MainHeader'
import MainFooter from '../MainFooter'
import globalStyles from './styles'
import themes from './theme'

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: ${props => props.theme.colors.mainBackground};
  padding-top: ${props => (props.isScrolled ? '70px' : '100px')};
  color: ${props => props.theme.colors.base};
`

class Layout extends Component {
  state = {
    theme: 'light',
  }

  componentDidMount() {
    this.setState({ theme: window.localStorage.getItem('theme') || 'light' })
  }

  onChangeTheme = theme =>
    this.setState(() => {
      if (typeof window !== `undefined`)
        window.localStorage.setItem('theme', theme)
      return { theme }
    })

  render() {
    const { children } = this.props
    const { theme } = this.state
    return (
      <ThemeProvider theme={themes[theme]}>
        <Fragment>
          <Global styles={globalStyles} />
          <Scroll
            render={({ y }) => {
              const isScrolled = y > 0
              return (
                <Wrapper isScrolled={isScrolled}>
                  <MainHeader
                    onChangeTheme={this.onChangeTheme}
                    theme={theme}
                  />
                  <main>{children}</main>
                  <MainFooter />
                </Wrapper>
              )
            }}
          />
        </Fragment>
      </ThemeProvider>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
