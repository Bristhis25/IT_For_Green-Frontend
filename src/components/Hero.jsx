import React from 'react';
import heroImage from '../assets/hero.jpg';

const Hero = () => {
  return (
    <section
      className="bg-cover bg-center text-white h-screen flex flex-col justify-center items-center text-center p-8"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat', 
        minHeight: '60vh'
        
      }}
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4 ">
        Bienvenue chez IT for Green
      </h1>
      <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
        La meilleure plateforme d'e-learning écologique
      </p>
    </section>
  );
};

export default Hero;
