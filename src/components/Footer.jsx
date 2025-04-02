// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p className="text-lg mb-4">© 2025 IT for Green. Tous droits réservés.</p>
        <div className="flex justify-center gap-8">
          <a href="#about" className="hover:text-green-500">À propos</a>
          <a href="#services" className="hover:text-green-500">Services</a>
          <a href="#contact" className="hover:text-green-500">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
