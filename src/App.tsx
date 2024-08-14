import { QueryClientProvider } from 'react-query'
import { Header } from './components/header'
import { queryClient } from './lib/utils/queryClient'
import { SuccessPage } from './pages/SuccessPage'

export function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <SuccessPage />
      </QueryClientProvider>
    </>
  )
}
