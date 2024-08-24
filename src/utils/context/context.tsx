import { IFormInput } from '@/components/form-checkout'
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react'

export interface Product {
  id: string
  title: string
  price: number
  description: string
  cover: string
  image: string

  amount: number
  newPrice: number
}

interface CartContextType {
  productsBuy: Product[]
  order: IFormInput | null
  paymentForm: string

  setProductsBuy: Dispatch<SetStateAction<Product[]>>
  setOrder: Dispatch<SetStateAction<IFormInput | null>>
  setPaymentForm: Dispatch<SetStateAction<string>>
}

export const CartContext = createContext<CartContextType | undefined>(undefined)

interface CartProviderProps {
  children: ReactNode
}

export function CartProvider({ children }: CartProviderProps) {
  const [productsBuy, setProductsBuy] = useState<Product[]>([])
  const [order, setOrder] = useState<IFormInput | null>(null)
  const [paymentForm, setPaymentForm] = useState('')

  return (
    <CartContext.Provider
      value={{
        productsBuy,
        setProductsBuy,
        order,
        setOrder,
        paymentForm,
        setPaymentForm,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
