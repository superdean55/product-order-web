import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./i18n";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./context/ThemeContextProvider.tsx";
import { LanguageProvider } from "./context/LanguageContext.tsx";
import { ScreenSizeProvider } from "./context/ScreenSizeContext.tsx";
import { SettingsProvider } from "./context/SettingsContext.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <ScreenSizeProvider>
          <SettingsProvider>
            <QueryClientProvider client={queryClient}>
              <App />
            </QueryClientProvider>
          </SettingsProvider>
        </ScreenSizeProvider>
      </LanguageProvider>
    </ThemeProvider>
  </StrictMode>
);
