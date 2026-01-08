
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CharacterSection from './components/CharacterSection';
import MultiverseGallery from './components/MultiverseGallery';
import SpiderComputer from './components/SpiderComputer';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'characters', 'multiverse', 'ai'];
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    if (id === 'tickets') {
      alert("Multiversal Ticketing System Online. Redirection to movie theater in 3... 2... 1...");
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-[#050505] selection:bg-rose-600 selection:text-white">
      <Navbar activeSection={activeSection} onNavClick={scrollTo} />
      
      <main>
        <Hero />
        
        {/* Multiverse Separation Line */}
        <div className="relative h-[1px] w-full bg-gradient-to-r from-transparent via-rose-500/50 to-transparent">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rotate-45 border border-rose-500 bg-black" />
        </div>

        <CharacterSection />
        
        <MultiverseGallery />
        
        <SpiderComputer />
        
        {/* Ticket CTA Section - Immersion focus */}
        <section id="tickets" className="min-h-screen flex flex-col justify-center px-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-rose-600 opacity-5 blur-[120px] rounded-full -z-10" />
          <span className="text-rose-500 font-bold tracking-[0.5em] text-[10px] mb-4 block">SECURE YOUR SPOT</span>
          <h2 className="font-oswald text-5xl md:text-7xl font-black italic tracking-tighter text-white mb-8 leading-none">
            DON'T WAIT FOR<br />THE APOCALYPSE
          </h2>
          <div className="flex justify-center">
            <button 
              onClick={() => scrollTo('tickets')}
              className="group relative inline-flex items-center justify-center px-10 py-4 font-black text-white transition-all duration-300 bg-rose-600 rounded-full hover:bg-rose-500 text-xs tracking-widest overflow-hidden"
            >
              <span className="relative z-10">BOOK PRE-ORDER TICKETS</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
