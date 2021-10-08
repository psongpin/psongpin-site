import { createStitches } from '@stitches/react'
import { gray } from '@radix-ui/colors'

import { space } from './space'
import { fontSizes } from './fontSizes'
import { fonts } from './fonts'
import { fontWeights } from './fontWeights'
import { lineHeights } from './lineHeights'
import { letterSpacings } from './letterSpacings'
import { sizes } from './sizes'
import { borderWidths } from './borderWidths'
import { radii } from './radii'
import { shadows } from './shadows'
import { zIndices } from './zIndices'
import { utils } from './utils'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      ...gray,
    },
    space,
    fontSizes,
    fonts,
    fontWeights,
    lineHeights,
    letterSpacings,
    sizes,
    borderWidths,
    borderStyles: {},
    radii,
    shadows,
    zIndices,
    transitions: {},
  },
  media: {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 1280px)',
    '2xl': '(min-width: 1536px)',
  },
  utils,
})
