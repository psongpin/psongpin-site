import Typist from 'react-typist'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import Head from 'next/head'

import { Heading, Text, Anchor } from '../components/common'

const ButtonText = styled.span.attrs({
  className:
    'w-full text-center inline-block py-3 md:text-2xl text-xl font-bold rounded hover:opacity-75 transition-all duration-200 ease-in-out',
})`
  max-width: 400px;
  color: ${props => props.theme.colors.bg};
  background-color: ${props => props.theme.colors.primary};
`

const Home = () => {
  const title = `Home | Paul Simon Ongpin's Personal Website`
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div
        className="px-4 py-16 flex items-center"
        css={`
          min-height: calc(100vh - 9rem);
        `}
      >
        <div
          className="mx-auto w-100 flex-1 text-center"
          css={`
            max-width: 800px;
          `}
        >
          <Heading
            as="h1"
            className="font-black m-0 text-5xl md:text-6xl text-center"
          >
            <Typist cursor={{ hideWhenDone: true, hideWhenDoneDelay: 0 }}>
              {`I build `}
              <Text as="span" colorAttr="primary">
                websites
              </Text>
              .
              <Typist.Backspace count={9} delay={800} />
              <Text as="span" colorAttr="primary">
                web applications
              </Text>
              .
              <Typist.Backspace count={25} delay={800} />
              {`I am a `}
              <Text as="span" colorAttr="primary">
                CSS
              </Text>
              {` enthusiast`}
              .
              <Typist.Backspace count={22} delay={800} />
              {`I am `}
              <Text as="span" colorAttr="primary">
                Paul
              </Text>
              {`, a `}
              <Text as="span" colorAttr="primary">
                front-end developer
              </Text>
              .
            </Typist>
          </Heading>

          <div className="mt-10">
            <Link href="/contact" passHref>
              <Anchor>
                <ButtonText>
                  Let&apos;s work together!&nbsp;&nbsp;&nbsp;&nbsp;
                  <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                </ButtonText>
              </Anchor>
            </Link>
          </div>

          <div className="mt-8">
            <Link href="/about" passHref>
              <Anchor
                className="underline hover:opacity-75 text-lg transition-all duration-200 ease-out"
                colorAttr="base"
              >
                Learn more about me
              </Anchor>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
