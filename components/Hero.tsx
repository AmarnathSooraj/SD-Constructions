'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { heroImages } from './heroImage'
import { ChevronLeft, ChevronRight } from 'lucide-react'

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const totalImages = heroImages.length

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? totalImages - 1 : currentIndex - 1)
  }

  const goToNext = () => {
    setCurrentIndex(currentIndex === totalImages - 1 ? 0 : currentIndex + 1)
  }

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === totalImages - 1 ? 0 : prevIndex + 1
      )
    }, 5000)
    return () => clearInterval(interval)
  }, [totalImages])

  return (
    <>
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Slides */}
      {heroImages.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100 z-30' : 'opacity-0 z-10'
          }`}
        >
          <Image
            src={item.path}
            alt={`Slide ${index + 1}`}
            fill
            className="object-cover brightness-60"
            priority
          />
          <div className="absolute top-[50vh] place-self-center z-40 text-center text-white max-w-[700px] font-[Poppins]">
            <h1 className='text-xl mb-2 md:mb-3'>SD CONSTRUCTIONS</h1>
            <p className="text-3xl  leading-9 lg:leading-12 font-serif md:text-5xl ">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
    </>
  )
}

export default Hero
