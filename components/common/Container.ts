import { styled } from 'utils/styles/stitches.config'

const Container = styled('div', {
  width: '$full',
  margin: '0 auto',
  px: '$4',

  '@sm': {
    maxWidth: '$bp-sm',
  },
  '@md': {
    maxWidth: '$bp-md',
    px: '$8',
  },
  '@lg': {
    maxWidth: '$bp-lg',
  },
  '@xl': {
    maxWidth: '$bp-xl',
  },
  '@2xl': {
    maxWidth: '$bp-2xl',
  },
})

export default Container