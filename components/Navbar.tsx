'use client'
import React,{ useState } from 'react'
import { MdOutlineSegment } from "react-icons/md";
import { TfiClose } from "react-icons/tfi";
import Link from 'next/link';
import { AnimatePresence, motion } from "framer-motion";
import { menuSlide,slide } from './animation';
import Image from 'next/image';
import logo from '../public/logo (1)_prev_ui.png'
import navItems from './navItems';

function Navbar() {
  const [nav,setNav] = useState(false)

  const handleNav=()=>{
    setNav(!nav)
  }
  return (
    <header className="absolute top-0 left-0 w-full z-10 bg-transparent text-white z-50">
    <nav className='border px-12 py-7 md:px-40 md:py-8 border-none text-white'>
      <div className='z-40 flex justify-between items-center h-10 w-full'>
        <div>
        <Image src={logo} width={100} height={100} alt='logoimage'/>
      </div>
      <ul className='hidden md:flex w-[530px] justify-between'>
        {navItems.map((item,index)=>(
          <li key={index} className="text-lg font-medium ">
            <Link 
              href={item.href} 
              className="border-b-2 border-transparent transition-all duration-200 ease-in-out hover:border-[#7393B3] uppercase"
            >
              {item.name}
            </Link>
        </li>
        ))}
      </ul>
      <AnimatePresence mode="wait">
        <motion.div
          key={nav ? "hamburger" : "close"}
          initial={{opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{opacity: 0 }}
          transition={{ duration: 0.35 }}
          onClick={handleNav}
          className="md:hidden"
        >
          {!nav ? (
            <MdOutlineSegment className="text-3xl hover:text-[#808080]" />
          ) : (
            <TfiClose className="text-xl hover:text-[#808080]" />
          )}
        </motion.div>
      </AnimatePresence>
      </div>
    </nav>
    <AnimatePresence mode='wait'>
    {nav&&
    (
      <motion.div
      variants={menuSlide}
      initial='initial'
      animate='enter'
      exit='exit'
      className="z-100 absolute top-0 right-0  w-[60%] flex items-center p-16 h-[100vh] bg-[#2c2c2c]">
        <TfiClose className="text-xl absolute left-12 top-10 hover:rotate-90 transition-all duration-500" onClick={handleNav}/>
        <ul
        className='flex flex-col h-[300] justify-around w-full'>
          {navItems.map((item,index)=>(
          <motion.li
          variants={slide}
          initial='initial'
          animate='enter'
          exit='exit'
          key={index} className='text-lg'><Link className='hover:text-' href={item.href}>{item.name.toUpperCase()}</Link></motion.li>
        ))}
        </ul>
      </motion.div>
    )}
    </AnimatePresence>
    </header>
  )
}

export default Navbar
