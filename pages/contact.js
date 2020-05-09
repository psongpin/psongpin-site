import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Typist from 'react-typist'
import Link from 'next/link'
import Head from 'next/head'
import styled from 'styled-components'

import { Heading, Anchor, Text } from '../components/common'

const contacts = [
  {
    label: 'paulsimon.ongpin@gmail.com',
    href: 'mailto:paulsimon.ongpin@gmail.com',
    icon: ['fas', 'envelope'],
  },
  {
    label: 'psongpin (Paul Simon Ongpin)',
    href: 'https://www.linkedin.com/in/psongpin/',
    icon: ['fab', 'linkedin'],
  },
  {
    label: 'psongpin',
    href: 'https://github.com/psongpin',
    icon: ['fab', 'github'],
  },
]

const Wrapper = styled.div`
  min-height: calc(100vh - 9rem);
`

const Content = styled.div`
  max-width: 800px;
`

const Contact = () => {
  const title = `Contact | Paul Simon Ongpin's Personal Website`
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Wrapper className="px-4 py-16 flex items-center">
        <Content className="mx-auto w-100 flex-1">
          <Heading as="h1" className="font-black m-0 text-4xl md:text-5xl">
            <Typist cursor={{ hideWhenDone: true, hideWhenDoneDelay: 0 }}>
              Oohh! So you&apos;re interested?
              <Typist.Backspace count={27} delay={800} />
              Let&apos;s have a chat!
            </Typist>
          </Heading>

          <Heading as="h2" colorAttr="base" className="text-2xl mt-2 mb-8">
            Get in touch with me through these contacts:
          </Heading>

          {contacts.map(({ label, href, icon }) => (
            <Anchor
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center mb-4 text-base"
            >
              <span className="text-xl mr-4">
                <FontAwesomeIcon icon={icon} />
              </span>
              <span className="underline">{label}</span>
            </Anchor>
          ))}

          <Text>
            Hey! I am very grateful that you came to this page for my contact
            information. I am currently accepting offers for full-time /
            part-time remote postions as a Front-end Developer. Let me know if
            you’re interested, I will be more than happy to talk to you!
          </Text>

          <Text>
            {`Know more about me `}
            <Link href="/about" passHref>
              <Anchor className="underline">here</Anchor>
            </Link>
            .
          </Text>

          <Text>Thank you,</Text>

          <Text>
            <strong>
              <Text as="span" colorAttr="primary">
                Paul Simon Ongpin
              </Text>
              {` - Frontend Developer`}
            </strong>
          </Text>
        </Content>
      </Wrapper>
    </>
  )
}

export default Contact
