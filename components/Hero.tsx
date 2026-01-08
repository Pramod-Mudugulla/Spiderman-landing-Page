
import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&q=80&w=2400')`,
          transform: `scale(1.1) translate(${mousePos.x * -0.5}px, ${mousePos.y * -0.5}px)`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
      </div>

      {/* Hero Content */}
      <div 
        className="relative z-10 text-center px-6"
        style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
      >
        <span className="text-rose-500 font-bold tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-xs mb-4 block animate-pulse">COMING SOON TO THEATERS</span>
        <h1 className="font-oswald text-5xl sm:text-7xl md:text-9xl font-black italic tracking-tighter leading-[0.9] text-white drop-shadow-2xl uppercase">
          ACROSS THE<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-rose-400 to-rose-600 text-glow">DIMENSIONS</span>
        </h1>
        <p className="max-w-xl mx-auto mt-6 md:mt-8 text-gray-300 text-xs md:text-base font-medium leading-relaxed opacity-80 line-clamp-3 md:line-clamp-none">
          The fate of the multiverse hangs by a thread. Join the web-slingers from every reality in the most ambitious cinematic event of the decade.
        </p>
        
        <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
          <button className="w-full sm:w-auto bg-white text-black font-black px-8 md:px-10 py-3 md:py-4 rounded-full text-[10px] md:text-xs tracking-widest hover:bg-rose-500 hover:text-white transition-all transform hover:-translate-y-1 shadow-xl">
            WATCH TRAILER
          </button>
          <button className="w-full sm:w-auto bg-black/50 border border-white/20 backdrop-blur-md text-white font-black px-8 md:px-10 py-3 md:py-4 rounded-full text-[10px] md:text-xs tracking-widest hover:border-rose-500 transition-all transform hover:-translate-y-1 shadow-xl">
            EXPLORE THE WEB
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-rose-500 to-transparent animate-bounce" />
        <span className="text-[7px] md:text-[8px] font-black tracking-widest text-white/50">SCROLL</span>
      </div>
    </section>
  );
};

export default Hero;
