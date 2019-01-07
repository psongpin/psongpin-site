import React from 'react'
import styled from '@emotion/styled'

import Avatar from './Avatar'
import Navigation from './Navigation'

const Header = styled.header`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 15px;

  > div {
    width: 1200px;
    max-width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

const MainHeader = () => (
  <Header>
    <div>
      <Avatar width="60px" height="60px" />
      <Navigation />
    </div>
  </Header>
)

export default MainHeader
