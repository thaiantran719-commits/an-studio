import { createContext } from 'react';
import type { Language, ActiveTab } from '@/types/portfolio';

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  currentTimeString: string;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
