"use client"; // Only needed if you're using App Router in Next.js 13+

import { useEffect, useState, useRef } from 'react';
import Navbar from '../components/Navbar';
import Hero from "@/components/Hero";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Contact from "@/components/contact";
import Gallery from "@/components/Gallery";
import Testimonals from '@/components/Testimonals';
import Image from 'next/image';
import { MdArrowDropUp } from "react-icons/md";

export default function Home() {
  const [showArrow, setShowArrow] = useState(false);
  const aboutRef = useRef(null); // Create ref for the About section

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect if About section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log("📍 You have reached the About section!");
          // You can trigger a state or animation here
        }
      },
      {
        threshold: 0.5, // 50% of the section must be visible
      }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
    <Navbar/>
    <section id="hero"><Hero /></section>
    <section id="about"><About /></section>
    <section id="testimonals"><Testimonals/></section>
    <section id="gallery"><Gallery /></section>
    <section id="contact"><Contact /></section>

      <div className="fixed bottom-20 lg:right-20 right-5 z-50 flex flex-col items-center gap-4">
        {showArrow && (
          <div>
            <a
              href="https://wa.me/918075595509?text=Hi%2C%20I%20found%20you%20via%20your%20website!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/whatsapp.png"
                className="hover:scale-105 hover:brightness-100 active:brightness-120 transition-all duration-100"
                width={40}
                height={40}
                alt="Chat with us on WhatsApp"
              />
            </a>

            <MdArrowDropUp
              onClick={scrollToTop}
              className="cursor-pointer bg-[#f8f5ee] w-10 h-10 mt-6 rounded-full border border-[#656c02] text-[#656c02] shadow-md hover:scale-105 transition-all duration-100"
            />
          </div>
        )}
      </div>
      <Footer/>
    </>
  );
}
