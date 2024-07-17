import { CircleDollarSign, CreditCardIcon, MapPin } from 'lucide-react'

export function FormCheckout() {
  return (
    <div className="mx-14 mb-8 mt-10 flex w-[640px] flex-col   ">
      <h3 className="mb-6 font-dongle text-3xl font-bold text-zinc-800">
        Complete seu pedido
      </h3>

      <div>
        <div className="rounded-sm  bg-zinc-50">
          <div className="flex flex-col items-center rounded-sm  text-center">
            <MapPin className="mt-5 h-5 w-5 text-yellow-600" />
            <span className="flex flex-row items-center text-center font-roboto text-lg text-gray-900">
              Endereço de Entrega
            </span>
            <p className="font-roboto text-base text-gray-900">
              Informe o endereço onde deseja receber seu pedido
            </p>
          </div>

          <form action="" className="m-10">
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="CEP"
                className="mb-4 h-10 w-48 rounded-sm border border-zinc-300 bg-gray-200 px-1 font-roboto outline-none placeholder:text-base"
              />

              <input
                type="text"
                placeholder="Rua"
                className="mb-4 h-10 rounded-sm border border-zinc-300 bg-gray-200 px-1 font-roboto outline-none placeholder:text-base"
              />
            </div>

            <div className="flex flex-row">
              <input
                type="text"
                placeholder="Número"
                className="mb-4 mr-3 h-10 w-48 rounded-sm border border-zinc-300 bg-gray-200 px-1 font-roboto outline-none placeholder:text-base"
              />

              <input
                type="text"
                placeholder="Complemento (Opicional)"
                className="mb-4 h-10 w-full rounded-sm border border-zinc-300 bg-gray-200 px-1 font-roboto outline-none placeholder:text-base"
              />
            </div>

            <div className="flx flex- w-[560px]">
              <input
                type="text"
                placeholder="Bairro"
                className="mb-4 mr-3 h-10 rounded-sm border border-zinc-300 bg-gray-200 px-1 font-roboto outline-none placeholder:text-base"
              />

              <input
                type="text"
                placeholder="Cidade"
                className="mb-4 mr-3 h-10 w-72 rounded-sm border border-zinc-300 bg-gray-200 px-1 font-roboto outline-none placeholder:text-base"
              />

              <input
                type="text"
                placeholder="UF"
                className="mb-4 h-10 w-14 rounded-sm border border-zinc-300 bg-gray-200 px-1 font-roboto outline-none placeholder:text-base"
              />
            </div>
          </form>
        </div>

        <div className="mt-6 flex flex-col items-center rounded-sm  bg-zinc-50">
          <div className="flex flex-col items-center rounded-sm  text-center">
            <CircleDollarSign className="mt-5 h-5 w-5 text-purple-600" />
            <span className="flex flex-row items-center text-center font-roboto text-lg text-gray-900">
              Pagamento
            </span>
            <p className="font-roboto text-base text-gray-900">
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>

          <div className="mb-8 mt-8 w-[560px]">
            <button
              type="button"
              className="mr-2 flex h-12  w-44 flex-row items-center justify-center rounded-md bg-zinc-200 text-center text-zinc-700 hover:border hover:border-purple-700 hover:bg-zinc-300"
            >
              <CreditCardIcon className="mt-5 h-5 w-5 text-purple-600" />
              Cartão de crédito
            </button>

            <button
              type="button"
              className="mr-2 h-12 w-44 rounded-md bg-zinc-200 text-zinc-700 hover:border hover:border-purple-700 hover:bg-zinc-300"
            >
              <CreditCardIcon className="mt-5 h-5 w-5 text-purple-600" />
              Cartão de débito
            </button>

            <button
              type="button"
              className="mr-2 h-12 w-44 rounded-md bg-zinc-200 text-zinc-700 hover:border hover:border-purple-700 hover:bg-zinc-300"
            >
              <CircleDollarSign className="mt-5 h-5 w-5 text-purple-600" />
              Dinheiro
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
