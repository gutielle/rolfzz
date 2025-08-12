import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="border-2 border-brand-yellow p-8 bg-brand-dark transition-all duration-300 hover:bg-brand-yellow group">
      <div className="text-brand-yellow group-hover:text-brand-dark transition-colors duration-300">
        {icon}
      </div>
      <h3 className="mt-6 text-2xl font-black uppercase tracking-wider text-white group-hover:text-brand-dark transition-colors duration-300">
        {title}
      </h3>
      <p className="mt-4 text-base text-gray-400 group-hover:text-brand-dark transition-colors duration-300">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
