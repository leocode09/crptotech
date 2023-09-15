'use client'
import { Product } from '@/types'
import react from 'react'
import Card from './Card'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import {
   HoverCard,
   HoverCardContent,
   HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Button } from './ui/button'
import { ShoppingCart } from 'lucide-react'
import { useStateContext } from '@/context/StateContext.jsx'

interface ProductCardProps {
   product: Product
}
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {

   const { onAdd,cartItems } = useStateContext()
   
   const router = useRouter()
   return (
      <Card className='relative w-full md:w-[250px]'>
         <Button className='absolute right-0 mr-3' variant='ghost' onClick={()=>{onAdd(product,1)}}>
            <ShoppingCart/>
         </Button>
         <div className='bg-white/5 rounded-lg cursor-pointer' onClick={() => router.push(`/products/${product.id}`)}>
            <Image src={product.image} alt={`product ${product.name}`} width={100} height={100} className='w-full object-contain h-[200px]' />
         </div>
         <p><span className='text-muted-foreground'>{product.name}</span> <span className='text-orange-500'>•</span> {product.price / 1000} K</p>
      </Card>
   )
}
export default ProductCard