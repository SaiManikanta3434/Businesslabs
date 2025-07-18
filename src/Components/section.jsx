import React from 'react'
import Typed from 'typed.js'
import {useEffect, useRef} from 'react'
import {motion} from 'framer-motion'
import Logo2 from '../assets/Logo2.png'



const section = () => {
    const el = React.useRef(null)

    useEffect(()=>{
        const typed = new Typed(el.current,{
            strings: ['Welcome to Business Labs', 'Your Partner in Engineering Sales', 'Innovating Solutions for Tomorrow'],
            typeSpeed: 100,
            backSpeed: 50 ,
            backDelay: 1200,
            loop:true,
            showCursor: true,
            cursorChar: '.',
        });
        return () => {
      typed.destroy();
    };
    },[])
  return (
    <div className="bg-gradient-to-b from-gray-200 via-green-400 to-gray-200 pt-20 pb-16 text-center">
      
      <motion.h1
        className="pt-20 text-4xl md:text-7xl font-extrabold text-black leading-snug px-4"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, delay:0.1 }}
      >
        Build Smarter & Grow Faster <br /> With Gen AI <br /> at <span className="bg-gradient-to-r from-green-800 to-green-500 bg-clip-text text-transparent">Business Labs</span>
      </motion.h1>

      {/* Logo */}
      <motion.div
        className="mt-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <img src={Logo2} alt="Business Labs Logo" className="w-24 h-24 mx-auto" />
      </motion.div>

      {/* Subheading  */}
      <motion.div
        className="mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <h2 className="text-4xl font-semibold text-gray-800 pb-4 ">Who Are We?</h2>
        <p className='pb-10'>
          <span ref={el} className="text-green-600 text-3xl font-medium mt-2 pb-10"></span>
        </p>
      </motion.div>
    </div>
  )
}

export default section

