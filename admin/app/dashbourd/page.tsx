
import Link from 'next/link'

const Dashbourd = () => {
    return <>
        <menu>
            <Link href="/dashbourd">Dashbourd</Link>
            <Link href="/products">Products</Link>
            <Link href="/orders">Orders</Link>
        </menu>
        <h1>Dashbourd</h1>
    </>
}

export default Dashbourd;