import styled from 'styled-components'
import { ColorAttr } from '../../types/theme'

interface Props {
  colorAttr?: ColorAttr
}

const Anchor = styled.a<Props>`
  color: ${({ theme, colorAttr = 'primary' }): string =>
    theme.colors[colorAttr]};
`

export default Anchor
