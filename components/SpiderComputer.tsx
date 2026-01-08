
import React, { useState } from 'react';
import { getSpiderAdvice } from '../services/geminiService';

const SpiderComputer: React.FC = () => {
  const [situation, setSituation] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<{ advice: string; quip: string } | null>(null);

  const handleAnalyze = async () => {
    if (!situation.trim()) return;
    setLoading(true);
    const result = await getSpiderAdvice(situation);
    setResponse(result);
    setLoading(false);
  };

  return (
    <section id="ai" className="min-h-screen flex items-center px-4 md:px-24 bg-black relative py-20">
      <div className="max-w-4xl mx-auto w-full border border-rose-500/20 rounded-2xl md:rounded-3xl overflow-hidden bg-zinc-950 shadow-[0_0_100px_rgba(225,29,72,0.05)]">
        {/* Terminal Header */}
        <div className="bg-zinc-900 px-4 md:px-8 py-3 md:py-4 flex items-center justify-between border-b border-rose-500/10">
          <div className="flex gap-1.5 md:gap-2">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-rose-500/40" />
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-zinc-700" />
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-zinc-700" />
          </div>
          <span className="text-[7px] md:text-[9px] font-black tracking-widest text-rose-500 uppercase">SPIDER-SYSTEM V4.2</span>
        </div>

        <div className="p-6 md:p-12 space-y-6 md:space-y-8">
          <div className="text-center space-y-2 md:space-y-3">
            <h2 className="text-2xl md:text-4xl font-oswald font-black text-white uppercase">MISSION ANALYZER</h2>
            <p className="text-gray-400 text-[10px] md:text-sm">Real-time tactical network diagnostics</p>
          </div>

          <div className="relative group">
            <input 
              type="text"
              value={situation}
              onChange={(e) => setSituation(e.target.value)}
              placeholder="What's the situation?"
              className="w-full bg-black/40 border border-white/10 rounded-xl md:rounded-2xl px-4 md:px-6 py-4 md:py-5 text-white placeholder:text-gray-600 focus:outline-none focus:border-rose-500/50 transition-all text-sm md:text-lg pr-24 md:pr-32"
              onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()}
            />
            <button 
              onClick={handleAnalyze}
              disabled={loading}
              className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 bg-rose-600 hover:bg-rose-500 disabled:bg-rose-900 text-white font-black px-4 md:px-6 py-2 md:py-2.5 rounded-lg md:rounded-xl transition-all shadow-lg text-[10px] md:text-xs"
            >
              {loading ? 'WAIT...' : 'RUN'}
            </button>
          </div>

          {response && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="bg-zinc-900/50 border border-rose-500/10 p-4 md:p-6 rounded-xl md:rounded-2xl">
                <span className="text-[7px] md:text-[9px] font-black text-rose-500 tracking-widest block mb-2 md:mb-3 uppercase">Tactical Advice</span>
                <p className="text-gray-200 text-xs md:text-base leading-relaxed italic">"{response.advice}"</p>
              </div>
              <div className="bg-zinc-900/50 border border-blue-500/10 p-4 md:p-6 rounded-xl md:rounded-2xl">
                <span className="text-[7px] md:text-[9px] font-black text-blue-500 tracking-widest block mb-2 md:mb-3 uppercase">Spider-Quip</span>
                <p className="text-gray-200 text-xs md:text-base leading-relaxed italic">"{response.quip}"</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SpiderComputer;
