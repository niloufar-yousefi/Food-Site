import React from 'react'

export default function Btn({myBtn,myBtnAll,myBtn2}) {
  return (
    <div className='w-full flex flex-wrap *:w-full  py-12'>
      <Btn1 myBtn={myBtn} myBtnAll={myBtnAll}/>
      <Btn2 myBtn2={myBtn2} myBtnAll={myBtnAll}/>
    </div>
  )
}


 function Btn1({myBtn,myBtnAll}) {
  return (
    <div className='flex flex-wrap *:w-full lg:w-[70%]'>
      <h6 className='text-slate-800 font-bold '>Filter Type</h6>
      <ul className='flex flex-wrap *:w-[10%] *:text-center *:py-1 *:border-2 *:mr-3 *:border-[#EA580C] *:rounded-full mt-5 *:text-[#EA580C] *:cursor-pointer  *:duration-75'>
      <li  className="hover:text-slate-50 hover:bg-[#EA580C]"><button onClick={myBtnAll}  data-category = 'all' className='h-full w-full'  type="button">All</button></li>
      <li   className="hover:text-slate-50 hover:bg-[#EA580C]"><button onClick={myBtn} data-category = 'chicken' className='h-full w-full' type="button">Chicken </button></li>
      <li   className="hover:text-slate-50 hover:bg-[#EA580C]"><button onClick={myBtn} data-category = 'salad' className='h-full w-full' type="button">Salad</button></li>
      <li   className="hover:text-slate-50 hover:bg-[#EA580C]"><button   onClick={myBtn} data-category = 'pizza' className='h-full w-full' type="button">Pizza'</button></li>
      <li   className="hover:text-slate-50 hover:bg-[#EA580C]"><button onClick={myBtn} data-category = 'burger' className='h-full w-full' type="button">Burger</button></li>
      </ul>  
    </div>
  )
}

function Btn2({myBtn2,myBtnAll}) {
    return (
        <div className='flex flex-wrap *:w-full lg:w-[30%]'>
      <h6 className='text-slate-800 font-bold '>Filter Price</h6>
      <ul className='flex flex-wrap  *:w-[15%] *:text-center *:py-1 *:border-2 *:mr-3 *:border-[#EA580C] *:rounded-full mt-5 *:text-[#EA580C] *:cursor-pointer  *:duration-75'>
      <li className="hover:text-slate-50 hover:bg-[#EA580C]"><button onClick={myBtnAll} data-price = 'all' className='h-full w-full' type="button">All</button></li>
      <li className="hover:text-slate-50 hover:bg-[#EA580C]"><button onClick={myBtn2} data-price = '$' className='h-full w-full' type="button">$</button></li>
      <li className="hover:text-slate-50 hover:bg-[#EA580C]"><button onClick={myBtn2} data-price = '$$' className='h-full w-full' type="button">$$ </button></li>
      <li className="hover:text-slate-50 hover:bg-[#EA580C]"><button onClick={myBtn2} data-price = '$$$' className='h-full w-full' type="button">$$$</button></li>
      <li className="hover:text-slate-50 hover:bg-[#EA580C]"><button onClick={myBtn2} data-price = '$$$$' className='h-full w-full' type="button">$$$$'</button></li>
     
      </ul>  
    </div>
    )
  }
