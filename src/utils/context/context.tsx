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
  products: Product[]
  paymentForm: string

  setProductsBuy: Dispatch<SetStateAction<Product[]>>
  setProducts: Dispatch<SetStateAction<Product[]>>
  setPaymentForm: Dispatch<SetStateAction<string>>
}

export const CartContext = createContext<CartContextType | undefined>(undefined)

interface CartProviderProps {
  children: ReactNode
}

export function CartProvider({ children }: CartProviderProps) {
  const [productsBuy, setProductsBuy] = useState<Product[]>([])
  const [products, setProducts] = useState<Product[]>([])
  const [paymentForm, setPaymentForm] = useState('Débito')

  return (
    <CartContext.Provider
      value={{
        productsBuy,
        setProductsBuy,
        products,
        setProducts,
        paymentForm,
        setPaymentForm,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
