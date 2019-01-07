import React from 'react'
import styled from '@emotion/styled'

import { PrimaryText } from './common'

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
      {` by `}
      <PrimaryText>Paul Simon Ongpin</PrimaryText>
      {` using `}
      <a
        href="https://www.gatsbyjs.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <PrimaryText>Gatsby</PrimaryText>
      </a>
      {` and `}
      <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
        <PrimaryText>React</PrimaryText>
      </a>
      {`.`}
    </p>
  </Footer>
)

export default MainFooter
