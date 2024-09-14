// react imports
import { useContext, useRef } from 'react'

// react router imports
import { useLocation } from 'react-router-dom'

// context imports
import { PizzaContext } from '@/components/Context'

// framer motion imports
import { motion } from 'framer-motion'

// data imports
import data from '@/process'

// style imports
import styles from '@/styles/toppings.module.scss'

const Toppings = () => {
  const { setToppings } = useContext(PizzaContext)
  const { pathname } = useLocation()
  const { options } = data[pathname]

  const addToppings = topping => {
    setToppings(prevToppings => [
      ...prevToppings,
      topping,
    ])
  }

  return (
    <ul className={styles.list}>
      { options.map(({ text, image }) => (
          <li key={text}>
            <motion.button
              whileHover={{ scale: 0.95 }}
              transition={{
                type: 'spring',
                stiffness: 500,
              }}
              className={styles.item}
              onClick={() => addToppings(image)}>
              {text}
            </motion.button>
          </li>
        ))
      }
    </ul>
  )
}

export default Toppings
