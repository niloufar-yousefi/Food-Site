import React, {useState } from 'react'
import Btn from './conten2 component/Btn'
import Food from './conten2 component/Food'
import {data} from './../data/data'

export default function Content2() {
    const [dataBase,setData] = useState(data)    

   function myBtn(e) {  
      let dataCategory = e.target.getAttribute('data-category')    
      setData(data.filter(item => item.category === dataCategory))     
   }
   function myBtn2(e) {
      let daraPrice = e.target.getAttribute('data-price')
      setData(data.filter(item => item.price === daraPrice))
   }

  return (
    <div className='px-5 lg:px-14   z-0 *:font-primary flex flex-wrap pb-10 pt-10'>

       <h5 className='text-[#EA580C] text-4xl text-center w-full font-bold'>Top Rated Menu Items</h5>        
       <Btn myBtn={myBtn} myBtn2={myBtn2} myBtnAll={()=>{setData(data)}}/>
       <Food dataBase={dataBase}/>

    </div>
  )
}
