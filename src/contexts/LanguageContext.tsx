import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import { translations, type Language, type Translations } from '@/i18n/translations';

export type { Language } from '@/i18n/translations';

interface LanguageContextType {
  currentLanguage: Language;
  t: Translations;
  setLanguage: (lang: Language) => void;
  getLanguagePath: (lang: Language) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Get initial language from URL or default to English
const getInitialLanguage = (): Language => {
  if (typeof window === 'undefined') return 'en';
  const path = window.location.pathname;
  const langMatch = path.match(/^\/(en|es|ru|ko|fr|uz)(?:\/|$)/);
  return (langMatch?.[1] as Language) || 'en';
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(getInitialLanguage());

  const setLanguage = useCallback((lang: Language) => {
    setCurrentLanguage(lang);
    // Update URL without page reload
    const newPath = lang === 'en' ? '/' : `/${lang}`;
    window.history.pushState({}, '', newPath);
    // Update document language
    document.documentElement.lang = lang;
  }, []);

  const getLanguagePath = useCallback((lang: Language) => {
    return lang === 'en' ? '/' : `/${lang}`;
  }, []);

  const t = translations[currentLanguage];

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        t,
        setLanguage,
        getLanguagePath,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
