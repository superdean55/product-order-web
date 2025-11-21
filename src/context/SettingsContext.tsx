import { createContext, useState, type ReactNode } from "react";

type SettingsContextType = {
  isOpen: boolean;
  toggleSettings: () => void;
  openSettings: () => void;
  closeSettings: () => void;
};

// eslint-disable-next-line react-refresh/only-export-components
export const SettingsContext = createContext<SettingsContextType | undefined>(
  undefined
);

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setisOpen] = useState(false);

  const toggleSettings = () => setisOpen((prev) => !prev);
  const openSettings = () => setisOpen(true);
  const closeSettings = () => setisOpen(false);

  return (
    <SettingsContext.Provider
      value={{
        isOpen: isOpen,
        toggleSettings,
        openSettings,
        closeSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
