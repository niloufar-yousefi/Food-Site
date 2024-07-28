import React from 'react'
import { IoSearch } from "react-icons/io5";

export default function Search() {
  return (
    <div className='w-[70%] lg:w-[60%] flex justify-end lg:justify-center items-center'>
     <form className='w-[50%] flex flex-wrap bg-slate-200 font-primary px-2 rounded-full py-1 hover:bg-slate-300 duration-75' action="">
     <div className='w-[10%] flex items-center'><IoSearch /></div>
      <input className='w-[90%] placeholder:font-primary outline-none border-none bg-transparent' type="text" value="" placeholder='Search... '/>
     </form>
    </div>
  )
}
