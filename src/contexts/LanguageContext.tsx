import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import { translations, type Language, type Translations } from '@/i18n/translations';

interface LanguageContextType {
  currentLanguage: Language;
  t: Translations;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Default to English
const defaultLanguage: Language = 'en';

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLanguage, setCurrentLanguageState] = useState<Language>(defaultLanguage);

  const setLanguage = useCallback((lang: Language) => {
    setCurrentLanguageState(lang);
    // Update document language for accessibility
    document.documentElement.lang = lang;
  }, []);

  const t = translations[currentLanguage];

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        t,
        setLanguage,
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

export type { Language };
