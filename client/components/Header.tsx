'use client'
import Image from 'next/image'
import react from 'react'
import Input from './Input'
import Separater from './Separater'
import { AiFillShopping } from 'react-icons/ai'

import { useStateContext } from '@/context/StateContext.jsx'

interface HeaderProps { }
const Header: React.FC<HeaderProps> = ({ }) => {
   const { setShowCart, cartItems, totalQuantities } = useStateContext()
   return (
      <>
         <div className='p-2 flex justify-between'>
            <div className='flex items-end gap-2'>
               <Image src='/logo.png' alt='logo' width={60} height={40} />
               <p className='text-lg font-bold font-serif hidden md:flex'>Crpto<span className='text-orange-500'>Tech</span></p>
            </div>
            <div className='flex-1 flex justify-end gap-4 items-center'>
               <Input type="search" placeholder='Search products' id='search' />
               <div onClick={() => { }} className='cart_btn' data-cart-count={`${totalQuantities}`}>
                  <AiFillShopping size={30} />
               </div>
            </div>
         </div>
         <Separater />
      </>
   )
}
export default Header