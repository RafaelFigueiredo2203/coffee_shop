import { Minus, Plus, Trash } from 'lucide-react'
import { Button } from './ui/button'

export function Bag() {
  return (
    <div className="mx-14 mb-8 mt-10 flex w-[448px] flex-col">
      <h3 className="mb-6 font-dongle text-3xl font-bold text-zinc-800">
        Café selecionados
      </h3>

      <div className="flex flex-col items-center rounded-sm rounded-bl-[50px] rounded-tr-[50px] bg-zinc-50  pt-10">
        <div className=" flex h-20 w-[368px] flex-row items-center justify-between ">
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
          <span className=" mb-7 ml-4 mt-0  font-dongle text-3xl font-medium text-gray-800">
            9.90
          </span>
        </div>

        <span className="mb-5 mt-5 h-[1px]  w-[368px] bg-zinc-400" />

        <div className=" flex h-20 w-[368px] flex-row items-center justify-between ">
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
          <span className=" mb-7 ml-4 mt-0  font-dongle text-3xl font-medium text-gray-800">
            9.90
          </span>
        </div>

        <span className="mb-5 mt-5 h-[1px]  w-[368px] bg-zinc-400" />

        <div className="flex w-[368px] flex-col items-center ">
          <span className="flex w-full flex-row items-center justify-between">
            <p className="font-roboto text-sm text-zinc-800">Total de itens</p>
            <p className="font-roboto text-base text-zinc-800">R$ 29,70</p>
          </span>

          <span className="flex w-full flex-row items-center justify-between">
            <p className="font-roboto text-sm text-zinc-800">Entrega</p>
            <p className="font-roboto text-base text-zinc-800">R$ 3,50</p>
          </span>

          <span className="flex w-full flex-row items-center justify-between">
            <p className="font-roboto text-xl font-bold text-zinc-800">Total</p>
            <p className="font-roboto text-xl font-bold text-zinc-800">
              R$ 33,20
            </p>
          </span>
        </div>

        <button
          type="button"
          className="mb-10 mt-6 flex h-11 w-[368px] items-center justify-center rounded-xl bg-[#DBAC2C] font-roboto text-sm font-bold text-white hover:bg-yellow-500"
        >
          Confirmar Pedido
        </button>
      </div>
    </div>
  )
}
