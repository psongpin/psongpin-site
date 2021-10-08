import { styled } from 'utils/styles/stitches.config'
import Container from 'components/common/Container'

const Frame = styled('section', {
  minHeight: '$screen-h',
  display: 'flex',
  flexCenter: true,
  py: '$8',
})

const Title = styled('h1', {
  $$strokeColor: '$colors$gray12',
  fontFamily: '$orbitron',
  fontSize: '$6xl',
  textTransform: 'uppercase',
  fontWeight: '$extrabold',
  textAlign: 'center',
  WebkitTextStroke: '2px $$strokeColor',
  textStroke: '2px $$strokeColor',
  color: 'transparent',
  mx: 'auto',
  maxWidth: 700,
})

const SolidWord = styled('span', {
  color: '$gray12',
  WebkitTextStroke: 'unset',
  textStroke: 'unset',
})

const HeroSection: React.FC = () => {
  return (
    <Frame>
      <Container>
        <Title>
          <SolidWord>No one</SolidWord> should go the web{' '}
          <SolidWord>alone</SolidWord>
        </Title>
      </Container>
    </Frame>
  )
}

export default HeroSection
