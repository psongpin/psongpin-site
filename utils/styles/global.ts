import { opinionated } from 'stitches-normalize-css'

import { globalCss } from 'utils/styles/stitches.config'
import { fonts } from 'utils/styles/fonts'

const globals = {
  ':where(*, ::before, ::after)': {
    boxSizing: 'border-box',
    borderWidth: 0,
    borderStyle: 'solid',
    borderColor: 'currentColor',
  },
  ':where(html)': {
    tabSize: 4,
    lineHeight: 1.5,
    fontFamily: fonts.sans,
  },
  ':where(body)': {
    fontFamily: 'inherit',
    lineHeight: 'inherit',
  },
  ':where(sub, sup)': {
    fontSize: '75%',
    lineHeight: 0,
    position: 'relative',
    verticalAlign: 'baseline',
  },
  ':where(sub)': {
    bottom: '-0.25em',
  },
  ':where(sup)': {
    top: '-0.5em',
  },
  ':where(button, input, optgroup, select, textarea)': {
    fontFamily: 'inherit',
    fontSize: '100%',
    lineHeight: 'inherit',
    color: 'inherit',
    margin: 0,
    padding: 0,
  },
  ':where(button, select)': {
    textTransform: 'none',
  },
  ':where(:-moz-ui-invalid)': {
    boxShadow: 'none',
  },
  ':where(legend)': {
    padding: 0,
  },
  ':where(blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre)': {
    margin: 0,
  },
  ':where(button)': {
    backgroundColor: 'transparent',
    backgroundImage: 'none',
  },
  ':where(fieldset)': {
    margin: 0,
    padding: 0,
  },
  ':where(ol, ul)': {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  ':where(hr)': {
    borderTopWidth: '1px',
  },
  ':where(img)': {
    borderStyle: 'solid',
  },
  ':where(textarea)': {
    resize: 'vertical',
  },
  ':where(input::placeholder, textarea::placeholder)': {
    opacity: 1,
    color: '#9ca3af',
  },
  ':where(button, [role="button"])': {
    cursor: 'pointer',
  },
  ':where(:-moz-focusring)': {
    outline: 'auto',
  },
  ':where(table)': {
    borderCollapse: 'collapse',
  },
  ':where(h1, h2, h3, h4, h5, h6)': {
    fontSize: 'inherit',
    fontWeight: 'inherit',
  },
  ':where(a)': {
    color: 'inherit',
    textDecoration: 'inherit',
  },
  ':where(pre, code, kbd, samp)': {
    fontFamily: fonts.mono,
  },
  ':where(img, svg, video, canvas, audio, iframe, embed, object)': {
    display: 'block',
    verticalAlign: 'middle',
  },
  ':where(img, video)': {
    maxWidth: '100%',
    height: 'auto',
  },
  ':where([hidden])': {
    display: 'none',
  },
}

const globalStyles = globalCss(...opinionated, globals)

export default globalStyles
