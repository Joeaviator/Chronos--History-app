import React from 'react';
import { motion } from 'motion/react';
import { useApp } from './Layout';
import { cn } from '../lib/utils';
import { Map, MessageSquare, Sparkles } from 'lucide-react';

export const Home: React.FC = () => {
  const { theme, setMode } = useApp();

  return (
    <div className="h-full flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <img 
          src={theme === 'futuristic' ? "https://picsum.photos/seed/cyber/1920/1080" : "https://picsum.photos/seed/ancient/1920/1080"} 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover opacity-10 visual-style"
          referrerPolicy="no-referrer"
        />
        {theme === 'futuristic' ? (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
            <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-purple-500 rounded-full animate-pulse" />
            <div className="absolute top-1/3 right-1/4 w-[1px] h-20 bg-gradient-to-b from-cyan-500 to-transparent" />
          </div>
        ) : (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
            <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-orange-500/20 rounded-full blur-sm animate-pulse" />
            <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-yellow-600/20 rounded-full blur-sm animate-pulse" />
          </div>
        )}
      </div>

      <motion.div
        initial={{ scale: 0.5, opacity: 0, rotate: -180 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative mb-16"
      >
        <div className={cn(
          "w-80 h-80 rounded-full flex items-center justify-center relative",
          theme === 'futuristic' ? "portal-vortex" : "ancient-portal"
        )}>
          <div className={cn(
            "w-64 h-64 rounded-full flex items-center justify-center relative z-10",
            theme === 'futuristic' ? "bg-black/80 backdrop-blur-md border border-cyan-500/50" : "bg-[#1a140e] border-4 border-amber-600/50"
          )}>
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles size={64} className={theme === 'futuristic' ? "text-cyan-400" : "text-amber-500"} />
            </motion.div>
            
            {/* Hidden Easter Egg: Center click */}
            <button 
              className="absolute inset-0 rounded-full z-20 cursor-default"
              onClick={() => {
                const facts = [
                  "TIME PARADOX: Cleopatra lived closer to the iPhone than to the building of the Great Pyramid!",
                  "SECRET: The Great Wall of China is NOT visible from space with the naked eye.",
                  "MYTH: Vikings didn't actually wear horned helmets. That was added by 19th-century opera designers!",
                  "ANOMALY: Oxford University is older than the Aztec Empire!"
                ];
                alert(facts[Math.floor(Math.random() * facts.length)]);
              }}
            />
          </div>
        </div>

        {/* Orbiting Elements */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ rotate: 360 }}
            transition={{ duration: 10 + i * 5, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[-20px] pointer-events-none"
          >
            <div 
              className={cn(
                "w-4 h-4 rounded-full absolute",
                theme === 'futuristic' ? "bg-cyan-400 neon-glow" : "bg-amber-600 gold-glow"
              )} 
              style={{ top: '50%', left: '0' }}
            />
          </motion.div>
        ))}
      </motion.div>

      <div className="relative z-10">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className={cn(
            "text-5xl md:text-7xl font-black mb-6 tracking-tighter",
            theme === 'futuristic' ? "text-white" : "text-amber-100 font-serif italic"
          )}
        >
          {theme === 'futuristic' ? "The Human Story, Reimagined." : "The Sands of Time Await..."}
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className={cn(
            "max-w-2xl text-xl mb-16 mx-auto leading-relaxed",
            theme === 'futuristic' ? "text-cyan-100/80" : "text-amber-200/70 italic"
          )}
        >
          {theme === 'futuristic' 
            ? "Travel through time to meet the people who shaped our world. Walk their streets, hear their voices, and discover the secrets of our shared history."
            : "Listen closely to the whispers of the ancients. The stone remembers what the wind has forgotten."}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto">
          <ModeCard 
            title="Expedition" 
            desc="Explore the world as it once was, from the heart of Rome to the pyramids of Giza." 
            onClick={() => setMode('history')} 
            icon={<Map size={32} />}
          />
          <ModeCard 
            title="Comm-Link" 
            desc="Have a real conversation with history's greatest minds and hear their stories." 
            onClick={() => setMode('talk')} 
            icon={<MessageSquare size={32} />}
          />
        </div>
      </div>
    </div>
  );
};

const ModeCard: React.FC<{ title: string; desc: string; onClick: () => void; icon: React.ReactNode }> = ({ title, desc, onClick, icon }) => {
  const { theme } = useApp();
  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(
        "p-8 text-left transition-all duration-500 group relative overflow-hidden rounded-[32px]",
        theme === 'futuristic' ? "hologram-panel hover:bg-cyan-500/10" : "temple-panel hover:bg-amber-900/20"
      )}
    >
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
        {React.cloneElement(icon as React.ReactElement, { size: 120 })}
      </div>
      
      <div className={cn(
        "mb-6 p-4 rounded-2xl w-fit relative z-10",
        theme === 'futuristic' ? "bg-cyan-500/20 text-cyan-400 neon-glow" : "bg-amber-800/20 text-amber-500 torch-glow"
      )}>
        {icon}
      </div>
      
      <h3 className={cn(
        "text-3xl font-black mb-4 relative z-10",
        theme === 'futuristic' ? "text-white" : "text-amber-100 font-serif"
      )}>
        {title}
      </h3>
      
      <p className={cn(
        "text-base leading-relaxed relative z-10",
        theme === 'futuristic' ? "text-cyan-100/60 font-mono" : "text-amber-200/70"
      )}>
        {desc}
      </p>

      {/* Secret Easter Egg: Corner click */}
      <div 
        className="absolute bottom-0 right-0 w-10 h-10 cursor-help opacity-0 group-hover:opacity-100"
        onClick={(e) => {
          e.stopPropagation();
          alert("HIDDEN ARCHIVE UNLOCKED: In 1923, archeologists found a 3,000-year-old pot of honey in an Egyptian tomb... and it was still edible!");
        }}
      />
    </motion.button>
  );
};

