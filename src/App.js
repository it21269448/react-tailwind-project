import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header><Navbar /></header>
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;