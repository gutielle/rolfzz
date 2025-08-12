import React from 'react';
import FeatureCard from './FeatureCard';
import { BoltIcon, ShieldCheckIcon, SparklesIcon } from '../constants';

const featuresData = [
  {
    icon: <BoltIcon />,
    title: 'Trama Tática',
    description: 'Construído com tecido ripstop de alta densidade para durabilidade extrema e resistência ao clima. Feito para durar.',
  },
  {
    icon: <ShieldCheckIcon />,
    title: 'Ajuste de Precisão',
    description: 'Projetado com um sistema de fecho seguro e ajustável para uma sensação de encaixe perfeito. Conforto máximo, zero concessões.',
  },
  {
    icon: <SparklesIcon />,
    title: 'Emblema Icônico',
    description: 'Apresenta o icônico emblema Rolfzz de alto contraste. Uma marca de distinção para os ousados e implacáveis.',
  },
];

const Features: React.FC = () => {
  return (
    <section className="bg-brand-dark py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
