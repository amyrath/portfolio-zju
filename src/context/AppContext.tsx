'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'fr';
export type Theme = 'light' | 'dark';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  isDark: boolean;
  isCvModalOpen: boolean;
  setIsCvModalOpen: (open: boolean) => void;
  openCvModal: () => void;
  closeCvModal: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  // Default language is English (crucial for ZJU committee)
  const [language, setLanguageState] = useState<Language>('en');
  // Default theme is Day/Light (Butter Yellow background)
  const [theme, setThemeState] = useState<Theme>('light');
  // Global CV Modal viewer state
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  // Initialize from localStorage safely on mount
  useEffect(() => {
    try {
      const savedLang = localStorage.getItem('app_language') as Language;
      if (savedLang === 'en' || savedLang === 'fr') {
        setLanguageState(savedLang);
      }
      const savedTheme = localStorage.getItem('app_theme') as Theme;
      if (savedTheme === 'light' || savedTheme === 'dark') {
        setThemeState(savedTheme);
        if (typeof document !== 'undefined') {
          if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        }
      }
    } catch {
      // LocalStorage might be restricted
    }
  }, []);

  // Sync dark class on <html> and lang attribute
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const root = document.documentElement;
      if (theme === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
      root.setAttribute('lang', language);
    }
  }, [theme, language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('app_language', lang);
    } catch {}
  };

  const toggleLanguage = () => {
    const next = language === 'en' ? 'fr' : 'en';
    setLanguage(next);
  };

  const setTheme = (nextTheme: Theme) => {
    setThemeState(nextTheme);
    if (typeof document !== 'undefined') {
      if (nextTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
    try {
      localStorage.setItem('app_theme', nextTheme);
    } catch {}
  };

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
  };

  const openCvModal = () => setIsCvModalOpen(true);
  const closeCvModal = () => setIsCvModalOpen(false);

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        theme,
        setTheme,
        toggleTheme,
        isDark: theme === 'dark',
        isCvModalOpen,
        setIsCvModalOpen,
        openCvModal,
        closeCvModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
