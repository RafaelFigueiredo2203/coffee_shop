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
  thumbnail: string
  ingredients: string[]
  amount: number
  newPrice: number
}

interface CartContextType {
  productsBuy: Product[]
  setProductsBuy: Dispatch<SetStateAction<Product[]>>
  setProducts: Dispatch<SetStateAction<Product[]>>

  products: Product[]
}

export const CartContext = createContext<CartContextType | undefined>(undefined)

interface CartProviderProps {
  children: ReactNode
}

export function CartProvider({ children }: CartProviderProps) {
  const [productsBuy, setProductsBuy] = useState<Product[]>([])
  const [products, setProducts] = useState<Product[]>([])

  return (
    <CartContext.Provider
      value={{
        productsBuy,
        setProductsBuy,
        products,
        setProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
