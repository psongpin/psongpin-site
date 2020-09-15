import { motion } from 'framer-motion'
import cx from 'clsx'

type Props = {
  btnType?: 'primary' | 'transparent-light'
}

const Button: React.FC<Props & React.HTMLProps<HTMLButtonElement>> = ({
  children,
  className,
  onClick,
  style,
  btnType = 'primary',
}) => {
  const buttonAttrs = {
    primary: {
      classname:
        'border-gray-600 bg-gray-600 text-white opacity-100 hover:opacity-75',
    },

    'transparent-light': {
      classname: 'border-white text-white hover:bg-white hover:text-gray-600',
    },
  }

  return (
    <motion.button
      onClick={onClick}
      className={cx(
        'appearance-none focus:outline-none inline-block border-solid border-2 py-2 px-6 rounded-full transition-all duration-500 ease-in-out',
        buttonAttrs[btnType].classname,
        className
      )}
      style={style}
    >
      {children}
    </motion.button>
  )
}

export default Button
