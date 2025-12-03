import Button from "../../components/ui/Button";
import { useLogoutMutation } from "../../hooks/queries/useAuthQuery";
import { useTranslation } from "react-i18next";
import { ProfileSection } from "../../components/profile/ProfileSection";
import type { AccountView } from "../../types/ui.types";
import { SettingsMenu } from "./accountSettings/SettingsMenu";
import { PersonalInformation } from "./PersonalInformation";
import type { User } from "../../api/types/user";
import { UserImageUploader } from "./userImage/UserImageUploader";

interface MainAccountScreenProps {
  user: User;
  onSelect: (view: AccountView) => void;
  isSettingsSectionOpen: boolean;
  toggleSection: () => void;
}

export const MainAccountScreen = ({
  user,
  onSelect,
  isSettingsSectionOpen,
  toggleSection,
}: MainAccountScreenProps) => {
  const { mutate: logoutMutate, isPending: isLoggingOut } = useLogoutMutation();
  const { t } = useTranslation();
  
  if (!user) return null;

  const handleLogout = () => {
    logoutMutate();
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <UserImageUploader user={user} />
      <PersonalInformation user={user} onSelect={onSelect} />
      <ProfileSection
        label={t("profile.sections.accountSettings")}
        isSectionOpen={isSettingsSectionOpen}
        toggleIsSectionOpen={toggleSection}
      >
        <SettingsMenu onSelect={onSelect} />
      </ProfileSection>
      <div className="ml-auto px-2">
        <Button
          className="bg-blue-500 dark:bg-gray-600 hover:bg-blue-700 dark:hover:bg-gray-500"
          onClick={handleLogout}
          disabled={isLoggingOut}
        >
          {isLoggingOut
            ? t("profile.actions.loggingOut")
            : t("profile.actions.logout")}
        </Button>
      </div>
    </div>
  );
};
