// components/Gallery.tsx
import Image from 'next/image';

const galleryItems = [
  {
    title: 'Residential Building',
    src: '/selectedphotos/1.webp',
  },
  {
    title: 'Commercial Tower',
    src: '/selectedphotos/2.webp',
  },
  {
    title: 'Bridge Construction',
    src: '/selectedphotos/3.webp',
  },
  {
    title: 'Road Infrastructure',
    src: '/selectedphotos/4.webp',
  },
  {
    title: 'Industrial Plant',
    src: '/selectedphotos/5.webp',
  },
  {
    title: 'Renovation Work',
    src: '/selectedphotos/6.webp',
  },
];

export default function Gallery() {
  return (
    <section className="w-full mx-auto py-20 bg-[#f9f9f2] text-black">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className='text-center max-w-[750px] mx-auto mb-14 text-gray-600'>
            <h2 className="text-3xl md:text-4xl font-extralight font-serif mb-3 text-gray-900">Projects</h2>
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
                className="object-cover w-full h-60 transition-transform duration-300 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-[#3f3f3f] bg-opacity-100 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <p className="text-white text-lg font-medium">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
