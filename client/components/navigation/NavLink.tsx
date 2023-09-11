'use client'
import Link from 'next/link';
import react from 'react'
interface NavLinkProps {
   label: string;
   active: boolean;
   href: string
}
const NavLink: React.FC<NavLinkProps> = ({ label,active,href }) => {
   return (
      <div className='p-1 text-[23px] font-semibold'>
         <Link href={href}>
            {label}
         </Link>
      </div>
   )
}
export default NavLink