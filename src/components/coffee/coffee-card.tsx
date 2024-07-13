import Coffeimg from '@/assets/Coffee-example.png'
import { Minus, Plus, ShoppingCart } from 'lucide-react'
import { Button } from '../ui/button'

export function CoffeeCard(){
  return(
    <div className="flex flex-col items-center justify-center w-64 mx-8 mt-12">
      <img src={Coffeimg} alt="coffee tradicional" />

      <div className='flex flex-row '>
      <span className="font-roboto text-[10px] font-bold text-yellow-600 bg-yellow-200 rounded-xl mt-3 px-2 mr-1">
      Tradicional
      </span>
      <span className="font-roboto text-[10px] font-bold text-yellow-600 bg-yellow-200 rounded-xl mt-3 px-2 mr-1">
      Tradicional
      </span>
      <span className="font-roboto text-[10px] font-bold text-yellow-600 bg-yellow-200 rounded-xl mt-3 px-2 mr-1">
      Tradicional
      </span>
      </div>

      <h3 className='font-dongle text-gray-900 font-bold text-3xl mt-4'>
      Expresso Tradicional
      </h3>

      <p className='font-robot text-gray-600 font-normal text-center text-sm mt-2'>
      O tradicional café feito com água quente e grãos moídos
      </p>

      <div className='flex flex-row items-center justify-left w-52 h-[38px] mt-8'>
        R$ <span className='font-dongle text-gray-800 font-bold text-3xl ml-1'>
          9,90</span>

      <div className='flex flex-row ml-4 bg-gray-300 rounded-sm'>
      <Button className='flex items-center justify-center px-1 bg-transparent'>
        <Minus size={15} color='#8047F8'/> </Button>
      <span className='flex items-center justify-center p-1'>1</span>
      <Button className='flex items-center justify-center px-1 bg-transparent'>
        <Plus size={15} color='#8047F8'/> </Button>
      </div>

      <Button className='flex items-center justify-center w-[38px] h-[38px] p-1 bg-purple-800 rounded-sm ml-2 hover:bg-purple-600'>
      <ShoppingCart fill="white" size={20} color="white" />
      </Button>

      </div>
    </div>
  )
}