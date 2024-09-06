// react imports
import { ChangeEvent, useContext } from 'react'

// context imports
import { PizzaContext } from '@/components/Context'

// react router imports
import { useLocation } from 'react-router-dom'

// data imports
import data from '@/process.json'

const Size = () => {
  const { size, setSize, setPreviousSize } = useContext(PizzaContext)
  const { pathname } = useLocation()
  const { options } = data[pathname]

  const handleSizeChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setPreviousSize(size)
    setSize(target.value)
  }

  return (
    <ul>
      { options.map((option: string) => (
          <li key={option}>
            <label>
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
