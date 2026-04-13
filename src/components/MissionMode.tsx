import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Eye, Zap, CheckCircle2, ChevronRight, ChevronLeft, Trophy, Info, AlertCircle } from 'lucide-react';
import { Mission, MissionStep } from '../types';
import { MISSIONS } from '../constants/missions';
import { useApp } from './Layout';
import { cn } from '../lib/utils';

export const MissionMode: React.FC = () => {
  const { theme } = useApp();
  const [selectedMission, setSelectedMission] = useState<Mission | null>(null);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [completedMissions, setCompletedMissions] = useState<string[]>([]);
  const [taskFeedback, setTaskFeedback] = useState<{ isCorrect: boolean; message: string } | null>(null);

  const currentMission = selectedMission;
  const currentStep = currentMission?.steps[currentStepIndex];

  const handleNext = () => {
    if (!currentMission) return;
    if (currentStepIndex < currentMission.steps.length - 1) {
      setCurrentStepIndex(prev => prev + 1);
      setTaskFeedback(null);
    }
  };

  const handleBack = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(prev => prev - 1);
      setTaskFeedback(null);
    }
  };

  const handleTaskOption = (option: { isCorrect: boolean; feedback: string }) => {
    setTaskFeedback({
      isCorrect: option.isCorrect,
      message: option.feedback
    });

    if (option.isCorrect && currentMission) {
      // Auto-advance after a delay if correct? Or let user click next
    }
  };

  const finishMission = () => {
    if (currentMission) {
      setCompletedMissions(prev => [...prev, currentMission.id]);
      setSelectedMission(null);
      setCurrentStepIndex(0);
    }
  };

  return (
    <div className="h-full flex flex-col p-6 md:p-12 max-w-6xl mx-auto w-full">
      <AnimatePresence mode="wait">
        {!selectedMission ? (
          <motion.div
            key="mission-list"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-8"
          >
            <div className="space-y-2">
              <h2 className={cn(
                "text-4xl font-black tracking-tight",
                theme === 'futuristic' ? "text-cyan-400" : "text-amber-500 font-serif"
              )}>
                MISSION COMMAND
              </h2>
              <p className="text-lg opacity-60">Select a historical operation to begin your interactive training.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {MISSIONS.map((mission) => (
                <motion.div
                  key={mission.id}
                  whileHover={{ scale: 1.02, y: -5 }}
                  onClick={() => setSelectedMission(mission)}
                  className={cn(
                    "p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 relative overflow-hidden group",
                    theme === 'futuristic' 
                      ? "bg-black/40 border-cyan-500/20 hover:border-cyan-400/50" 
                      : "bg-amber-900/10 border-amber-900/30 hover:border-amber-500/50"
                  )}
                >
                  <div className="relative z-10 space-y-4">
                    <div className="flex justify-between items-start">
                      <span className={cn(
                        "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest",
                        theme === 'futuristic' ? "bg-cyan-500/20 text-cyan-400" : "bg-amber-500/20 text-amber-500"
                      )}>
                        {mission.era}
                      </span>
                      {completedMissions.includes(mission.id) && (
                        <CheckCircle2 className="text-green-500" size={20} />
                      )}
                    </div>
                    <h3 className={cn(
                      "text-2xl font-bold",
                      theme === 'futuristic' ? "text-white" : "text-amber-100 font-serif"
                    )}>
                      {mission.title}
                    </h3>
                    <p className="text-sm opacity-70 line-clamp-2">{mission.description}</p>
                    <div className="flex items-center gap-4 text-xs font-bold opacity-50">
                      <span className="flex items-center gap-1"><Zap size={14} /> {mission.difficulty}</span>
                      <span className="flex items-center gap-1"><Trophy size={14} /> {mission.reward}</span>
                    </div>
                  </div>
                  
                  {/* Background Decoration */}
                  <div className={cn(
                    "absolute -right-4 -bottom-4 w-24 h-24 opacity-10 transition-transform duration-500 group-hover:scale-150",
                    theme === 'futuristic' ? "text-cyan-400" : "text-amber-500"
                  )}>
                    <Zap size={96} />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="mission-active"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="flex-1 flex flex-col gap-8"
          >
            {/* Mission Header */}
            <div className="flex items-center justify-between border-b pb-6 border-white/10">
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setSelectedMission(null)}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>
                <div>
                  <h3 className="text-sm font-bold opacity-50 uppercase tracking-widest">{currentMission.title}</h3>
                  <div className="flex items-center gap-2">
                    {currentMission.steps.map((_, i) => (
                      <div 
                        key={i} 
                        className={cn(
                          "h-1.5 rounded-full transition-all duration-500",
                          i === currentStepIndex ? "w-8 bg-current" : "w-2 bg-white/10",
                          i < currentStepIndex ? (theme === 'futuristic' ? "bg-cyan-500" : "bg-amber-500") : ""
                        )}
                        style={{ color: theme === 'futuristic' ? '#22d3ee' : '#f59e0b' }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                <Trophy size={16} className={theme === 'futuristic' ? "text-cyan-400" : "text-amber-500"} />
                <span className="text-xs font-bold uppercase tracking-tighter">{currentMission.reward}</span>
              </div>
            </div>

            {/* Step Content */}
            <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep?.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  {/* Step Icon & Title */}
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      "p-4 rounded-2xl",
                      theme === 'futuristic' ? "bg-cyan-500/20 text-cyan-400" : "bg-amber-500/20 text-amber-500"
                    )}>
                      {currentStep?.type === 'intro' && <Info size={32} />}
                      {currentStep?.type === 'learn' && <BookOpen size={32} />}
                      {currentStep?.type === 'visual' && <Eye size={32} />}
                      {currentStep?.type === 'task' && <Zap size={32} />}
                      {currentStep?.type === 'complete' && <CheckCircle2 size={32} />}
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-50">
                        {currentStep?.type} Phase
                      </span>
                      <h2 className={cn(
                        "text-3xl font-black",
                        theme === 'ancient' && "font-serif"
                      )}>
                        {currentStep?.title}
                      </h2>
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div className="space-y-6">
                      <div className={cn(
                        "text-lg leading-relaxed opacity-80 whitespace-pre-wrap",
                        theme === 'ancient' ? "font-serif" : "font-sans"
                      )}>
                        {currentStep?.content.split('\n\n').map((para, i) => (
                          <p key={i} className="mb-4">
                            {para.split('**').map((part, j) => 
                              j % 2 === 1 ? (
                                <span key={j} className={cn(
                                  "font-bold",
                                  theme === 'futuristic' ? "text-cyan-400" : "text-amber-500"
                                )}>{part}</span>
                              ) : part
                            )}
                          </p>
                        ))}
                      </div>

                      {/* Task Options */}
                      {currentStep?.type === 'task' && currentStep.task && (
                        <div className="space-y-4 pt-4">
                          <h4 className="text-sm font-bold uppercase tracking-widest opacity-50">Choose Wisely:</h4>
                          <div className="grid gap-3">
                            {currentStep.task.options.map((opt) => (
                              <button
                                key={opt.id}
                                onClick={() => handleTaskOption(opt)}
                                className={cn(
                                  "p-4 rounded-xl border-2 text-left transition-all duration-300 font-bold",
                                  taskFeedback?.message === opt.feedback
                                    ? (opt.isCorrect ? "bg-green-500/20 border-green-500 text-green-400" : "bg-red-500/20 border-red-500 text-red-400")
                                    : "bg-white/5 border-white/10 hover:border-white/30"
                                )}
                              >
                                {opt.label}
                              </button>
                            ))}
                          </div>
                          
                          <AnimatePresence>
                            {taskFeedback && (
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={cn(
                                  "p-4 rounded-xl flex items-center gap-3",
                                  taskFeedback.isCorrect ? "bg-green-500/10 text-green-400" : "bg-red-500/10 text-red-400"
                                )}
                              >
                                {taskFeedback.isCorrect ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
                                <span className="text-sm font-medium">{taskFeedback.message}</span>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      )}
                    </div>

                    <div className="space-y-6">
                      {/* Image Display */}
                      {currentStep?.imageUrl && (
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="relative group"
                        >
                          <img 
                            src={currentStep.imageUrl} 
                            alt={currentStep.title}
                            className="w-full aspect-video object-cover rounded-3xl border-4 border-white/10 shadow-2xl"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </motion.div>
                      )}

                      {/* Items Grid (Learn Phase) */}
                      {currentStep?.items && (
                        <div className="grid gap-4">
                          {currentStep.items.map((item) => (
                            <motion.div
                              key={item.id}
                              whileHover={{ x: 10 }}
                              className={cn(
                                "p-4 rounded-2xl border flex gap-4 items-center",
                                theme === 'futuristic' ? "bg-cyan-500/5 border-cyan-500/20" : "bg-amber-900/10 border-amber-900/20"
                              )}
                            >
                              <img 
                                src={item.imageUrl} 
                                alt={item.name} 
                                className="w-20 h-20 rounded-xl object-cover border-2 border-white/10"
                                referrerPolicy="no-referrer"
                              />
                              <div>
                                <h4 className={cn(
                                  "font-bold text-lg",
                                  theme === 'futuristic' ? "text-cyan-400" : "text-amber-500"
                                )}>{item.name}</h4>
                                <p className="text-xs opacity-70 mb-1">{item.description}</p>
                                <p className="text-[10px] font-bold uppercase tracking-tighter opacity-40">Function: {item.function}</p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between pt-6 border-t border-white/10">
              <button
                onClick={handleBack}
                disabled={currentStepIndex === 0}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all disabled:opacity-20 hover:bg-white/5"
              >
                <ChevronLeft size={20} /> Back
              </button>

              {currentStepIndex === currentMission.steps.length - 1 ? (
                <button
                  onClick={finishMission}
                  className={cn(
                    "flex items-center gap-2 px-8 py-4 rounded-2xl font-black uppercase tracking-widest transition-all shadow-xl",
                    theme === 'futuristic' ? "bg-cyan-500 text-black neon-glow" : "bg-amber-600 text-black"
                  )}
                >
                  Complete Mission <Trophy size={20} />
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  disabled={currentStep?.type === 'task' && !taskFeedback?.isCorrect}
                  className={cn(
                    "flex items-center gap-2 px-8 py-4 rounded-2xl font-black uppercase tracking-widest transition-all disabled:opacity-20 disabled:grayscale",
                    theme === 'futuristic' ? "bg-cyan-500 text-black neon-glow" : "bg-amber-600 text-black"
                  )}
                >
                  Next Phase <ChevronRight size={20} />
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
