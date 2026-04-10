import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<any, any> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    const { hasError, error } = this.state;
    const children = (this as any).props.children;

    if (hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white p-8 text-center">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold mb-4 text-red-500">Chronos Error</h1>
            <p className="mb-6 opacity-70">The time portal has collapsed! A temporal anomaly has occurred.</p>
            <div className="bg-black/30 p-4 rounded-xl text-left mb-6 overflow-auto max-h-40">
              <code className="text-xs text-red-400">{error?.message}</code>
            </div>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-cyan-500 text-black font-bold rounded-xl hover:bg-cyan-400 transition-colors"
            >
              Reboot Time Machine
            </button>
          </div>
        </div>
      );
    }

    return children;
  }
}
