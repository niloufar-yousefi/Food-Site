import React from 'react'
import { AiFillTag } from 'react-icons/ai';
import { BsFillSaveFill } from 'react-icons/bs'
import { TbTruckDelivery } from 'react-icons/tb'
import { MdFavorite, MdHelp } from 'react-icons/md'
import { FaUserFriends, FaWallet } from 'react-icons/fa'
import { FaX } from "react-icons/fa6";



export default function SideBar({ listSetting,myFunc }) {

  return (
    <div className={`top-0 w-[50%]  lg:w-[25%] bg-slate-50 shadow-lg  z-50 h-[100vh] text-slate-800 font-primary absolute flex flex-wrap px-8 py-10  *:w-full ${listSetting ? 'left-[-100%]' : 'left-0'} }`}>

      <ul className='*:h-[10%] tetxt-slate-800'>

        <li className="">  
          {/* submenu         */}
            <ul className='flex h-full flex-wrap *:w-[50%] *:h-full'>
              <li className=''>             
                  <h1 className=' font-secondary  text-sm 2xl:text-xl  '>BEST <span className='font-bold'>EASTS</span></h1>            
              </li>
              <li className= 'flex justify-end'>             
                  <FaX onClick={myFunc} className='cursor-pointer'/>
               </li>
            </ul>        
        </li>

        <li className='lg:text-xl py-4 flex'><TbTruckDelivery className='mr-4' />Order</li>
        <li className='lg:text-xl py-4 flex'><MdFavorite className='mr-4' />Favorites</li>
        <li className='lg:text-xl py-4 flex'><FaWallet className='mr-4' />Wallet</li>
        <li className='lg:text-xl py-4 flex'><MdHelp className='mr-4' />Help</li>
        <li className='lg:text-xl py-4 flex'><AiFillTag className='mr-4' />Promotions</li>
        <li className='lg:text-xl py-4 flex'><BsFillSaveFill className='mr-4' />Best Ones</li>
        <li className='lg:text-xl py-4 flex'><FaUserFriends className='mr-4' />Invite Friends</li>

      </ul>

    </div>
  )
}
