import React, { useState, useEffect } from 'react';
import type { Language, ActiveTab } from '@/types/portfolio';
import { LanguageContext } from './languageContextDef';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('an_studio_lang');
      if (saved === 'vi' || saved === 'en') return saved;
    }
    return 'vi';
  });

  const [activeTab, setActiveTab] = useState<ActiveTab>('work');
  const [currentTimeString, setCurrentTimeString] = useState<string>('');

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('an_studio_lang', lang);
    }
  };

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // GMT+7 time
      const timeStr = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Ho_Chi_Minh',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });
      setCurrentTimeString(timeStr);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        activeTab,
        setActiveTab,
        currentTimeString,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
