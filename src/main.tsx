import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// react router imports
import { RouterProvider } from 'react-router-dom'
import router from '@/router'

// style imports
import '@/app.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
