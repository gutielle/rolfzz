import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-dark bg-opacity-80 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="text-3xl font-black tracking-widest text-brand-yellow">
            ROLFZZ
          </div>
          <a
            href="#cta"
            className="hidden sm:inline-block bg-brand-yellow text-brand-dark font-bold text-sm tracking-widest py-3 px-6 uppercase transition-transform duration-200 ease-in-out hover:scale-105"
          >
            Garanta Já
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
