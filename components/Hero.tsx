import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('https://picsum.photos/seed/rolfzz-hat/1920/1080')" }}
      >
        <div className="absolute inset-0 bg-brand-dark opacity-70"></div>
      </div>
      <div className="relative z-10 p-4">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-white drop-shadow-lg">
          Domine a <span className="text-brand-yellow">Vanguarda</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl font-mono tracking-widest text-gray-300 uppercase">
          Rolfzz. Estilo Intransigente. Lançamento Limitado.
        </p>
        <a
          href="#cta"
          className="mt-12 inline-block bg-brand-yellow text-brand-dark font-black text-xl tracking-widest py-4 px-10 uppercase transition-transform duration-200 ease-in-out hover:scale-105 animate-pulse"
        >
          Garanta o Seu &gt;
        </a>
      </div>
    </section>
  );
};

export default Hero;