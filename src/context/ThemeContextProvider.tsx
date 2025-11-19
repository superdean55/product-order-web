import { createContext, useState, useEffect, type ReactNode } from "react";
import { getOSTheme, type Theme } from "./themeUtils";

export type ThemeContextType = {
  theme: Theme;
  followOS: boolean;
  toggleTheme: () => void;
  setFollowOS: (val: boolean) => void;
};
/* eslint-disable react-refresh/only-export-components */
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  
  const [followOS, setFollowOS] = useState<boolean>(() => {
    const saved = localStorage.getItem("followOS");
    return saved !== null ? saved === "true" : true;
  });

  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem("theme") as Theme | null;
    return saved ?? getOSTheme();
  });

  
  useEffect(() => {
    if (!followOS) return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const applyOSTheme = (e: MediaQueryList | MediaQueryListEvent) =>
      setTheme(e.matches ? "dark" : "light");

    applyOSTheme(mediaQuery); 
    mediaQuery.addEventListener("change", applyOSTheme);

    return () => mediaQuery.removeEventListener("change", applyOSTheme);
  }, [followOS]);

  
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
    localStorage.setItem("followOS", String(followOS));
  }, [theme, followOS]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <ThemeContext.Provider value={{ theme, followOS, toggleTheme, setFollowOS }}>
      {children}
    </ThemeContext.Provider>
  );
};
