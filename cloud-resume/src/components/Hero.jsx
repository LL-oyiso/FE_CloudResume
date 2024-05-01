import React from 'react'
// import Manblue from '../Maninblueshirt.jpeg' 
// import Manwhite from '../Maninwhiteshirt (1).jpeg'
function Hero() {
  return (
    <>
    <div className='w-full h-[700px] bg-black'>
        <div className=' justify-around text-white p-4 max-w-[1500px] m-auto  '>
        <div className=' text-white absolute top-[22%]  max-w-[690px]  h-full '>
         <h1 className='font-bold text-[58px] font-[Inter]'>Hello, my name is Loyiso {/*<span className='text-[#8F8F8F]'>texting like this before</span> */}</h1> 
       
       </div>
    
      <div className='flex  ml-auto  w-[600px] mt-32'>
      {/* <img  src={Manwhite} alt= "" className=' rounded-2xl w-[278px] h-[422px] mr-1   object-contain'  />
      <img src={Manblue} alt="" className=' rounded-2xl w-[278px] h-[422px] ml-2 object-contain' /> */}
      </div>
        </div>
    </div>
    </>
  )
}
export default Hero