'use client'
import react from 'react'
interface CheckerProps {
   label: string;
   checked: boolean;
   onClick?: ()=>void;
}
const Checker: React.FC<CheckerProps> = ({ label,checked }) => {
   return (
      <div className='p-2 border rounded-lg cursor-pointer'>
         <input type="checkbox" checked={checked}/>
         <p>{label}</p>
      </div>
   )
}
export default Checker