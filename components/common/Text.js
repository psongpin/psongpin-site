import styled from 'styled-components'
import cn from 'classnames'

const Text = styled.p.attrs(props => ({
  className: cn({ 'mb-4': props.as === 'p' }),
}))`
  color: ${props => props.theme.colors[props.colorAttr]};
`

Text.defaultProps = {
  as: 'p',
  colorAttr: 'base',
}

export default Text
