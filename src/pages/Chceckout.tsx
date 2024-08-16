import { Bag } from '@/components/bag'
import { FormCheckout } from '@/components/form-checkout'
import { Header } from '@/components/header'

export function Checkout() {
  return (
    <>
      <Header />
      <div className="flex flex-1 flex-row">
        <FormCheckout />
        <Bag />
      </div>
    </>
  )
}
