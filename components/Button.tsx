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
      classname: 'border-red-400 bg-red-400 text-white',
      initial: {
        opacity: 1,
      },
      hover: {
        opacity: 0.75,
        transition: { duration: 0.5, ease: 'easeInOut' },
      },
      tap: {
        opacity: 0.75,
        transition: { duration: 0.5, ease: 'easeInOut' },
      },
    },

    'transparent-light': {
      classname: 'border-white',
      initial: {
        backgroundColor: 'rgba(255, 255, 255, 0)',
        color: '#fff',
      },
      hover: {
        backgroundColor: 'rgba(255, 255, 255, 1)',
        color: '#718096',
        transition: { duration: 0.5, ease: 'easeInOut' },
      },
      tap: {
        backgroundColor: 'rgba(255, 255, 255, 1)',
        color: '#718096',
        transition: { duration: 0.5, ease: 'easeInOut' },
      },
    },
  }

  return (
    <motion.button
      whileHover={buttonAttrs[btnType].hover}
      whileTap={buttonAttrs[btnType].tap}
      initial={buttonAttrs[btnType].initial}
      onClick={onClick}
      className={cx(
        'appearance-none focus:outline-none inline-block border-solid border-2 py-2 px-6 rounded-full',
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
