import { MapPin } from 'lucide-react'

export function FormCheckout() {
  return (
    <div className="mx-14 mt-10 flex w-[640px] flex-col ">
      <h3 className="mb-6 font-dongle text-3xl font-bold text-zinc-800">
        Complete seu pedido
      </h3>

      <div>
        <div className="bg-[#F3F2F2]">
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

            <div className="flx flex-row">
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
      </div>
    </div>
  )
}
