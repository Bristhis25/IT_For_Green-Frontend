// App.jsx
import React from 'react';
import './App.css';

import Header from "./components/Header";
import Hero from "./components/Hero";
import Modules from "./components/Modules";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App bg-white">
        <Header /> 
        <Hero />
        <Modules />
        <Footer />
    </div>
  );
}

export default App;
