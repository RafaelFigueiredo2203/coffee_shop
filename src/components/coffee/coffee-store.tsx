import { CoffeeCard } from "./coffee-card";

export function CoffeeStore(){
  return(
    <div className="w-full mt-8 flex flex-col items-start justify-start ">
      <h2 className="font-dongle text-5xl font-bold text-gray-900 pl-20">
      Nossos cafés
      </h2>

      <div className="w-full grid grid-cols-4 mt-12 mb-16 px-8">
      {Array.from({ length: 14 }).map((_, i) => {
                  return <CoffeeCard key={i} />
                })}
        
      </div>
      
    </div>
  )
}