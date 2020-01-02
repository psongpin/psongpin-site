import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Typist from "react-typist"
import { Link } from "gatsby"

import SEO from "../components/seo"
import { Content, PrimaryText } from "../components/common"
import { mediaQuery } from "../theme"

const CustomContent = styled(Content)`
  display: flex;
  align-items: center;

  a {
    color: ${props => props.theme.colors.primary};
  }
`

const TypistText = styled.h1`
  font-size: 36px;
  font-weight: 900;
  margin: 0;
  ${mediaQuery[1]} {
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
  <>
    <SEO title="Contact" />
    <CustomContent>
      <div>
        <TypistText>
          <Typist cursor={{ hideWhenDone: true, hideWhenDoneDelay: 0 }}>
            Oohh! So you&apos;re interested?
            <Typist.Backspace count={27} delay={800} />
            Let&apos;s have a chat!
          </Typist>
        </TypistText>
        <Subtext>Get in touch with me through these contacts:</Subtext>

        <ContactLink href="mailto:paulsimon.ongpin@gmail.com">
          <span>
            <FontAwesomeIcon icon="envelope" />
          </span>
          paulsimon.ongpin@gmail.com
        </ContactLink>

        <ContactLink href="https://www.linkedin.com/in/psongpin/">
          <span>
            <FontAwesomeIcon icon={["fab", "linkedin"]} />
          </span>
          psongpin (Paul Simon Ongpin)
        </ContactLink>

        <ContactLink href="https://twitter.com/psongpin">
          <span>
            <FontAwesomeIcon icon={["fab", "twitter"]} />
          </span>
          @psongpin
        </ContactLink>

        <ContactLink href="https://github.com/psongpin">
          <span>
            <FontAwesomeIcon icon={["fab", "github"]} />
          </span>
          psongpin
        </ContactLink>

        <ParagraphContainer>
          <p>
            Hey! I am very grateful that you came to this page for my contact
            information. I am currently accepting offers for full-time /
            part-time remote postions as a Front-end Developer. Let me know if
            you’re interested, I will be more than happy to talk to you!
          </p>

          <p>
            Know more about me <Link to="/about">here</Link>.
          </p>

          <p>Thank you,</p>

          <p>
            <strong>
              <PrimaryText>Paul Simon Ongpin</PrimaryText> - Frontend Developer
            </strong>
          </p>
        </ParagraphContainer>
      </div>
    </CustomContent>
  </>
)

export default Contact
