import React from 'react'
import Logo from '../assets/logo2.png'
import { useState } from 'react'

const Navbar = () => {
    const [menuOpen, setMenuOpen]= useState(false);
  return (
    <div>
        <div className='flex justify-between px-10 py-6 items-center shadow-md bg-gradient-to-b from-gray-100 via-green-50 to-gray-200 '>
            {/* Logo */}
            <div>
                <div className='flex items-center gap-2'>
                    <img src={Logo} alt="" className='mt-2 h-12 w-auto'/>
                    <div>
                        <h1 className='text-3xl font-semibold bg-gradient-to-r from-green-800 to-green-400 bg-clip-text text-transparent'>Business Labs</h1>
                        <div className='flex gap-1 justify-center' >
                            <p className='bg-green-600 w-20 h-[1px] mt-2'></p>
                            <span className='text-xs font-medium text-green-600'>Engineering Sales</span>
                        </div>
                    </div>
                </div>
            </div>

            <div onClick={() => setMenuOpen(!menuOpen)} className="text-3xl absolute right-8 top-5 cursor-pointer md:hidden">
          ☰
        </div>

        <div>

        
        <ul
          className={`md:flex md:items-center md:static absolute left-0 w-full md:w-auto md:py-0 py-4 pl-10 transition-all duration-300 ease-in ${
            menuOpen ? 'top-16' : 'top-[-490px]'
          }`}
        >
          {['Home', 'About Us', 'Services', 'Blog', 'Contact'].map((item, idx) => (
            <li key={idx} className="md:ml-8 md:my-0 my-2">
              <a
                href="#"
                className="text-md font-semibold text-green-800 bg-green-100 shadow-md hover:bg-green-400 hover:text-white px-3 py-2 rounded-md block"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
    
      
    </div>
  )
}

export default Navbar
