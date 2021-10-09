import { styled } from 'utils/styles/stitches.config'
import Container from 'components/common/Container'
import Flex from 'components/common/Flex'
import Button from 'components/common/Button'

const Frame = styled('section', {
  minHeight: '$screen-h',
  display: 'flex',
  flexCenter: true,
  py: '$20',
})

const Title = styled('h1', {
  $$strokeColor: '$colors$slateHighContrastText',
  fontFamily: '$orbitron',
  fontSize: '$5xl',
  textTransform: 'uppercase',
  fontWeight: '$extrabold',
  textAlign: 'center',
  WebkitTextStroke: '2px $$strokeColor',
  textStroke: '2px $$strokeColor',
  color: 'transparent',
  mx: 'auto',
  marginBottom: '$4',
  maxWidth: 900,
  lineHeight: '$tight',

  '@md': {
    fontSize: '$6xl',
  },
  '@lg': {
    fontSize: '$7xl',
  },
})

const SolidWord = styled('span', {
  color: '$slateHighContrastText',
  WebkitTextStroke: 'unset',
  textStroke: 'unset',
})

const Subtitle = styled('p', {
  textAlign: 'center',
  fontSize: '$lg',

  '@md': {
    fontSize: '$xl',
  },
})

const ActionFrame = styled('div', {
  marginTop: '$8',
})

const HeroSection: React.FC = () => {
  return (
    <Frame>
      <Container>
        <Title>
          <SolidWord>No one</SolidWord> should go the web{' '}
          <SolidWord>alone</SolidWord>
        </Title>
        <Subtitle>
          {`I'm `}
          <strong>Paul</strong>, a <strong>Front-end Web Developer</strong>.
        </Subtitle>
        <Subtitle>I will help you on your journey!</Subtitle>

        <ActionFrame>
          <Flex
            css={{
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              '@md': { flexDirection: 'row' },
            }}
          >
            <Button
              css={{
                mx: '$3',
                marginBottom: '$3',
                width: 200,
                '@md': { marginBottom: 0 },
              }}
            >
              View Profile
            </Button>
            <Button css={{ mx: '$3', width: 200 }}>{`Let's chat!`}</Button>
          </Flex>
        </ActionFrame>
      </Container>
    </Frame>
  )
}

export default HeroSection
