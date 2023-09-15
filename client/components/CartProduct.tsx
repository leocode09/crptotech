'use client'
import { cartProduct } from '@/types'
import Image from 'next/image'
import react from 'react'
import { Button } from './ui/button'
import { useStateContext } from '@/context/StateContext'
import { Trash2 } from 'lucide-react'
interface CartProductProps {
   item: cartProduct
}
const CartProduct: React.FC<CartProductProps> = ({ item }) => {
   const { onRemove, toogleCartItemQuantity } = useStateContext()
   return (
      <div className='flex justify-between items-center'>
         <div className='w-fit sm:w-[150px] flex flex-col gap-2 items-center'>
            <div className='bg-white/5 w-fit p-3 object-contain rounded-md'>
               <Image src={item.image} alt={item.name} width={70} height={70} className='rounded-md h-[70px] object-contain' />
            </div>
            <h1 className='w-[100px] overflow-hidden capitalize whitespace-nowrap text-ellipsis text-lg font-semibold'>{item.name}</h1>
         </div>
         <div className='text-lg flex font-semibold gap-2 items-center justify-center w-fit sm:w-[150px]'>
            <Button variant='secondary' onClick={() => toogleCartItemQuantity(item.id, 'dec')}>-</Button>
            <h1>{item.quantity}</h1>
            <Button variant='secondary' onClick={() => toogleCartItemQuantity(item.id, 'inc')}>+</Button>
         </div>
         <div className='text-base font-semibold w-fit sm:w-[150px] text-center'>
            <h1>{item.price / 1000} K</h1>
         </div>
         <div className='w-fit sm:w-[150px] flex justify-center'>
            <Button variant='destructive' onClick={() => onRemove(item)}>
               <Trash2 size={20} />
            </Button>
         </div>
      </div>
   )
}
export default CartProduct