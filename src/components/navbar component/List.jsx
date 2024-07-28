
import React from 'react'
import { IoMenu } from "react-icons/io5";

export default function List({ myFunc }) {

  return (
    <div className=' w-[30%]  flex flex-wrap  items-center'>

      {/* list event */}
      <div className=' w-[20%] lg:w-[10%]'>
        <IoMenu onClick={myFunc} className=' cursor-pointer text-2xl' />
      </div>

     
      <h1 className='w-[80%] lg:w-[40%] font-secondary text-sm 2xl:text-xl  '>BEST <span className='font-bold'>EASTS</span></h1>
      <Pick />

    </div>
  )
}


function Pick() {
  return (
    <div className='hidden lg:flex  font-primary cursor-pointer rounded-full bg-slate-300 w-[50%] flex-wrap *:w-[50%] *:h-full text-center *:py-2 *:text-sm'>
      <div className="rounded-full bg-slate-800 text-slate-50 px-1">DELIVERY</div>
      <div className="px-1">PICK UP</div>
    </div>
  )
}



