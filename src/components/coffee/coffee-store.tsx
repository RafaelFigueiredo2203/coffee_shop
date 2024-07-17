import { FormatCurrency } from '@/lib/functions/format-curreny'
import axios from 'axios'
import { Key } from 'react'
import { useQuery } from 'react-query'
import { CoffeeCard } from './coffee-card'

export function CoffeeStore() {
  async function fetchData() {
    const res = await axios.get(
      'https://raw.githubusercontent.com/RafaelFigueiredo2203/coffee_shop/main/data.json',
    )
    console.log(res.data)
    return res.data
  }
  const { data, isLoading } = useQuery('data', fetchData)

  if (isLoading) {
    return
  }

  return (
    <div className="mt-8 flex w-full flex-col items-start justify-start ">
      <h2 className="pl-20 font-dongle text-5xl font-bold text-gray-900">
        Nossos cafés
      </h2>

      <div className="mb-16 mt-12 grid w-full grid-cols-4 px-8">
        {data.map(
          (coffee: {
            id: Key | null | undefined
            title: string
            description: string
            image: string
            price: number
            tags: string[]
          }) => (
            <CoffeeCard
              key={coffee.id}
              title={coffee.title}
              description={coffee.description}
              image={coffee.image}
              price={FormatCurrency(coffee.price)}
              tags={coffee.tags}
            />
          ),
        )}
      </div>
    </div>
  )
}
