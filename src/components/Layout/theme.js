const breakpoints = [576, 768, 992, 1200]
const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`)

const theme = {
  colors: {
    primary: '#FF3B3F',
    mainBackground: '#FFFFFF',
    base: '#BFBFBF',
    highlighted: '#969696',
  },
  contentPadding: '1.429rem',
  // Media Queries
  mq,
}

export default theme
