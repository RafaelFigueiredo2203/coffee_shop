import { MapPin } from 'lucide-react'
import logo from '../assets/Logo.png'
import cartLogo from '../assets/Vector.png'
import { Button } from './ui/button'

export function Header() {
  return (
    <div className="flex h-20 w-full items-center justify-between px-14 ">
      <img src={logo} alt="" />

      <div className="flex flex-row items-center justify-between ">
        <span className="mr-2 flex h-7 w-auto items-center justify-center rounded-sm bg-purple-200   px-1 font-roboto font-medium text-purple-600 ">
          <MapPin className="h-5 w-5 text-purple-600" />
          Ourinhos, SP
        </span>

        <Button className="flex h-7 w-7 items-center justify-center rounded-sm bg-yellow-100 px-1 font-normal hover:bg-yellow-300">
          <img src={cartLogo} className="h-5 w-5 text-yellow-700 " />
        </Button>
      </div>
    </div>
  )
}
