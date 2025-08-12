import React from 'react';

const CTA: React.FC = () => {
  return (
    <section id="cta" className="bg-brand-yellow text-brand-dark py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
          O Tempo Está Acabando
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl font-bold">
          A coleção Rolfzz é um lançamento limitado. Uma vez que se esgote, é história. Não fique para trás.
        </p>
        <div className="mt-12">
          <a
            href="#"
            className="inline-block bg-brand-dark text-brand-yellow font-black text-xl tracking-widest py-5 px-12 uppercase transition-transform duration-200 ease-in-out hover:scale-105"
          >
            Reivindique Seu Status
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
