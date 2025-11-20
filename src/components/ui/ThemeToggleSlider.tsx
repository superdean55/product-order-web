import { useTheme } from "../../context/useTheme";
import { useTranslation } from "react-i18next";

export default function ThemeToggle() {
  const { t } = useTranslation();
  const { theme, toggleTheme, followOS, setFollowOS } = useTheme();

  return (
    <div className="space-y-4">
      <label className="flex items-center justify-between cursor-pointer">
        <span className="text-gray-900 dark:text-gray-100">
          {t("settings.followSystemTheme")}
        </span>
        <input
          type="checkbox"
          checked={followOS}
          onChange={(e) => setFollowOS(e.target.checked)}
        />
      </label>

      <div className="opacity-100">
        <div className="flex items-center justify-between mb-1">
          <span className="text-gray-900 dark:text-gray-100">
            {t("settings.currentTheme")}
          </span>
          <span className="text-gray-900 dark:text-gray-100 capitalize">
            {theme === "dark" ? t("settings.dark") : t("settings.light")}
          </span>
        </div>

        <button
          disabled={followOS}
          onClick={toggleTheme}
          className={`
            relative w-10 h-4 flex items-center rounded-full transition 
            ${
              followOS
                ? "bg-gray-400 cursor-not-allowed"
                : theme === "dark"
                ? "bg-blue-600"
                : "bg-gray-300"
            }
          `}
        >
          <div
            className={`
              absolute w-3 h-3 bg-white rounded-full shadow transform transition
              ${theme === "dark" ? "translate-x-6" : "translate-x-1"}
            `}
          />
        </button>
      </div>
    </div>
  );
}
