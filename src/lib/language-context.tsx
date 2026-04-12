"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { translations, type Language, type Content } from "./content";

type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
  content: Content;
};

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  toggleLanguage: () => {},
  content: translations.en,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("morra-lang") as Language | null;
    if (saved === "en" || saved === "zh") {
      setLanguage(saved);
    }
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => {
      const next = prev === "en" ? "zh" : "en";
      localStorage.setItem("morra-lang", next);
      return next;
    });
  }, []);

  return (
    <LanguageContext.Provider
      value={{ language, toggleLanguage, content: translations[language] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useContent() {
  return useContext(LanguageContext).content;
}

export function useLanguage() {
  const { language, toggleLanguage } = useContext(LanguageContext);
  return { language, toggleLanguage };
}
