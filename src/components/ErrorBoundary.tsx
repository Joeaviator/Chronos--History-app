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
      let displayMessage = error?.message || 'Unknown error';
      let isFirestoreError = false;
      let firestoreData = null;

      try {
        if (error?.message && error.message.startsWith('{')) {
          firestoreData = JSON.parse(error.message);
          if (firestoreData.operationType) {
            isFirestoreError = true;
            displayMessage = `Firestore ${firestoreData.operationType} error: ${firestoreData.error}`;
          }
        }
      } catch (e) {
        // Not a JSON error
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white p-8 text-center">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold mb-4 text-red-500">
              {isFirestoreError ? 'Temporal Sync Error' : 'Chronos Error'}
            </h1>
            <p className="mb-6 opacity-70">
              {isFirestoreError 
                ? 'The historical record could not be synchronized. Please check your permissions.' 
                : 'The time portal has collapsed! A temporal anomaly has occurred.'}
            </p>
            <div className="bg-black/30 p-4 rounded-xl text-left mb-6 overflow-auto max-h-40">
              <code className="text-xs text-red-400">{displayMessage}</code>
              {isFirestoreError && firestoreData && (
                <div className="mt-2 text-[10px] opacity-50">
                  <p>Path: {firestoreData.path}</p>
                  <p>User: {firestoreData.authInfo.userId || 'Not Logged In'}</p>
                </div>
              )}
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
