import React, {useState} from 'react'
import {FaBars}  from 'react-icons/fa'

    function Navbar() {
 

        const [nav, setNav] = useState(false)
        const handleNav = () =>
        {
            setNav(!nav)
        }
      return (
        <div className='w-full min-h-[10px] bg-black sticky top-0'>
                <div  className='  w-full flex min-h-[40px]  justify-between items-center  text-white font-bold   '>
                        
                        <ul className='hidden sm:flex px-4 font-[Inter]'>
                        
                        <li className='text-xl hover:-translate-y-0 hover:scale-90 hover:bg-gray-100 duration-400 rounded-3xl '>
                        <a href ="#creators">Home</a>
                        </li>
                        <li className='text-xl hover:-translate-y-0 hover:scale-90 hover:bg-gray-100 duration-400 rounded-3xl '>
                        <a href ="#specs">About</a>
                        </li>
                        <li className='text-xl hover:-translate-y-0 hover:scale-90 hover:bg-gray-100 duration-400 rounded-3xl '>
                        <a href ="#subscribe">Features</a>
                        </li>
                        </ul>

                        <a href ="#hero" className='mr-20 text-2xl font-bold '><h1>Phoke</h1></a>
                        
                        <ul className='flex font-bold '>
                        <li className="">
                        <button className='border-none bg-[#0061F1] text-white  p-2 w-[120px] '>LOGIN</button>
                        </li>
                        <li className=''>
                        <button className=' text-[#0061F1] p-2 w-[120px] bg-white'>SIGN UP</button>
                        </li>
                         </ul>
                        
                    
                        {/* Hamburger icon anything above small it will be hidden */}
                        <div onClick ={handleNav} className='sm:hidden z-10'>
                        <FaBars size ={20} className ='mr-4 cursor-pointer'/>
                        </div>
                
                        {/* Mobile menu */}
                        <div onClick ={handleNav} className={nav ? 'overflow-y-hidden md:hidden ease-in duration-300 absolute text-black-300 left-0 top-0 w-full h-screen bg-gray-300 px-4 py-7 flex flex-col': 'absolute top-0 h-screen left-[-100%] ease-in duration-300'}>
                        <ul className='h-full w-full text-center pt-12'>
                        <li className='text-2xl py-8'>
                            <a href ="/">Home</a>
                        </li>
                        <li className='text-2xl py-8'>
                        <a href ="#about">About us</a>
                        </li>
                        <li className='text-2xl py-8'>
                        <a href ="#update">Updates</a>
                        </li>
                        <li className="">
                        <button className='bg-black text-white'>LOGIN</button>
                        </li>
                        <li className=' '>
                        <button>GET STARTED</button>
                        </li>
                        </ul>
                        </div>
                    </div>
        </div>
       
      )
}

export default Navbar