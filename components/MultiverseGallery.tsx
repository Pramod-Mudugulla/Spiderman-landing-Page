
import React, { useState, useRef } from 'react';
import { SCENES } from '../constants';

const MultiverseGallery: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollLeft = container.scrollLeft;
    const containerWidth = container.offsetWidth;
    
    const children = Array.from(container.children) as HTMLElement[];
    let closestIndex = 0;
    let minDistance = Infinity;

    children.forEach((child, index) => {
      if (index === 0 || index === children.length - 1) return;
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      const scrollCenter = scrollLeft + containerWidth / 2;
      const distance = Math.abs(childCenter - scrollCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index - 1;
      }
    });

    if (closestIndex !== activeIndex && closestIndex >= 0 && closestIndex < SCENES.length) {
      setActiveIndex(closestIndex);
    }
  };

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const children = Array.from(scrollRef.current.children) as HTMLElement[];
    const targetElement = children[index + 1];
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
      setActiveIndex(index);
    }
  };

  const next = () => {
    const nextIdx = Math.min(activeIndex + 1, SCENES.length - 1);
    scrollToIndex(nextIdx);
  };

  const prev = () => {
    const prevIdx = Math.max(activeIndex - 1, 0);
    scrollToIndex(prevIdx);
  };

  return (
    <section id="multiverse" className="min-h-screen px-4 md:px-24 bg-[#050505] relative overflow-hidden flex flex-col justify-center pt-16 pb-12 md:pt-24 md:pb-20">
      {/* Header */}
      <div className="mb-2 md:mb-6 relative z-10 max-w-7xl mx-auto w-full text-center lg:text-left">
        <span className="text-rose-500 font-bold tracking-[0.3em] text-[8px] md:text-[10px]">VISUALS</span>
        <h2 className="text-3xl md:text-5xl font-oswald font-black text-white mt-0.5 uppercase">Multiverse Gallery</h2>
      </div>

      <div className="relative group/gallery max-w-[1400px] mx-auto w-full">
        
        {/* Massive Left Arrow */}
        <div className="absolute left-0 lg:-left-12 top-[40%] -translate-y-1/2 z-30 pointer-events-none flex items-center justify-center">
          <button 
            onClick={prev}
            disabled={activeIndex === 0}
            className={`transition-all duration-500 pointer-events-auto active:scale-90 ${
              activeIndex === 0 ? 'opacity-0 translate-x-4 cursor-default' : 'opacity-100'
            }`}
          >
            <span className="text-4xl md:text-[10rem] font-oswald font-black select-none leading-none inline-block text-transparent bg-clip-text bg-gradient-to-l from-white/10 to-white/80 hover:to-white drop-shadow-xl p-2">
              &lt;
            </span>
          </button>
        </div>

        {/* Massive Right Arrow */}
        <div className="absolute right-0 lg:-right-12 top-[40%] -translate-y-1/2 z-30 pointer-events-none flex items-center justify-center">
          <button 
            onClick={next}
            disabled={activeIndex === SCENES.length - 1}
            className={`transition-all duration-500 pointer-events-auto active:scale-90 ${
              activeIndex === SCENES.length - 1 ? 'opacity-0 -translate-x-4 cursor-default' : 'opacity-100'
            }`}
          >
            <span className="text-4xl md:text-[10rem] font-oswald font-black select-none leading-none inline-block text-transparent bg-clip-text bg-gradient-to-r from-white/10 to-white/80 hover:to-white drop-shadow-xl p-2">
              &gt;
            </span>
          </button>
        </div>

        {/* Gallery Container */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-4 md:gap-24 overflow-x-auto pb-4 md:pb-6 pt-2 snap-x snap-mandatory no-scrollbar mask-fade-edges items-center"
        >
          {/* Leading Padding */}
          <div className="min-w-[5%] md:min-w-[20%] shrink-0" />
          
          {SCENES.map((scene, idx) => {
            const isActive = idx === activeIndex;
            return (
              <div 
                key={idx} 
                className={`min-w-[85vw] sm:min-w-[500px] lg:min-w-[850px] shrink-0 transition-all duration-1000 snap-center relative flex flex-col items-center ${
                  isActive ? 'z-20 scale-100 opacity-100' : 'z-10 scale-[0.85] opacity-20 blur-[2px] md:blur-[6px]'
                }`}
              >
                <div className={`relative w-full aspect-video rounded-2xl md:rounded-[2rem] overflow-hidden mb-3 md:mb-5 transition-all duration-1000 border-2 md:border-[3px] max-h-[35vh] md:max-h-[45vh] ${
                  isActive ? 'border-rose-600/80 shadow-[0_0_50px_rgba(225,29,72,0.4)]' : 'border-transparent'
                }`}>
                  <img 
                    src={scene.image} 
                    alt={scene.title}
                    className={`w-full h-full object-cover transition-all duration-1000 transform ${
                      isActive ? 'grayscale-0 scale-100 rotate-0' : 'grayscale scale-110 rotate-1'
                    }`}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent transition-opacity duration-1000 ${
                    isActive ? 'opacity-90' : 'opacity-60'
                  }`} />
                  
                  {isActive && (
                    <div className="absolute top-4 right-4 md:top-6 md:right-6 px-3 md:px-4 py-1 md:py-1.5 bg-rose-600/90 backdrop-blur-md text-white text-[7px] md:text-[8px] font-black tracking-[0.2em] rounded-full animate-pulse shadow-2xl border border-white/20">
                      LIVE FEED
                    </div>
                  )}
                </div>
                
                <div className={`transition-all duration-700 transform w-full max-w-3xl text-center lg:text-left px-2 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                  <h3 className="text-xl md:text-3xl font-oswald font-black text-white mb-1 md:mb-1.5 italic tracking-tighter uppercase leading-tight">
                    {scene.title}
                  </h3>
                  <p className="text-gray-400 text-[10px] md:text-sm max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light tracking-wide line-clamp-2 md:line-clamp-none">
                    {scene.description}
                  </p>
                </div>
              </div>
            );
          })}

          {/* Trailing Padding */}
          <div className="min-w-[5%] md:min-w-[20%] shrink-0" />
        </div>
      </div>

      {/* Progress Indicators */}
      <div className="flex justify-center gap-2 md:gap-3 mt-4 md:mt-6 relative z-10">
        {SCENES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollToIndex(idx)}
            className={`h-1 md:h-1.5 transition-all duration-700 rounded-full ${
              idx === activeIndex 
                ? 'w-10 md:w-16 bg-rose-600 shadow-[0_0_15px_rgba(225,29,72,0.8)]' 
                : 'w-2 md:w-3 bg-white/10 hover:bg-white/30'
            }`}
            aria-label={`Go to dimension ${idx + 1}`}
          />
        ))}
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-rose-500/10 to-transparent -z-10" />
    </section>
  );
};

export default MultiverseGallery;
