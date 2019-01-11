import React from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Typist from 'react-typist'
import 'react-typist/dist/Typist.css'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import { Content, PrimaryText } from '../components/common'

const CustomContent = styled(Content)`
  display: flex;
  align-items: center;
`

const TypistText = styled.h1`
  font-size: 36px;
  font-weight: 900;
  margin: 0;
  ${props => props.theme.mq[1]} {
    font-size: 48px;
  }

  .Cursor {
    font-weight: 400;
  }
`

const Subtext = styled.h2`
  font-size: 24px;
  font-weight: 400;
  margin: 10px 0 30px 0;
`

const ContactLink = styled.a`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  span {
    font-size: 20px;
    margin-right: 1rem;
  }
`
const ParagraphContainer = styled.div`
  margin-top: 30px;

  p {
    &:last-child {
      margin-bottom: 0;
    }
  }
`

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <CustomContent>
      <div>
        <TypistText>
          <Typist cursor={{ hideWhenDone: true }}>
            {`Oohh! So you're interested?`}
            <Typist.Backspace count={27} delay={800} />
            {`Let's have a chat!`}
          </Typist>
        </TypistText>
        <Subtext>Get in touch with me through these contacts:</Subtext>

        <ContactLink href="mailto:paulsimon.ongpin@gmail.com">
          <span>
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
          paulsimon.ongpin@gmail.com
        </ContactLink>
        <ContactLink href="https://twitter.com/psongpin">
          <span>
            <FontAwesomeIcon icon={faTwitter} />
          </span>
          @psongpin
        </ContactLink>
        <ContactLink href="https://github.com/psongpin">
          <span>
            <FontAwesomeIcon icon={faGithub} />
          </span>
          psongpin
        </ContactLink>

        <ParagraphContainer>
          <p>
            Hey! I am very grateful that you came to this page for my contact
            information. I am currently accepting offers for full-time/part-time
            remote postions as a Front-end Developer. Let me know if you’re
            interested, I will be more than happy to talk to you!
          </p>
          <p>
            {`Know more about me `}
            <Link to="/about">here</Link>
            {`.`}
          </p>
          <p>Thank you,</p>
          <p>
            <strong>
              <PrimaryText>Paul Simon Ongpin</PrimaryText>
              {` - Frontend Developer`}
            </strong>
          </p>
        </ParagraphContainer>
      </div>
    </CustomContent>
  </Layout>
)

export default Contact
