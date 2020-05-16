import styled from 'styled-components'

interface Props {
  width: string
  height: string
  src?: string
  alt?: string
  className?: string
}

const Avatar = styled.img<Props>`
  width: ${(props): string => props.width};
  height: ${(props): string => props.height};
`

Avatar.defaultProps = {
  src: '/images/PaulSimonOngpin.jpg',
  alt: 'Paul Simon Ongpin',
  width: '150px',
  height: '150px',
  className: 'rounded-full transition-all duration-200 ease-in-out',
}

export default Avatar
