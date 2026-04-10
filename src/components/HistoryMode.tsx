import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useApp } from './Layout';
import { cn } from '../lib/utils';
import { HISTORY_EVENTS } from '../constants';
import { HistoryEvent, TimelinePeriod } from '../types';
import { Info, MapPin, X, Sparkles, ChevronLeft, ChevronRight, Clock } from 'lucide-react';

const PERIODS: TimelinePeriod[] = [
  'Stone Age', 
  'Ancient Civilizations', 
  'Classical Era', 
  'Medieval Period', 
  'Early Modern Period', 
  'Modern History', 
  'Contemporary'
];

export const HistoryMode: React.FC = () => {
  const { theme } = useApp();
  const [selectedEvent, setSelectedEvent] = useState<HistoryEvent | null>(null);
  const [activeFact, setActiveFact] = useState<{ label: string; fact: string } | null>(null);
  const [selectedPeriod, setSelectedPeriod] = useState<TimelinePeriod | 'All'>('All');
  const [factIndex, setFactIndex] = useState(0);

  const filteredEvents = selectedPeriod === 'All' 
    ? HISTORY_EVENTS 
    : HISTORY_EVENTS.filter(e => e.period === selectedPeriod);

  // Cycle through "Did You Know" facts when an event is selected
  useEffect(() => {
    if (selectedEvent) {
      const interval = setInterval(() => {
        setFactIndex(prev => (prev + 1) % selectedEvent.didYouKnow.length);
      }, 8000);
      return () => clearInterval(interval);
    }
  }, [selectedEvent]);

  if (!selectedEvent) {
    return (
      <div className="p-8 max-w-6xl mx-auto pb-32">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn(
              "text-5xl md:text-7xl font-black mb-4 tracking-tighter",
              theme === 'futuristic' ? "text-white" : "text-amber-100 font-serif italic"
            )}
          >
            {theme === 'futuristic' ? "Timeline Navigator" : "The Chronicles of Time"}
          </motion.h2>
          <p className={cn(
            "text-xl opacity-60 max-w-2xl mx-auto",
            theme === 'futuristic' ? "text-cyan-100 font-mono" : "text-amber-200"
          )}>
            Filter by era to explore the pivotal moments that shaped our world.
          </p>
        </div>

        {/* Period Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setSelectedPeriod('All')}
            className={cn(
              "px-6 py-3 rounded-full text-sm font-bold transition-all",
              selectedPeriod === 'All'
                ? (theme === 'futuristic' ? "bg-cyan-500 text-black" : "bg-amber-600 text-white")
                : (theme === 'futuristic' ? "bg-white/5 text-white hover:bg-white/10" : "bg-amber-900/20 text-amber-200 hover:bg-amber-900/40")
            )}
          >
            All Eras
          </button>
          {PERIODS.map(period => (
            <button
              key={period}
              onClick={() => setSelectedPeriod(period)}
              className={cn(
                "px-6 py-3 rounded-full text-sm font-bold transition-all",
                selectedPeriod === period
                  ? (theme === 'futuristic' ? "bg-cyan-500 text-black" : "bg-amber-600 text-white")
                  : (theme === 'futuristic' ? "bg-white/5 text-white hover:bg-white/10" : "bg-amber-900/20 text-amber-200 hover:bg-amber-900/40")
              )}
            >
              {period}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredEvents.map((event, i) => (
              <motion.button
                key={event.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.02, y: -10 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedEvent(event)}
                className={cn(
                  "group relative h-96 rounded-3xl overflow-hidden transition-all duration-500",
                  theme === 'futuristic' ? "hologram-panel" : "temple-panel"
                )}
              >
                <img 
                  src={event.imageUrl} 
                  alt={event.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-1000 visual-style" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                
                <div className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/10">
                  <Clock size={14} className={theme === 'futuristic' ? "text-cyan-400" : "text-amber-500"} />
                  <span className="text-xs font-bold tracking-widest">{event.year}</span>
                </div>

                <div className="absolute bottom-0 left-0 p-10 text-left">
                  <p className={cn(
                    "text-[10px] uppercase tracking-[0.4em] mb-2 font-bold",
                    theme === 'futuristic' ? "text-cyan-400" : "text-amber-500"
                  )}>
                    {event.period}
                  </p>
                  <h3 className={cn(
                    "text-4xl font-black mb-4",
                    theme === 'futuristic' ? "text-white" : "text-amber-100 font-serif italic"
                  )}>
                    {event.title}
                  </h3>
                  <p className={cn(
                    "text-base max-w-md opacity-70",
                    theme === 'futuristic' ? "text-cyan-100 font-mono" : "text-amber-200"
                  )}>
                    {event.description}
                  </p>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </div>
    );
  }

  return (
    <div className="h-[calc(100vh-160px)] flex flex-col relative pb-32">
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
                  DID YOU KNOW? {selectedEvent.didYouKnow[factIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
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
    </div>
  );
};

