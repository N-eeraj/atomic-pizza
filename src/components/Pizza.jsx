// react imports
import { useContext, useRef } from 'react'

// react router imports
import { useLocation } from 'react-router-dom'

// context imports
import { PizzaContext } from '@/components/Context'

// framer motion imports
import { motion } from 'framer-motion'

// style imports
import styles from '@/styles/pizza.module.scss'

const Pizza = () => {
  const pizzaRef = useRef(null)
  const { pathname } = useLocation()

  const {
    size,
    previousSize,
    toppings,
  } = useContext(PizzaContext)

  const variants = {
    'small': {
      rotate: 0,
      scale: 0.5,
    },
    'medium': {
      rotate: 360,
      scale: 0.75,
    },
    'large': {
      rotate: 720,
      scale: 1,
    },
  }

  return (
    <motion.div
      ref={pizzaRef}
      variants={variants}
      initial={previousSize}
      animate={size}
      transition={{ type: 'spring', stiffness: 300, duration: 1.5 }}
      className={styles.pizzaContainer}>
      { toppings.map(({ topping, x, y }, index) => (
          <motion.img
            drag={pathname !== '/final'}
            animate={{ x, y }}
            key={index}
            src={`/toppings/${topping}.png`}
            className={styles.topping} />
        ))
      }
    </motion.div>
  )
}

export default Pizza
