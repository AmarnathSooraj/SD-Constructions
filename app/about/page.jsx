'use client'
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import {motion} from 'framer-motion'

export default function AboutPage() {
  return (
    <>
      <Navbar nonSticky />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.55 }}
       className="min-h-screen bg-white text-gray-900 px-6 md:px-20 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-10">
            {/* Profile Section */}
          <div className="relative inline-block text-center">
            <div className="relative w-[200px] h-[200px] mx-auto">
              <Image
                src="/sahyadeepak.jpg"
                alt="Profile photo"
                width={180}
                height={180}
                className="rounded-sm shadow-lg object-cover w-full h-full brightness-90"
              />
            </div>

            <p className="text-xl mt-4 uppercase font-[Poppins]">Sahya Deepak</p>
            <p className="text-gray-600 font-serif">Chartered Engineer, Founder of Design Architects'n' Engineers</p>
          </div>


            {/* About Writings */}
            <div className="max-w-3xl text-lg text-center leading-relaxed space-y-4">
              <p>
                I’m <strong>Sahya Deepak</strong>, a Chartered Engineer and founder of <strong>Design Architect'n' Engineers</strong>. I specialize in creating simple yet powerful solutions that help people and businesses grow.
                My journey began with a passion for design and technology, and over the years, I've helped a wide range of clients — from startups to established firms — solve real-world challenges using thoughtful engineering and clear communication.
                At Deepak Innovations, we combine technical expertise with human-centered design to deliver digital products that are efficient, scalable, and easy to use.
                Outside of work, I enjoy mentoring young engineers, exploring nature, and continuously learning to stay ahead in an ever-evolving field.
                My mission is simple: use technology to make life easier, more productive, and more meaningful for everyone I work with.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
