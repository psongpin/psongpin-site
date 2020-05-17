import styled from 'styled-components'

import { ColorAttr } from '../../types/theme'

interface Props {
  colorAttr?: ColorAttr
}

const Text = {
  p: styled.p<Props>`
    color: ${({ theme, colorAttr = 'base' }): string =>
      theme.colors[colorAttr]};
    margin-bottom: 1rem;
  `,
  span: styled.span<Props>`
    color: ${({ theme, colorAttr = 'base' }): string =>
      theme.colors[colorAttr]};
  `,
  li: styled.li<Props>`
    color: ${({ theme, colorAttr = 'base' }): string =>
      theme.colors[colorAttr]};
  `,
}

export default Text
