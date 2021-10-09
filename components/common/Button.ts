import { styled } from 'utils/styles/stitches.config'

const Button = styled('button', {
  display: 'inline-flex',
  flexCenter: true,
  borderRadius: '$base',
  fontWeight: '$medium',
  border: '1px solid',
  color: '$slateLowContrastText',
  transition: '$mediumEaseInOut',

  variants: {
    btnType: {
      solid: {
        backgroundColor: '$slateElemBg',
        borderColor: '$slateElemBg',
        '&:hover': {
          backgroundColor: '$slateElemHoverBg',
        },
        '&:active': {
          backgroundColor: '$slateElemActiveBg',
        },
      },
      outlined: {
        backgroundColor: '$slateAppBg',
        borderColor: '$slateBorderColor',
        '&:hover, &:active': {
          borderColor: '$slateBorderHoverColor',
        },
      },
    },
    size: {
      small: {
        height: 28,
        px: '$3',
        fontSize: '$sm',
      },
      normal: {
        height: 38,
        px: '$4',
        fontSize: '$base',
      },
      large: {
        height: 48,
        px: '$5',
        fontSize: '$lg',
      },
    },
  },

  defaultVariants: {
    btnType: 'solid',
    size: 'normal',
  },
})

export default Button
