import React from 'react';

const productsData = [
  {
    id: 1,
    name: 'Operador Furtivo',
    price: 'R$399,99',
    image: 'https://picsum.photos/seed/rolfzz-hat1/800/800',
    description: 'Acabamento em preto fosco para ação silenciosa e decisiva. Apresenta uma silhueta discreta e tecido que abafa o som.',
  },
  {
    id: 2,
    name: 'Ataque Volt',
    price: 'R$449,99',
    image: 'https://picsum.photos/seed/rolfzz-hat2/800/800',
    description: 'Detalhes em amarelo de alta visibilidade. Seja visto. Seja temido. Projetado para ambientes de alto contraste e identificação rápida.',
  },
  {
    id: 3,
    name: 'Recon Urbano',
    price: 'R$399,99',
    image: 'https://picsum.photos/seed/rolfzz-hat3/800/800',
    description: 'Trama tática em cinza grafite. O equilíbrio perfeito entre design secreto e estilo urbano para qualquer teatro de operações.',
  },
];


const Products: React.FC = () => {
  return (
    <section className="bg-black py-20 sm:py-28 border-y-2 border-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-white">
            Cofre de <span className="text-brand-yellow">Espécimes</span>
          </h2>
          <p className="mt-2 text-lg font-mono text-gray-500">// ANALISE. SELECIONE. DOMINE.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productsData.map((product) => (
            <div 
              key={product.id} 
              className="group relative bg-brand-dark border-2 border-gray-800 p-4 flex flex-col transition-all duration-300 hover:border-brand-yellow hover:bg-black hover:-translate-y-2"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden mb-4">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105 filter grayscale group-hover:filter-none"
                  loading="lazy"
                />
                <div className="absolute top-0 left-0 bg-brand-dark text-brand-yellow border border-brand-yellow font-mono text-xs py-1 px-2 uppercase transition-colors duration-300 group-hover:bg-brand-yellow group-hover:text-brand-dark">
                    ESPÉCIME #{String(product.id).padStart(3, '0')}
                </div>
              </div>

              {/* Product Details */}
              <div className="flex-grow flex flex-col px-2">
                <h3 className="text-2xl font-black uppercase tracking-wider text-white">{product.name}</h3>
                <p className="text-gray-400 mt-2 text-sm flex-grow">{product.description}</p>
              </div>
              
              {/* Acquisition details */}
              <div className="mt-auto pt-4 mt-6 border-t-2 border-gray-800 group-hover:border-gray-700 transition-colors duration-300">
                <div className="flex justify-between items-center px-2">
                  <span className="text-3xl font-mono text-brand-yellow">{product.price}</span>
                  <button className="bg-transparent border-2 border-brand-yellow text-brand-yellow font-bold uppercase py-3 px-6 tracking-widest transition-all duration-300 group-hover:bg-brand-yellow group-hover:text-brand-dark text-sm">
                      Adquirir
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;