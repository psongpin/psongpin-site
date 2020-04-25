import styled from 'styled-components'
import { Anchor, Text } from './common'

const FooterWrapper = styled.footer`
  min-height: 4rem;
  color: ${props => props.theme.colors.base};
  background-color: ${props => props.theme.colors.bg};
`

const Footer = () => (
  <FooterWrapper className="py-4 px-4 flex items-center justify-center text-center">
    <Text as="span">
      {`Made with `}
      <span role="img" aria-label="heart">
        ❤️
      </span>
      {` by `}
      <Text as="span" colorAttr="primary">
        Paul Simon Ongpin
      </Text>
      {` using `}
      <Anchor
        href="https://nextjs.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
      >
        Next.js
      </Anchor>
      {` and `}
      <Anchor
        href="https://reactjs.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
      >
        React
      </Anchor>
      .
    </Text>
  </FooterWrapper>
)

export default Footer
