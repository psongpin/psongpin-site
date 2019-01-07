import React from 'react'
import styled from '@emotion/styled'

import Test from './common'

const Footer = styled.footer`
  min-height: 60px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  p {
    margin: 0;
  }
`

const MainFooter = () => (
  <Footer>
    <p>
      {`Made with `}
      <span role="img" aria-label="heart">
        ❤️
      </span>
      {`by `}
      <Test.PrimaryText>Paul Simon Ongpin</Test.PrimaryText>
      {` using `}
      <a
        href="https://www.gatsbyjs.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Test.PrimaryText>Gatsby</Test.PrimaryText>
      </a>
      {` and `}
      <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
        <Test.PrimaryText>React</Test.PrimaryText>
      </a>
      {`.`}
    </p>
  </Footer>
)

export default MainFooter
