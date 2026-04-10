import { AppProvider, Layout, useApp } from './components/Layout';
import { Home } from './components/Home';
import { HistoryMode } from './components/HistoryMode';
import { TalkMode } from './components/TalkMode';
import { MuseumMode } from './components/MuseumMode';
import { MythologyMode } from './components/MythologyMode';
import { ErrorBoundary } from './components/ErrorBoundary';

function AppContent() {
  const { mode } = useApp();

  return (
    <Layout>
      {mode === 'home' && <Home />}
      {mode === 'history' && <HistoryMode />}
      {mode === 'talk' && <TalkMode />}
      {mode === 'museum' && <MuseumMode />}
      {mode === 'mythology' && <MythologyMode />}
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

