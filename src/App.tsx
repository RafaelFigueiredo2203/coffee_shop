import { QueryClientProvider } from 'react-query'
import { Header } from './components/header'
import { queryClient } from './lib/utils/queryClient'
import { Checkout } from './pages/Chceckout'

export function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Checkout />
      </QueryClientProvider>
    </>
  )
}
