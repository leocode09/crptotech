'use client'
import react from 'react'
interface CheckerProps {
   label: string;
   checked: boolean;
   onClick?: ()=>void;
}
const Checker: React.FC<CheckerProps> = ({ label, checked, onClick }) => {
   return (
      <div className='p-2 border rounded-lg cursor-pointer' onClick={onClick}>
         <input type="checkbox" checked={checked} readOnly/>
         <p className='text-[15px]'>{label}</p>
      </div>
   )
}
export default Checker