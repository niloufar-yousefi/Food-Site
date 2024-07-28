import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
export default function Cart() {
  return (
    <div className='w-[10%] font-primary   flex   items-center justify-end'>     
        <div className='py-2 bg-slate-800 text-slate-50 rounded-full w-[90px] px-2 justify-between flex flex-wrap items-center'>
        <p className=''>CART</p>
        <FaShoppingCart />
        </div>

    </div>
  )
}

