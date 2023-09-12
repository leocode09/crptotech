import ProductForm from '@/components/ProductForm'
import Link from 'next/link'
import { useState } from 'react'

export default function page() {
  return <>
    <menu>
      <Link href="/dashbourd">Dashbourd</Link>
      <Link href="/products">Products</Link>
      <Link href="/orders">Orders</Link>
    </menu>
    <section>
        <ProductForm />
    </section>
  </>
}