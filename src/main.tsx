import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./i18n";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./context/ThemeContextProvider.tsx";
import { LanguageProvider } from "./context/LanguageContext.tsx";
import { ScreenSizeProvider } from "./context/ScreenSizeContext.tsx";
import { SettingsProvider } from "./context/SettingsContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <ScreenSizeProvider>
          <SettingsProvider>
            <App />
          </SettingsProvider>
        </ScreenSizeProvider>
      </LanguageProvider>
    </ThemeProvider>
  </StrictMode>
);
