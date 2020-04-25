import styled from 'styled-components'

const Heading = styled.h1`
  color: ${props => props.theme.colors[props.colorAttr]};
`

Heading.defaultProps = {
  as: 'h1',
  colorAttr: 'heading',
}

export default Heading
