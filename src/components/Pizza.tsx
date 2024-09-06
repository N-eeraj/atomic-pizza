// react imports
import { useContext } from 'react'

// context imports
import { PizzaContext } from '@/components/Context'

// framer motion imports
import { motion } from 'framer-motion'

const Pizza = () => {
  const { size, previousSize, toppings } = useContext(PizzaContext)

  const variants = {
    'small': {
      rotate: 0,
      scale: 0.5,
    },
    'medium': {
      rotate: 180,
      scale: 0.75,
    },
    'large': {
      rotate: 360,
      scale: 1,
    },
  }

  return (
    <motion.img
      variants={variants}
      initial={previousSize}
      animate={size}
      transition={{ type: 'spring', stiffness: 300, duration: 1.5 }}
      src="/base.png" />
  )
}

export default Pizza
