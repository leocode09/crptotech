import Link from 'next/link'

const Orders = () => {
    return <>

        <menu>
            <Link href="/dashbourd">Dashbourd</Link>
            <Link href="/products">Products</Link>
            <Link href="/orders">Orders</Link>
        </menu>
        <h1>Orders</h1>
    </>
}

export default Orders;