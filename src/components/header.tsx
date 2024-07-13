import { MapPin } from 'lucide-react'
import logo from '../assets/Logo.png'
import cartLogo from '../assets/Vector.png'
import { Button } from './ui/button'

export function Header(){
  return(
    <div className="px-14 flex items-center justify-between w-full h-20 ">
      <img src={logo} alt="" />

      <div className='flex flex-row items-center justify-between '>
        <span className='w-auto px-1 h-7 flex items-center justify-center font-roboto font-medium   bg-purple-200 text-purple-600 rounded-sm mr-2 '>
          <MapPin className='text-purple-600 h-5 w-5'/>
          Ourinhos, SP
          </span>

          <Button className="w-7 px-1 h-7 flex items-center justify-center font-normal bg-yellow-100 rounded-sm hover:bg-yellow-300">
            <img src={cartLogo}  className='h-5 w-5 text-yellow-700 '/>
          </Button>
      </div>
    </div>
  )
}