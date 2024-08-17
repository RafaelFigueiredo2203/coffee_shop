import { useMyContext } from '@/utils/context/useContext'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { CoffeeResume } from './coffe-resume'

export function Bag() {
  const { productsBuy, setProductsBuy } = useMyContext()
  const notify = () => toast.warn('Removido do Carrinho ✅')
  useEffect(() => {
    const productsJSON = localStorage.getItem('cart')
    const products = productsJSON ? JSON.parse(productsJSON) : []
    setProductsBuy(products)
  }, [setProductsBuy])

  function handleProductRemove(id: number) {
    const productIndex = productsBuy.findIndex(
      (product) => Number(product.id) === id,
    )

    if (productIndex !== -1) {
      // Verifica se o produto foi encontrado
      const filterProducts = [...productsBuy] // Cria uma cópia do array de produtos
      filterProducts.splice(productIndex, 1) // Remove o produto do array

      setProductsBuy(filterProducts) // Atualiza o estado com o novo array de produtos

      localStorage.setItem('cart', JSON.stringify(filterProducts))
      notify() // Atualiza o armazenamento local
    }
  }

  return (
    <div className="mx-14 mb-8 mt-10 flex w-[448px] flex-col">
      <h3 className="mb-6 font-dongle text-3xl font-bold text-zinc-800">
        Café selecionados
      </h3>

      <div className="flex flex-col items-center rounded-sm rounded-bl-[50px] rounded-tr-[50px] bg-zinc-50  pt-10">
        {productsBuy.map((coffee) => (
          <>
            <CoffeeResume
              key={coffee.id}
              image={coffee.image}
              price={coffee.newPrice}
              title={coffee.title}
              onDecreaseQuantity={() => {}}
              onIncreaseQuantity={() => {}}
              onRemoveProduct={() => handleProductRemove(Number(coffee.id))}
            />
            <span className="mb-5 mt-5 h-[1px]  w-[368px] bg-zinc-400" />
          </>
        ))}

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
