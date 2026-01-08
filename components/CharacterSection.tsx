
import React, { useState, useRef, useEffect } from 'react';
import { CHARACTERS } from '../constants';
import { Character, Mission } from '../types';

const CharacterSection: React.FC = () => {
  const [activeChar, setActiveChar] = useState<Character>(CHARACTERS[0]);
  const [modalContent, setModalContent] = useState<'bio' | 'missions' | null>(null);
  const [selectedMission, setSelectedMission] = useState<Mission | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setScrollProgress(isNaN(progress) ? 0 : progress);
    }
  };

  useEffect(() => {
    handleScroll();
  }, []);

  const closeModal = () => {
    setModalContent(null);
    setSelectedMission(null);
  };

  return (
    <section id="characters" className="min-h-screen flex flex-col lg:flex-row items-center pt-20 pb-8 md:pt-24 md:pb-12 px-4 md:px-24 bg-[#050505] relative overflow-hidden">
      <div className="web-overlay absolute inset-0 pointer-events-none" />
      
      {/* Background Glow */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[80vh] bg-gradient-to-br ${activeChar.color} opacity-5 blur-[100px] md:blur-[150px] transition-all duration-1000 -z-10`} />

      <div className="relative z-10 flex flex-col lg:grid lg:grid-cols-12 gap-6 md:gap-16 items-center w-full max-w-[1600px] mx-auto h-full overflow-y-auto no-scrollbar lg:overflow-visible">
        
        {/* Selection Area */}
        <div className="lg:col-span-4 flex flex-col justify-center w-full lg:h-full space-y-4 md:space-y-10 shrink-0">
          <div className="text-center lg:text-left">
            <span className="text-rose-500 font-bold tracking-[0.3em] md:tracking-[0.4em] text-[9px] md:text-[11px] mb-1 md:mb-2 block animate-pulse">DATABASE: IDENTIFIED</span>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-oswald font-black text-white leading-tight uppercase">THE ROSTER</h2>
            <div className="flex items-center justify-center lg:justify-start gap-2 sm:hidden">
              <p className="text-gray-500 text-[8px] tracking-[0.2em] uppercase font-bold animate-pulse">Swipe to explore <span className="text-rose-500">↔</span></p>
            </div>
            <p className="text-gray-500 text-[9px] md:text-xs mt-1 md:mt-4 tracking-widest uppercase font-bold hidden sm:block">Select an entity to view analytics</p>
          </div>

          <div className="relative group/scroll">
            <div 
              ref={scrollContainerRef}
              onScroll={handleScroll}
              className="flex lg:flex-col gap-3 md:gap-4 overflow-x-auto lg:overflow-visible no-scrollbar pb-2 lg:pb-0 px-2 lg:px-0 mask-fade-edges lg:mask-none"
            >
              {CHARACTERS.map((char) => (
                <button
                  key={char.id}
                  onClick={() => setActiveChar(char)}
                  className={`min-w-[140px] sm:min-w-[200px] lg:min-w-0 flex-shrink-0 group text-left p-3 md:p-6 rounded-2xl md:rounded-3xl transition-all duration-500 relative overflow-hidden border-2 ${
                    activeChar.id === char.id 
                      ? 'bg-white/5 border-rose-500 shadow-[0_0_30px_rgba(225,29,72,0.2)] scale-100 lg:scale-105' 
                      : 'bg-transparent border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="relative z-10 flex justify-between items-center">
                    <div>
                      <span className={`text-[8px] md:text-[10px] font-black tracking-widest block mb-0.5 md:mb-1 ${activeChar.id === char.id ? 'text-rose-500' : 'text-gray-500'}`}>
                        {char.alias.toUpperCase()}
                      </span>
                      <h3 className="text-sm md:text-2xl lg:text-3xl font-oswald font-bold text-white tracking-tight whitespace-nowrap">{char.name}</h3>
                    </div>
                  </div>
                  {activeChar.id === char.id && (
                    <div className="absolute top-0 right-0 h-full w-1 md:w-1.5 bg-rose-500" />
                  )}
                </button>
              ))}
            </div>

            <div className="lg:hidden w-full h-[1px] bg-white/5 mt-2 rounded-full overflow-hidden">
               <div 
                 className="h-full bg-rose-500/40 transition-all duration-300 rounded-full" 
                 style={{ width: '40%', marginLeft: `${scrollProgress * 0.6}%` }}
               />
            </div>
          </div>
        </div>

        {/* Detailed Display */}
        <div className="lg:col-span-8 relative w-full h-full flex items-center shrink-0">
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] rounded-[1.5rem] md:rounded-[3rem] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] perspective-2000 group">
            <img 
              src={activeChar.image} 
              alt={activeChar.name}
              className="w-full h-full object-cover transition-all duration-1000 transform scale-110 lg:group-hover:scale-100 lg:group-hover:rotate-1"
            />
            
            <div className={`absolute inset-0 bg-gradient-to-br ${activeChar.color} opacity-30 mix-blend-color transition-all duration-1000`} />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-95" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-80" />
            
            <div className="absolute bottom-4 left-4 right-4 md:bottom-12 md:left-12 md:right-12">
              <div className="flex items-center gap-2 md:gap-4 mb-2 md:mb-4">
                <div className="h-[1px] md:h-[2px] w-6 md:w-12 bg-rose-500" />
                <span className="text-rose-500 font-black tracking-[0.2em] md:tracking-[0.3em] text-[7px] md:text-[10px] uppercase">Profile Analytics</span>
              </div>
              
              <h3 className="text-3xl md:text-6xl lg:text-8xl font-oswald font-black text-white italic tracking-tighter mb-2 md:mb-6 leading-none uppercase">
                {activeChar.name.split(' ')[0]} <br className="hidden md:block" />
                <span className="text-rose-600 drop-shadow-[0_0_20px_rgba(225,29,72,0.6)]">
                  {activeChar.name.split(' ').slice(1).join(' ')}
                </span>
              </h3>
              
              <p className="text-gray-200 text-[10px] md:text-lg lg:text-xl leading-relaxed mb-4 md:mb-10 drop-shadow-lg font-medium opacity-90 max-w-2xl line-clamp-2 md:line-clamp-none">
                {activeChar.description}
              </p>
              
              <div className="flex gap-2 md:gap-6">
                <button 
                  onClick={() => setModalContent('bio')}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 md:gap-4 bg-white text-black px-4 md:px-8 py-2 md:py-4 rounded-full font-black tracking-widest text-[8px] md:text-[10px] hover:bg-rose-600 hover:text-white transition-all duration-300 shadow-xl"
                >
                  EXPAND <span className="hidden sm:inline">BIOGRAPHY</span>
                  <span className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-white/20 transition-colors">→</span>
                </button>
                <button 
                  onClick={() => setModalContent('missions')}
                  className="flex-1 sm:flex-none px-4 md:px-8 py-2 md:py-4 rounded-full border border-white/20 text-white font-black tracking-widest text-[8px] md:text-[10px] hover:bg-white/10 transition-all shadow-xl"
                >
                  MISSIONS
                </button>
              </div>
            </div>

            <div className="absolute top-4 right-4 md:top-10 md:right-10 hidden md:flex flex-col items-end gap-2 opacity-50">
              <div className="text-[9px] font-mono text-white/40 uppercase">Multiverse-ID: {activeChar.id.toUpperCase()}</div>
              <div className="w-16 h-[1px] bg-white/20 mt-1" />
            </div>
          </div>
        </div>
      </div>

      {/* Spider-HUD Modal */}
      {modalContent && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-xl animate-in fade-in duration-300">
          <div className="w-full max-w-4xl bg-zinc-950 border border-white/10 rounded-[2rem] md:rounded-[3.5rem] overflow-hidden relative shadow-[0_0_100px_rgba(225,29,72,0.2)] flex flex-col h-full max-h-[90vh]">
            {/* Modal Header */}
            <div className="bg-zinc-900/50 border-b border-white/5 px-8 md:px-12 py-6 md:py-8 flex items-center justify-between shrink-0">
              <div>
                <span className="text-rose-500 font-black tracking-[0.3em] text-[8px] md:text-[10px] block mb-1 uppercase">Spider-HUD System v2.0</span>
                <h4 className="text-xl md:text-3xl font-oswald font-black text-white uppercase tracking-tight">
                  {selectedMission 
                    ? `TACTICAL REPORT: ${selectedMission.title}`
                    : modalContent === 'bio' 
                      ? `BIOGRAPHY: ${activeChar.name}` 
                      : `MISSION LOG: ${activeChar.name}`}
                </h4>
              </div>
              <div className="flex gap-4">
                {selectedMission && (
                  <button 
                    onClick={() => setSelectedMission(null)}
                    className="hidden sm:flex items-center gap-2 text-[10px] font-black tracking-widest text-rose-500 hover:text-white transition-colors"
                  >
                    ← BACK TO LOG
                  </button>
                )}
                <button 
                  onClick={closeModal}
                  className="w-10 h-10 md:w-14 md:h-14 bg-white/5 hover:bg-rose-600/20 rounded-full flex items-center justify-center text-white text-xl md:text-2xl transition-all hover:rotate-90"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto no-scrollbar p-8 md:p-12">
              {modalContent === 'bio' ? (
                <div className="space-y-6 md:space-y-8 animate-in slide-in-from-bottom-4 duration-500">
                   <div className="flex flex-col md:flex-row gap-8 items-start">
                     <div className="w-full md:w-1/3 aspect-[4/5] rounded-2xl overflow-hidden shrink-0 border border-white/10 shadow-2xl">
                       <img src={activeChar.image} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt={activeChar.name} />
                     </div>
                     <div className="space-y-4 md:space-y-6">
                        <div className="flex gap-4">
                           <div className="bg-rose-600/10 border border-rose-500/20 px-3 py-1 rounded-full">
                              <span className="text-rose-500 text-[10px] font-black tracking-widest uppercase">Class: HERO</span>
                           </div>
                           <div className="bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                              <span className="text-gray-400 text-[10px] font-black tracking-widest uppercase">ID: {activeChar.id}</span>
                           </div>
                        </div>
                        <p className="text-gray-300 text-sm md:text-lg leading-relaxed font-medium">
                          {activeChar.biography}
                        </p>
                        <div className="p-4 md:p-6 bg-rose-600/5 border border-rose-500/10 rounded-2xl">
                          <span className="text-rose-500 text-[10px] font-black tracking-widest uppercase block mb-2">Subject Notes</span>
                          <p className="text-gray-400 text-xs md:text-sm italic">
                            Highly reactive spider-sense. Proportional strength verified. Emotional resilience exceeds average thresholds.
                          </p>
                        </div>
                     </div>
                   </div>
                </div>
              ) : selectedMission ? (
                /* Deep Dive Mission Detail View */
                <div className="animate-in slide-in-from-right-8 duration-500 space-y-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="bg-zinc-900/50 p-6 rounded-3xl border border-white/5">
                        <span className="text-[10px] font-black text-rose-500 tracking-widest uppercase block mb-4">Tactical Summary</span>
                        <p className="text-gray-300 text-lg leading-relaxed">{selectedMission.tacticalData || 'No tactical data available for this sector.'}</p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-zinc-900/50 p-6 rounded-3xl border border-white/5">
                          <span className="text-[10px] font-black text-gray-500 tracking-widest uppercase block mb-2">Location</span>
                          <p className="text-white font-bold">{selectedMission.location || 'Unknown Coordinates'}</p>
                        </div>
                        <div className="bg-zinc-900/50 p-6 rounded-3xl border border-white/5">
                          <span className="text-[10px] font-black text-gray-500 tracking-widest uppercase block mb-2">Status</span>
                          <p className={`${selectedMission.status === 'COMPLETED' ? 'text-green-500' : 'text-rose-500'} font-bold`}>{selectedMission.status}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-zinc-900/50 p-6 rounded-3xl border border-white/5 relative overflow-hidden h-full min-h-[250px] flex flex-col justify-center items-center">
                         {/* Mock Map View */}
                         <div className="absolute inset-0 opacity-20 pointer-events-none">
                            <div className="absolute inset-0 bg-[radial-gradient(#e11d48_1px,transparent_1px)] [background-size:24px_24px]" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-rose-500/50 rounded-full animate-ping" />
                         </div>
                         <span className="relative z-10 text-[10px] font-black text-rose-500 tracking-[0.5em] uppercase mb-4 animate-pulse">Scanning Grid...</span>
                         <div className="relative z-10 text-center">
                           <p className="text-white font-mono text-xs opacity-50">LAT: 40.7128° N</p>
                           <p className="text-white font-mono text-xs opacity-50">LONG: 74.0060° W</p>
                         </div>
                         
                         <div className="mt-8 w-full space-y-2 px-4">
                            <div className="flex justify-between text-[10px] font-black text-gray-500 tracking-widest">
                               <span>DANGER LEVEL</span>
                               <span>{selectedMission.dangerLevel}/10</span>
                            </div>
                            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                               <div className="h-full bg-rose-500" style={{ width: `${(selectedMission.dangerLevel || 1) * 10}%` }} />
                            </div>
                         </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center sm:hidden pt-4">
                    <button 
                      onClick={() => setSelectedMission(null)}
                      className="bg-white/5 border border-white/10 px-8 py-4 rounded-full text-white font-black text-[10px] tracking-widest"
                    >
                      RETURN TO LOG
                    </button>
                  </div>
                </div>
              ) : (
                /* Mission List View */
                <div className="space-y-4 md:space-y-6 animate-in slide-in-from-bottom-4 duration-500">
                  {activeChar.missions.map((mission, i) => (
                    <div 
                      key={i} 
                      onClick={() => setSelectedMission(mission)}
                      className="group cursor-pointer bg-zinc-900/40 border border-white/5 hover:border-rose-500/30 p-4 md:p-8 rounded-2xl md:rounded-[2rem] transition-all flex items-center gap-4 md:gap-8 active:scale-[0.98]"
                    >
                      <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center shrink-0 border ${
                        mission.status === 'COMPLETED' ? 'bg-green-500/10 border-green-500/20 text-green-500' :
                        mission.status === 'ACTIVE' ? 'bg-rose-500/10 border-rose-500/20 text-rose-500 animate-pulse' :
                        'bg-zinc-800 border-white/10 text-gray-500'
                      }`}>
                        {mission.status === 'COMPLETED' ? '✓' : mission.status === 'ACTIVE' ? '◈' : '○'}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                           <h5 className="text-white font-black text-sm md:text-xl tracking-tight uppercase">{mission.title}</h5>
                           <span className={`text-[8px] md:text-[10px] font-black tracking-widest px-2 py-0.5 rounded-full border ${
                             mission.status === 'COMPLETED' ? 'border-green-500/20 text-green-500' :
                             mission.status === 'ACTIVE' ? 'border-rose-500/20 text-rose-500' :
                             'border-white/10 text-gray-500'
                           }`}>{mission.status}</span>
                        </div>
                        <p className="text-gray-500 text-xs md:text-sm leading-relaxed line-clamp-1">{mission.description}</p>
                      </div>
                      <div className="hidden md:block opacity-40 group-hover:opacity-100 transition-opacity">
                         <button className="text-[10px] font-black text-rose-500 tracking-widest">DETAILS →</button>
                      </div>
                    </div>
                  ))}
                  <div className="pt-8 text-center">
                    <p className="text-gray-600 text-[10px] font-black tracking-[0.3em] uppercase">End of Mission Log</p>
                  </div>
                </div>
              )}
            </div>
            
            {/* Modal Footer (only for mission detail) */}
            {selectedMission && (
              <div className="bg-zinc-900/30 border-t border-white/5 px-8 py-4 flex justify-center shrink-0">
                 <p className="text-[8px] font-mono text-rose-500/40 uppercase tracking-widest">AUTHORIZED ACCESS ONLY - ENCRYPTED CHANNEL</p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default CharacterSection;
