import { Bag } from '@/components/bag'
import { FormCheckout } from '@/components/form-checkout'

export function Checkout() {
  return (
    <div className="flex flex-1 flex-row">
      <FormCheckout />
      <Bag />
    </div>
  )
}
