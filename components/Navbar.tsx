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
    <header className="absolute top-0 left-0 w-full bg-transparent text-white z-50">
    <nav className='border px-12 py-7 md:px-40 md:py-8 border-none text-white'>
      <div className='z-40 flex justify-between items-center h-10 w-full'>
        <div>
        <Image src={logo} width={100} height={100} alt='logoimage'/>
      </div>
      <ul className='hidden md:flex w-[530px] justify-between'>
        {navItems.map((item,index)=>(
          <li key={index} className="text-md font-serif font-extralight">
            <Link 
              href={item.href} 
              className="hover:scale-105 transition-all duration-200 ease-in-out uppercase"
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
            <MdOutlineSegment className="text-3xl hover:scale-103 active:text-[#808080] transition-all duration-150" />
          ) : (
            <TfiClose className="text-xl active:text-[#808080]" />
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
        <TfiClose className="text-xl absolute left-12 top-10 active:rotate-180 transition-all duration-500" onClick={handleNav}/>
        <ul
        className='flex flex-col h-[350px] justify-around w-full'>
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
