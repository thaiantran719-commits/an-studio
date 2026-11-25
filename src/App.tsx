import React from 'react';
import { LanguageProvider } from '@/context/LanguageProvider';
import { usePortfolio } from '@/hooks/usePortfolio';
import { CalmHeader } from '@/components/layout/CalmHeader';
import { CalmFooter } from '@/components/layout/CalmFooter';
import { MobileTabBar } from '@/components/layout/MobileTabBar';
import { WorkPage } from '@/pages/WorkPage';
import { AboutPage } from '@/pages/AboutPage';
import { ContactPage } from '@/pages/ContactPage';
import { ErrorBoundary } from '@/components/common/ErrorBoundary';

const MainContent: React.FC = () => {
  const { activeTab } = usePortfolio();

  return (
    <div className="flex min-h-screen flex-col bg-surface text-on-surface">
      {/* Fixed Calm Header */}
      <CalmHeader />

      {/* Main Page Body */}
      <main className="w-full flex-grow pb-12 pt-28">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 md:px-12">
          {activeTab === 'work' && <WorkPage />}
          {activeTab === 'about' && <AboutPage />}
          {activeTab === 'contact' && <ContactPage />}
        </div>
      </main>

      {/* Calm Footer */}
      <CalmFooter />

      {/* Mobile Bottom Tab Bar */}
      <MobileTabBar />
    </div>
  );
};

export function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <MainContent />
      </LanguageProvider>
    </ErrorBoundary>
  );
}

export default App;
