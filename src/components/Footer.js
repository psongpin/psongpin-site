/* eslint-disable react/jsx-curly-brace-presence */
import React from "react"
import styled from "styled-components"

import { PrimaryText } from "./common"

const FooterWrapper = styled.footer`
  min-height: 60px;
  padding: 0 ${props => props.theme.contentPadding};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  p {
    margin: 0;
  }

  a {
    color: ${props => props.theme.colors.primary};
  }
`

const Footer = () => (
  <FooterWrapper>
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
        Gatsby
      </a>
      {` and `}
      <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
        React
      </a>
      {`.`}
    </p>
  </FooterWrapper>
)

export default Footer
