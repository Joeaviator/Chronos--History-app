import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useApp } from './Layout';
import { cn } from '../lib/utils';
import { HISTORY_EVENTS, ERAS } from '../constants';
import { HistoryEvent, TimelinePeriod, Era } from '../types';
import { Info, MapPin, X, Sparkles, ChevronLeft, ChevronRight, Clock, Rocket, MessageSquare, Sword, Home, History } from 'lucide-react';

export const HistoryMode: React.FC = () => {
  const { theme, setMode } = useApp();
  const [selectedEra, setSelectedEra] = useState<Era | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<HistoryEvent | null>(null);
  const [activeFact, setActiveFact] = useState<{ label: string; fact: string } | null>(null);
  const [randomFact, setRandomFact] = useState<string | null>(null);
  const [factIndex, setFactIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Random Fact Pop-up System
  useEffect(() => {
    const showRandomFact = () => {
      const pool = selectedEra 
        ? [...selectedEra.facts.dailyLife, ...selectedEra.facts.events, ...selectedEra.facts.innovations, ...selectedEra.facts.funFacts]
        : HISTORY_EVENTS.flatMap(e => e.didYouKnow);
      
      const random = pool[Math.floor(Math.random() * pool.length)];
      setRandomFact(random);
      setTimeout(() => setRandomFact(null), 6000);
    };

    const interval = setInterval(showRandomFact, 30000);
    const initialTimeout = setTimeout(showRandomFact, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(initialTimeout);
    };
  }, [selectedEra]);

  // If an event is selected (from "Explore" button)
  if (selectedEvent) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
        className="h-[calc(100vh-160px)] flex flex-col relative pb-32"
      >
        {/* Immersive Scene Header */}
        <div className="relative h-[500px] w-full overflow-hidden">
          <motion.img 
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
            src={selectedEvent.imageUrl} 
            alt={selectedEvent.title} 
            className="w-full h-full object-cover opacity-60 visual-style"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={() => setSelectedEvent(null)}
              className={cn(
                "absolute top-10 left-10 p-4 rounded-2xl transition-all z-50",
                theme === 'futuristic' ? "hologram-panel text-white hover:bg-cyan-500/20" : "temple-panel text-amber-100 hover:bg-amber-900/40"
              )}
            >
              <ChevronLeft size={24} />
            </motion.button>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className={cn(
                  "px-4 py-1 rounded-full text-[10px] font-bold tracking-[0.3em] uppercase",
                  theme === 'futuristic' ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30" : "bg-amber-900/40 text-amber-500 border border-amber-800/30"
                )}>
                  {selectedEvent.period}
                </span>
                <span className="text-white/40 font-mono text-sm">{selectedEvent.year}</span>
              </div>
              <h2 className={cn(
                "text-6xl md:text-9xl font-black tracking-tighter leading-none",
                theme === 'futuristic' ? "text-white" : "text-amber-100 font-serif italic"
              )}>
                {selectedEvent.title}
              </h2>
            </motion.div>
          </div>

          {/* Continuous Fact Ticker */}
          <div className="absolute bottom-0 left-0 w-full p-4 bg-black/40 backdrop-blur-md border-t border-white/5">
            <div className="max-w-4xl mx-auto flex items-center gap-6">
              <div className={cn(
                "p-2 rounded-lg shrink-0",
                theme === 'futuristic' ? "bg-cyan-500 text-black" : "bg-amber-600 text-white"
              )}>
                <Sparkles size={20} />
              </div>
              <div className="flex-1 overflow-hidden h-6 relative">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={factIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    className={cn(
                      "text-sm font-bold tracking-wide absolute inset-0",
                      theme === 'futuristic' ? "text-cyan-400" : "text-amber-200"
                    )}
                  >
                    DID YOU KNOW? {selectedEvent.didYouKnow[factIndex] || "History is full of surprises!"}
                  </motion.p>
                </AnimatePresence>
              </div>
              <button
                onClick={() => setFactIndex(prev => (prev + 1) % (selectedEvent.didYouKnow.length || 1))}
                className={cn(
                  "p-2 rounded-lg transition-all",
                  theme === 'futuristic' ? "hover:bg-cyan-500/20 text-cyan-400" : "hover:bg-amber-900/40 text-amber-500"
                )}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Elements Grid */}
        <div className="max-w-6xl mx-auto w-full p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {selectedEvent.interactiveElements.map((point, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              onClick={() => setActiveFact({ label: point.label, fact: point.fact })}
              className={cn(
                "p-8 text-left transition-all group relative overflow-hidden",
                theme === 'futuristic' ? "hologram-panel" : "temple-panel"
              )}
            >
              <div className={cn(
                "mb-6 p-4 rounded-2xl w-fit",
                theme === 'futuristic' ? "bg-cyan-500/20 text-cyan-400 neon-glow" : "bg-amber-800/20 text-amber-500 torch-glow"
              )}>
                <Info size={28} />
              </div>
              <h4 className={cn(
                "text-2xl font-black mb-2",
                theme === 'futuristic' ? "text-white" : "text-amber-100 font-serif"
              )}>
                {point.label}
              </h4>
              <div className={cn(
                "w-12 h-1 mb-4 transition-all duration-500 group-hover:w-full",
                theme === 'futuristic' ? "bg-cyan-500" : "bg-amber-600"
              )} />
              <p className={cn(
                "text-sm opacity-60",
                theme === 'futuristic' ? "text-cyan-100 font-mono" : "text-amber-200"
              )}>
                Analyze this historical detail.
              </p>
            </motion.button>
          ))}
        </div>

        {/* Detail Popup */}
        <AnimatePresence>
          {activeFact && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className={cn(
                  "max-w-2xl w-full p-12 rounded-3xl relative overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)]",
                  theme === 'futuristic' ? "hologram-panel" : "temple-panel"
                )}
              >
                <button 
                  onClick={() => setActiveFact(null)}
                  className="absolute top-8 right-8 p-3 rounded-xl hover:bg-white/10 transition-all"
                >
                  <X size={24} />
                </button>
                
                <div className={cn(
                  "mb-8 p-6 rounded-3xl w-fit",
                  theme === 'futuristic' ? "bg-cyan-500/20 text-cyan-400 neon-glow" : "bg-amber-800/20 text-amber-500 torch-glow"
                )}>
                  <Sparkles size={40} />
                </div>

                <h3 className={cn(
                  "text-4xl font-black mb-6",
                  theme === 'futuristic' ? "text-white" : "text-amber-100 font-serif italic"
                )}>
                  {activeFact.label}
                </h3>
                
                <p className={cn(
                  "text-xl leading-relaxed mb-8",
                  theme === 'futuristic' ? "text-cyan-100 font-mono" : "text-amber-200"
                )}>
                  {activeFact.fact}
                </p>

                <div className={cn(
                  "p-6 rounded-2xl flex items-center gap-4",
                  theme === 'futuristic' ? "bg-cyan-500/10 border border-cyan-500/30" : "bg-amber-900/20 border border-amber-800/30"
                )}>
                  <Info size={24} className={theme === 'futuristic' ? "text-cyan-400" : "text-amber-500"} />
                  <p className="text-sm font-bold uppercase tracking-widest">
                    {theme === 'futuristic' ? "Fact Verified" : "Ancient Wisdom Unlocked"}
                  </p>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  }

  // If an Era is selected (Main Era Page)
  if (selectedEra) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 1.5, filter: 'blur(20px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        exit={{ opacity: 0, scale: 0.8, filter: 'blur(20px)' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="h-full flex flex-col overflow-y-auto no-scrollbar bg-black relative"
      >
        {/* Portal Effect on Entry */}
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 2 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className={cn(
            "fixed inset-0 z-[100] pointer-events-none flex items-center justify-center",
            theme === 'futuristic' ? "text-cyan-400" : "text-amber-500"
          )}
        >
          <div className={cn(
            "w-full h-full",
            theme === 'futuristic' ? "portal-vortex" : "ancient-portal"
          )} />
        </motion.div>

        {/* Hero Section */}
        <div className="relative h-[80vh] w-full shrink-0 overflow-hidden">
          <motion.img 
            initial={{ scale: 1.3 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src={selectedEra.heroImage} 
            alt={selectedEra.title} 
            className="w-full h-full object-cover visual-style opacity-70"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              onClick={() => setSelectedEra(null)}
              className={cn(
                "absolute top-10 left-10 flex items-center gap-2 px-6 py-3 rounded-2xl transition-all z-50",
                theme === 'futuristic' ? "hologram-panel text-white hover:bg-cyan-500/20" : "temple-panel text-amber-100 hover:bg-amber-900/40"
              )}
            >
              <ChevronLeft size={20} />
              <span className="text-sm font-bold uppercase tracking-widest">Back to Timeline</span>
            </motion.button>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="max-w-4xl"
            >
              <p className={cn(
                "text-sm font-bold uppercase tracking-[0.5em] mb-4",
                theme === 'futuristic' ? "text-cyan-400" : "text-amber-500"
              )}>
                {selectedEra.yearRange}
              </p>
              <h1 className={cn(
                "text-7xl md:text-9xl font-black tracking-tighter mb-6",
                theme === 'futuristic' ? "text-white" : "text-amber-100 font-serif italic"
              )}>
                {selectedEra.title}
              </h1>
              <p className={cn(
                "text-xl md:text-2xl opacity-80 max-w-2xl mx-auto leading-relaxed",
                theme === 'futuristic' ? "text-cyan-100 font-mono" : "text-amber-200 italic"
              )}>
                {selectedEra.description}
              </p>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute bottom-10 flex flex-col items-center gap-2 opacity-40"
            >
              <span className="text-[10px] font-bold uppercase tracking-widest">Scroll to Explore</span>
              <div className={cn("w-px h-12", theme === 'futuristic' ? "bg-cyan-500" : "bg-amber-600")} />
            </motion.div>
          </div>
        </div>

        {/* Era Content Body */}
        <div className="max-w-7xl mx-auto w-full px-6 py-20 space-y-32 relative">
          {/* Ambient Dust for Ancient Theme */}
          {theme === 'ancient' && (
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[...Array(20)].map((_, i) => (
                <div 
                  key={i} 
                  className="dust-particle" 
                  style={{ 
                    left: Math.random() * 100 + '%', 
                    top: Math.random() * 100 + '%',
                    animationDelay: Math.random() * 5 + 's'
                  }} 
                />
              ))}
            </div>
          )}

          {/* Visual Gallery Section */}
          <section>
            <div className="flex items-center gap-4 mb-12">
              <div className={cn("h-px flex-1", theme === 'futuristic' ? "bg-cyan-500/30" : "bg-amber-900/30")} />
              <h2 className={cn(
                "text-3xl font-black uppercase tracking-widest",
                theme === 'futuristic' ? "text-cyan-400" : "text-amber-500"
              )}>
                Visual Archive
              </h2>
              <div className={cn("h-px flex-1", theme === 'futuristic' ? "bg-cyan-500/30" : "bg-amber-900/30")} />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {selectedEra.gallery.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="group relative aspect-video rounded-3xl overflow-hidden cursor-pointer"
                >
                  <img 
                    src={img.url} 
                    alt={img.caption} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <p className="text-white font-bold text-sm tracking-wide">{img.caption}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Fact Sections Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <FactCategory 
              title="Daily Life" 
              facts={selectedEra.facts.dailyLife} 
              icon={<Home size={24} />} 
              theme={theme} 
            />
            <FactCategory 
              title="Major Events" 
              facts={selectedEra.facts.events} 
              icon={<History size={24} />} 
              theme={theme} 
            />
            <FactCategory 
              title="Innovations" 
              facts={selectedEra.facts.innovations} 
              icon={<Rocket size={24} />} 
              theme={theme} 
            />
            <FactCategory 
              title="Fun Facts" 
              facts={selectedEra.facts.funFacts} 
              icon={<Sparkles size={24} />} 
              theme={theme} 
            />
          </section>

          {/* Interactive Options Bar */}
          <section className={cn(
            "p-12 rounded-[40px] flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden",
            theme === 'futuristic' ? "hologram-panel" : "temple-panel"
          )}>
            {/* Background Detail */}
            {theme === 'ancient' ? (
              <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stone-wall.png')]" />
            ) : (
              <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px]" />
            )}

            <div className="text-center md:text-left relative z-10">
              <h3 className={cn(
                "text-3xl font-black mb-2",
                theme === 'futuristic' ? "text-white" : "text-amber-100 font-serif"
              )}>
                Ready to dive deeper?
              </h3>
              <p className="opacity-60">Choose your next historical destination.</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 relative z-10">
              <EraActionButton 
                icon={<MapPin size={24} />} 
                label="Explore" 
                onClick={() => {
                  const event = HISTORY_EVENTS.find(e => e.period === selectedEra.title);
                  if (event) setSelectedEvent(event);
                }}
                theme={theme}
              />
              <EraActionButton 
                icon={<MessageSquare size={24} />} 
                label="Comm-Link" 
                onClick={() => setMode('talk')}
                theme={theme}
              />
              <EraActionButton 
                icon={<Sword size={24} />} 
                label="Start Mission" 
                onClick={() => {}}
                disabled
                theme={theme}
              />
            </div>
          </section>
        </div>

        {/* Random Fact Pop-up Notification */}
        <AnimatePresence>
          {randomFact && (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              className={cn(
                "fixed bottom-10 right-8 z-[110] max-w-sm p-6 rounded-2xl shadow-2xl border-l-4",
                theme === 'futuristic' 
                  ? "hologram-panel border-cyan-500 text-white" 
                  : "temple-panel border-amber-600 text-amber-100"
              )}
            >
              <div className="flex items-start gap-4">
                <div className={cn(
                  "p-2 rounded-lg shrink-0",
                  theme === 'futuristic' ? "bg-cyan-500/20 text-cyan-400" : "bg-amber-600/20 text-amber-500"
                )}>
                  <Sparkles size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-black mb-2 opacity-60">
                    Did you know?
                  </p>
                  <p className="text-sm leading-relaxed font-medium">
                    {randomFact}
                  </p>
                </div>
                <button 
                  onClick={() => setRandomFact(null)}
                  className="opacity-40 hover:opacity-100 transition-opacity"
                >
                  <X size={16} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer Padding */}
        <div className="h-32 shrink-0" />
      </motion.div>
    );
  }

  return (
    <div className="h-full flex flex-col overflow-hidden relative">
      {/* Timeline Header */}
      <div className="p-12 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={cn(
            "text-5xl md:text-7xl font-black mb-4 tracking-tighter",
            theme === 'futuristic' ? "text-white" : "text-amber-100 font-serif italic"
          )}
        >
          {theme === 'futuristic' ? "Chronos Timeline" : "The Great Scroll of Time"}
        </motion.h2>
        <p className={cn(
          "text-xl opacity-60 max-w-2xl mx-auto",
          theme === 'futuristic' ? "text-cyan-100 font-mono" : "text-amber-200"
        )}>
          Scroll through the ages to explore the pivotal eras of human history.
        </p>
      </div>

      {/* Horizontal Timeline */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-x-auto overflow-y-hidden no-scrollbar flex items-center px-[20vw] relative"
      >
        {/* Connecting Line */}
        <div className={cn(
          "absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2 z-0",
          theme === 'futuristic' ? "bg-gradient-to-r from-transparent via-cyan-500 to-transparent neon-glow" : "bg-gradient-to-r from-transparent via-amber-900/40 to-transparent border-y border-amber-800/20"
        )} />

        <div className="flex gap-32 items-center relative z-10 py-20">
          {ERAS.map((era, i) => (
            <TimelineNode 
              key={era.id} 
              era={era} 
              index={i}
              isActive={selectedEra?.id === era.id}
              onClick={() => setSelectedEra(era)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const FactCategory: React.FC<{ title: string; facts: string[]; icon: React.ReactNode; theme: string }> = ({ title, facts, icon, theme }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={cn(
      "p-10 rounded-[32px] relative overflow-hidden",
      theme === 'futuristic' ? "hologram-panel" : "temple-panel"
    )}
  >
    <div className="flex items-center gap-4 mb-8">
      <div className={cn(
        "p-3 rounded-xl",
        theme === 'futuristic' ? "bg-cyan-500/20 text-cyan-400" : "bg-amber-800/20 text-amber-500"
      )}>
        {icon}
      </div>
      <h3 className={cn(
        "text-2xl font-black uppercase tracking-widest",
        theme === 'futuristic' ? "text-white" : "text-amber-100 font-serif"
      )}>
        {title}
      </h3>
    </div>
    <ul className="space-y-4">
      {facts.map((fact, i) => (
        <li key={i} className="flex gap-4">
          <div className={cn("w-1.5 h-1.5 rounded-full mt-2 shrink-0", theme === 'futuristic' ? "bg-cyan-500" : "bg-amber-600")} />
          <p className={cn(
            "text-base opacity-70",
            theme === 'futuristic' ? "text-cyan-100 font-mono" : "text-amber-200"
          )}>
            {fact}
          </p>
        </li>
      ))}
    </ul>
  </motion.div>
);

const EraActionButton: React.FC<{ icon: React.ReactNode; label: string; onClick: () => void; disabled?: boolean; theme: string }> = ({ icon, label, onClick, disabled, theme }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={cn(
      "flex items-center gap-3 px-8 py-4 rounded-2xl transition-all font-black uppercase tracking-widest text-sm",
      disabled ? "opacity-20 cursor-not-allowed" : "hover:scale-105 active:scale-95",
      theme === 'futuristic' 
        ? "bg-cyan-500 text-black neon-glow hover:bg-cyan-400" 
        : "bg-amber-600 text-white shadow-lg hover:bg-amber-500"
    )}
  >
    {icon}
    {label}
  </button>
);

const TimelineNode: React.FC<{ 
  era: Era; 
  index: number; 
  isActive: boolean; 
  onClick: () => void;
}> = ({ era, index, isActive, onClick }) => {
  const { theme } = useApp();
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      className="relative flex flex-col items-center"
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onClick}
        className={cn(
          "w-24 h-24 rounded-full flex items-center justify-center relative z-10 transition-all duration-500",
          isActive 
            ? (theme === 'futuristic' ? "bg-cyan-500 text-black neon-glow scale-125" : "bg-amber-600 text-white shadow-2xl scale-125")
            : (theme === 'futuristic' ? "bg-black border-2 border-cyan-500/30 text-cyan-400 hover:border-cyan-500" : "bg-[#1a140e] border-4 border-amber-900/40 text-amber-500 hover:border-amber-700")
        )}
      >
        <span className="text-xs font-black tracking-tighter uppercase text-center px-2">
          {era.title.split(' ')[0]}
        </span>
        
        {isActive && (
          <motion.div
            layoutId="you-are-here"
            className="absolute -top-12 flex flex-col items-center"
          >
            <span className={cn(
              "text-[8px] font-bold uppercase tracking-widest mb-1",
              theme === 'futuristic' ? "text-cyan-400" : "text-amber-500"
            )}>
              You Are Here
            </span>
            <div className={cn(
              "w-1 h-4",
              theme === 'futuristic' ? "bg-cyan-500" : "bg-amber-600"
            )} />
          </motion.div>
        )}

        {theme === 'futuristic' ? (
          <div className="absolute inset-0 rounded-full border border-cyan-500/10 animate-ping" style={{ animationDuration: '3s' }} />
        ) : (
          <div className="absolute inset-0 rounded-full border-2 border-amber-900/20 carved-border opacity-40" />
        )}
      </motion.button>

      <div className="absolute top-32 whitespace-nowrap text-center">
        <p className={cn(
          "text-[10px] font-bold uppercase tracking-[0.3em]",
          isActive ? "opacity-100" : "opacity-40",
          theme === 'futuristic' ? "text-cyan-400" : "text-amber-200"
        )}>
          {era.yearRange}
        </p>
      </div>
    </motion.div>
  );
};

