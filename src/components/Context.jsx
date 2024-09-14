// react imports
import { createContext, useState } from 'react'

export const PizzaContext = createContext({})

const PizzaContextProvider = ({ children }) => {
  const [size, setSize] = useState('medium')
  const [previousSize, setPreviousSize] = useState(null)
  const [toppings, setToppings] = useState([])

  return (
    <PizzaContext.Provider value={{ size, setSize, previousSize, setPreviousSize, toppings, setToppings }}>
      {children}
    </PizzaContext.Provider>
  )
}

export default PizzaContextProvider
