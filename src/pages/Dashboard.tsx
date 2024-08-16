import { CoffeeStore } from '@/components/coffee/coffee-store'
import { Description } from '@/components/description'
import { Header } from '@/components/header'

export function Dashboard() {
  return (
    <div>
      <Header />
      <Description />
      <CoffeeStore />
    </div>
  )
}
