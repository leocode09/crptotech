'use client'
import useRoutes from '@/hooks/useRoutes'
import qs from 'query-string'
import react, { useEffect, useState } from 'react'
import NavLink from './NavLink'
import Separater from '../Separater'
import Checker from '../checker'
import useFilters from '@/hooks/useFilters'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import useDebounce from '@/hooks/useDebounce'
interface NavProps { }
const Nav: React.FC<NavProps> = ({ }) => {
   const routes = useRoutes()
   const router = useRouter()
   const pathname = usePathname();
   const filters = useFilters()
   const search = useSearchParams()

   const [filterValue, setFilterValue] = useState<string>("")
   const debouncedValue = useDebounce<string>(filterValue, 500)

   useEffect(() => {
      const query = {
         filter: debouncedValue
      }
      const url = qs.stringifyUrl({
         url: `${pathname}`,
         query: query
      })

      router.push(url)

   }, [debouncedValue, router])

   console.log(filterValue);

   return (
      <div className='w-0 md:w-fit overflow-hidden fixed left-0'>
         <div className='p-3 bg-gray-100 dark:bg-neutral-800/30 mt-2 w-[350px] rounded-r-lg h-[98vh]'>
            <div>
               {routes.map(route => (
                  <NavLink active={route.active} href={route.href} label={route.label} icon={route.icon} key={route.href} />
               ))}
            </div>
            <Separater />
            <h1 className='p-2 text-[23px] flex gap-2 font-semibold items-center'>Filters</h1>

            <div className='flex flex-wrap gap-2'>
               {filters.map(filter => (
                  <Checker label={filter.label} checked={filter.checked} key={filter.label} onClick={() => setFilterValue(filter.key)} />
               ))}
            </div>
         </div>
      </div>
   )
}
export default Nav