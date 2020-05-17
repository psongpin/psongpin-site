import styled from 'styled-components'

interface Props {
  width?: string
  height?: string
  src?: string
  alt?: string
  className?: string
}

const Avatar = styled.img<Props>`
  width: ${({ width = '150px' }): string => width};
  height: ${({ height = '150px' }): string => height};
`

Avatar.defaultProps = {
  src: '/images/PaulSimonOngpin.jpg',
  alt: 'Paul Simon Ongpin',
  className: 'rounded-full transition-all duration-200 ease-in-out',
}

export default Avatar
