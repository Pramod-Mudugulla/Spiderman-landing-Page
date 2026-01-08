
import React, { useRef, useState, useEffect } from 'react';

interface NavbarProps {
  activeSection: string;
  onNavClick: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavClick }) => {
  const links = [
    { label: 'HOME', id: 'home' },
    { label: 'CHARACTERS', id: 'characters' },
    { label: 'MULTIVERSE', id: 'multiverse' },
    { label: 'AI', id: 'ai' },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Center the active item when activeSection changes
  useEffect(() => {
    if (scrollRef.current) {
      const activeBtn = scrollRef.current.querySelector(`[data-id="${activeSection}"]`);
      if (activeBtn) {
        const timeoutId = setTimeout(() => {
          activeBtn.scrollIntoView({
            behavior: 'smooth',
            inline: 'center',
            block: 'nearest'
          });
        }, 50);
        return () => clearTimeout(timeoutId);
      }
    }
  }, [activeSection]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 flex justify-center p-3 md:px-8 md:py-4 pointer-events-none transition-all duration-500 ${scrolled ? 'md:py-3' : 'md:py-6'}`}>
      <div className={`
        bg-black/95 backdrop-blur-3xl border border-white/10 rounded-full 
        px-3 sm:px-4 md:px-6 py-2 md:py-3.5 flex md:grid md:grid-cols-[200px_1fr_200px] items-center justify-between 
        pointer-events-auto 
        shadow-[0_30px_60px_rgba(0,0,0,0.85)] relative overflow-hidden 
        w-[98%] max-w-7xl transition-all duration-500
        ${scrolled ? 'border-rose-500/20 shadow-[0_15px_30px_rgba(225,29,72,0.15)]' : 'border-white/10'}
      `}>
        
        {/* Subtle Background HUD Detail */}
        <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#e11d48_1px,transparent_1px)] [background-size:24px_24px]" />
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-rose-500/30 to-transparent animate-shimmer-h" />
        </div>

        {/* Logo Section - Left Column */}
        <div 
          className="flex items-center gap-2.5 cursor-pointer group shrink-0 relative z-10 md:pr-4 md:border-r md:border-white/5" 
          onClick={() => onNavClick('home')}
        >
          <div className="w-7 h-7 md:w-9 md:h-9 bg-rose-600 rounded-full flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-[0_0_15px_rgba(225,29,72,0.5)]">
             <span className="text-white text-xs md:text-sm font-bold">🕷</span>
          </div>
          <span className="font-oswald font-black tracking-tighter text-sm md:text-lg text-white hidden sm:block italic uppercase">
            Spider-Verse
          </span>
        </div>
        
        {/* Navigation Links - Center Column */}
        <div className="flex-1 md:flex-none relative flex items-center h-full mx-2">
          <div 
            ref={scrollRef}
            className="
              flex gap-6 md:gap-10 overflow-x-auto no-scrollbar relative 
              snap-x snap-mandatory scroll-smooth 
              px-[35%] md:px-0 py-1 items-center w-full md:justify-center
            "
            style={{ scrollPadding: '0 35%' }}
          >
            {links.map((link) => (
              <button
                key={link.id}
                data-id={link.id}
                onClick={() => onNavClick(link.id)}
                className={`
                  text-[10px] md:text-[11px] font-black tracking-[0.25em] transition-all 
                  whitespace-nowrap snap-center relative py-1.5 uppercase
                  ${activeSection === link.id 
                    ? 'text-white' 
                    : 'text-gray-500 hover:text-rose-400'
                  }
                `}
              >
                <span className="relative z-10">{link.label}</span>
                {activeSection === link.id && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2.5px] bg-rose-600 rounded-full shadow-[0_0_10px_rgba(225,29,72,0.8)] animate-in fade-in zoom-in-75 duration-300" />
                )}
              </button>
            ))}
          </div>
          
          {/* Mobile Scroll Fades */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black/80 to-transparent pointer-events-none md:hidden" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black/80 to-transparent pointer-events-none md:hidden" />
        </div>

        {/* CTA Section - Right Column */}
        <div className="shrink-0 relative z-10 md:pl-4 md:border-l md:border-white/5 flex justify-end">
          <button 
            onClick={() => onNavClick('tickets')}
            className="
              bg-rose-600 hover:bg-white hover:text-rose-600 
              text-white px-4 md:px-7 py-2 md:py-2.5
              rounded-full text-[9px] md:text-[10px] font-black tracking-[0.1em]
              shadow-[0_10px_20px_rgba(225,29,72,0.2)] transition-all duration-300 
              active:scale-95 whitespace-nowrap uppercase
              hover:shadow-[0_0_25px_rgba(225,29,72,0.5)]
              flex items-center gap-2
            "
          >
            Tickets
            <span className="hidden md:inline-block opacity-50">→</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
