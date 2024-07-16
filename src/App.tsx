import { QueryClientProvider } from 'react-query'
import { CoffeeStore } from './components/coffee/coffee-store'
import { Header } from './components/header'
import { queryClient } from './lib/utils/queryClient'
import { Dashboard } from './pages/Dashboard'

export function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Dashboard />
        <CoffeeStore />
      </QueryClientProvider>
    </>
  )
}
