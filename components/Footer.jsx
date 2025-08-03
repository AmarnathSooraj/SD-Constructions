import React from 'react'
import Image from 'next/image'
import { CiMail } from "react-icons/ci";
import { MdLocalPhone, MdLocationPin } from "react-icons/md";
import navItems from './navItems'
import logo from '../public/logo (1)_prev_ui.png'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


function Footer() {
  return (
    <footer className="w-full px-5 bg-[#2c2c2c] text-white py-12">
      <div className="flex flex-col items-center justify-center max-w-7xl  mx-auto">
        <div className="flex flex-col md:flex-row w-full gap-5">
          <div className="flex justify-center md:justify-start w-full py-3">
            <Image 
              src={logo} 
              alt="Logo" 
              objectFit='cover'
              className='w-30 h-30'
            />
          </div>

          <div className="flex flex-col w-full py-3">
            <h2 className="text-2xl mb-2">Information</h2>
            <ul className="text-md my-2">
              {navItems.map((item, index) => (
                <li key={index} className="p-2 hover:underline cursor-pointer">
                  {item.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col w-full py-3">
            <h2 className="text-2xl mb-2">Contact</h2>
            <div className="flex flex-col gap-3 text-md my-2">
              <p className="flex items-center gap-2"><MdLocationPin /> Address goes here</p>
              <p className="flex items-center gap-2"><MdLocalPhone /> +123-456-7890</p>
              <p className="flex items-center gap-2"><CiMail /> email@example.com</p>
            </div>
          </div>

          <div className="flex flex-col w-full py-3">
            <h2 className="text-2xl mb-2">Social Links</h2>
            <div className="flex gap-4 text-xl my-2">
              <span className='p-2 bg-[#393E46] rounded-full'><FaInstagram/></span>
              <span className='p-2 bg-[#393E46] rounded-full'><FaWhatsapp/></span>
              <span className='p-2 bg-[#393E46] rounded-full'><FaFacebook/></span>
            </div>
          </div>
        </div>

        <div className="mt-2 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
