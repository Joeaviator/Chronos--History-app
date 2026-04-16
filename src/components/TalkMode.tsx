import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useApp } from './Layout';
import { cn } from '../lib/utils';
import { HISTORICAL_FIGURES } from '../constants';
import { HistoricalFigure, TimelinePeriod, FigureCategory } from '../types';
import { getHistoricalResponse } from '../services/gemini';
import { Send, User, Bot, ArrowLeft, Sparkles, Brain, Shield, Heart, Zap } from 'lucide-react';

const CATEGORIES: FigureCategory[] = ['Leader', 'Scientist', 'Thinker', 'Explorer', 'Artist', 'Warrior'];

import { db, doc, updateDoc, increment } from '../firebase';

export const TalkMode: React.FC = () => {
  const { theme, user } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<FigureCategory | 'All'>('All');
  const [activeFigureId, setActiveFigureId] = useState<string | null>(null);
  const [isSelectionOpen, setIsSelectionOpen] = useState(true);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string; senderName: string; avatar: string }[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentStatus, setCurrentStatus] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredFigures = selectedCategory === 'All' 
    ? HISTORICAL_FIGURES 
    : HISTORICAL_FIGURES.filter(f => f.category === selectedCategory);
    
  const activeFigure = HISTORICAL_FIGURES.find(f => f.id === activeFigureId);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // Dynamic Status System
  useEffect(() => {
    if (!activeFigure) return;
    
    const updateStatus = () => {
      const statuses = activeFigure.statusMessages;
      const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
      setCurrentStatus(randomStatus);
    };

    updateStatus();
    const interval = setInterval(updateStatus, 8000);
    return () => clearInterval(interval);
  }, [activeFigureId]);

  const handleSend = async () => {
    if (!input.trim() || !activeFigure) return;

    const userMsg = input.trim();
    setInput('');
    const newUserMessage = { 
      role: 'user' as const, 
      text: userMsg, 
      senderName: 'You', 
      avatar: 'https://picsum.photos/seed/user/100/100' 
    };
    setMessages(prev => [...prev, newUserMessage]);
    setIsTyping(true);

    // Track forecast generated
    if (user) {
      const progressRef = doc(db, 'users', user.uid, 'progress', 'data');
      updateDoc(progressRef, {
        forecasts_generated: increment(1)
      }).catch(err => console.error("Error tracking forecast:", err));
    }

    // Format history for Gemini
    const history = messages.map(msg => ({
      role: msg.role === 'user' ? 'user' as const : 'model' as const,
      parts: [{ text: `[${msg.senderName}]: ${msg.text}` }]
    }));

    const response = await getHistoricalResponse(activeFigure.systemPrompt, userMsg, history);
    
    setIsTyping(false);
    setMessages(prev => [...prev, { 
      role: 'bot', 
      text: response, 
      senderName: activeFigure.name,
      avatar: activeFigure.avatar
    }]);
  };

  if (!activeFigureId) {
    return (
      <div className="p-8 max-w-7xl mx-auto pb-32">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className={cn(
            "text-6xl font-black mb-4 tracking-tighter",
            theme === 'futuristic' ? "text-white" : "text-amber-100 font-serif italic"
          )}>
            {theme === 'futuristic' ? "Comm-Link: Character Hub" : "The Hall of Ancestors"}
          </h2>
          <p className="text-xl opacity-60">Connect with the most influential minds across all of human history.</p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setSelectedCategory('All')}
            className={cn(
              "px-6 py-3 rounded-full text-sm font-bold transition-all",
              selectedCategory === 'All'
                ? (theme === 'futuristic' ? "bg-cyan-500 text-black" : "bg-amber-600 text-white")
                : (theme === 'futuristic' ? "bg-white/5 text-white hover:bg-white/10" : "bg-amber-900/20 text-amber-200 hover:bg-amber-900/40")
            )}
          >
            All Roles
          </button>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                "px-6 py-3 rounded-full text-sm font-bold transition-all",
                selectedCategory === cat
                  ? (theme === 'futuristic' ? "bg-cyan-500 text-black" : "bg-amber-600 text-white")
                  : (theme === 'futuristic' ? "bg-white/5 text-white hover:bg-white/10" : "bg-amber-900/20 text-amber-200 hover:bg-amber-900/40")
              )}
            >
              {cat}s
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredFigures.map((figure, i) => (
              <motion.button
                key={figure.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => {
                  setActiveFigureId(figure.id);
                  setIsSelectionOpen(false);
                  setMessages([]);
                }}
                className={cn(
                  "p-8 rounded-[40px] text-left transition-all group relative overflow-hidden flex flex-col gap-6",
                  theme === 'futuristic' ? "hologram-panel" : "temple-panel"
                )}
              >
                {/* Theme-specific Overlays */}
                {theme === 'futuristic' ? (
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-1 bg-cyan-500/20 group-hover:bg-cyan-500/60 transition-colors" />
                    <div className="absolute top-0 right-0 w-1 h-full bg-cyan-500/10" />
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-cyan-500/5" />
                    <div className="absolute top-2 left-2 text-[8px] font-mono text-cyan-500/30 uppercase tracking-tighter">Identity Verified</div>
                  </div>
                ) : (
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-2 border border-amber-900/20 rounded-[32px]" />
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 text-[10px] text-amber-500/20 rune-glow">ᚹᚺᚻ</div>
                  </div>
                )}

                <div className="flex gap-6 items-center relative z-10">
                  <img 
                    src={figure.avatar} 
                    alt={figure.name} 
                    className={cn(
                      "w-24 h-24 rounded-2xl object-cover border-2 visual-style transition-all duration-500 group-hover:scale-110",
                      theme === 'futuristic' ? "border-cyan-400/30 group-hover:border-cyan-400" : "border-amber-900/30 group-hover:border-amber-600"
                    )}
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h3 className={cn(
                      "text-3xl font-black mb-1",
                      theme === 'futuristic' ? "text-white" : "text-amber-100 font-serif"
                    )}>
                      {figure.name}
                    </h3>
                    <p className="opacity-40 text-[10px] tracking-widest uppercase font-bold">
                      {figure.category} • {figure.period}
                    </p>
                  </div>
                </div>
                
                <p className="text-sm opacity-60 line-clamp-2">
                  {figure.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {figure.personalityTraits.map(trait => (
                    <span key={trait} className={cn(
                      "px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest",
                      theme === 'futuristic' ? "bg-cyan-500/10 text-cyan-400" : "bg-amber-900/20 text-amber-500"
                    )}>
                      {trait}
                    </span>
                  ))}
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col relative">
      {/* Floating Reopen Button */}
      <AnimatePresence>
        {!isSelectionOpen && (
          <motion.button
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            onClick={() => setIsSelectionOpen(true)}
            className={cn(
              "fixed right-8 top-24 z-50 p-4 rounded-full shadow-2xl transition-all group",
              theme === 'futuristic' ? "hologram-panel text-cyan-400 neon-glow" : "temple-panel text-amber-500 torch-glow"
            )}
          >
            <User size={24} />
            <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-black/80 text-white text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Switch Character
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Character Selection Overlay */}
      <AnimatePresence>
        {isSelectionOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute inset-x-0 top-0 z-40 p-6"
          >
            <div className={cn(
              "max-w-4xl mx-auto p-8 rounded-[40px] shadow-2xl relative overflow-hidden",
              theme === 'futuristic' ? "hologram-panel" : "temple-panel"
            )}>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-6">
                  <button 
                    onClick={() => { setActiveFigureId(null); setMessages([]); }}
                    className={cn(
                      "p-3 rounded-xl transition-all",
                      theme === 'futuristic' ? "bg-cyan-500/10 text-white hover:bg-cyan-500/20" : "bg-amber-900/20 text-amber-100 hover:bg-amber-900/40"
                    )}
                  >
                    <ArrowLeft size={20} />
                  </button>
                  <h3 className={cn("text-2xl font-black", theme === 'futuristic' ? "text-white" : "text-amber-100 font-serif")}>
                    Switch Character
                  </h3>
                </div>
                <div className="flex gap-2">
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={cn(
                        "px-3 py-1 rounded-lg text-[10px] font-bold uppercase transition-all",
                        selectedCategory === cat
                          ? (theme === 'futuristic' ? "bg-cyan-500 text-black" : "bg-amber-600 text-white")
                          : (theme === 'futuristic' ? "bg-white/5 text-white" : "bg-amber-900/20 text-amber-200")
                      )}
                    >
                      {cat}
                    </button>
                  ))}
                  <button
                    onClick={() => setSelectedCategory('All')}
                    className={cn(
                      "px-3 py-1 rounded-lg text-[10px] font-bold uppercase transition-all",
                      selectedCategory === 'All'
                        ? (theme === 'futuristic' ? "bg-cyan-500 text-black" : "bg-amber-600 text-white")
                        : (theme === 'futuristic' ? "bg-white/5 text-white" : "bg-amber-900/20 text-amber-200")
                    )}
                  >
                    All
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-h-[60vh] overflow-y-auto p-2">
                {filteredFigures.map((figure) => (
                  <button
                    key={figure.id}
                    onClick={() => {
                      setActiveFigureId(figure.id);
                      setIsSelectionOpen(false);
                      setMessages([]);
                    }}
                    className={cn(
                      "p-8 rounded-[32px] transition-all duration-300 text-left group relative border-2",
                      activeFigureId === figure.id 
                        ? (theme === 'futuristic' ? "bg-cyan-500/20 border-cyan-400" : "bg-amber-900/40 border-amber-500")
                        : "bg-black/20 border-transparent hover:bg-black/40"
                    )}
                  >
                    <div className="flex gap-6 items-center mb-6">
                      <img 
                        src={figure.avatar} 
                        alt={figure.name} 
                        className={cn(
                          "w-20 h-20 rounded-2xl object-cover border-2 visual-style",
                          activeFigureId === figure.id 
                            ? (theme === 'futuristic' ? "border-cyan-400 neon-glow" : "border-amber-500 torch-glow")
                            : "border-transparent opacity-60 group-hover:opacity-100"
                        )}
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <h4 className={cn("font-black text-xl mb-1", theme === 'futuristic' ? "text-white" : "text-amber-100")}>
                          {figure.name}
                        </h4>
                        <p className="text-[10px] uppercase tracking-widest opacity-40 font-black">
                          {figure.role}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {figure.personalityTraits.map(trait => (
                        <span key={trait} className={cn(
                          "px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest",
                          theme === 'futuristic' ? "bg-cyan-500/10 text-cyan-400" : "bg-amber-900/20 text-amber-500"
                        )}>
                          {trait}
                        </span>
                      ))}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Maximized Chat Area */}
      <div className="flex-1 flex flex-col max-w-5xl mx-auto w-full px-4 pt-10 pb-32 relative">
        <div 
          ref={scrollRef}
          className={cn(
            "flex-1 overflow-y-auto p-10 space-y-12 rounded-[40px] relative scroll-smooth",
            theme === 'futuristic' ? "bg-black/40 border border-white/5" : "bg-black/20 border border-amber-900/20"
          )}
        >
          {/* Background Texture */}
          <div className="absolute inset-0 pointer-events-none opacity-5">
            {theme === 'futuristic' ? (
              <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]" />
            ) : (
              <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/old-map.png')]" />
            )}
          </div>

          {/* Active Figure Info (Small) */}
          <div className="sticky top-0 z-20 flex items-center justify-between mb-8 pb-4 border-b border-white/5">
            <div className="flex items-center gap-4">
              <div className="relative">
                <img 
                  src={activeFigure?.avatar} 
                  alt={activeFigure?.name} 
                  className={cn(
                    "w-12 h-12 rounded-xl object-cover border visual-style",
                    theme === 'futuristic' ? "border-cyan-500" : "border-amber-600"
                  )}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-green-500 border-2 border-black animate-pulse" />
              </div>
              <div>
                <p className={cn("font-black text-sm", theme === 'futuristic' ? "text-white" : "text-amber-100")}>
                  {activeFigure?.name}
                </p>
                <p className="text-[10px] uppercase tracking-[0.2em] opacity-60 font-bold">
                  {currentStatus}
                </p>
              </div>
            </div>
          </div>

          {messages.length === 0 && (
            <div className="text-center py-32 opacity-20 flex flex-col items-center gap-6">
              <div className={cn(
                "p-8 rounded-full",
                theme === 'futuristic' ? "bg-cyan-500/10 text-cyan-400" : "bg-amber-800/10 text-amber-500"
              )}>
                <Bot size={64} className="animate-bounce" />
              </div>
              <p className="text-2xl font-black tracking-[0.3em] uppercase">
                {theme === 'futuristic' ? "Ready to Chat" : "The Ancestors Await"}
              </p>
            </div>
          )}
          
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={cn(
                "flex gap-8 max-w-[90%] relative z-10",
                msg.role === 'user' ? "ml-auto flex-row-reverse" : ""
              )}
            >
              <div className="flex-shrink-0">
                <img 
                  src={msg.avatar} 
                  alt={msg.senderName} 
                  className={cn(
                    "w-16 h-16 rounded-2xl object-cover border-2 shadow-2xl visual-style",
                    msg.role === 'user' 
                      ? (theme === 'futuristic' ? "border-purple-500" : "border-amber-900")
                      : (theme === 'futuristic' ? "border-cyan-500" : "border-amber-600")
                  )}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col gap-2">
                <span className={cn(
                  "text-[10px] font-black uppercase tracking-widest opacity-50",
                  msg.role === 'user' ? "text-right" : "text-left"
                )}>
                  {msg.senderName}
                </span>
                <div className={cn(
                  "p-8 rounded-[32px] shadow-2xl transition-all text-xl leading-relaxed",
                  msg.role === 'user'
                    ? (theme === 'futuristic' ? "bg-purple-600 text-white" : "bg-amber-900 text-amber-50")
                    : (theme === 'futuristic' ? "hologram-panel bg-white/5 text-white" : "temple-panel bg-[#2a2118] text-amber-100")
                )}>
                  {msg.text}
                </div>
              </div>
            </motion.div>
          ))}

          {isTyping && (
            <div className="flex gap-8 relative z-10">
              <div className="flex-shrink-0">
                <img 
                  src={activeFigure?.avatar} 
                  alt="Typing..." 
                  className={cn(
                    "w-16 h-16 rounded-2xl object-cover border-2 animate-pulse visual-style",
                    theme === 'futuristic' ? "border-cyan-500" : "border-amber-600"
                  )}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className={cn(
                "flex gap-3 items-center p-8 rounded-[32px]",
                theme === 'futuristic' ? "hologram-panel bg-white/5" : "temple-panel bg-white/5"
              )}>
                <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1 }} className="w-3 h-3 rounded-full bg-cyan-400" />
                <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-3 h-3 rounded-full bg-cyan-400" />
                <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-3 h-3 rounded-full bg-cyan-400" />
              </div>
            </div>
          )}
        </div>

        {/* Spacious Input Area */}
        <div className="absolute bottom-10 inset-x-4">
          <div className="relative group max-w-5xl mx-auto w-full">
            <div className={cn(
              "absolute -inset-1 rounded-[32px] blur opacity-20 group-hover:opacity-40 transition duration-1000",
              theme === 'futuristic' ? "bg-cyan-500" : "bg-amber-600"
            )} />
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder={theme === 'futuristic' ? `Message ${activeFigure?.name}...` : `Speak with ${activeFigure?.name}...`}
              className={cn(
                "w-full p-8 pr-24 rounded-[32px] outline-none transition-all relative z-10 text-xl",
                theme === 'futuristic' 
                  ? "bg-black/80 text-white border border-cyan-500/30 focus:border-cyan-400 focus:neon-glow font-mono" 
                  : "bg-[#1a140e] text-amber-100 border border-amber-800/40 focus:border-amber-500 focus:torch-glow italic"
              )}
            />
            <button 
              onClick={handleSend}
              disabled={!input.trim() || isTyping}
              className={cn(
                "absolute right-6 top-1/2 -translate-y-1/2 p-4 rounded-2xl transition-all z-20",
                theme === 'futuristic' ? "bg-cyan-500 text-black hover:bg-cyan-400 neon-glow" : "bg-amber-600 text-black hover:bg-amber-500 torch-glow",
                (!input.trim() || isTyping) && "opacity-50 cursor-not-allowed"
              )}
            >
              <Send size={32} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

