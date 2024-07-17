import coffeeLImage from '@/assets/coffee.png'
import { Coffee, Package, ShoppingCart, Timer } from 'lucide-react'

export function Description() {
  return (
    <main className="flex w-[100%] flex-row">
      <div className="flex w-[50%] flex-col items-center justify-center py-24 pr-0 ">
        <div className="ml-24 w-[588px]">
          <h1 className="font-dongle text-6xl font-extrabold text-black  ">
            Encontre o café perfeito para qualquer hora do dia
          </h1>

          <p className="mt-4 font-roboto text-lg text-gray-900 ">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </div>

        <div className="mt-16 grid  grid-cols-2 font-roboto text-[15px] ">
          <div className="mb-5 flex  flex-row items-center justify-center">
            <span className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-yellow-600">
              <ShoppingCart fill="white" size={16} color="white" />
            </span>
            Compra simples e seguras
          </div>

          <div className="mb-5 flex  flex-row items-center justify-center">
            <span className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-gray-600">
              <Package size={16} color="white" />
            </span>
            Embalagem mantém o café intacto
          </div>

          <div className="flex flex-row  items-center justify-center ">
            <span className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500">
              <Timer size={16} color="white" />
            </span>
            Entrega rápida e rastreada
          </div>

          <div className="flex flex-row  items-center justify-center pl-0">
            <span className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-purple-700">
              <Coffee fill="white" size={16} color="white" />
            </span>
            O café chega fresquinho até você .{''}
          </div>
        </div>
      </div>
      <div className="mt-10 flex w-[50%] items-center justify-start">
        <img src={coffeeLImage} alt="Coffee Delivery" />
      </div>
    </main>
  )
}
