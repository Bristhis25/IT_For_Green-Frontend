// src/components/Header.js
import React from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="logo">
        <img src={logo} alt="IT for Green Logo" className="h-8" />
        </div>

        {/* Menu de navigation */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#Hero" className="text-white hover:text-yellow-300">
                Accueil
              </a>
            </li>
            <li>
              <a href="#Modules" className="text-white hover:text-yellow-300">
                Nos Cours
              </a>
            </li>
            <li>
              <a href="#contact" className="text-white hover:text-yellow-300">
                Contacts
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
