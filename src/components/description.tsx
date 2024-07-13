import coffeeLImage from '@/assets/coffee.png';
import { Coffee, Package, ShoppingCart, Timer } from "lucide-react";


export function Description(){
  return(
    <main className="flex flex-row w-[100%]">
      <div className="w-[50%] flex flex-col items-center justify-center py-24 pr-0 ">
        <div className="ml-24 w-[588px]">
        <h1 className="font-dongle font-extrabold text-black text-6xl  ">Encontre o café perfeito para qualquer hora do dia</h1>

        <p className="font-roboto text-gray-900 text-lg mt-4 ">
        Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
        </p>
        </div>

        <div className="grid grid-cols-2  mt-16 font-roboto text-[15px] ">
          <div className="flex flex-row  items-center justify-center mb-5">
           <span className="flex items-center justify-center rounded-full bg-yellow-600 w-8 h-8 mr-2">
            <ShoppingCart fill="white" size={16} color="white" />
          </span>
            Compra simples e seguras
            </div>

          <div className="flex flex-row  items-center justify-center mb-5" >
          <span className="flex items-center justify-center rounded-full bg-gray-600 w-8 h-8 mr-2">
            <Package size={16} color="white" /></span>
          Embalagem mantém o café intacto
          </div>

          <div className="flex flex-row  items-center justify-center ">
          <span className="flex items-center justify-center rounded-full bg-yellow-500 w-8 h-8 mr-2">
          <Timer  size={16}color="white" />
          </span>
          Entrega rápida e rastreada
          </div>

          <div className="flex flex-row  items-center justify-center pl-0">
          <span className="flex items-center justify-center rounded-full bg-purple-700 w-8 h-8 mr-2">
          <Coffee fill="white" size={16}  color="white"/>
          </span>
          O café chega fresquinho até você .{''}
          </div>
        
        </div>
      </div>
      <div className="flex items-center justify-start mt-10 w-[50%]">
        <img src={coffeeLImage} alt="Coffee Delivery" />
      </div>
    </main>
  )
}