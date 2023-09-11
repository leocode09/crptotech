'use client'
import useRoutes from '@/hooks/useRoutes'
import qs from 'query-string'
import react, { useEffect, useState } from 'react'
import NavLink from './NavLink'
import Separater from '../separater'
import Checker from '../checker'
import useFilters from '@/hooks/useFilters'
import { useSearchParams } from 'next/navigation'
import useDebounce from '@/hooks/useDebounce'
interface NavProps { }
const Nav: React.FC<NavProps> = ({ }) => {
   const routes = useRoutes()
   const filters = useFilters()
   const search = useSearchParams()

   const [filterValue, setFilterValue] = useState<string>("")
   const debouncedValue = useDebounce<string>(filterValue,500)

   useEffect(()=>{
      const query = {
         title: debouncedValue
      }
      const url = qs.stringifyUrl({
         url: '/',
         query
      })
   })

   console.log(search.toString());
   
   return (
      <div className='p-3 bg-gray-100 dark:bg-neutral-800/30 fixed left-0 mt-3 w-[400px] rounded-r-lg'>
         <div>
            {routes.map(route => (
               <NavLink active={route.active} href={route.href} label={route.label} key={route.href} />
            ))}
         </div>
         <div className='flex gap-1 flex-col'>
            <Separater />
            <Separater />
         </div>
         <h1 className='text-[20px] font-bold'>Filter</h1>

         <div className='flex flex-wrap gap-2'>
            {filters.map(filter => (
               <Checker label={filter.label} checked={filter.checked} key={filter.label}/>
            ))}
         </div>
      </div>
   )
}
export default Nav