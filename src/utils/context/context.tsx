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
}

interface CartContextType {
  productsBuy: Product[]
  setProductsBuy: Dispatch<SetStateAction<Product[]>>
  setProducts: Dispatch<SetStateAction<Product[]>>
  setNumberOfProduct: Dispatch<SetStateAction<number>>
  products: Product[]
  numberOfProduct: number
}

export const CartContext = createContext<CartContextType | undefined>(undefined)

interface CartProviderProps {
  children: ReactNode
}

export function CartProvider({ children }: CartProviderProps) {
  const [numberOfProduct, setNumberOfProduct] = useState(0)
  const [productsBuy, setProductsBuy] = useState<Product[]>([])
  const [products, setProducts] = useState<Product[]>([])

  return (
    <CartContext.Provider
      value={{
        numberOfProduct,
        setNumberOfProduct,
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
