'use client'
import { Product } from '@/types'
import react from 'react'
import Card from './Card'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
interface ProductCardProps {
   product: Product
}
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
   const router = useRouter()
   return (
      <Card>
         <div className='bg-white/5 rounded-lg' onClick={()=>router.push(`/products/${product.id}`)}>
            <Image src={product.image} alt={`product ${product.name}`} width={100} height={100}  className='w-full object-contain h-[200px]'/>
         </div>
         <p><span className='text-muted-foreground'>{product.name}</span> <span className='text-orange-500'>•</span> {product.price/1000} K</p>
      </Card>
   )
}
export default ProductCard