import { useTranslation } from "react-i18next";
import type { AccountView } from "../../../types/ui.types";

interface SettingsMenuProps {
  onSelect: (view: AccountView) => void;
}

export const SettingsMenu = ({ onSelect }: SettingsMenuProps) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-2 items-start">
      <div>
        <button
          className="px-2 rounded-lg text-gray-400 hover:text-gray-300 hover:bg-gray-500 cursor-pointer"
          onClick={() => onSelect("CHANGE_PASSWORD")}
        >
          {t("profile.actions.settings.manu.changePassword")}
        </button>
      </div>
      <button
        className="px-2 rounded-lg text-gray-400 hover:text-gray-300 hover:bg-gray-500 cursor-pointer"
        onClick={() => onSelect("DELETE_ACCOUNT")}
      >
        {t("profile.actions.settings.manu.deleteAccount")}
      </button>
    </div>
  );
};
