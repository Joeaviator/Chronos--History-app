import React, { createContext, useContext, useState, useEffect } from 'react';
import { Theme, AppMode } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Scroll, Map, MessageSquare, Home, History } from 'lucide-react';
import { cn } from '../lib/utils';

interface AppContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  mode: AppMode;
  setMode: (mode: AppMode) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('futuristic');
  const [mode, setMode] = useState<AppMode>('home');

  useEffect(() => {
    document.body.className = `theme-${theme}`;
  }, [theme]);

  return (
    <AppContext.Provider value={{ theme, setTheme, mode, setMode }}>
      {children}
    </AppContext.Provider>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme, setTheme, mode, setMode } = useApp();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const toggleTheme = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setTheme(theme === 'futuristic' ? 'ancient' : 'futuristic');
      setTimeout(() => setIsTransitioning(false), 500);
    }, 500);
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background Atmosphere */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Futuristic Background */}
        <div className={cn(
          "absolute inset-0 transition-opacity duration-1000",
          theme === 'futuristic' ? "opacity-100" : "opacity-0"
        )}>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
          <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-cyan-500/10 blur-[150px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-600/10 blur-[150px] rounded-full animate-pulse" />
          
          {/* Data Streams */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ y: -100, x: Math.random() * 100 + '%' }}
                animate={{ y: '110vh' }}
                transition={{ duration: Math.random() * 5 + 5, repeat: Infinity, ease: "linear", delay: Math.random() * 5 }}
                className="w-[1px] h-32 bg-cyan-400"
              />
            ))}
          </div>
        </div>

        {/* Ancient Background */}
        <div className={cn(
          "absolute inset-0 transition-opacity duration-1000",
          theme === 'ancient' ? "opacity-100" : "opacity-0"
        )}>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-900/5 to-black/40" />
          
          {/* Dust Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(30)].map((_, i) => (
              <div 
                key={i} 
                className="dust-particle" 
                style={{ 
                  left: Math.random() * 100 + '%', 
                  top: Math.random() * 100 + '%',
                  animationDelay: Math.random() * 10 + 's',
                  animationDuration: (Math.random() * 5 + 10) + 's'
                }} 
              />
            ))}
          </div>

          {/* Torch Flickers */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/10 blur-[60px] rounded-full torch-glow" />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-600/10 blur-[80px] rounded-full torch-glow" />
        </div>
      </div>

      {/* Theme Transition Overlay */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 5 }}
            exit={{ opacity: 0, scale: 10 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className={cn(
              "fixed inset-0 z-[100] pointer-events-none flex items-center justify-center",
              theme === 'futuristic' ? "text-cyan-400" : "text-amber-500"
            )}
          >
            <div className={cn(
              "w-64 h-64 rounded-full",
              theme === 'futuristic' ? "ancient-portal" : "portal-vortex"
            )} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Layout Structure */}
      <div className="flex flex-1 relative z-10 overflow-hidden">
        {/* Sidebar Navigation */}
        <motion.aside
          initial={false}
          animate={{ width: isSidebarExpanded ? 280 : 80 }}
          onMouseEnter={() => setIsSidebarExpanded(true)}
          onMouseLeave={() => setIsSidebarExpanded(false)}
          className={cn(
            "h-screen sticky top-0 z-[60] flex flex-col transition-all duration-500 border-r",
            theme === 'futuristic' 
              ? "bg-black/80 border-cyan-500/20 backdrop-blur-xl" 
              : "bg-[#1a140e]/90 border-amber-900/40 backdrop-blur-md"
          )}
        >
          {/* Sidebar Logo Area */}
          <div className="p-6 flex items-center gap-4 overflow-hidden">
            <div 
              className={cn(
                "p-3 rounded-xl shrink-0 transition-all duration-500 cursor-pointer",
                theme === 'futuristic' 
                  ? "hologram-panel text-cyan-400 neon-glow" 
                  : "temple-panel text-amber-500 torch-glow"
              )}
              onClick={() => setMode('home')}
            >
              <History size={24} />
            </div>
            <AnimatePresence>
              {isSidebarExpanded && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="whitespace-nowrap"
                >
                  <h1 className={cn(
                    "text-xl font-black tracking-tighter leading-none",
                    theme === 'futuristic' ? "text-white" : "text-amber-100 font-serif italic"
                  )}>
                    STORYTELLER
                  </h1>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 px-3 py-6 flex flex-col gap-4">
            <SidebarButton icon={<Home size={22} />} active={mode === 'home'} onClick={() => setMode('home')} label="Home" expanded={isSidebarExpanded} />
            <SidebarButton icon={<Map size={22} />} active={mode === 'history'} onClick={() => setMode('history')} label="Expedition" expanded={isSidebarExpanded} />
            <SidebarButton icon={<MessageSquare size={22} />} active={mode === 'talk'} onClick={() => setMode('talk')} label="Comm-Link" expanded={isSidebarExpanded} />
          </div>

          {/* Theme Toggle at Bottom */}
          <div className="p-3 border-t border-white/5">
            <button
              onClick={toggleTheme}
              className={cn(
                "w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-500 overflow-hidden group",
                theme === 'futuristic' 
                  ? "hover:bg-cyan-500/10 text-cyan-400" 
                  : "hover:bg-amber-900/20 text-amber-500"
              )}
            >
              <div className="shrink-0">
                {theme === 'futuristic' ? <Sparkles size={20} /> : <Scroll size={20} />}
              </div>
              <AnimatePresence>
                {isSidebarExpanded && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="text-[10px] font-bold uppercase tracking-[0.2em] whitespace-nowrap"
                  >
                    {theme === 'futuristic' ? 'Ancient Era' : 'Modern Era'}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </motion.aside>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
          <main className="flex-1 relative z-10 overflow-y-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={mode}
                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="h-full"
              >
                {children}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </div>
  );
};

const SidebarButton: React.FC<{ 
  icon: React.ReactNode; 
  active: boolean; 
  onClick: () => void; 
  label: string;
  expanded: boolean;
}> = ({ icon, active, onClick, label, expanded }) => {
  const { theme } = useApp();
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(
        "relative flex items-center gap-4 p-4 rounded-xl transition-all duration-300 group overflow-hidden",
        active 
          ? (theme === 'futuristic' ? "bg-cyan-500 text-black neon-glow" : "bg-amber-600 text-black shadow-inner")
          : (theme === 'futuristic' ? "text-cyan-400/40 hover:text-cyan-400 hover:bg-cyan-500/5" : "text-amber-100/40 hover:text-amber-100 hover:bg-amber-900/10")
      )}
    >
      <div className="shrink-0 relative z-10">
        {icon}
      </div>
      
      <AnimatePresence>
        {expanded && (
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="text-xs font-bold uppercase tracking-[0.2em] whitespace-nowrap relative z-10"
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>

      {!expanded && (
        <span className={cn(
          "absolute left-20 px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap text-[10px] font-bold tracking-[0.2em] uppercase z-[100]",
          theme === 'futuristic' ? "bg-cyan-500 text-black" : "bg-amber-800 text-white"
        )}>
          {label}
        </span>
      )}

      {active && (
        <motion.div
          layoutId="sidebar-active"
          className={cn(
            "absolute inset-0 -z-0",
            theme === 'futuristic' ? "bg-cyan-400" : "bg-amber-500"
          )}
        />
      )}
    </motion.button>
  );
};
