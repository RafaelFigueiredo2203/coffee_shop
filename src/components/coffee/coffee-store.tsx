import { CoffeeCard } from "./coffee-card";

export function CoffeeStore(){
  return(
    <div className="w-full mt-8 flex flex-col items-start justify-start pl-40">
      <h2 className="font-dongle text-5xl font-bold text-gray-900">
      Nossos cafés
      </h2>

      <div className="grid grid-cols-4 mt-12 mb-16 ">
      {Array.from({ length: 14 }).map((_, i) => {
                  return <CoffeeCard key={i} />
                })}
        
      </div>
    </div>
  )
}