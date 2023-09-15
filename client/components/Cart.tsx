'use client'
import { useStateContext } from '@/context/StateContext'
import { Product } from '@/types'
import react, { useEffect, useMemo } from 'react'
import { cartProduct } from '@/types'
import Card from './Card'
import CartProduct from './CartProduct'
import { ArrowBigLeft, ShoppingBag } from 'lucide-react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'
import { Separator } from '@radix-ui/react-select'
import Separater from './Separater'
interface CartProps {
}
const Cart: React.FC<CartProps> = ({ }) => {
   const { onAdd, cartItems, totalQuantities, totalPrice, } = useStateContext()
   
   const router = useRouter()
   return (
      <div className='flex gap-3 flex-wrap'>
         {cartItems.length ? (
            <>
               <Card className='flex-1 flex flex-col gap-3'>
                  <div className='flex justify-between items-center'>
                     <div>
                        <Button variant='ghost' onClick={() => router.push('/products')}>
                           <ArrowBigLeft />
                           Continue Browsing
                        </Button>
                     </div>
                     <h1 className='text-lg font-semibold'>Your Cart <span className='text-orange-500'>•</span> {totalQuantities}</h1>
                  </div>
                  <div className='flex justify-between text-gray-500 font-semibold text-base'>
                     <div className='w-fit sm:w-[150px] text-center'>Product</div>
                     <div className='w-fit sm:w-[150px] text-center'>Quantity</div>
                     <div className='w-fit sm:w-[150px] text-center'>Price</div>
                     <div className='w-fit sm:w-[150px] text-center'>Remove</div>
                  </div>
                  <div></div>
                  {cartItems.map((item: cartProduct) => (
                     <CartProduct item={item} key={item.id}/>
                  ))}
                  <div className='flex justify-between font-semibold text-lg'>
                     <h1>Products</h1>
                     <h1>{totalPrice/1000} K</h1>
                  </div>
                  <Separater />
                  <div className='flex justify-between font-semibold text-lg'>
                     <h1>Shiping</h1>
                     <h1>10 K</h1>
                  </div>
                  <Separater />
                  <div className='flex justify-between font-bold  text-orange-500 text-lg'>
                     <h1>Total</h1>
                     <h1>{(totalPrice + 10000)/1000} K</h1>
                  </div>


               </Card>
               <Card className='w-full lg:w-[400px]'>
                  <h1 className='text-3xl font-semibold'>
                     Order Information
                  </h1>
               </Card>
            </>

         ) : (
            <Card className='w-full'>
               <div>
                  <Button variant='ghost' onClick={() => router.push('/products')}>
                     <ArrowBigLeft />
                     Continue Browsing
                  </Button>
               </div>
               <div className='flex justify-center flex-col items-center text-base gap-3'>
                  <div className='font-bold'>Your Cart is Empty</div>
                  <ShoppingBag className='text-center' size={50} />
               </div>
            </Card>
         )}
      </div>
   )
}
export default Cart