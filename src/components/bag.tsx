import { Minus, Plus, Trash } from 'lucide-react'
import { Button } from './ui/button'

export function Bag() {
  return (
    <div className="mx-14 mb-8 mt-10 flex w-[448px] flex-col">
      <h3 className="mb-6 font-dongle text-3xl font-bold text-zinc-800">
        Café selecionados
      </h3>

      <div className="flex flex-col items-center rounded-sm border bg-[#F3F2F2]">
        <div className="flex h-20 w-[368] flex-row items-center justify-center border">
          <img
            className="mr-3 h-16 w-16"
            src="https://github.com/RafaelFigueiredo2203/coffee_shop/blob/main/src/assets/Image-13.png?raw=true"
            alt=""
          />
          <div className="items-left flex flex-col">
            <span className="flex flex-row items-center text-center font-roboto text-base text-gray-900">
              Expresso Tradicional
            </span>
            <div className="flex flex-row">
              <div className=" mr-2 flex h-8 w-16 flex-row items-center rounded-sm bg-gray-300">
                <Button className="flex h-8 items-center justify-center bg-transparent px-1">
                  <Minus size={15} color="#8047F8" />{' '}
                </Button>
                <span className="flex items-center justify-center p-1">1</span>
                <Button className="flex h-8 items-center justify-center bg-transparent px-1">
                  <Plus size={15} color="#8047F8" />{' '}
                </Button>
              </div>

              <Button className="flex h-8 items-center justify-center bg-gray-300  px-1 ">
                <Trash size={15} color="#8047F8" className="mr-1" />{' '}
                <span className="font-regular text-sm  text-gray-900">
                  Remover
                </span>
              </Button>
            </div>
          </div>
          <span className="ml-4 mt-0  font-dongle text-3xl font-medium text-gray-800">
            9.90
          </span>
        </div>

        <div className="flex h-20 w-[368] flex-row items-center justify-center border">
          <img
            className="mr-3 h-16 w-16"
            src="https://github.com/RafaelFigueiredo2203/coffee_shop/blob/main/src/assets/Image-13.png?raw=true"
            alt=""
          />
          <div className="items-left flex flex-col">
            <span className="flex flex-row items-center text-center font-roboto text-base text-gray-900">
              Expresso Tradicional
            </span>
            <div className="flex flex-row">
              <div className=" mr-2 flex h-8 w-16 flex-row items-center rounded-sm bg-gray-300">
                <Button className="flex h-8 items-center justify-center bg-transparent px-1">
                  <Minus size={15} color="#8047F8" />{' '}
                </Button>
                <span className="flex items-center justify-center p-1">1</span>
                <Button className="flex h-8 items-center justify-center bg-transparent px-1">
                  <Plus size={15} color="#8047F8" />{' '}
                </Button>
              </div>

              <Button className="flex h-8 items-center justify-center bg-gray-300  px-1 ">
                <Trash size={15} color="#8047F8" className="mr-1" />{' '}
                <span className="font-regular text-sm  text-gray-900">
                  Remover
                </span>
              </Button>
            </div>
          </div>
          <span className="ml-4 mt-0  font-dongle text-3xl font-medium text-gray-800">
            9.90
          </span>
        </div>

        <div className="flex h-20 w-[368] flex-row items-center justify-center border">
          <img
            className="mr-3 h-16 w-16"
            src="https://github.com/RafaelFigueiredo2203/coffee_shop/blob/main/src/assets/Image-13.png?raw=true"
            alt=""
          />
          <div className="items-left flex flex-col">
            <span className="flex flex-row items-center text-center font-roboto text-base text-gray-900">
              Expresso Tradicional
            </span>
            <div className="flex flex-row">
              <div className=" mr-2 flex h-8 w-16 flex-row items-center rounded-sm bg-gray-300">
                <Button className="flex h-8 items-center justify-center bg-transparent px-1">
                  <Minus size={15} color="#8047F8" />{' '}
                </Button>
                <span className="flex items-center justify-center p-1">1</span>
                <Button className="flex h-8 items-center justify-center bg-transparent px-1">
                  <Plus size={15} color="#8047F8" />{' '}
                </Button>
              </div>

              <Button className="flex h-8 items-center justify-center bg-gray-300  px-1 ">
                <Trash size={15} color="#8047F8" className="mr-1" />{' '}
                <span className="font-regular text-sm  text-gray-900">
                  Remover
                </span>
              </Button>
            </div>
          </div>
          <span className="ml-4 mt-0  font-dongle text-3xl font-medium text-gray-800">
            9.90
          </span>
        </div>
      </div>
    </div>
  )
}
