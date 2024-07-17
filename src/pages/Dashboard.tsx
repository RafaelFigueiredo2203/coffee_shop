import { CoffeeStore } from '@/components/coffee/coffee-store'
import { Description } from '@/components/description'

export function Dashboard() {
  return (
    <div>
      <Description />
      <CoffeeStore />
    </div>
  )
}
