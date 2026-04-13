import { AppProvider, Layout, useApp } from './components/Layout';
import { Home } from './components/Home';
import { HistoryMode } from './components/HistoryMode';
import { TalkMode } from './components/TalkMode';
import { MuseumMode } from './components/MuseumMode';
import { MythologyMode } from './components/MythologyMode';
import { MissionMode } from './components/MissionMode';
import { LandingPage } from './components/LandingPage';
import { ErrorBoundary } from './components/ErrorBoundary';
import { cn } from './lib/utils';

function AppContent() {
  const { mode, user, loading, theme } = useApp();

  if (loading) {
    return (
      <div className={cn(
        "min-h-screen flex items-center justify-center",
        theme === 'futuristic' ? "bg-black text-cyan-400" : "bg-[#1a140e] text-amber-500"
      )}>
        <div className="flex flex-col items-center gap-4">
          <div className={cn(
            "w-16 h-16 border-4 border-t-transparent rounded-full animate-spin",
            theme === 'futuristic' ? "border-cyan-500" : "border-amber-600"
          )} />
          <p className="font-bold tracking-widest uppercase animate-pulse">Initializing Chronos...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <LandingPage />;
  }

  return (
    <Layout>
      {mode === 'home' && <Home />}
      {mode === 'history' && <HistoryMode />}
      {mode === 'talk' && <TalkMode />}
      {mode === 'museum' && <MuseumMode />}
      {mode === 'mythology' && <MythologyMode />}
      {mode === 'mission' && <MissionMode />}
    </Layout>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <AppProvider>
        <AppContent />
      </AppProvider>
    </ErrorBoundary>
  );
}

