import { useMyContext } from '@/utils/context/useContext'
import { CircleDollarSign, CreditCardIcon, MapPin } from 'lucide-react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'

export interface IFormInput {
  street: string
  addresNumber: string
  complement?: string
  neighborhood: string
  city: string
  stateUf: string
  paymentForm: string
  cep: string
}

interface FormCheckoutProps {
  onSubmit: SubmitHandler<IFormInput>
}

export function FormCheckout({ onSubmit }: FormCheckoutProps) {
  const notify = () => toast.success('Pedido enviado 🚀')
  const navigation = useNavigate()

  const { paymentForm, setPaymentForm, setProductsBuy } = useMyContext()

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IFormInput>()

  const handleFormSubmit: SubmitHandler<IFormInput> = (data) => {
    // Salva os dados no localStorage
    localStorage.setItem('order', JSON.stringify(data))
    localStorage.setItem('paymentForm', JSON.stringify(paymentForm))
    // Chama a função de submissão que foi passada como prop
    onSubmit(data)
    notify()
    navigation('/success')
    setProductsBuy([])
    localStorage.removeItem('cart')
  }

  return (
    <div className="mx-14 mb-8 mt-10 flex w-[640px] flex-col   ">
      <h3 className="mb-6 font-dongle text-3xl font-bold text-zinc-800">
        Complete seu pedido
      </h3>

      <div>
        <form id="checkout-form" onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="rounded-sm  bg-zinc-50 p-5">
            <div className="mb-6 flex flex-col items-center  rounded-sm text-center">
              <MapPin className="mt-5 h-5 w-5 text-yellow-600" />
              <span className="flex flex-row items-center text-center font-roboto text-lg text-gray-900">
                Endereço de Entrega
              </span>
              <p className="font-roboto text-base text-gray-900">
                Informe o endereço onde deseja receber seu pedido
              </p>
            </div>

            <div className="flex flex-col">
              {errors.cep && (
                <span className="text-red-500">{errors.cep.message}</span>
              )}
              <input
                type="text"
                placeholder="CEP"
                className="mb-4 h-10 w-48 rounded-sm border border-zinc-300 bg-gray-200 px-1 font-roboto outline-none placeholder:text-base"
                {...register('cep', {
                  required: '*',
                })}
              />

              {errors.street && (
                <span className="text-red-500">{errors.street.message}</span>
              )}
              <input
                type="text"
                placeholder="Rua"
                className="mb-4 h-10 rounded-sm border border-zinc-300 bg-gray-200 px-1 font-roboto outline-none placeholder:text-base"
                {...register('street', {
                  required: '*',
                })}
              />
            </div>

            {errors.addresNumber && (
              <span className="text-red-500">
                {errors.addresNumber.message}
              </span>
            )}
            <div className="flex flex-row">
              <input
                type="text"
                placeholder="Número"
                className="mb-4 mr-3 h-10 w-48 rounded-sm border border-zinc-300 bg-gray-200 px-1 font-roboto outline-none placeholder:text-base"
                {...register('addresNumber', {
                  required: '*',
                })}
              />

              <input
                type="text"
                placeholder="Complemento (Opicional)"
                className="mb-4 h-10 w-full rounded-sm border border-zinc-300 bg-gray-200 px-1 font-roboto outline-none placeholder:text-base"
                {...register('complement')}
              />
            </div>

            {errors.neighborhood && (
              <span className="text-red-500">
                {errors.neighborhood.message}
              </span>
            )}
            <div className="flx flex- w-[560px]">
              <input
                type="text"
                placeholder="Bairro"
                className="mb-4 mr-3 h-10 rounded-sm border border-zinc-300 bg-gray-200 px-1 font-roboto outline-none placeholder:text-base"
                {...register('neighborhood', {
                  required: '*',
                })}
              />

              {errors.city && (
                <span className="text-red-500">{errors.city.message}</span>
              )}
              <input
                type="text"
                placeholder="Cidade"
                className="mb-4 mr-3 h-10 w-72 rounded-sm border border-zinc-300 bg-gray-200 px-1 font-roboto outline-none placeholder:text-base"
                {...register('city', {
                  required: '*',
                })}
              />

              <input
                type="text"
                placeholder="UF"
                className="mb-4 h-10 w-14 rounded-sm border border-zinc-300 bg-gray-200 px-1 font-roboto outline-none placeholder:text-base"
                {...register('stateUf', {
                  required: '*',
                })}
              />
              {errors.stateUf && (
                <span className="text-red-500">{errors.stateUf.message}</span>
              )}
            </div>
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

            <div className="mb-8 mt-8 flex w-full flex-row items-center justify-center">
              {paymentForm === 'Crédito' ? (
                <button
                  onClick={() => setPaymentForm('Crédito')}
                  type="button"
                  className="mr-2 flex h-12  w-44 flex-row items-center justify-center rounded-md border border-purple-700   bg-zinc-300 text-center text-zinc-700 hover:border hover:border-purple-700 hover:bg-zinc-300"
                >
                  <CreditCardIcon className="mr-1 flex h-5 w-5 text-purple-600" />
                  Cartão de crédito
                </button>
              ) : (
                <button
                  onClick={() => setPaymentForm('Crédito')}
                  type="button"
                  className="mr-2 flex h-12  w-44 flex-row items-center justify-center rounded-md bg-zinc-200  text-center text-zinc-700 hover:border hover:border-purple-700 hover:bg-zinc-300"
                >
                  <CreditCardIcon className="mr-1 flex h-5 w-5 text-purple-600" />
                  Cartão de crédito
                </button>
              )}

              {paymentForm === 'Débito' ? (
                <button
                  onClick={() => setPaymentForm('Débito')}
                  type="button"
                  className="mr-2 flex h-12  w-44 flex-row items-center justify-center rounded-md border border-purple-700   bg-zinc-300 text-center text-zinc-700 hover:border hover:border-purple-700 hover:bg-zinc-300"
                >
                  <CreditCardIcon className="mr-1 h-5 w-5 text-purple-600" />
                  Cartão de débito
                </button>
              ) : (
                <button
                  onClick={() => setPaymentForm('Débito')}
                  type="button"
                  className="mr-2 flex h-12 w-44  flex-row items-center justify-center rounded-md bg-zinc-200 text-center  text-zinc-700 hover:border hover:border-purple-700 hover:bg-zinc-300"
                >
                  <CreditCardIcon className="mr-1 h-5 w-5 text-purple-600" />
                  Cartão de débito
                </button>
              )}

              {paymentForm === 'Dinheiro' ? (
                <button
                  onClick={() => setPaymentForm('Dinheiro')}
                  type="button"
                  className="mr-2 flex h-12  w-44 flex-row items-center justify-center rounded-md border border-purple-700   bg-zinc-300 text-center text-zinc-700 hover:border hover:border-purple-700 hover:bg-zinc-300"
                >
                  <CircleDollarSign className="mr-1 h-5 w-5 text-purple-600" />
                  Dinheiro
                </button>
              ) : (
                <button
                  onClick={() => setPaymentForm('Dinheiro')}
                  type="button"
                  className="mr-2 flex h-12  w-44 flex-row items-center justify-center rounded-md bg-zinc-200  text-center text-zinc-700 hover:border hover:border-purple-700 hover:bg-zinc-300"
                >
                  <CircleDollarSign className="mr-1 h-5 w-5 text-purple-600" />
                  Dinheiro
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
