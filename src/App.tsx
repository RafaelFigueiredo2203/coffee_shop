import { QueryClientProvider } from 'react-query'
import { Header } from './components/header'
import { queryClient } from './lib/utils/queryClient'
import { Dashboard } from './pages/Dashboard'
import { CartProvider } from './utils/context/context'

export function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <Header />
          <Dashboard />
        </CartProvider>
      </QueryClientProvider>
    </>
  )
}
