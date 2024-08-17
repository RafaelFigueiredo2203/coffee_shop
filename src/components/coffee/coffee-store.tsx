import { FormatCurrency } from '@/lib/functions/format-curreny'
import { useMyContext } from '@/utils/context/useContext'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { toast } from 'react-toastify'
import { CoffeeCard } from './coffee-card'

export function CoffeeStore() {
  const { productsBuy, setProductsBuy } = useMyContext()
  const notify = () => toast.success('Adicionado ao Carrinho ✅')
  const [numberOfProduct, setNumberOfProduct] = useState<{
    [key: number]: number
  }>({})

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(productsBuy))
    console.log(numberOfProduct)
  }, [productsBuy])

  async function fetchData() {
    const res = await axios.get(
      'https://raw.githubusercontent.com/RafaelFigueiredo2203/coffee_shop/main/data.json',
    )
    console.log(res.data)
    return res.data
  }
  const { data, isLoading } = useQuery('data', fetchData)

  function handleIncreaseProduct(id: number) {
    setNumberOfProduct((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }))
  }

  function handleDecreaseProduct(id: number) {
    setNumberOfProduct((prev) => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : 0,
    }))
  }

  function buyProduct(id: number) {
    console.log(data)
    // Encontrar o produto no conjunto de dados
    const newProductBuy = data.find((x: { id: number }) => x.id === id)

    if (newProductBuy) {
      // Obter a quantidade atual do produto
      const quantity = numberOfProduct[id] || 0 // Assumindo que quantities é o estado que mantém a quantidade de cada produto
      console.log(quantity)
      if (quantity <= 0) {
        return
      }
      // Verificar se o produto já está no carrinho
      const existingProductIndex = productsBuy.findIndex(
        (product) => Number(product.id) === id,
      )

      if (existingProductIndex !== -1) {
        // Se o produto já estiver no carrinho, atualizar a quantidade
        const updatedProducts = [...productsBuy]
        updatedProducts[existingProductIndex].amount += quantity // Incrementar a quantidade com base na seleção atual
        updatedProducts[existingProductIndex].newPrice =
          updatedProducts[existingProductIndex].price *
          updatedProducts[existingProductIndex].amount // Atualizar o preço total
        setProductsBuy(updatedProducts)
      } else {
        // Se o produto não estiver no carrinho, adicionar ao carrinho
        newProductBuy.amount = quantity
        newProductBuy.price = parseFloat(newProductBuy.price) // Converter o preço para número, se necessário
        newProductBuy.newPrice = newProductBuy.price * newProductBuy.amount // Calcular o preço total

        setProductsBuy((prevState) => [...prevState, newProductBuy])
      }

      // Atualizar o local storage com o novo estado do carrinho
      localStorage.setItem('cart', JSON.stringify(productsBuy))
      notify()
    }
  }

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
            id: string | number
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
              onDecreaseQuantity={() =>
                handleDecreaseProduct(Number(coffee.id))
              }
              onIncreaseQuantity={() =>
                handleIncreaseProduct(Number(coffee.id))
              }
              onBuyProduct={() => buyProduct(Number(coffee.id))}
              productQuantity={numberOfProduct[Number(coffee.id)] || 0}
            />
          ),
        )}
      </div>
    </div>
  )
}
