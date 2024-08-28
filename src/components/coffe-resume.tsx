import { Minus, Plus, Trash } from 'lucide-react'
import { Button } from './ui/button'

interface CoffeResumeProps {
  id?: string | number
  image: string
  title: string
  price: string | number
  amount: number
  onRemoveProduct: () => void
  onIncreaseQuantity: () => void
  onDecreaseQuantity: () => void
}

export function CoffeeResume({
  image,
  onRemoveProduct,
  price,
  title,
  onDecreaseQuantity,
  onIncreaseQuantity,
  amount,
}: CoffeResumeProps) {
  return (
    <div className=" flex h-20 w-full flex-row items-center justify-between sm:w-[368px] ">
      <img className="phone:block mr-3 hidden h-16 w-16 " src={image} alt="" />
      <div className="items-left flex flex-col">
        <span className="flex flex-row items-center text-center font-roboto text-base text-gray-900">
          {title}
        </span>
        <div className="flex flex-row">
          <div className=" mr-2 flex h-8 flex-row items-center rounded-sm bg-gray-300 sm:w-16">
            <Button
              onClick={onDecreaseQuantity}
              className="flex h-8 items-center justify-center bg-transparent px-1"
            >
              <Minus size={15} color="#8047F8" />{' '}
            </Button>
            <span className="flex items-center justify-center p-1">
              {amount}
            </span>
            <Button
              onClick={onIncreaseQuantity}
              className="flex h-8 items-center justify-center bg-transparent px-1"
            >
              <Plus size={15} color="#8047F8" />{' '}
            </Button>
          </div>

          <Button
            onClick={onRemoveProduct}
            className="flex h-8 items-center justify-center bg-gray-300  px-1 "
          >
            <Trash size={15} color="#8047F8" className="mr-1" />{' '}
            <span className="font-regular text-sm  text-gray-900">Remover</span>
          </Button>
        </div>
      </div>
      <span className=" mb-7 ml-4 mt-0  font-dongle text-3xl font-medium text-gray-800">
        {price}
      </span>
    </div>
  )
}
