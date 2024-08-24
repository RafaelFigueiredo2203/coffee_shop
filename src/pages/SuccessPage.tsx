import { Header } from '@/components/header'
import { useMyContext } from '@/utils/context/useContext'
import { AlarmClock, DollarSign, MapPinned } from 'lucide-react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import deliveryIcon from '../assets/Illustration.png'

export function SuccessPage() {
  const { order, setOrder } = useMyContext()

  const navigation = useNavigate()

  const paymentForm = localStorage.getItem('paymentForm')
  const payment = paymentForm ? JSON.parse(paymentForm) : undefined

  useEffect(() => {
    const orderJSON = localStorage.getItem('order')
    const newOrder = orderJSON ? JSON.parse(orderJSON) : []
    setOrder(newOrder)
  }, [setOrder])

  useEffect(() => {
    if (!order) {
      navigation('/')
    }
  }, [order, navigation])

  if (!order) {
    return null // Retorna `null` para evitar retornar `void`
  }

  return (
    <div>
      {' '}
      <Header />
      <div className="mt-14 flex flex-row items-center justify-center">
        <div>
          <div>
            <h1 className="font-dongle text-5xl font-bold text-yellow-600 ">
              Uhu! Pedido confirmado
            </h1>
            <h3 className="font-roboto text-base text-gray-800">
              Agora é só aguardar que logo o café chegará até você
            </h3>
          </div>

          <div className=" mt-10 flex flex-row items-center justify-center">
            <div className=" rounded-sm rounded-bl-[50px] rounded-tr-[50px] border  bg-gradient-to-tr from-yellow-500 to-purple-500 p-0.5 ">
              <div className="flex h-[270px] w-[520px] flex-col  items-center justify-center rounded-sm  rounded-bl-[50px] rounded-tr-[50px]  bg-white p-10 font-roboto text-[15px]">
                <div className="items-left mb-5 flex w-full  flex-row  items-center">
                  <span className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-purple-600">
                    <MapPinned size={16} color="white" />
                  </span>
                  <div>
                    <p className="text-gray-800">
                      Entrega em <strong>{order.street}</strong>{' '}
                    </p>
                    <p className="text-gray-800">
                      {order.neighborhood} - {order.city}, {order.stateUf}
                    </p>
                  </div>
                </div>

                <div className="items-left mb-5 flex  w-full flex-row items-center ">
                  <span className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500">
                    <AlarmClock size={16} color="white" />
                  </span>
                  <div>
                    <p className="text-gray-800">Previsão de entrega</p>
                    <p className="text-gray-800">
                      <strong>20 min - 30 min </strong>
                    </p>
                  </div>
                </div>

                <div className="items-left flex w-full flex-row items-center  ">
                  <span className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-yellow-700">
                    <DollarSign size={16} color="white" />
                  </span>
                  <div>
                    <p className="text-gray-800">Pagamento na entrega</p>
                    <p className="text-gray-800">
                      <strong>{payment}</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <img
              src={deliveryIcon}
              className="ml-10 h-[290px]"
              alt="Delivery icon"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
