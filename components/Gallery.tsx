// components/Gallery.tsx
import Image from 'next/image';

const galleryItems = [
  {
    title: 'Residential Building',
    src: '/images/project1.jpg',
  },
  {
    title: 'Commercial Tower',
    src: '/images/project2.jpg',
  },
  {
    title: 'Bridge Construction',
    src: '/images/project3.jpg',
  },
  {
    title: 'Road Infrastructure',
    src: '/images/project4.jpg',
  },
  {
    title: 'Industrial Plant',
    src: '/images/project5.jpg',
  },
  {
    title: 'Renovation Work',
    src: '/images/project6.jpg',
  },
];

export default function Gallery() {
  return (
    <section className="w-full mx-auto py-20 bg-[#f9f9f2] text-black">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className='text-center max-w-[750px] mx-auto mb-14 text-gray-600'>
            <h2 className="text-4xl md:text-5xl font-extralight font-serif mb-3 text-gray-900">Projects</h2>
            <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam odio commodi velit excepturi dolor reprehenderit quasi iusto veritatis eligendi porro ratione blanditiis, sequi, voluptatum quidem. Beatae vitae hic quae magnam!</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryItems.map((item, idx) => (
            <div key={idx} className="relative group overflow-hidden rounded-sm shadow-lg">
              <Image
                src={item.src}
                alt={item.title}
                width={600}
                height={400}
                className="object-cover w-full h-60 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
