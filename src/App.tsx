import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Features from './components/Features';
import Products from './components/Products';
import Transmissions from './components/Transmissions';
import Gallery from './components/Gallery';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-brand-dark text-white font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <Features />
        <Products />
        <Transmissions />
        <Gallery />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
