// react router imports
import { createBrowserRouter } from 'react-router-dom'

// layout & pages
import PizzaLayout from '@/components/PizzaLayout'
import Home from '@/pages/Home'
import Size from '@/pages/Size'
import Toppings from '@/pages/Toppings'

const routes = [
  {
    path: '/',
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        element: <PizzaLayout />,
        children: [
          {
            path: 'size',
            element: <Size />,
          },
          {
            path: 'toppings',
            element: <Toppings />,
          },
          {
            path: 'final',
          },
        ],
      },
    ],
  },
]

const router = createBrowserRouter(routes)

export default router
