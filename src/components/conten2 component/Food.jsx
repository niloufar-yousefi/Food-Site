import React from 'react'

export default function Food({dataBase}) {
  
   
  return (
    <div className='w-full flex flex-wrap *:mr-2 justify-between *:text-slate-800 *:font-primary  '>
          {dataBase.map((item,index)=>{
            return(
                <figure key={index} className='w-[48%] h-[200px] lg:w-[20%] lg:h-[220px] mt-10 rounded-2xl shadow-2xl '>
                    
                    <div className="w-full h-[70%] overflow-hidden rounded-2xl">
                    <img className='object-cover w-full h-full rounded-2xl  cursor-pointer hover:scale-[1.2] duration-75' src={item.image} alt=""/> 
                    </div>
                   
                    <figcaption className='h-[30%] pl-3 pt-'>
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                    </figcaption>
                    
                </figure>
            )
        })
        }
       
    </div>
  )
}
