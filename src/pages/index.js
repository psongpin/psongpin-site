import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Typist from 'react-typist'
import 'react-typist/dist/Typist.css'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import { Content } from '../components/common'

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
  ${props => props.theme.mq[1]} {
    font-size: 64px;
  }

  span:not(.Cursor) {
    color: ${props => props.theme.colors.primary};
  }

  .Cursor {
    font-weight: 400;
  }
`

const shake = keyframes`
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
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
    animation: ${shake} 1.5s infinite;
    ${props => props.theme.mq[1]} {
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

const Icon = styled(FontAwesomeIcon)`
  margin-left: 1rem;
`

const IndexPage = () => (
  <Layout>
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
        <Typist cursor={{ hideWhenDone: true }}>
          {`I build `}
          <span>websites</span>
          {'.'}
          <Typist.Backspace count={9} delay={800} />
          <span>web applications</span>
          {'.'}
          <Typist.Backspace count={25} delay={800} />
          {'I love '}
          <span>React</span>
          {' and '}
          <span>CSS</span>
          {'.'}
          <Typist.Backspace count={14} delay={800} />
          <span>community-building</span>
          {'.'}
          <Typist.Backspace count={26} delay={800} />
          {`I am `}
          <span>Paul</span>
          {', a '}
          <span>front-end developer</span>
          {'.'}
        </Typist>
      </TypistText>
      <ButtonLink to="/contact">
        <button type="button">
          {`Let's work together! `}
          <Icon icon={faArrowRight} />
        </button>
      </ButtonLink>
      <LearnMoreLink to="/about">Learn more about me</LearnMoreLink>
    </CustomContent>
  </Layout>
)

export default IndexPage
