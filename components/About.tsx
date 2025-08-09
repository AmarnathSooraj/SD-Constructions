import React from 'react'
import Image from 'next/image'
import { FaHardHat, FaRegClock, FaHandsHelping, FaDraftingCompass } from 'react-icons/fa'
import Link from 'next/link'
function About() {
  const items = [
    {
      icon: <FaHardHat className="text-3xl text-[#456546]" />,
      title: "Superior Craftsmanship",
      description: "Attention to detail and quality that stands the test of time in every project we build.",
    },
    {
      icon: <FaRegClock className="text-3xl text-[#456546]" />,
      title: "On-Time Delivery",
      description: "We respect your time. Our processes are built for precision scheduling and timely execution.",
    },
    {
      icon: <FaDraftingCompass className="text-3xl text-[#456546]" />,
      title: "Custom Design",
      description: "Tailored architectural and interior solutions that reflect your lifestyle and taste.",
    },
    {
      icon: <FaHandsHelping className="text-3xl text-[#456546]" />,
      title: "End-to-End Support",
      description: "From consultation to handover, we walk with you every step of the way.",
    },
  ]
  return (
    <section className="w-full bg-[#f9f6f2]">
      <div className="max-w-7xl px-5 pt-20 pb-10 mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">

        {/* Text Content */}
        <div className="flex-1 text-start">
          <p className="text-[#7b7b7b] text-lg font-medium mb-2 tracking-wide">ABOUT US</p>
          <h2 className="text-4xl md:text-5xl font-serif text-[#2f1801] my-3 leading-tight">
            Sahyadri Ventures
          </h2>
          <p className="text-gray-700 font-abel text-lg leading-relaxed text-justify">
            Our Home — where laughter echoes and we find rest after each day.
            From the outside, it may look like bricks and mortar topped with tiles, just like any other house.
            But step inside, and you’ll feel something different — a calm that lets the lungs breathe deeper
            and the heart beat a little steadier.At <span className="text-[#456546] font-medium">Sahyadri Ventures</span>, we believe a home is more than a structure; it’s a space that reflects your story,
            your values, and your way of life. Every detail is carefully crafted to bring comfort, style, and functionality together.
          </p>
          <Link href='/about' className='text-sm font-extralight my-2 inline-block bg-[#2f1414] px-5 py-3 rounded-sm text-white hover:scale-105 active:bg-[#533e3e] transition-all duration-200 font-[Poppins]'>Read More</Link>
        </div>

        {/* Image Section */}
        <div className="relative w-[320px] lg:w-[400px] max-w-md mx-auto group cursor-pointer">
        {/* Shadow Layer */}
        <div className="absolute top-0 left-0 w-[320px] lg:w-[400px] h-full translate-x-5 translate-y-5 rounded-sm overflow-hidden shadow-md bg-[#533e3e] z-0 transition-all duration-500"></div>

        {/* Main Image */}
        <div className="relative z-10 rounded-sm overflow-hidden shadow-xl">
          <Image
            src="/selectedphotos/9.webp"
            alt="SD Constructions"
            width={600}
            height={800}
            className="w-[400px] h-auto object-cover hover:scale-105 hover:brightness-90 transition-all duration-500"
          />
        </div>
      </div>

      </div>
      <div className="max-w-full text-center mt-10 bg-[#212020] py-15 px-5 text-[#d7d6d6]">
        <h2 className="text-3xl md:text-4xl mb-4 font-extralight font-serif">Our Specialities</h2>
        <p className=" mb-12 max-w-2xl mx-auto">
          What sets us apart is not just what we build — it’s how we build it. Here’s what makes Sahyadri Ventures trusted by so many families.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-[#f9f6f2] rounded-sm p-6 text-left hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-[#2f1801] mb-2">{item.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
