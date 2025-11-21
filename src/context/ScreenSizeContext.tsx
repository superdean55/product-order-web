import { createContext, useState, useEffect, type ReactNode } from "react";

type ScreenSizeContextType = {
  isLargeScreen: boolean;
};

// eslint-disable-next-line react-refresh/only-export-components
export const ScreenSizeContext = createContext<ScreenSizeContextType | undefined>(undefined);

export const ScreenSizeProvider = ({ children }: { children: ReactNode }) => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ScreenSizeContext.Provider value={{ isLargeScreen }}>
      {children}
    </ScreenSizeContext.Provider>
  );
};


