import React from 'react';
import { usePortfolio } from '@/hooks/usePortfolio';
import type { ActiveTab } from '@/types/portfolio';

export const MobileTabBar: React.FC = () => {
  const { language, activeTab, setActiveTab } = usePortfolio();

  const tabs: {
    id: ActiveTab;
    label: { vi: string; en: string };
    icon: string;
  }[] = [
    { id: 'work', label: { vi: 'Dự án', en: 'Work' }, icon: 'movie_filter' },
    { id: 'about', label: { vi: 'Thái An', en: 'About' }, icon: 'person' },
    { id: 'contact', label: { vi: 'Liên hệ', en: 'Contact' }, icon: 'chat' },
  ];

  return (
    <div className="pointer-events-none fixed bottom-3 left-4 right-4 z-50 md:hidden">
      <div className="pointer-events-auto mx-auto flex max-w-[360px] items-center justify-around rounded-full border border-white/50 bg-surface/90 p-1.5 shadow-[-6px_-6px_16px_rgba(255,255,255,0.95),8px_8px_24px_rgba(186,180,166,0.35)] backdrop-blur-xl">
        {tabs.map(tab => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`flex h-12 min-h-[44px] min-w-[44px] flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                isActive
                  ? 'scale-[1.02] bg-primary-container text-on-primary shadow-neumorph-btn-primary'
                  : 'text-on-surface-variant hover:text-primary active:scale-95'
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">{tab.icon}</span>
              <span>{tab.label[language]}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
