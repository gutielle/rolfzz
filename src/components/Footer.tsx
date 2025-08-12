import React from 'react';
import { TwitterIcon, InstagramIcon, TikTokIcon } from '../constants';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-brand-dark border-t border-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm font-mono mb-6 md:mb-0">
            &copy; {year} ROLFZZ. TODOS OS DIREITOS RESERVADOS. // EXECUTE_SEU_ESTILO
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-brand-yellow transition-colors duration-200">
              <TwitterIcon />
            </a>
            <a href="#" className="text-gray-500 hover:text-brand-yellow transition-colors duration-200">
              <InstagramIcon />
            </a>
            <a href="#" className="text-gray-500 hover:text-brand-yellow transition-colors duration-200">
              <TikTokIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
