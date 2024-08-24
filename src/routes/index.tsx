import { Checkout } from '@/pages/Chceckout'
import { Dashboard } from '@/pages/Dashboard'
import { SuccessPage } from '@/pages/SuccessPage'

import { createBrowserRouter } from 'react-router-dom'

export const Routes = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/product',
    element: <Checkout />,
  },
  {
    path: '/success',
    element: <SuccessPage />,
  },
])
