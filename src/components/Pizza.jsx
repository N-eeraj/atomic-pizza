// react imports
import { useContext } from 'react'

// react router imports
import { useLocation } from 'react-router-dom'

// context imports
import { PizzaContext } from '@/components/Context'

// framer motion imports
import { motion } from 'framer-motion'

// style imports
import styles from '@/styles/pizza.module.scss'

const Pizza = () => {
  const { pathname } = useLocation()

  const {
    size,
    previousSize,
    toppings,
  } = useContext(PizzaContext)

  const final = pathname === '/final'

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
      variants={variants}
      initial={previousSize}
      animate={size}
      transition={{ type: 'spring', stiffness: 300, duration: 1.5 }}
      className={styles.pizzaContainer}>
      { toppings.map((toppingImage, index) => (
          <motion.img
            drag={!final}
            src={toppingImage}
            key={index}
            className={styles.topping} />
        ))
      }
    </motion.div>
  )
}

export default Pizza
