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
    setToppings,
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

  const removeTopping = (id) => {
    if (final) return
    setToppings(prevToppings => prevToppings.filter(topping => topping.id !== id))
  }

  const dragEndHandler = (id, { x, y }) => {
    if (final) return
    const { top, right, bottom, left } = pizzaRef.current.getBoundingClientRect()
    if (y < top || x > right || y > bottom || x < left) {
      removeTopping(id)
    }
    else {
      setToppings(prevToppings => 
        prevToppings.map(topping => topping.id === id ? {
          ...topping,
          x: x - left - 12,
          y: y - top - 12,
        } : topping)
      ) 
    }
  }

  return (
    <motion.div
      ref={pizzaRef}
      variants={variants}
      initial={previousSize}
      animate={size}
      transition={{ type: 'spring', stiffness: 300, duration: 1.5 }}
      className={styles.pizzaContainer}>
      { toppings.map(({ id, topping, x, y }) => (
          <motion.img
            drag={!final}
            animate={{ x, y }}
            key={id}
            src={`/toppings/${topping}.png`}
            className={styles.topping}
            onDragEnd={(_, info) => dragEndHandler(id, info.point)}
            onDoubleClick={() => removeTopping(id)} />
        ))
      }
    </motion.div>
  )
}

export default Pizza
