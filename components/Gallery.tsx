import React from 'react';

const images = [
  'https://picsum.photos/seed/rolfzz1/800/800',
  'https://picsum.photos/seed/rolfzz2/800/800',
  'https://picsum.photos/seed/rolfzz3/800/800',
  'https://picsum.photos/seed/rolfzz4/800/800',
];

const GalleryImage: React.FC<{ src: string }> = ({ src }) => (
  <div className="relative w-full h-0 pb-[100%] overflow-hidden">
    <img
      src={src}
      alt="Boné Rolfzz"
      className="absolute top-0 left-0 w-full h-full object-cover filter grayscale hover:filter-none transition-all duration-300 ease-in-out"
      loading="lazy"
    />
  </div>
);

const Gallery: React.FC = () => {
  return (
    <section className="bg-black py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-white">
            Diretriz <span className="text-brand-yellow">Visual</span>
          </h2>
          <p className="mt-2 text-lg font-mono text-gray-500">// ESTÉTICA CRUA</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4">
          {images.map((img, index) => (
            <GalleryImage key={index} src={img} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;