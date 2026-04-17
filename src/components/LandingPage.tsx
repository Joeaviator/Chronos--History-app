import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Clock, MessageSquare, Shield, ChevronRight, History, Zap } from 'lucide-react';
import { cn } from '../lib/utils';
import { useApp } from './Layout';

export const LandingPage: React.FC = () => {
  const { login, theme, authError, setAuthError, isLoggingIn } = useApp();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={cn(
      "min-h-screen relative overflow-hidden selection:bg-cyan-500/30",
      theme === 'futuristic' ? "bg-black text-white" : "bg-[#1a140e] text-amber-100"
    )}>
      {/* Immersive Background Atmosphere */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div 
          animate={{ 
            x: (mousePos.x - window.innerWidth / 2) * 0.05,
            y: (mousePos.y - window.innerHeight / 2) * 0.05
          }}
          className="absolute inset-0"
        >
          {/* Layered Gradients (Recipe 7) */}
          <div className={cn(
            "absolute inset-0 opacity-40 blur-[120px] transition-colors duration-1000",
            theme === 'futuristic' 
              ? "bg-[radial-gradient(circle_at_30%_30%,#0ea5e9_0%,transparent_50%),radial-gradient(circle_at_70%_70%,#7c3aed_0%,transparent_50%)]"
              : "bg-[radial-gradient(circle_at_30%_30%,#d4af37_0%,transparent_50%),radial-gradient(circle_at_70%_70%,#8b0000_0%,transparent_50%)]"
          )} />
          
          {/* Floating Particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: Math.random() * 100 + '%', 
                y: Math.random() * 100 + '%',
                opacity: Math.random() * 0.5
              }}
              animate={{ 
                y: [null, '-=100', '+=100'],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{ 
                duration: 10 + Math.random() * 20, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className={cn(
                "absolute w-1 h-1 rounded-full",
                theme === 'futuristic' ? "bg-cyan-400" : "bg-amber-500"
              )}
            />
          ))}
        </motion.div>

        {/* Grid Structure (Recipe 1) */}
        <div className={cn(
          "absolute inset-0 opacity-[0.05] pointer-events-none",
          theme === 'futuristic' 
            ? "bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"
            : "bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]"
        )} />
      </div>

      {/* Navigation (Minimal) */}
      <nav className="relative z-50 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className={cn(
            "p-2 rounded-lg",
            theme === 'futuristic' ? "hologram-panel text-cyan-400" : "temple-panel text-amber-500"
          )}>
            <History size={24} />
          </div>
          <span className={cn(
            "text-xl font-black tracking-tighter",
            theme === 'futuristic' ? "text-white" : "text-amber-100 font-serif italic"
          )}>
            STORYTELLER
          </span>
        </div>
        <div className="flex items-center gap-6">
          <AnimatePresence>
            {authError && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className={cn(
                  "p-4 rounded-xl text-[10px] font-bold uppercase tracking-widest flex flex-col gap-2 max-w-xs",
                  theme === 'futuristic' ? "bg-red-500/10 text-red-400 border border-red-500/30" : "bg-red-900/20 text-red-400 border border-red-800/30"
                )}
              >
                <div className="flex items-center gap-3">
                  <Shield size={14} />
                  <span>Auth Security Error</span>
                  <button onClick={() => setAuthError(null)} className="ml-auto hover:text-white transition-colors">
                    <Zap size={12} />
                  </button>
                </div>
                <p className="normal-case opacity-80 font-mono text-[9px] leading-relaxed break-all">
                  {authError}
                </p>
                <div className="pt-2 border-t border-red-500/20 text-[8px] opacity-60">
                  Current Origin: {window.location.origin}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <button 
            onClick={login}
            disabled={isLoggingIn}
            className={cn(
              "px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all relative overflow-hidden",
              theme === 'futuristic' 
                ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500 hover:text-black"
                : "bg-amber-900/20 text-amber-500 border border-amber-800/30 hover:bg-amber-600 hover:text-white",
              isLoggingIn && "opacity-50 cursor-wait"
            )}
          >
            {isLoggingIn ? (
              <span className="flex items-center gap-2">
                <Zap size={12} className="animate-spin" />
                Connecting...
              </span>
            ) : (
              "Sign In"
            )}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-[90vh] text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.5 }}
            className={cn(
              "text-xs font-bold uppercase tracking-[0.5em] mb-6 block",
              theme === 'futuristic' ? "text-cyan-400" : "text-amber-500"
            )}
          >
            A New Dimension of Discovery
          </motion.span>
          <h1 className={cn(
            "text-6xl md:text-[10vw] font-black tracking-tighter leading-[0.85] mb-8",
            theme === 'futuristic' ? "text-white" : "text-amber-100 font-serif italic"
          )}>
            The Human Story,<br />
            <span className={cn(
              "text-transparent bg-clip-text",
              theme === 'futuristic' 
                ? "bg-gradient-to-r from-cyan-400 to-purple-500" 
                : "bg-gradient-to-r from-amber-500 to-red-600"
            )}>
              Reimagined.
            </span>
          </h1>
          <p className={cn(
            "text-lg md:text-2xl opacity-60 max-w-2xl mx-auto mb-12 leading-relaxed",
            theme === 'futuristic' ? "font-mono" : "italic"
          )}>
            Step into the timeline. Witness the moments that shaped us. 
            Converse with the legends who built our world.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={login}
            className={cn(
              "group relative px-12 py-5 rounded-2xl font-black text-lg uppercase tracking-widest overflow-hidden transition-all",
              theme === 'futuristic' 
                ? "bg-cyan-500 text-black neon-glow" 
                : "bg-amber-600 text-white shadow-[0_0_30px_rgba(212,175,55,0.3)]"
            )}
          >
            <span className="relative z-10 flex items-center gap-3">
              Begin Your Journey <ChevronRight size={24} />
            </span>
            <motion.div 
              className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"
            />
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 flex flex-col items-center gap-2 opacity-40"
        >
          <div className={cn("w-px h-16", theme === 'futuristic' ? "bg-cyan-500" : "bg-amber-600")} />
        </motion.div>
      </section>

      {/* Visual Preview Section (Blurred/Hidden) */}
      <section className="relative z-10 py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className={cn(
              "text-4xl md:text-6xl font-black tracking-tighter",
              theme === 'futuristic' ? "text-white" : "text-amber-100 font-serif"
            )}>
              Explore history like<br />never before.
            </h2>
            <div className={cn(
              "h-1 w-24",
              theme === 'futuristic' ? "bg-cyan-500" : "bg-amber-600"
            )} />
            <p className="text-xl opacity-60 leading-relaxed">
              Unlock a fully interactive timeline spanning from the dawn of humanity 
              to the modern era. Every era is a world waiting to be discovered.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="space-y-2">
                <span className={cn(
                  "text-3xl font-black",
                  theme === 'futuristic' ? "text-cyan-400" : "text-amber-500"
                )}>10+</span>
                <p className="text-xs uppercase tracking-widest opacity-50 font-bold">Historical Eras</p>
              </div>
              <div className="space-y-2">
                <span className={cn(
                  "text-3xl font-black",
                  theme === 'futuristic' ? "text-cyan-400" : "text-amber-500"
                )}>500+</span>
                <p className="text-xs uppercase tracking-widest opacity-50 font-bold">Verified Facts</p>
              </div>
            </div>
          </motion.div>

          {/* Blurred UI Preview */}
          <div className="relative group">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={cn(
                "aspect-square rounded-[40px] overflow-hidden relative",
                theme === 'futuristic' ? "hologram-panel" : "temple-panel"
              )}
            >
              <div className="absolute inset-0 blur-2xl opacity-40 scale-110">
                <img 
                  src="https://images.unsplash.com/photo-1461360228754-6e81c478b882?q=80&w=2000" 
                  alt="Preview" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Silhouette Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full flex items-center justify-center">
                  <motion.div
                    animate={{ 
                      y: [0, -10, 0],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className={cn(
                      "w-64 h-64 rounded-full blur-3xl",
                      theme === 'futuristic' ? "bg-cyan-500/30" : "bg-amber-500/30"
                    )}
                  />
                  <div className="absolute inset-0 flex items-center justify-center p-12">
                     <div className={cn(
                       "w-full h-full rounded-2xl border-2 border-dashed opacity-20",
                       theme === 'futuristic' ? "border-cyan-500" : "border-amber-500"
                     )} />
                  </div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
                    <Zap size={48} className={cn("mb-6", theme === 'futuristic' ? "text-cyan-400" : "text-amber-500")} />
                    <p className="text-sm font-bold uppercase tracking-[0.3em] opacity-80">
                      Encrypted Content
                    </p>
                    <p className="text-[10px] uppercase tracking-widest mt-2 opacity-40">
                      Sign in to decrypt the timeline
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Floating Detail */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className={cn(
                "absolute -top-10 -right-10 p-6 rounded-2xl backdrop-blur-xl border z-20",
                theme === 'futuristic' ? "bg-cyan-500/10 border-cyan-500/30" : "bg-amber-900/40 border-amber-800/30"
              )}
            >
              <MessageSquare size={24} className={theme === 'futuristic' ? "text-cyan-400" : "text-amber-500"} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Teasers */}
      <section className="relative z-10 py-32 bg-black/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <TeaserCard 
              icon={<Clock size={32} />}
              title="Walk through time"
              label="Chronos Engine"
              theme={theme}
            />
            <TeaserCard 
              icon={<MessageSquare size={32} />}
              title="Converse with history"
              label="Comm-Link"
              theme={theme}
            />
            <TeaserCard 
              icon={<Sparkles size={32} />}
              title="Uncover hidden stories"
              label="Archive Access"
              theme={theme}
            />
          </div>
        </div>
      </section>

      {/* Mystery Section */}
      <section className="relative z-10 py-48 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
          <div className={cn(
            "w-[800px] h-[800px] rounded-full blur-[150px] animate-pulse",
            theme === 'futuristic' ? "bg-purple-600" : "bg-red-900"
          )} />
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto relative"
        >
          <h2 className={cn(
            "text-5xl md:text-7xl font-black tracking-tighter mb-8",
            theme === 'futuristic' ? "text-white" : "text-amber-100 font-serif italic"
          )}>
            What happens when you<br />step into history?
          </h2>
          <p className="text-xl opacity-60 mb-12 leading-relaxed">
            The boundaries between then and now are thinner than you think. 
            Experience the past not as a record, but as a living, breathing reality.
          </p>
          
          <div className="flex justify-center gap-4">
            {[...Array(3)].map((_, i) => (
              <div 
                key={i}
                className={cn(
                  "w-12 h-1 rounded-full",
                  theme === 'futuristic' ? "bg-cyan-500/20" : "bg-amber-900/20"
                )}
              />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 py-48 px-6 text-center">
        <div className={cn(
          "max-w-5xl mx-auto p-20 rounded-[60px] relative overflow-hidden",
          theme === 'futuristic' ? "hologram-panel" : "temple-panel"
        )}>
          <div className="relative z-10">
            <h2 className={cn(
              "text-5xl md:text-8xl font-black tracking-tighter mb-8",
              theme === 'futuristic' ? "text-white" : "text-amber-100 font-serif italic"
            )}>
              Unlock the Full Experience.
            </h2>
            <p className="text-xl opacity-60 mb-12 max-w-xl mx-auto">
              Join the elite circle of time travelers. Your seat at the table of history is waiting.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={login}
              className={cn(
                "px-16 py-6 rounded-3xl font-black text-xl uppercase tracking-widest transition-all",
                theme === 'futuristic' 
                  ? "bg-white text-black hover:bg-cyan-400" 
                  : "bg-amber-600 text-white hover:bg-amber-500"
              )}
            >
              Sign In to Unlock
            </motion.button>
          </div>

          {/* Abstract Visuals */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className={cn(
              "absolute top-0 right-0 w-96 h-96 blur-3xl rounded-full",
              theme === 'futuristic' ? "bg-cyan-500" : "bg-amber-500"
            )} />
            <div className={cn(
              "absolute bottom-0 left-0 w-96 h-96 blur-3xl rounded-full",
              theme === 'futuristic' ? "bg-purple-500" : "bg-red-600"
            )} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-8 border-t border-white/5 text-center">
        <p className="text-[10px] uppercase tracking-[0.5em] opacity-30 font-bold">
          © 2026 Chronos Storyteller • All Rights Reserved
        </p>
      </footer>
    </div>
  );
};

const TeaserCard: React.FC<{ icon: React.ReactNode; title: string; label: string; theme: string }> = ({ icon, title, label, theme }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={cn(
      "p-10 rounded-3xl border transition-all hover:translate-y-[-10px]",
      theme === 'futuristic' 
        ? "bg-black/40 border-white/5 hover:border-cyan-500/30" 
        : "bg-[#2a2018]/40 border-amber-900/20 hover:border-amber-500/30"
    )}
  >
    <div className={cn(
      "mb-8 p-4 rounded-2xl w-fit",
      theme === 'futuristic' ? "bg-cyan-500/10 text-cyan-400" : "bg-amber-900/40 text-amber-500"
    )}>
      {icon}
    </div>
    <span className={cn(
      "text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block opacity-50",
      theme === 'futuristic' ? "text-cyan-400" : "text-amber-500"
    )}>
      {label}
    </span>
    <h3 className={cn(
      "text-2xl font-black leading-tight",
      theme === 'futuristic' ? "text-white" : "text-amber-100 font-serif"
    )}>
      {title}
    </h3>
  </motion.div>
);
