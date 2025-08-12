import React from 'react';

const transmissionsData = [
  {
    id: 1,
    quote: "Isto não é apenas um boné. É uma declaração. Nas ruas molhadas de chuva, é a minha coroa.",
    author: "- JAX",
    location: "Setor 7G",
  },
  {
    id: 2,
    quote: "Durabilidade é um eufemismo. Atravessei uma tempestade de areia. Boné: impecável. Eu: nem tanto.",
    author: "- GHOST_OP",
    location: "A Bacia de Poeira",
  },
  {
    id: 3,
    quote: "Peguei o modelo 'Volt'. Os olhares que recebo... é como usar um alvo que você sabe que ninguém pode acertar.",
    author: "- VEX",
    location: "Neo-Kyoto",
  },
];

const TransmissionCard: React.FC<{ transmission: typeof transmissionsData[0] }> = ({ transmission }) => (
    <div className="border-t-2 border-brand-yellow pt-6 transition-all duration-300">
        <blockquote className="text-lg md:text-xl font-mono italic text-gray-300">
            <p>"{transmission.quote}"</p>
        </blockquote>
        <footer className="mt-6 text-right">
            <p className="text-base font-black uppercase tracking-widest text-white">{transmission.author}</p>
            <p className="text-sm font-mono text-gray-500">{transmission.location}</p>
        </footer>
    </div>
);

const Transmissions: React.FC = () => {
  return (
    <section className="bg-black py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-white">
            Transmissões
          </h2>
          <p className="mt-2 text-lg font-mono text-gray-500">// VERIFICADO EM CAMPO_</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {transmissionsData.map((transmission) => (
            <TransmissionCard key={transmission.id} transmission={transmission} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Transmissions;
