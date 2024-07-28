import React from 'react'
import img1 from './../assets/img/photo-1544025162-d76694265947.avif'
import img2 from './../assets/img/photo-1559715745-e1b33a271c8f.avif'
import img3 from './../assets/img/photo-1613769049987-b31b641f25b1.avif'

export default function Conten1() {
  return (
   
   <div className=' px-5 lg:px-14 *:text-slate-800   *:font-primary flex flex-wrap *:w-full  *:lg:w-[25%] *:h-[200px] justify-between *:mb-10 pt-10'>
      <figure className=" relative after:w-full after:h-full after:absolute after:bg-[#1b1b1bc3] after:rounded-xl after:top-0 after:left-0 after:z-10">
         <img src={img1} className='z-0 absolute top-0 left-0 w-full h-full object-cover rounded-xl' alt="image" />
        <p className='absolute z-20 left-[7%] text-white  top-[20%]'>
            <span className='font-bold text-3xl flex '>Sun's Out, BOGO's Out</span><br></br>
            <span>Through 8/26</span>
        </p>
        <div className='absolute z-20 left-[7%] text-white  bottom-[10%]'>
            <button className='text-slate-800 bg-slate-50 w-[80px] h-[30px] rounded-full hover:bg-slate-200 hover:text-slate-900 hover:translate-y-[-2px] duration-75' type="button">Order</button>
        </div>
      </figure>
     
      <figure className="relative after:w-full after:h-full after:absolute after:bg-[#1b1b1bc3] after:rounded-xl  after:top-0 after:left-0 after:z-10">
       <img src={img2} alt="image" className='z-0 absolute top-0 left-0 w-full h-full object-cover rounded-xl' /> 
       <p className='absolute z-20 left-[7%] text-white  top-[20%]'>
            <span className='font-bold text-3xl flex '>New Restaurants</span><br></br>
            <span>Added Daily</span>
        </p>
        <div className='absolute z-20 left-[7%] text-white  bottom-[10%]'>
            <button className='text-slate-800 bg-slate-50 w-[80px] h-[30px] rounded-full hover:bg-slate-200 hover:text-slate-900 hover:translate-y-[-2px] duration-75' type="button">Order</button>
        </div>
      </figure>
     
      <figure className="relative after:w-full after:h-full after:absolute after:bg-[#1b1b1bc3] after:rounded-xl  after:top-0 after:left-0 after:z-10">
      <img src={img3} alt="image" className='z-0 absolute top-0 left-0 w-full h-full object-cover rounded-xl' /> 
      <p className='absolute z-20 left-[7%] text-white  top-[20%]'>
            <span className='font-bold text-3xl flex '>We Deliver Desserts Too</span><br></br>
            <span>Tasty Treats</span>
        </p>
        <div className='absolute z-20 left-[7%] text-white  bottom-[10%]'>
            <button className='text-slate-800 bg-slate-50 w-[80px] h-[30px] rounded-full hover:bg-slate-200 hover:text-slate-900 hover:translate-y-[-2px] duration-75' type="button">Order</button>
        </div>
      </figure>

    </div> 
  )
}
