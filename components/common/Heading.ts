import styled from 'styled-components'

import { ColorAttr } from '../../types/theme'

interface Props {
  colorAttr?: ColorAttr
}

const Heading = {
  h1: styled.h1<Props>`
    color: ${({ theme, colorAttr = 'heading' }): string =>
      theme.colors[colorAttr]};
  `,
  h2: styled.h2<Props>`
    color: ${({ theme, colorAttr = 'heading' }): string =>
      theme.colors[colorAttr]};
  `,
  h3: styled.h3<Props>`
    color: ${({ theme, colorAttr = 'heading' }): string =>
      theme.colors[colorAttr]};
  `,
  h4: styled.h4<Props>`
    color: ${({ theme, colorAttr = 'heading' }): string =>
      theme.colors[colorAttr]};
  `,
  h5: styled.h5<Props>`
    color: ${({ theme, colorAttr = 'heading' }): string =>
      theme.colors[colorAttr]};
  `,
  h6: styled.h6<Props>`
    color: ${({ theme, colorAttr = 'heading' }): string =>
      theme.colors[colorAttr]};
  `,
}

export default Heading
