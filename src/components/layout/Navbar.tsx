import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../ui/Modal";
import { Settings } from "lucide-react";
import ThemeToggle from "../ui/ThemeToggleSlider";
import LanguageSwitcher from "../ui/LanguageSwitcher";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t } = useTranslation();
  const [settingsOpen, setSettingsOpen] = useState(false);
  return (
    <>
      <nav className="fixed top-0 left-0 z-50 w-full bg-gray-500 dark:bg-gray-900 text-white dark:text-gray-100 px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">ProductOrder</div>

        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="hover:text-blue-400 dark:hover:text-gray-400"
          >
            {t("login.title")}
          </Link>
          <Link
            to="/register"
            className=" hover:text-blue-400 dark:hover:text-gray-400"
          >
            {t("register.title")}
          </Link>

          <button onClick={() => setSettingsOpen(true)}>
            <Settings className="w-6 h-6 hover:text-blue-400 dark:hover:text-gray-400" />
          </button>
        </div>
      </nav>
      <Modal
        isOpen={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        title={t("settings.title")}
      >
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="font-medium mb-2">{t("settings.themeLabel")}</h3>
            <ThemeToggle />
          </div>
          <div>
            <h3 className="font-medium mb-2">{t("settings.language")}</h3>
            <LanguageSwitcher />
          </div>
        </div>
      </Modal>
    </>
  );
}
