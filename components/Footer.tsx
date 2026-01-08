
import React from 'react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-black pt-16 pb-12 md:pt-24 md:pb-20 px-6 md:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12 md:gap-16">
        
        {/* Top Section: Logo & Description */}
        <div className="text-center space-y-4">
          <h2 className="font-oswald text-4xl md:text-6xl font-black text-white italic tracking-tighter uppercase leading-none">
            SPIDER-VERSE
          </h2>
          <p className="text-gray-500 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase">
            © 2025 Marvel & Columbia Pictures. All Rights Reserved.
          </p>
        </div>

        {/* Middle Section: Socials & Back to Top */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 border-y border-white/5 py-10 md:py-12">
          
          {/* Social Links Grid: 2x2 on small screens, flex on desktop */}
          <div className="grid grid-cols-2 sm:flex gap-x-12 gap-y-6 md:gap-16">
            {['INSTAGRAM', 'TWITTER', 'YOUTUBE', 'FACEBOOK'].map((platform) => (
              <a 
                key={platform} 
                href={`https://www.${platform.toLowerCase()}.com`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[10px] md:text-xs font-black text-gray-400 hover:text-rose-500 transition-all tracking-[0.2em] text-center md:text-left group"
              >
                <span className="relative pb-1 inline-block">
                  {platform}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-rose-500 transition-all duration-300 group-hover:w-full" />
                </span>
              </a>
            ))}
          </div>

          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 bg-white/5 hover:bg-rose-600 border border-white/10 hover:border-rose-500 text-white font-black px-8 py-4 rounded-full text-[10px] md:text-xs tracking-[0.2em] transition-all active:scale-95 shadow-lg"
          >
            BACK TO TOP 
            <span className="transform group-hover:-translate-y-1 transition-transform">↑</span>
          </button>
        </div>

        {/* Bottom Section: Legal Links */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[8px] md:text-[10px] font-black text-gray-600 tracking-[0.2em] uppercase">
          {['Privacy Policy', 'Terms of Service', 'Cookie Settings', 'Accessibility'].map((item) => (
            <a key={item} href="#" className="hover:text-white transition-colors">
              {item}
            </a>
          ))}
        </div>
      </div>
      
      {/* Decorative spider-web inspired geometric element */}
      <div className="mt-12 md:mt-20 flex justify-center opacity-5 select-none pointer-events-none">
        <div className="relative w-20 h-20 md:w-32 md:h-32 border-2 border-white rounded-full flex items-center justify-center rotate-45">
          <div className="w-full h-[1px] bg-white absolute" />
          <div className="w-[1px] h-full bg-white absolute" />
          <div className="w-2/3 h-2/3 border border-white rounded-full absolute" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
