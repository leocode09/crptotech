'use client'
import react from 'react'
interface CardProps {
   children?: React.ReactNode
}
const Card: React.FC<CardProps> = ({ children }) => {
   return (
      <div className='flex flex-col bg-gray-100 dark:bg-neutral-800/30 gap-3 p-3 rounded-lg w-full md:w-[250px]'>
         {children}
      </div>
   )
}
export default Card