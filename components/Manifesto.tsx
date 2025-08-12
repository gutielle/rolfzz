import React from 'react';

const Manifesto: React.FC = () => {
  return (
    <section className="bg-black py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-mono text-lg text-brand-yellow mb-4">// A DIRETRIZ ROLFZZ</p>
          <p className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white leading-tight">
            Nós não seguimos. Nós <span className="text-brand-yellow">definimos</span>. Nós não cedemos. Nós <span className="text-brand-yellow">conquistamos</span>.
          </p>
          <div className="mt-8 border-t-2 border-gray-800 max-w-sm mx-auto"></div>
          <p className="mt-8 text-xl text-gray-400">
            Forjado para os poucos que lideram na linha de frente. Isso não é vestuário. É armadura para sua ambição.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;