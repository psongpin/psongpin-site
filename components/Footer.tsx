import { FC } from 'react'
import styled from 'styled-components'
import { Anchor, Text } from './common'

const FooterWrapper = styled.footer`
  min-height: 4rem;
  color: ${(props): string => props.theme.colors.base};
  background-color: ${(props): string => props.theme.colors.bg};
`

const Footer: FC<{}> = () => (
  <FooterWrapper className="py-4 px-4 flex items-center justify-center text-center transition-all duration-200 ease-in-out">
    <Text.span>
      {`Made with `}
      <span role="img" aria-label="heart">
        ❤️
      </span>
      {` by `}
      <Text.span colorAttr="primary">Paul Simon Ongpin</Text.span>
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
    </Text.span>
  </FooterWrapper>
)

export default Footer
