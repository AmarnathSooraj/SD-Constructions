import React from 'react'
import Image from 'next/image'

function Photogallery() {
  const images = [
    { src: '/selectedphotos/img144.jpg', heightClass: 'h-28' },
    { src: '/selectedphotos/img144.jpg', heightClass: 'h-32' },
    { src: '/selectedphotos/img144.jpg', heightClass: 'h-24' },
    { src: '/selectedphotos/img144.jpg', heightClass: 'h-36' },
    { src: '/selectedphotos/img144.jpg', heightClass: 'h-28' },
    { src: '/selectedphotos/img144.jpg', heightClass: 'h-32' },
    { src: '/selectedphotos/img144.jpg', heightClass: 'h-24' },
    { src: '/selectedphotos/img144.jpg', heightClass: 'h-28' },
    { src: '/selectedphotos/img144.jpg', heightClass: 'h-32' },
  ]

  return (
    <div className="relative h-[600px] overflow-hidden">
      {/* Fade bottom mask for premium feel */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
      
      <div className="columns-2 sm:columns-3 gap-2 h-full">
        {images.map((item, index) => (
          <div
            key={index}
            className={`relative mb-2 overflow-hidden rounded-md shadow-md hover:shadow-lg transition-shadow duration-300 ${item.heightClass}`}
          >
            <Image
              src={item.src}
              alt={`Gallery image ${index + 1}`}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Photogallery
