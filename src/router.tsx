// react router imports
import { createBrowserRouter } from 'react-router-dom'

import Home from '@/pages/Home'
import Size from '@/pages/Size'
import Toppings from '@/pages/Toppings'
import Final from '@/pages/Final'

const routes = [
  {
    path: '/',
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/size',
        element: <Size />,
      },
      {
        path: '/toppings',
        element: <Toppings />,
      },
      {
        path: '/final',
        element: <Final />,
      },
    ],
  },
]

const router = createBrowserRouter(routes)

export default router
