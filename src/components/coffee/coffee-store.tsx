import axios from 'axios';
import { useQuery } from 'react-query';
import { CoffeeCard, CoffeeCardProps } from "./coffee-card";

export function CoffeeStore(){

  async function fetchData() {
    const res = await axios.get('https://raw.githubusercontent.com/RafaelFigueiredo2203/coffee_shop/main/data.json');
    console.log(res.data)
    return res.data;
  }


  const { data ,isLoading} = useQuery('data', fetchData);

  if(isLoading){
    return
  }

  console.log(data)


  return(
    <div className="w-full mt-8 flex flex-col items-start justify-start ">
      <h2 className="font-dongle text-5xl font-bold text-gray-900 pl-20">
      Nossos cafés
      </h2>

      <div className="w-full grid grid-cols-4 mt-12 mb-16 px-8">
      {data.map((coffee: CoffeeCardProps) => (
        <CoffeeCard
        key={coffee.id}
        title={coffee.title}
        description={coffee.description}
        image='https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/800px-A_small_cup_of_coffee.JPG'
        price={9.00}
        tags={['Tradicional, expresso']}
        />
      ))}
        
      </div>
      
    </div>
  )
}