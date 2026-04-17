import React, { createContext, useContext, useState, useEffect } from 'react';
import { Theme, AppMode } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Scroll, Clock, MessageSquare, Home, History, LogIn, LogOut, User as UserIcon, Target } from 'lucide-react';
import { cn } from '../lib/utils';
import { auth, db, googleProvider, signInWithPopup, signOut, onAuthStateChanged, User, doc, getDoc, setDoc, OperationType, handleFirestoreError, firebaseConfig } from '../firebase';
import { serverTimestamp } from 'firebase/firestore';
import { syncEcosystemUser } from '../services/ecosystemService';

interface AppContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  mode: AppMode;
  setMode: (mode: AppMode) => void;
  user: User | null;
  loading: boolean;
  isLoggingIn: boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
  authError: string | null;
  setAuthError: (error: string | null) => void;
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
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);

  useEffect(() => {
    document.body.className = `theme-${theme}`;
  }, [theme]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        // Ecosystem Integration
        syncEcosystemUser(currentUser, 'STORYTELLER');

        // Sync user profile to Firestore
        const userRef = doc(db, 'users', currentUser.uid);
        try {
          const userDoc = await getDoc(userRef);
          if (!userDoc.exists()) {
            await setDoc(userRef, {
              uid: currentUser.uid,
              displayName: currentUser.displayName,
              email: currentUser.email,
              photoURL: currentUser.photoURL,
              createdAt: serverTimestamp(),
              lastLogin: serverTimestamp(),
              role: 'user'
            });
          } else {
            await setDoc(userRef, {
              lastLogin: serverTimestamp()
            }, { merge: true });
          }
        } catch (error) {
          console.error("Error syncing user profile:", error);
          // We don't use handleFirestoreError here to avoid blocking the app on initial load if rules are still propagating
        }
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const login = async () => {
    setAuthError(null);
    setIsLoggingIn(true);
    try {
      console.log("Starting Firebase login...");
      await signInWithPopup(auth, googleProvider);
      console.log("Firebase login successful");
    } catch (error: any) {
      if (error.code === 'auth/popup-closed-by-user') {
        console.log("User closed the login popup.");
      } else if (error.code === 'auth/cancelled-popup-request') {
        console.log("Login request was cancelled due to another popup being opened.");
      } else {
        console.error("Login failed:", error);
        setAuthError(error.message || "An unexpected error occurred during login.");
      }
    } finally {
      setIsLoggingIn(false);
    }
  };

  const logout = async () => {
    setAuthError(null);
    try {
      await signOut(auth);
      setMode('home');
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <AppContext.Provider value={{ theme, setTheme, mode, setMode, user, loading, isLoggingIn, login, logout, authError, setAuthError }}>
      {children}
    </AppContext.Provider>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme, setTheme, mode, setMode, user, loading, login, logout } = useApp();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollY(e.currentTarget.scrollTop);
  };

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
      <motion.div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{ y: scrollY * -0.1 }} // Parallax effect
      >
        {/* Futuristic Background */}
        <div className={cn(
          "absolute inset-0 transition-opacity duration-1000",
          theme === 'futuristic' ? "opacity-100" : "opacity-0"
        )}>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-cyan-500/10 blur-[150px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-600/10 blur-[150px] rounded-full animate-pulse" />
          
          {/* Data Streams & Holographic Blocks */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ y: -100, x: Math.random() * 100 + '%' }}
                animate={{ y: '110vh' }}
                transition={{ duration: Math.random() * 5 + 5, repeat: Infinity, ease: "linear", delay: Math.random() * 5 }}
                className="w-[1px] h-32 bg-cyan-400/50"
              />
            ))}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`block-${i}`}
                animate={{ 
                  y: [0, -20, 0],
                  opacity: [0.1, 0.3, 0.1],
                  rotate: [i * 15, i * 15 + 5, i * 15]
                }}
                transition={{ duration: 4 + i, repeat: Infinity }}
                className="absolute w-32 h-32 border border-cyan-500/20 rounded-lg flex items-center justify-center"
                style={{ 
                  left: (10 + i * 12) + '%', 
                  top: (5 + i * 15) + '%',
                }}
              >
                <div className="w-16 h-16 border border-cyan-500/10 rounded-full animate-ping" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Ancient Background */}
        <div className={cn(
          "absolute inset-0 transition-opacity duration-1000",
          theme === 'ancient' ? "opacity-100" : "opacity-0"
        )}>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-900/5 to-black/60" />
          
          {/* Pillars & Statues (Abstract) */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-amber-900/40 to-transparent border-r-4 border-amber-900/30 flex flex-col justify-around items-center py-20">
              {[...Array(5)].map((_, i) => <div key={i} className="w-16 h-32 bg-amber-900/20 rounded-t-full border-2 border-amber-900/30" />)}
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-amber-900/40 to-transparent border-l-4 border-amber-900/30 flex flex-col justify-around items-center py-20">
              {[...Array(5)].map((_, i) => <div key={i} className="w-16 h-32 bg-amber-900/20 rounded-t-full border-2 border-amber-900/30" />)}
            </div>
            
            {/* Floating Runes */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={`rune-${i}`}
                animate={{ 
                  opacity: [0.1, 0.5, 0.1],
                  y: [0, -20, 0],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ duration: 6 + i, repeat: Infinity }}
                className="absolute text-amber-500/20 font-serif text-5xl rune-glow"
                style={{ 
                  left: (5 + Math.random() * 90) + '%', 
                  top: (5 + Math.random() * 90) + '%' 
                }}
              >
                {['ᚠ', 'ᚢ', 'ᚦ', 'ᚨ', 'ᚱ', 'ᚲ', 'ᚷ', 'ᚹ', 'ᚺ', 'ᚻ', 'ᚼ'][i % 11]}
              </motion.div>
            ))}
          </div>

          {/* Dust Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(40)].map((_, i) => (
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
          <div className="absolute top-20 left-10 w-48 h-48 bg-orange-500/10 blur-[80px] rounded-full torch-glow" />
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-yellow-600/10 blur-[100px] rounded-full torch-glow" />
          <div className="absolute top-1/2 right-0 w-32 h-96 bg-orange-600/5 blur-[90px] rounded-full torch-glow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-amber-900/5 blur-[120px] rounded-full" />
          
          {/* Moving Shadows */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`shadow-${i}`}
                animate={{ 
                  x: [-100, 100, -100],
                  opacity: [0.1, 0.3, 0.1]
                }}
                transition={{ duration: 15 + i * 5, repeat: Infinity, ease: "linear" }}
                className="absolute w-[40vw] h-full bg-black/40 blur-[100px]"
                style={{ left: (i * 30) + '%' }}
              />
            ))}
          </div>
        </div>
      </motion.div>

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
          <div className="px-3 py-12 flex flex-col gap-4">
            <SidebarButton icon={<Home size={22} />} active={mode === 'home'} onClick={() => setMode('home')} label="Home" expanded={isSidebarExpanded} />
            <SidebarButton icon={<Clock size={22} />} active={mode === 'history'} onClick={() => setMode('history')} label="Timeline" expanded={isSidebarExpanded} />
            <SidebarButton icon={<Target size={22} />} active={mode === 'mission'} onClick={() => setMode('mission')} label="Missions" expanded={isSidebarExpanded} />
            <SidebarButton icon={<MessageSquare size={22} />} active={mode === 'talk'} onClick={() => setMode('talk')} label="Comm-Link" expanded={isSidebarExpanded} />
          </div>

          <div className="flex-1" />

          {/* User Profile / Auth */}
          <div className="p-3 border-t border-white/5">
            {user ? (
              <div className="flex flex-col gap-2">
                <div className={cn(
                  "flex items-center gap-4 p-3 rounded-xl transition-all duration-300",
                  theme === 'futuristic' ? "bg-cyan-500/10" : "bg-amber-900/20"
                )}>
                  <img 
                    src={user.photoURL || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.uid}`} 
                    alt="User" 
                    className="w-10 h-10 rounded-full border-2 border-current"
                  />
                  <AnimatePresence>
                    {isSidebarExpanded && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className="flex-1 min-w-0"
                      >
                        <p className="text-xs font-bold truncate">{user.displayName}</p>
                        <p className="text-[10px] opacity-50 truncate">{user.email}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <SidebarButton 
                  icon={<LogOut size={22} />} 
                  active={false} 
                  onClick={logout} 
                  label="Sign Out" 
                  expanded={isSidebarExpanded} 
                />
              </div>
            ) : (
              <SidebarButton 
                icon={<LogIn size={22} />} 
                active={false} 
                onClick={login} 
                label="Sign In" 
                expanded={isSidebarExpanded} 
              />
            )}
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
        <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden relative">
          <main 
            className="flex-1 relative z-10 overflow-y-auto scroll-smooth"
            onScroll={handleScroll}
          >
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

          {/* Bottom Gradient Fade (Visual Hint for Scroll) */}
          <div className={cn(
            "absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-20 transition-opacity duration-500",
            scrollY > 100 ? "opacity-0" : "opacity-100",
            theme === 'futuristic' 
              ? "bg-gradient-to-t from-black to-transparent" 
              : "bg-gradient-to-t from-[#1a140e] to-transparent"
          )} />
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
        "relative flex items-center gap-4 p-4 rounded-xl transition-all duration-300 group overflow-hidden mx-2",
        active 
          ? (theme === 'futuristic' ? "bg-cyan-500 text-black neon-glow" : "bg-amber-600 text-black shadow-lg")
          : (theme === 'futuristic' ? "text-cyan-400/40 hover:text-cyan-400 hover:bg-cyan-500/5" : "text-amber-100/40 hover:text-amber-100 hover:bg-amber-900/10")
      )}
    >
      {/* Rectangular Tab Indicator */}
      {active && (
        <motion.div
          layoutId="sidebar-active-indicator"
          className={cn(
            "absolute left-0 top-0 bottom-0 w-1",
            theme === 'futuristic' ? "bg-white" : "bg-amber-200"
          )}
        />
      )}
      
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
    </motion.button>
  );
};
