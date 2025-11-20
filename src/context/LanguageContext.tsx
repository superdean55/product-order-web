import { createContext, useState, type ReactNode, useEffect } from "react";
import i18n from "../i18n";

type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
};

// eslint-disable-next-line react-refresh/only-export-components
export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<string>(() => {
    const saved = localStorage.getItem("language");
    return saved ?? "en";
  });

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  const setLanguage = (lang: string) => {
    setLanguageState(lang);
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
