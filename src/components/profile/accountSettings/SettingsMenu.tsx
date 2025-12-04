import { useTranslation } from "react-i18next";
import type { AccountView } from "../../../types/ui.types";
import { Menu } from "../../ui/Menu";
import { Key, LogOut, Mail, Settings, UserX } from "lucide-react";
import { useLogoutMutation } from "../../../hooks/queries/useAuthQuery";

interface SettingsMenuProps {
  onSelect: (view: AccountView) => void;
}

export const SettingsMenu = ({ onSelect }: SettingsMenuProps) => {
  const { t } = useTranslation();
   
  const { mutate: logoutMutate, isPending: isLoggingOut } = useLogoutMutation();
  const handleLogout = () => {
    logoutMutate();
  };
  const handleChangeEmail = () => {
    onSelect("CHANGE_EMAIL");
  };

  const handleChangePassword = () => {
    onSelect("CHANGE_PASSWORD");
  };

  const handleDeleteAccount = () => {
    onSelect("DELETE_ACCOUNT");
  };

  const settingsMenuItems = [
    {
      label: t("profile.actions.settings.manu.changeEmail"),
      icon: Mail,
      action: handleChangeEmail,
    },
    {
      label: t("profile.actions.settings.manu.changePassword"),
      icon: Key,
      action: handleChangePassword,
    },
    {
      label: t("profile.actions.settings.manu.deleteAccount"),
      icon: UserX,
      action: handleDeleteAccount,
    },
    {
      label: isLoggingOut
        ? t("profile.actions.loggingOut")
        : t("profile.actions.logout"),
      icon: LogOut,
      action: handleLogout,
    },
  ];

  return <Menu items={settingsMenuItems} Icon={Settings} isLoading={isLoggingOut} />;
};
