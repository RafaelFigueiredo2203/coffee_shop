import { useMyContext } from '@/utils/context/useContext'
import { MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import logo from '../assets/Logo.png'
import cartLogo from '../assets/Vector.png'

export function Header() {
  const { productsBuy } = useMyContext()

  return (
    <div className="flex h-20 w-full items-center justify-between px-14 ">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <div className="flex flex-row items-center justify-between ">
        <span className="mr-2 flex h-7 w-auto items-center justify-center rounded-sm bg-purple-200   px-1 font-roboto font-medium text-purple-600 ">
          <MapPin className="h-5 w-5 text-purple-600" />
          Ourinhos, SP
        </span>

        <Link to="/product">
          <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-yellow-100 px-1 font-normal hover:bg-yellow-300">
            <img src={cartLogo} className="h-5 w-5 text-yellow-700 " />
            <span className="absolute mb-6 ml-8 flex h-4 w-4 items-center justify-center rounded-full bg-yellow-700 text-sm text-white">
              {productsBuy.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}
