import { QueryClientProvider } from 'react-query'
import { RouterProvider } from 'react-router-dom'
import { queryClient } from './lib/utils/queryClient'
import { Routes } from './routes'
import { CartProvider } from './utils/context/context'

export function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <RouterProvider router={Routes} />
        </CartProvider>
      </QueryClientProvider>
    </>
  )
}
