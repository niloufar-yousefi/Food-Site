import React from 'react'
import List from './navbar component/List'
import Search from './navbar component/Search'
import Cart from './navbar component/Cart'
import { useState } from "react";
import SideBar from './navbar component/SideBar';

export default function Navbar() {
  const [listSetting, setlListSetting] = useState(true)

  return (
    <div className='px-5 h-[70px] lg:h-[100px] lg:px-14 *:text-slate-800 *:h-full z-0 '>
      <div className={`fixed top-0 w-full h-full z-1 bg-[#2d2d2d5a] duration-75 ${listSetting ? 'left-[100%]' : 'left-0'} `}></div>
      <SideBar listSetting={listSetting} myFunc={()=>setlListSetting(!listSetting)}/>
      {/* desk */}
      <div className="hidden lg:flex flex-wrap  *:h-full">
        <List myFunc={()=>setlListSetting(!listSetting)} />
        <Search />
        <Cart />
      </div>

      {/* mob */}
      <div className="flex lg:hidden ">
        <List myFunc={()=>setlListSetting(!listSetting)} />
        <Search />
      </div>

    </div>
  )
}
