import { QueryClientProvider } from 'react-query'
import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { queryClient } from './lib/utils/queryClient'
import { Routes } from './routes'
import { CartProvider } from './utils/context/context'

export function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <RouterProvider router={Routes} />
          <ToastContainer autoClose={2000} theme="dark" />
        </CartProvider>
      </QueryClientProvider>
    </>
  )
}
