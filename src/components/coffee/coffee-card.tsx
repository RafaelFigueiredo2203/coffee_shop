import { Minus, Plus, ShoppingCart } from 'lucide-react'
import { Button } from '../ui/button'

export interface CoffeeCardProps {
  id?: string
  title: string
  description: string
  tags: string[]
  price: string | number
  image: string
}

export function CoffeeCard({
  title,
  description,
  image,
  price,
  tags,
}: CoffeeCardProps) {
  return (
    <div
      className="mx-8 mt-12 flex w-64 flex-col items-center justify-center rounded-bl-3xl  rounded-br-md rounded-tl-md rounded-tr-3xl bg-[#ebeaea] px-1
    "
    >
      <img src={image} alt="coffee tradicional" className="mt-[-20px]" />

      <div className="flex flex-row ">
        {tags.map((tag) => (
          <span
            key={tag}
            className="mr-1 mt-3 rounded-xl bg-yellow-200 px-2 font-roboto text-[10px] font-bold capitalize text-yellow-600"
          >
            {tag}
          </span>
        ))}
      </div>

      <h3 className="mt-4 font-dongle text-3xl font-bold text-gray-900">
        {title}
      </h3>

      <p className="font-robot mt-2 text-center text-sm font-normal text-gray-600">
        {description}
      </p>

      <div className="justify-left mb-6 mt-8 flex h-[38px] w-52 flex-row items-center">
        <span className="ml-1 font-dongle text-3xl font-bold text-gray-800">
          {price}
        </span>

        <div className="ml-4 flex flex-row rounded-sm bg-gray-300">
          <Button className="flex items-center justify-center bg-transparent px-1">
            <Minus size={15} color="#8047F8" />{' '}
          </Button>
          <span className="flex items-center justify-center p-1">1</span>
          <Button className="flex items-center justify-center bg-transparent px-1">
            <Plus size={15} color="#8047F8" />{' '}
          </Button>
        </div>

        <Button className="ml-2 flex h-[38px] w-[38px] items-center justify-center rounded-sm bg-purple-800 p-1 hover:bg-purple-600">
          <ShoppingCart fill="white" size={20} color="white" />
        </Button>
      </div>
    </div>
  )
}
