import { useTheme } from "../../context/useTheme";

export default function ThemeToggle() {
  const { theme, toggleTheme, followOS, setFollowOS } = useTheme();

  return (
    <div className="space-y-4">
      <label className="flex items-center justify-between cursor-pointer">
        <span className="text-gray-900 dark:text-gray-100">Follow system theme</span>
        <input
          type="checkbox"
          checked={followOS}
          onChange={(e) => setFollowOS(e.target.checked)}
        />
      </label>

      <div className="opacity-100">
        <div className="flex items-center justify-between mb-1">
          <span className="text-gray-900 dark:text-gray-100">Theme</span>
          <span className="text-gray-900 dark:text-gray-100 capitalize">
            {theme}
          </span>
        </div>

        <button
          disabled={followOS}
          onClick={toggleTheme}
          className={`
            relative w-16 h-8 flex items-center rounded-full transition 
            ${followOS ? "bg-gray-400 cursor-not-allowed" : 
              theme === "dark" ? "bg-blue-600" : "bg-gray-300"}
          `}
        >
          <div
            className={`
              absolute w-7 h-7 bg-white rounded-full shadow transform transition
              ${theme === "dark" ? "translate-x-8" : "translate-x-1"}
            `}
          />
        </button>
      </div>
    </div>
  );
}
