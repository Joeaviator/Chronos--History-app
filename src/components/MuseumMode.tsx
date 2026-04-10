import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useApp } from './Layout';
import { cn } from '../lib/utils';
import { ARTIFACTS } from '../constants';
import { Artifact } from '../types';
import { getMuseumStory } from '../services/gemini';
import { BookOpen, Sparkles, X, Loader2, Scroll } from 'lucide-react';

export const MuseumMode: React.FC = () => {
  const { theme } = useApp();
  const [selectedArtifact, setSelectedArtifact] = useState<Artifact | null>(null);
  const [aiStory, setAiStory] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleArtifactClick = async (artifact: Artifact) => {
    setSelectedArtifact(artifact);
    setAiStory(null);
    setIsLoading(true);
    const story = await getMuseumStory(artifact.name, artifact.story);
    setAiStory(story);
    setIsLoading(false);
  };

  return (
    <div className="p-8 max-w-7xl mx-auto pb-32">
      <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h2 className={cn(
            "text-5xl md:text-6xl font-black tracking-tighter mb-4",
            theme === 'futuristic' ? "text-white" : "text-amber-100 font-serif italic"
          )}>
            {theme === 'futuristic' ? "The World's Treasures" : "The Grand Gallery"}
          </h2>
          <p className={cn(
            "text-lg max-w-xl",
            theme === 'futuristic' ? "text-cyan-100/60 font-mono" : "text-amber-200/70 italic"
          )}>
            {theme === 'futuristic' 
              ? "Accessing high-fidelity digital reconstructions of lost artifacts." 
              : "Behold the treasures of the ages, preserved in the silence of stone."}
          </p>
        </motion.div>

        <div className={cn(
          "p-6 rounded-3xl flex items-center gap-6",
          theme === 'futuristic' ? "hologram-panel" : "temple-panel"
        )}>
          <div className={cn(
            "p-4 rounded-2xl",
            theme === 'futuristic' ? "bg-cyan-500/20 text-cyan-400 neon-glow" : "bg-amber-800/20 text-amber-500 torch-glow"
          )}>
            <Sparkles size={32} />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] opacity-50 font-bold">Curator Status</p>
            <p className={cn("text-xl font-black", theme === 'futuristic' ? "text-white" : "text-amber-100")}>
              {theme === 'futuristic' ? "Curator is Ready" : "Sage is Present"}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {ARTIFACTS.map((artifact, i) => (
          <motion.div
            key={artifact.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={cn(
              "group p-8 rounded-3xl transition-all duration-500 relative overflow-hidden",
              theme === 'futuristic' ? "hologram-panel hover:bg-cyan-500/10" : "temple-panel hover:bg-amber-900/20"
            )}
          >
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-20 transition-opacity">
              <Sparkles size={100} />
            </div>

            <div className="relative h-64 mb-8 rounded-2xl overflow-hidden">
              <img 
                src={artifact.imageUrl} 
                alt={artifact.name} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 visual-style" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/60 to-transparent" />
              
              {theme === 'futuristic' && (
                <div className="absolute inset-0 pointer-events-none border-2 border-cyan-500/30 rounded-2xl group-hover:border-cyan-400 transition-colors" />
              )}
            </div>

            <h3 className={cn(
              "text-3xl font-black mb-2",
              theme === 'futuristic' ? "text-white" : "text-amber-100 font-serif"
            )}>
              {artifact.name}
            </h3>
            <p className={cn(
              "text-[10px] uppercase tracking-[0.4em] mb-6 font-bold",
              theme === 'futuristic' ? "text-cyan-400" : "text-amber-500"
            )}>
              {artifact.period}
            </p>

            <button
              onClick={() => handleArtifactClick(artifact)}
              disabled={isLoading && selectedArtifact?.id === artifact.id}
              className={cn(
                "w-full py-4 rounded-xl font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3",
                theme === 'futuristic' 
                  ? "bg-cyan-500 text-black hover:bg-cyan-400 neon-glow" 
                  : "bg-amber-600 text-black hover:bg-amber-500 torch-glow"
              )}
            >
              {isLoading && selectedArtifact?.id === artifact.id ? (
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }}>
                  <Loader2 size={20} />
                </motion.div>
              ) : (
                <>
                  <BookOpen size={20} />
                  {theme === 'futuristic' ? "Explore" : "Examine"}
                </>
              )}
            </button>

            {/* Secret Easter Egg: Hidden click on artifact name */}
            <div 
              className="absolute top-4 left-4 w-6 h-6 cursor-help opacity-0 group-hover:opacity-100"
              onClick={(e) => {
                e.stopPropagation();
                alert(`CURATOR'S NOTE: This ${artifact.name} was actually found by a local farmer who thought it was a common kitchen tool!`);
              }}
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedArtifact && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              className={cn(
                "max-w-4xl w-full p-12 rounded-[40px] relative overflow-hidden shadow-[0_0_150px_rgba(0,0,0,1)]",
                theme === 'futuristic' ? "hologram-panel" : "temple-panel"
              )}
            >
              <button 
                onClick={() => setSelectedArtifact(null)}
                className="absolute top-10 right-10 p-4 rounded-2xl hover:bg-white/10 transition-all"
              >
                <X size={32} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="relative">
                  <img 
                    src={selectedArtifact.imageUrl} 
                    alt={selectedArtifact.name} 
                    className={cn(
                      "w-full aspect-square object-cover rounded-3xl shadow-2xl visual-style",
                      theme === 'futuristic' ? "border-2 border-cyan-500/50" : "border-4 border-amber-600/50"
                    )}
                    referrerPolicy="no-referrer"
                  />
                  {theme === 'futuristic' && (
                    <motion.div 
                      animate={{ y: ['0%', '100%', '0%'] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 pointer-events-none bg-cyan-400/20 h-1 w-full"
                    />
                  )}
                </div>

                <div className="flex flex-col justify-center">
                  <p className={cn(
                    "text-xs uppercase tracking-[0.5em] mb-4 font-bold",
                    theme === 'futuristic' ? "text-cyan-400" : "text-amber-500"
                  )}>
                    {selectedArtifact.period}
                  </p>
                  <h3 className={cn(
                    "text-5xl font-black mb-8 tracking-tighter",
                    theme === 'futuristic' ? "text-white" : "text-amber-100 font-serif italic"
                  )}>
                    {selectedArtifact.name}
                  </h3>
                  
                  <div className={cn(
                    "p-8 rounded-3xl mb-8 relative",
                    theme === 'futuristic' ? "bg-cyan-500/5 border border-cyan-500/20" : "bg-amber-900/20 border border-amber-800/20"
                  )}>
                    <div className="absolute top-0 left-0 p-4 opacity-10">
                      <Scroll size={48} />
                    </div>
                    <p className={cn(
                      "text-xl leading-relaxed relative z-10",
                      theme === 'futuristic' ? "text-cyan-100 font-mono" : "text-amber-200 italic"
                    )}>
                      {aiStory || "The AI Curator is weaving the tale of this artifact..."}
                    </p>
                  </div>

                  <div className={cn(
                    "p-6 rounded-2xl flex items-center gap-4",
                    theme === 'futuristic' ? "bg-cyan-500/10" : "bg-amber-800/10"
                  )}>
                    <Sparkles size={24} className={theme === 'futuristic' ? "text-cyan-400" : "text-amber-500"} />
                    <p className="text-sm font-bold uppercase tracking-widest">
                      {theme === 'futuristic' ? "Story Unlocked" : "The Past Speaks"}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

