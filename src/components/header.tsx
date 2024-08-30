import { useMyContext } from '@/utils/context/useContext'
import { MapPin } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Logo.png'
import cartLogo from '../assets/Vector.png'

export function Header() {
  const { productsBuy } = useMyContext()
  const [location, setLocation] = useState<{ city: string; state: string }>({
    city: '',
    state: '',
  })
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const getLocationFromIP = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/')
        const data = await response.json()
        setLocation({
          city: data.city || 'Cidade não encontrada',
          state: data.region || '',
        })
      } catch (err) {
        setError('Não foi possível determinar a localização')
      }
    }

    const requestGeolocation = async () => {
      const permissionStatus = await navigator.permissions.query({
        name: 'geolocation',
      })

      if (permissionStatus.state === 'granted') {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords
            try {
              const response = await fetch(
                `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`,
              )
              const data = await response.json()
              setLocation({
                city:
                  data.address.city ||
                  data.address.town ||
                  data.address.village ||
                  'Cidade não encontrada',
                state: data.address.state || '',
              })
            } catch (err) {
              setError('Erro ao buscar localização pela geolocalização')
              console.log(error)
              getLocationFromIP()
            }
          },
          (error) => {
            console.error('Erro ao obter localização:', error)
            console.log(error)
            setError('Permissão de geolocalização negada.')
            getLocationFromIP()
          },
        )
      } else if (permissionStatus.state === 'prompt') {
        navigator.geolocation.getCurrentPosition((error) => {
          console.error('Erro ao obter localização:', error)
          setError('Permissão de geolocalização negada.')
          getLocationFromIP()
        })
      } else {
        setError('Permissão de geolocalização negada')
        getLocationFromIP()
      }
    }

    requestGeolocation()
  }, [])

  return (
    <div className="flex h-20 w-full items-center justify-between px-4 sm:px-14 ">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <div className="flex flex-row items-center justify-between ">
        <span className="mr-2 flex h-7 w-auto items-center justify-center rounded-sm bg-purple-200   px-1 font-roboto font-medium text-purple-600 ">
          <MapPin className="h-5 w-5 text-purple-600" />
          {location.city}, {location.state}
        </span>

        {productsBuy.length > 0 && (
          <Link to="/product">
            <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-yellow-100 px-1 font-normal hover:bg-yellow-300">
              <img src={cartLogo} className="h-5 w-5 text-yellow-700 " />
              <span className="absolute mb-6 ml-8 flex h-4 w-4 items-center justify-center rounded-full bg-yellow-700 text-sm text-white">
                {productsBuy.length}
              </span>
            </div>
          </Link>
        )}
      </div>
    </div>
  )
}
