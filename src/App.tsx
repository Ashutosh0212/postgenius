import React, { useState } from 'react';
import { Sidebar } from './components/sidebar';
import { Dashboard } from './components/dashboard';
import { ApprovalQueue } from './components/approval-queue';
import { Calendar } from './components/calendar';
import { Analytics } from './components/analytics';
import { Settings } from './components/settings';
import { Compose } from './components/compose';
import { Landing } from './components/landing';
import { Login } from './components/login';

type PageType = 'dashboard' | 'queue' | 'calendar' | 'analytics' | 'compose' | 'settings';
type AppState = 'landing' | 'login' | 'authenticated';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('dashboard');
  const [appState, setAppState] = useState<AppState>('landing');
  const [isSignUp, setIsSignUp] = useState(false);

  const handleLogin = () => {
    setAppState('authenticated');
  };

  const handleGoToLogin = (signUp: boolean = false) => {
    setIsSignUp(signUp);
    setAppState('login');
  };

  const handleBackToLanding = () => {
    setAppState('landing');
  };

  const handleLogout = () => {
    setAppState('landing');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'queue':
        return <ApprovalQueue />;
      case 'calendar':
        return <Calendar />;
      case 'analytics':
        return <Analytics />;
      case 'compose':
        return <Compose />;
      case 'settings':
        return <Settings onLogout={handleLogout} />;
      default:
        return <Dashboard />;
    }
  };

  // Show landing page
  if (appState === 'landing') {
    return <Landing onLogin={handleGoToLogin} />;
  }

  // Show login page
  if (appState === 'login') {
    return <Login onLogin={handleLogin} onBack={handleBackToLanding} isSignUp={isSignUp} />;
  }

  // Show dashboard if authenticated
  return (
    <div className="flex h-screen bg-background">
      <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} onLogout={handleLogout} />
      <main className="flex-1 overflow-hidden">
        {renderPage()}
      </main>
    </div>
  );
}