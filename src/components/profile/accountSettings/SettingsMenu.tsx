import { useTranslation } from "react-i18next";
import type { AccountView } from "../../../types/ui.types";
import Button from "../../ui/Button";


interface SettingsMenuProps {
  onSelect: (view: AccountView) => void;
}

export const SettingsMenu = ({ onSelect }: SettingsMenuProps) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-start">
      <div>
        <Button
          onClick={() => onSelect("CHANGE_PASSWORD")}
        >
          {t("profile.actions.settings.manu.changePassword")}
        </Button>
      </div>
      <Button
        onClick={() => onSelect("CHANGE_EMAIL")}
      >
        {t("profile.actions.settings.manu.changeEmail")}
      </Button>
      <Button
        onClick={() => onSelect("DELETE_ACCOUNT")}
      >
        {t("profile.actions.settings.manu.deleteAccount")}
      </Button>
    </div>
  );
};
