import { useTheme } from "../../context/useTheme";
import { useTranslation } from "react-i18next";
import { TextColor, TextColorMap } from "../../styles/colors";

export default function ThemeToggle() {
  const { t } = useTranslation();
  const { theme, toggleTheme, followOS, setFollowOS } = useTheme();

  return (
    <div className={`flex flex-col gap-2 ${TextColorMap[TextColor.TEXT]}`}>
      <label className="flex items-center justify-between cursor-pointer">
        <span>{t("settings.followSystemTheme")}</span>
        <input
          type="checkbox"
          checked={followOS}
          onChange={(e) => setFollowOS(e.target.checked)}
        />
      </label>

      <div>
        <div className="flex items-center justify-between mb-1">
          <span>{t("settings.currentTheme")}</span>
          <span>
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
                ? "bg-gray-500 cursor-not-allowed"
                : theme === "dark"
                ? "bg-gray-400"
                : "bg-blue-600"
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
