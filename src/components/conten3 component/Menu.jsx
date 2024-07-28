import React from 'react'
import { categories } from './../../data/data'

export default function Menu() {
    return (
        <div className='w-full flex flex-wrap *:mr-2 justify-between *:text-slate-800 *:font-primary  '>
            
            {categories.map((category, index) => {
               return(
                    <div key={index} className='w-[48%] h-[200px] lg:w-[20%] lg:h-[220px] mt-10 rounded-2xl shadow-2xl flex flex-wrap *:w-[50%] *:h-full'>

                        <div className="flex pl-5 items-center">
                            <p className='font-bold text-lg'>{category.name}</p>
                        </div>

                        <figure className="">
                             <img src={category.image} className='object-contain w-full h-full ' alt="" /> 
                        </figure>

                    </div>
               )
            })}

        </div>
    )
}

