import React from 'react';
import { usePortfolio } from '@/hooks/usePortfolio';
import type { ActiveTab } from '@/types/portfolio';

export const CalmHeader: React.FC = () => {
  const { language, setLanguage, activeTab, setActiveTab, currentTimeString } = usePortfolio();

  const navLinks: { id: ActiveTab; label: { vi: string; en: string } }[] = [
    { id: 'work', label: { vi: 'Tác phẩm', en: 'Work' } },
    { id: 'about', label: { vi: 'Thái An', en: 'About' } },
    { id: 'contact', label: { vi: 'Liên hệ', en: 'Contact' } },
  ];

  return (
    <header className="pointer-events-none fixed left-0 top-0 z-50 w-full px-4 py-3 sm:px-6 md:px-12">
      <div className="h-18 pointer-events-auto mx-auto flex max-w-[1200px] items-center justify-between rounded-full bg-surface/90 px-5 py-2 shadow-[-8px_-8px_20px_rgba(255,255,255,0.95),10px_10px_28px_rgba(186,180,166,0.3)] backdrop-blur-xl transition-all duration-300">
        {/* Brand Logo */}
        <div className="flex items-center gap-3 pl-1">
          <button
            onClick={() => setActiveTab('work')}
            className="group flex cursor-pointer flex-col text-left focus:outline-none"
          >
            <div className="flex items-center gap-2">
              <span className="font-serif text-xl font-bold tracking-tight text-primary transition-colors group-hover:text-primary-container sm:text-2xl">
                AN.STUDIO
              </span>
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-primary-container shadow-[0_0_8px_rgba(15,81,50,0.5)]" />
            </div>
            <span className="hidden text-[10px] font-medium uppercase tracking-wider text-on-surface-variant sm:block">
              A softer digital space / Director &amp; Colorist
            </span>
          </button>
        </div>

        {/* Center / Right Nav */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Desktop Navigation Pills */}
          <nav className="hidden items-center gap-1 rounded-full bg-surface-container-low p-1.5 shadow-[inset_3px_3px_6px_rgba(180,174,160,0.35),inset_-3px_-3px_6px_rgba(255,255,255,0.9)] md:flex">
            {navLinks.map(link => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => setActiveTab(link.id)}
                  className={`cursor-pointer rounded-full px-5 py-2 text-xs font-semibold tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'bg-surface font-bold text-primary shadow-[-2px_-2px_6px_rgba(255,255,255,0.95),2px_2px_6px_rgba(186,180,166,0.3)]'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  {link.label[language]}
                </button>
              );
            })}
          </nav>

          {/* Real-time Saigon Clock Pill */}
          <div className="hidden items-center gap-2 rounded-full bg-surface-container-low px-3.5 py-1.5 font-mono text-xs text-on-surface-variant shadow-[inset_2px_2px_4px_rgba(180,174,160,0.3),inset_-2px_-2px_4px_rgba(255,255,255,0.85)] lg:inline-flex">
            <span className="h-1.5 w-1.5 animate-ping rounded-full bg-primary-container" />
            <span>Saigon {currentTimeString || '03:42 PM'}</span>
          </div>

          {/* Language Switcher Pill */}
          <div className="inline-flex items-center rounded-full bg-surface-container-low p-1 shadow-[inset_2px_2px_5px_rgba(180,174,160,0.3),inset_-2px_-2px_5px_rgba(255,255,255,0.85)]">
            <button
              onClick={() => setLanguage('vi')}
              className={`cursor-pointer rounded-full px-2.5 py-1 text-[11px] font-bold tracking-wider transition-all ${
                language === 'vi'
                  ? 'bg-surface text-primary shadow-[-2px_-2px_4px_rgba(255,255,255,0.95),2px_2px_5px_rgba(186,180,166,0.35)]'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              VI
            </button>
            <span className="px-0.5 text-[10px] text-outline-variant">|</span>
            <button
              onClick={() => setLanguage('en')}
              className={`cursor-pointer rounded-full px-2.5 py-1 text-[11px] font-bold tracking-wider transition-all ${
                language === 'en'
                  ? 'bg-surface text-primary shadow-[-2px_-2px_4px_rgba(255,255,255,0.95),2px_2px_5px_rgba(186,180,166,0.35)]'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              EN
            </button>
          </div>

          {/* Creator Avatar Badge */}
          <button
            onClick={() => setActiveTab('about')}
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-primary shadow-[0_4px_10px_rgba(15,81,50,0.35)] transition-transform hover:scale-105 active:scale-95"
            title="Thái An Profile"
          >
            <span className="material-symbols-outlined text-[19px] text-on-primary">person</span>
          </button>
        </div>
      </div>
    </header>
  );
};
