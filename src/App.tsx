import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Showcase from './components/Showcase';
import About from './components/About';
import Features from './components/Features';
import FAQ from './components/FAQ';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Showcase />
      <About />
      <Features />
      <FAQ />
      <Contact />
    </div>
  );
}

export default App;