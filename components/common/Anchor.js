import styled from 'styled-components'

const Anchor = styled.a`
  color: ${props => props.theme.colors[props.colorAttr]};
`

Anchor.defaultProps = {
  colorAttr: 'primary',
}

export default Anchor
