// src/components/settings/Settings.tsx
import { useTranslation } from "react-i18next";
import ThemeToggle from "../ui/ThemeToggleSlider";
import LanguageSwitcher from "../ui/LanguageSwitcher";

export default function Settings() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-4 p-4">
      <div>
        <h3 className="font-medium mb-2">{t("settings.themeLabel")}</h3>
        <ThemeToggle />
      </div>

      <div>
        <h3 className="font-medium mb-2">{t("settings.language")}</h3>
        <LanguageSwitcher />
      </div>
    </div>
  );
}
