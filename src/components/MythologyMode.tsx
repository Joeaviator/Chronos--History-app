import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useApp } from './Layout';
import { cn } from '../lib/utils';
import { MYTHOLOGY_MISSIONS, GOD_PARENTS } from '../constants';
import { 
  Sword, Shield, Zap, Waves, Brain, X, CheckCircle2, Rocket, ArrowLeft, Sparkles, 
  Crown, Leaf, Sun, Moon, Heart, Flame, Send, GlassWater, Info, AlertCircle, HelpCircle
} from 'lucide-react';

const ICON_MAP: Record<string, React.ReactNode> = {
  Zap: <Zap />,
  Crown: <Crown />,
  Waves: <Waves />,
  Leaf: <Leaf />,
  Brain: <Brain />,
  Sun: <Sun />,
  Moon: <Moon />,
  Sword: <Sword />,
  Heart: <Heart />,
  Flame: <Flame />,
  Send: <Send />,
  GlassWater: <GlassWater />,
};

export const MythologyMode: React.FC = () => {
  const { theme } = useApp();
  const [parent, setParent] = useState<string | null>(null);
  const [activeMissionId, setActiveMissionId] = useState<string | null>(null);
  const [completedMissions, setCompletedMissions] = useState<string[]>([]);
  
  // Mission Flow State
  const [missionStep, setMissionStep] = useState<'learn' | 'play' | 'complete'>('learn');
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const activeMission = MYTHOLOGY_MISSIONS.find(m => m.id === activeMissionId);

  const handleMissionComplete = () => {
    if (activeMissionId) {
      setCompletedMissions(prev => [...prev, activeMissionId]);
      setActiveMissionId(null);
      setMissionStep('learn');
      setSelectedAnswer(null);
      setIsCorrect(null);
      setShowHint(false);
    }
  };

  const handleAnswerSubmit = () => {
    if (!activeMission || !selectedAnswer) return;
    
    if (selectedAnswer === activeMission.challenge.correctAnswer) {
      setIsCorrect(true);
      setTimeout(() => setMissionStep('complete'), 1000);
    } else {
      setIsCorrect(false);
      setShowHint(true);
    }
  };

  // Animation Components
  const MissionAnimation = ({ type }: { type: string }) => {
    switch (type) {
      case 'lightning':
        return (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ 
                  opacity: [0, 1, 0], 
                  scaleY: [0, 1.5, 0],
                  x: Math.random() * 100 + '%' 
                }}
                transition={{ 
                  duration: 0.2, 
                  repeat: Infinity, 
                  repeatDelay: Math.random() * 2,
                  delay: Math.random() 
                }}
                className="absolute top-0 w-1 h-full bg-cyan-400 blur-sm"
              />
            ))}
          </div>
        );
      case 'waves':
        return (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  x: ['-100%', '100%'],
                  y: [0, 10, 0]
                }}
                transition={{ 
                  duration: 10 + i * 2, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="absolute bottom-0 w-[200%] h-32 bg-blue-500/20 blur-xl"
                style={{ bottom: i * 20 + 'px' }}
              />
            ))}
          </div>
        );
      case 'strategy':
        return (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent"
            />
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.5, 0], x: [0, 100], y: [0, 100] }}
                transition={{ duration: 5, repeat: Infinity, delay: i * 0.5 }}
                className="absolute w-px h-px bg-cyan-400 shadow-[0_0_10px_cyan]"
                style={{ left: Math.random() * 100 + '%', top: Math.random() * 100 + '%' }}
              />
            ))}
          </div>
        );
      default:
        return (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-20 border border-white/5 rounded-full"
            />
          </div>
        );
    }
  };

  if (!parent) {
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
            {theme === 'futuristic' ? "Choose Your Path" : "Claim Your Heritage"}
          </h2>
          <p className={cn(
            "text-xl max-w-2xl mx-auto opacity-60",
            theme === 'futuristic' ? "" : "italic"
          )}>
            {theme === 'futuristic' 
              ? "Discover your divine ancestry. Choose which Olympian blood flows through your veins." 
              : "The eyes of the gods are upon you. Which divine blood flows through your veins?"}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {GOD_PARENTS.map((god, i) => (
            <motion.button
              key={god.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => setParent(god.name)}
              className={cn(
                "p-8 rounded-[32px] flex flex-col items-center text-center transition-all group relative overflow-hidden",
                theme === 'futuristic' ? "hologram-panel" : "temple-panel"
              )}
            >
              <div className={cn(
                "mb-6 p-5 rounded-2xl transition-all duration-500",
                theme === 'futuristic' ? "bg-cyan-500/20 text-cyan-400 group-hover:neon-glow" : "bg-amber-800/20 text-amber-500 group-hover:torch-glow"
              )}>
                {React.cloneElement(ICON_MAP[god.iconName] as React.ReactElement, { size: 40 })}
              </div>
              <h3 className={cn("text-2xl font-black mb-2", theme === 'futuristic' ? "text-white" : "text-amber-100 font-serif")}>
                {god.name}
              </h3>
              <p className={cn("text-[10px] uppercase tracking-[0.3em] mb-4 font-bold", theme === 'futuristic' ? "text-cyan-400" : "text-amber-500")}>
                {god.domain}
              </p>
              <p className="text-sm opacity-60 leading-relaxed line-clamp-3">
                {god.description}
              </p>
            </motion.button>
          ))}
        </div>
      </div>
    );
  }

  const missions = MYTHOLOGY_MISSIONS.filter(m => m.godParent === parent);
  const selectedGod = GOD_PARENTS.find(g => g.name === parent);

  return (
    <div className="p-8 max-w-6xl mx-auto pb-32">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
        <div className="flex items-center gap-8">
          <button 
            onClick={() => { setParent(null); setActiveMissionId(null); }}
            className={cn(
              "p-4 rounded-2xl transition-all",
              theme === 'futuristic' ? "hologram-panel text-white hover:bg-cyan-500/20" : "temple-panel text-amber-100 hover:bg-amber-900/40"
            )}
          >
            <ArrowLeft size={24} />
          </button>
          <div className="flex items-center gap-6">
            <div className={cn(
              "p-5 rounded-3xl",
              theme === 'futuristic' ? "bg-cyan-500 text-black neon-glow" : "bg-amber-600 text-black torch-glow"
            )}>
              {selectedGod && React.cloneElement(ICON_MAP[selectedGod.iconName] as React.ReactElement, { size: 32 })}
            </div>
            <div>
              <h3 className={cn("text-4xl font-black tracking-tighter", theme === 'futuristic' ? "text-white" : "text-amber-100 font-serif italic")}>
                Child of {parent}
              </h3>
              <p className="text-[10px] uppercase tracking-[0.4em] opacity-50 font-bold">
                {selectedGod?.personality}
              </p>
            </div>
          </div>
        </div>
      </div>

      {!activeMissionId ? (
        <div className="space-y-10">
          <div className="flex items-center justify-between">
            <h4 className={cn("text-3xl font-black", theme === 'futuristic' ? "text-white" : "text-amber-100 font-serif")}>
              Divine Trials
            </h4>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <CheckCircle2 size={16} className="text-green-500" />
              <span className="text-xs font-bold uppercase tracking-widest">
                {completedMissions.length} / {missions.length} Completed
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-8">
            {missions.map((mission, i) => (
              <motion.div
                key={mission.id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className={cn(
                  "p-10 rounded-[40px] flex flex-col md:flex-row items-center justify-between gap-8 transition-all group relative overflow-hidden",
                  theme === 'futuristic' ? "hologram-panel hover:bg-cyan-500/10" : "temple-panel hover:bg-amber-900/20"
                )}
              >
                <div className="flex-1 relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <span className={cn(
                      "px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em]",
                      theme === 'futuristic' ? "bg-cyan-500 text-black" : "bg-amber-600 text-black"
                    )}>
                      {mission.difficulty}
                    </span>
                    {completedMissions.includes(mission.id) && (
                      <span className="flex items-center gap-1 text-green-500 text-[10px] font-black uppercase tracking-[0.2em]">
                        <CheckCircle2 size={14} /> Mastered
                      </span>
                    )}
                  </div>
                  <h5 className={cn("text-3xl font-black mb-4", theme === 'futuristic' ? "text-white" : "text-amber-100 font-serif")}>
                    {mission.title}
                  </h5>
                  <p className="text-lg opacity-60 leading-relaxed max-w-2xl">
                    {mission.description}
                  </p>
                </div>
                <button
                  onClick={() => setActiveMissionId(mission.id)}
                  className={cn(
                    "px-12 py-6 rounded-2xl font-black uppercase tracking-[0.2em] transition-all whitespace-nowrap relative z-10",
                    theme === 'futuristic' 
                      ? "bg-cyan-500 text-black hover:bg-cyan-400 neon-glow" 
                      : "bg-amber-600 text-black hover:bg-amber-500 torch-glow"
                  )}
                >
                  {completedMissions.includes(mission.id) ? "Relive Trial" : "Begin Trial"}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      ) : (
        <AnimatePresence mode="wait">
          {activeMission && (
            <motion.div
              key={missionStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={cn(
                "p-12 rounded-[48px] relative overflow-hidden min-h-[600px] flex flex-col",
                theme === 'futuristic' ? "hologram-panel" : "temple-panel"
              )}
            >
              {/* Themed Background Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={`https://picsum.photos/seed/${activeMission.id}-bg/1200/800`} 
                  alt="" 
                  className="w-full h-full object-cover opacity-20 visual-style"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
              </div>

              <MissionAnimation type={activeMission.animationType} />

              <div className="relative z-10 flex-1 flex flex-col">
                {/* Step Indicator */}
                <div className="flex items-center justify-center gap-4 mb-12">
                  {['learn', 'play', 'complete'].map((step, i) => (
                    <div key={step} className="flex items-center gap-2">
                      <div className={cn(
                        "w-3 h-3 rounded-full transition-all duration-500",
                        missionStep === step 
                          ? (theme === 'futuristic' ? "bg-cyan-400 scale-125 shadow-[0_0_10px_cyan]" : "bg-amber-500 scale-125 shadow-[0_0_10px_orange]")
                          : "bg-white/10"
                      )} />
                      {i < 2 && <div className="w-8 h-px bg-white/10" />}
                    </div>
                  ))}
                </div>

                {missionStep === 'learn' && (
                  <div className="flex-1 flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
                    <div className={cn(
                      "p-6 rounded-3xl mb-8",
                      theme === 'futuristic' ? "bg-cyan-500/10 text-cyan-400" : "bg-amber-800/10 text-amber-500"
                    )}>
                      <Info size={48} />
                    </div>
                    <h4 className={cn("text-4xl font-black mb-8 tracking-tighter", theme === 'futuristic' ? "text-white" : "text-amber-100 font-serif")}>
                      The Divine Lesson
                    </h4>
                    <p className={cn(
                      "text-2xl leading-relaxed mb-12",
                      theme === 'futuristic' ? "text-cyan-100 font-mono" : "text-amber-200 italic"
                    )}>
                      "{activeMission.story}"
                    </p>
                    <button
                      onClick={() => setMissionStep('play')}
                      className={cn(
                        "px-12 py-6 rounded-2xl font-black uppercase tracking-[0.2em] transition-all",
                        theme === 'futuristic' ? "bg-cyan-500 text-black hover:bg-cyan-400" : "bg-amber-600 text-black hover:bg-amber-500"
                      )}
                    >
                      Enter the Trial
                    </button>
                  </div>
                )}

                {missionStep === 'play' && (
                  <div className="flex-1 flex flex-col items-center justify-center max-w-3xl mx-auto w-full">
                    <div className={cn(
                      "p-6 rounded-3xl mb-8",
                      theme === 'futuristic' ? "bg-cyan-500/10 text-cyan-400" : "bg-amber-800/10 text-amber-500"
                    )}>
                      <HelpCircle size={48} />
                    </div>
                    <h4 className={cn("text-3xl font-black mb-12 text-center", theme === 'futuristic' ? "text-white" : "text-amber-100 font-serif")}>
                      {activeMission.challenge.question}
                    </h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-12">
                      {activeMission.challenge.options.map((option) => (
                        <button
                          key={option}
                          onClick={() => {
                            setSelectedAnswer(option);
                            setIsCorrect(null);
                          }}
                          className={cn(
                            "p-6 rounded-2xl text-left font-bold transition-all border-2",
                            selectedAnswer === option
                              ? (theme === 'futuristic' ? "bg-cyan-500/20 border-cyan-400 text-white" : "bg-amber-800/20 border-amber-500 text-white")
                              : "bg-white/5 border-transparent hover:bg-white/10"
                          )}
                        >
                          {option}
                        </button>
                      ))}
                    </div>

                    <AnimatePresence>
                      {showHint && !isCorrect && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className={cn(
                            "p-6 rounded-2xl mb-8 flex items-center gap-4 w-full",
                            theme === 'futuristic' ? "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20" : "bg-amber-900/40 text-amber-400 border border-amber-800/20"
                          )}
                        >
                          <AlertCircle size={24} />
                          <p className="text-sm font-bold italic">
                            HINT: {activeMission.challenge.hint}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <button
                      onClick={handleAnswerSubmit}
                      disabled={!selectedAnswer}
                      className={cn(
                        "px-12 py-6 rounded-2xl font-black uppercase tracking-[0.2em] transition-all w-full md:w-auto",
                        !selectedAnswer ? "opacity-30 cursor-not-allowed" :
                        (theme === 'futuristic' ? "bg-cyan-500 text-black hover:bg-cyan-400" : "bg-amber-600 text-black hover:bg-amber-500")
                      )}
                    >
                      Submit Answer
                    </button>
                  </div>
                )}

                {missionStep === 'complete' && (
                  <div className="flex-1 flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className={cn(
                        "p-10 rounded-full mb-10",
                        theme === 'futuristic' ? "bg-green-500 text-black neon-glow" : "bg-green-600 text-black torch-glow"
                      )}
                    >
                      <CheckCircle2 size={64} />
                    </motion.div>
                    <h4 className={cn("text-5xl font-black mb-6 tracking-tighter", theme === 'futuristic' ? "text-white" : "text-amber-100 font-serif")}>
                      Trial Mastered!
                    </h4>
                    <p className={cn(
                      "text-2xl mb-12",
                      theme === 'futuristic' ? "text-cyan-100 font-mono" : "text-amber-200 italic"
                    )}>
                      You have proven your wisdom and earned the favor of {parent}.
                    </p>
                    <button
                      onClick={handleMissionComplete}
                      className={cn(
                        "px-12 py-6 rounded-2xl font-black uppercase tracking-[0.2em] transition-all",
                        theme === 'futuristic' ? "bg-cyan-500 text-black hover:bg-cyan-400" : "bg-amber-600 text-black hover:bg-amber-500"
                      )}
                    >
                      Return to Olympus
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};


