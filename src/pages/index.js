import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Typist from "react-typist"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import SEO from "../components/seo"
import { Content } from "../components/common"
import { mediaQuery } from "../theme"

const CustomContent = styled(Content)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const TypistText = styled.h1`
  font-size: 48px;
  font-weight: 900;
  text-align: center;
  margin: 0 0 60px 0;
  ${mediaQuery[1]} {
    font-size: 64px;
  }

  span:not(.Cursor) {
    color: ${props => props.theme.colors.primary};
  }

  .Cursor {
    font-weight: 400;
  }
`

const ButtonLink = styled(Link)`
  max-width: 100%;

  button {
    color: ${props => props.theme.colors.mainBackground};
    background-color: ${props => props.theme.colors.primary};
    height: 60px;
    width: 400px;
    max-width: 100%;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    border: 0;
    display: inline-block;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    ${mediaQuery[1]} {
      font-size: 24px;
    }

    &:hover {
      opacity: 0.6;
    }
  }
`
const LearnMoreLink = styled(Link)`
  color: ${props => props.theme.colors.base};
  font-size: 18px;
  margin-top: 26px;
`

const IndexPage = () => (
  <>
    <SEO
      title="Home"
      keywords={[
        `Paul Simon Ongpin`,
        `Front-end`,
        `web developer`,
        `reactjs`,
        `react`,
      ]}
    />
    <CustomContent>
      <TypistText>
        <Typist cursor={{ hideWhenDone: true, hideWhenDoneDelay: 0 }}>
          I build <span>websites</span>.
          <Typist.Backspace count={9} delay={800} />
          <span>web applications</span>.
          <Typist.Backspace count={25} delay={800} />I love <span>React</span>{" "}
          and <span>CSS</span>.
          <Typist.Backspace count={14} delay={800} />
          <span>community-building</span>.
          <Typist.Backspace count={26} delay={800} />I am <span>Paul</span>, a{" "}
          <span>front-end developer</span>.
        </Typist>
      </TypistText>
      <ButtonLink to="/contact">
        <button type="button">
          Let&apos;s work together!&nbsp;&nbsp;&nbsp;&nbsp;
          <FontAwesomeIcon icon="arrow-right" />
        </button>
      </ButtonLink>
      <LearnMoreLink to="/about">Learn more about me</LearnMoreLink>
    </CustomContent>
  </>
)

export default IndexPage
