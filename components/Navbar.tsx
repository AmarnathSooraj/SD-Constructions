'use client'
import React, { useState, useEffect } from 'react'
import { MdOutlineSegment } from "react-icons/md";
import { TfiClose } from "react-icons/tfi";
import Link from 'next/link';
import { AnimatePresence, motion } from "framer-motion";
import { menuSlide, slide } from './animation';
import Image from 'next/image';
import logo from '../public/logo (1)_prev_ui.png'
import navItems from './navItems';
import { usePathname } from 'next/navigation'

function Navbar({ nonSticky = false }) {
  const [nav, setNav] = useState(false)
  const [isSticky, setIsSticky] = useState(false)
  const [activeSection, setActiveSection] = useState("");

  const pathname = usePathname();
  const handleNav = () => setNav(!nav);

  useEffect(() => {
    if (nonSticky) return;

    const handleScroll = () => {
      setIsSticky(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [nonSticky]);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const headerClasses = `${
    nonSticky
      ? 'relative bg-[#2c2c2c]'
      : isSticky
      ? 'fixed bg-[#2c2c2c] shadow-md'
      : 'absolute bg-transparent'
  } top-0 left-0 w-full z-50 text-white transition-all duration-300`;

  return (
    <header className={headerClasses}>
      <nav className='border px-12 py-6 lg:px-50 md:py-6 border-none text-white'>
        <div className='z-40 flex justify-between items-center h-10 w-full'>
          <div>
            <Image src={logo} width={80} height={80} alt='logoimage' />
          </div>

          {/* Desktop Nav */}
          <ul className='hidden md:flex w-[530px] justify-between'>
            {navItems.map((item, index) => (
              <li key={index} className="text-md font-extralight">
                <a
                  href={item.href}
                  className={`hover:scale-105 transition-all duration-200 ease-in-out uppercase ${
                    item.href === `#${activeSection}` ? 'text-yellow-200' : ''
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger Icon */}
          <AnimatePresence mode="wait">
            <motion.div
              key={nav ? "hamburger" : "close"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              onClick={handleNav}
              className="md:hidden"
            >
              {!nav ? (
                <MdOutlineSegment className="text-3xl hover:scale-105 transition-all duration-150" />
              ) : (
                <TfiClose className="text-xl active:text-[#808080]" />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </nav>

      {/* Mobile Nav */}
      <AnimatePresence mode='wait'>
        {nav && (
          <motion.div
            variants={menuSlide}
            initial='initial'
            animate='enter'
            exit='exit'
            className="z-[100] fixed top-0 right-0 w-[60%] flex items-center p-16 h-[100vh] bg-[#2c2c2c]"
          >
            <TfiClose className="text-xl absolute left-12 top-10 active:rotate-180 transition-all duration-500" onClick={handleNav} />
            <ul className='flex flex-col h-[350px] justify-around w-full'>
              {navItems.map((item, index) => (
                <motion.li
                  variants={slide}
                  initial='initial'
                  animate='enter'
                  exit='exit'
                  key={index}
                  className='text-lg'
                >
                  <a
                    href={item.href}
                    onClick={() => setNav(false)} // ✅ Close mobile nav on click
                    className={`hover:text-yellow-200 ${
                      item.href === `#${activeSection}` ? 'text-yellow-200' : ''
                    }`}
                  >
                    {item.name.toUpperCase()}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
