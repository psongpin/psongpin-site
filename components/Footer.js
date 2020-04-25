import styled from 'styled-components'

const FooterWrapper = styled.footer`
  min-height: 4rem;
  color: ${props => props.theme.colors.base};
  background-color: ${props => props.theme.colors.bg};

  a {
    color: ${props => props.theme.colors.primary};
  }
`

const Footer = () => (
  <FooterWrapper className="py-0 px-4 flex items-center justify-center text-center">
    <p>
      {`Made with `}
      <span role="img" aria-label="heart">
        ❤️
      </span>
      {` by `}
      <span
        css={`
          color: ${scprops => scprops.theme.colors.primary};
        `}
      >
        Paul Simon Ongpin
      </span>
      {` using `}
      <a
        href="https://nextjs.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="undeline"
      >
        Next.js
      </a>
      {` and `}
      <a
        href="https://reactjs.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="undeline"
      >
        React
      </a>
      .
    </p>
  </FooterWrapper>
)

export default Footer
