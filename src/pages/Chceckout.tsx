import { Bag } from '@/components/bag'
import { FormCheckout, IFormInput } from '@/components/form-checkout'
import { Header } from '@/components/header'
import { useCallback } from 'react'

export function Checkout() {
  const handleFormSubmit = useCallback((data: IFormInput) => {
    console.log('Form data:', data)
  }, [])

  return (
    <>
      <Header />
      <div className="flex flex-1 flex-row">
        <FormCheckout onSubmit={handleFormSubmit} />
        <Bag />
      </div>
    </>
  )
}
