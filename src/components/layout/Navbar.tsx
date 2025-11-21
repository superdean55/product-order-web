import { Link } from "react-router-dom";
import { Settings } from "lucide-react";
import { useTranslation } from "react-i18next";
import SettingsModal from "../settings/SettingsModal";
import { useSettings } from "../../context/useSettings";
import { useScreenSize } from "../../context/useScreenSize";

export default function Navbar() {
  const { t } = useTranslation();
  const { isOpen, closeSettings, toggleSettings } = useSettings();
  const { isLargeScreen } = useScreenSize();

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

          <button onClick={toggleSettings}>
            <Settings className="w-6 h-6 hover:text-blue-400 dark:hover:text-gray-400" />
          </button>
        </div>
      </nav>
      {!isLargeScreen && <SettingsModal isOpen={isOpen} onClose={closeSettings}></SettingsModal>}
    </>
  );
}
