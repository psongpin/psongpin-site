import styled from 'styled-components'

import { ColorAttr } from '../../types/theme'

interface Props {
  colorAttr?: ColorAttr
}

const Text = {
  p: styled.p.attrs(() => ({
    className: 'mb-4',
  }))<Props>`
    color: ${({ theme, colorAttr = 'base' }): string =>
      theme.colors[colorAttr]};
  `,
  span: styled.span<Props>`
    color: ${({ theme, colorAttr = 'base' }): string =>
      theme.colors[colorAttr]};
  `,
}

export default Text
