// react imports
import { useContext, useEffect } from 'react'

// react router imports
import { useLocation } from 'react-router-dom'

// context imports
import { PizzaContext } from '@/components/Context'

// data imports
import data from '@/process'

// style imports
import styles from '@/styles/size.module.scss'

const Size = () => {
  const {
    size,
    setSize,
    setPreviousSize,
    setToppings,
  } = useContext(PizzaContext)
  const { pathname } = useLocation()
  const { options } = data[pathname]

  const handleSizeChange = ({ target }) => {
    setPreviousSize(size)
    setSize(target.value)
  }

  useEffect(() => {
    setToppings([])
  }, [])

  return (
    <ul className={styles.list}>
      { options.map((option) => (
          <li key={option}>
            <label className={`${styles.itemLabel} ${option === size && styles.active}`}>
              <input
                checked={option === size}
                value={option}
                type="radio"
                name="pizza-size"
                onChange={handleSizeChange} />
              <span>
                {option}
              </span>
            </label>
          </li>
        ))
      }
    </ul>
  )
}

export default Size
